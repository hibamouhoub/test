class Appointment {
    static id
    constructor(start) {
        this.createAppointment(start)
    }

    createAppointment(start){
        if (new Date(start)<new Date) throw 'We cannot create an appointment in the past'
        this.id = Appointment.incrementId()
        this.start = new Date(start)
        this.attendees = []
    }

    static incrementId(){
        this.previousID = (this.previousID)? ++this.previousID :1
        return this.previousID
    }

    
    
    addAttendee({ name, email }) {
        let index = this.attendees.findIndex(function (attendee) {
            return attendee.email === email;
        })
        let now = new Date()
        if (now < this.start && index == -1) {
            this.attendees.push({ name, email })
            return('The employee was successfully added to the attendees list.')
        } else {
            return('The meeting is full.')
        }
    }

    removeAttendee(email) {
        let index = this.attendees.findIndex(function (attendee) {
            return attendee.email === email;
        })
        if(index == -1){
            return 'Email not found.'
        } else {
            this.attendees.splice(index, 1)
            return 'The attendee was removed from the appointment.'
        }
        
    }
}

module.exports = Appointment