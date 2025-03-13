//var name = prompt("เห้ยเองชื่อไรว่ะ")
//console.log(name)

//var age = prompt("อายุเท่าไหร่ง่ะ งับๆๆงื้อๆๆๆๆๆ")
//console.log(age)
var ran = Math.floor(Math.random() * 10)
console.log(ran)

function checkGuess() {

    var ans = document.getElementById("userGuess")
    var ansValue = ans.value;
    console.log(ansValue)
    if (ansValue == ran) {
        document.getElementById("result").innerHTML = "<p>correct</p>";
    } else {
        document.getElementById("result").innerHTML = "<p>incorrect</p>";
    }
}