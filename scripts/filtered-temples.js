document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('last-modified').textContent = document.lastModified;

document.getElementById('menu').addEventListener('click', function() {
    const navList = document.getElementById('nav-list');
    navList.classList.toggle('hidden');
});

let title = document.querySelector(".title");


// Temple Data Array
const temples = [
  {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
   // Add more temple objects here...
  {
      templeName: "Accra Ghana",
      location: "Accra, Ghana",
      dedicated: "2004, January, 11",
      area: 17500,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
  },
  {
      templeName: "Oakland California Temple",
      location: "Oakland, California",
      dedicated: "2019, June, 16",
      area: 17500,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/oakland-california-temple/oakland-california-temple-2654-main.jpg"
  },
  {
      templeName: "London England Temple",
      location: "London, England",
      dedicated: "1992, October, 18-20",
      area: 17500,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/london-england-temple/london-england-temple-4243-main.jpg"
  },

];

const temple_gallery = document.querySelector(".temple-gallery");

function create_temple_card (temple)
{
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const figcaption = document.createElement("figcaption");
    
    const temple_location = document.createElement('p');
    const dedicated = document.createElement("p");
    const size = document.createElement("p");

    img.src = `${temple.imageUrl}`;
    img.alt = `${temple.templeName}`;
    img.loading = "lazy";
    
    figcaption.textContent = `${temple.templeName}`;
    temple_location.textContent = `${temple.location}`;
    dedicated.textContent = `${temple.dedicated}`;
    size.textContent = `${temple.area}`;
    
    
    
    
    figure.append(figcaption);
    figure.append(temple_location);
    figure.append(dedicated);
    figure.append(size);
    figure.append(img);
    
    return figure;

}

function filterTemples(filter) {
    let filteredTemples = [];
    switch (filter) {
        case 'old':
            title.textContent = "Old";
            filteredTemples = temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(',')[0]);
                return year < 1900;
            });
            break;
        case 'new':
            title.textContent = "New";
            filteredTemples = temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(',')[0]);
                return year > 2000;
            });
            break;
        case 'large':
            title.textContent = "Large";
            filteredTemples = temples.filter(temple => temple.area > 90000);
            break;
        case 'small':
            title.textContent = "Small";
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;
        default:
            title.textContent = "Home";
            filteredTemples = temples;
            break;
    }
    const temple_gallery = document.querySelector(".temple-gallery");
    temple_gallery.innerHTML = '';

    // Add the filtered temples to the gallery
    filteredTemples.forEach(temple => {
        const templeCard = create_temple_card(temple);
        temple_gallery.appendChild(templeCard);
    });
    
}

// Event listeners for menu buttons
document.getElementById('home').addEventListener('click', () => filterTemples('all'));
document.getElementById('old').addEventListener('click', () => filterTemples('old'));
document.getElementById('new').addEventListener('click', () => filterTemples('new'));
document.getElementById('large').addEventListener('click', () => filterTemples('large'));
document.getElementById('small').addEventListener('click', () => filterTemples('small'));


filterTemples("all");
