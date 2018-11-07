var express= require('express')
var bodyParser= require('body-parser')
var path= require('path')
var {addCollaboration,countCols,storeMails,countMails}= require('./config/firebaseFunctions')
var {sendMail} = require('./config/emails')

var app= express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname,'build')))


app.get('/',(req,res)=>{
    res.status(200).sendFile(__dirname+'/build/index.html')
})

app.get('/test',(req,res)=>{
    res.json({success: true})
})


app.post('/collaborate', (req,res)=>{
    console.log('endpoint called')
    console.log(req.body)
    addCollaboration(req.body).then(response=>{
        res.json({success: true, message: response})
    })
    .catch(err=> res.json({success: false, error: ""}))
})

app.get('/count', (req,res) =>{
    countCols().then(count=>{
        res.json({refs: count})
    })
})


app.post('/email',(req,res)=>{

    storeMails(req.body).then(response=>{

        res.json({success: true, message: response})
    })
    .catch(err=> res.json({success: false, error: err}))
})

app.get('/countMails',(req,res)=> {
    countMails().then(count => {
        res.json({refs: count})
    })
})


var server= app.listen( process.env.PORT || 5050 , function(){
                        console.log('server listening at port %s...', server.address().port)
                })

module.exports= app ;