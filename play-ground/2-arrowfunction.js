// const event = {
//     eventName: 'Birthday Party',
//     peopleAttending:['srikanth','suhas','raju'],
//     getEventDetails(){
//         const that = this
//         console.log('The event name is '+ this.eventName)
//         this.peopleAttending.forEach(function (person){
//             console.log(person + ' is attending '+ that.eventName)
//         })
//     }
// }

const event = {
    eventName: 'Birthday party',
    peopleAttending: ['srikanth','shivam','hassan'],
    // getEventDetails: ()=>{
    //     console.log(this) //In browser, it returned window object and in vscode it is {}

    // }
    // getEventDetails(){
    //     this.peopleAttending.forEach(function (person){
    //         // console.log(person + ' is attending '+ this.eventName)
    //         //this.eventName is returning undefined
    //         console.log(this)
    //         //when typed above in browser getting window object, here we used function() not ()=>
    //         //behavior ???

    //     })
    // }

    getEventDetails(){
        this.peopleAttending.forEach((person) =>{
            console.log(person+' is attending '+this.eventName) //working as expected
        })
    }
}


event.getEventDetails()


//const event = {
//     eventName: 'Birthday Party',
//     getEventDetails: ()=> {
//         console.log('The event name is '+ this.eventName)
//     } You will get undefined because each function will have their own this binding, 
//I think here this keyword is refering to global window obj hence undefined


// }
//To fix the above problem 
// const event = {
//     eventName: 'Birthday Party',
//     getEventDetails(){ //we can just write the method like this
//         console.log('The event name is '+ this.eventName)
//     }

// }

//every function will have their own this binding
// const event = {
//     eventName: 'Birthday Party',
//     peopleAttending:['srikanth','suhas','raju'],
//     getEventDetails(){
//         console.log('The event name is '+ this.eventName)
//         this.peopleAttending.forEach(function (person){
//             console.log(person + ' is attending '+ this.eventName)
//         })
//     }
// }


// this.eventName is giving undefined value, earlier people used to do some work around as that :this
 
// workaround with that and this

// const event = {
//     eventName: 'Birthday Party',
//     peopleAttending:['srikanth','suhas','raju'],
//     getEventDetails(){
//         const that = this
//         console.log('The event name is '+ this.eventName)
//         this.peopleAttending.forEach(function (person){
//             console.log(person + ' is attending '+ that.eventName)
//         })
//     }
// }
