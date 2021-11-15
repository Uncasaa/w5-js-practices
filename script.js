window.addEventListener("load", function () {
    console.log("az oldal betöltődött");
});

var myFirstString = 'ez "egy" string';
var mySecondString = "ez is 'egy' string";
var myThirdString = `
ez 
"egy" 
'tobb'
soros 
string
`;

var myFirstNumber = 0;
var mySecondNumber = 35;
var myThirdNumber = 6478999;

var myFirstBoolean = true;
var mySecondBoolean = false;

var myFirstArrey = ["1984", "Lord of the rings", "Mester és Margarita", "Galaktikus utikalauz stopposoknak", "Vita Brevis"];
var mySecondArrey = [1984, "Lord of the rings", "Mester és Margarita", "Galaktikus utikalauz stopposoknak", "Vita Brevis"];

var myFirstObject = {
    title: "Lord of the rings",
    publicationDate: 1954,
    translations: ["hu", "de", "fr"],
};

console.log(myFirstArrey[0]);
console.log(myFirstObject.title);
console.log(myFirstObject["title"]);

var a = 1;
var b = 2;
var c = a+b;
console.log(c);

function add(myFirstNumber, mySecondNumber){
    console.log(myFirstNumber + mySecondNumber);
}

add(1,2);
add(17948,18773);

var subtraction = function (a,b){
    if (a > b) {
        console.log(a - b);
    } else if (a === b) {
        console.log("A vegeredmeny 0 lesz");
        console.log(a - b);
    } else {
        console.log(b - a);
    }
}

subtraction(3,6);
subtraction("15", 15);
add("15", 15);
add("nyitva", "tartas");
subtraction("nyitva","tartas");

function ifElseCheck(text){
    if (text === "hello") {
        console.log("text az volt, hogy hello")
    } else if (text === "hello"){
        console.log("text ismét hello")
    }

    if (text === "hello")
        console.log("text már megint hello");
}
ifElseCheck("hello");

function compare(a,b){
    console.log("== ", a==b);
    console.log("=== ", a===b);
    var c = a+b;
    console.log(typeof c);
    console.log(c)

}

compare("1984", 1984); 

compare("15", "15");


var myFirstFunctionVariable = function() {
    console.log("ez egy függvény amit változóban tároltunk el");
}

myFirstFunctionVariable();

(function(){
    console.log("?")
}())   //immediatley invoked function expression if-en belül leleh zárni a változót, és azonnal meghívni

var anotherVar = myFirstFunctionVariable()  // ha kivan téve a () akkor lefut a fügvény
;
//anotherVar();
console.log(typeof anotherVar);
console.log(anotherVar);
var anotherVar2 = myFirstFunctionVariable;

anotherVar2();

console.log(typeof anotherVar2);

//fuggvenyt argumentumkent is át tudunk adni egy masik fuggvenynek

function theLastFunction(obj1, obj2) {
    console.log("OBJ1 értéke: ", obj1);
    console.log("OBJ1 tipusa : ", typeof obj1)
    console.log("obj2 értéke: ", obj2);
    console.log("obj2 tipusa: ", typeof obj2)

    console.log(obj2());

}
theLastFunction("Hello", function () {
    return "im calling the last function";    
});

/*
var window = {
    addEventListener: function (eventName, eventFunction){
        ...
    }
}
*/ 



