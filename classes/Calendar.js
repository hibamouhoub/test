const Appointment = require('./Appointment')


class Calendar{
    constructor(){
        this.id = Calendar.incrementID()
        this.appointments = []
    }

    static incrementID() {
        this.previousID = (this.previousID) ? ++this.previousID : 1
        return this.previousID
    }

    addAppointment(newAppointment){
        this.appointments.push(newAppointment)
    }

    deleteAppointmentById(id){
        let index = this.appointments.findIndex(function (appointment) {
            return appointment.id === id;
        })
        this.appointments.splice(index, 1)
    }

    getAppointmentById(id){
        let res = this.appointments.filter(function (appointment) {
            return appointment.id == id;
        })
        return (res.length)?res[0]:'Id Not Found In The Calendar'
    }
    

    getAppointmentsBetweenDates(startDate, endDate){
        let start = new Date(startDate)
        let end = new Date(endDate)
        let res = this.appointments.filter(function (appointment) {
            return (appointment.start >= start && appointment.start <= end);
        })
        return (res.length)?res:'No appointments between the 2 dates.'
    }

}


module.exports = Calendar