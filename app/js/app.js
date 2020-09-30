document.addEventListener("DOMContentLoaded", function() {
  // this function runs when the DOM is ready, i.e. when the document has been parsed

  // all js code should go below this line
  window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.xl_hidden'),
    menuItem = document.querySelectorAll('.header__link'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('xl_hidden_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('xl_hidden_active');
        })
    })
})
});