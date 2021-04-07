$(document).ready(function () {
	$('.studio_slider').slick({
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpedd: 3000,
		draggable: true,
		swipe: true,
		fade:true,
		slidesToShow: 1,
		customPaging : function(slider, i) {
			var thumb = $(slider.$slides[i++]).data();
			return '<button type="button" role="tab" id="slick-slide-control00" aria-controls="slick-slide00" aria-label="1 of 4" tabindex="0" aria-selected="true">'+ '0'+ i +'</button>';
		},
	});
});
var i, tabcontent, tablinks;
tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[0].style.display = "block";
	  	tabcontent[i].style.display = "none";
	}
function openBestsellers(evt, bestsellersName) {
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
	
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(bestsellersName).style.display = "block";
	evt.currentTarget.className += " active";
  }



//   let itemBasket = document.querySelector('.item_basket .item_basket_show');
//   let basketCard = document.querySelector('.basket_card');
//   let baskerdCardHide = document.querySelector('.item_basket .item_close_menu')
//   itemBasket.onclick = () =>{
// 	basketCard.classList.add('show')
//   }
//   baskerdCardHide.onclick = () => {
// 	basketCard.classList.remove('show')
//   }
  

//   let itemUser = document.querySelector('.item_user .item_user_show');
//   let userCard = document.querySelector('.user_card_bg');
//   let userCardHide = document.querySelector('.item_user .item_close_menu')
//   itemUser.onclick = () =>{
// 	userCard.classList.add('show')
//   }
//   userCardHide.onclick = () => {
// 	userCard.classList.remove('show')
//   }
  
//   let itemShowMenu = document.querySelector('.nav_icons .item_show_menu');
//   let menuMobile = document.querySelector('.nav_menu');
//   itemShowMenu.onclick = () =>{
// 	  if(menuMobile.className === 'nav_menu'){
// 			menuMobile.classList.add('show_mobile_menu');
// 	  }else if(menuMobile.className === 'nav_menu show_mobile_menu'){
// 		menuMobile.classList.remove('show_mobile_menu');
// 	  }
	
//   }



	

	// let titleText = document.querySelectorAll('.title_text.close');

	// 	titleText.forEach(item => {
	// 		item.className = 'title_text close';
	// 			item.addEventListener('click', function(){
	// 				if(item.className === 'title_text close'){
	// 					item.className = 'title_text active';
	// 					item.querySelector('svg').classList.add('img_rotate')
	// 					item.nextElementSibling.style.display = 'block'
	// 				}
	// 				else{
	// 					item.className = 'title_text close'
	// 					item.nextElementSibling.style.display = 'none'
	// 					item.querySelector('svg').classList.remove('img_rotate')
	// 				}
	// 		})
	// 	})

	