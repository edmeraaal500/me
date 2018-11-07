var firebase= require('./firebase')

var database= firebase.database()


module.exports.addCollaboration = (payload) =>{
    return new Promise((resolve,reject) => {
        if( payload !== null && payload !== undefined){
            var newKey= database.ref().push().key
            var projectsRef= database.ref('projects/' + newKey)
            // events listeners
            /*projectsRef.on('child_added',function(data){
                console.log('addddddddddddd')
                //console.log(data)
                projectsRef.off()
            })*/

            // storage
            projectsRef.set({
                name: payload.name,
                tel: payload.tel,
                email: payload.email,
                project: payload.project, 
                details: payload.details
            }).then(() => {
                console.log('added')
                resolve(newKey)
            })
            .catch(err => reject(err))
        }
        else{
            reject('payload null')
        }

    })
}

module.exports.countCols= ()=>{
    var ref= database.ref('projects')
    
    return new Promise((resolve,reject) => {
        var i= 0
        ref.once('value', function(snapshot){
            snapshot.forEach(function(child){
                //console.log(child.key)
                //console.log(child.val())
                i++
            })

            resolve(i)
        })
    })
}

module.exports.storeMails= (payload)=>{
    return new Promise((resolve,reject) => {
        if( payload !== null && payload !== undefined){
            var newKey= database.ref().push().key
            var mailsRef= database.ref('mails/' + newKey)

            // storage
            mailsRef.set({
                name: payload.name,
                email: payload.email,
                message: payload.message
            }).then(() => {
                console.log('mail added')
                resolve(newKey)
            })
            .catch(err => reject(err))
        }
        else{
            reject('payload null')
        }

    })
}

module.exports.countMails= () => {
    var ref = database.ref('mails') 

    return new Promise((resolve,reject) => {
        var i= 0
        ref.once('value', function(snapshot){
            snapshot.forEach(function(child){
                //console.log(child.key)
                //console.log(child.val())
                i++
            })

            resolve(i)
        })
    })
}

module.exports.removeDocument= (parent,id) => {
    return new Promise((resolve,reject)=> {
       
        var ref= database.ref(`${parent}/${id}`)

        ref.remove().then(res=> {
            resolve('done')
        })
        .catch(err => reject(err))
    })
    
}

module.exports.test= ()=> {
    return 'hello'
}