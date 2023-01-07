import { Time } from "@angular/common";

export interface SmartGarden {
    date: Time;
    temperature: Number;
    humidite: Number;
    jour_nuit: boolean;

}