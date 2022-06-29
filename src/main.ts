// create Book interface
interface Book {
  title: string;
  author: string;
  genre?: string;
  id?: number;
}

// create Book Inventory class (shelf);
class Shelf {
  private allBooks: Book[] = [];
  constructor(private owner: string) {}

  // add book to shelf method
  addToShelf = (book: Book): Book[] => {
    console.log(`'${book.title}' was added to ${this.owner}'s Library!!`);
    let copied = [...this.allBooks, book];
    this.allBooks = copied;
    return this.allBooks;
  };

  // remove book from shelf method
  removeBook = (book: Book): Book[] => {
    if (this.allBooks.indexOf(book) === -1) {
      console.log(`oops, ${book.title} was not found in your shelf`);
    } else {
      let newBooks = this.allBooks.filter(b => b !== book);
      this.allBooks = newBooks;
      console.log(`You removed '${book.title}' from your shelf`);
      return this.allBooks;
    }
    return this.allBooks;
  };
}

// test
let jonathanLibrary = new Shelf('Jonathan');

// test add book to shelf feature
let bookOne: Book = {
  title: 'The Last Jury',
  author: 'John Grisham',
  genre: 'Crime/Thriller',
  id: 1
};

jonathanLibrary.addToShelf(bookOne);
console.log(jonathanLibrary);

// testing remove book from shelf feature;
let bookTwo: Book = {
  title: 'The Guardian',
  author: 'John Grisham',
  id: 2
};

let bookThree: Book = {
  title: 'Hold Tight',
  author: 'Harlen Cobben',
  genre: 'Mystery/Thriller',
  id: 3
};

jonathanLibrary.addToShelf(bookTwo);
jonathanLibrary.addToShelf(bookThree);
jonathanLibrary.removeBook(bookOne);
console.log(jonathanLibrary);
