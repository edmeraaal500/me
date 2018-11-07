var chai = require('chai')
var chaiHttp= require('chai-http')
var server= require('../index')
var {removeDocument} = require('../config/firebaseFunctions')

var should= chai.should()

chai.use(chaiHttp)

describe('test endpoints', function(){
    beforeEach(function(done){
        this.projectKey= ""
        this.mailKey= ""
        done()
    })

    afterEach(function(done){
        console.log('*********** after each ************')
        console.log(this.projectKey)
        console.log(this.mailKey)

        if(this.projectKey && this.projectKey !== ''){
               removeDocument('projects',this.projectKey)
               .then(res => {
                   //this.projectKey= ''
                   //done()
               })
               .catch(err => console.log(err) )
        }

        if(this.mailKey && this.mailKey !== '' ){
               removeDocument('mails',this.mailKey)
               .then(res => {
                   //this.mailKey= ''
                   //done()
               })
               .catch(err => console.log(err) )
        }

        done()
    })

    it('/collaborate endpoint',function(done){
        console.log('****************')
          var self= this
          chai.request(server)
          .post('/collaborate')
          .send({'name': 'aymansimomah', 'tel' :'04324542432', 'email': 'ayman@gmail.co', 'project': 'recall project', 'details': 'a large scale project about ads statistics'})
          .end(function(err,res){
              res.should.have.status(200)
              res.should.be.json
              res.body.should.have.property('success')
              res.body.success.should.be.a('boolean')
              res.body.success.should.equal(true)
              
              // store added document key to be deleted in afterEach hook

              self.projectKey= res.body.message
              done()
          })
    })

    it('/email endpoint',function(done){
        var self= this

        chai.request(server)
        .post('/email')
        .send({'name': 'soura smimah', 'email': 'sourasmimah@gmail.com', 'message': 'how are you doing'})
        .end(function(err,res){

            res.should.have.status(200)
            res.should.be.json
            res.body.should.have.property('success')
            res.body.success.should.be.a('boolean')
            res.body.success.should.equal(true)
            res.body.should.have.property('message')

            // store added document key to be deleted in afterEach hook
            self.mailKey= res.body.message
            done()
        })
    })

    it('/count endpoint',function(done){
        chai.request(server)
        .get('/count')
        .end(function(err,res){
            res.should.have.status(200)
            res.body.should.have.property('refs')
            //res.body.refs.should.equal()
            done()
        })
    })

    it('/test endpoint',function(done){
            chai.request(server)
            .get('/test')
            .end(function(err,res){
                res.should.have.status(200)
                res.should.be.json
                done()
            })
    })
})

