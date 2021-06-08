var chai = require ('chai')
const Appointment = require('../classes/Appointment')
var expect = chai.expect

var appointment1 = new Appointment('06/21/2021 09:00',2)
var appointment2 = new Appointment('06/21/2021 10:00',1)
appointment1.addAttendee({name:'attendee 1', email:'email 1'})
appointment2.addAttendee({name:'attendee 1', email:'email 1'})


describe("level 2", function(){
    it("adding attendee", function(){
        expect(appointment1.isAvailable()).to.be.equal(true)
        expect(appointment2.isAvailable()).to.be.equal(false)
        expect(appointment1.addAttendee({name:'attendee 2',email:'email 2 '}))
            .to.be.equal('attendee 2 was successfully added to the attendees list.')
        expect(appointment2.addAttendee({name:'attendee 2',email:'email 2'}))
            .to.be.equal('The meeting is full.')   
    })
})

