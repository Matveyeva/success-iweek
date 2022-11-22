
document.addEventListener("DOMContentLoaded", function (){
	/*=============== клик по гамбургеру ===============*/
	const toggleMenu = document.querySelector('#toggle-menu');
	const mobMenu = document.querySelector('#header-mobile-menu');
	const bodyEl = document.querySelector('body');

	
	bodyEl.style.opacity = 1;
	
	if(toggleMenu){
		toggleMenu.addEventListener('click', function(){
			if(toggleMenu.classList.contains('active')){
				this.classList.remove('active');
				mobMenu.style.display = 'none';
			}else{
				this.classList.add('active');
				mobMenu.style.display = 'block';
			}
			
		});
	}
	/*========== Скрыть мобм меню при скролле страницы ===========*/
	document.addEventListener('scroll', function(){
		if(window.innerWidth < 992){

			if(window.pageYOffset > 1200){
				mobMenu.style.display = 'none';
				toggleMenu.classList.remove('active');
			}
		}
	});

	/*========== Скрыть модалку при ресайзе выше 1200 ===========*/
	const modalHiddenXl = document.querySelectorAll('.modal-hidden-xl');

	window.addEventListener('resize', function(){
		if(modalHiddenXl.length > 0){		
			if(this.innerWidth > 1199){
				bodyEl.classList.remove('noscroll');
				for(let item of  modalHiddenXl ){
					item.classList.remove('visible');
				}
			}
		}
		if(this.innerWidth > 991){
			mobMenu.style.display = "block";
		} 
		if(this.innerWidth <= 991){
			if(!toggleMenu.classList.contains('active')){
				mobMenu.style.display = "none";
			}
		}
	});
	/*========= =============== RATING BLOCK ===============*/
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

	/** =============== custom select ===============*/
	const mySelectBlocks = Array.from(document.getElementsByClassName('mySelect'));
	if(mySelectBlocks.length > 0){
		mySelectBlocks.forEach((item, i) =>{
			const mySelect = item.querySelector('.mySelect-input');
			const mySelectInput = item.querySelector('.selectValue');
			let mySelectOptions = item.querySelectorAll('.mySelect-options');
			// const mySelectIcon = item.querySelector('.mySelect-icon');
			const mySelecDrop = item.querySelector('.mySelect-drop');

			mySelect.addEventListener('click', ()=>{

				if(mySelecDrop.classList.contains('active')){
					mySelecDrop.classList.remove('active');
					// mySelectIcon.classList.remove('active');
					mySelect.classList.remove('open');


				}else{
					mySelecDrop.classList.add('active');
					// mySelectIcon.classList.add('active');
					mySelect.classList.add('open');
				}

			});
			for(let item of mySelectOptions){
				item.addEventListener('click', ()=>{
					mySelecDrop.classList.remove('active');
					mySelect.classList.remove('open');
					// mySelectIcon.classList.remove('active');
					mySelectInput.value = item.value;

				});
			}
		});
		
	}	
	/*========== закрыть mySelect по клику вне ===========*/
	window.addEventListener('click', function(e){
		
		if (!e.target.closest('.mySelect')){
			const mySelectOpenBlocks = Array.from(document.getElementsByClassName('mySelect'));
			
			if(mySelectOpenBlocks.length > 0){
				mySelectOpenBlocks.forEach((item, i) =>{
					const mySelect = item.querySelector('.mySelect-input');
					const mySelectInput = item.querySelector('.selectValue');
					let mySelectOptions = item.querySelectorAll('.mySelect-options');
					// const mySelectIcon = item.querySelector('.mySelect-icon');
					const mySelecDrop = item.querySelector('.mySelect-drop');
					
					mySelecDrop.classList.remove('active');
					// mySelectIcon.classList.remove('active');
					mySelect.classList.remove('open');
				});
			}
		}
		
	});
     /* =============== modal с атрибутом frame-modal ===============*/ 
    const modalFramesOpen = document.querySelectorAll('[frame-btn]');
    const modalFrames = document.querySelectorAll('[frame-modal]');
    if( modalFrames.length > 0){
      
      const modalFramesClose = document.querySelectorAll('[frame-close]');
      for(let item of modalFramesOpen){
        item.addEventListener('click', function(e){
          for(let item of  modalFrames){
            item.classList.remove('visible');
            
            bodyEl.classList.remove('noscroll');
          }
          e.preventDefault();
          const itemAttr = item.getAttribute('frame-btn');

          for(let frame of modalFrames){
            const frameAttr =frame.getAttribute('frame-modal');	
            if(frameAttr == itemAttr){
              frame.classList.add('visible');
              bodyEl.classList.add('noscroll');
            }
          }
        });
      }
      /*=============== закрыть модалки с атрибутом frame-modal по клику на крестик===============*/
      for(let item of modalFramesClose){
        item.addEventListener('click', function(e){
          e.preventDefault();
          item.closest('[frame-modal]').classList.remove('visible');
          bodyEl.classList.remove('noscroll');
        });
      }
 	/*=============== закрыть модалки по клику вне ===============*/
	for(let frame of modalFrames){
		frame.addEventListener('click', function(e){
			if(e.target === e.currentTarget)
				this.classList.remove(`visible`)
				bodyEl.classList.remove('noscroll');
		});
	}

    }

	/*=============== mySelect--radio ===============*/
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
	/*=============== extrim cards swiper slider ===============*/
   
	let dateSlider = new Swiper(".swiper-date", {

		slidesPerView: 'auto',
		spaceBetween: 0,
		navigation: {
          nextEl: ".arrow-right.icon-btn",
          prevEl: ".arrow-left.icon-btn",
        }

	});

	let docSlider = new Swiper(".emergency-slider", {
	slidesPerView: 1.05,
	spaceBetween: 8,
	
	pagination: {
			el: ".extrim-cards-pagination",
			clickable: true,
		},
		speed:800,
		loop: true,		
        breakpoints: {
		 1024: {
           spaceBetween:16,
          },
		 1200: {
           spaceBetween:16,
		   slidesPerView: 1.3,
		   mousewheel: true,
          },
          1440: {
           spaceBetween:32,
		   mousewheel: true,
          },
		  1700:{
			slidesPerView: 1.7,
			 spaceBetween:32,
			 mousewheel: true,
		  }
		}
	});
	
	/* =============== floating button ===============*/	
	const floatingBtn = document.querySelector('.floating-btn');
	if(floatingBtn){
		document.addEventListener('scroll', function(){
			if(window.pageYOffset > 50){
				floatingBtn.classList.add('floating-btn--visible');
			} else{
				floatingBtn.classList.remove('floating-btn--visible');
			}
		})
	}
	/* custom Drop*/ 
	const customDrop = document.querySelectorAll('.customDrop');
	if(customDrop.length > 0){
		for(let item of customDrop){
			const customDropBtn = item.querySelector('.customDrop__btn');
			const customDropList = item.querySelector('.customDrop__list');
			item.addEventListener('click', function(e){
				if(this.classList.contains('active')){
					this.classList.remove('active');
				}
				else{
					this.classList.add('active');
				}
			});
		}
	}
	/*========== Скрыть мобм меню  and customDrop  по клику вне ===========*/
	window.addEventListener('click', function(e){			
		if (!e.target.closest('.customDrop')){
			for(let item of customDrop){
				item.classList.remove('active');
			}
		}
		if(window.innerWidth < 992){
			if(!e.target.closest('.header-top') ){
				mobMenu.style.display = 'none';
				toggleMenu.classList.remove('active');
			}
		}

	});

 /* ========== плагин календаря ============ */
  if($( ".datepicker" ).length > 0){
		$.datepicker.regional['ru'] = {
			closeText: 'Закрыть',
			prevText: 'Предыдущий',
			nextText: 'Следующий',
			currentText: 'Сегодня',
			monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
			monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
			dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
			dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
			dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
			weekHeader: 'Не',
			dateFormat: 'dd.mm.yy',
			firstDay: 1,
			isRTL: false,
			showMonthAfterYear: false,
			yearSuffix: ''
		};
		$.datepicker.setDefaults($.datepicker.regional['ru']);

		$(function(){
      $(".datepicker").datepicker();
    });
	}
});
