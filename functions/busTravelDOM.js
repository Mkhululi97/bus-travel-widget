const inputPoints = document.querySelector(".points");
const calcBtn = document.querySelector(".calculate-btn");
const checkBox = document.querySelector(".return-trip-checkbox");
const inputSingleTrips = document.querySelector("single-trips");
const inputPricePerTrip = document.querySelector(".price-per-trip");
const inputReturnTrips = document.querySelector(".return-trip");
const inputPricePerReturnTrip = document.querySelector(
  ".price-per-return-trip"
);
let busTripCalculator = BusTripCalculator();

function calcBtnFunction() {
  const selectLocation = document.querySelector("select");
  const selectedRadio = document.querySelector(".radio-btn:checked");
  if (selectLocation && selectedRadio) {
    // set the points
    Number(busTripCalculator.setPoints(inputPoints.value));
    // take trip function
    busTripCalculator.takeTrip(selectLocation.value, selectedRadio.value);
    // get single trips
    console.log(busTripCalculator.getSingleTrips());
  }
}

calcBtn.addEventListener("click", calcBtnFunction);
