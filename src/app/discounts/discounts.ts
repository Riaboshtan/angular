export interface IDiscount{
    id: number,
    title: string,
    details: string,
    cafe: string,
    category: number,
    location: string,
    time: string,
    overlay: string,
    height: string,
    image: string
}

export class Discount {
    constructor(
        public title: string,
        public details: string,
        public cafe: string,
        public location: string,
        public category: string,
        public time: string,
        public overlay: string,
        public height: string,
        public image: string
        ){}
}