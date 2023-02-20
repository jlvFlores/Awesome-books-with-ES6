const menuList = document.getElementById('menu-list');
const menuAdd = document.getElementById('menu-add');
const menuContact = document.getElementById('menu-contact');

const librarySection = document.querySelector('.library-section');
const addSection = document.querySelector('.add-section');
const contactSection = document.querySelector('.contact-section');

window.onload = () => {
  menuList.classList.add('blue');

  addSection.classList.add('hide');
  contactSection.classList.add('hide');
};

const menuChange = (self, secondLi, thirdLi) => {
  self.classList.add('blue');
  secondLi.classList.remove('blue');
  thirdLi.classList.remove('blue');
};

const sectionChange = (self, secondSection, thirdSection) => {
  self.classList.remove('hide');
  secondSection.classList.add('hide');
  thirdSection.classList.add('hide');
};

menuList.addEventListener('click', () => {
  menuChange(menuList, menuAdd, menuContact);
  sectionChange(librarySection, contactSection, addSection);
});

menuAdd.addEventListener('click', () => {
  menuChange(menuAdd, menuContact, menuList);
  sectionChange(addSection, librarySection, contactSection);
});

menuContact.addEventListener('click', () => {
  menuChange(menuContact, menuList, menuAdd);
  sectionChange(contactSection, addSection, librarySection);
});