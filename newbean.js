function CoffeeBean() {
    this.name = "",
    this.brand = "",
    this.comments = "",
    this.decaf = false,
    this.rate = function(ratings) {

    }
    this.roast = [],
    this.profile = [],
    this.origin = []
}

function User() {

}

var user = new User();
var bean = new CoffeeBean();
bean.rate(user, "This is my rating");


function CoffeeShops() {
    this.name = "",
    this.address = ""
    this.logo = image
    this.atmosphere = [],
    this.driveThru = false,
    this.coffees = [CoffeeBean]
}

function ZipCode() {
    this.zipcode = "84000",
    this.city = ""
}