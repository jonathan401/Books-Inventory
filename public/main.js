"use strict";
// create Book Inventory class (shelf);
var Shelf = /** @class */ (function () {
    function Shelf(owner) {
        this.owner = owner;
        this.allBooks = [];
    }
    return Shelf;
}());
// test
var jonathanLibrary = new Shelf('Jonathan');
