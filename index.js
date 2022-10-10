const express =require('express' )
const app = express()
const port=3000
const path =require('path')
app.use('/static',express.static(path.join(__dirname,'public')))
//app.use('/static',express.static('public'))
app.set('view engine','ejs')
app.set('views',__dirname+'/views')

app.get('/',(req,res)=>{
    
    console.log(__dirname)
    res.render('index')
})
app.get('/educacion',(req,res)=>{
    res.render('educacion',{
        titulo: "Seccion Educacion",
        descripcion:"Aqui encontramos mi informacion académica"
    })
})
app.get('/experiencia',(req,res)=>{
    res.render('experiencia',{

    })

})
app.get('/informacion',(req,res)=>{
    res.render('informacion')
})

app.use((req,res,next) => {
    res.status(404).sendFile(__dirname+'/public/404.html')
})

app.listen(port,()=>{
    console.log(`acede al servidor haciendo clic aqui http://localhost:${port}`)
})