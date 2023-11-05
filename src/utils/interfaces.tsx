// interfaces.ts
export interface Clinic {
  id: number;
  name: string;
  startTime: string;
  endTime: string;
}

export interface TimeSlot {
  id: number;
  time: string;
}

export interface Appointment {
  id: number;
  timeSlotId: number;
  clinicId: number;
  date: Date;
}


export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}