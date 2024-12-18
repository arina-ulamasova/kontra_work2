class FiltersView {
    constructor(container) {
        this.container = container;
        this.filters = null; // Фильтры будут созданы динамически.
    }

    render() {
        this.filters = document.createElement('div');
        this.filters.id = 'filters';
        this.filters.innerHTML = `
            <h2>Фильтры</h2>
            <select id="genre-filter">
                <option value="">Все жанры</option>
                <option value="FICTION">Художественная литература</option>
                <option value="SCIENCE">Научная литература</option>
                <option value="HISTORY">Историческая литература</option>
                <option value="PROGRAMMING">Программирование</option>
            </select>
            <input type="text" id="search-input" placeholder="Поиск по названию или автору">
        `;
        this.container.appendChild(this.filters);
    }

    bindFilters(handler) {
        const genreFilter = document.getElementById('genre-filter');
        const searchInput = document.getElementById('search-input');

        genreFilter.addEventListener('change', handler);
        searchInput.addEventListener('input', handler);
    }

    getFilters() {
        const genreFilter = document.getElementById('genre-filter');
        const searchInput = document.getElementById('search-input');
        return {
            genre: genreFilter.value,
            query: searchInput.value,
        };
    }
}

export default FiltersView;
