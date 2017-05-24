// first object
// var bmw = {
// 	name: "bmw: ",
// 	type: "I8",
// 	cost: 100000,
// 	color: "red",
// 	img: 'images/i8.jpg',
// 	// buyCar : function(){
// 	// 	return this.name + this.cost + this.img
// 	// }
// }

// var audi = {
// 	name: "audi: ",
// 	type: "A4",
// 	cost: 25000,
// 	color: "black",
// 	img: 'images/a4.jpg',
// 	// buyCar : function(){
// 	// 	return this.name + this.cost + this.img
// 	// }
// }
// var ford = {
// 	name: "mustang",
// 	type: "cobra",
// 	cost: 20000,
// 	color: "blue",
// 	img: "images/cobra.jpeg",
// 	// buyCar : function(){
// 	// 	return this.name + this.cost + this.img
// 	// }
// }
// object constructor
function cars(name, type, cost, color, img){
	this.name = name
	this.type = type
	this.cost = cost
	this.color = color
	this.img = img
	this.tax = function(){
		return this.cost * 0.085
	}
	// this.car  = function(){
	// 	return (this.name + this.cost + this.img)
	// }
}
// new objects which utilize the constructor
 var bmw = new cars('Bmw', 'I8', 100000, 'red', 'images/i8.jpg')
 var audi = new cars('Audi', 'A4', 25000, 'black', 'images/a4.jpg')
 var ford = new cars('Mustang', 'Cobra', 20000, 'blue', 'images/cobra.jpeg')
//console.log(bmw, audi, ford)
// so far everything is correct, thus no errors woooooo
 var carObjects = [bmw, audi, ford]
for (var i = 0; i < carObjects.length; i++) {
	 console.log(carObjects[i].tax())
	var newDiv = document.createElement('div')
	var crop = document.createElement('div')
	var newImg = document.createElement('img')
	// creates the class name
	newImg.className = 'img-responsive'
	var newH1 = document.createElement('h1')
	var newH2 = document.createElement('h2')
	var newH3 = document.createElement('h3')
	var newP = document.createElement('p')
	var newSpan = document.createElement('span')
	var newH4 = document.createElement('h4')

	//
	var h1Content = document.createTextNode(carObjects[i].name)
	var h2Content = document.createTextNode(carObjects[i].type)
	var h3Content = document.createTextNode(carObjects[i].color)
	var pContent = document.createTextNode("price: " + carObjects[i].cost)
	var spanText =	document.createTextNode('sales tax: ' + carObjects[i].tax())
	var h4Content = document.createTextNode('Total Price: ' + (carObjects[i].cost + carObjects[i].tax()))
	// starting to plug everything into HTML
	crop.appendChild(newImg)
	newH1.appendChild(h1Content)
	newH2.appendChild(h2Content)
	newH3.appendChild(h3Content)
	newP.appendChild(pContent)
	newSpan.appendChild(spanText)
	newH4.appendChild(h4Content)
	newImg.src = carObjects[i].img
// linking new div consolidate all the vars
	crop.className = 'crop'
	newDiv.appendChild(newH1)
	newDiv.appendChild(newH2)
	newDiv.appendChild(newH3)
	newDiv.appendChild(newP)
	newDiv.appendChild(newSpan)
	newDiv.appendChild(crop)
	newDiv.appendChild(newH4)
	// newDiv.appendChild(newImg.src)

	document.getElementById('display').appendChild(newDiv)


	newDiv.className = 'col-md-4'

	}


// //  