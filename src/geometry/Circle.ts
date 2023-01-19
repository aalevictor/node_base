export default class Circle {
    constructor (readonly radius: number) {}

    getArea() : number { //PI * r^2
        return Math.PI * (this.radius * this.radius);
    }

    getCircumference() : number { //2 * PI * r
        return 2 * Math.PI * this.radius;
    }

    getDiameter() : number { //2 * r
        return 2 * this.radius;
    }
}
