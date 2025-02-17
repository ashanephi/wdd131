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
    description: "All roads lead to Yankari Game Reserve, in Bauchi State, North-Eastern Nigeria. Get ready to experience nature in the country?s biggest wildlife retreat. At the reserve, you will be captivated by the number of activities you can participate in. Marvel at the largest herd of elephants in the country, embark on a guided safari tour, and explore the tropical forests. At the Reserve,  you?ll find different varieties of animal species including the olive baboon, patas monkey, roan antelope, western hartebeest, living in their natural habitats.After your day at the reserve, exploring the marvel of wildlife, head over to the Wikki Warm Spring.  Your visit to the Yankari Game Reserve is incomplete if you don?t experience the warmth of this spring.",
    iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.1108347735058!2d10.50683467368199!3d9.756678577177059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10557f36b86183bf%3A0x27839b35557a1821!2sYankari%20Game%20Reserve!5e0!3m2!1sen!2sng!4v1739795335546!5m2!1sen!2sng"
  },
  {
    name: "Erin Ijesha Waterfall",
    image: "images/erin-ijesha-3.jpg",
    description: "Erin Ijesha Beach is a sheltered beach near Lagos harbour known for relaxation. It offers a serene environment for visitors to unwind and enjoy the scenic views of the coastline.",
    iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126568.73344257884!2d4.803471837984979!3d7.545187573757967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10380fe691bc505d%3A0x504dce56508e737b!2sErin%20Ijesha%20Waterfall!5e0!3m2!1sen!2sng!4v1739795420440!5m2!1sen!2sng"
  },
  {
    name: "Olumo Rock",
    image: "images/olumo-3.jpg",
    description: "Any visit to the city of Abeokuta would be incomplete without stopping by at the ?fortress of Abeokuta?; Olumo Rock. No surprise that this rock is located in Abeokuta, as the name ?Abeokuta? itself means ?under the rock? as has been one of the choice tourist attractions in Nigeria. Olumo Rock has long served as a rock of offense and a fortress for the people of Egba Land, since the 19th century.  At Olumo Rock, you would be treated to attractions like natural tunnels, unusual trees, natural cantilevers, gardens on the rock, broken pathways, monuments of the belief system of the rock?s primeval settlers, e.t.c. You don?t want to miss these attractions, do you?",
    iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126676.8145393277!2d3.2555955461988564!3d7.166345300000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103a49d0929c8dc3%3A0x8b3b657ec52d6ca2!2sOlumo%20Rock%20Tourist%20Centre!5e0!3m2!1sen!2sng!4v1739833422751!5m2!1sen!2sng"
  },
  {
    name: "Osun Sacred Grove",
    image: "images/Osun-sacred-grove.jpg",
    description: "Classified as one of the UNESCO world heritage sites. This sacred forest attracts a large number of tourists as it is definitely worth visiting and is reputed to rank high in the list of tourist attractions in Nigeria. Situated on the outskirts of Oshogbo, the capital of Osun state along the banks of the Osun river. Osun state is one of the states in the South-western part of Nigeria. Majorly populated by the Yorubas who are indigenes of the state. Yoruba people believe that the Osun Sacred Grove, which spans about 75 hectares of land, is home to Osun? the goddess of fertility. A festival that celebrates this fertility goddess takes place every year in Oshogbo. You will find scattered about the forest, shrines, and effigies of different deities. In addition to that, the forest contains about 400 different species of plants that are used for medicinal purposes.",
    iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15812.877659244987!2d4.538595526371671!3d7.76654143706929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103829ef9c933deb%3A0xa0e2f9147e351ea4!2sOsun-Osogbo%20Sacred%20Grove%20park%20and%20Gardens!5e0!3m2!1sen!2sng!4v1739833480515!5m2!1sen!2sng"
  },
  {
    name: "Agbokim Waterfall",
    image: "images/agbokim-waterfalls-1.jpg",
    description: "Agbokim Waterfalls are a series of seven cascades with a total length of 6817.73m.  It is surrounded by green vegetation which is home to thousands of birds that filter the surroundings with soft chirping. Over the years, it has been regarded as the speckle of beauty in fading nature. The magnificence of the Agbokim Waterfall is more appreciated during the rainy season. It is located at Etung Local Government Area of Cross River State in south-eastern Nigeria, on the Nigeria-Cameroon border. It is the perfect location for a picnic, family vacation, tourism, and meditation.",
    iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.6348821463134!2d8.908050767809817!3d5.906791416961477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105c39bb0fbd5e79%3A0x188295729a389b2f!2sAgbokim%20Waterfalls%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1739833540432!5m2!1sen!2sng"
  },
  {
    name: "Obudu Mountain Resort",
    image: "images/obudu-mountain-resort-2.jpg",
    description: "Obudu Mountain Resort, formerly known as Obudu Cattle Ranch, is one of the most beautiful and pleasant tourist center destinations in Nigeria. Located on the Obudu Plateau, close to the Cameroon border, in the Northeastern part of Cross Rivers State. This resort center has grown to become a major destination choice for tourists. It has an attractive landscape and calming ambiance, with clouds smiling down on its peaks and valleys. It offers visitors a good blend of warm and cold temperatures, as it has very temperate weather.The rooms in Obudu Mountain Resort are made up of chalets, standard rooms, executive rooms, huts to presidential suites. Although this resort is open to visitors throughout the year, the period between October and February is the best time to visit, as it is the time when the sky is very bright and the air is frosty.",
    iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.759911419406!2d3.412720673649146!3d6.424885324304251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b769b78a731%3A0x3b1803a2bb9d493a!2sObudu%20Mountain%20Resort%20(formerly%20Obudu%20Cattle%20Ranch)!5e0!3m2!1sen!2sng!4v1739833612055!5m2!1sen!2sng"
  },
  {
    name: "Ogbunike Caves",
    image: "images/ogbunike-caves-2.jpg",
    description: "Ogbunike Caves are situated in a valley with tropical rain forest behind the “Ogba” hills in which lies St. Monica College, Ogbunike. Descending into the valley where the caves are located is a lengthy walkway made up of about 317 steps said to have been constructed by the Anambra State Government in the mid 90s. At the end of the walkway is an open space used as a reception point where visitors are by tradition to remove their shoes.",
    iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.638346319242!2d6.856773973647453!3d6.1791399270720335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1043901bc0b0ac5d%3A0xdb9a6f065658dee2!2sOgbunike%20Cave!5e0!3m2!1sen!2sng!4v1739833708770!5m2!1sen!2sng"
  },
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
