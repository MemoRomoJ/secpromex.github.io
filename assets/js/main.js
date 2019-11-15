/*
	Stellar by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$main = $('#main');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Nav.
		var $nav = $('#nav');
		if ($nav.length > 0) {
			// Shrink effect.
				$main
					.scrollex({
						mode: 'top',
						enter: function() {
							$nav.addClass('alt');
						},
						leave: function() {
							$nav.removeClass('alt');
						},
					});

			// Links.
				var $nav_a = $nav.find('a');
				$nav_a
					.scrolly({
						speed: 1000,
						offset: function() { return $nav.height(); }
					})
					.on('click', function() {
						var $this = $(this);
						// External link? Bail.
							if ($this.attr('href').charAt(0) != '#')
								return;
						// Deactivate all links.
							$nav_a
								.removeClass('active')
								.removeClass('active-locked');
						// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
							$this
								.addClass('active')
								.addClass('active-locked');

					})
					.each(function() {
						var	$this = $(this),
							id = $this.attr('href'),
							$section = $(id);
						// No section for this link? Bail.
							if ($section.length < 1)
								return;
						// Scrollex.
							$section.scrollex({
								mode: 'middle',
								initialize: function() {
									// Deactivate section.
										if (browser.canUse('transition'))
											$section.addClass('inactive');
								},
								enter: function() {
									// Activate section.
										$section.removeClass('inactive');
									// No locked links? Deactivate all links and activate this section's one.
										if ($nav_a.filter('.active-locked').length == 0) {

											$nav_a.removeClass('active');
											$this.addClass('active');

										}
									// Otherwise, if this section's link is the one that's locked, unlock it.
										else if ($this.hasClass('active-locked'))
											$this.removeClass('active-locked');
								}
							});
					});
		}

	// Scrolly.
		$('.scrolly').scrolly({
			speed: 1000
		});

})(jQuery);

function show1() {


//setTimeout(function() {
//document.getElementById('sec1').style.opacity = 0.0;

document.getElementById("sec1").style.display = "block";
document.getElementById("sec2").style.display = "none";
document.getElementById("sec3").style.display = "none";
document.getElementById("sec4").style.display = "none";

document.getElementById("sec1").className =  "main special fade-in";
document.getElementById("sec2").className =  "main special fade-out";
document.getElementById("sec3").className =  "main special fade-out";
document.getElementById("sec4").className =  "main special fade-out";
//btns
document.getElementById("btn1").className =  "button primary fit icon solid fa-shield-alt"; 
document.getElementById("btn2").className =  "button fit icon solid fa-id-card"; 
document.getElementById("btn3").className =  "button fit icon solid fa-image"; 
document.getElementById("btn4").className =  "button fit icon solid fa-user-shield"; 
}
function show2() {
document.getElementById("sec1").className =  "main special fade-out";
document.getElementById("sec2").className =  "main special fade-in";
document.getElementById("sec3").className =  "main special fade-out";
document.getElementById("sec4").className =  "main special fade-out";

  var secc1 = document.getElementById("sec1");
  var secc2 = document.getElementById("sec2");
  var secc3 = document.getElementById("sec3");
  var secc4 = document.getElementById("sec4");
  secc1.style.display = "none";
  secc2.style.display = "block";
  secc3.style.display = "none";
  secc4.style.display = "none";

   //btns
  document.getElementById("btn1").className =  "button fit icon solid fa-shield-alt"; 
  document.getElementById("btn2").className =  "button primary fit icon solid fa-id-card"; 
  document.getElementById("btn3").className =  "button fit icon solid fa-image"; 
  document.getElementById("btn4").className =  "button fit icon solid fa-user-shield"; 

}
function show3() {
	document.getElementById("sec1").className =  "main special fade-out";
	document.getElementById("sec2").className =  "main special fade-out";
	document.getElementById("sec3").className =  "main special fade-in";
	document.getElementById("sec4").className =  "main special fade-out";
  var secc1 = document.getElementById("sec1");
  var secc2 = document.getElementById("sec2");
  var secc3 = document.getElementById("sec3");
  var secc4 = document.getElementById("sec4");
  secc1.style.display = "none";
  secc2.style.display = "none";
  secc3.style.display = "block";
  secc4.style.display = "none";

  //btns
  document.getElementById("btn1").className =  "button fit icon solid fa-shield-alt"; 
  document.getElementById("btn2").className =  "button fit icon solid fa-id-card"; 
  document.getElementById("btn3").className =  "button primary fit icon solid fa-image"; 
  document.getElementById("btn4").className =  "button fit icon solid fa-user-shield"; 

}
function show4() {
	document.getElementById("sec1").className =  "main special fade-out";
	document.getElementById("sec2").className =  "main special fade-out";
	document.getElementById("sec3").className =  "main special fade-out";
	document.getElementById("sec4").className =  "main special fade-in";
  var secc1 = document.getElementById("sec1");
  var secc2 = document.getElementById("sec2");
  var secc3 = document.getElementById("sec3");
  var secc4 = document.getElementById("sec4");
  secc1.style.display = "none";
  secc2.style.display = "none";
  secc3.style.display = "none";
  secc4.style.display = "block";

  //btns
  document.getElementById("btn1").className =  "button fit icon solid fa-shield-alt"; 
  document.getElementById("btn2").className =  "button fit icon solid fa-id-card"; 
  document.getElementById("btn3").className =  "button fit icon solid fa-image"; 
  document.getElementById("btn4").className =  "button primary fit icon solid fa-user-shield"; 
}

function sendMsg(){
 	var fullStr = "Mi%20nombre%20es:%20" + document.getElementById("demo-name").value;
	fullStr += " ; Mi%20dirección%20es:%20" + document.getElementById("demo-addres").value;
	fullStr += " ; Mi%20celular%20es:%20" + document.getElementById("demo-phone").value;
	fullStr += " ; Mi%20correo%20electronico%20es:%20" + document.getElementById("demo-email").value + " y ";
	/* + document.getElementById("demo-priority").value;*/
	fullStr += "%20tengo%20experiencia%20como%20elemento%20de%20seguridad.";

	//window.location.href = "mailto:reclutamiento.secpromex@hotmail.com?subject=Información/Solicitud SECPROMEX&body=" + fullStr;
	window.open("mailto:reclutamiento.secpromex@hotmail.com?subject=Información/Solicitud SECPROMEX&body="); 
	//window.open("https://wa.me/524491280848?text=" + fullStr); 
	// mailto:no-one@snai1mai1.com?subject=look at this website&body=
}