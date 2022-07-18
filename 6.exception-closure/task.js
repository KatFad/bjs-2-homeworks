function parseCount(numb) {
    const numbParse = Number.parseInt(numb);
    if (Number.isNaN(numbParse)) {
        throw new Error('Невалидное значение');
    }
    return numbParse;
}

function validateCount(parse) {
    try {
        return parseCount(parse)
    }
    catch (err) {
        return err
    }

}

class Triangle {
    constructor(a,b,c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if ( (a+b<c) || (a+c<b) || (b+c<a) ){
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }
    getPerimeter() {
        return this.a + this.b + this.c;
    }
    getArea() {
        let p= 1/2 * this.getPerimeter();
        return Number((Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c))).toFixed(3));
    }
}

function getTriangle(a,b,c) {
    try {
        return new Triangle(a,b,c)
    }
    catch {
        return  {
            getArea() {
                return 'Ошибка! Треугольник не существует'
            },
            getPerimeter() {
                return 'Ошибка! Треугольник не существует'
            }
        }

    }
}