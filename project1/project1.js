
window.onscroll = function () {
  const topButton = document.getElementById("topBtn");
  if (topButton) {
    topButton.style.display = (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) ? "block" : "none";
  }
};

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.addEventListener("DOMContentLoaded", () => {
  const descriptionsByPage = {
    "project1colors.html": {
      "Red": "Red is the color of apples and fire trucks.",
      "Blue": "Blue is the color of blueberries.",
      "Green": "Green is the color of grass.",
      "Yellow": "Yellow is the color of bananas.",
      "Orange": "Orange is the color of pumpkins and carrots.",
      "Purple": "Purple is the color of grapes and eggplants.",
      "Pink": "Pink is the color of flamingos.",
      "Brown": "Brown is the color of chocolate.",
      "Black": "Black is the color of charcoal.",
      "White": "White is the color of snow and clouds."
    },
    "project1numbers.html": {
      "1": "One is the start of every count!",
      "2": "Two means a pair, like shoes.",
      "3": "Three is the number of sides a triangle has.",
      "4": "Four legs make a table sturdy.",
      "5": "Five fingers on each hand.",
      "6": "Six is one more than a hand of fingers.",
      "7": "Seven days make a week.",
      "8": "Eight legs on a spider",
      "9": "Nine is almost ten.",
      "10": "Ten fingers make clapping fun!"
    },
    "project1animals.html": {
      "Dog": "Dogs make the sound 'woof' or bark.",
      "Cat": "Cats like to meow and nap.",
      "Lion": "Lions are strong and called the king of the jungle.",
      "Elephant": "Elephants are big and have long trunks.",
      "Monkey": "Monkeys love to swing in trees.",
      "Rabbit": "Rabbits hop and have long ears.",
      "Bear": "Bears are big and love honey.",
      "Duck": "Ducks waddle and quack.",
      "Frog": "Frogs can jump far and say 'ribbit'.",
      "Tiger": "Tigers have orange fur with black stripes."
    },
    "project1shapes.html": {
      "Circle": "A circle is round and has no corners.",
      "Square": "A square has four equal sides.",
      "Triangle": "A triangle has three straight sides.",
      "Trapezoid": "A trapezoid has four sides with two that are parallel.",
      "Rectangle": "A rectangle has two long sides and two short sides.",
      "Oval": "An oval is like a stretched circle.",
      "Octagon": "An octagon has eight sides.",
      "Star": "A star has five points.",
      "Pentagon": "A pentagon has five sides.",
      "Hexagon": "A hexagon has six equal sides.",
    }
  };

  const path = window.location.pathname.split("/").pop();
  const descriptions = descriptionsByPage[path];
  if (!descriptions) return;

  const cards = document.querySelectorAll(".card");
  const output = document.getElementById("output");
  const desc = document.getElementById("description");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      const name = card.getAttribute("data-name");
      if (output) output.textContent = "You selected: " + name;
      if (desc) desc.textContent = descriptions[name] || "";
    });
  });
});
