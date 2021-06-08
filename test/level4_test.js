const chai = require ('chai')
const Appointment = require('../classes/Appointment')
const Calendar = require('../classes/Calendar')
let expect = chai.expect

let calendar = new Calendar()
let a = new Appointment('06/08/2021 17:00',2)
let b = new Appointment('06/11/2021 18:00',4)
let c = new Appointment('06/11/2021 20:50',4)
let d = new Appointment('06/11/2021 21:25',4)
let e = new Appointment('06/11/2021 22:50',4)
calendar.addAppointmentList([a,b,c,d,e])


describe("level 4", function(){
    it("slots", function(){
        slotsList = calendar.availableSlotsBetweenDates('06/11/2021 17:55', '06/11/2021 22:55', 30)
        expect(slotsList).to.have.length(8);

    })
})




