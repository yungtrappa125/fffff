class Point {
    constructor(public x: number = 0, public y: number = 0) {}
}

class Triangle {
    p1: Point = new Point();
    p2: Point = new Point();
    p3: Point = new Point();

    constructor(
        x1: number = 0, 
        y1: number = 0, 
        x2: number = 0, 
        y2: number = 0, 
        x3: number = 0, 
        y3: number = 0
    ) {
        this.p1 = new Point(x1, y1);
        this.p2 = new Point(x2, y2);
        this.p3 = new Point(x3, y3);
    }

    printCoordinates(): void {
        console.log(`Triangle vertices: P1(${this.p1.x}, ${this.p1.y}), P2(${this.p2.x}, ${this.p2.y}), P3(${this.p3.x}, ${this.p3.y})`);
    }
}

const triangle1 = new Triangle();
const triangle2 = new Triangle(0, 0, 3, 0, 3, 4);

triangle1.printCoordinates();
triangle2.printCoordinates();
