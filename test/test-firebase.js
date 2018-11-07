var chai= require('chai')
var {test,countCols,removeDocument} = require('../config/firebaseFunctions')

var expect= chai.expect




describe('test firebase functions',function(){
    beforeEach(function(done){
        this.timeout(4000)
    })

    it('test function',function(done){
        var res= test()
        expect(res).to.be.a('string')
        expect(res).to.equal('hello')
        done()
    })

    it('count cols',function(done){
        countCols().then(res=> {
            expect(res).to.be.greaterThan(17)
            done()
        })
    })

    /*it('remove document',function(done){
        removeDocument('projects','-LJpevhMa5p_WjuGbPcD')
        .then(res => {
            expect(res).to.equal('done')
            done()
        })
        .catch(err => {
            done()
        })
    })*/

    it('test watch',function(done){
        expect(4).to.be.greaterThan(3)
        done()
    })

    it('test watch 2',function(done){
        expect(5).to.be.greaterThan(4)
        done()
    })
})