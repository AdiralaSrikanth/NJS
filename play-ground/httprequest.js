const https = require('https')

const url = 'https://api.darksky.net/forecast/0768fa5ca7bdda981b65286834cc74da/40,-70'

const request = https.request(url, (response)=>{ //will not get complete response as http data is streamed in chunks
    let data = ''
    response.on('data', (chunk)=>{
        data = data + chunk.toString()
    })
    response.on('end', ()=>{
        const forecast = JSON.parse(data)
        console.log(forecast)

    })
})

request.on('error', (error)=>{
    console.log('An error', error)
})


request.end()