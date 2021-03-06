const request = require('request')

const geoCode = (location, callback) => {
    const geoCodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(location) + ".json?access_token=pk.eyJ1Ijoic3Jpa2FudGgwMyIsImEiOiJjazNrNzl0eDYwODVkM2dubWYwMmgydW9kIn0.61jkvdar3BPvG-v8I8MPmg&limit=1"
    
    request({ url: geoCodeUrl, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
           
            callback(undefined, {
                placeName: body.features[0].place_name,
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0]
            })
        }
    })
}
module.exports = geoCode
