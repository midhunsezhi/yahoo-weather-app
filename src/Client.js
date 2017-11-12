function getWeatherDataByCity(city, success) {
    return _fetchWithParams('/v1/public/yql', {
        queryParams: {
            q: _buildYqlQuery(city),
            format: 'json',
            env: 'store://datatables.org/alltableswithkeys'
        }
    }).then(_checkStatus)
    .then(_parseJSON)
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

    console.log(url);

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
  
export {getWeatherDataByCity};
