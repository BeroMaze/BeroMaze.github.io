//kitten object function
var Kittens = function(name, fileName){
    this.name = name;
    this.image = fileName;
    this.count = 0;
    this.voted = false;
}
//the number for the first/second number generated and first/second kitten chosen
var number1;
var kitten1;
var number2;
var kitten2;
var timesVoted = 0;

// each kitten object for each picture
var one = new Kittens('one', '1.jpg');
var two = new Kittens('two', '2.jpg');
var three = new Kittens('three', '3.jpg');
var four = new Kittens('four', '4.jpg');
var five = new Kittens('five', '5.jpg');
var six = new Kittens('six', '6.jpg');
var seven = new Kittens('seven', '7.jpg');
var eight = new Kittens('eight', '8.jpg');
var nine = new Kittens('nine', '9.jpg');
var ten = new Kittens('ten', '10.jpg');
var eleven = new Kittens('eleven', '11.jpg');
var twelve = new Kittens('twelve', '12.jpg');
var thirteen = new Kittens('thirteen', '13.jpg');
var fourteen = new Kittens('fourteen', '14.jpg');

// array of all the kitten images
var kittenCorral = [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen];

// number generator for the first kitten image
var chooseOne = function(){
    number1 = Math.floor(Math.random() * 14) + 1; // random number generated
    kitten1 = kittenCorral[number1 - 1]; // picks the object in the array

    if(kitten1.voted === false){
      var img1 = $('<img />', // image tag
             { class: 'image', // image one id
               src: 'kittens/' + kitten1.image, // source to the image used
             }).appendTo('#img1'); // appends image to slot with size
    $('#name1').text(kitten1.name);
    }
    else{
      chooseOne();
    }
}

// number generator for the second kitten image
var chooseTwo = function(){
    number2 = Math.floor(Math.random() * 14) + 1; // random number generated
        if (number2 === number1){ // checks to see if image 1 and 2 are the same
              chooseTwo();
        }

        else {
            kitten2 = kittenCorral[number2 - 1]; // picks the objects in the array

              if (kitten2.voted === false){
                  var img2 = $('<img />', // image tag
                     { class: 'image', // image two id
                       src: 'kittens/' + kitten2.image, // source to the image
                     }).appendTo('#img2'); // chooses the kitten object
                  $('#name2').text(kitten2.name);
              }
              else{
              chooseTwo();
              }
        }
}






