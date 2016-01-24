chooseOne(); // runs the first kitten image choose
chooseTwo(); // runs the second kitten image choose
var localKittenInfo; // var for storing local info
var localData = localStorage.getItem('localKittenCorral'); // retreaving local information
// var kittenCorralLocal = JSON.parse(localData); // moving string info to object
              // console.log(kittenCorralLocal);


kittenCorral.forEach(function(k, w){
     kittenCorral[w].count = k.count + kittenCorral[w].count;
});

// event listener to run the first image function if clicked
  var clickOneFun = function () {
        kitten1.count++; // adds one to the kitten object that was picked
        kitten1.voted = true; // turns kitten picked to true so it cant be voted on again
        $kittenLeft = $('#kitten1'); // links picture ones id
        $kittenLeft.css('border-color', 'green'); // changes picture ones border to green
        $kittenLeft.css('border-width', '10px'); // changes picture ones border to be thicker
        $kittenLeft.css('background-color', 'green'); // changes picture ones background to be green
        $kittenRight = $('#kitten2'); // links to picture twos id
        $kittenRight.css('border-color', 'red'); // changes second image border to red
        $kittenRight.css('border-width', '10px'); // changes second image border to be thicker
        $kittenRight.css('background-color', 'red'); // changing second background color to red
      $('#theChart').html('<canvas id="myChart"></canvas>'); // creates chart in html
        $('#img1').off();
        $('#img2').off();
        chart(); // runs chart infromation
      $('#next').html('<button id = "button">Next</button>'); // inserts button for user to bring up next picktures
        window.scrollTo(0, 400); // scrolls to the bottom of the screen

                // console.log(kitten1.count);
                // console.log(kitten1);
                // console.log(number1);
                // console.log(kittenCorral);
};

$click1 = $('#img1').on('click', clickOneFun);

// event listener to run the second image function if clicked
// $click2 = $('#img2').on('click',
var clickTwoFun = function () {
        kitten2.count++; // counts up by one for the image choosen
        kitten2.voted = true;
        $kittenRight = $('#kitten2'); // links picture two id
        $kittenRight.css('border-color', 'green'); // changes picture twos border to green
        $kittenRight.css('border-width', '10px'); // changes picture twos border to thicker
        $kittenRight.css('background-color', 'green'); // changes picture twos background to green
        $kittenLeft = $('#kitten1'); // links two id
        $kittenLeft.css('border-color', 'red'); // changes picture ones border to red
        $kittenLeft.css('border-width', '10px'); // changes picture ones boarder to thicker
        $kittenLeft.css('background-color', 'red'); // changes picture ones background to red
      $('#theChart').html('<canvas id="myChart" width="800" height="400"></canvas>'); // creates chart in html
        $('#img1').off();
        $('#img2').off();
        chart(); // runs chart information
      window.scrollTo(0, 400); // scrolls to the bottom of the page
        $('#next').html('<button id = "button">Next</button>'); // inserts button to bring next images up

              // console.log(kitten2.count);
              // console.log(kitten2);
              // console.log(number2);
              // console.log(kittenCorral);
};

$click2 = $('#img2').on('click', clickTwoFun);

var chart = function(){
    var ctx = document.getElementById("myChart").getContext("2d"); // gets chart id
                // chart information
    var data = {
                // chart labels
        labels: ["kitten1", "kitten2", "kitten3", "kitten4", "kitten5", "kitten6", 'kitten7', 'kitten8', 'kitten9', 'kitten10', 'kitten11', 'kitten12', 'kitten13', 'kitten14'],
                // chart information
        datasets: [
            {
                label: "kittens", // label
                fillColor: "rgba(80, 51, 99, 0.8)", // bar color
                strokeColor: "rgba(0,0,0,0.8)", // border color
                highlightFill: "rgba(0, 255, 225, 0.9)", // highlight bar color
                highlightStroke: "rgba(0,0,0,1)", // highlight border color
                data: kittenCorral.map(function(i){ // map function to get count values from object
                  return i.count; // count value
                }),
            },
        ]
    };
    var myBarChart = new Chart(ctx).Bar(data); // bar chart
}

// event listener for the next button
$('#next').on('click', function () {
      timesVoted++;
      if(timesVoted === 13){
          $('#button').remove();
          $('#img1').remove(); // empties picture one
          $('#img2').remove(); // empties picture two
          $('#kitten1').remove();
          $('#kitten2').remove();
          $('#name1').remove();
          $('#name2').remove();
          $('#pawsLeft').remove();
          $('#pawsRight').remove();
          $('#done').text('Thank you for voting for the Cutest Kitten!');
          $('#check').text('Check out the results so far:');
          window.scrollTo(0, 0);
          // $('#finished').html("<div class='fin'><img src='./kittens/1.jpg' class='finishedImg'><p4>Kitten 1</p4></div> \
          //                     <div class='fin'><img src='./kittens/2.jpg' class='finishedImg'><p4>Kitten 2</p4></div> \
          //                     <div class='fin'><img src='./kittens/3.jpg' class='finishedImg'><p4>Kitten 3</p4></div> \
          //                     <div class='fin'><img src='./kittens/4.jpg' class='finishedImg'><p4>Kitten 4</p4></div> \
          //                     <div class='fin'><img src='./kittens/5.jpg' class='finishedImg'><p4>Kitten 5</p4></div> \
          //                     <div class='fin'><img src='./kittens/6.jpg' class='finishedImg'><p4>Kitten 6</p4></div> \
          //                     <div class='fin'><img src='./kittens/7.jpg' class='finishedImg'><p4>Kitten 7</p4></div> \
          //                     <div class='fin'><img src='./kittens/8.jpg' class='finishedImg'><p4>Kitten 8</p4></div> \
          //                     <div class='fin'><img src='./kittens/9.jpg' class='finishedImg'><p4>Kitten 9</p4></div> \
          //                     <div class='fin'><img src='./kittens/10.jpg' class='finishedImg'><p4>Kitten 10</p4></div> \
          //                     <div class='fin'><img src='./kittens/11.jpg' class='finishedImg'><p4>Kitten 11</p4></div> \
          //                     <div class='fin'><img src='./kittens/12.jpg' class='finishedImg'><p4>Kitten 12</p4></div> \
          //                     <div class='fin'><img src='./kittens/13.jpg' class='finishedImg'><p4>Kitten 13</p4></div> \
          //                     <div class='fin'><img src='./kittens/14.jpg' class='finishedImg'><p4>Kitten 14</p4></div>");

          $('#finishLeft').html("<div class='fin'><img src='./kittens/1.jpg' class='finishedImg'><p4>Kitten 1</p4></div> \
                              <div class='fin'><img src='./kittens/2.jpg' class='finishedImg'><p4>Kitten 2</p4></div> \
                              <div class='fin'><img src='./kittens/3.jpg' class='finishedImg'><p4>Kitten 3</p4></div> \
                              <div class='fin'><img src='./kittens/4.jpg' class='finishedImg'><p4>Kitten 4</p4></div> \
                              <div class='fin'><img src='./kittens/5.jpg' class='finishedImg'><p4>Kitten 5</p4></div> \
                              <div class='fin'><img src='./kittens/6.jpg' class='finishedImg'><p4>Kitten 6</p4></div> \
                              <div class='fin'><img src='./kittens/7.jpg' class='finishedImg'><p4>Kitten 7</p4></div>");
          $('#finishRight').html("<div class='fin'><img src='./kittens/8.jpg' class='finishedImg'><p4>Kitten 8</p4></div> \
                              <div class='fin'><img src='./kittens/9.jpg' class='finishedImg'><p4>Kitten 9</p4></div> \
                              <div class='fin'><img src='./kittens/10.jpg' class='finishedImg'><p4>Kitten 10</p4></div> \
                              <div class='fin'><img src='./kittens/11.jpg' class='finishedImg'><p4>Kitten 11</p4></div> \
                              <div class='fin'><img src='./kittens/12.jpg' class='finishedImg'><p4>Kitten 12</p4></div> \
                              <div class='fin'><img src='./kittens/13.jpg' class='finishedImg'><p4>Kitten 13</p4></div> \
                              <div class='fin'><img src='./kittens/14.jpg' class='finishedImg'><p4>Kitten 14</p4></div>");

          console.log(kittenCorral);

      }
      else{
          $('#myChart').remove();
          $('#img1').empty(); // empties picture one
          $('#img2').empty(); // empties picture two
          $('#button').remove(); // removes the next button
          $kittenLeft = $('#kitten1'); // // links to image one
          $kittenLeft.css('border-color', 'white'); // changes image ones border to white
          $kittenLeft.css('border-width', '3px'); // changes image ones border to thin
          $kittenLeft.css('background-color', 'black'); // changes image ones background to black
          $kittenRight = $('#kitten2'); // links to image two
          $kittenRight.css('border-color', 'white'); // changes image two border to white
          $kittenRight.css('border-width', '3px'); // changes image two border to thin
          $kittenRight.css('background-color', 'black'); // changes image twos baclground to white
          chooseOne(); // runs the first kitten image choose
          chooseTwo(); // runs the second kitten image choose
          $('#img1').on('click', clickOneFun);
          $('#img2').on('click', clickTwoFun);
          window.scrollTo(0, 0); // scrolls screen to the top
      }
  });
    window.onbeforeunload = function() {
      localKittenInfo = JSON.stringify(kittenCorral); // stores new information to local storage
      localStorage.setItem('localKittenCorral', localKittenInfo); // stores new information to local storage
    };
