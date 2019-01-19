const xml2js = require('xml2js')
const parser = require('xml2js').parseString
const xmlParser = new xml2js.Parser({explictArray: false, ignoreAttrs: true})

class Parse2Data {
    static parseMessage (xml) {
        let result = null
        xmlParser.parseString(xml, (err, r) => {
            result = r // 假如 <asd>bbb</asd> ---> {'asd': 'bbb'}
        })
        return result
    }
}

module.exports = Parse2Data
