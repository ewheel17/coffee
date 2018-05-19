const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

nightmare
.goto("http://localhost:3000/")
.type("#address-input", "Salt Lake City, UT")
.screenshot("login.png")
.click("#search")
.wait("#links a")
.evaluate(function() {
    return document.queryselector("#links a").href;
})
.end()
.then(function(result) {
    console.log(result);
})
