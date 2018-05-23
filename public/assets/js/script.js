
    $("#submit").on("click", function(e){
      e.preventDefault();
      console.log(this);

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

      var tierArray = [];
      var topTierMatches = [];

      userProfiles.push(profileOne, profileTwo, profileThree);

      //Get coffees matching profiles
      $.ajax({
            url: currentURL + '/api/coffee',
            method: 'GET'
          })
          .then(function(coffeeData){

            tierArray  = matchCoffeeTiers(coffeeData, userProfiles);
            topTierMatches = getTopMatches(tierArray[0], tierArray[1], tierArray[2]);
            console.log(topTierMatches);

            console.log('You have ' + tierArray[2].length + ' Tier One coffee preferences!');
            console.log('You have ' + tierArray[1].length + ' Tier Two coffee preferences!');
            console.log('You have ' + tierArray[0].length + ' Tier Three coffee preferences!');

            updateProfile(topTierMatches);
          });
      });

      $.ajax({
        method: 'PUT',
        data: {"match": "hello"}
      });

      // Get all matches.
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

        return [tier3, tier2, tier1];
      }

      // Convert to single array
      function convertToSingleArray(tier3, tier2, tier1) {
        var singleArray = [];
        for (var i in tier3) {
          singleArray.push(tier3[i]);
        }

        for (var i in tier2) {
          singleArray.push(tier2[i]);
        }

        for (var i in tier1) {
          singleArray.push(tier1[i]);
        }

        return singleArray;
      }

      // Get top matches
      function getTopMatches(tier3, tier2, tier1) {
        var allMatches = convertToSingleArray(tier3, tier2, tier1);
        var topMatches = [];

        for ( var i = 0;i < 3;i++ ) {
          topMatches.push("Coffee Bean: " + allMatches[i].bean_name + "\nBrand: " + allMatches[i].brand);
        }
        return topMatches;
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
