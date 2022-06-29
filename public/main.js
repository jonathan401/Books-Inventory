"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// create Book Inventory class (shelf);
var Shelf = /** @class */ (function () {
    function Shelf(owner) {
        var _this = this;
        this.owner = owner;
        this.allBooks = [];
        // add book to shelf method
        this.addToShelf = function (book) {
            console.log("'".concat(book.title, "' was added to ").concat(_this.owner, "'s Library!!"));
            var copied = __spreadArray(__spreadArray([], _this.allBooks, true), [book], false);
            _this.allBooks = copied;
            return _this.allBooks;
        };
        // remove book from shelf method
        this.removeBook = function (book) {
            if (_this.allBooks.indexOf(book) === -1) {
                console.log("oops, ".concat(book.title, " was not found in your shelf"));
            }
            else {
                var newBooks = _this.allBooks.filter(function (b) { return b !== book; });
                _this.allBooks = newBooks;
                console.log("You removed '".concat(book.title, "' from your shelf"));
                return _this.allBooks;
            }
            return _this.allBooks;
        };
    }
    return Shelf;
}());
// test
var jonathanLibrary = new Shelf('Jonathan');
// test add book to shelf feature
var bookOne = {
    title: 'The Last Jury',
    author: 'John Grisham',
    genre: 'Crime/Thriller',
    id: 1
};
jonathanLibrary.addToShelf(bookOne);
console.log(jonathanLibrary);
// testing remove book from shelf feature;
var bookTwo = {
    title: 'The Guardian',
    author: 'John Grisham',
    id: 2
};
var bookThree = {
    title: 'Hold Tight',
    author: 'Harlen Cobben',
    genre: 'Mystery/Thriller',
    id: 3
};
jonathanLibrary.addToShelf(bookTwo);
jonathanLibrary.addToShelf(bookThree);
jonathanLibrary.removeBook(bookOne);
console.log(jonathanLibrary);
