export interface Event {
    name: string;
    description: string;
    category: EventCategory;
    location: string;
    prevDayStartTime?: string;
    startTime: string;
    endTime: string;
    class: string;
    column: number;
    selectedDay: Date;
    timeWindow: string;
  }
  
  export type EventCategory =
    | 'main'
    | 'workshop'
    | 'mini'
    | 'chat'
    | 'food'
    | 'virtual';