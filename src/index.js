const cards = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
];

const memoryGame = new MemoryGame(cards);

window.addEventListener("load", (event) => {
  let html = "";
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  document.querySelector("#memory-board").innerHTML = html;

  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");

      const flippedCards = document.querySelectorAll(".card.flipped");
      if (flippedCards.length === 2) {
        const card1 = flippedCards[0].dataset.cardName;
        const card2 = flippedCards[1].dataset.cardName;

        this.pairsClicked = document.getElementById("pairs-clicked");
        this.pairsGuessed = document.getElementById("pairs-guessed");

        const isMatch = memoryGame.checkIfPair(card1, card2);
        pairsClicked.innerHTML = memoryGame.pairsClicked;

        if (!isMatch) {
          setTimeout(() => {
            flippedCards.forEach((card) => {
              card.classList.remove("flipped");
            });

            memoryGame.pickedCards = [];
          }, 1000);
        } else {
          pairsGuessed.innerHTML = memoryGame.pairsGuessed;

          if (memoryGame.checkIfFinished()) {
            memoryGame.pickedCards = [];
          }
        }
        memoryGame.pickedCards = [];
      }
    });
  });
});
