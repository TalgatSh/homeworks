class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;  
    this.state = 100;
    this.type = null;        
  }  
  fix() {
    this.state *= 1.5;
  }
  set state(fixed) {
    if (fixed < 0) {
      this._state = 0;
    } if (fixed > 100) {
        this._state = 100;
      } else {
        this._state = fixed;
      }
  }
  get state() {
    return this._state;
  }
}
class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = null) {
    super(name, releaseDate, pagesCount, state = 100, type = null);
    this.type = "magazine";
  }

}
class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, state = 100, type = null) {
    super(name, releaseDate, pagesCount, state = 100, type = null);
    this.type = "book";
    this.author = author;
  }
}
class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state = 100, type = null) {
    super(author, name, releaseDate, pagesCount, state = 100, type = null);
    this.type = "novel";    
  }
}
class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state = 100, type = null) {
    super(author, name, releaseDate, pagesCount, state = 100, type = null);
    this.type = "fantastic";    
  }
}
class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state = 100, type = null) {
    super(author, name, releaseDate, pagesCount, state = 100, type = null);
    this.type = "detective";    
  }
}
let book = new PrintEditionItem;
class Library {
  constructor(name) {      
    this.name = name;
    this.books = [];    
  }
  addBook (book) {
    if (book.state > 30) {
      this.books.push(book);
    }   
  }
  findBookBy(type, value) {
    const findResult = this.books.find((item) => item[type] === value);
    return findResult || null;
  }  
  giveBookByName(bookName) {      
    const delivery = this.books.find((item) => Object.values(item).includes(bookName))
    if (delivery !== undefined) {
      this.books = this.books.filter(b => b.delivery !== book.name);
      return delivery;
    } else {
      return null;
    }
  }
}
