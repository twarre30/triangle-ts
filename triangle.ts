export class Triangle {
  sides: number[];

  constructor(...sides: number[]) {
    this.sides = sides;
  }

  get isValid(): boolean {
    const [side1, side2, side3] = this.sides;
    const sidesArePositive = side1 > 0 && side2 > 0 && side3 > 0;
    const validatesTriangleInequality =
      side1 + side2 >= side3 &&
      side1 + side3 >= side2 &&
      side2 + side3 >= side1;
    return sidesArePositive && validatesTriangleInequality;
  }

  get isEquilateral(): boolean {
    if (!this.isValid) {
      return false;
    }
    const [side1, side2, side3] = this.sides;
    return side1 === side2 && side2 === side3 && side1 === side3;
  }

  get isIsosceles(): boolean {
    if (!this.isValid) {
      return false;
    }
    const [side1, side2, side3] = this.sides;
    return side1 === side2 || side1 === side3 || side2 === side3;
  }

  get isScalene(): boolean {
    if (!this.isValid) {
      return false;
    }
    return !this.isIsosceles;
  }
}
