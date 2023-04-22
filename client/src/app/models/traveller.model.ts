import { Destination } from "./destination.model";

export interface Traveller {
    id: string;
    name: string;
    email: string;
    phone: number;
    destinations: Array<Destination>;
}