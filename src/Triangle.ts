export default class Triangle {
    constructor (readonly a: number, readonly b: number, readonly c: number) {}

    getArea() : number { 
        var semiperimeter = this.getPerimeter() / 2; // s = (a + b + c) / 2
        var calculation = semiperimeter * (semiperimeter - this.a) * (semiperimeter - this.b) * (semiperimeter - this.c); // calc = (s * (s - a) * (s - b) * (s - c))
        return Math.sqrt(calculation); // sqrt(calc)
    }

    getPerimeter() : number { //a + b + c
        return this.a + this.b + this.c;
    }
}