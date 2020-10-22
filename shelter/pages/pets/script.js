const pets = [
  {
    "name": "Katrine",
    "img": "../../assets/images/katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Jennifer",
    "img": "../../assets/images/jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "../../assets/images/woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "../../assets/images/sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "../../assets/images/timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../../assets/images/charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  },
  {
    "name": "Scarlett",
    "img": "../../assets/images/scarlett.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "../../assets/images/freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  }
];

const popup = document.querySelector('.popup');
const petsElements = document.querySelectorAll('.pet-card');

// popup
const imageElement = document.querySelector('.popup-content-image');

const titleElement = document.querySelector('.popup-title');
const typeElement = document.querySelector('.popup-type');
const breedElement = document.querySelector('.popup-breed');
const detailsElement = document.querySelector('.popup-details');

const ageElement = document.querySelector('.popup-age');
const inoculationsElement = document.querySelector('.popup-inoculations');
const diseasesElement = document.querySelector('.popup-diseases');
const parasitesElement = document.querySelector('.popup-parasites');

petsElements.forEach((el) => {
  el.addEventListener('click', () => {
    const { textContent } = el.children[1];
    const pet = pets.find((el) => el.name === textContent);
    const {
      type, breed,
      description, 
      age, inoculations, diseases, parasites } = pet;

    imageElement.classList.value = '';
    imageElement.classList.add('popup-content-image', `${textContent.toLowerCase()}`);
    titleElement.textContent = textContent;
    typeElement.textContent = type;
    breedElement.textContent = breed;
    detailsElement.textContent = description;
    ageElement.textContent = age;
    inoculationsElement.textContent = inoculations.join(', ');
    diseasesElement.textContent = diseases.join(', ');
    parasitesElement.textContent = parasites.join(', ');

    popup.classList.remove('hidden');
  });
})

document.querySelector('.close-popup').addEventListener('click', () => {
  popup.classList.add('hidden');
});

popup.addEventListener('click', ({target}) => {
  if (target.classList.contains('popup')) {
    popup.classList.add('hidden');
  }
})

// slider
const [leftFull, left, numberPage, right, rightFull] = document.querySelector('.pets-navigation').children;
const shuffle = (slider) => {
  const arr = [...slider.children].slice().sort(() => Math.random() - 0.5);
  slider.textContent = '';
  arr.forEach((el) => {
    slider.append(el);
  })
}

let count = 1;
const slider = document.querySelector('.pets-container');

leftFull.addEventListener('click', () => {
  leftFull.classList.remove('active');
  left.classList.remove('active');
  rightFull.classList.add('active');
  right.classList.add('active');
  shuffle(slider);
  count = 1;
  numberPage.textContent = count;
});

rightFull.addEventListener('click', () => {
  rightFull.classList.remove('active');
  right.classList.remove('active');
  leftFull.classList.add('active');
  left.classList.add('active');
  if (window.innerWidth >= 1280) {
    shuffle(slider);
    count = 6;
    numberPage.textContent = count;
  }
  if (window.innerWidth <= 768 && window.innerWidth > 320) {
    shuffle(slider);
    count = 8;
    numberPage.textContent = count;
  }
  if (window.innerWidth <= 320) {
    shuffle(slider);
    count = 16;
    numberPage.textContent = count;
  }
});

left.addEventListener('click', () => {
  if (count === 2) {
    leftFull.classList.remove('active');
    left.classList.remove('active');
  }
  if (window.innerWidth >= 1280) {
    if (count === 6) {
      rightFull.classList.add('active');
      right.classList.add('active');
    }
  }
  if (window.innerWidth <= 768 && window.innerWidth > 320) {
    if (count === 8) {
      rightFull.classList.add('active');
      right.classList.add('active');
    }
  }
  if (window.innerWidth <= 320) {
    if (count === 16) {
      rightFull.classList.add('active');
      right.classList.add('active');
    }
  }
  if (count > 1) {
    shuffle(slider);
    count -= 1;
    numberPage.textContent = count;
  }
});
right.addEventListener('click', () => {
  if (window.innerWidth >= 1280) {
    if (count === 5) {
      rightFull.classList.remove('active');
      right.classList.remove('active');
    }
  }
  if (window.innerWidth <= 768 && window.innerWidth > 320) {
    if (count === 7) {
      rightFull.classList.remove('active');
      right.classList.remove('active');
    }
  }
  if (window.innerWidth <= 320) {
    if (count === 15) {
      rightFull.classList.remove('active');
      right.classList.remove('active');
    }
  }
  if (count === 1) {
    leftFull.classList.add('active');
    left.classList.add('active');
  }
  if (window.innerWidth >= 1280) {
    if (count < 6) {
      shuffle(slider);
      count += 1;
      numberPage.textContent = count;
    }
  }
  if (window.innerWidth <= 768 && window.innerWidth > 320) {
    if (count < 8) {
      shuffle(slider);
      count += 1;
      numberPage.textContent = count;
    }
  }
  if (window.innerWidth <= 320) {
    if (count < 16) {
      shuffle(slider);
      count += 1;
      numberPage.textContent = count;
    }
  }
});
