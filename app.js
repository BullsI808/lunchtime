var image = document.getElementById('img1');
var paragraph = document.getElementById('paragraph1');
var btn = document.getElementById('btn1');
var img = document.getElementById('img');

var lunch1 = {
    imagesrc : "http://img.taste.com.au/hoyK5oCA/taste/2016/11/hamburger-with-caramelised-pineapple-90338-1.jpeg",
    name : "hamburger",
    adjective : "tasty",
    verb : "stopped"
};

var lunch2 = {
    imagesrc : "https://media-cdn.tripadvisor.com/media/photo-s/09/1c/47/af/bencoolen-coffee-house.jpg",
    name : "spaghetti",
    adjective : "very tasty",
    verb : "ate"
};

var lunch3 = {
    imagesrc : "http://del.h-cdn.co/assets/16/17/980x490/landscape-1461781777-gettyimages-502603422.jpg",
    name : "fish",
    adjective : "raw",
    verb : "moving"
};

var lunch4 = {
    imagesrc : "https://recipes.timesofindia.com/photo/53520345.cms",
    name : "sandwich",
    adjective : "tasty",
    verb : "eaten"
};

var lunch5 = {
    imagesrc : "https://foremangrillrecipes.com/wp-content/uploads/2012/11/grilled-cheese-sandwich-foreman-grill.jpg",
    name : "grilled cheese",
    adjective : "crunchy",
    verb : "eaten"
};

var lunch = [lunch1 , lunch2 , lunch3 , lunch4 , lunch5];



// console.log(lunch[randomNumber]);

// console.log(randomNumber);

btn.addEventListener('click', function(){
    var randomNumber = Math.floor((Math.random() * 5) +0);
    img.src = lunch[randomNumber].imagesrc;

paragraph.innerHTML = lunch[randomNumber].verb +" " + lunch[randomNumber].name + " " + lunch[randomNumber].adjective;
});

