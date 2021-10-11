const mongo = require('mongodb').MongoClient
const fs = require('fs')

const url = 'mongodb://localhost:27017'
const dbName = 'alko'

mongo.connect(url, (err, client) => {
    if (err) {
        console.error(err)
        return
    }
    console.log('Connected succesfully to server')
    const db = client.db(dbName)

    const collection = db.collection('alkoData')

    const csv = fs.readFileSync('./data/alko.csv').toString()

    const lines = csv.split('\n')
    let first = true
    lines.forEach(line => {
        if (first) {
            first = false
            return
        }
        if (line === '') return
        line = line.split(';')
        if (!line[13] || line[13] === '' || line[13] === 0) return // Skip if no alcohol or null

        collection.insertOne({
            num: line[0],
            name: line[1] || 'NoName',
            maker: line[2] || 'NoMaker',
            bottlesize: line[3] || 0,
            price: line[4] || 0,
            litreprice: line[5] || 0,
            type: line[6] || 'None',
            subtype: line[7] || 'None',
            beertype: line[8] || 'None',
            country: line[9] || 'NoCountry',
            area: line[10] || 'None',
            year: line[11] || null,
            character: line[12] || 'None',
            alkopros: line[13],
            energy: line[14] || 0
        }, (error, item) => {
            if (error) {
                console.error(error)
                return
            }
            console.log(item)
        })
    })
})