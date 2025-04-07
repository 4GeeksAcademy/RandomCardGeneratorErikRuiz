function generateCard() {
    const suits = ["♦", "♥", "♠", "♣"];
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  
    const suit = suits[Math.floor(Math.random() * suits.length)];
    const value = values[Math.floor(Math.random() * values.length)];
  
    document.getElementById("top-suit").innerText = suit;
    document.getElementById("bottom-suit").innerText = suit;
    document.getElementById("card-value").innerText = value;
  
    const color = ["♦", "♥"].includes(suit) ? "red" : "black";
    document.getElementById("top-suit").style.color = color;
    document.getElementById("bottom-suit").style.color = color;
    document.getElementById("card-value").style.color = color;
  }
  
  function applyDimensions() {
    const width = document.getElementById("card-width").value || 200;
    const height = document.getElementById("card-height").value || 300;
    const card = document.getElementById("card");
  
    card.style.width = `${width}px`;
    card.style.height = `${height}px`;
  }
  
  window.onload = () => {
    generateCard();
    applyDimensions();
  
    document.getElementById("new-card").addEventListener("click", () => {
      generateCard();
      applyDimensions();
    });
  
    setInterval(() => {
      generateCard();
      applyDimensions();
    }, 10000);
  };