var jsCodeArray = [
  // whalephants
  {
    code: function() {
      var wordsPlayed = [];
      var gamesPlayed = 0;
      var game = function(){
        gamesPlayed += 1;
      var used = []; // used letters
      var checkLetter = []; // all letters guessed
      var number = 0; // what word to generate
      var imageCounter = 0; // checks what image to put in
      // array of images for game
      var hangManImages = ['hangManImages/bmi1.jpg','hangManImages/bmi2.jpg','hangManImages/bmi3.jpg','hangManImages/bmi4.jpg','hangManImages/bmi5.jpg', 'hangManImages/bmi6.jpg', 'hangManImages/bmi7.jpg', 'hangManImages/bmi8.jpg', 'hangManImages/bmi9.jpg', 'hangManImages/bmi10.jpg', 'hangManImages/bmi11.jpg'];
      $hangImg = $('#hangImg');

      // picks what word to generate
          var play = function(){
            var used = false;
            if(gamesPlayed === 4){
            $('article').html("<p id='gal'>Thank you for playing all the words!</p><div id='moz'><video class='rotate' hight='400px' width='400px' autoplay> <source src='./hangManImages/finalWin.m4v' type='video/mp4'></div>");
            $('article').css('-webkit-justify-content', 'flex-start');
            $('article').css('justify-content', 'flex-start');
            $('#gal').css('width', '600px');
            $('#gal').css('margin-bottom', '0')
            $('video').css('margin-top', '0');
            $("video").prop("volume", 0.3);
            }
            else{
              console.log(gamesPlayed);
          number = Math.floor(Math.random() * 3) + 1;
          wordsPlayed.forEach(function(g){
               if(number === g){
                used = true;
               }
          });
          if(used === true){
            play();
          }
          else{
          wordsPlayed.push(number);
          // word show
          if(number === 1){
            // letter boxes for word
            $('#textBox').append("<p class ='letter' id='letter1'></p><p class ='letter' id='letter2'></p><p class ='letter' id='letter3'></p><p class ='letter' id='letter4'></p>");
            // hint
            $('#hint').text('I want to go to a ...');
            // text box
            $('#guess1').css("visibility", "visible");
            // removes other text boxes
            $('#guess2').remove();
            $('#guess3').remove();
         }
         // word playa
         else if(number === 2){
          // letter boxes for word
            $('#textBox').append("<p class ='letter' id='playa1'></p><p class ='letter' id='playa2'></p><p class ='letter' id='playa3'></p><p class ='letter' id='playa4'></p><p class ='letter' id='playa5'></p>");
            // hint
            $('#hint').text('This place we call home sits on the ...');
            // text box
            $('#guess2').css("visibility", "visible");
            // removes other text boxes
            $('#guess1').remove();
            $('#guess3').remove();
          }
          // word burning man
          else if(number === 3){
            // letter boxes for word
            $('#textBox').append("<p class ='letter' id='bm1'></p><p class ='letter' id='bm2'></p><p class ='letter' id='bm3'></p><p class ='letter' id='bm4'></p><p class ='letter' id='bm5'></p><p class ='letter' id='bm6'></p> <p class ='letter' id='bm7'></p><p class ='letter' id='bm8'></p><p class ='letter' id='bm9'></p><p class ='letter' id='bm10'></p>");
            // hint
            $('#hint').text('Made of wood ...');
            // text box
            $('#guess3').css("visibility", "visible");
            // removes other text boxes
            $('#guess1').remove();
            $('#guess2').remove();
          }
      };
      }
      }
      play();
      //// show word function
      $('#guess1').on('change', function(){
        $guess1 = $('#guess1').val().toLowerCase();
        var checker = false;
        checkLetter.forEach(function(u){
            if ($guess1 === u){
              alert("You've already tried that letter.");
              $('#guess1').val('');
              checker = true;
            }
      });

      if (checker === false){
            if(number === 1){
                  if($guess1.length > 1){
                      alert('Please guess only one letter at a time');
                      $('#guess1').val('');
                  }
                  else if($guess1 === 's'){
                      $('#letter1').replaceWith('<p>s</p>');
                      $('#guess1').val('');
                      checkLetter.push($guess1);
                      finished1();
                  }
                  else if($guess1 === 'h'){
                      $('#letter2').replaceWith('<p>h</p>');
                      $('#guess1').val('');
                      checkLetter.push($guess1);
                      finished1();
                  }
                  else if($guess1 === 'o'){
                      $('#letter3').replaceWith('<p>o</p>');
                      $('#guess1').val('');
                      checkLetter.push($guess1);
                      finished1();
                  }
                  else if($guess1 === 'w'){
                      $('#letter4').replaceWith('<p>w</p>');
                      $('#guess1').val('');
                      checkLetter.push($guess1);
                      finished1();
                  }
                  else{
                      used.push($guess1);
                      checkLetter.push($guess1);
                      var array = used.map(function(l){
                      var f = ' ' + l;
                      return  f;
                      });
                      $('#usedLetters').text(array);
                      $('#guess1').val('');
                      var image = hangManImages[imageCounter]; // image finder
                      $hangImg.css({"background-image": "url(" + image + ")"});
                      imageCounter++;
                      if(imageCounter === 11){
                          $('#usedLetters').replaceWith('<p id="winner">Awww good try. Better Luck next time.</p>')
                          $hangImg.css({"-webkit-filter": "invert(0%)"});
                          $hangImg.css({'filter': 'invert(0%)'});
                          $hangImg.css('background-size', '300px 400px');
                          $('p2').remove();
                          $('#gal').remove();
                          $('input').remove();
                      }
                  }
            }
      }
      });
      var finished1 = function(){
        if (($('#letter1').length === 0) && ($('#letter2').length === 0) && ($('#letter3').length === 0) && ($('#letter4').length === 0)){
            $('#usedLetters').replaceWith('<button id="nextGame">Next Game</button>');
            $hangImg.replaceWith('<video width="400" height="400" autoplay> <source src="./hangManImages/showWin.m4v" type="video/mp4">');
            $("video").prop("volume", 0.3);
            $hangImg.css({"-webkit-filter": "invert(0%)"});
            $hangImg.css({'filter': 'invert(0%)'});
            $hangImg.css('background-size', '300px 400px');
            $('p2').replaceWith('');
            $('#gal').replaceWith('<p id="winner">You Got It. Nice Game!!!</p>');
            $('input').replaceWith('');
            $('#nextGame').on('click', function(){
                $hangImg.css({"-webkit-filter": "invert(0%)"});
                $hangImg.css({'filter': 'invert(0%)'});
                $hangImg.css('background-size', '300px 400px');
                $('article').html("<img id= 'hangImg'><p id='hint'></p><div id='textBox'></div><div id='inputs'><input class ='letter' id='guess1'><input class ='letter' id='guess2'><input class ='letter' id='guess3'><p id='gal'>Guess a letter!!</p></div><p2><u>Wrong Letters</u></p2><p id='usedLetters'></p>");
                game();
      });
        }
      }

      $('#guess2').on('change', function(){
        $guess2 = $('#guess2').val().toLowerCase();
        var checker = false;
        checkLetter.forEach(function(u){
            if ($guess2 === u){
              alert("You've already tried that letter.");
              $('#guess2').val('');
              checker = true;
            }
      });

      if (checker === false){
            if(number === 2){
                if($guess2.length > 1){
                  alert('Please guess only one letter at a time');
                  $('#guess2').val('');
                }
                else{
                  if($guess2 === 'p'){
                    $('#playa1').replaceWith('<p>p</p>');
                    $('#guess2').val('');
                    checkLetter.push($guess2);
                    finished2();
                  }
                  else if($guess2 === 'l'){
                    $('#playa2').replaceWith('<p>l</p>');
                    $('#guess2').val('');
                    checkLetter.push($guess2);
                    finished2();
                  }
                  else if($guess2 === 'a'){
                    $('#playa3').replaceWith('<p>a</p>');
                    $('#playa5').replaceWith('<p>a</p>');
                    $('#guess2').val('');
                    checkLetter.push($guess2);
                    finished2();
                  }
                  else if($guess2 === 'y'){
                    $('#playa4').replaceWith('<p>y</p>');
                    $('#guess2').val('');
                    checkLetter.push($guess2);
                    finished2();
                  }
                  else{
                    used.push($guess2);
                    checkLetter.push($guess2);
                    var array = used.map(function(l){
                      var f = ' ' + l;
                      return  f;
                    });
                    $('#usedLetters').text(array);
                    $('#guess2').val('');
                    var image = hangManImages[imageCounter];
                    $hangImg.css({"background-image": "url(" + image + ")"});
                      imageCounter++;
                      if(imageCounter === 11){
                          $('#usedLetters').replaceWith('<p id="winner">Awww good try. Better Luck next time.</p>')
                          $hangImg.css({"-webkit-filter": "invert(0%)"});
                          $hangImg.css({'filter': 'invert(0%)'});
                          $hangImg.css('background-size', '300px 400px');
                          $('p2').remove();
                          $('#gal').remove();
                          $('input').remove();
                      }
                  }
                }
            }
        }
      });

      var finished2 = function(){
        if (($('#playa1').length === 0) && ($('#playa2').length === 0) && ($('#playa3').length === 0) && ($('#playa4').length === 0) && ($('#playa5').length === 0)){
            $('#usedLetters').replaceWith('<button id="nextGame">Next Game</button>');
            $hangImg.css({"background-image": "url(./hangManImages/playaWin.jpg)"});
            $hangImg.css({"-webkit-filter": "invert(0%)"});
            $hangImg.css({'filter': 'invert(0%)'});
            $hangImg.css('background-size', '300px 400px');
            $('p2').replaceWith('');
            $('#gal').replaceWith('<p id="winner">You Got It. Nice Game!!!</p>');
            $('input').replaceWith('');
            $('#nextGame').on('click', function(){
                $hangImg.css({"-webkit-filter": "invert(0%)"});
                $hangImg.css({'filter': 'invert(0%)'});
                $hangImg.css('background-size', '300px 400px');
                $('article').html("<img id= 'hangImg'><p id='hint'></p><div id='textBox'></div><div id='inputs'><input class ='letter' id='guess1'><input class ='letter' id='guess2'><input class ='letter' id='guess3'><p id='gal'>Guess a letter!!</p></div><p2><u>Wrong Letters</u></p2><p id='usedLetters'></p>");
                game();
            });
        }
      }

      $('#guess3').on('change', function(){
        $guess3 = $('#guess3').val().toLowerCase();
        var checker = false;
        checkLetter.forEach(function(u){
            if ($guess3 === u){
              alert("You've already tried that letter.");
              $('#guess3').val('');
              checker = true;
            }
      });

        if (checker === false){
            if(number === 3){
                if($guess3.length > 1){
                  alert('Please guess only one letter at a time');
                  $('#guess3').val('');
                }
                else{
                  if($guess3 === 'b'){
                    $('#bm1').replaceWith('<p>b</p>');
                    $('#guess3').val('');
                    checkLetter.push($guess3);
                    finished3();
                  }
                  else if($guess3 === 'u'){
                    $('#bm2').replaceWith('<p>u</p>');
                    $('#guess3').val('');
                    checkLetter.push($guess3);
                    finished3();
                  }
                  else if($guess3 === 'r'){
                    $('#bm3').replaceWith('<p>r</p>');
                    $('#guess3').val('');
                    checkLetter.push($guess3);
                    finished3();
                  }
                  else if($guess3 === 'n'){
                    $('#bm4').replaceWith('<p>n</p>');
                    $('#bm6').replaceWith('<p>n</p>');
                    $('#bm10').replaceWith('<p>n</p>');
                    $('#guess3').val('');
                    checkLetter.push($guess3);
                    finished3();
                  }
                  else if($guess3 === 'i'){
                    $('#bm5').replaceWith('<p>i</p>');
                    $('#guess3').val('');
                    checkLetter.push($guess3);
                    finished3();
                  }
                  else if($guess3 === 'g'){
                    $('#bm7').replaceWith('<p>g</p>');
                    $('#guess3').val('');
                    checkLetter.push($guess3);
                    finished3();
                  }
                  else if($guess3 === 'm'){
                    $('#bm8').replaceWith('<p>m</p>');
                    $('#guess3').val('');
                    checkLetter.push($guess3);
                    finished3();
                  }
                  else if($guess3 === 'a'){
                    $('#bm9').replaceWith('<p>a</p>');
                    $('#guess3').val('');
                    checkLetter.push($guess3);
                    finished3();
                  }
                  else{
                    used.push($guess3);
                    checkLetter.push($guess3);
                    var array = used.map(function(l){
                      var f = ' ' + l;
                      return  f;
                    });
                    $('#usedLetters').text(array);
                    $('#guess3').val('');
                    var image = hangManImages[imageCounter];
                    $hangImg.css({"background-image": "url(" + image + ")"});
                      imageCounter++;
                      if(imageCounter === 11){
                          $('#usedLetters').replaceWith('<p id="winner">Awww good try. Better Luck next time.</p>')
                          $hangImg.css({"-webkit-filter": "invert(0%)"});
                          $hangImg.css({'filter': 'invert(0%)'});
                          $hangImg.css('background-size', '300px 400px');
                          $('p2').remove();
                          $('#gal').remove();
                          $('input').remove();
                      }
                  }
                }
            }
        }
      });

      var finished3 = function(){
        if (($('#bm1').length === 0) && ($('#bm2').length === 0) && ($('#bm3').length === 0) && ($('#bm4').length === 0) && ($('#bm5').length === 0) && ($('#bm6').length === 0) && ($('#bm6').length === 0) && ($('#bm7').length === 0) && ($('#bm8').length === 0) && ($('#bm9').length === 0) && ($('#bm10').length === 0)){
            $('#usedLetters').replaceWith('<button id="nextGame">Next Game</button>');
            $hangImg.replaceWith('<video class="rotate" width="400" height="400" autoplay> <source src="./hangManImages/fireworksWin.m4v">');
            $("video").prop("volume", 0.3);
            $hangImg.css({"-webkit-filter": "invert(0%)"});
            $hangImg.css({'filter': 'invert(0%)'});
            $hangImg.css('background-size', '300px 400px');
            $('p2').replaceWith('');
            $('#gal').replaceWith('<p id="winner">You Got It. Nice Game!!!</p>');
            $('input').replaceWith('');
            $('#nextGame').on('click', function(){
                $hangImg.css({"-webkit-filter": "invert(0%)"});
                $hangImg.css({'filter': 'invert(0%)'});
                $hangImg.css('background-size', '300px 400px');
                $('article').html("<img id= 'hangImg'><p id='hint'></p><div id='textBox'></div><div id='inputs'><input class ='letter' id='guess1'><input class ='letter' id='guess2'><input class ='letter' id='guess3'><p id='gal'>Guess a letter!!</p></div><p2><u>Wrong Letters</u></p2><p id='usedLetters'></p>");
                game();

      });
        }
      }
      };
      game();
    }
  },
  // Cutest Kitten
  {
    code : function(){
    chooseOne(); // runs the first kitten image choose
    chooseTwo(); // runs the second kitten image choose
    var localKittenInfo; // var for storing local info
    var localData = localStorage.getItem('localKittenCorral'); // retreaving local information
    var kittenCorralLocal = JSON.parse(localData); // moving string info to object
                  // console.log(kittenCorralLocal);


    kittenCorralLocal.forEach(function(k, w){
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
          // $('#theChart').html('<canvas id="myChart"></canvas>'); // creates chart in html
            $('#img1').off();
            $('#img2').off();
            chart(); // runs chart infromation
          $('#next').html('<button id = "button">Next</button>'); // inserts button for user to bring up next picktures
            window.scrollTo(0, 400); // scrolls to the bottom of the screen
    };

    $click1 = $('#img1').on('click', clickOneFun);

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
    }
  },
  //Top Pot Donut
  {
    code: function() {
      /////////////////////////// Object for Donut Stores ////////////////////////////////
      var localData = localStorage.getItem('donutShopsLocal');
      var donutShopsLocal = JSON.parse(localData);
      console.log(donutShopsLocal);

      var DonutStatus = function(store, minCustomers, maxCustomers, aveDonuts) {
                this.store = store; //////// location
                this.minCustomers = minCustomers; /////// min customer ave
                this.maxCustomers = maxCustomers; /////// max customer ave
                this.aveDonuts = aveDonuts; ///////////// average donuts for the store
                this.donutsArray = []; // /////////////// array to hold donuts sold per hour
                this.customerArray = []; //////////////// array to hold total customers per hour
                this.byHour = 0; //////////////////////// var used for total donuts for each hour
                this.totalMade = 0; ///////////////////// the total donuts made for the day
                this.customer = Number(0); ////////////////////// var used for total customers for each hour
                this.totalCustomers = 0; //////////////// sum of total customers

      /////////////////////////// customer random number generator ///////////////////////////
        DonutStatus.prototype.customerRandom = function() {
                 this.customer = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
                      return this.customer; ///////////// returns total # of customers for the hour
        };
      ////////////////////////// Donut per hour random number generator///////////////////////
        var perHour = DonutStatus.prototype.DonutPerHour = function() {
                    var donutsMade = this.customerRandom(this.minCustomers, this.maxCustomers) * this.aveDonuts;
                    return Math.round(donutsMade); // returns total # of donuts made for the hour
        };

      ///////////////////////// function to put resaults into arrays ////////////////////////
                  this.allDayDonuts = function() {
                      for ( var i = 0; i < 12; i++) { ///////////////// for each loop to fill array 12 hours
                          var byHour = this.DonutPerHour(); /////////// runs function to create each total hour
                          this.donutsArray.push(byHour); ////////////// pushes total donuts into donut array
                          this.totalMade += byHour; /////////////////// adds up the total donuts made for the day
                          this.customerArray.push(this.customer); ///// pushes total customers for each hour
                          this.totalCustomers += this.customer; /////// adds up total customers
                      }
                  }
        /////////////// add info to /////////////////
        DonutStatus.prototype.table = function() {
                    var tr = document.createElement("tr");
                    var td = document.createElement('td');
                    td.innerHTML = this.store;
                    tr.appendChild(td);
                    td.setAttribute("id", "storeStyle");

                      for (i = 0; i < this.donutsArray.length; i++) {
                          var donuts = document.createElement('td');
                          donuts.innerHTML = this.donutsArray[i];
                          tr.appendChild(donuts);
                      }

                  var customerTable = document.createElement('td');
                    customerTable.innerHTML = this.totalCustomers;
                    tr.appendChild(customerTable);
                    customerTable.setAttribute("id", "customerStyle");

                  var totalDonutsTable = document.createElement('td');
                    totalDonutsTable.innerHTML = this.totalMade;
                    tr.appendChild(totalDonutsTable);
                    document.getElementById("table").appendChild(tr);
                    totalDonutsTable.setAttribute("id", "donutStyle");
        }
      };

      ////////// updates location with new info ///////////////////////////
      DonutStatus.prototype.tableUpdate = function(i) {
        console.log(i);
                    var spot = i + 2 // adds 2 to i to set to offset to the right area of the table.
                    console.log(i);
                    var tr = document.createElement("tr");
                    var td = document.createElement('td');
                    table = document.getElementById("table")
                    td.innerHTML = this.store;
                    tr.appendChild(td);
                    table.insertBefore(tr, table.childNodes[spot]); // insets new info to the right row
                    td.setAttribute("id", "storeStyle");

                      for (i = 0; i < this.donutsArray.length; i++) {
                          var donuts = document.createElement('td');
                          donuts.innerHTML = this.donutsArray[i];
                          tr.appendChild(donuts);
                          table.insertBefore(tr, table.childNodes[spot]); // insets new info to the right row

                      }

                  var customerTable = document.createElement('td');
                    customerTable.innerHTML = this.totalCustomers;
                    tr.appendChild(customerTable);
                    table.insertBefore(tr, table.childNodes[spot]); // insets new info to the right row
                    customerTable.setAttribute("id", "customerStyle");

                  var totalDonutsTable = document.createElement('td');
                    totalDonutsTable.innerHTML = this.totalMade;
                    tr.appendChild(totalDonutsTable);
                    document.getElementById("table").appendChild(tr);
                    table.insertBefore(tr, table.childNodes[spot]); // insets new info to the right row
                    totalDonutsTable.setAttribute("id", "donutStyle");
        }

      //////////// add a new store to the table ////////////////////////
      document.getElementById('newSubmit').addEventListener('click', function () {
                var newStore = document.getElementById('newStore').value;
                var newMin = document.getElementById('newMin').value;
                var newMax = document.getElementById('newMax').value;
                var newAve = document.getElementById('newAve').value;
                var newresults = new DonutStatus(newStore, parseInt(newMin), parseInt(newMax), parseInt(newAve));
                if ((newStore === '') || (newMin === '') || (newMax === '') || (newAve === '')){
                  alert('Please fill in all information needed.')
                  return;
                }
                newresults.allDayDonuts();
                newresults.table();
                donutShops.push(newresults);
                var loc = document.getElementById('updateStore');
                var opt = newresults.store;
                var el = document.createElement('option');
                el.textContent = opt;
                el.value = opt;
                loc.appendChild(el);
                console.log(donutShops);
                console.log(newresults.totalCustomers);
                console.log(newresults.customerArray);
                console.log(donutShops);
                var localDonutArray = JSON.stringify(donutShops);
                localStorage.setItem('donutShopsLocal', localDonutArray);
      });

      /////////////// update a location with new numbers //////////////////////////
      document.getElementById('updateSubmit').addEventListener('click', function (i) {
                var updateStore = document.getElementById('updateStore').value;
                var updateMin = parseInt(document.getElementById('updateMin').value);
                var updateMax = parseInt(document.getElementById('updateMax').value);
                var updateAve = parseInt(document.getElementById('updateAve').value);
                if ((isNaN(updateMin)) || (isNaN(updateMax)) || (isNaN(updateAve))){
                            alert('Please fill in all information needed.');
                            return;
                }
                else {
                    for (i = 0; i < donutShops.length; i++) {
                        if(updateStore === donutShops[i].store) {
                            donutShops[i].minCustomers = parseInt(document.getElementById('updateMin').value);
                            donutShops[i].maxCustomers = parseInt(document.getElementById('updateMax').value);
                            donutShops[i].aveDonuts = parseInt(document.getElementById('updateAve').value);
                            document.getElementById("table").deleteRow(i + 1); // deletes the row of the old information for the store being changed
                            // console.log(i);
                            // console.log(donutShops[i].donutsArray);
                            // console.log(donutShops[i].customerArray);
                            // these both are needed so that the array is cleared other wise your array will be the old and new numbers
                            donutShops[i].donutsArray.length = 0; // clears out the array for the donuts per hour
                            donutShops[i].customerArray.length = 0; // clears out the array for customers per hour
                            donutShops[i].totalCustomers = 0; // puts total back to 0
                            donutShops[i].totalMade = 0; // puts total back to 0
                            // console.log(donutShops[i].donutsArray);
                            // console.log(donutShops[i].customerArray);
                            donutShops[i].allDayDonuts(); // runs the number generator and donuts per hour for the right object
                            donutShops[i].tableUpdate(i); // puts the new information into the table at the botton
                        }};
                    }
                });

      ///////////////////////// all new locations //////////////////////////////
      var dt = new DonutStatus('Downtown', 8, 43, 4.50);
      var ch = new DonutStatus('Capitol Hill', 4, 37, 2.00);
      var slu = new DonutStatus('South Lake Union', 9, 23, 6.33);
      var ww = new DonutStatus('Wedgewood', 2, 28, 1.25);
      var bd = new DonutStatus('Ballard', 8, 58, 3.75);

      var donutShops = [dt, ch, slu, ww, bd];
      // console.log(dt);

      ////////////////////// add each object to the dropdown box ///////////////////////
      function update () {
        var loc = document.getElementById('updateStore');
        for(var i = 0; i < donutShops.length; i++){
            var opt = donutShops[i].store;
            var el = document.createElement('option');
            el.textContent = opt;
            el.value = opt;
            loc.appendChild(el);

        }};
      update();

      // donutShopsLocal.forEach(function(shops){
      //   // shops.allDayDonuts();
      //   console.log(shops);
      //   shops.table();
      // });
      // ///////////////////////// Downtowns resaultslts ////////////////////////////
      dt.allDayDonuts(); ////// run function for Downtown
      dt.table(); ///// run push into table
      // console.log(dt.customer);
      // console.log(dt.customerArray);
      // ///////////////////////// Capital Hill results ////////////////////////////
      ch.allDayDonuts(); ////// run function for Downtown
      ch.table(); ///// run push into table

      // ///////////////////////// South Lake Union results ////////////////////////////
      slu.allDayDonuts(); ////// run function for Downtown
      slu.table(); ///// run push into table

      // ///////////////////////// Wedgewood results ////////////////////////////
      ww.allDayDonuts(); ////// run function for Downtown
      ww.table(); ///// run push into table

      // ///////////////////////// Ballard results ////////////////////////////
      bd.allDayDonuts(); ////// run function for Downtown
      bd.table(); ///// run push into table

      // veiw downtown
      var dtInfo = document.getElementById("table").rows[1].cells[0].onmouseover = function() {
        document.getElementById('info').innerHTML = 'Location: ' + dt.store + "   Minimum Customers: " + dt.minCustomers + '  Maximum Customers: ' + dt.maxCustomers + '  Avarage Donuts/hour: ' + dt.aveDonuts;
      }
      // hide downtown
      var dtInfo = document.getElementById("table").rows[1].cells[0].onmouseout = function() {
        document.getElementById('info').innerHTML = '';
      }
      // view Cap hill
      var chInfo = document.getElementById("table").rows[2].cells[0].onmouseover = function() {
        document.getElementById('info').innerHTML ='Location: ' + ch.store + "   Minimum Customers: " + ch.minCustomers + '  Maximum Customers: ' + ch.maxCustomers + '  Avarage Donuts/hour: ' + ch.aveDonuts;
      }
      // hide cap hill
      var chInfo = document.getElementById("table").rows[2].cells[0].onmouseout = function() {
        document.getElementById('info').innerHTML ='';
      }
      // view South lake U
      var sluInfo = document.getElementById("table").rows[3].cells[0].onmouseover = function() {
        document.getElementById('info').innerHTML ='Location: ' + slu.store + "   Minimum Customers: " + slu.minCustomers + '  Maximum Customers: ' + slu.maxCustomers + '  Avarage Donuts/hour: ' + slu.aveDonuts;
      }
      // hide south lake U
      var sluInfo = document.getElementById("table").rows[3].cells[0].onmouseout = function() {
        document.getElementById('info').innerHTML ='';
      }
      // view Wedgewood
      var wwInfo = document.getElementById("table").rows[4].cells[0].onmouseover = function() {
        document.getElementById('info').innerHTML ='Location: ' + ww.store + "   Minimum Customers: " + ww.minCustomers + '  Maximum Customers: ' + ww.maxCustomers + '  Avarage Donuts/hour: ' + ww.aveDonuts;
      }
      // hide Wedgewood
      var wwInfo = document.getElementById("table").rows[4].cells[0].onmouseout = function() {
        document.getElementById('info').innerHTML ='';
      }
      // view Ballard
      var bdInfo = document.getElementById("table").rows[5].cells[0].onmouseover = function() {
        document.getElementById('info').innerHTML ='Location: ' + bd.store + " <br/> Minimum Customers: " + bd.minCustomers + '    Maximum Customers: ' + bd.maxCustomers + '    Avarage Donuts/hour: ' + bd.aveDonuts;
      }
      // hide Ballard
      var bdInfo = document.getElementById("table").rows[5].cells[0].onmouseout = function() {
        document.getElementById('info').innerHTML ='';
      }

      var localDonutArray = JSON.stringify(donutShops);
      localStorage.setItem('donutShopsLocal', localDonutArray);

      cheet('d o w n t o w n', function () {
        alert('Address: 720 3rd Ave Suite 100                          Phone: (206) 454-3694');
      });

      cheet('c a p i t o l h i l l', function () {
        alert('Address: 1206 Madison St                                       Phone: (206) 708-7244');
      });

      cheet('s o u t h l a k e u n i o n', function () {
        alert('Address: 590 Terry Ave N                                Phone: (206) 995-8296');
      });

      cheet('w e d g w o o d', function () {
        alert('Address: 6855 35th Ave NE                               Phone: (206) 525-1966');
      });

      cheet('b a l l a r d', function () {
        alert('Address: 1416 NW 46th St #102                           Phone: (206) 454-3767');
      });

      cheet('↑ ↑ ↓ ↓ ← → ← →', function(){
        alert('Hello');
      });

      var ctx = document.getElementById("myChart").getContext("2d");
      var data = {
          labels: ['7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00am', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm'],
          datasets: [
              {
                  label: "Downtown",
                  fillColor: "rgba(220,220,220,0.2)",
                  strokeColor: "rgba(220,0,0,1)",
                  pointColor: "rgba(220,0,0,1)",
                  pointStrokeColor: "#fff",
                  pointHighlightFill: "#fff",
                  pointHighlightStroke: "rgba(220,0,0,1)",
                  data: dt.donutsArray,

              },
              {
                  label: "Capitol Hill",
                  fillColor: "rgba(151,187,205,0.2)",
                  strokeColor: "rgba(0,200,0,1)",
                  pointColor: "rgba(0,200,0,1)",
                  pointStrokeColor: "#fff",
                  pointHighlightFill: "#fff",
                  pointHighlightStroke: "rgba(0,200,0,1)",
                  data: ch.donutsArray,

              },
              {
                  label: "South Lake Union",
                  fillColor: "rgba(151,187,205,0.2)",
                  strokeColor: "rgba(0,0,205,1)",
                  pointColor: "rgba(0,0,205,1)",
                  pointStrokeColor: "#fff",
                  pointHighlightFill: "#fff",
                  pointHighlightStroke: "rgba(0,0,205,1)",
                  data: slu.donutsArray,


              },
              {
                  label: "Wedgwood",
                  fillColor: "rgba(151,187,205,0.2)",
                  strokeColor: "rgba(151,187,0,1)",
                  pointColor: "rgba(151,187,0,1)",
                  pointStrokeColor: "#fff",
                  pointHighlightFill: "#fff",
                  pointHighlightStroke: "rgba(151,187,0,1)",
                  data: ww.donutsArray,


              },
              {
                  label: "Ballard",
                  fillColor: "rgba(151,187,205,0.2)",
                  strokeColor: "rgba(151,0,205,1)",
                  pointColor: "rgba(151,0,205,1)",
                  pointStrokeColor: "#fff",
                  pointHighlightFill: "#fff",
                  pointHighlightStroke: "rgba(151,0,205,1)",
                  data: bd.donutsArray,


              }
          ]
      };
      option = {
        multiTooltipTemplate: function(info){
            console.log(data);
          //  var totalChart = data.datasets.map(function(y){
          //         return y
          //  }).map(function(j){
          //   return j.data
          //  }).map(function(m){
          //   return m.reduce(function(total, number){
          //     return  total + number;
          //   })
          // });
          //  console.log(info.totalChart);
          //       return info.totalChart;

                    // var totalMadeChart = totalChart[q];
              return info.datasetLabel + ': ' + info.value + "/hour";
              // });
           }
        }
      // }
      var myLineChart = new Chart(ctx).Line(data, option);


      var ctx2 = document.getElementById("myChart2").getContext("2d");

      var data2 = [
          {
              value: dt.totalMade,
              color:"rgba(220,0,0,1)",
              highlight: "#FF5A5E",
              label: "Downtown"
          },
          {
              value: ch.totalMade,
              color: "rgba(0,200,0,1)",
              highlight: "#5AD3D1",
              label: "Capitol Hill"
          },
          {
              value: slu.totalMade,
              color: "rgba(0,0,205,1)",
              highlight: "#FFC870",
              label: "South Lake Union"
          },
          {
              value: ww.totalMade,
              color: "rgba(151,187,0,1)",
              highlight: "#5AD3D1",
              label: "Wedgwood"
          },
         {
              value: bd.totalMade,
              color: "rgba(151,0,205,1)",
              highlight: "#5AD3D1",
              label: "Ballard"
          }
      ]
      var myPieChart = new Chart(ctx2).Pie(data2);

      cheet('b l a c k o u t', function(){
        document.getElementById('blackout').className = 'visible';
      });
      cheet('n o', function(){
        document.getElementById('blackout').className = 'hidden';
      });

      // makes logo and title spin
      cheet('r o l l i n', function(){
        document.getElementById('headerMidle').className = 'rollin';
      });
    }
  },
  // Guessing Game
  {
    code:  function(){
      // right is to count how many answers the user gets right
      var right = 0;
      //numGuess is how many trys it takes the user to guess the number
      var numGuess = 0;
      // array of yes answer results
      var yesResp = [
        "Nope, sorry I was really born in Denver, Colorado.",
        "That's correct, all black everything.",
        "That's correct, together they weight 121 pounds.",
        "Sorry Indie is not really my thing."
      ];
      // array of no answer results
      var noResp = [
        "You are correct, I was really born in Denver, Colorado.",
        "Sorry, but it is. There is a custom finish on it.",
        "Sorry, but it True. Together they weight 121 pounds.",
        "Thats right. Indie really isnt for me."
      ];

      //array for image yes and no
      //function to count yes's
      var userYes = function(resp, face, button) {
            if ((resp.toUpperCase() === "YES") || (resp.toUpperCase() === "Y"))  {
              right++;
              var smile = document.getElementById(face).src = 'smileface.jpg';
              document.getElementById(button).readOnly = true;
            }
            else {
              var smile = document.getElementById(face).src = 'cryface.jpg';
              document.getElementById(button).readOnly = true;
            }
          }
      //function to count no's
      var userNo = function(resp, face, button){
            if ((resp.toUpperCase() === "N") || (resp.toUpperCase() === "NO")) {
              right++;
              var smile = document.getElementById(face).src = 'smileface.jpg';
              document.getElementById(button).readOnly = true;
            }
            else {
            var smile = document.getElementById(face).src = 'cryface.jpg';
            document.getElementById(button).readOnly = true;
          }
      }
      // function for user input for the questions
      var userInput = function(resp, answer, yesR, noR) {
        if ((resp.toUpperCase() === "YES") || (resp.toUpperCase() === "Y")) {
          var question = document.getElementById(answer).innerHTML = yesR;
        }
       else {
          var question = document.getElementById(answer).innerHTML = noR;
       }
      }


      //function for the numbers guesssing game
        var numGame = function() {
          var number = Math.floor(Math.random() * 5) + 1;
            var qu5 = prompt("Lets play a little side game. This one is between you and the computer. Guess a number 1-5");
              while (Number(qu5) === 0) {

                qu5 = prompt("You did not enter a number. Please Enter a Number that is between 1-5.");
              }
              while ((Number(qu5) < 1) || (Number(qu5) > 5)) {
                qu5 = prompt("Sorry, but that number does not fall inbetween 1-5. Please guess again.");
              }
              while (Number(qu5) < number) {
                qu5 = prompt("Thats a Little Low. Guess again.");
                numGuess++;
              }
              while (Number(qu5) > number) {
                qu5 = prompt("thats a Little high. Guess again.");
                numGuess++;
              }
              while (Number(qu5) === number) {
                document.getElementById('answer5').innerHTML = "Great Job. " + number + " was the right number.";
                numGuess++;
                document.getElementById('qu5').disabled = true;
                break;
              }
        }
      // Results of user guessing game
      var numResults = function() {
            if (Number(numGuess) === 1) {
              document.getElementById("numRus").innerHTML = "Great Job One guess. Thats inpressive!!!".fontcolor('green') ;
            }
            else if (Number(numGuess) === 2) {
              document.getElementById("numRus").innerHTML = "Not bad. 2 guess is pretting good.".fontcolor('green') ;
            }
            else if (Number(numGuess) === 3) {
              document.getElementById("numRus").innerHTML = "3 guesses, 60% isn't the worst.".fontcolor('red') ;
            }
            else {
              document.getElementById("numRus").innerHTML = "The computer really got you this time.".fontcolor('red');
            }
      }

      //question 1
      var questionB1 = function() {
              // var qu1 =  prompt("Was I born in Wisconsin?");
            var qu1 = document.getElementById("qu1").value;
            userInput (qu1, "answer1", yesResp[0].fontcolor('red'), noResp[0].fontcolor('green'));
              userNo(qu1, 'face1', 'qu1');
      }

      //question 2
      var questionB2 = function(){
            // var qu2 = prompt("Is the color of my car Matte Black?");
              var qu2 = document.getElementById("qu2").value;
              userInput(qu2, "answer2", yesResp[1].fontcolor('green'), noResp[1].fontcolor('red'));
              userYes(qu2, 'face2', 'qu2');
      }

      //question 3
      var questionB3 = function(){
            // var qu3 = prompt("Is the weight of both my dogs added together over 120 pounds?");
              var qu3 = document.getElementById("qu3").value;
              userInput(qu3, 'answer3', yesResp[2].fontcolor('green'), noResp[2].fontcolor('red'));
              userYes(qu3, 'face3', 'qu3');
      }

      //question 4
      var questionB4 = function(){
            // var qu4 = prompt("This next question contains some music thought. Is one of the styles of music that I like called Indie?");
              var qu4 = document.getElementById("qu4").value;
              userInput(qu4, "answer4", yesResp[3].fontcolor('red'), noResp[3].fontcolor('green'));
              userNo(qu4, 'face4', 'qu4');
      }

      //number guessing game
              var questionB5 = function() {
                numGame();
              }

      var gameResults = function() {
      //tells the user how they did
      document.getElementById("outOf").innerHTML = "You got " + right + " out of 4.";
      document.getElementById("numof").innerHTML = "It took you " + numGuess + " trys to guess the number.";

      //tells the user how the did in the guessing game
      numResults();
      }
    }
  }
];

// var cssCodeArray = [
//   //whalephants
//   {
//     code: function() {
//       body {
//         display: -webkit-flex;
//         -webkit-flex-direction: column;
//         -webkit-justify-content: center;
//         -webkit-align-items: center;
//         max-width: 90%;
//         min-width: 1043px;
//         margin: 0 auto;
//         background-image: url('./homeImages/fireGlow.jpg');
//         background-repeat: none;
//         background-size: 100%;
//     }
//
//     header{
//         margin-top: 20px;
//         display: -webkit-flex;
//         -webkit-flex-direction: row;
//         -webkit-justify-content: flex-start;
//         -webkit-align-items: center;
//         border: solid black;
//         border-radius: 20px 20px 0 0;
//         width: 79.5%;
//         height: 90px;
//         /*background-color: rgba(255, 97, 0, 0.5);*/
//         box-shadow: 10px 0 15px #888888;
//         padding: 50px;
//         background-image: url('./homeImages/skyView.jpg');
//         background-repeat: none;
//         background-size: 100%;
//         }
//
//     #logo{
//         width: 180px;
//         height: 180px;
//         margin-right: 100px;
//         margin-left: 100px;
//         border-radius: 90px;
//     }
//
//     h1{
//       font-size: 4em;
//       font-family: 'Black Ops One', cursive;
//       cursor: url('bml.gif'), auto;
//     }
//
//     section{
//         display: -webkit-flex;
//         -webkit-flex-direction: row;
//         -webkit-justify-content: center;
//         -webkit-align-items: center;
//         box-shadow: 10px 0 15px #888888;
//         width: 89.2%;
//     }
//
//     aside{
//         width: 150px;
//         border-bottom: solid rgb(76,11,122);
//         border-top: solid rgb(76,11,122);
//         border-left: solid black;
//         height: 800px;
//         display: -webkit-flex;
//         -webkit-flex-direction: column;
//         -webkit-justify-content: flex-start;
//         -webkit-align-items: center;
//         background-color: rgb(76,11,122);
//
//     }
//
//     .nav {
//       width: 90px;
//       height: 25px;
//       border: solid black;
//       border-radius: 10px;
//       box-shadow: 5px 5px 10px #888888;
//       text-align: center;
//       list-style: none;
//       margin-top: 50px;
//       margin-right: 40px;
//       padding-top: 5px;
//       background-color: black;
//       color: white;
//       cursor: pointer;
//     }
//
//     article{
//       display: -webkit-flex;
//       -webkit-flex-direction: column;
//       -webkit-justify-content: center;
//       -webkit-align-items: center;
//       text-align: center;
//       width: 85%;
//       height: 800px;
//       border: solid;
//       background-image: url('./homeImages/chalkboard.jpg');
//       background-repeat: none;
//       background-size: 900px 800px;
//     }
//
//     footer{
//       width: 88.7%;
//       height: 200px;
//       border: solid;
//       border-radius: 0 0 20px 20px;
//       box-shadow: 10px 0 15px #888888;
//       display: -webkit-flex;
//         -webkit-flex-direction: row;
//         -webkit-justify-content: center;
//         -webkit-align-items: center;
//         margin-bottom: 10px;
//         background-image: url('./homeImages/footerBackground.jpg');
//         background-repeat: none;
//         background-size: 100%;
//     }
//
//     #footerBar{
//         display: -webkit-flex;
//         -webkit-flex-direction: row;
//         -webkit-justify-content: space-between;
//         -webkit-align-items: center;
//         padding-right: 40px;
//         background-color: rgba(0, 0, 0, .5);
//         border-radius: 90px
//     }
//
//     .bottomList{
//       display: -webkit-flex;
//         -webkit-flex-direction: column;
//       margin-top: 5px;
//       text-align: left;
//
//     }
//
//     .footerNav{
//         display: -webkit-flex;
//         -webkit-flex-direction: column;
//         -webkit-justify-content: center;
//         -webkit-align-items: center;
//         margin-left: 50px;
//     }
//
//     .footerTitle{
//       font-size: 1.3em;
//       border: none;
//       margin-left: 25px;
//       margin-right: 25px;
//       list-style: none;
//       margin-bottom: 10px;
//       color: white;
//     }
//
//     .footerLink{
//       border: none;
//       margin-left: 25px;
//       margin-right: 25px;
//       list-style: none;
//       margin-bottom: 10px;
//       color: white;
//       cursor: pointer;
//     }
//     }
//   },
//   // cutest Kitten
//   {
//     code: function() {
//       body {
//           display: -webkit-flex;
//           -webkit-flex-direction: column;
//           -webkit-justify-content: center;
//           -webkit-align-items: center;
//           max-width: 90%;
//           min-width: 1043px;
//           margin: 0 auto;
//       }
//
//       header {
//           display: -webkit-flex;
//           -webkit-flex-direction: row;
//           -webkit-justify-content: space-between;
//           -webkit-align-items: center;
//           border: solid black;
//           border-radius: 20px 20px 0 0;
//           width: 90%;
//           height: 100px;
//           background-color: rgba(255, 97, 0, 0.5);
//           box-shadow: 10px 0 15px #888888;
//       }
//       .image{
//         width: 275px;
//         height:350px;
//       }
//
//       #kittenLeft {
//           width: 75px;
//           height: 75px;
//           border-radius: 10px;
//           margin-left: 20px;
//       }
//
//       #kittenRight {
//           width: 75px;
//           height: 75px;
//           border-radius: 10px;
//           margin-right: 20px;
//       }
//
//       h1{
//           font-family: 'Sigmar One', cursive;
//           font-size: 3em;
//           color: rgba(80, 51, 99, 1);
//       }
//       section {
//           display: -webkit-flex;
//           -webkit-flex-direction: row;
//           -webkit-justify-content: space-between;
//           -webkit-align-items: center;
//           border: solid black;
//           border-radius: 0 0 20px 20px;
//           width: 90%;
//           background-color: rgba(0, 143, 255, 0.5);
//           box-shadow: 10px 2px 15px #888888;
//       }
//       aside {
//           display: -webkit-flex;
//           -webkit-flex-direction: column;
//           -webkit-align-self: flex-start;
//           -webkit-align-items: center;
//       }
//       article {
//           display: -webkit-flex;
//           -webkit-flex-direction: column;
//           -webkit-justify-content: center;
//           -webkit-align-items: center;
//       }
//
//       h2 {
//           font-family: 'Covered By Your Grace', cursive;
//           font-size: 2em;
//           margin: 10px auto 10px auto;
//       }
//       #chooses {
//           display: -webkit-flex;
//           -webkit-flex-direction: row;
//           -webkit-justify-content: space-between;
//           -webkit-align-items: center;
//       }
//
//       #kitten1 {
//           display: -webkit-flex;
//           -webkit-flex-direction: column;
//           -webkit-justify-content: center;
//           -webkit-align-items: center;
//           width: 300px;
//           height: 400px;
//           border: solid white;
//           border-radius: 10px;
//           padding-top: 10px;
//           /*border-width: 5px;*/
//           /*border-color: green;*/
//           margin-right: 40px;
//           background-color: black;
//           box-shadow: 10px 10px 5px #888888;
//       }
//
//       #kitten2 {
//           display: -webkit-flex;
//           -webkit-flex-direction: column;
//           -webkit-justify-content: center;
//           -webkit-align-items: center;
//           width: 300px;
//           height: 400px;
//           border: solid white;
//           border-radius: 10px;
//           padding-top: 10px;
//           background-color: black;
//           box-shadow: 10px 10px 5px #888888;
//       }
//
//       .desc {
//           font-size: 1.5em;
//           font-family: 'Indie Flower', cursive;
//           color:rgba(0, 255, 255, 1);
//       }
//
//       .finishedImg{
//           width: 50px;
//           height: 50px;
//           border-radius: 10px;
//           box-shadow: 5px 5px 5px #888888;
//           margin-bottom: 2px;
//       }
//
//       #finished{
//           display: -webkit-flex;
//           -webkit-flex-direction: row;
//           -webkit-justify-content: space-between;
//           -webkit-align-items: center;
//           width: 770px;
//           -webkit-flex-wrap: wrap;
//       }
//
//       .fin{
//           display: -webkit-flex;
//           -webkit-flex-direction: column;
//           -webkit-justify-content: center;
//           -webkit-align-items: center;
//           margin: 5px 20px 5px 20px;
//       }
//
//       p4{
//           font-family: 'Covered By Your Grace', cursive;
//       }
//
//       #img1 {
//           margin: 5px;
//           width: 275px;
//           height: 375px;
//           /*border: solid black;*/
//       }
//
//       #myChart{
//         width: 800px;
//         height: 400px;
//       }
//
//       #button {
//           position: fixed;
//           margin: 0px;
//           margin-left: -100px;
//           z-index: 1;
//           width: 200px;
//           height: 100px;
//           border-radius: 10px;
//           border: solid black;
//           font-size: 1.3em;
//           background-color: rgba(38, 201, 172, 1);
//           box-shadow: 10px 10px 5px rgba(0, 0, 0, .7);
//       }
//       #img2 {
//           margin: 5px;
//           width: 275px;
//           height: 375px;
//           /*border: solid black;*/
//       }
//
//       p3{
//           font-size: 2em;
//           margin-top: 10px;
//           font-family: 'Covered By Your Grace', cursive;
//       }
//
//       #pawsLeft {
//           margin: 15px 0 5px 5px;
//       }
//       #pawsRight {
//           margin: 15px 5px 5px 0;
//       }
//
//       #myChart {
//       }
//
//       footer {
//           height: 100px;
//       }
//
//
//
//                       @media (max-width: 600px) {
//             body {
//           display: -webkit-flex;
//           -webkit-flex-direction: column;
//           -webkit-justify-content: center;
//           -webkit-align-items: center;
//           width: 480px;
//           margin: 0 auto;
//         }
//
//       .image{
//         width: 130px;
//         height: 100px;
//         margin-bottom: 10px;
//         margin-left: 7px;
//         /*margin: 10px;*/
//       }
//
//       header {
//           display: -webkit-flex;
//           -webkit-flex-direction: row;
//           -webkit-justify-content: space-between;
//           -webkit-align-items: center;
//           border: solid black;
//           border-radius: 20px 20px 0 0;
//           width: 480px;
//           height: 50px;
//           background-color: rgba(255, 97, 0, 0.5);
//           /*box-shadow: 10px 0 15px #888888;*/
//       }
//
//       #kittenLeft {
//           width: 40px;
//           height: 40px;
//           border-radius: 10px;
//           margin-left: 20px;
//       }
//
//       #myChart{
//         width: 200px;
//         height: 0px;
//       }
//
//       #kittenRight {
//           width: 40px;
//           height: 40px;
//           border-radius: 10px;
//           margin-right: 20px;
//       }
//
//       h1{
//           font-family: 'Sigmar One', cursive;
//           font-size: 1em;
//           color: rgba(80, 51, 99, 1);
//       }
//       section {
//           display: -webkit-flex;
//           -webkit-flex-direction: row;
//           -webkit-justify-content: space-between;
//           -webkit-align-items: center;
//           border: solid black;
//           border-radius: 0 0 20px 20px;
//           width: 480px;
//           height: 200px;
//           background-color: rgba(0, 143, 255, 0.5);
//           /*box-shadow: 10px 2px 15px #888888;*/
//       }
//       aside {
//           display: -webkit-flex;
//           -webkit-flex-direction: column;
//           -webkit-align-self: flex-start;
//           -webkit-align-items: center;
//           visibility: hidden;
//       }
//       article {
//           display: -webkit-flex;
//           -webkit-flex-direction: column;
//           -webkit-justify-content: center;
//           -webkit-align-items: center;
//       }
//
//       h2 {
//           font-family: 'Covered By Your Grace', cursive;
//           font-size: 1.2em;
//           margin: 10px auto 0 auto;
//       }
//       #chooses {
//           display: -webkit-flex;
//           -webkit-flex-direction: row;
//           -webkit-justify-content: space-between;
//           -webkit-align-items: center;
//       }
//
//       #kitten1 {
//           display: -webkit-flex;
//           -webkit-flex-direction: column;
//           -webkit-justify-content: center;
//           -webkit-align-items: center;
//           -webkit-align-self: flex-start;
//           width: 145px;
//           height: 120px;
//           border: solid white;
//           border-radius: 10px;
//           /*border-width: 5px;*/
//           /*border-color: green;*/
//           /*margin-right: 40px;*/
//           background-color: black;
//           box-shadow: 10px 10px 5px #888888;
//       }
//
//       #kitten2 {
//           display: -webkit-flex;
//           -webkit-flex-direction: column;
//           -webkit-justify-content: center;
//           -webkit-align-self: flex-start;
//           -webkit-align-items: center;
//           width: 145px;
//           height: 120px;
//           border: solid white;
//           border-radius: 10px;
//           background-color: black;
//           box-shadow: 10px 10px 5px #888888;
//       }
//
//       .desc {
//           font-size: .8em;
//           font-family: 'Indie Flower', cursive;
//           color:rgba(0, 255, 255, 1);
//       }
//
//
//       #img1 {
//           /*margin: 1px;*/
//           width: 145px;
//           height: 120px;
//           /*border: solid black;*/
//       }
//
//       #img2 {
//           /*margin: 1px;*/
//           width: 145px;
//           height: 120px;
//           /*border: solid black;*/
//       }
//       #button {
//           position: fixed;
//           margin: 0px;
//           margin-left: -100px;
//           z-index: 1;
//           width: 200px;
//           height: 100px;
//           border-radius: 10px;
//           border: solid black;
//           font-size: 1.3em;
//           background-color: rgba(38, 201, 172, 1);
//           box-shadow: 10px 10px 5px rgba(0, 0, 0, .7);
//       }
//
//
//       p3{
//           font-size: 1em;
//           margin-top: 10px;
//           font-family: 'Covered By Your Grace', cursive;
//       }
//
//       #pawsLeft {
//           /*margin: 15px 0 5px 5px;*/
//           visibility: hidden;
//       }
//       #pawsRight {
//           /*margin: 15px 5px 5px 0;*/
//           visibility: hidden;
//
//       }
//
//       #myChart {
//       }
//
//       footer {
//           width: 480px;
//           height: 100px;
//           visibility: hidden;
//       }
//
//         }
//     }
//   },
//   // Top Pot Donut
//   {
//     code: function(){
//       body {
//           display: -webkit-flex;
//           -webkit-flex-direction: column;
//           -webkit-justify-content: center;
//           width: 90%;
//           text-align: center;
//           background-color: black;
//           margin: 0 auto;
//           vertical-align: center;
//       }
//       .rollin {
//           display: -webkit-flex;
//           -webkit-flex-direction: column;
//           -webkit-justify-content: center;
//           -webkit-align-items: center;
//           /*border: solid;*/
//           width: 50%;
//           margin: 0 20px;
//           -moz-transition:4s all ease;
//           -webkit-transition:4s all ease;
//           -moz-transform: rotate(360deg);
//           -webkit-transform: rotate(360deg);
//           }
//
//       section {
//           display: -webkit-flex;
//           -webkit-flex-direction: row;
//           -webkit-justify-content: space-between;
//           background-color: rgb(160, 190, 200);
//           max-width: 1120px;
//       }
//
//       header {
//         /*border: solid;*/
//           display: -webkit-flex;
//           -webkit-flex-direction: row;
//           -webkit-justify-content: center;
//           background-color: rgb(160, 190, 200);
//           border-bottom: solid;
//           border-top: solid;
//           max-width: 1120px;
//       }
//
//       #charts {
//           display: -webkit-flex;
//           -webkit-flex-direction: row;
//           -webkit-justify-content: center;
//       }
//
//       canvas {
//         margin-right: 30px;
//       }
//
//       #headerLeft {
//           display: -webkit-flex;
//           -webkit-flex-direction: column;
//           -webkit-justify-content: flex-end;
//           /*border: solid;*/
//           -webkit-align-items: flex-end;
//       }
//
//       #headerMidle {
//         display: -webkit-flex;
//           -webkit-flex-direction: column;
//           -webkit-justify-content: center;
//           -webkit-align-items: center;
//           /*border: solid;*/
//           width: 50%;
//           margin: 0 20px;
//       }
//
//       #topImgMid{
//         position: relative;
//         top: 20px;
//       }
//
//       #headerRight {
//         display: -webkit-flex;
//           -webkit-flex-direction: row;
//           -webkit-justify-content: flex-end;
//           -webkit-align-items: flex-end;
//           /*border: solid;*/
//
//       }
//
//       /*#asideLeft {
//         border: solid;
//         width: 80px;
//       }*/
//
//       article {
//         /*border: solid;*/
//
//       }
//
//       #asideRight {
//         /*border: solid;*/
//         width: 120px;
//         padding-top: 20px;
//         padding-bottom: 20px;
//       }
//
//       footer {
//           display: -webkit-flex;
//           -webkit-flex-direction: column;
//           -webkit-justify-content: center;
//           -webkit-align-items: center;
//           text-align: center;
//           height: 70px;
//           border-bottom: solid white;
//           border-left: solid white;
//           border-right: solid white;
//           color: white;
//           max-width: 1114px;
//
//       }
//
//       #tableHead {
//         font-size: 3em;
//         border-bottom: solid;
//         max-width: 100%;
//         border-width: 10px;
//         font-family: 'Indie Flower', cursive;
//         color: rgba(119, 86, 50, 0.9);
//         border-top: solid;
//       }
//
//       #table {
//         max-width:90%;
//         border: 1px solid;
//         text-align: center;
//         margin: 30px 0 0 20px;
//       }
//
//        table, td, tr, th {
//         max-width: 80%;
//         border: 1px  solid;
//         border-collapse: collapse;
//         font-size: .95em;
//         background-color: rgba(0, 200, 150, .2);
//         color: black;
//         border-color: white;
//       }
//
//       td, tr, th {
//         padding: 7px;
//       }
//
//       #storeStyle {
//         font-weight: bold;
//         color: rgba(65, 248, 99, 0.9);
//       }
//
//       #customerStyle {
//         color: rgba(119, 86, 171, 0.9);
//         font-weight: bold;
//       }
//
//       #donutStyle {
//         color: rgba(119, 51, 255, 0.9);
//         font-weight: bold;
//       }
//
//       #tableDescription {
//         padding: 4px;
//         color: white;
//         font-style: italic;
//         font-size: 20px;
//         font-family: 'Gloria Hallelujah', cursive;
//       }
//
//       .infoEntry {
//         font-family: 'Lobster', cursive;
//       }
//
//       #info {
//         width: 200px;
//         text-align: left;
//         position: relative;
//         margin-bottom: 40px;
//         font-family: 'Gloria Hallelujah', cursive;
//         color: rgba(200, 20, 20, .5);
//         font-size: .95em;
//
//       }
//
//
//       .donutPic {
//         max-width: 80%;
//       }
//
//       input {
//         font-family: 'Rock Salt', cursive;
//         font-size: .2em;
//         text-align: center;
//         max-width: 95%;
//         margin-left: 10px;
//         margin-bottom: 30px;
//       }
//
//       button {
//         background-color: rgba(135, 21, 187, 0.3);
//         color: white;
//       }
//
//       p2 {
//         font-size: 1.3em;
//       }
//
//       /*.visible {
//         width: 1000px;
//         height: 300px;
//         background-color: rgb(160, 190, 200);
//         position: relative;
//         z-index: 1;
//         top: -965px;
//         left: 10px;
//       }*/
//
//       .hidden {
//         width: 1000px;
//         height: 0px;
//         background-color: rgb(160, 190, 200);
//         position: relative;
//         z-index: -2;
//         top: -965px;
//         left: 10px;
//       }
//       .visible {
//         width: 1100px;
//         height: 870px;
//         background-color: rgb(160, 190, 200);
//         position: relative;
//         z-index: 1;
//         top: -965px;
//         left: 10px;
//       }
//     }
//   },
//   // Guessing-Game
//   {
//     code: function(){
//       body {
//         background-color: black;
//         text-align: center;
//       }
//
//       #mTitle {
//         color: rgb(70, 45, 250);
//         border-bottom: dotted;
//         width: 360px;
//         position: relative;
//         left: 37%;
//       }
//       #dis {
//         color: rgb(90, 75, 250);
//       }
//       #gameQ {
//         color: rgb(50, 180, 250);
//         border: dotted;
//         background-color: rgba(70, 45, 250, .50);
//         width: 180px;
//         position: relative;
//         left: 43%;
//       }
//       #questions {
//         position: relative;
//         top: -70px;
//       }
//       .resultsB {
//         border: solid;
//         width: 270px;
//         color: rgb(0, 250, 25);
//         position: relative;
//         /*left: 50%;
//         top: -50px;*/
//       }
//
//       .questionsText {
//         color: rgb(50, 180, 250);
//
//       }
//       .answerText {
//         color: yellow;
//       }
//       .button {
//         background-color: red;
//         color: white;
//         height: 35px;
//         width: 70px;
//         font-size: 15px;
//       }
//       .answerFace {
//         position: relative;
//         left: 5%;
//         vertical-align: middle;
//       }
//
//     }
//   }
// ];

// var htmlCodeArray = [
//   //whalephants
//   {
//     code: function() {
//             <!DOCTYPE html>
//       <html>
//       <head>
//         <title>)'( Whalephants )'(</title>
//         <link rel="stylesheet" type="text/css" href="../structure/homePage.css">
//         <link href='https://fonts.googleapis.com/css?family=Black+Ops+One' rel='stylesheet' type='text/css'>
//         <link href='https://fonts.googleapis.com/css?family=Pacifico' rel='stylesheet' type='text/css'>
//         <link href='https://fonts.googleapis.com/css?family=Gochi+Hand' rel='stylesheet' type='text/css'>
//         <link rel="stylesheet" type="text/css" href="about.css">
//       </head>
//             <body>
//             <header>
//             <img src="../structure/homeImages/logo.jpg" id = 'logo'>
//             <h1>Whalephants</h1>
//             </header>
//             <section>
//                   <aside>
//                       <ul>
//                         <li class= 'nav' id ='home'>Home</li>
//                         <li class= 'nav' id = 'aboutUs'>About</li>
//                         <li class= 'nav' id ='vote'>Vote</li>
//                         <li class= 'nav' id = 'countDown'>Count Down</li>
//                         <li class= 'nav' id ='contactUs'>Contact Us</ul>
//                         <li class= 'nav' id ='game'>Hang Man</li>
//
//                   </aside>
//                   <article>
//                       <h3 id ='title'><u>About Whalephants</u></h3>
//                       <p3>Whalephants is a camp that has come together to be at home for over 5 years.
//                           This group comes from all over from the east coast and west.</p3>
//
//
//
//
//
//                   </article>
//             </section>
//             <footer>
//                 <div id='footerBar'>
//                     <div class ='footerNav'>
//                       <ul class = 'bottomList'>
//                           <li class='footerTitle'><u>Find Your Way</u></li>
//                           <li class='footerLink' id='homeFooter'>Home</li>
//                           <li class='footerLink' id='aboutUsFooter'>About</li>
//                           <li class='footerLink' id="thanksFooter">Thanks</li>
//                       </ul>
//                     </div>
//                     <div class ='footerNav'>
//                         <ul class = 'bottomList'>
//                             <li class='footerTitle'><u>Interact</u></li>
//                             <li class='footerLink' id='voteFooter'>Vote</li>
//                             <li class='footerLink' id='countDownFooter'>Count Down</li>
//                             <li class='footerLink' id='contactUsFooter'>Contact Us</li>
//                         </ul>
//                     </div>
//                     <div class ='footerNav'>
//                         <ul class = 'bottomList'>
//                             <li class='footerTitle'><u>Like Us...</u></li>
//                             <li class='footerLink' id='facebook'>Facebook</li>
//                             <li class='footerLink' id='twitter'>Twitter</li>
//                             <li class='footerLink' id='soundcloud'>Soundcloud</li>
//                         </ul>
//                     </div>
//                 </div>
//
//             </footer>
//
//       <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-alpha1/jquery.js'></script>
//       <script src="../structure/homepage.js"></script>
//       </body>
//       </html>
//     }
//   },
//   // cutest Kitten
//   {
//     code: function() {
//             <!DOCTYPE html>
//       <html>
//       <head>
//       <title>Cutest Kittens Pageant</title>
//         <link rel="stylesheet" type="text/css" href="kitten.css">
//         <link href='https://fonts.googleapis.com/css?family=Indie+Flower' rel='stylesheet' type='text/css'>
//         <link href='https://fonts.googleapis.com/css?family=Sigmar+One' rel='stylesheet' type='text/css'>
//         <link href='https://fonts.googleapis.com/css?family=Covered+By+Your+Grace' rel='stylesheet' type='text/css'>
//       </head>
//       <body>
//
//         <header>
//             <img src="pictures/prayKitten.jpg" id = 'kittenLeft'>
//             <h1>Cutest Kitten Contest</h1>
//             <img src="pictures/tungeKitten.jpg" id = 'kittenRight'>
//         </header>
//
//         <section>
//             <aside>
//               <img src="pictures/pawsLeft.gif" id="pawsLeft"> <!-- paws image left side -->
//               <div id='finishLeft'></div>
//             </aside>
//
//             <article>
//                 <h2 id = 'done'><u>Choose The Cuttest Kitten</u></h2>
//
//                 <div id = 'next'></div> <!-- next button div insert -->
//
//
//                 <div id = 'chooses'>
//                       <!-- image for choose one  -->
//                       <div id = 'kitten1'>
//                           <div id ='img1' class = 'image'></div>
//                           <p2 id ='name1' class ='desc'></p2>
//                       </div>
//
//                       <!-- image for choose two -->
//                       <div id = 'kitten2'>
//                           <div id = 'img2' class = 'image'></div>
//                           <p2 id ='name2' class ='desc'></p2>
//                       </div>
//                 </div>
//
//                 <p3 id = 'check'>Please Click On The <u><strong>Cutest Kitten!!</strong></u></p3> <br />
//
//                 <!-- chart div insert -->
//                 <div id ='theChart'></div>
//                 <div id='finished'>
//                 </div>
//             </article>
//
//             <aside>
//               <img src="pictures/pawsRight.gif" id="pawsRight"> <!-- paws image right side -->
//               <div id='finishRight'></div>
//             </aside>
//         </section>
//
//         <footer>
//           <p>Brought to you by: CutestKittenPageant.com</p>
//         </footer>
//
//       <!-- JQUERY -->
//       <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-alpha1/jquery.js'></script>
//       <!-- CHART.JS  -->
//       <script src = 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/1.0.2/Chart.js'></script>
//       <!-- OBJECT JS FILE -->
//       <script src='objects.js'></script>
//       <!-- KITTEN JS FILE -->
//       <script src="kitten.js"></script>
//       </body>
//       </html>
//     }
//   },
//   // Top Pot Donut
//   {
//     code: function() {
//             <!DOCTYPE html>
//       <html>
//       <head>
//         <title>Top Doughnuts</title>
//         <link rel="stylesheet" type="text/css" href="donut.css">
//         <link href='https://fonts.googleapis.com/css?family=Indie+Flower' rel='stylesheet' type='text/css'>
//         <link href='https://fonts.googleapis.com/css?family=Gloria+Hallelujah' rel='stylesheet' type='text/css'>
//         <link href='https://fonts.googleapis.com/css?family=Lobster' rel='stylesheet' type='text/css'>
//         <link href='https://fonts.googleapis.com/css?family=Rock+Salt' rel='stylesheet' type='text/css'>
//         <script type="text/javascript" src ='cheet.js'></script>
//       </head>
//
//       <body>
//           <header>
//               <aside = id ="headerLeft" class =''>
//               <p = id ='info'></p>
//                   <img src="https://pbs.twimg.com/profile_images/437618776452759552/MnADNZ8h.jpeg" id = 'topImgLeft' width="150px" height = "150px">
//               </aside>
//               <aside = id = "headerMidle" class =''>
//                   <img src="http://www.washington.edu/alumni/columns/dec14/images/toppot.jpg" id = 'topImgMid' width="350px" height="180px">
//                   <h1 id = 'tableHead'>Top Pot Donuts Table</h1>
//               </aside>
//
//               <aside id = 'headerRight' class =''>
//                   <img src="https://pbs.twimg.com/profile_images/437618776452759552/MnADNZ8h.jpeg" id = 'topImgRight' width="150px" height = "150px">
//               </aside>
//           </header>
//
//           <section>
//               <!-- <aside id ='asideLeft'>
//
//               </aside> -->
//
//               <article>
//                   <table id = 'table'>
//                       <tr>
//                           <th>Location</th>
//                           <th>7:00am</th>
//                           <th>8:00am</th>
//                           <th>9:00am</th>
//                           <th>10:00am</th>
//                           <th>11:00am</th>
//                           <th>12:00am</th>
//                           <th>1:00pm</th>
//                           <th>2:00pm</th>
//                           <th>3:00pm</th>
//                           <th>4:00pm</th>
//                           <th>5:00pm</th>
//                           <th>6:00pm</th>
//                           <th>Total Customers</th>
//                           <th>Total Donuts</th>
//                       </tr>
//                   </table>
//
//                       <p1 id = 'tableDescription'>This table shows the amount of donuts that will be
//                       bought per hour.</p1> <br /> <br />
//                   <div id = 'charts'>
//                   <canvas id="myChart" width="700" height="400"></canvas>
//                   <canvas id="myChart2" width="200" height="200"></canvas> <br/>
//                   </div>
//                   </div> <br />
//
//                       <p2 class = 'infoEntry'> Please Enter A New Stores Info Here:</p2> <br />
//                       <input type="text" placeholder="New Store Name" id="newStore">
//                       <input type="text" placeholder="Store Min Customers" id="newMin">
//                       <input type="text" placeholder="Store Max Customers" id="newMax">
//                       <input type="text" placeholder="Store Average Donuts" id="newAve">
//                       <button id = 'newSubmit'>Submit New Store</button> <br />
//                       <br/>
//                       <!-- update an existing location -->
//                       <p2 class = 'infoEntry'> Please Enter Updated info:</p2> <br />
//                       <select type="text" placeholder="Store Name" id="updateStore">
//                       <option id = 'option'></option>
//                       </select>
//                       <input type="text" placeholder="Store Min Customers" id="updateMin">
//                       <input type="text" placeholder="Store Max Customers" id="updateMax">
//                       <input type="text" placeholder="Store Average Donuts" id="updateAve">
//                       <button id = 'updateSubmit'>Update Store</button><br/>
//               </article>
//
//               <aside id ='asideRight'>
//                       <br/>
//                       <img src="http://s3-media2.fl.yelpcdn.com/bphoto/xJBxZcvDnJY5DvvV5TsVxQ/ls.jpg" class = 'donutPic' height="100px">
//                       <br/>
//                       <br/>
//                       <img src="http://assets3.thrillist.com/v1/image/1021869/size/tl-horizontal_main/top-pot-doughnuts" class = 'donutPic' height="100px">
//                       <br/>
//                       <br/>
//                       <img src="http://www.toppotdoughnuts.com/_source/img/map3.jpg" height="100px" class = 'donutPic'>
//                       <br/>
//                       <br/>
//                       <img src="http://img1.10bestmedia.com/Images/Photos/216230/top-pot_54_990x660_201406010024.jpg" height="100px" class = 'donutPic'>
//                       <br/>
//                       <br/>
//                       <img src="http://assets3.thrillist.com/v1/image/1403924/size/tl-horizontal_main/the-6-best-donut-shops-in-seattle" class = 'donutPic' height="100px">
//                       <br/>
//                       <br/>
//                       <img src="http://allaroundtim.com/wp-content/uploads/2012/11/top-pot-doughnuts-coffee.jpg" height="100px" class = 'donutPic'>
//                       <br/>
//                       <br/>
//                       <img src="http://www.toppotdoughnuts.com/_source/img/slides/png/004.png" class = 'donutPic' height="100px">
//                       <br/>
//                       <br/>
//               </aside>
//
//           </section>
//
//               <footer>
//                   Thank you to Top Pot Donuts for Making Great Donuts
//               </footer>
//               <div class ='hidden' id = 'blackout'></div>
//               <script src = 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/1.0.2/Chart.js'></script>
//               <script src ="donut.js"></script>
//       </body>
//       </html>
//     }
//   },
//   // Guessing-Game
//   {
//     code: function(){
//             <!DOCTYPE html>
//       <html>
//       <head>
//         <title>Guessing Game</title>
//         <link rel="stylesheet" href="game.css">
//       </head>
//       <body>
//
//       <h1 id = 'mTitle'>About Me Guessing Game</h1>
//         <p1 id = 'dis'>This is a guessing game to learn a little more a bought Me.
//             There will be four questions about me, see how many you can get
//             right. <br /> There will also be a extra question to see if you are
//             smarter then the computer. good luck.</p1>
//
//         <h2 id = 'gameQ'>Game Questions</h2>
//
//           <div class ="resultsB">
//             <button onclick = 'gameResults()' class = "results">Results</button>
//             <br />
//             <p3 id = 'outOf' class='results'></p3>
//             <br />
//             <p3 id = 'numof' class='results'></p3>
//             <br />
//             <p3 id = 'numRus' class='results'></p3>
//           </div>
//
//       <div id = 'questions'>
//         <h3 class="questionsText">Was I born in Wisconsin?</h3>
//             <!-- <button onclick ="questionB1()" class="button">Answer</button> -->
//             <input type="text" value="" id="qu1" onchange="questionB1()"/> <br />
//
//             <p3 id ='answer1' class = "answerText" ></p3>
//             <img src="" id = 'face1' class = 'answerFace'>
//
//         <h3 class="questionsText">Is the color of my car Matte Black?</h3>
//             <!-- <button onclick="questionB2()" class="button" id = 'button2'>Answer</button> -->
//             <input type="text" value="" id="qu2" onchange="questionB2()"/> <br />
//             <p3 id ='answer2' class = "answerText"></p3>
//             <img src="" id = 'face2' class = 'answerFace'>
//
//         <h3 class="questionsText">Is the weight of both my dogs added together over 120 pounds?</h3>
//             <!-- <button onclick="questionB3()" class="button" id = 'button3'>Answer</button> -->
//             <input type="text" value="" id="qu3" onchange="questionB3()"/> <br />
//             <p3 id ='answer3' class = "answerText"></p3>
//             <img src="" id = 'face3' class = 'answerFace'>
//
//         <h3 class="questionsText">This next question contains some music thought. Is one of
//                   the styles of music that I like called Indie?</h3>
//             <!-- <button onclick="questionB4()" class="button" id = 'button4'>Answer</button> -->
//             <input type="text" value="" id="qu4" onchange="questionB4()"/> <br />
//             <p3 id ='answer4' class = "answerText"></p3>
//             <img src="" id = 'face4' class = 'answerFace'>
//
//         <h3 class="questionsText" >Lets play a little side game. This one is between you and
//                               the computer. Guess a number 1-5.</h3>
//             <button onclick='questionB5()' class="button" id="qu5">Answer</button>
//             <p3 id ='answer5' class = "answerText"></p3>
//
//       </div>
//
//       <script src ="game.js"></script>
//
//       </body>
//
//       </html>
//     }
//   }
// ];
