describe("Test My BusTravel Factory Function", function () {
  /* ----- GETTING THE DATA ----- */

  describe("Get The Data", function () {
    it("should set the number of points entered", function () {
      const busTripCalculator = BusTripCalculator();
      assert.equal(160, busTripCalculator.setPoints(160));
      assert.equal(40, busTripCalculator.setPoints(40));
      assert.equal(80, busTripCalculator.setPoints(80));
    });
    it("should set the number of points entered", function () {
      const busTripCalculator = BusTripCalculator();
      assert.equal(260, busTripCalculator.setPoints(260));
      assert.equal(450, busTripCalculator.setPoints(450));
      assert.equal(800, busTripCalculator.setPoints(800));
    });
    it("should get the trip cost according to location", function () {
      const busTripCalculator = BusTripCalculator();
      assert.equal(25, busTripCalculator.getCostLocation("Dunoon"));
      assert.equal(30, busTripCalculator.getCostLocation("MitchellsPlain"));
      assert.equal(40, busTripCalculator.getCostLocation("Khayelitsha"));
    });
  });

  /* ----- CALCULATIONS ----- */
  describe("CALCULATIONS", function () {
    describe("During Off Peak Hours", function () {
      // deals with the single trips
      it("should get the number of single trips", function () {
        const busTripCalculator = BusTripCalculator();
        busTripCalculator.setPoints(40);
        busTripCalculator.takeTrip("Khayelitsha", "off peak");
        assert.equal(1, busTripCalculator.getSingleTrips());
      });

      it("should get the price per trip", function () {
        const busTripCalculator = BusTripCalculator();
        busTripCalculator.takeTrip("Khayelitsha", "off peak");
        assert.equal(40, busTripCalculator.getPricePerTrip());
      });

      // deals with the returning trips
      it("should get the number of returning trips", function () {
        const busTripCalculator = BusTripCalculator();
        busTripCalculator.setPoints(160);
        busTripCalculator.takeTrip("Khayelitsha", "off peak");
        assert.equal(2, busTripCalculator.getReturningTrips());
      });

      it("should get the price per returning trip", function () {
        const busTripCalculator = BusTripCalculator();
        busTripCalculator.takeTrip("Khayelitsha", "off peak");
        assert.equal(80, busTripCalculator.getPriceReturningTrips());
      });
    });

    describe("During Peak Hours", function () {
      it("should get the number single trips", function () {
        const busTripCalculator = BusTripCalculator();

        assert.equal(1, busTripCalculator.getSingleTrips());
      });
      it("should get the price per trip", function () {
        const busTripCalculator = BusTripCalculator();

        assert.equal(40, busTripCalculator.getPricePerTrip());
      });
      it("should get the number return trips", function () {
        const busTripCalculator = BusTripCalculator();

        assert.equal(2, busTripCalculator.getReturningTrips());
      });
      it("should get the price per returning trip", function () {
        const busTripCalculator = BusTripCalculator();

        assert.equal(80, busTripCalculator.getPriceReturningTrips());
      });
    });
  });
});
