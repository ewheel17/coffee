
    $("#submit").on("click", function(e){
      e.preventDefault();

      var currentURL = window.location.origin;

      //Get numerical data
      var numScores = [];
      var scoreOne = $("#q1").val()
      var scoreTwo = $("#q2").val()
      var scoreThree = $("#q3").val()
      var scoreFour = $("#q4").val()
      var scoreFive = $("#q5").val()

      numScores.push(scoreOne, scoreTwo, scoreThree, scoreFour, scoreFive);

      //Get profiles
      var userProfiles = [];
      var profileOne = $("#q6-1").val()
      var profileTwo = $("#q6-2").val()
      var profileThree = $("#q6-3").val()

      var userCoffees = [];
      var userCoffeesTierTwo = [];
      var userCoffeesTierThree = [];

      userProfiles.push(profileOne, profileTwo, profileThree);
      console.log(userProfiles);

      //Get coffees matching profiles
      $.ajax({
            url: currentURL + '/api/coffee',
            method: 'GET'
          })
          .then(function(coffeeData){
            console.log(coffeeData);

            var resultArray  = matchCoffeeTiers(coffeeData, userProfiles);
            userCoffees = resultArray[0];
            userCoffeesTierTwo = resultArray[1];
            userCoffeesTierThree = resultArray[2];

            console.log('You have ' + userCoffees.length + ' Tier One coffee preferences!')
            console.log('You have ' + userCoffeesTierTwo.length + ' Tier Two coffee preferences!')
            console.log('You have ' + userCoffeesTierThree.length + ' Tier Three coffee preferences!')

            var finalArr = [];

            for (var i = 0; i < userCoffeesTierThree.length; i++){
              finalArr.push(userCoffeesTierThree[i]);
            }

            for (var i = 0; i < userCoffeesTierTwo.length; i++){
              finalArr.push(userCoffeesTierTwo[i]);
            }

            for (var i = 0; i < userCoffees.length; i++){
              finalArr.push(userCoffees[i]);
            }

            console.log(finalArr);

          });
      });

      function matchCoffeeTiers(coffeeData, userProfiles) {
        var tier1 = [];
        var tier2 = [];
        var tier3 = [];

        for (var i = 0; i < coffeeData.length; i++) {
          var inc = 0;
          for (var j = 0; j < 3; j++) {
            if (coffeeData[i].profile1 === userProfiles[j]) {
              inc++;
            }
            else if (coffeeData[i].profile2 === userProfiles[j]) {
              inc++;
            }
            else if (coffeeData[i].profile3 === userProfiles[j]) {
              inc++;
            }
            else if (coffeeData[i].profile4 === userProfiles[j]) {
              inc++;

            }
          }

          if (inc === 3) {
            tier3.push(coffeeData[i]);
          } else if (inc === 2) {
            tier2.push(coffeeData[i]);
          } else if (inc === 1) {
            tier1.push(coffeeData[i]);
          }
        }

        return [tier1, tier2, tier3];
      }
      // List coffees

      var profiles =
      [
              "full-bodied",
              "caramel",
              "chocolate",
              "dark chocolate",
              "milk chocolate",
              "earthy",
              "nutty",
              "floral",
              "berry",
              "smoky",
              "spicy",
              "nougat",
              "cocoa",
              "sweet",
              "citrus",
              "raisin",
              "raspberry",
              "toffee",
              "medium-bodied",
              "smooth",
              "maple",
              "rich",
              "blackberry",
              "blueberry",
              "cola",
              "apricot",
              "cherry",
              "strawberry",
              "lemon lime",
              "nectarine",
              "wine",
              "apple",
              "grape",
              "black cherry",
              "herbal",
              "watermelon",
              "brown sugar",
              "vanilla",
              "juicy",
              "green apple",
              "graham cracker",
              "sugar",
              "honey",
              "cookie",
              "toasted spice",
              "molasses",
              "candy",
              "grilled vegetables",
              "assam tea",
              "almond",
              "marzipan",
              "rustic",
              "chamomile",
              "black pepper",
              "toasted marshmallow",
              "dried mango",
              "orange",
              "roasted vegetables",
              "fragrant",
              "lemon",
              "bright",
              "butter",
              "malt",
              "oily",
              "unique",
              "delicate",
              "crisp",
              "complex",
              "kona",
              "delicate",
              "acidic",
              "musty",
              "thick",
              "jasmine",
              "grapefruit",
              "half decaf",
              "snappy",
              "aromatic",
              "dry",
              "wild",
              "thick",
              "elegant",
              "rounded",
              "clean",
              "lively",
              "refreshing",
              "syrup",
              "tangy",
              "intense",
              "red berry",
              "banana",
              "tropical",
              "melon",
              "black tea",
              "plum",
              "tangerine",
              "cacao nibs",
              "balanced",
              "tobacco"
          ]

      for (var i = 0; i < profiles.length; i++){
        $("#q6-1").append('<option>' + profiles[i] + '</option>');
        $("#q6-2").append('<option>' + profiles[i] + '</option>');
        $("#q6-3").append('<option>' + profiles[i] + '</option>');
      }
