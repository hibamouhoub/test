var chai = require ('chai')
const Appointment = require('../classes/Appointment')
var expect = chai.expect
var assert = chai.assert

var appointment = new Appointment('06/21/2021 09:00',1)


describe('Constructor', () => {
    it('should handle error if date is in the past', () => {
        assert.throw(() => { appointment.createAppointment('01/21/2021 09:00',10) },
             'We cannot create an appointment in the past');
      });
  });


describe("level 1", function(){
    it("adding attendee", function(){
        expect(appointment.addAttendee({name:'attendee 1',email:'email 1'}))
            .to.be.equal('attendee 1 was successfully added to the attendees list.')
        expect(appointment.addAttendee({name:'attendee 2',email:'email 2'}))
            .to.be.equal('The meeting is full.')   
    })
})

