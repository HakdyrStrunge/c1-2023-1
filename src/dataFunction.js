const personasData = require('./dataset/users_info.json')
const {error_message, not_found_message, input_error} = require('./responseMessages.js')


exports.SearchByName = (name, response) =>{
    name= name.loLowerCase()
    let datos= []
    personasData.forEach(element => {
        const nombre= element.name.toLowerCase.split(" ").map(str => str.trim());
        console.log(nombre)
        if ((name == nombre[0] || name == nombre[1] || name == element.name.toLowerCase) && element.isActive == True){
            //aqui guardaremos los datos mas utiles (nombre, estado y edad)
            datos.push({
                "Nombre": element.name,
                "Edad": element.age,
                "Estado": element.isActive
            })
        }
        else{
            response.status(200).json(not_found_message)
        }
    });
    datos.sort((a, b) => (a.age < b.age) ? 1 : -1)
    response.status(200).json(datos)
}

exports.SearchGeneral = (edad, name, genero, compania, estado, response) => {
    name = name.toLowerCase()
    genero = genero.toLowerCase()
    compania = compania.toLowerCase()
    if (genero == "female" || genero == "male" || genero == "hombre" || genero == "mujer"){ //si la entrada tiene alguno de estos generos puede buscar
        let datos= []
        personasData.forEach(element => {
            const nombre= element.name.toLowerCase.split(" ").map(str => str.trim());
            if (name == nombre[0] || name == nombre[1] || name == element.name.toLowerCase){
                if (edad == element.age && genero == element.gender && compania == element.company.toLowerCase && estado == element.isActive){
                    datos.push({
                        "Nombre": element.name,
                        "Edad": element.age,
                        "Genero": element.gender,
                        "Compañia": element.company,
                        "Estado": element.isActive
                    })
                }
                else{
                    response.status(200).json(not_found_message)
                }
            }
            else{
                response.status(200).json(not_found_message)
            }
        })
    }
    else{
        response.status(500).json(input_error) //error procesamiento
    }
}

