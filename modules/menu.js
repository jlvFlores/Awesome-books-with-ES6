import library from "./library.js";

const menuList = document.getElementById('menu-list');
const menuAdd = document.getElementById('menu-add');
const menuContact = document.getElementById('menu-contact');

const sections = {
  library: document.querySelector('.library-section'),
  add: document.querySelector('.add-section'),
  contact: document.querySelector('.contact-section')
};

window.onload = () => {
  menuList.classList.add('blue');
  hideSections(sections.add, sections.contact);
};

const menuChange = (self, secondLI, thirdLI) => {
  self.classList.add('blue');
  secondLI.classList.remove('blue');
  thirdLI.classList.remove('blue');
};

const hideSections = (...sections) => {
  sections.forEach(section => section.classList.add('hide'));
};

const sectionChange = (self, secondSection, thirdSection) => {
  self.classList.remove('hide');
  hideSections(secondSection, thirdSection);
};

const handleMenuClick = (self, secondMenu, thirdMenu, selfSection, secondSection, thirdSection) => {
  menuChange(self, secondMenu, thirdMenu);
  sectionChange(selfSection, secondSection, thirdSection);
};

menuList.addEventListener('click', () => {
  handleMenuClick(menuList, menuAdd, menuContact, sections.library, sections.add, sections.contact);
  library.displayBooks();
});

menuAdd.addEventListener('click', () => {
  handleMenuClick(menuAdd, menuContact, menuList, sections.add, sections.library, sections.contact);
});

menuContact.addEventListener('click', () => {
  handleMenuClick(menuContact, menuList, menuAdd, sections.contact, sections.add, sections.library);
});