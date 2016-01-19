describe('triangle', function() {
  it("is equilateral when all three sides are equal", function() {
    expect(triangle(5, 5, 5)).to.equal("equilateral");
  });

  it ("is isosceles when two sides are equal", function() {
    expect(triangle(5, 5, 4)).to.equal("isosceles");
  });

  it ("is scalene when no sides are equal", function() {
    expect(triangle(3, 4, 5)).to.equal("scalene");
  });

  it ("is not a triangle when the sum of the lengths of any two sides of a triangle is less than or equal to the length of the third side", function() {
    expect(triangle(2, 3, 5)).to.equal("not a triangle");
  });
});
