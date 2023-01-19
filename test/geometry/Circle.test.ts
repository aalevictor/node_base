import Circle from "../../src/geometry/Circle";

test("Should calculate the area of circle", function () {
    const circle = new Circle(2);
    expect(circle.getArea()).toBe(12.566370614359172);
});

test("Should calculate the circumference of circle", function () {
    const circle = new Circle(2);
    expect(circle.getCircumference()).toBe(12.566370614359172);
});

test("Should calculate the diameter of circle", function () {
    const circle = new Circle(2);
    expect(circle.getDiameter()).toBe(4);
});
