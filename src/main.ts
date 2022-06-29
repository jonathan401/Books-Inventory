// create Book interface
interface Book {
  title: string;
  author: string;
  genre?: string;
  id?: unknown;
}

// create Book Inventory class (shelf);
class Shelf {
  private allBooks: Book[] = [];
  constructor(private owner: string) {}
}

// test
let jonathanLibrary = new Shelf('Jonathan');
