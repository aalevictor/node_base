import Triangle from "../../src/geometry/Triangle";

test("Should calculate the perimeter of square", function () {
    const triangle = new Triangle(3, 4, 5);
    expect(triangle.getPerimeter()).toBe(12);
});

test("Should calculate the area of triangle", function () {
    const triangle = new Triangle(3, 4, 5);
    expect(triangle.getArea()).toBe(6);
});
