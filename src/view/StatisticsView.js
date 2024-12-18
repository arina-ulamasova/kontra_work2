class StatisticsView {
    constructor(container) {
        this.container = container;
        this.statsBlock = null;
    }

    render() {
        this.statsBlock = document.createElement('div');
        this.statsBlock.className = 'statistics';
        this.statsBlock.innerHTML = `
            <h2>Статистика</h2>
            <div class="stats-block">
                <p>Всего книг: <span id="total-books">0</span></p>
            </div>
        `;
        this.container.appendChild(this.statsBlock);
    }

    updateTotalBooks(count) {
        const totalBooksElement = document.getElementById('total-books');
        if (totalBooksElement) {
            totalBooksElement.textContent = count;
        }
    }
}

export default StatisticsView;
