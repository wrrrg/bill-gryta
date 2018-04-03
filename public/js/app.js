// calling fullpage.js
$(document).ready(function() {
	$('#fullpage').fullpage({
		menu: '#myMenu',
		anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
    sectionsColor: ['#f2901c', '#4BBFc3', '#DDDDDD', '#AFAFAF'],
		// verticalCentered: false,
		slidesNavigation: true,
		navigation: true,
		navigationPosition: 'right',
		showActiveTooltip: false,
		slidesNavigation: true,
		slidesNavPosition: 'bottom',
		afterRender: function(){
		 $('#myMenu').hide();
		},
		afterLoad: function(anchor, index){
			if(index == 1){
					 $('#myMenu').fadeOut(350);
			}else{
					 $('#myMenu').fadeIn(350);
			}
		}

	});

	// $(" .language-result-backend").hide();
	// var laptopLinks = $(".laptop-screen").find("a");
	// $(laptopLinks).fadeOut(50);
});


$(document).on("click", ".scroll-icon", function(){
	$.fn.fullpage.moveTo(2);
});

// $(document).on("mouseover", ".laptop-screen", function(){
// 	var links = $(this).find("a");
// 	$(links).fadeToggle();
//
// });

// $(document).on("click", ".languages-frontend, .languages-backend", function(){
// 	$(".language-result-frontend, .language-result-backend").hide();
// 	$(".languages-frontend, .languages-backend").removeClass("active-head");
// 	$(this).addClass("active-head");
//
// 	var displayThis = $(this).attr("id");
//
// 	if(displayThis == "front-end"){
// 		$(".language-result-frontend").show();
// 	} else if (displayThis == "back-end"){
// 		$(".language-result-backend").show();
// 	}
// });
