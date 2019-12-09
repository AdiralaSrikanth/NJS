const express = require('express')
const path = require('path')
const hbs = require('hbs')
const forecast = require('./utils/forecast')
const geoCode = require('./utils/geocode')

const app = express()

app.set('view engine', 'hbs')

const publicDirectoryPath = path.join(__dirname, '../public')
const partialsPath = path.join(__dirname, '../views/partials')

app.use(express.static(publicDirectoryPath))
hbs.registerPartials(partialsPath)

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Srikanth'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Srikanth'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        message: 'Help message',
        name: 'Srikanth'
    })
})

app.get('/weather', (req, res) => {
    const location = req.query.address
    if (!location) {
        return res.send({
            error: 'You must provide an address'
        })
    }
    geoCode(location, (error, { latitude, longitude, placeName } = {}) => {
        if (error) {
            return res.send({error })
        }
        forecast(latitude, longitude, (error, foreCastData) => {
            if (error) {
                return res.send({error: error })
            }
            res.send({
                location: placeName,
                forecast: foreCastData,
                address: req.query.address
            })
        })
    })
})

app.get('/help/*', (req, res) => {
    res.render('pagenotfound', {
        title: '404',
        message: 'Help article not found',
        name: 'Srikanth'
    })
})

app.get('*', (req, res) => {
    res.render('pagenotfound', {
        title: '404',
        message: 'Page Not Found',
        name: 'Srikanth'
    })
})

app.listen(3000, () => {
    console.log('Listening at port 3000')
})