class Library {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) ? JSON.parse(localStorage.getItem('books')) : [];
  }

  updateLocalStorage() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  displayBooks() {
    const library = document.getElementById('library');
    while (library.firstChild) library.removeChild(library.firstChild);
    let count = 1;
    this.books.forEach((book) => {
      book.Number = JSON.stringify(count);
      library.insertAdjacentHTML('beforeend', `
        <div class="book">
          <span>"${book.title}" by ${book.author}</span>
          <button class="remove-btn" data-id="${book.Number}">Remove</button>
        </div>
      `);
      count += 1;
    });

    const removeBook = (id) => {
      this.books = this.books.filter((book) => book.Number !== id);
      this.updateLocalStorage();
    };

    const removeButtons = document.querySelectorAll('.remove-btn');
    removeButtons.forEach((button) => button.addEventListener('click', (e) => {
      removeBook(e.target.dataset.id);
      e.target.parentElement.remove();
    }));
  }

  addBook(title, author) {
    this.books.push({ title, author });
    this.updateLocalStorage();
  }
}
export default new Library();
