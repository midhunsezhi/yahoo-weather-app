import moment from 'moment';

function getWeatherDataByCity(city, success) {
    return _fetchWithParams('/v1/public/yql', {
        queryParams: {
            q: _buildYqlQuery(city),
            format: 'json',
            env: 'store://datatables.org/alltableswithkeys'
        }
    }).then(_checkStatus)
    .then(_parseJSON)
    .then(_formatData)
    .then(success);
}

function _fetchWithParams(url, options={}) {
    options = {
        headers: {
            Accept: 'application/json',
        },
        ...options,
    };

    if(options.queryParams) {
        url += (url.indexOf('?') === -1 ? '?' : '&') + _queryParams(options.queryParams);
        delete options.queryParams;
    }

    return fetch(url, options);
}

function _queryParams(params) {
    return Object.keys(params)
        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
        .join('&');
}

function _buildYqlQuery(city) {
    return 'select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + city + '")';
}

function _checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
    return response;
    } else {
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error);
    throw error;
    }
}

function _parseJSON(response) {
    return response.json();
}

function _formatData(response) {
    let data, cleanData, forecast;

    if(response.query && response.query.count) {
        cleanData = {};
        data = response.query.results.channel;
        forecast = data.item.forecast;

        cleanData.location = [data.location.city, data.location.region, data.location.country].join(', ');
        cleanData.today = _todayWeather(data.item.condition, data.astronomy, forecast[0]);
        cleanData.forecast = _forecastWeather(forecast.slice(1));
    }

    return cleanData;
}

function _todayWeather(condition, astronomy, currentDayForecast) {
    return {
        date: moment().format('dddd, MMMM Do YYYY'),
        temp: condition.temp,
        description: condition.text,
        sunrise: astronomy.sunrise,
        sunset: astronomy.sunset,
        high: currentDayForecast.high,
        low: currentDayForecast.low
    }
}

function _forecastWeather(forecast) {
    return forecast.map((thisDay) => (
        {
            date: moment(thisDay.date, 'DD MMM YYYY').format('dddd, MMMM Do YYYY'),
            high: thisDay.high,
            low: thisDay.low,
            description: thisDay.text
        }
    ));
}
  
export {getWeatherDataByCity};
