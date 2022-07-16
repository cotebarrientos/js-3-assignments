/*  
MATHEMATICAL SHAPES
ASSIGNMENT INSTRUCTIONS:

1. Write a JavaScript program to find the diagonal of a square where the length of each
side is 9.

2. Write a JavaScript program to find the area of a triangle where lengths of the three of its
sides are 5, 6 and 7.

3. Write a JavaScript program to find the circumference and surface area of a circle whose
radius is 4.
*/

// Calc square Diagonal
// Formula: d=√2a
// Math.sqrt() function returns the square root of a number

function findSquareDiagonal(side) {
    let diagonal = (Math.sqrt(2) * side).toFixed(2);
    return diagonal;
}

console.log("The square diagonal with each side of 9 is: ", findSquareDiagonal(9));

// Calc triangle area using its 3 sides
// Formula: √[s(s-a)(s-b)(s-c)]

function findTriangleArea(side1, side2, side3) {
    let sides = (side1 + side2 + side3)/2;

    let triangleArea = (Math.sqrt(sides * ((sides-side1) * (sides - side2) * (sides - side3)))).toFixed(2);
    return triangleArea;
}

console.log("The triangle area with sides 5, 6 and 7 is: ", findTriangleArea(5, 6, 7));

// Calc circle area and circumference
// Circle area formula: A=πr2
// Circle circumference formula: C=2πr

function findCircleAreaAndCircumference(radius) {

    let area = (Math.PI * (radius * radius)).toFixed(2);

    let circumference = (2 * Math.PI * radius).toFixed(2);

    return `The circle area with a radius of 4 is ${area} and the circumference is ${circumference}`;
}

console.log(findCircleAreaAndCircumference(4));