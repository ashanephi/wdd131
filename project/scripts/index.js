function toggleMenu(element) {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('active');
    element.classList.toggle('active');
  }
  
const attractionsPreview = [
    {
        name: "Kano City",
        image: "images/zuma-1.jpg"
    },
    {
        name: "Kano City Walls",
        image: "images/kano-city-walls.jpg"
    },
    {
        name: "Yankari National Park",
        image: "images/yankari-game-reserve-1.jpg"
    }
];

function displayAttractionsPreview(preview) {
    const previewSection = document.querySelector('.attractions-preview');
    previewSection.innerHTML = '';

    preview.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;
        img.loading = 'lazy';

        const h3 = document.createElement('h3');
        h3.textContent = item.name;

        card.appendChild(img);
        card.appendChild(h3);

        previewSection.appendChild(card);
    });
}

displayAttractionsPreview(attractionsPreview)
