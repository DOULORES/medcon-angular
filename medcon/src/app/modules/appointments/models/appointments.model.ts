export interface Appointment {
    id?: string;
    userId?: string;
    specialty: string;
    doctor: string;
    date: string;
    time: string;
    obs: string;
    status: string;
}