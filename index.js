import library from './modules/library.js';
import { DateTime } from './modules/luxon.js';
import './modules/menu.js';

const currentDateTime = document.querySelector('.date-time');
setInterval(() => {
  const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
  currentDateTime.textContent = now;
}, 1000);

const addButton = document.getElementById('add-btn');
addButton.addEventListener('click', () => {
  const inputTitle = document.getElementById('input-title').value;
  const inputAuthor = document.getElementById('input-author').value;
  if (inputTitle && inputAuthor) {
    library.addBook(inputTitle, inputAuthor);
  }
});

library.displayBooks();