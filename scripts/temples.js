document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('last-modified').textContent = document.lastModified;

document.getElementById('menu').addEventListener('click', function() {
    const navList = document.getElementById('nav-list');
    navList.classList.toggle('hidden');
});
