class BookFormView {
    constructor(container) {
        this.container = container;
        this.form = null; // Форма будет создана динамически.
    }

    render() {
        this.form = document.createElement('form');
        this.form.id = 'book-form';
        this.form.innerHTML = `
            <h2>Добавление книги</h2>
            <input type="text" id="title" placeholder="Название книги">
            <input type="text" id="author" placeholder="Автор">
            <input type="number" id="year" placeholder="Год издания" min="1000" max="2024">
            <select id="genre">
                <option value="">Выберите жанр</option>
                <option value="FICTION">Художественная литература</option>
                <option value="SCIENCE">Научная литература</option>
                <option value="HISTORY">Историческая литература</option>
                <option value="PROGRAMMING">Программирование</option>
            </select>
            <select id="status">
                <option value="">Статус книги</option>
                <option value="AVAILABLE">Доступна</option>
                <option value="BORROWED">Выдана</option>
                <option value="RESERVED">Зарезервирована</option>
            </select>
            <button type="submit">Добавить книгу</button>
        `;
        this.container.appendChild(this.form);
    }

    bindAddBook(handler) {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            const book = {
                title: document.getElementById('title').value.trim(),
                author: document.getElementById('author').value.trim(),
                year: document.getElementById('year').value,
                genre: document.getElementById('genre').value,
                status: document.getElementById('status').value,
            };
            handler(book);
        });
    }

    clearForm() {
        this.form.reset();
    }
}

export default BookFormView;
