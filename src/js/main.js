document.addEventListener("DOMContentLoaded", function (){
	
	const toggleMenu = document.querySelector('#toggle-menu');
	const mobMenu = document.querySelector('#header-mobile-menu');
	const bodyEl = document.querySelector('body');
	if(toggleMenu){
		toggleMenu.addEventListener('click', function(){
			if(toggleMenu.classList.contains('active')){
				this.classList.remove('active');
				mobMenu.style.display = 'none';
			}else{
				this.classList.add('active');
				console.log(toggleMenu.classList);
				mobMenu.style.display = 'block';
			}
			
		});
	}
	/*========== Скрыть модалку при ресайзе выше 1200 ===========*/
	const modalHiddenXl = document.querySelectorAll('.modal-hidden-xl');
	if(modalHiddenXl.length > 0){
		window.addEventListener('resize', function(){
			if(this.innerWidth > 1199){
				bodyEl.classList.remove('noscroll');
				for(let item of  modalHiddenXl ){
					item.classList.remove('visible');
				}
			}
		});
	}
	/*=========RATING BLOCK =======*/
	const ratingBlock = document.querySelectorAll('[data-rating]');
	if(ratingBlock){
		ratingBlock.forEach( function(item, index) {
			const itemActive = item.querySelector('[data-count]');
			const itemActiveCount = itemActive.querySelectorAll('i');
			const itemActiveLength = itemActiveCount.length
			const itemActiveVal = itemActive.getAttribute('data-count');
			const activeBlockWidth = +(((itemActiveVal / itemActiveLength) * 100)+0.5) ;//0.5 погрешность нп расстояние между звездами
			itemActive.style.width =`${activeBlockWidth}%`;
		});
	}

	/** custom select*/
	const mySelectBlocks = Array.from(document.getElementsByClassName('mySelect'));
	if(mySelectBlocks.length > 0){
		mySelectBlocks.forEach((item, i) =>{
			const mySelect = item.querySelector('.mySelect-input');
			const mySelectInput = item.querySelector('.selectValue');
			let mySelectOptions = item.querySelectorAll('.mySelect-options');
			const mySelectIcon = item.querySelector('.mySelect-icon');
			const mySelecDrop = item.querySelector('.mySelect-drop');

			mySelect.addEventListener('click', ()=>{

				if(mySelecDrop.classList.contains('active')){
					mySelecDrop.classList.remove('active');
					mySelectIcon.classList.remove('active');
					mySelect.classList.remove('open');


				}else{
					mySelecDrop.classList.add('active');
					mySelectIcon.classList.add('active');
					mySelect.classList.add('open');
				}

			});
			for(let item of mySelectOptions){
				item.addEventListener('click', ()=>{
					mySelecDrop.classList.remove('active');
					mySelectIcon.classList.remove('active');
					mySelectInput.value = item.value;

				});
			}

		});
	}	

     /* modal*/ 
    const modalFramesOpen = document.querySelectorAll('[frame-btn]');
    const modalFrames = document.querySelectorAll('[frame-modal]');
    if( modalFrames.length > 0){
      
      const modalFramesClose = document.querySelectorAll('[frame-close]');
      for(let item of modalFramesOpen){
        item.addEventListener('click', function(e){
          for(let item of  modalFrames){
            item.classList.remove('visible');
            
            bodyEl.classList.remove('noscroll');
            // overlay.classList.remove('active');
            
          }
          e.preventDefault();
          const itemAttr = item.getAttribute('frame-btn');

          for(let frame of modalFrames){
            const frameAttr =frame.getAttribute('frame-modal');	
            if(frameAttr == itemAttr){
              frame.classList.add('visible');
              bodyEl.classList.add('noscroll');
            //    overlay.classList.add('active');
               
            }
          }
        });
      }
      /*закрыть модалки с атрибутом frame-modal*/
      for(let item of modalFramesClose){
        item.addEventListener('click', function(e){
          e.preventDefault();
          item.closest('[frame-modal]').classList.remove('visible');
          bodyEl.classList.remove('noscroll');
        //   overlay.classList.remove('active');
          
        });
      }
    }

	/*.============== mySelect--radio ============*/
	const radioSelect = document.querySelector('.mySelect--radio');
	if(radioSelect){
		const countryList = radioSelect.querySelectorAll('.role-country');
		const currencyList = radioSelect.querySelectorAll('.role-currency');
		const radioSelectInput = radioSelect.querySelector('.selectValue');

		// Country select
		for(let cntr of countryList){
			cntr.addEventListener('click', function(e){
				const radioSelectCntr = this.children[0].getAttribute('value');
				radioSelectInput.value = `${radioSelectCntr} • ${radioSelectInput.value.split(`•`)[1].trim()}`
			})
		}
		// Currency select
		for(let curr of currencyList){
			curr.addEventListener('click', function(e){
				const radioSelectCurr = this.children[0].getAttribute('value');
				radioSelectInput.value = `${radioSelectInput.value.split(`•`)[0].trim()} • ${radioSelectCurr}`
			})
		}
	}
	/*============== swiper select date =============*/

	$('.swiper-date').owlCarousel({
		items:2,
		navText: ["<span class='arrow-left icon-btn'></span>", "<span class=' arrow-right   icon-btn'></span>"],
		nav: true,
		autoWidth:true,
		dots: false,
		stagePadding: 50,
		responsive : {
			
			424 : {
				stagePadding:0,
				items:3,
			}
		}
		// stagePadding: 50,
	});

	$('.emergency-slider').owlCarousel({
		items:1,
		stagePadding: 8,
		margin:8,
		dots: true,
		navText: ["<span class='arrow-prev-blue'></span>", "<span class=' arrow-next-blue   '></span>"],
		nav: true,
		loop:true,
		smartSpeed:600,
		responsive : {
			424 : {
				stagePadding: 32
			},
			768 : {
				margin:32,
				stagePadding: 0
			},
			992:{
				stagePadding: 90,
				margin:32
			},
			1365 : {
				stagePadding: 150,
				margin:32,
				items:1
			},
			1440:{
				stagePadding: 150,
				margin:32,
				items:1
			},
			1600 : {
				stagePadding: 150,
				margin:50,
				items:1,
				autoplay: true,
				autoplayHoverPause: true,
			}
		}

	});
	
	const floatingBtn = document.querySelector('.floating-btn');
	if(floatingBtn){
		document.addEventListener('scroll', function(){
			if(window.pageYOffset > 200){
				floatingBtn.classList.add('floating-btn--visible');
			} else{
				floatingBtn.classList.remove('floating-btn--visible');
			}
		})
	}

});
