// Coffee Details:
// Roasts:
//  *Light
//  *Vienna (oily, dark, rich)
//  *City (oily, heavy, rich)
//  *French (oily, darkest roast, deep, smokey)
//  *Espresso (almost burnt, super dark)
//  *American (dry, medium brown, complex)

var coffeeName = {
    name: "",
    brand: "",
    roast: "",
    profile: [""],
    origin: [""],
    decaf: false,
};

// RIMINI COFFEE
var riminiCanyon = {
    name: "Canyon",
    brand: "Rimini",
    roast: "Light",
    profile: ["earthy", "nutty", "spicy", "herbal"],
    origin: ["Central America", "South America", "Africa", "Indonesia"],
    decaf: false,
};

var riminiBaldoria = {
    name: "Baldoria",
    brand: "Rimini",
    roast: "Light",
    profile: ["fruity", "full-bodied", "caramel"],
    origin: ["South America", "Indonesia"],
    decaf: false,
};

var riminiFTOVienna = {
    name: "Fair Trade Organic Vienna",
    brand: "Rimini",
    roast: "Vienna",
    profile: ["cocoa", "full-bodied", "floral"],
    origin: ["South America", "Central America", "Africa"],
    decaf: false,
};

var riminiFTOEspresso = {
    name: "Fair Trade Organic Espresso",
    brand: "Rimini",
    roast: "City",
    profile: ["nutty", "caramel", "full-bodied"],
    origin: ["South America", "Central America", "Indonesia"],
    decaf: false,
};

var riminiMagnificent7 = {
    name: "Magnificent 7",
    brand: "Rimini",
    roast: "Light",
    profile: ["dark chocolate", "caramel", "berry"],
    origin: ["South America", "Central America", "Africa", "Indonesia"],
    decaf: false,
};

var riminiFrenchRoast = {
    name: "Fair Trade Organic French Roast",
    brand: "Rimini",
    roast: "Dark",
    profile: ["rich", "smoky", "spicy", "citrus"],
    origin: ["South America", "Africa", "Indonesia"],
    decaf: false,
};

var riminiMilano = {
    name: "Milano",
    brand: "Rimini",
    roast: "Medium",
    profile: ["floral", "chocolate", "almond", "nougat", "raisin", "acidic"],
    origin: ["South America", "Central America", "Africa"],
    decaf: false,
};

var riminiPastore = {
    name: "Pastore",
    brand: "Rimini",
    roast: "Dark",
    profile: ["smoky", "nutty", "cocoa", "floral", "spicy"],
    origin: ["South America", "Africa", "Indonesia"],
    decaf: false,
};

var riminiPerugiaEspresso = {
    name: "PerugiaEspresso",
    brand: "Rimini",
    roast: "Light",
    profile: ["cocoa", "nutty", "sweet", "citrus", "full-bodied"],
    origin: ["South America", "Central America", "Africa"],
    decaf: false,
};

var riminiRaccoltoGrande = {
    name: "Raccolto Grande",
    brand: "Rimini",
    roast: "Dark",
    profile: ["smoky", "nutty", "spicy", "full-bodied"],
    origin: ["South America", "Indonesia", "Africa"],
    decaf: false,
};

var riminiStellato = {
    name: "Stellato",
    brand: "Rimini",
    roast: "Light",
    profile: ["maple", "toffee", "chocolate", "raspberry", "round acidity"],
    origin: ["Central America", "South America", "Africa"],
    decaf: false,
};

var riminiSwissWater = {
    name: "Swiss Water Decaf Giardinia",
    brand: "Rimini",
    roast: "Light",
    profile: ["smooth", "medium-bodied", "nutty", "cocoa", "fruity"],
    origin: ["Unlisted"],
    decaf: true,
};

var riminiColombia = {
    name: "Organic Colombia",
    brand: "Rimini",
    roast: "Light",
    profile: ["raspberry", "toffee"],
    origin: ["Colombia"],
    decaf: false,
};

var riminiCostaRica = {
    name: "Costa Rica",
    brand: "Rimini",
    roast: "Light",
    profile: ["chocolate", "toffee"],
    origin: "Costa Rica",
    decaf: false,
};

var riminiEthiopiaKaffa = {
    name: "Ethiopia Kaffa",
    brand: "Rimini",
    roast: "Light",
    profile: ["blackberry", "cola", "lemon lime", "nectarine", "medium-bodied", "citrus"],
    origin: "Ethiopia",
    decaf: false,
};

var riminiEthiopiaLimmu = {
    name: "Ethiopia Limmu",
    brand: "Rimini",
    roast: "Light",
    profile: ["blueberry", "strawberry", "cherry", "chocolate"],
    origin: "Ethiopia",
    decaf: false,
};

var riminiEthiopiaYirgacheffe = {
    name: "Ethiopia Yirgacheffe",
    brand: "Rimini",
    roast: "Light",
    profile: ["apricot", "lemon lime"],
    origin: ["Ethiopia"],
    decaf: false,
};

var riminiFTOGuatemala = {
    name: "Fair Trade Organic Guatemala",
    brand: "Rimini",
    roast: "Light",
    profile: ["chocolate", "citrus"],
    origin: [""],
    decaf: false,
};

var riminiKenya = {
    name: "Kenya",
    brand: "Rimini",
    roast: "Light",
    profile: ["wine", "citrus"],
    origin: ["Kenya"],
    decaf: false,
};

var riminiMexican = {
    name: "Mexican Organic",
    brand: "Rimini",
    roast: "Light",
    profile: ["sweet", "citrus", "cocoa", "medium-bodied"],
    origin: ["Mexico"],
    decaf: false,
};

var riminiPeruAmazonas = {
    name: "Peru Amazonas",
    brand: "Rimini",
    roast: "Light",
    profile: ["apple", "cherry", "grape", "dark chocolate"],
    origin: ["Peru"],
    decaf: false,
};

var riminiRwanda = {
    name: "Rwanda",
    brand: "Rimini",
    roast: "Light",
    profile: ["caramel", "apricot", "chocolate", "melon", "lemon", "medium-bodied", "acidic"],
    origin: ["Rwanda"],
    decaf: false,
};

var riminiSulawesi = {
    name: "Sulawesi",
    brand: "Rimini",
    roast: "Medium",
    profile: ["dark chocolate", "black cherry"],
    origin: ["Sulawesi"],
    decaf: false,
};

var riminiSulawesiRantemario = {
    name: "Sulawesi Rantemario",
    brand: "Rimini",
    roast: "Light",
    profile: ["green apple", "citrus", "earthy"],
    origin: ["Sulawesi"],
    decaf: false,
};

var riminiSumatra = {
    name: "Sumatra",
    brand: "Rimini",
    roast: "Medium",
    profile: ["spicy", "herbal"],
    origin: ["Sumatra"],
    decaf: false,
};

var riminiZambia = {
    name: "Zambia",
    brand: "Rimini",
    roast: "Light",
    profile: ["watermelon", "apricot", "lime"],
    origin: ["Zambia"],
    decaf: false,
};

// PUBLIK COFFEE

var publikMilesGoodyear = {
    name: "Miles Goodyear's Cabin",
    brand: "Publik",
    roast: "",
    profile: ["chocolate", "brown sugar", "nutty", "citrus"],
    origin: [""],
    decaf: false,
};

var publikCentralNinthEspresso = {
    name: "Central Ninth Espresso",
    brand: "Publik",
    roast: "Espresso",
    profile: [""],
    origin: ["Guatemala" = {
        profile: ["caramel", "dark chocolate", "raisin"]
    }, "Colombia" = {
        profile: ["dark chocolate", "cherry", "juicy"]
    }, "Ethiopia" = {
        profile: ["jam", "vanilla", "lemon"]
    }, ],
    decaf: false,
};

var publikBeekeeper = {
    name: "Beekeeper",
    brand: "Publik",
    roast: "Light",
    profile: [""],
    origin: ["Brazil", "Myanmar"],
    decaf: false,
};

var publikSwissWater = {
    name: "Swiss Water Sumatra Decaf",
    brand: "Publik",
    roast: "Light",
    profile: ["full-bodied"],
    origin: [""],
    decaf: true,
};

// CAFFE IBIS COFFEES not including "flavored coffees"

var ibisArianto = {
    name: "Arianto",
    brand: "Caffe Ibis",
    roast: "Light",
    profile: ["juicy", "black cherry", "herbal"],
    origin: ["Sumatra"],
    decaf: false,
};

var ibisAztecDark = {
    name: "Aztec Dark",
    brand: "Caffe Ibis",
    roast: "Dark",
    profile: ["dark chocolate", "citrus", "caramel"],
    origin: ["Honduras"],
    decaf: false,
};


var ibisBenaBena = {
    name: "Organic Bena Bena Valley",
    brand: "Caffe Ibis",
    roast: "Medium",
    profile: ["spicy", "floral", "chocolate"],
    origin: ["Papua New Guinea"],
    decaf: false,
};


var ibisCafeFemenino = {
    name: "Organic Café Feminino",
    brand: "Caffe Ibis",
    roast: "Dark",
    profile: ["graham cracker", "sugar", "dark chocolate"],
    origin: ["Peru"],
    decaf: false,
};


var coffeeName = {
    name: "",
    brand: "",
    roast: "",
    profile: [""],
    origin: [""],
    decaf: false,
};


var coffeeName = {
    name: "",
    brand: "",
    roast: "",
    profile: [""],
    origin: [""],
    decaf: false,
};


var coffeeName = {
    name: "",
    brand: "",
    roast: "",
    profile: [""],
    origin: [""],
    decaf: false,
};


var coffeeName = {
    name: "",
    brand: "",
    roast: "",
    profile: [""],
    origin: [""],
    decaf: false,
};


var coffeeName = {
    name: "",
    brand: "",
    roast: "",
    profile: [""],
    origin: [""],
    decaf: false,
};


var coffeeName = {
    name: "",
    brand: "",
    roast: "",
    profile: [""],
    origin: [""],
    decaf: false,
};


var coffeeName = {
    name: "",
    brand: "",
    roast: "",
    profile: [""],
    origin: [""],
    decaf: false,
};


var coffeeName = {
    name: "",
    brand: "",
    roast: "",
    profile: [""],
    origin: [""],
    decaf: false,
};


var coffeeName = {
    name: "",
    brand: "",
    roast: "",
    profile: [""],
    origin: [""],
    decaf: false,
};


var coffeeName = {
    name: "",
    brand: "",
    roast: "",
    profile: [""],
    origin: [""],
    decaf: false,
};


var coffeeName = {
    name: "",
    brand: "",
    roast: "",
    profile: [""],
    origin: [""],
    decaf: false,
};


var coffeeName = {
    name: "",
    brand: "",
    roast: "",
    profile: [""],
    origin: [""],
    decaf: false,
};


var coffeeName = {
    name: "",
    brand: "",
    roast: "",
    profile: [""],
    origin: [""],
    decaf: false,
};


var coffeeName = {
    name: "",
    brand: "",
    roast: "",
    profile: [""],
    origin: [""],
    decaf: false,
};


var coffeeName = {
    name: "",
    brand: "",
    roast: "",
    profile: [""],
    origin: [""],
    decaf: false,
};


var coffeeName = {
    name: "",
    brand: "",
    roast: "",
    profile: [""],
    origin: [""],
    decaf: false,
};


var coffeeName = {
    name: "",
    brand: "",
    roast: "",
    profile: [""],
    origin: [""],
    decaf: false,
};


var coffeeName = {
    name: "",
    brand: "",
    roast: "",
    profile: [""],
    origin: [""],
    decaf: false,
};


var coffeeName = {
    name: "",
    brand: "",
    roast: "",
    profile: [""],
    origin: [""],
    decaf: false,
};


var coffeeName = {
    name: "",
    brand: "",
    roast: "",
    profile: [""],
    origin: [""],
    decaf: false,
};


var coffeeName = {
    name: "",
    brand: "",
    roast: "",
    profile: [""],
    origin: [""],
    decaf: false,
};
