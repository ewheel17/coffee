
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
      console.log(numScores);

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

            for (var i = 0; i < coffeeData.length; i++){
              if ( coffeeData[i].profile1 === userProfiles[0] ){
                userCoffees.push(coffeeData[i])
                }
              else if ( coffeeData[i].profile2 === userProfiles[0]){
                userCoffees.push(coffeeData[i])
              }
              else if ( coffeeData[i].profile3 === userProfiles[0]){
                userCoffees.push(coffeeData[i])
              }
              else if ( coffeeData[i].profile4 === userProfiles[0]){
                userCoffees.push(coffeeData[i])
              }
            };
            for (var i = 0; i < userCoffees.length; i++){
              if ( userCoffees[i].profile1 === userProfiles[1] ){
                userCoffeesTierTwo.push(userCoffees[i])
                }
              else if ( userCoffees[i].profile2 === userProfiles[1]){
                userCoffeesTierTwo.push(userCoffees[i])
              }
              else if ( userCoffees[i].profile3 === userProfiles[1]){
                userCoffeesTierTwo.push(userCoffees[i])
              }
              else if ( userCoffees[i].profile4 === userProfiles[1]){
                userCoffeesTierTwo.push(userCoffees[i])
              }
            };
            for (var i = 0; i < userCoffeesTierTwo.length; i++){
              if ( userCoffeesTierTwo[i].profile1 === userProfiles[2] ){
                userCoffeesTierThree.push(userCoffeesTierTwo[i])
                }
              else if ( userCoffeesTierTwo[i].profile2 === userProfiles[2]){
                userCoffeesTierThree.push(userCoffeesTierTwo[i])
              }
              else if ( userCoffeesTierTwo[i].profile3 === userProfiles[2]){
                userCoffeesTierThree.push(userCoffeesTierTwo[i])
              }
              else if ( userCoffeesTierTwo[i].profile4 === userProfiles[2]){
                userCoffeesTierThree.push(userCoffeesTierTwo[i])
              }
            };

            console.log('You have ' + userCoffees.length + ' Tier One coffee preferences!')
            console.log('You have ' + userCoffeesTierTwo.length + ' Tier Two coffee preferences!')
            console.log('You have ' + userCoffeesTierThree.length + ' Tier Three coffee preferences!')

          });
      });

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
