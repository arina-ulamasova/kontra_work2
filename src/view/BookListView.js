class BookListView {
    constructor(container) {
        this.container = container;
        this.listContainer = null; // Список книг создается динамически.
    }

    render() {
        this.listContainer = document.createElement('div');
        this.listContainer.id = 'books-container';
        this.container.appendChild(this.listContainer);
    }

    renderBooks(books) {
        this.listContainer.innerHTML = '';
        books.forEach((book, index) => {
            const bookCard = document.createElement('div');
            bookCard.className = 'book-card';
            bookCard.innerHTML = `
                <div>
                    <h3>${book.title}</h3>
                    <p>Автор: ${book.author}</p>
                    <p>Год: ${book.year}</p>
                    <p>Жанр: ${book.genre}</p>
                    <p>Статус: ${book.status}</p>
                </div>
                <button class="delete-btn" data-index="${index}">Удалить</button>
            `;
            this.listContainer.appendChild(bookCard);
        });
    }

    bindDeleteBook(handler) {
        this.listContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('delete-btn')) {
                const index = e.target.dataset.index;
                handler(index);
            }
        });
    }
}

export default BookListView;
