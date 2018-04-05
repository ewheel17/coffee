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


var ibisChapada = {
    name: "Organic Chapada",
    brand: "Caffe Ibis",
    roast: "Medium",
    profile: ["nutty", "cookie", "honey"],
    origin: ["Brazila"],
    decaf: false,
};


var ibisColombianHuila = {
    name: "Organic Colombian Huila",
    brand: "Caffe Ibis",
    roast: "Medium",
    profile: ["fruity", "spicy", "caramel"],
    origin: ["Colombia"],
    decaf: false,
};


var ibisComsa = {
    name: "Organic COMSA",
    brand: "Caffe Ibis",
    roast: "Medium",
    profile: ["nougat", "vanilla", "dark chocolate"],
    origin: ["Honduras"],
    decaf: false,
};


var ibisDarkColombianHuila = {
    name: "Organic Dark Colombian Huila",
    brand: "Caffe Ibis",
    roast: "Dark",
    profile: ["toasted spice", "graham cracker", "molasses"],
    origin: ["Colombia"],
    decaf: false,
};


var ibisEthiopianArabianNight = {
    name: "Organic Ethiopian Arabian Night",
    brand: "Caffe Ibis",
    roast: "Dark",
    profile: ["berry", "candy", "chocolate"],
    origin: ["Ethiopia"],
    decaf: false,
};


var ibisEthiopianWorka = {
    name: "Organic Ethiopian Worka",
    brand: "Caffe Ibis",
    roast: "Light",
    profile: ["juicy", "floral", "berry"],
    origin: ["Ethiopia"],
    decaf: false,
};


var ibisGuatemalanDark = {
    name: "Organic Guatemalan Dark",
    brand: "Caffe Ibis",
    roast: "Dark",
    profile: ["earthy", "grilled vegetables", "chocolate cookie"],
    origin: ["Guatemala"],
    decaf: false,
};


var ibisGuatemalanForest = {
    name: "Organic Guatemalan Forest",
    brand: "Caffe Ibis",
    roast: "Medium",
    profile: ["caramel", "fruity", "chocolate"],
    origin: ["Guatemala"],
    decaf: false,
};


var ibisHonduranCopan= {
    name: "Organic Honduran Copán",
    brand: "Caffe Ibis",
    roast: "Light",
    profile: ["almond", "assam tea", "honey"],
    origin: ["Honduras"],
    decaf: false,
};


var ibisIxil = {
    name: "Organic Ixil",
    brand: "Caffe Ibis",
    roast: "medium",
    profile: ["marzipan", "chocolate", "sweet"],
    origin: ["Guatemala"],
    decaf: false,
};


var ibisIxilDark = {
    name: "Organic Ixil Dark",
    brand: "Caffe Ibis",
    roast: "Dark",
    profile: ["caramel", "spicy", "smoky"],
    origin: ["Guatemala"],
    decaf: false,
};


var ibisKokowagayo = {
    name: "Organic Kokowagayo",
    brand: "Caffe Ibis",
    roast: "Medium",
    profile: ["sweet", "rustic", "chamomile", "chocolate syrup"],
    origin: ["Indonesia", "Sumatra"],
    decaf: false,
};


var ibisKokowagayoDark = {
    name: "Organic Kokowagayo Dark",
    brand: "Caffe Ibis",
    roast: "Dark",
    profile: ["earthy", "black pepper", "honey", "raisin"],
    origin: ["Indonesia", "Sumatra"],
    decaf: false,
};


var ibisMexicanChiapas = {
    name: "Organic Mexican Chiapas",
    brand: "Caffe Ibis",
    roast: "Medium",
    profile: ["citrus", "chocolate", "honey"],
    origin: ["Mexico"],
    decaf: false,
};


var ibisPeruvianAndes = {
    name: "Organic Peruvian Andes",
    brand: "Caffe Ibis",
    roast: "Medium",
    profile: ["floral", "milk chocolate", "honey"],
    origin: ["Peru"],
    decaf: false,
};


var ibisPeruvianRainforest = {
    name: "Organic Peruvian Rainforest",
    brand: "Caffe Ibis",
    roast: "Medium",
    profile: ["floral", "citrus", "dark chocolate"],
    origin: ["Peru"],
    decaf: false,
};


var ibisSipiFalls = {
    name: "Organic Sipi Falls",
    brand: "Caffe Ibis",
    roast: "Medium",
    profile: ["honey", "apricot", "chocolate"],
    origin: ["Uganda"],
    decaf: false,
};


var ibisAnca = {
    name: "Organic ANCA Nature's Delight",
    brand: "Caffe Ibis",
    roast: ["Medium", "Dark"],
    profile: ["semi-sweet chocolate", "toasted marshmallow", "molasses"],
    origin: ["Latin America"],
    decaf: false,
};


var ibisDarkSide = {
    name: "Organic Dark Side of the Moon",
    brand: "Caffe Ibis",
    roast: ["Double French", "Extra Dark"],
    profile: ["smoky", "caramel", "burnt sugar"],
    origin: ["Latin America", "East Africa"],
    decaf: false,
};


var ibisDoubleFrench = {
    name: "Organic Double French",
    brand: "Caffe Ibis",
    roast: ["Double French", "Extra Dark"],
    profile: ["smoky", "caramel", "burnt sugar"],
    origin: ["Latin America"],
    decaf: false,
};


var ibisEspresso = {
    name: "Organic Espresso Roast",
    brand: "Caffe Ibis",
    roast: "Espresso",
    profile: ["graham cracker", "caramel", "syrup"],
    origin: ["Latin America"],
    decaf: false,
};

var ibisFrenchRoast = {
    name: "Organic French Roast",
    brand: "Caffe Ibis",
    roast: "French",
    profile: ["molasses", "chocolate", "graham cracker"],
    origin: ["Latin America"],
    decaf: false,
};

var ibisSignature = {
    name: "Organic Ibis Signature Blend",
    brand: "Caffe Ibis",
    roast: ["Medium", "Dark"],
    profile: ["cherry", "strawberry", "caramel", "chocolate"],
    origin: ["Indonesia", "Latin America"],
    decaf: false,
};

var ibisLightSide = {
    name: "Organic Light Side of the Moon",
    brand: "Caffe Ibis",
    roast: "Medium",
    profile: ["dried mango", "cocoa", "honey", "sweet"],
    origin: ["Africa", "Latin America"],
    decaf: false,
};

var ibisLoganCanyon = {
    name: "Organic Logan Canyon Blend",
    brand: "Caffe Ibis",
    roast: ["Medium", "Dark"],
    profile: ["spicy", "pepper", "earthy", "chocolate", "citrus"],
    origin: ["Central America", "Indonesia"],
    decaf: false,
};

var ibisMayanSunrise = {
    name: "Organic Mayan Sunrise Blend",
    brand: "Caffe Ibis",
    roast: ["Medium", "Dark"],
    profile: ["nutty", "caramel", "dark chocolate"],
    origin: ["Central America"],
    decaf: false,
};

var ibisMayanTrail = {
    name: "Organic Mayan Trail Blend",
    brand: "Caffe Ibis",
    roast: ["Medium", "Dark"],
    profile: ["cola", "sweet", "chocolate", "smoky"],
    origin: ["Central America"],
    decaf: false,
};

var ibisMoabTrail = {
    name: "Organic Moab Trail Blend",
    brand: "Caffe Ibis",
    roast: ["Medium", "Dark"],
    profile: ["brown sugar", "orange", "citrus", "cocoa"],
    origin: ["Central America"],
    decaf: false,
};

var ibisMoonshot = {
    name: "Organic Moonshot Espresso",
    brand: "Caffe Ibis",
    roast: "Espresso",
    profile: ["molasses", "chocolate", "graham cracker"],
    origin: ["Latin America", "Africa"],
    decaf: false,
};

var ibisSedonaSunrise = {
    name: "Organic Sedona Sunrise Blend",
    brand: "Caffe Ibis",
    roast: ["Medium", "Dark"],
    profile: ["caramel", "smoky", "roasted vegetables"],
    origin: ["Indonesia", "Peru"],
    decaf: false,
};

var ibisVienna = {
    name: "Organic Vienna Roast",
    brand: "Caffe Ibis",
    roast: ["Vienna", "Dark"],
    profile: ["nutty", "black pepper", "molasses"],
    origin: ["Latin America"],
    decaf: false,
};


// SALT LAKE ROASTING CO Coffees

var slrAM = {
    name: "A.M. Blend",
    brand: "Salt Lake Roasting Co",
    roast: "Light",
    profile: [""],
    origin: ["Central America", "South America"],
    decaf: false,
};

var slrAfricanQueen = {
    name: "African Queen",
    brand: "Salt Lake Roasting Co",
    roast: "Light",
    profile: ["sweet", "fragrant"],
    origin: ["Africa"],
    decaf: false,
};

var slrAlpenglow = {
    name: "Alpenglow Blend (Organic & Fair Trade)",
    brand: "Salt Lake Roasting Co",
    roast: "Medium",
    profile: ["full-bodied"],
    origin: ["Africa", "South America", "Central America"],
    decaf: false,
};

var slrBrazil = {
    name: "Brazil",
    brand: "Salt Lake Roasting Co",
    roast: "Medium",
    profile: ["earthy", "sweet", "full-bodied"],
    origin: ["Brazil"],
    decaf: false,
};

var slrBrazilO = {
    name: "Brazil (Organic)",
    brand: "Salt Lake Roasting Co",
    roast: "Light",
    profile: ["fruity", "cocoa", "apple", "caramel", "sweet"],
    origin: ["Brazil"],
    decaf: false,
};

var slrCelebesKolassie = {
    name: "Celebes Kolassie / Sulawesi",
    brand: "Salt Lake Roasting Co",
    roast: "Medium",
    profile: ["full-bodied"],
    origin: ["Indonesia"],
    decaf: false,
};
var slrColombia = {
    name: "Colombia",
    brand: "Salt Lake Roasting Co",
    roast: "Light",
    profile: ["bright"],
    origin: ["Colombia"],
    decaf: false,
};

var slrColombiaFTO = {
    name: "Colombia Fair Trade Organic Cauca Amucc Ecotact",
    brand: "Salt Lake Roasting Co",
    roast: "Light",
    profile: ["lemon", "cherry", "caramel", "apple"],
    origin: ["Colombia"],
    decaf: false,
};

var slrColombiaDecaf = {
    name: "Colombia Natural Decaf",
    brand: "Salt Lake Roasting Co",
    roast: "Medium",
    profile: ["floral", "rich"],
    origin: ["Colombia"],
    decaf: true,
};

var slrCostaRica = {
    name: "Costa Rica",
    brand: "Salt Lake Roasting Co",
    roast: "Medium",
    profile: ["tart", "full-bodied"],
    origin: ["Costa Rica"],
    decaf: false,
};

var slrCostaRicaO = {
    name: "Costa Rica - La Amistad Organic",
    brand: "Salt Lake Roasting Co",
    roast: "Light",
    profile: ["maple", "sweet", "cherry", "butter"],
    origin: ["Costa Rica"],
    decaf: false,
};

var slrElSalv = {
    name: "El Salvador Honey Pacamara - Finca Leticia",
    brand: "Salt Lake Roasting Co",
    roast: "Light",
    profile: ["chocolate", "malt", "citrus", "fruity", "honey", "crisp"],
    origin: ["El Salvador"],
    decaf: false,
};

var slrEspresso = {
    name: "Espresso",
    brand: "Salt Lake Roasting Co",
    roast: "Espresso",
    profile: ["full-bodied", "oily"],
    origin: ["Unknown"],
    decaf: false,
};

var slrEspressoDecaf = {
    name: "Espresso Decaf KVW",
    brand: "Salt Lake Roasting Co",
    roast: "Espresso",
    profile: ["dark", "oily"],
    origin: ["Unknown"],
    decaf: true,
};

var slrEspressoO = {
    name: "Espresso Organic (Formerly Viennese)",
    brand: "Salt Lake Roasting Co",
    roast: "Espresso",
    profile: ["dark"],
    origin: ["Unknown"],
    decaf: false,
};

var slrEthiopiaMoccaDecaf = {
    name: "Ethiopia (Mocca) Decaf Fair Trade Organic",
    brand: "Salt Lake Roasting Co",
    roast: "Light",
    profile: ["unique", "wine"],
    origin: ["Ethiopia"],
    decaf: true,
};

var slrEthiopiaLongberry = {
    name: "Ethiopia Longberry Harrar",
    brand: "Salt Lake Roasting Co",
    roast: "Light",
    profile: ["wine", "unique"],
    origin: ["Ethiopia"],
    decaf: false,
};

var slrEthiopiaYirgacheffeO = {
    name: "Ethiopia Natural Yirgacheffe (Organic)",
    brand: "Salt Lake Roasting Co",
    roast: "Light",
    profile: ["fruity", "full-bodied"],
    origin: ["Ethiopia"],
    decaf: false,
};

var slrEthiopiaYirgacheffe = {
    name: "Ethiopia Yirgacheffe",
    brand: "Salt Lake Roasting Co",
    roast: "Light",
    profile: ["sweet", "bright", "delicate"],
    origin: ["Ethiopia"],
    decaf: false,
};

var slrFarEast = {
    name: "Far East Rim",
    brand: "Salt Lake Roasting Co",
    roast: "Dark",
    profile: ["earthy", "full-bodied", "dark"],
    origin: ["Unknown"],
    decaf: false,
};

var slrFrenchRoast = {
    name: "French Roast",
    brand: "Salt Lake Roasting Co",
    roast: ["French", "Dark"],
    profile: ["caramel", "dark"],
    origin: ["Unknown"],
    decaf: false,
};

var slrGuatemalaAntigua = {
    name: "Guatemala Antigua Bella Carmona",
    brand: "Salt Lake Roasting Co",
    roast: "Medium",
    profile: ["full-bodied", "crisp", "spicy"],
    origin: ["Guatemala"],
    decaf: false,
};

var slrGuatemalaO = {
    name: "Guatemala Organic",
    brand: "Salt Lake Roasting Co",
    roast: "Medium",
    profile: ["wine", "complex"],
    origin: ["Guatemala"],
    decaf: false,
};

var slrHawaiianSunrise = {
    name: "Hawaiian Sunrise",
    brand: "Salt Lake Roasting Co",
    roast: "Light",
    profile: ["kona", "delicate", "sweet"],
    origin: ["Hawaii"],
    decaf: false,
};

var slrHonduras = {
    name: "Honduras Fair Trade Organic",
    brand: "Salt Lake Roasting Co",
    roast: "Medium",
    profile: ["acidic"],
    origin: ["Honduras"],
    decaf: false,
};

var slrHouse = {
    name: "House Blend",
    brand: "Salt Lake Roasting Co",
    roast: "Medium",
    profile: ["rich", "full-bodied"],
    origin: ["Central America", "Indonesia", "Africa"],
    decaf: false,
};

var slrHouseD = {
    name: "House Blend Decaf",
    brand: "Salt Lake Roasting Co",
    roast: "Medium",
    profile: ["rich", "full-bodied"],
    origin: ["Central America", "Indonesia", "Africa"],
    decaf: true,
};

var slrIndiaMonsoon = {
    name: "India Monsoon Malabar",
    brand: "Salt Lake Roasting Co",
    roast: "Dark",
    profile: ["earthy", "dark", "musty"],
    origin: ["India"],
    decaf: false,
};

var slrJamaicaBlueMtn = {
    name: "Jamaica Blue Mountain",
    brand: "Salt Lake Roasting Co",
    roast: "Dark",
    profile: [""],
    origin: ["Jamaica"],
    decaf: false,
};

var slrJamaicaSunrise = {
    name: "Jamaica Sunrise",
    brand: "Salt Lake Roasting Co",
    roast: "Dark",
    profile: [""],
    origin: ["Jamaica"],
    decaf: false,
};

var slrJava = {
    name: "Java",
    brand: "Salt Lake Roasting Co",
    roast: "Medium",
    profile: ["full-bodied", "thick", "smooth"],
    origin: ["Indonesia"],
    decaf: false,
};

var slrKenya = {
    name: "Kenya",
    brand: "Salt Lake Roasting Co",
    roast: "Dark",
    profile: ["wine", "acidic", "full-bodied"],
    origin: ["Kenya"],
    decaf: false,
};

var slrKenyaNyeri = {
    name: "Kenya Nyeri Barichu Gatomboya",
    brand: "Salt Lake Roasting Co",
    roast: "Light",
    profile: ["blackberry", "jasmine", "grapefruit", "sun-dried tomato"],
    origin: ["Kenya"],
    decaf: false,
};

var slrLateNight = {
    name: "Late Night",
    brand: "Salt Lake Roasting Co",
    roast: "Light",
    profile: ["half decaf"],
    origin: ["Unknown"],
    decaf: true,
};

var slrMexicoD = {
    name: "Mexico Decaf (Organic Swiss Water Process)",
    brand: "Salt Lake Roasting Co",
    roast: "Light",
    profile: ["snappy", "aromatic"],
    origin: ["Mexico"],
    decaf: true,
};

var slrMexicoO = {
    name: "Mexico Organic",
    brand: "Salt Lake Roasting Co",
    roast: "Light",
    profile: ["snappy", "dry", "aromatic"],
    origin: ["Mexico"],
    decaf: false,
};

var slrMochaJavaD = {
    name: "Mocha / Java KVW Decaf",
    brand: "Salt Lake Roasting Co",
    roast: "Dark",
    profile: ["full-bodied", "wild", "thick"],
    origin: ["Indonesia", "Africa"],
    decaf: true,
};

var slrMochaJava = {
    name: "Mocha/Java",
    brand: "Salt Lake Roasting Co",
    roast: "Dark",
    profile: ["full-bodied", "wild", "thick"],
    origin: ["Indonesia", "Africa"],
    decaf: false,
};

var slrMorningThunder = {
    name: "Morning Thunder",
    brand: "Salt Lake Roasting Co",
    roast: "Medium",
    profile: ["elegant", "rich", "full-bodied"],
    origin: ["Sulawesi"],
    decaf: false,
};

var slrNewGuinea = {
    name: "New Guinea",
    brand: "Salt Lake Roasting Co",
    roast: "Light",
    profile: ["clean", "bright", "rounded"],
    origin: ["Indonesia"],
    decaf: false,
};

var slrNicaraguaFTO = {
    name: "Nicaragua (Organic & Fair Trade)",
    brand: "Salt Lake Roasting Co",
    roast: "Light",
    profile: ["clean", "lively", "refreshing"],
    origin: ["Nicaragua"],
    decaf: false,
};

var slrOldDutch = {
    name: "Old Dutch",
    brand: "Salt Lake Roasting Co",
    roast: "Dark",
    profile: ["earthy", "full-bodied"],
    origin: ["Unknown"],
    decaf: false,
};

var slrPanama = {
    name: "Panama Maunier",
    brand: "Salt Lake Roasting Co",
    roast: "Light",
    profile: ["aromatic", "floral", "clean", "full-bodied"],
    origin: ["Panama"],
    decaf: false,
};

var slrPeruFTO = {
    name: "Peru Norandino (Organic & Fair Trade)",
    brand: "Salt Lake Roasting Co",
    roast: "Light",
    profile: ["bright", "clean"],
    origin: ["South America", "Peru"],
    decaf: false,
};

var slrSilverfork = {
    name: "Silverfork Blend",
    brand: "Salt Lake Roasting Co",
    roast: "Dark",
    profile: ["dark", "thick"],
    origin: ["Unknown"],
    decaf: false,
};

var slrSumatra = {
    name: "Sumatra",
    brand: "Salt Lake Roasting Co",
    roast: "Dark",
    profile: ["earthy", "chocolate", "syrup"],
    origin: ["Indonesia"],
    decaf: false,
};

var slrSumatraO = {
    name: "Sumatra (Organic)",
    brand: "Salt Lake Roasting Co",
    roast: "Dark",
    profile: ["earthy", "chocolate", "syrup"],
    origin: ["Indonesia"],
    decaf: false,
};

var slrSumatraO = {
    name: "Sumatra (Organic)",
    brand: "Salt Lake Roasting Co",
    roast: "Dark",
    profile: ["earthy", "chocolate", "syrup"],
    origin: ["Indonesia"],
    decaf: true,
};

// BEANS & BREW
var bbHouse = {
    name: "House Blend",
    brand: "Beans & Brew (High Altitude Roasting)",
    roast: "Medium",
    profile: ["smooth", "full-bodied", "tangy"],
    origin: ["Unknown"],
    decaf: false,
};

var bbHouseD = {
    name: "Decaf House Blend",
    brand: "Beans & Brew (High Altitude Roasting)",
    roast: "Medium",
    profile: ["smooth", "full-bodied", "tangy"],
    origin: ["Unknown"],
    decaf: true,
};

var bbBreakfast = {
    name: "Breakfast Blend",
    brand: "Beans & Brew (High Altitude Roasting)",
    roast: "Medium",
    profile: ["aromatic", "rich", "snappy"],
    origin: ["Americas"],
    decaf: false,
};

var bbColombia = {
    name: "Colombia Santander Fair Trade Organic",
    brand: "Beans & Brew (High Altitude Roasting)",
    roast: "Dark",
    profile: ["full-bodied", "brown sugar", "lemon", "crisp", "clean"],
    origin: ["Colombia"],
    decaf: false,
};

var bbEspressoFritalia = {
    name: "Espresso Fritalia",
    brand: "Beans & Brew (High Altitude Roasting)",
    roast: "Dark",
    profile: ["intense", "dark", "rich"],
    origin: ["Unknown"],
    decaf: false,
};

var bbFrenchRoast = {
    name: "French Roast",
    brand: "Beans & Brew (High Altitude Roasting)",
    roast: "Dark",
    profile: ["dark", "syrup", "rich"],
    origin: ["Unknown"],
    decaf: false,
};

var bbFrenchRoastD = {
    name: "French Roast Decaf",
    brand: "Beans & Brew (High Altitude Roasting)",
    roast: "Dark",
    profile: ["dark", "syrup", "rich"],
    origin: ["Unknown"],
    decaf: true,
};

var bbFrenchRoastFTO = {
    name: "French Roast Fair Trade Organic",
    brand: "Beans & Brew (High Altitude Roasting)",
    roast: "Dark",
    profile: ["dark", "syrup", "rich"],
    origin: ["Sumatra", "Central America"],
    decaf: false,
};

var bbGuatemalaFTO = {
    name: "Guatemala Huehuetenango Fair Trade Organic",
    brand: "Beans & Brew (High Altitude Roasting)",
    roast: "Medium",
    profile: [""],
    origin: ["Guatemala"],
    decaf: false,
};

var bbItalian = {
    name: "Italian Roast",
    brand: "Beans & Brew (High Altitude Roasting)",
    roast: "Dark",
    profile: ["dark", "caramel"],
    origin: ["Unknown"],
    decaf: false,
};

var bbKenya = {
    name: "Kenya Barichu Gatomboya",
    brand: "Beans & Brew (High Altitude Roasting)",
    roast: "Light",
    profile: ["grapefruit", "jasmine", "blackberry", "crisp", "clean", "bright"],
    origin: ["Kenya"],
    decaf: false,
};

var bbRockyMtn = {
    name: "Rocky Mountain Blend",
    brand: "Beans & Brew (High Altitude Roasting)",
    roast: "Dark",
    profile: ["full-bodied"],
    origin: ["Indonesia"],
    decaf: false,
};

var bbSulawesi = {
    name: "Sulawesi Jaya Peaberry",
    brand: "Beans & Brew (High Altitude Roasting)",
    roast: "Light",
    profile: ["full-bodied"],
    origin: ["Sulawesi", "Indonesia"],
    decaf: false,
};

var bbSumatra = {
    name: "Sumatra Mandheling",
    brand: "Beans & Brew (High Altitude Roasting)",
    roast: "Medium",
    profile: ["rich", "full-bodied", "smooth"],
    origin: ["Sumatra"],
    decaf: false,
};

var bbWasatch = {
    name: "Wasatch Peaks Organic",
    brand: "Beans & Brew (High Altitude Roasting)",
    roast: "Medium",
    profile: ["well-rounded"],
    origin: ["Unknown"],
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