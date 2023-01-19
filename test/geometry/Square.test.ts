import Square from "../../src/geometry/Square";

test("Should calculate the area of square", function () {
    const square = new Square(2);
    expect(square.getArea()).toBe(4);
});

test("Should calculate the perimeter of square", function () {
    const square = new Square(2);
    expect(square.getPerimeter()).toBe(8);
});
