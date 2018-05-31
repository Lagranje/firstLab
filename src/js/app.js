var iteration = 10000;
			var haha = function togglePacman() {
			  var c = $('#pacman').hasClass('pacmanOpen');
			  if(c) {
			    $('#pacman').removeClass('pacmanOpen').addClass('pacmanClose');
			  }
			  else {
			    $('#pacman').removeClass('pacmanClose').addClass('pacmanOpen');
			  }
			  iteration--;
			  if(iteration) {
			    setTimeout(togglePacman, 250);
			  }
			  else {
			    iteration = 10;
			  }
			}
		document.getElementById("start").addEventListener("click", function(){
			haha();
            $('.count').each(function () {
		    $(this).prop('Counter',0).animate({
		        Counter: $(this).text()
		    }, {
		        duration: 3000,
		        easing: 'swing',
		        step: function (now) {
		            $(this).text(Math.ceil(now));
		        }
		    });
		    document.getElementById("start").style.display="none";
});

		})
