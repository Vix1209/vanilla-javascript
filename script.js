

// //functions

// function practice(num){
    
//     const y = 10 + num;
//     console.log(y);
// }

// practice(5)
// practice(10)

// practice(50)



// var uc = function(u,num=10){
//     hce= num * u
//     return hce
// }
// console.log(uc(7));





// console.log(typeof ['uche','happy',]);






// function calculate(x,y){
//     var result = x * y;
//     console.log(result); 
// }

// calculate(5,4)
// calculate(2,2)
// calculate(7,3)



// function expression 

// const sayHi = ()=>{
//     console.log('uchenna');
// }
// sayHi()



// const happyDay = x=> x + 10
// console.log(happyDay(20))


// const studentsEtTeacher = [
//     {name: 'uchenna', age:21},
//     {name: 'chiemezie', age:16},
//     {name:'chijioke', age:17},
// ];
// const students = [
//     {name: 'chiemezie', age:16},
//     {name:'chijioke', age:17},
// ];





// //map in javascript is useed to iterate over objects to collect data 
// const functional = (use)=>{
//     const userMapping = use.map((user)=> (user.age)
//     )
//     return (userMapping);
// }
// console.log (functional(students))
// console.log (functional(studentsEtTeacher))





// //filter is used to return an array of filtered datatypes
// const number = [1,2,3,4,5,6,7,6,5,4,3,2,1]
// const filteredNumbers = number.filter((num) => num % 2 ===1) 
// console.log(filteredNumbers);

// console.log(8%3);




// //forEach to loop objects
// //e.g to create an array of doubled numbers

// const doubleNumbers = (num)=>{
//     const doubledContainer = []
//     num.forEach((x)=>{
//         const doubled = x * 2
//         doubledContainer.push(doubled)
//     })
//     return doubledContainer
// }
// console.log(doubleNumbers(number));





// //REST parameters: this is used in cases where more parameters are given when compared to the arguments declared
// function logAllArguments (x, ...nums){
//     return nums.map((n)=> n * x)
// }
// console.log(logAllArguments(3,2,4,5,6,7,6,4,3,2,1,2,3,4,5,6,7,8,7,6,3,3,2,2,1,2,3,4,5,5,5,5,5,5,5,4,4,3,3,3,3,3,3,3,3,3,2,2,5,4,4));










// const database = [ 
//     {name: 'Ebirim', age: 23,},
//     {name: 'Uche', age: 12},
//     {name: 'Okere', age: 34,},
// //     {name: 'Louis',age: 45},
// //     {name: 'markdonald', age: 35},
// //     {name: 'rapheal', age: 23},
// //     {name: 'favour', age: 63},
// //     {name: 'Lawrence', age: 83},
// //    { name: 'Paul', age: 56},
// //    { name: 'Peter', age: 30}, 
// ]
// // console.log(database)

// const [first,second,third] = database

// function census() {
//         // database.first.obj
//         for(const arrrr1 of database) {
//             // for(let obj1 in arrrr1){
//             var obj = {phoneNumber: `080${Math.random() * 9}`}
//             Object.assign(arrrr1, obj)
//         }
//         return;
        

// }

    
        


// console.log(census);


// console.log(database);







// //using functions as constructors....it cannot be done using function expressions

// function dog (years, breed){
//     this.age = years
//     this.type = breed
//     console.log(this);
// }

// const spike = new dog(3, 'rottweiler')
// const bingo = new dog(1, 'ekuke')
// console.log(spike);
// console.log(bingo);






// //SetInterval

// // function checkList (){
// //     const tax = 0.5
    
// //     while (tax <= 30){
// //         setInterval(function (){
// //             const newPrice = 2000 + tax
// //             console.log(newPrice);
// //             tax += 0.5
// //         }, 1000)
// //     }
// //     return newPrice;
// // }
// // console.log(checkList())


// //string splitter: the opposite of join() is split()








// DOM 
// function ShowAlert(){
//     window.alert('page loaded')
// }



// document.body.innerHTML='<h1>happy<h1>'
// console.log(document);

// const check =  document.getElementsByTagName('p')
// check[0].innerHTML = 'oh happy day'



// //getting element by Id 
// const myName = document.getElementById('name')
// // attacking specific nested elements within that id 
// const changeMyName = myName.getElementsByTagName('span')
// // console.log(changeMyName);
// // applying a for loop to effect a change through the span Tags 
// for(const prop of changeMyName){
//     prop.innerHTML = 'Chijioke'
// }
// // further manipulations using javascript
// const result = document.getElementById('total')
// result.innerHTML= changeMyName.length





// // the query selector is used mainly with css selectors
// const myDiv = document.querySelector('div')

// const Div = myDiv.style
// Div.color = 'blue'
// //note the camel case pon the styles
// Div.backgroundColor = 'black'
// Div.textAlign = 'center'



// console.log(Div);



// note: query selectors attack the css selectors and picks only the first one it comes across
// thats where classes come into play... And the 'querySelectorAll' is used instead. and hence 
// a loop needs to be invoked afterwards

// const dreams = document.querySelectorAll('.dream span')
// for (let myDream of dreams){
//     myDream.style.color = 'violet',
//     myDream.style.fontSize = '100px'
// }

//traversing the DOM
//this is simply ways of identifying the parents or children of different nodes or elements
//parentNode
// console.log(myDiv.parentNode.parentNode);

// // childNode
// const tester = document.getElementById('tester')
// console.log(tester.childNodes);


// //getting the ID used in a particular html element and prolly changing it

// const element = document.getElementById('tester')
// //reassigning the ID from tester to tesstterur
// // element.id = 'tesstterur'
// const elid = element.id
// // console.log(elid);
// console.log(element);



// const nav = document.getElementsByTagName('div')

// nav[3].id = 'lorem5' 






//classname
// const classrooom = document.querySelectorAll('.dream')
// for(const prop of classrooom){
//     console.log(prop.className);
// }

// to add a new className to a div while having the previous still there

// for(const prop of classrooom){
//     prop.classList.add('foolishIdiot')
// }

// //to remove a className from the list of classes 
// //the setTimeout is to give how long it will stay before getting executed
// setTimeout(()=>{
//     for(const prop of classrooom){
//         prop.classList.remove('foo')
//     }
// }, 5000)


// // setinterval: this, at a said number of seconds, does a particuler execution over and over again

// setInterval(()=>{
//     for(const prop of classrooom){
//         //toggle is a built in function that turns on and off the execution repeatedly, forever
//         prop.classList.toggle('foo')
//     }
// }, 1000)


// //how to create elements on html using javascript

// const createElement = document.getElementById('create')
// const newElement = document.createElement('p')
// newElement.innerHTML = 'I was created'
// console.log(newElement)

// //appending an element into already existing elements
// createElement.appendChild(newElement)
// createElement.removeChild(newElement)







// //events
// a DOM event is sent to notify the code of any change that has occured, awaiting a reaction. It is represented by objects.

// - Any event that takes place in the DOM 
// - Can be user generated or by an API
// - There are many types of events
// - they contain properties and methods  
// - an event listener function takes in the event to listen for, and a secind argument or callback ton be called whenever the described event fires.


//below shows an event listener that listens for a click to occur anywhere on the entire page
// document.addEventListener('click', function clicking(event) {
//     alert('you have clicked me!!!!!!');
// })


// // //this listens for clicks to occur on a div 
// const evente = document.getElementById('evente')
// // evente.addEventListener('mousedown', clicking)
// evente.addEventListener('click', clicking)

// evente.addEventListener('focus', clicking)

// evente.addEventListener('focusout', clicking)

// //this functions makes the event listener fire only once afterwhich it stops
// function clicking (e){
//     evente.innerText = 'e don do'
//     evente.removeEventListener('click', clicking)
//     console.log(e.type)

// }



//propagating the DOM

// const bckgrnd = document.getElementById('bckgrnd')
// const listItemsUl = bckgrnd.querySelector('ul')
// const allLi = bckgrnd.querySelectorAll('LI')


// document.addEventListener('click', toggleBackground)
// function toggleBackground(evt){
//     const clicked = bckgrnd.contains(evt.target);
//     console.log(clicked);
//     if (clicked){
//         bckgrnd.classList.add('background');
//     }
//     else {
//         bckgrnd.classList.remove('background');
//     }
//     console.log(evt);
// }


// listItemsUl.addEventListener('click', addGreenBackground)
// function addGreenBackground(e){
//     //inorder to stop the black background from beign activated when the LI is clicked... you Stop Propagation
//     e.stopPropagation();
//     const targetLi  = e.target
//     console.log(targetLi);
//     // inorder to eliminate the error of clicking the bullets and the entire list items glows greeen, we target the ul node name 

//     if (targetLi.nodeName === 'UL'){
//         return;
//     }
//     //inorder to make the green color to leave the div that has been focused out
//     // do 

//     // for (const prop of allLi){
//     //     prop.classList.remove('green')
//     // }
//     // const targetLi  = e.target


//     // or 
//     const green = document.querySelector('.green')

//     if (green){
//         green.classList.remove('green')
//     }

//     targetLi.classList.add('green')

// }

// //note that you cannot put an eventlistener on an array like data type

// // you can also use a toggle method ... for this the class 'bckgrnd' needs to be added to the div in the html document.

// // bckgrnd.addEventListener('mousedown', switchBackground)

// // function switchBackground(evt){
// //     if (evt.which === 1){
// //         bckgrnd.classList.toggle('background');
// //     }
// // }



// // preventing default: moments when you would want users to go to a specific page or anchor 
// // preventing default can also work in cases where you want to create or stop certsin browser shortcuts

// const div2 = document.getElementById('div2')
// const myLink = div2.querySelector('a')

// // myLink.addEventListener('click', function(event){
// //     event.preventDefault()
// //     alert('not today')
// // })


// // for instance you want to stop users from right clicking on a page... you make use of the event listener 'context menu'
// // myLink.addEventListener('contextmenu', function(event){
// //     event.preventDefault()
// //     alert('SORRY YOU CANNOT DO THAT')
// // })


// //another example: you have a form:post and you don't want to have the 404 page coming up yet. since theres no backend attached.
// //prevention default is the best solution
// // const myForm = document.getElementById('myForm')
// // myForm.addEventListener('submit', function(e){   //submit is used to listen for clicks on a form type submit
// //     e.preventDefault()
// //     const myInput = document.getElementById('myInput').value 
// //     // console.log(myInput);
// //     // alert('You just typed ' + myInput + ', sadly you cannot submit :(')
// //     //in a case where you wish to append new lists into the ul list items
    
// //     //this creates a new child
// //     const newLi = document.createElement('li')
// //     newLi.innerText = myInput
// //     //this appends a child that has been created
// //     listItemsUl.appendChild(newLi)  
// //     //this resets the form to allow more inputs
// //     myForm.reset()
// // })




// //key events: this checks if a key has been triggered or not.
// document.addEventListener('keydown', function(e){
//     console.log(e.key);
//     // to remove default shortcuts like spacebar taking you to the bottom of the page on chrome
//     if (e.key === ' '){
//         // e.preventDefault()
//     }

//     // if i want to remove the refresh shortcut
//     if (e.key === 'r'){
//         // e.preventDefault()
//     }
// })






// //how to create a chatbox that shows when a user is typing 

// const div3 = document.getElementById('div3')
// const para = div3.querySelector('p')
// const textArea = div3.querySelector('textarea')
// const paraText = 'typing...'
// let timer;

// textArea.addEventListener('keydown', addText)
// textArea.addEventListener('keyup', removeText)

// function addText(){
//     para.innerText = paraText
// }

// function removeText(){
//     clearTimeout(timer)
//     timer = setTimeout(() => {
//             para.innerText = ''
//         }, 1000)
// }


// load Events: this is used in cases where the DOM is to be loaded before the content is run and parsed.
//this is used in cases where the script tag is parsed at the head tag before the body html is parsed and run
//we make use of the event listener 'DOMContentLoaded'

///check the script tag at the top the html doc for practice examples



//template literals
//- these allows for embedded expressions
//- it makes it easier to create multiline strings and allows string interpolation/concatenation
//- Enclosed in back-ticks (``), instaed of single ('') or double quotes (" ")
//- can contain variables
// ''
// " "
// const newString = `
// <ul>
//     <li></li>
//     <li></li>
//     <li></li>
//     <li></li>
//     <li></li>
// </ul>
// `
// console.log(newString);

// var myList = 
//     '<ul>' +

//         '<li>items 1</li>' +
//         '<li>items 2</li>' +
//         '<li>items 3</li>' +
//         '<li>items 4</li>' +
//         '<li>items 5</li>' +
//         '<li>items 6</li>' +

//     '</ul>';

// console.log(myList);




// const list = document.getElementById('list')
// list.innerHTML = myList


// const myOtherList = `
//     <ul>
//         <li>a</li>
//         <li>b</li>
//         <li>c</li>
//         <li>d</li>
//         <li>e</li>
//         <li>f</li>
//     </ul>

// `
// console.log(myOtherList)
// const newlist = document.getElementById('myotherlist')
// newlist.innerHTML = myOtherList


//concatenating variables

//es6 method
// const first1 = 'Chijioke'
// const last1 = 'Ebirim'
// const age1 = 17

// console.log(`Hello, my name is ${first1} ${last1}, and i am ${age1} years old`)
// console.log(`Hello my name is uchenna and i am a boy tHAT LIVE IN OWERRI, IMOSTATE, nIGERIA. my students name are ${first1} and ${first2}`)


//previous method
// const first2 = 'Chiemezie'
// const last2 = 'Ebirim'
// const age2 = 16
// const rex = `happy child
// needs food`
// console.log(rex);
// console.log('Hello, my name is ' + first2 + ' ' + last2 + ', and i am ' + age2 + ' years old' );

//other functions of back ticks
//- boolean expressions
// const isTrue = true
// console.log(`Is True: ${isTrue}`);
// console.log(`Is True: ${!isTrue}`);

// //- getting the current date and time
// const dateNow = new Date()
// console.log(`Today's date is ${dateNow.toLocaleString()}`)

// //- template liteals inside template literals
// //mapping functions: used to span through arrays
// const myArray = [1,2,3,4,5];
// myArray.map((num)=>{
//     console.log(num);
// })

// console.log(`here is the result ${myArray.map(num => num + 5 )}`);

















//destructuring 

// // old method 
// const myrray = new Array()
// myrray[0] =  1
// myrray[1] =  2
// myrray[2] =  6
// myrray[3] =  3
// myrray[4] =  4

// console.log(myrray)
// //- The destructuring assignment syntax is a javascript expression that makes it possible to extract data from arrays or objects into distinct variables 

// //- Destructuring syntax can be used on left-hand side of assignments
// const [x,y,z,a,b] = myrray
// console.log(x);
// console.log(y);
// console.log(z);

// //swapping two variables
// let aa = 100
// let bb = 500
// let cc = 800
// console.log(aa,bb,cc);

// [bb, cc] =  [cc, bb]
// console.log(aa,bb,cc);

// using with functions
// function FoodFilter(arr, term){
//     return arr.filter((t) => t == term )

// }

// const [result] = FoodFilter(['chicken', 'fish', 'turkey', 'pig', 'cow'], 'pig')
// console.log (`i want to get a ${result}`)

// //ignore some values
// const anotherArr = [10, 20, 30, 40, 50, 60];
// const [numA, ,numC,numE, ,numF] = anotherArr
// console.log(`First: ${numA}, Third: ${numC}, Fifth: ${numE}, Sixth: ${numF}`)


// //using REST parameter

// const RestArrayList = (dog, cat, ...others)=>{ 
//     //dog outputs the first value = 'bark'
//     console.log(dog)
//     //cat outputs the second value = 'meow'
//     console.log(cat)
//     //the log out below outputs the rest of the parameters in a single array
//     // console.log(others)
//     //the log out below outputs the rest of the parameters seperately
//     console.log(...others)

// }
// RestArrayList('bark', 'meow', 'mooo', 'snort', 'hiss', 'roar', 'meee')



// const yetAnotherArr = ['tomato', 'pepper', 'salt', 'water','maggi', 'onion', 'tatashe']
// const [tomato, pepper, ...otherIngredient] = yetAnotherArr;

// console.log(...otherIngredient);


//Destructuring objects

// const myObj = {firstName:'Uchenna', lastName: 'ofor', age:21, nationality: 'Nigerian'};
// const firstname = myObj.firstName
// const lastName = myObj.lastName
// console.log(firstname, lastName)

//the structure above will prove tedious in the long run. hence the structure below is preferred
// const {firstName, lastName, age, nationality} = myObj
// console.log (nationality)

//n.b the variable you assign to each key:value pair, must be the exactly the same as the key
// reason: the computer reads it as 
// firstName = myObj.firstName
// age = myObj.age

//so if changed it would be read as:
// name = myObj.name 
//whiich does not exist in myObj

// to fix that
// const myObj2 = {q:'cool', w:'yeah', e:'nice', loggedIn: new Date()}

// const {q:mood, w, e, loggedIn: lastLogIn} = myObj2;
// // console.log(q);
// console.log(mood, lastLogIn.toLocaleString());

// const myObj7 = {firstName:'Uchenna', lastName: 'ofor', age:21, nationality: 'Nigerian', housHoldItems: {parlour:'sofa', kitchen:'pot', bedroom:'bed', toilet: 'cistern'}};
// // sofa  = console.log(myObj7.housHoldItems.parlour)

// const {firstName:name, lastName:myFathersName, age, nationality, housHoldItems:toilet} = myObj7
// console.log(toilet);



// // throwing exceptions

// const myObj4 = {a:3, b:7}//[1,3,4,5,6,7,7,8]

// // myObj4.map((obj) => console.log(obj));

// // the above code is an error because mapping is done on arrays not objects
// console.log('test');

// //to throw your own exception
// //- use the throw statement to throw own exception
// // - you specify the expression containing the value to be thrown e.g throw 'expression'
// // can throw any expression

// // throw 'new error'


// function checkIfNum(n){
//     if (isNaN(n)){
//         throw 'this is not a number'
//     }
//     else {
//         console.log(n)
//     }
// }

// // checkIfNum('hi')
// // checkIfNum(1)
// console.log('hi');


// const myObjException = {
//     toString: function(){
//         return 'I am an Object exception'
//     }
// }

// throw myObjException


// try, catch, finally

// try{
//     throw 'exception'

// }
// catch(e){
//     console.log (e)
// }

// finally{
//     console.log('alwasy runs')
// }

// console.log('i must run!!!!');



// try {
//     document.write(1/oooooooohohhhhhhhhhh)
// }
// catch(error){
//     document.write(error)
// }

// finally{
//     document.write ('<br><br><br><br> <p>hello world</p>')
// }


// //OOP - Object Oriented Programming
// //- basic idea is that you use objects to repressent real world things. objects have own properties and functions (methods)
// //- objects can contain data and other code to represnet info abiut what you tryna model
// //-data/ methods inide the object is encapsulated. hence cannot be accessed outside the confines of the function

// function Ship(){
//     const obj = {}
//     this.floats = true
//     this.material = 'steel'
//     this.whatAmI = function (){
//         console.log(`I am made of this ${this.material}, and do I float? well ${this.floats}`);
//     }
//}

// //instantiating the new object with the properties floats and material
// const myShip = new Ship()
// console.log(myShip);
// myShip.whatAmI()

// //Ship() hence is a model of a real life thing = 'a ship'


// //Javascript  is dynamic and hence does not provide a traditional class implementation per se
// //this means that the idea of inheritance in javascript expands far greater than most other OOP languages
// //javascript inheritance is prototype based
// //each object has a private property called prototype
// //a prototype is seen as a bucket that store methods and properties which are unique to partcular objects
// //the prototype property is where inherited methods are defined
// //n.b virtually all data types in javascript are objects. reason will come later
// const myObj9 = {
//     a:1,
//     b:2,
//     // c: function(){
//     //     console.log('found me');
//     // },
//     valueOf: function(){
//         console.log('found me');
//     }
// }

// console.log(myObj9.a);
// //what the log above is doiing is checking to see if there is a method (a) defined inside the object myObj9. the anser is YES

// //but
// console.log(myObj9.valueOf());
// //valueOf() is not defined among the methods in myObj9
// //heres what happens

// //checks to see if there is a method (valueOf()) defined inside 'myObj9 prototype'. the anser is NO
// //It then checks to see if there is a method (valueOf()) defined inside the 'Object prototype'. the anser is YES

// //that phenomenom is seen as 'Walking up the chain'

//lets try a string with a string method
// const myString = 'hello'
// console.log(myString.charAt(1));

// //Does myString prototype have a method charAt() = NO
// //Does String prototype have a method charAt() = YES

//lets try a string with an Object method
// console.log(myString.valueOf());

// //Does myString prototype have a method valueOf() = NO
// //Does String prototype have a method valueOf() = NO
// //Does Object prototype have a method valueOf() = YES

// //hence it walks up the chain and inherits from myString > String > Object

// //n.b Object prototype is the top of the prototype chain

// //but note... not all methods are passed down through the prototype e.g
 //console.log(Object.keys(myObj9));  //this is another way of logging out the keys in an object

// //if i ttry out
// console.log(myObj9.keys())

// //this is because .keys is not available for inheritance unlike .valueOf

// //check out 'mozilla developer network for reference

// myObj9.c();
// myObj9.valueOf();
// Object.valueOf(myObj9)


// other methods it can collect from OObject

// console.log(myObj9.hasOwnProperty('a'));

// //arrays

// const myArrrrr =  ['a', 'b', 'c' ]
// myArrrrr.push('d')
// console.log(myArrrrr)

// //this shows undefined cos nothing is within myArrrrr
// console.log(myArrrrr.prototype);

// //this below shows the methods that can be called and inherited from Array unto child prototypes
// console.log(Array.prototype);

// //this below shows the methods in the Object prototype
// console.log(Object.prototype);


// //knowlwdge of this prototype is good inorder to be very efficient to know how far to go when calling a method

// const name1 = {
//     name : 'Chijioke ebirim',
//     age : 17,
//     sayName : function(){
//         console.log((`My name is ${this.name}`));
//     },
// }


// const name2 = Object.create(name1)
// console.log(name2.name);
// name2.name =  'Chiemezie'
// name2.sayName()
// console.log(name2.name);

// //above is the idea of inheritance and copying 

// const name3 = Object.create(name2)

// console.log(name3.name)
// console.log(name3.age);


// // // checking if the properties are unique to eah of them

// console.log(name1.hasOwnProperty('name'));

// console.log(name2.hasOwnProperty('sayName()'));
// console.log(name2.hasOwnProperty('name'));

// console.log(name3.hasOwnProperty('age'));




//Object Constructor
// function Animal (name, age, breed){

//     //creating an object
//     const obj8 = {}

//     //instantiating the object
//     obj8.name = name;
//     obj8.age =  age;
//     obj8.breed = breed;
//     obj8.sayBreed = function(){
//         console.log(`My breed is ${obj8.breed}`);
//     }
//     //returning the object
//     return obj8
// }

//in conjuction with the keyword 'new'
// const dog1 = new Animal('bingo', 3, 'rottwieller')
// console.log(dog1);
// dog1.sayBreed()


// const dog2 = new Animal('spike', 7, 'caucassian')
// dog2.sayBreed()
//in a case you wish to see the prototype of Animal
// console.log(Animal.prototype);

// //the above means the methods in Animal() can be inherited and reused


// //in a case you wish to add a new protoype to lets say Animal
// Animal.prototype.sayBreed = function(){
//     console.log(`i am a $(obj8.breed)`);
// }

// console.log(Animal.prototype);

// //now what this does is make saybreed a prototype, instead of lapping say breed to be a method in the constructor prototype
// //never alter default prototypes 










// // inheritance
// // in a case where you wish to be dynamic and specific when passing inheritance.
// //for instance Animal(name, age, breed), not all animals care about breed, example cat, as such cat() won't need to inherit all of the features of Animal()

// function Animal (name, age){
//     this.name = name;
//     this. age = age;
// }
// console.log(Animal.prototype);
// Animal.prototype.makeNoise = function(){
//     console.log(`generic Animal Noise`);
// }

// function Dog(name, age, breed){
//     //we invoke a function 'call' which allows you to call another function thats defined elsewhere 
//     Animal.call(this, name, age);
//     this.breed = breed
// }


// console.log(Dog.prototype);
// console.log(Animal.prototype);
// // //the above will blow an error because makeNoise() is not a function inside Dog.prototype Hence;
// Dog.prototype = Object.create(Animal.prototype)
// // //the code above creates a copy of the Animal Prototype into the Dog.prototype
// console.log(Dog.prototype);

// // // but that also applies the Animal constructor into Dog which is not what we want. Hence;
// Dog.prototype.constructor= Dog

// console.log(Dog.prototype);
// // //Now Dog function now has the Dog constructor in it

// const barky =  new Dog('Barky', 1, 'chihuahua')
// console.log(barky);

// // but also inherits Animal function, hence;
// barky.makeNoise()


// //another example
// function Cat(name, age, color){
//     Animal.call(this, name, age)
//     this.color = color;

// } 

// Cat.prototype =  Object.create(Animal.prototype)
// Cat.prototype.constructor = Cat

// //but we don't want to only settle with the makeNoise() function that Animal() has. as such we create our own prototype
// Cat.prototype.scratchPost = function(){
//     console.log('Cat has scratched the Post');
// }
// // console.log(Cat.prototype);

// const kitty = new Cat('garfield', 3, 'ginger-red')

// console.log(kitty);
// // kitty.makeNoise()
// // kitty.scratchPost()

// console.log(Cat.prototype);
// console.log(Cat.prototype.constructor);


// //lets break it down further

// function Kitten (name, age, color, litter){
//     Cat.call(this, name, age, color)
//     this.litter = litter
// }

// Kitten.prototype = Object.create(Cat.prototype)
// Kitten.prototype.constructor = Kitten

// const tinyKitten = new Kitten('tinny', 0.2, 'grey', 1)
// console.log(tinyKitten);

// console.log(tinyKitten instanceof Cat);
// console.log(tinyKitten instanceof Animal);
// console.log(tinyKitten instanceof Dog);



// Cat.prototype.scratchPost = function(){
//     if (this instanceof Kitten){
//         console.log('Kitten scratched post');
//     }else{
//         console.log('Cat scratched Post');
//     }
// }

// tinyKitten.scratchPost()








//classes
// in the above examples, we learnt the pre-Es6 ways of inheritance and object construction. But as you can assume, applying that in a project as huge as you can imagine would be a pain. Hence the intro of the Class keyword 
//This does nothing special, rather makes inheritance alot easier
//note: classes are not hoisted the way functions are

// class Animal {

//     constructor (name, age){
//         this.name = name
//         this.age = age
//     }
//     //to create a prototype in classes. they are declared like functions, but are actually methods
//     makeNoise(){
//         console.log('generic animal noises');
//     }
//     //in a case where you wish to pass a method that will work from the class itself 
//     static classTestMakeNoise(){
        
//         console.log(`Each animal has unique features for e.g ${this.uniqueFeature} for a cow. As such they will have distict noises they make`);
//     }
// }   

// const goat = new Animal('Billy', 7)
// // console.log(goat);

// // goat.makeNoise()

// // //to check where it has been added, whether the Animal Object or the prototype
// // console.log(Animal.prototype);
// // // and here we see that it has been added to the prototpe. NEAATT!!!


// // // // TO redefine the value of makeNoise()
// // Animal.prototype.makeNoise =  function (){
// //     console.log('generic animal noises decalared in Classes');
// // }
// // goat.makeNoise()

// // classes can also be written as an expression, same way with function expression
// // const Animal = class {
// //     constructor(name, age){
// //         this.name = name
// //         this.age =  age 
// //     }
// // }



// //class Inheritance
// class Mammal extends Animal{
//     constructor (name, age, uniqueFeature){
//         // this.name =  name
//         // this.age =  age

//         // the super() refers to the parent class
//         super (name, age)
//         this.uniqueFeature =  uniqueFeature
//     }

//     //we can also use it even when inheriting methods
//     testMakeNoise(){
//         super.makeNoise()
//     }

    
// } 
// const cow =  new Mammal('cow', '3', 'vertebrae')
// console.log(cow);
// cow.testMakeNoise()

// Mammal.classTestMakeNoise()




//static method
//this is a method that is called on the class not an instantiation of the class

// class Mammal extends Animal{
//     constructor (name, age, uniqueFeature){
//         // this.name =  name
//         // this.age =  age

//         // the super() refers to the parent class
//         super (name, age)
//         this.uniqueFeature =  uniqueFeature
//     }

//     // when you want the main class to have a method 
//     static checkMethod(){
//         console.log('Method is checked');
//     }
// } 
// const cow =  new Mammal('cow', '3', 'vertebrae')
// // console.log(cow);

// Mammal.checkMethod()

//disadvantages of inheritance
//1. complexity: this could become difficult to maintain the chain of inheritance. especially when you have a lot of methods

// as such, its adviseable to keep your classes as concise as possible







//callbacks and promises

//callbacks
// a way to write asynchronous javascript
// a callback function is a function that is passed to another function as a parameter
// this inner function is called at some point during the executon of the containing function 
// in other words, it is 'called back' at some specified point inside the containing function's body

// function goFirst(){
//     console.log('i should go first')
// }

// function goSecond(){
//     console.log('i should always go second');
// }

// goFirst()
// goSecond()

//because javascript is synchronous , it will run according to how it was called






// function goFirst(){
//     setTimeout(()=>{
//         console.log('i should go first')
//     }, 1000)
// }

// function goSecond(){
//     console.log('i should always go second');
// }

// goFirst()
// goSecond()






// in the case above, the goFirst() function was delayed by 1 second, hence revealing how asynchronous, javascript can be.
// the goSecond() function did not wait for the goFirst() to run, rather it went ahead and logged out the result

//rewriting the above using a callback function
// the purpose is to tell the program not to run goSecond() until goFirst() is parsed and run successfully

// function goFirst(callBack){ // the argument can be anything, not necessarily 'callBack'
//     setTimeout(()=>{
//         callBack(console.log('i should go first'));
//     }, 1000);
// }

// function goSecond(){
//     console.log('i should always go second');
// }

// goFirst(goSecond); // note that the goSecond function has no brackets after it. That means in that scenario, we are but making a reference to the original goSecond() function, instead of invoking it



// //e,g 2
// function sumUpNumbers(num1, num2, callBack){
//     const summedValue = num1 + num2
//     callBack(summedValue)
// }

// function logOutSum(total){
//     console.log(parseInt(total) + 1000);
// }

// // sumUpNumbers(200, 500, logOutSum)


// //callbacks in real life scenarios  can be used in cases where you wish to read a file, firstly open the file, read ut, then clise the file before running a function


// //e.g 3
// function sayWhenDone(){
//     console.log('Happy new year!!!!!');
// }

// function looper(number, callBack){
//    setTimeout(()=>{
//     for(let i = number; i>0; i--){
//         console.log(i);
//     }
//     callBack()
//    }, 1000)
// }

// looper(100, sayWhenDone)

// ///simulating a fetch api with data which is to be gotten and read after it has been fetched using a callback

// const myDiv = document.getElementById ('main')
// const myButton = myDiv.querySelector('button')
// const paragraph = document.getElementById('paragraph')
// const fakeData =  {
//     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, voluptate eveniet veniam fuga at perspiciatis. Possimus facilis eum quam, iste consequatur expedita, quisquam earum quos mollitia error quia illo ullam!',
// }



// myButton.addEventListener('click', function (){
//     requestData(populateDom)
// })

// function requestData (callBack){
//     let data = 'loading...' 
//     callBack(data)
//     //fake server request and response
//     setTimeout(()=>{
//         //response from server
//         data = fakeData.text
//         callBack(data)
//     }, 2000)

// }

// function populateDom (data){
//     // paragraph.innerText = data
//     paragraph.innerHTML =`<p>${data}</p>`

// }





// //promises
// //these are used as async computations like callbacks
// //see it as a representation of a value that may be available now, later or never
// // A promise eists in three states:
// //1. pending
// //2. fulfilled
// //3. rejected or failed

// // e.g
// // const testPromise = new Promise((resolve, reject)=>{
// //     setTimeout(()=>{
// //         resolve('promise Ok')
// //     }, 1000)
// // })

// // testPromise.then((resolveMsg) => {
// //     console.log(`looks like: ${resolveMsg}`);
// // }).then(()=>{
// //     console.log('I should run after the promise is resolved');
// // })

// //rejecting the promise:
// //can be used for instance you have an external API, but the information is not complete. Hnece the program rejects the API

// // const testPromise = new Promise((resolve, reject)=>{
// //     if (Math.random() > 0.5){ // hence 50% of the time, the promise is rejected
// //         reject('promise is not complete... REJECTED!!')
// //     } 
// //     setTimeout(()=>{
// //         resolve('promise Ok')
// //     }, 1000)
// // })

// // testPromise.then((resolveMsg) => {
// //     console.log(`looks like: ${resolveMsg}`);
// // }).then(()=>{
// //     console.log('I should run after the promise is resolved');
// // }).catch((err)=>{ //when working with 'reject' arguments, it is good to catch the error
// //     console.log(`Error: ${err}`);
// // })


// // e.g 2
// function numAdder (n1, n2){
//     return new Promise ((resolve,reject)=>{
//         const addedNums = n1 + n2 
//         setTimeout(()=>{
//             resolve (addedNums)
//         }, 500)
//     })
// }

// function Numsquarer(num){
//     return new Promise ((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(num * num)
//         }, 800)
//     })
// }


// numAdder(10, 20)
//     .then (data => Numsquarer(data))
//     .then (moreData => console.log(moreData))




// //when we want the promise to always resolve
// function resolvePromiseAlways(num) { 
//     return Promise.resolve(num)
// }
// resolvePromiseAlways(Math.floor(Math.random() * 20))
// .then(data => console.log(data))


// //using arrays
// const prom = Promise.resolve([10,20,30,40,50,60,70,80,90])
// prom.then(data => data.map(mapTheData => mapTheData * 10))
// .then(transMap => console.log(transMap))


// //using objects
// const objProm = Promise.resolve({text:'resolve always :)'})
// objProm.then(data => console.log(data.text))



// //note that the Prom example ran after the objProm...this is cos the map function takes a while to map through the array
// Promise.reject()
// .then(
//     res => console.log('correct'),
//     error => console.log('not correct'))
// .catch(err => console.log(err))



// //promise.all

// const p1 = Promise.resolve('A')
// const p2 = Promise.resolve('B')
// const p3 = Promise.resolve('C')

// Promise.all([p1,p2,p3])
// .then(data => console.log(data)) 

// //this is good when you wish to simultaneoullsy run a function after all the promises on queue have been resolved

// //note: if one of the promises is rejected, automatically, everything will be rejected
 


// Promise.race

// // when two promises with different run speed are put together, the promise.race picks the fastest and runs it regardless of the rest of the code 













// fetch API
// this is seen as a way of getting requests from external APIs which returnsgiy Promises

// e.g you can fetch tweets from twitter on a particular topic using the twitter API
// or even on pinterest on some particular fashion ideas using the pinterest API

// this basically returns a promise

// checking out starwars API
// fetch('https://swapi.dev/api/planets/1/')
// .then (data =>console.log(data))
// .catch(err => console.log(err));

// the result will be in form of a response gotten back. But it needs to be called back in JSON format to be read in a format that is understandeable to us humans


// fetch('https://swapi.dev/api/people/3/')
// .then (data => data.json())
// .then (d => console.log(d))
// .catch(err => console.log(err));

// this JSON converts the reposnse gotten into a regular javascript object having the keys and values




// // Checking this out in the DOM 
// const DivNkem = document.getElementById('people')
// const myButton =  DivNkem.querySelector('button')

// myButton.addEventListener('click', getPeople)

// function getPeople(){
//     fetch('https://swapi.dev/api/people/9/')
//     .then (data => data.json())
//     .then (d => addPeople(d))
//     .catch(err => console.log(err));
// }

// function addPeople(peopleObj){
//     const newParagraph = document.createElement('p')
//     newParagraph.innerText = peopleObj.name;
//     DivNkem.appendChild(newParagraph)
// }




// //the functiosn above will fetch the data from the api https://swapi.dev/api/people/9/
// //but it only fetches from people-9
// //to make it dynamic

// const DivNkem = document.getElementById('people')
// const myButton =  DivNkem.querySelector('button')

// myButton.addEventListener('click', getPeople)

// to get the exact amoount of people in starwars
// fetch('https://swapi.dev/api/people/')
// .then ( d => d.json())
// .then ( a => console.log(a))
// .catch (err => console.log(err))

// fetch that endpoint



// function getPeople(){
//     const getRandomNum = Math.floor(Math.random() * 82) + 1
//     fetch(`https://swapi.dev/api/people/${getRandomNum}/`)
//     .then (data => data.json())
//     .then (d => addPeople(d))
//     .catch(err => console.log(err));
// }

// function addPeople(peopleObj){
//     console.log(peopleObj);
//     const newParagraph = document.createElement('p')
//     newParagraph.innerText = peopleObj.name;
//     DivNkem.appendChild(newParagraph)
// }



//applying this is in a real life app per se

//the functiosn above will fetch the data from the api https://swapi.dev/api/people/1/
//but it only fetches from people-1
//to make it dynamic

// const DivNkem = document.getElementById('people')
// const myButton =  DivNkem.querySelector('button')

// myButton.addEventListener('click', getPeople)

// // to get the exact amount of people in starwars
// // https://swapi.dev/api/people/
// // fetch that endpoint


// function getPeople(){
//     const getRandomNum = Math.floor(Math.random() * 82) + 1
//     fetch(`https://swapi.dev/api/people/${getRandomNum}/`)
//     .then (data => data.json())
//     .then (d => addPeople(d))
//     .catch(err => console.log(err));
// }

// function addPeople(peopleObj){
//     const {name, birth_year, created, gender, hair_color, eye_color} = peopleObj
//     const createdInDate = created.toLocaleString() 
//     const birthYearInDate = birth_year
//     const myPeopleDiv = document.createElement('div')
//     const peopleDetss = `
//     <h1> ${name} </h1>
//     <p>
//         ${name} is a ${gender}, born in ${birthYearInDate} created in the year ${createdInDate}.
//         Special features include: 
//         <ul>
//         <li> Hair Colour - ${hair_color} </li>
//         <li> Eye Colour - ${eye_color} </li>
//         </ul>
//     </p>

//     `
//     myPeopleDiv.innerHTML = peopleDetss
//     DivNkem.appendChild(myPeopleDiv)
// }


// alterative method to appending child

// myPeopleDiv.insertAdjacentHTML()
// 'beforeend', peopleDetss
// 'afterbegin', peopleDetss
// 'beforebegin', peopleDetss
// 'afterend', peopleDetss




// in a case where a url is not a secure location, i.e (http)instead of (https), most fetch requests will not be able to get the info
// to resolve this, regex is employed 

// // e.g 
// const url = 'http://newa.com'
// // converting it =>> 
// const newUrl = url.replace(/^http:\/\//i, 'https://')
// console.log(newUrl);


//how to do a dropdown in html




// const number = 12345678890
// console.log(number);
// const num2=number.toLocaleString()
// console.log(typeof num2);

// const nums = '123456'
// console.log(parseInt(nums))






























//REST and SPREAD
//This can be used in places where functions:
// 1. expect multiple arguments
// 2. expect multiple elements 
// 3. expect multiple variables

// function spreadFunction (...multipleArgs){
//     console.log(multipleArgs);
// }
// spreadFunction(1,2,3,4,5,6,7,8,9,9,8,7,6,6,5,5,4)

// // in variables

// const myarrr1 = [1,2,3,4]
// const myarrr2 = [5,6,7,8]
// console.log(...myarrr2);
// const myarrr3 = [...myarrr1, ...myarrr2]
// console.log(myarrr3);

// //how to turn an array into seperate arguments 

// function sayHi(x,y,z){
//     console.log(`Hello, ${x}, ${y} and ${z}`);
// }
// const helloArray =  ['Somto', 'Chiemezie', 'Chijioke']
// sayHi(helloArray) // this outputs the argument x to be the array 'helloArray', while the rest is undefined
// //how to fix that

// //the former way
// sayHi.apply(this, helloArray)

// //spread syntax way
// sayHi(...helloArray)

// // e.g 2
// const array1 = [100, 200, 300, 400]
// const array2 = [90, 100, 110, 120]




// // former method
// array1.push.apply(array1, array2)
// // console.log(array1); 


// // // spread syntax
// // array1.push(...array2)
// // console.log(array1);


// //concat arrays#


// const myArr = ['jelly beans']
// const myARR2 = ['donughts', 'lemonade']
// const myARR3 = ['chocolate', 'pie', 'chips']

// //using concat()
// const newMyArr = myArr.concat(myARR2, myARR3)
// console.log(newMyArr);

// // //using spread syntax
// const newMyArr2 = [...myArr, ...myARR2, ...myARR3]
// console.log(newMyArr2);




// Rest
// this is similar to spread sytnax in terms of syntax but does the direct opposite in doings
//check previous examples





// //Map object
// //used for simple key/value pairs
// //any value can be used for either a key or value (i.e object, string, function)
// //reasons for using maps over objects:
// //1. object prototype has default keys that might conflict with own keys 
// //2. keys of map can be anything, whereas with objects, have to be string or symbol
// //3. can easily get the size of Map


// const myMap = new Map()
// myMap.set('key', 'value')
// myMap.set('anotherkey', 'anothervalue')
// myMap.set('yetAnotherkey', 'yetAnothervalue')
// myMap.set(function sayh(){}, 'yetAnothervalue')
// console.log(myMap);


// console.log(myMap.size);
// console.log(myMap.get('yetAnotherkey'));
// ;
// console.log(myMap.has('yetAnothervalue'));
// myMap.clear();
// console.log(myMap);
// console.log(myMap.size);




// //Sets Object
// //this lets you store unique values of any data type
// // each element is unique
// // it is similar to array, but with the difference being that each entry can only be entered once


// const mySet = new Set()
// mySet.add('bob')
// mySet.add('uche')
// mySet.add('chisom')
// mySet.add('chisom')
// mySet.add('chisom')
// mySet.add('ogadinma')
// mySet.add('ogadinma')
// mySet.add('ogadinma')
// mySet.add('ogadinma')
// mySet.add('ogadinma')
// mySet.add('ogadinma')
// mySet.add('ogadinma')
// mySet.add('ogadima')





















