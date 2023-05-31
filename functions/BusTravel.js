function BusTripCalculator() {
  let busyOrNot = "";
  let points = {
    pointsEntered: 0,
    totalPoints: 0,
  };
  let priceTrip = {
    singleTrips: 0,
    returnTrips: 0,
  };
  let numOfTrips = {
    numSingleTrips: 0,
    numReturnTrips: 0,
  };
  let tripInfo = {
    Khayelitsha: 40,
    Dunoon: 25,
    MitchellsPlain: 30,
    peakHourIncrease: 0.25,
  };
  function setPoints(inputPoints) {
    points.pointsEntered = inputPoints;
    return points.pointsEntered;
  }
  function getCostLocation(inputLocation) {
    return tripInfo[inputLocation];
  }
  function typeOfHours(peakOrOffPeak) {
    busyOrNot = peakOrOffPeak;
    return busyOrNot;
  }
  function takeTrip(inputLocation, peakOrOffPeak) {
    if (peakOrOffPeak === "off peak") {
      /* Dealing with the price for the trips */
      priceTrip.singleTrips = tripInfo[inputLocation];
      priceTrip.returnTrips = 2 * tripInfo[inputLocation];

      /* Dealing with number of trips */
      numOfTrips.numSingleTrips =
        points.pointsEntered / tripInfo[inputLocation];

      numOfTrips.numReturnTrips =
        points.pointsEntered / (2 * tripInfo[inputLocation]);
    }
  }

  /* Dealing with the price for the trips */
  function getPricePerTrip() {
    return priceTrip.singleTrips;
  }
  function getPriceReturningTrips() {
    return priceTrip.returnTrips;
  }

  /* Dealing with number of trips */
  function getSingleTrips() {
    return numOfTrips.numSingleTrips;
  }
  function getReturningTrips() {
    return numOfTrips.numReturnTrips;
  }

  return {
    setPoints,
    getCostLocation,
    typeOfHours,
    takeTrip,
    getPricePerTrip,
    getPriceReturningTrips,
    getSingleTrips,
    getReturningTrips,
  };
}
