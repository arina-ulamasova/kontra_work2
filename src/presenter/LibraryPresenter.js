import LibraryModel from '../model/LibraryModel.js';
import BookFormView from '../view/BookFormView.js';
import FiltersView from '../view/FiltersView.js';
import BookListView from '../view/BookListView.js';
import StatisticsView from '../view/StatisticsView.js';

class LibraryPresenter {
    constructor(containerId) {
        this.container = document.getElementById(containerId);

        this.model = new LibraryModel();

        this.statsView = new StatisticsView(this.container);
        this.formView = new BookFormView(this.container);
        this.filtersView = new FiltersView(this.container);
        this.listView = new BookListView(this.container);


        this.statsView.render();
        this.formView.render();
        this.filtersView.render();
        this.listView.render();


        this.formView.bindAddBook(this.handleAddBook.bind(this));
        this.filtersView.bindFilters(this.handleFilterBooks.bind(this));
        this.listView.bindDeleteBook(this.handleDeleteBook.bind(this));


        this.updateView();
    }

    handleAddBook(book) {
        if (!book.title || !book.author || !book.year || !book.genre || !book.status) {
            alert('Все поля должны быть заполнены!');
            return;
        }
        this.model.addBook(book);
        this.formView.clearForm();
        this.updateView();
    }

    handleDeleteBook(index) {
        this.model.removeBook(index);
        this.updateView();
    }

    handleFilterBooks() {
        const filters = this.filtersView.getFilters();
        const filteredBooks = this.model.filterBooks(filters.genre, filters.query);
        this.listView.renderBooks(filteredBooks);
    }

    updateView() {
        const books = this.model.getBooks();
        this.listView.renderBooks(books);
        this.statsView.updateTotalBooks(books.length); 
    }
}

export default LibraryPresenter;