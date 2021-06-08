const Appointment = require('./Appointment')


class Calendar {
    constructor() {
        this.appointments = []
    }

    addAppointment(newAppointment) {
        this.appointments.push(newAppointment)
    }

    addAppointmentList(appointments){
        appointments.map((appointment) => this.addAppointment(appointment))
      }

    deleteAppointmentById(id) {
        let index = this.appointments.findIndex(function (appointment) {
            return appointment.id === id;
        })
        this.appointments.splice(index, 1)
    }

    getAppointmentById(id) {
        let res = this.appointments.filter(function (appointment) {
            return appointment.id == id;
        })
        return res
    }

    slotsBetweenDates(start, end, duration) {

        let slots = []
        let startDate = new Date(start).getTime()
        let endDate = new Date(end).getTime()
        let durationMilliseconds = duration * 60 * 1000

        while (startDate + durationMilliseconds <= endDate) {
            slots.push(new Date(startDate))
            startDate = startDate + durationMilliseconds
        }

        return slots
    }

    availableSlotsBetweenDates(start, end, duration) {
        let finalList = []

        // res contains available appointments between start and end
        let res = this.appointments.filter(function (appointment) {
            return (appointment.start >= new Date(start) && appointment.start <= new Date(end) && appointment.isAvailable());
        })

        // adding an object with the start date at the beginning of the list
        res.unshift({
            start: new Date(start)
        })

        // adding an object with the end date at the end of the list
        res.push({
            start: new Date(end)
        })

        // using reduce to add slots between every 2 successive elements of res in the final list
        let reducer = (accumulator, current) => {
            let mid = this.slotsBetweenDates(accumulator.start, current.start, duration)
            finalList.push.apply(finalList, mid)
            return current
        }
        res.reduce(reducer)

        //console.log(finalList)
        return finalList
    }

    getAppointmentsBetweenDates(startDate, endDate) {
        let start = new Date(startDate)
        let end = new Date(endDate)
        let res = this.appointments.filter(function (appointment) {
            return (appointment.start >= start && appointment.start <= end);
        })
        return res
    }

}


module.exports = Calendar