export default class Square {
    constructor (readonly side: number) {}

    getArea() : number { //s^2
        return this.side * this.side;
    }

    getPerimeter() : number { //4 * s
        return 4 * this.side;
    }
}
