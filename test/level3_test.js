const chai = require ('chai')
const Appointment = require('../classes/Appointment')
const Calendar = require('../classes/Calendar')
let expect = chai.expect

let calendar = new Calendar()
let appointment1 = new Appointment('06/21/2021 09:00',2)
let appointment2 = new Appointment('06/21/2021 10:00',1)
calendar.addAppointment(appointment1)
calendar.addAppointment(appointment2)


describe("level 3", function(){
    it("handling appointments in calendar", function(){
        expect(calendar.getAppointmentsBetweenDates('06/21/2021 08:55','06/21/2021 10:05'))
        .to.eql([appointment1,appointment2])
        expect(calendar.getAppointmentsBetweenDates('06/21/2021 08:55','06/21/2021 09:00'))
        .to.eql([appointment1])
    })
})




