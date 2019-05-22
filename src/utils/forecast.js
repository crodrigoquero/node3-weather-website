const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/221554f2053329f50c6025fb137a19d6/' + latitude + ',' + longitude + '?units=si'

    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('unable to connect to weather service', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            console.log(response.body.daily.data[0])
            callback(undefined, response.body.daily.data[0].summary + ' It is corrently ' + response.body.currently.temperature + ' dgrees out. This hight today is ' + response.body.daily.data[0].temperatureHigh + ' with a low of ' + response.body.daily.data[0].temperatureLow  + '. There is a '+ response.body.currently.precipProbability + '%  chance of rain.')
        }


    }) 

}


module.exports = forecast 