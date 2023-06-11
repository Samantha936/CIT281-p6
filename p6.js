class Shape {
    constructor(sides = []) {
      this.sides = sides;
    }
perimeter = () => this.sides.length > 0 ? this.sides.reduce((total, side) => total + side) : 0;
}

console.log(new Shape([5, 10]).perimeter());  // 15
console.log(new Shape([1, 2, 3, 4, 5]).perimeter()); // 15
console.log(new Shape().perimeter()); // 0

//rectangle class

class Rectangle extends Shape {
    constructor (length = 0, width = 0) {
    super([length, width, length, width]);
    this.length = length;
    this.width = width;
}
area = () => this.length * this.width
}


console.log(new Rectangle(4, 4).perimeter());  // 16
console.log(new Rectangle(4, 4).area());  // 16
console.log(new Rectangle(5, 5).perimeter()); // 20
console.log(new Rectangle(5, 5).area()); // 25
console.log(new Rectangle().perimeter()); // 0
console.log(new Rectangle().area()); // 0

//triangle class

class Triangle extends Shape {
    constructor
    (sideA = 0, sideB = 0, sideC = 0) {
        super([sideA, sideB, sideC]);
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;

    }
    area = () => {

        const S = (this.sideA + this.sideB + this.sideC) / 2;
    return Math.sqrt (S *(S - this.sideA)*(S - this.sideB)*(S - this.sideC));
    }
}

console.log(new Triangle(3, 4, 5).perimeter());  // 12
console.log(new Triangle(3, 4, 5).area());  // 6
console.log(new Triangle().perimeter()); // 0
console.log(new Triangle().area()); // 0


// Array of sides arrays
const data = [ [3, 4], [5, 5], [3, 4, 5], [10], [] ];

for(const sideArr of data) {
    let Shape = null;

    switch(sideArr.length) {
        case 0:
            shape = new Rectangle(...sideArr);
        console.log(`Rectangle sides ${sideArr.toString()} has perimeter ${sideArr.perimeter()} and area ${sideArr.area()}`);
        case 1:
        console.log(`Triangle sides ${sideArr.toString()} has perimeter ${sideArr.perimeter()} and area ${sideArr.area()}`);
        break;
        default:
            console.log(`Random Shape ${sideArr.length} unsupported`);

    }
}