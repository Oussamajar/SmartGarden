import { Time } from "@angular/common";

export interface SmartGarden {
    id:number,
    date: string,
    temperature: Number,
    humidite: Number,
    luminosite: Number,
    arrosage:boolean
}