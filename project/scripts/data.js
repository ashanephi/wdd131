function toggleMenu(element) {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('active');
    element.classList.toggle('active');
  }

const touristSites = [
  {
    name: "Zuma Rock",
    image: "images/zuma-2.jpg",
    description: "The rock ranks high as one of the choice tourist attractions in the Country. Zuma Rock, the monolithic Inselberg with a human face, is located in Madalla, Niger State, to the North of Abuja. It was once described as the unquestionable watchman of the F.C.T. It is the sandy concealment that hangs like a haze over Zuba Town. The other mountains in and around it stay a considerable distance from it, which the Zuba people see as a form of respect being paid by the other mountains to Zuma Rock for its royal presence in the locality.Visiting Zuma Rock between April and October, which marks the rainy season in central Nigeria where the rock is situated, would afford you the opportunity of seeing the much talked Zuma Rock Fire, as the apex of the Zuma Rock catches fire under heavy rainfall. Over time, this has remained one of the wonders of the Zuma Rock.",
    iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15757.27845841774!2d7.218589226600317!3d9.12557689130405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104dd7d112caed1b%3A0xb415df4f7772bdb8!2sZuma%20Rock!5e0!3m2!1sen!2sng!4v1739795221919!5m2!1sen!2sng"
  },
  {
    name: "Yankari National Park",
    image: "images/yankari-game-reserve-2.jpg",
    description: "Yankari National Park is a premier game reserve with diverse wildlife and natural springs. It is located in Bauchi State, Nigeria, and is a popular destination for tourists seeking to experience the beauty of Nigeria's natural landscape.",
    iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.1108347735058!2d10.50683467368199!3d9.756678577177059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10557f36b86183bf%3A0x27839b35557a1821!2sYankari%20Game%20Reserve!5e0!3m2!1sen!2sng!4v1739795335546!5m2!1sen!2sng"
  },
  {
    name: "Erin Ijesha Waterfall",
    image: "images/erin-ijesha-3.jpg",
    description: "Erin Ijesha Beach is a sheltered beach near Lagos harbour known for relaxation. It offers a serene environment for visitors to unwind and enjoy the scenic views of the coastline.",
    iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126568.73344257884!2d4.803471837984979!3d7.545187573757967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10380fe691bc505d%3A0x504dce56508e737b!2sErin%20Ijesha%20Waterfall!5e0!3m2!1sen!2sng!4v1739795420440!5m2!1sen!2sng"
  }
];


function displayTouristSites(sites) {
  const attractionsSection = document.querySelector('.attractions');
  attractionsSection.innerHTML = '';

  sites.forEach(site => {
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = site.image;
    img.alt = site.name;
    img.loading = 'lazy';

    const h3 = document.createElement('h3');
    h3.textContent = site.name;

    const p = document.createElement('p');
    p.textContent = site.description.length > 100 ? `${site.description.substring(0, 150)}...` : site.description;

    const button = document.createElement('button');
    button.textContent = 'Learn More';
    button.onclick = () => {
      localStorage.setItem('selectedSite', JSON.stringify(site));
      window.location.href = 'details.html';
    };

    card.appendChild(img);
    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(button);

    attractionsSection.appendChild(card);
  });
}


function searchTouristSites(event) {
  const query = event.target.value.toLowerCase();
  const filteredSites = touristSites.filter(site => site.name.toLowerCase().includes(query));
  displayTouristSites(filteredSites);
}

document.addEventListener('DOMContentLoaded', () => {
  displayTouristSites(touristSites);
  displayAttractionsPreview(attractionsPreview);
  const searchInput = document.querySelector('input[type="text"]');
  searchInput.addEventListener('input', searchTouristSites);
});

function displaySelectedSite() {
  const site = JSON.parse(localStorage.getItem('selectedSite'));
  if (!site) return;

  document.querySelector('.details img').src = site.image;
  document.querySelector('.details img').alt = site.name;
  document.querySelector('.details-content h2').textContent = site.name;
  document.querySelector('.details-content p').textContent = site.description;

  const iframe = document.createElement('iframe');
  iframe.src = site.iframeSrc;
  iframe.width = "600";
  iframe.height = "450";
  iframe.style.border = "0";
  iframe.allowFullscreen = "";
  iframe.loading = "lazy";
  iframe.referrerPolicy = "no-referrer-when-downgrade";

  document.querySelector('.details-content').appendChild(iframe);
}

if (document.querySelector('.details')) {
  document.addEventListener('DOMContentLoaded', displaySelectedSite);
}
