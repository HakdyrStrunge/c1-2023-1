const express = require('express')
const {SearchByName} = require('./repository/dataFunction')

const app = express()
app.use(express.json()) 
app.use(express.urlencoded({
    extended: true
}))

app.use(bodyParser({ multipart: true, urlencoded: true }))
app.use(router.routes())

app.get('/api/users/:name', function(request, response){
    SearchByName(request.params.name, response)  
})

app.post('/api/user', function(request, response){  
    SearchGeneral(request.body.search, response)    
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
