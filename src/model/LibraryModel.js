class LibraryModel {
    constructor() {
        this.books = [];
    }

    getBooks() {
        return this.books;
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(index) {
        this.books.splice(index, 1);
    }

    filterBooks(genre, query) {
        return this.books.filter((book) => {
            const matchesGenre = genre ? book.genre === genre : true;
            const matchesQuery = query
                ? book.title.toLowerCase().includes(query.toLowerCase()) ||
                  book.author.toLowerCase().includes(query.toLowerCase())
                : true;
            return matchesGenre && matchesQuery;
        });
    }
}

export default LibraryModel;
