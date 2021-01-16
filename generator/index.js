let fs = require('fs')

let json = {"name":"hola","type":"prueba"}
for (let index = 0; index < 10; index++) {
    fs.writeFileSync(`./files/${index}.json`,JSON.stringify(json))
    
}