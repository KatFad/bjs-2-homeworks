class PrintEditionItem {
    constructor(name,releaseDate,pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    }

    set state(newState) {
        if (newState<0) {
            this._state = 0;
        }
        else if (newState >100) {
            this._state = 100;
        }
        else {
            this._state = newState;
        }
    }
    get state() {
        return this._state;
    }
}
class Magazine extends PrintEditionItem {
    constructor(name,releaseDate,pagesCount,state) {
        super(name,releaseDate,pagesCount,state);
        this.type ='magazine';
    }
}


class Book extends PrintEditionItem {
    constructor(author,name,releaseDate,pagesCount,state) {
        super(name,releaseDate,pagesCount,state);
        this.type ='book';
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author,name,releaseDate,pagesCount,state) {
        super(author,name,releaseDate,pagesCount,state);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author,name,releaseDate,pagesCount,state) {
        super(author,name,releaseDate,pagesCount,state);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author,name,releaseDate,pagesCount,state) {
        super(author,name,releaseDate,pagesCount,state);
        this.type = 'detective';
    }
}

class Library {
    books = [];
    constructor(name) {
        this.name = name;
    }

    addBook(book) {
        if (book._state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        if ((this.books.find(item=> value === item[type]) ) === undefined ) {
            return null;
        }
        else {
            return this.books.find(item=>  value === item[type]);
        }
    }

    giveBookByName(bookName) {
        let bookIdx = this.books.findIndex(item=> item.name === bookName);
        if (bookIdx !== -1) {
            return this.books.splice(bookIdx, 1)[0];
        }
        else {
            return null;
        }
    }
}

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subject) {
        if (!(subject in this.marks)) {
            this.marks[subject] = [];
        }

        if (mark >= 1 && mark <= 5) {
            this.marks[subject].push(mark);
        } else {
            return 'Ошибка, оценка должна быть числом от 1 до 5';
        }
    }

    getAverageBySubject(subject) {
        if (this.marks[subject]) {
            return (this.marks[subject].reduce((sum, current) => sum + current, 0)) / this.marks[subject].length;
        }
        return 'Несуществующий предмет';
    }

    getAverage() {
        if (Object.keys(this.marks).length > 0) {
            let Count = 0;
            let Sum = 0;
            for (let subject in this.marks) {
                Count += this.marks[subject].length;
                Sum += this.marks[subject].reduce((sum, current) => sum + current, 0);
            }
            return Sum / Count;
        } else {
            return 'Нет оценок ни по одному предмету';
        }
    }

    exclude(string) {
        if (string === 'Исключен за попытку подделать оценки') {
            for (let student in this) delete this[student];
        }
    }
}