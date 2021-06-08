class Appointment {
    static id
    constructor(start, maxAttendees) {
        this.createAppointment(start, maxAttendees)
    }

    createAppointment(start, maxAttendees) {
        if (new Date(start) < new Date) throw 'We cannot create an appointment in the past'
        this.id = Appointment.incrementId()
        this.start = new Date(start)
        this.maxAttendees = maxAttendees
        this.attendees = []
    }

    static incrementId() {
        this.previousID = (this.previousID) ? ++this.previousID : 1
        return this.previousID
    }

    remainingSpots() {
        return this.maxAttendees - this.attendees.length
    }

    isAvailable() {
        return (this.remainingSpots() > 0)
    }

    isConfirmed() {
        return (this.remainingSpots) ? true : false
    }

    addAttendee({ name, email }) {

        // First we check if an attendee with the same email is registered in the appointment list
        let index = this.attendees.findIndex(function (attendee) {
            return attendee.email === email;
        })
        let now = new Date()

        if (now < this.start && index == -1 && this.isAvailable()) {
            this.attendees.push({ name, email })
            return (`${name} was successfully added to the attendees list.`)
        } else {
            return ('The meeting is full.')
        }
    }

    removeAttendee(email) {
        let index = this.attendees.findIndex(function (attendee) {
            return attendee.email === email;
        })
        if (index == -1) {
            return 'Email Not Found.'
        } else {
            this.attendees.splice(index, 1)
            return `${email} Was Removed From The Attendees List.`
        }
    }
}

module.exports = Appointment