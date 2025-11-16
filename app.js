function DiecastCar(options) {
  this.productId = options.productId;           
  this.brand = options.brand;                   
  this.carBrand = options.carBrand;             
  this.modelName = options.modelName;           
  this.color = options.color;                   
  this.scale = options.scale;                   
  this.material = options.material;             
  this.lengthInches = options.lengthInches;     
  this.widthInches = options.widthInches;       
  this.heightInches = options.heightInches;     
  this.packaging = options.packaging;           
  this.hasSunroof = options.hasSunroof;         
  this.openingParts = options.openingParts;     
  this.priceUSD = options.priceUSD;            
  this.isInStock = options.isInStock;            
  this.rating = options.rating;                 

  this.applyDiscount = function (percent) {
    const factor = 1 - percent / 100;
    if (factor < 0) return;
    this.priceUSD = +(this.priceUSD * factor).toFixed(2);
  };
}

const rangeRover12069 = new DiecastCar({
  productId: "12069",
  brand: "Bburago",
  carBrand: "Land Rover",
  modelName: "Range Rover Sport SUV",
  color: "Black",
  scale: "1:18",
  material: "Die-cast metal body with plastic detail parts",
  lengthInches: 9.75,
  widthInches: 3.75,
  heightInches: 3.5,
  packaging: "Window box with clear display window",
  hasSunroof: true,
  openingParts: ["hood", "doors", "hatchback"],
  priceUSD: 31.99,
  isInStock: true,
  rating: 4.8
});

const whiteSpecialEdition = new DiecastCar({
  productId: "12069-SE",
  brand: "Bburago",
  carBrand: "Land Rover",
  modelName: "Range Rover Sport SUV (Special Edition)",
  color: "White",
  scale: "1:18",
  material: "Die-cast metal body with plastic detail parts",
  lengthInches: 9.75,
  widthInches: 3.75,
  heightInches: 3.5,
  packaging: "Collector box",
  hasSunroof: false,
  openingParts: ["doors"],
  priceUSD: 34.99,
  isInStock: false,
  rating: 4.6
});


function renderCar(car) {
  document.getElementById("car-name").textContent =
    car.carBrand + " " + car.modelName;

  document.getElementById("car-brand").textContent =
    car.brand + " • " + car.scale + " diecast model";

  document.getElementById("car-scale").textContent = "Scale " + car.scale;
  document.getElementById("car-color").textContent = "Color: " + car.color;

  const stockBadge = document.getElementById("car-stock");
  stockBadge.textContent = car.isInStock ? "In stock" : "Out of stock";

  stockBadge.classList.remove("in-stock", "out-of-stock");
  stockBadge.classList.add(car.isInStock ? "in-stock" : "out-of-stock");

  document.getElementById("car-price").textContent =
    "$" + car.priceUSD.toFixed(2);

  document.getElementById("car-material").textContent = car.material;

  document.getElementById("car-dimensions").textContent =
    car.lengthInches +
    '" L × ' +
    car.widthInches +
    '" W × ' +
    car.heightInches +
    '" H';

  document.getElementById("car-packaging").textContent = car.packaging;

  document.getElementById("car-opening-parts").textContent =
    car.openingParts.join(", ");

  document.getElementById("car-sunroof").textContent = car.hasSunroof
    ? "Yes"
    : "No";

  document.getElementById("car-rating").textContent = car.rating.toFixed(1);
  document.getElementById("car-product-id").textContent = car.productId;

  
  document.getElementById("car-json").textContent = JSON.stringify(
    car,
    null,
    2
  );
}


document.addEventListener("DOMContentLoaded", function () {

  renderCar(rangeRover12069);

  
  const discountInput = document.getElementById("discount-input");
  const discountLabel = document.getElementById("discount-label");
  const applyDiscountBtn = document.getElementById("apply-discount-btn");

  discountInput.addEventListener("input", function () {
    discountLabel.textContent = discountInput.value;
  });

  applyDiscountBtn.addEventListener("click", function () {
    const percent = parseFloat(discountInput.value);
    rangeRover12069.applyDiscount(percent);
    renderCar(rangeRover12069);
  });

  const newColorInput = document.getElementById("new-color-input");
  const updateColorBtn = document.getElementById("update-color-btn");

  updateColorBtn.addEventListener("click", function () {
    const value = newColorInput.value.trim();
    if (value.length === 0) {
      alert("Please type a color first.");
      return;
    }

    rangeRover12069.color = value;

    renderCar(rangeRover12069);
  });

  const toggleStockBtn = document.getElementById("toggle-stock-btn");
  toggleStockBtn.addEventListener("click", function () {
    rangeRover12069.isInStock = !rangeRover12069.isInStock;
    renderCar(rangeRover12069);
  });

  console.log("Main car instance:", rangeRover12069);
  console.log("Second car instance:", whiteSpecialEdition);
});
