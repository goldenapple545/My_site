const burger = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar ');
const page = document.getElementById('page');
const body = document.body;

burger.addEventListener('click', ev => {
    if ( body.classList.contains('show-sidebar') ) {
        closeSidebar();
    } else {
        showSidebar();
    }
})

const showSidebar = () => {
    let mask = document.createElement('div');
    mask.classList.add('page__mask');
    mask.addEventListener('click', closeSidebar);
    page.appendChild(mask);

    body.classList.add('show-sidebar')

    setTimeout(() => {
        mask.style.opacity = '1';
    },  1);
}

const closeSidebar = () => {
        body.classList.remove('show-sidebar')
        document.querySelector('.page__mask').remove();
}