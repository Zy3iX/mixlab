document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector("#navbar");
  const featuresSection = document.querySelector(".content__features");
  const howItWorksSection = document.querySelector(".content__how-it-works");
  const otherSections = document.querySelectorAll(".content__other-sections");

  let lastScrollTop = 0; 
  let isNavbarVisible = true;

  function handleScroll() {
    const scrollTop = window.scrollY;
    
    if (scrollTop > featuresSection.offsetHeight + howItWorksSection.offsetHeight && isNavbarVisible) {
      navbar.classList.add("hidden");
      isNavbarVisible = false;
      console.log("Hiding navbar");
    } 
    else if (scrollTop <= featuresSection.offsetHeight + howItWorksSection.offsetHeight && !isNavbarVisible) {
      navbar.classList.remove("hidden");
      isNavbarVisible = true;
      console.log("Showing navbar on featureScetion and howItWorksSection");
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
  }

  window.addEventListener("scroll", handleScroll);

  otherSections.forEach(section => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting && entry.target !== featuresSection && entry.target !== howItWorksSection) {
            navbar.classList.add("hidden");
            isNavbarVisible = false;
            console.log("На остальных секциях, скрываем навбар");
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
  });
});

const list = document.querySelector(".list");

const reviews = [
  {
    key: 1,
    img: "./img/reviewDog1.png",
    review:
      "“Tootsie just received her Mixlab order and she’s so excited for it! Within two hours of ordering it got delivered to the house and its like she knew it was at the door. She absolutely hates taking her medicine but she truly loves her Mixlab box because it’s so informative, quick, easy to order but especially because includes a new toy each time! Thank you Mixlab for always taking care of her! She can’t wait to place her next order now!”",
    from: "Tootsie, CA",
  },
  {
    key: 2,
    img: "./img/reviewDog2.jpg",
    review:
      "Luna’s Mixlab order just arrived, and she was wagging her tail the moment I picked up the box! She usually turns her nose up at medicine, but Mixlab’s approach is a game-changer. Everything is so well organized, easy to use, and the little extra goodies always brighten her day. I can’t recommend Mixlab enough – fast, reliable, and pet-friendly in every way!",
    from: "Luna, Mochi",
  },
  {
    key: 3,
    img: "./img/reviewDog3.jpg",
    review:
      "Charlie just got his Mixlab package, and he couldn’t be happier! The delivery was incredibly fast, arriving the same day we placed the order. Usually, giving him medicine is a struggle, but Mixlab makes it so much easier. The personalized packaging, detailed instructions, and thoughtful little surprises make all the difference. Thank you, Mixlab, for making this process stress-free for both of us!",
    from: "Charlie",
  },
];

reviews.forEach((card, index) => {
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.style = `--position: ${index + 1}`;
  newCard.innerHTML = `
      <div class="card__img">
        <img
          src="${card.img}"
        />
      </div>
      <div class="card__flex">
        <p>${card.review}</p>
        <span>
          ${card.from}
        </spap>
      </div>
`;

  list.appendChild(newCard);
});
