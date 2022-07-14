const items = [
  {
    position: 0,
    el: document.getElementById('carousel-item-1')
  },
  {
    position: 1,
    el: document.getElementById('carousel-item-2')
  },
  {
    position: 2,
    el: document.getElementById('carousel-item-3')
  },
];

const options = {
  defaultPosition: 0,
  interval: 9000,

  // callback functions
  onNext: () => {
    console.log('next slider item is shown');
  },
  onPrev: () => {
    console.log('previous slider item is shown');
  },
  onChange: () => {
    console.log('new slider item has been shown');
  }
};


const carousel = new Carousel(items, options);
// carousel.slideTo(0)

const prevButton = document.getElementById('data-carousel-prev');
const nextButton = document.getElementById('data-carousel-next');

prevButton.addEventListener('click', () => {
  carousel.prev();
});

nextButton.addEventListener('click', () => {
  carousel.next();
});
