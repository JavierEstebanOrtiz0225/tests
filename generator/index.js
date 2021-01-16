let fs = require('fs');


function loadMicroservices(string=''){

    return string.split('-');

}

loadMicroservices(process.env.MICROSERVICES).forEach((microservice,index)=>{
    let json = {"name":microservice,"position":index}
    fs.writeFileSync(`./files/${microservice}.json`,JSON.stringify(json))

})