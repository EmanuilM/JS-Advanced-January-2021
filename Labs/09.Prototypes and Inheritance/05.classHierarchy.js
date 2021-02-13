function foo() {
    class Figure {
        constructor(unit = 'cm') {
            this.units = unit;
        }

        changeUnits(unit) {
            this.units = unit;
        }
        converted(unit, radius) {
            let r = {
                'm': (radius) => radius * 0.01,
                'cm': (radius) => radius,
                'mm': (radius) => radius * 10,
            }
            return r[unit](radius);
        }
    }
    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            this.radius = radius;
        }
        get area() {
            return Math.PI * super.converted(this.units, this.radius) ** 2;
        }
        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${super.converted(this.units, this.radius)}`
        }
    }
    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this.width = width;
            this.height = height;
        }
        get area() {
            return super.converted(this.units, this.width) * super.converted(this.units, this.height);
        }
        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - width: ${super.converted(this.units, this.width)}, height: ${super.converted(this.units, this.height)}`;
        }
    }
    return {
        Figure,
        Circle,
        Rectangle
    }
}
