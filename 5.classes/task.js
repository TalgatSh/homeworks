class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = null) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = state;
    this.type = type;        
  }  
  fix() {
    this.state *= 1.5;
  }
  set _state(fixed) {
    if (this.state < 0) {
      this.state = 0;
    } if (this.state > 100) {
        this.state = 100;
      } else {
        this.state = fixed;
      }
  }
  get _state() {
    return this.state;
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

class Library {
  constructor(name, books) {
    this.name = name;
    this.books = [];
  }
  addBook(book) {
    this.books.push(book);
  }
  findBookBy(type, value) {
    this.type = type;
    this.value = value;
    for (let i = 0; i < this.books.length; i++) {
      if (this.type[i] == this.value) {
        return this.book;
      } if (this.name[i] == this.value) {
        return this.book;
      } else {
        return null;
      }
    }
  }
  giveBookByName(bookName) {
    this.bookName = bookName;
    for (let i = 0; i < this.books.length; i++) {
      if (bookName[i] == this.name) {
        return bookName[i] && this.books.filter(book => book.this.name != bookName);
      }
    }
  }
}
