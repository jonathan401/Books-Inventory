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
