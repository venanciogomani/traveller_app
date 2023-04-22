import { Destination } from "./destination.model";

export interface AddTraveller {
    name: string;
    email: string;
    phone: number;
    destinations: Array<Destination>;
}