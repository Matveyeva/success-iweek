
document.addEventListener("DOMContentLoaded", function (){
	
	/*========== для блоков типа Изменить телефон в мод окне ===========*/
	const hiddenInputWraper = document.querySelectorAll('.hidden-input-wrapper');
	if(hiddenInputWraper.length > 0){
		for(let wrap of hiddenInputWraper){
			const wrapBtn = wrap.querySelector('[data-role="show-hidden-input"]');
			const wrapInput = wrap.querySelector('[data-role="hidden-input"]');
			wrapBtn.addEventListener('click', function(e){
				e.preventDefault();
				wrapInput.classList.add('visible')
			});
		}
	}
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

	/**============выбрать время записи в модальном окне на Главной стр ============= */
	const AppointTimeOpen = document.getElementById('openAppointTime');
	const AppointTimeOTable = document.getElementById('tableAppointTime');
	if(AppointTimeOpen){
		AppointTimeOpen.addEventListener('click', function(e){
			e.preventDefault();
			if(AppointTimeOTable.classList.contains('visible')){
				AppointTimeOTable.classList.remove('visible')
			}
			else{
				AppointTimeOTable.classList.add('visible')
			}
		})
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
		
			if(this.innerWidth > 991){
				mobMenu.style.display = "block";
			} 
			if(this.innerWidth <= 991){
				if(toggleMenu && !toggleMenu.classList.contains('active')){
					mobMenu.style.display = "none";
				}
			}
		}
	});
	/*========= =============== RATING BLOCK ===============*/
	const ratingBlock = document.querySelectorAll('.rating-block');
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
			if(e.target === e.currentTarget){
				this.classList.remove(`visible`)
				bodyEl.classList.remove('noscroll');
			}
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
	
	/* отзывы в модальном окне */
	let reviewSlider = new Swiper(".review-slider", {

		slidesPerView: 1.7,
		spaceBetween: 30,
		pagination: {
			el: ".review-slider-pagination",
			clickable: true,
		},
		speed:800,
		loop: true,	

	});
	/*секция Эстренный вызов нв Главной */
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

	/*===выбор времени в модальном окне на Главной ===== */
	if(document.querySelector('.appoint-modal')){
		void function customSlider(){
			const csHead = document.querySelectorAll('.cs-head__block');
			const csHeadLine = document.querySelector('.cs-head-line');
			const csBlock = document.querySelectorAll('.cs-table__content');
			const csInnerLine = document.querySelector('.cs-table-line');
			const csBtnNext = document.querySelector('.cs-next');
			const csBtnPrev = document.querySelector('.cs-prev');
			
			let activeInd = 0;
			let activeElem1 = csHead[activeInd];
			let activeElem2 = csBlock[activeInd];
			const maxInd = csHead.length - 1;
			
			csBtnNext.addEventListener("click", handleNext);
			csBtnPrev.addEventListener("click", handlePrev);

			hideBtns();

			function handleNext(e){
				e.preventDefault();
				
				if(activeInd === maxInd)return;

				activeElem1.classList.remove('cs-active');
				activeElem1.nextElementSibling.classList.add('cs-active');

				activeElem2.classList.remove('cs-active');
				activeElem2.nextElementSibling.classList.add('cs-active');

				csHeadLine.style.transform = `translateX(-${392 * (activeInd+1)}px)`
				csInnerLine.style.transform = `translateX(-${392 * (activeInd+1)}px)`

				activeInd = Math.min(maxInd, activeInd + 1);
				activeElem1 = activeElem1.nextElementSibling;
				activeElem2 = activeElem2.nextElementSibling;

				hideBtns();
			}

			function handlePrev(e){
				e.preventDefault();
				
				if(activeInd === 0)return;
				
				activeElem1.classList.remove('cs-active');
				activeElem1.previousElementSibling.classList.add('cs-active');

				activeElem2.classList.remove('cs-active');
				activeElem2.previousElementSibling.classList.add('cs-active');

				csHeadLine.style.transform = `translateX(-${392 * (activeInd-1)}px)`;
				csInnerLine.style.transform = `translateX(-${392 * (activeInd-1)}px)`;

				activeInd = Math.max(0, activeInd-1);
				activeElem1 = activeElem1.previousElementSibling;
				activeElem2 = activeElem2.previousElementSibling;

				hideBtns();
			}

			function hideBtns(){
				
				if(activeInd === maxInd){
					csBtnNext.classList.add("cs-btn--disable");
					return
				}
				
				if(activeInd === 0){
					csBtnPrev.classList.add("cs-btn--disable");
					return
				}

				csBtnNext.classList.remove("cs-btn--disable");
				csBtnPrev.classList.remove("cs-btn--disable");
			}

		}();
	}	
	/* =============== floating button ===============*/	
	const floatingBtn = document.querySelector('.floating-btn');
	if(floatingBtn){
		document.addEventListener('scroll', function(){
			if(window.pageYOffset > 50){
				floatingBtn.classList.add('floating-btn--visible');
			} else{
				floatingBtn.classList.remove('floating-btn--visible');
			}
		});
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
	/* На стр Пациенты закрыть фильтры по клику на выпадашку */
	const visitorSelectFilters = document.querySelectorAll('.drop-click-close');

	if(visitorSelectFilters.length > 0){
		for(let item of visitorSelectFilters){
		const visitorSelectFiltersItem = item.querySelectorAll('.customDrop__list-item');
			for(let el of visitorSelectFiltersItem){
			el.addEventListener('click', function(e){
				e.stopPropagation();
				item.classList.remove('active');
				
			});
		}
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
	$(function(){
		$("#datepicker").datepicker();
		
		$(".datepicker").each(function(item){
			$(item).datepicker();
		});
	});
   /*========== кастомные табы переключение класса активности кнопок ============*/
	const customTabBtns = document.querySelectorAll('.myTabs-buttons');
	if(customTabBtns.length > 0){
		for(let item of customTabBtns){
			const tabBtssItem = item.querySelectorAll('.myTabs-btn');
			for(btn of tabBtssItem){
				btn.addEventListener('click', function(){
					for(itemBtn of tabBtssItem){
						itemBtn.classList.remove('active');
					}
					this.classList.add('active');
				})
			}
		}
	}
   /*переключение контента у табов*/
   	const customTabs = document.querySelectorAll('[custom-tabs]');
	if(customTabs.length > 0){
		for(let item of customTabs){
			
			const ctBtns = item.querySelectorAll('[ct-btn]');
			const ctContents = item.querySelectorAll('[ct-content]');
			
			for(let i=0; i< ctBtns.length; i++){
				 ctBtns[i].addEventListener('click', function(){
					for(let j=0; j< ctBtns.length;j++){
						if(j!=i){
							 ctBtns[j].classList.remove('custom-tab--current');
							
							 
						}
						else{
							const thisData =  this.getAttribute('ct-btn');
							 this.classList.add('custom-tab--current');
							
							for(let content of ctContents){
								content.classList.remove('ct-content--active');
								const contentData = content.getAttribute('ct-content');
								if(contentData == thisData){
									content.classList.add('ct-content--active');
								}
							}
						}

					}
					
				});
			}
		}
	}

	/*кастомный скролл таблицы*/
	if(document.querySelector('.schedule-scrollbar-block')){
		document.querySelector('.schedule-scrollbar-block').addEventListener('scroll', function(e) {
		horizontal = e.currentTarget.scrollLeft;
		vertical = e.currentTarget.scrollTop;

		document.querySelector('.cabinet-table-header').scrollTo(horizontal, 0)
		});

		document.querySelector('.schedule-scrollbar-block').addEventListener('scroll', function(e) {
			horizontal = e.currentTarget.scrollLeft;
			vertical = e.currentTarget.scrollTop;

			document.querySelector('.table-wrapper .time-column-scroll').scrollTo(0, vertical)
		});
	}
	
	
	/*  выпадашка с днями недели мультивыбор */
	let multiDayPicker = document.querySelector("#multi_day_picker")
	if(multiDayPicker){
		initializeMultidayPicker(multiDayPicker)
	}
		

	function initializeMultidayPicker(parentSelect){
		// Собираем элементы управления в компоненте
		let confirmButton = parentSelect.querySelector(".confirm")
		let cancelButton = parentSelect.querySelector(".cancel")
		
		let optionCheckboxes = parentSelect.querySelectorAll("input[type=checkbox]")
		let valueDisplay = parentSelect.querySelector("input[type=text]")
		let dropDownMenu = parentSelect.querySelector(".mySelect-drop")
		let dropDownField = parentSelect.querySelector(".mySelect-input")
		

		confirmButton.addEventListener("click", (e) => {
			e.preventDefault()
			// Обходим все инпуты и ищем чекнутые
			let choiceList = []
			for(let optionCheckbox of optionCheckboxes){
				if(optionCheckbox.checked)
					choiceList.push(optionCheckbox.getAttribute("data-thumbnail"))
			}
			// меняем значение текстового поля
			valueDisplay.value = choiceList.join(", ") ? choiceList : valueDisplay.getAttribute("data-default")
			// прячем менюшку
			dropDownMenu.classList.remove("active");
			dropDownField.classList.remove("open");
		});
		cancelButton.addEventListener("click", (e) => {
			e.preventDefault()
			// Обходим все инпуты и удаляем чекед
			
			for(let optionCheckbox of optionCheckboxes){
				optionCheckbox.checked = false;
			}

			// меняем значение текстового поля
			valueDisplay.value = 'Выбрать день';
			// прячем менюшку
			dropDownMenu.classList.remove("active");
			dropDownField.classList.remove("open");
		});
		
	}

	/* выпадашка с цветными состояниями приема*/
	const stateSelects = document.querySelectorAll('.state-select');
	if(stateSelects.length>0){
		for(let item of stateSelects){
			const itemCurrentState = item.querySelector('.state-select-current');
			const itemDropSelects = item.querySelectorAll('.state-select-drop__item');
			itemCurrentState.addEventListener('click', function(){
				if(item.classList.contains('active')){
					item.classList.remove('active');
				}
				else{
					item.classList.add('active');
				}
			});
		
		/*клик по выпадашке */
			for(let dropItem of itemDropSelects){
				dropItem.addEventListener('click', function(){
					const dropItemData = dropItem.dataset.state;
					const curStateHTML = dropItem.innerText;
					 itemCurrentState.setAttribute('data-state',  dropItemData);
					 itemCurrentState.innerHTML = curStateHTML;
					 console.log(curStateHTML);
					 console.log(dropItemData);
					 item.classList.remove('active');
					 item.setAttribute('data-role',  dropItemData);

				});
			}
	    }
		/*закрыть по клику вне */
		window.addEventListener('click', function(e){
		if (!e.target.closest('.state-select')){
			for(let item of stateSelects){
				item.classList.remove('active');
			}
		}
	});
	}


	// Менять название текста в шапке с интервалом
	const headerChange = document.querySelector('#change-text');
	const headerUnderline = document.querySelector('#change-text span');

	// Если элемент есть на странице
	if(headerChange && headerUnderline){
		// Строка опций
		let options = headerChange.getAttribute('data-categories');
		// Если опции есть		
		if(options){
			options = options.split(",").map(text=>text.trim());
		}

		// Если опции есть
		if(options.length>0){
			// Интервал смены текста в секундах
			const interval_sec = 4;
			// Индекс отображаемой опции		
			let i = 0;

			// Смена текста с интервалом
			const interval = setInterval(()=>{
				// Следующий индекс
				i = (i+1)%options.length;
				// Новый текст
				headerUnderline.innerText = options[i];
				headerChange.innerText = options[i];
				headerChange.insertAdjacentElement('beforeend', headerUnderline)
			}, interval_sec * 1000)
		}
	}
	/**======================= поле ввода смс-кода =============*/
	$('.sms-input:first-child').focus();

	$('.sms-input').on('keydown', function(e) {
	let value = $(this).val();
	let len = value.length;
	let curTabIndex = parseInt($(this).attr('tabindex'));
	let nextTabIndex = curTabIndex + 1;
	let prevTabIndex = curTabIndex - 1;
	if (len > 0) {
		$(this).val(value.substr(0, 1));
		$('[tabindex=' + nextTabIndex + ']').focus();
	} else if (len == 0 && prevTabIndex !== 0) {
		$('[tabindex=' + prevTabIndex + ']').focus();
	}
	});

	   /*====== PASSWORD VISIBLE/HIDE=============*/
	document.querySelectorAll(".toggle-pass").forEach(el=>{
		const tglBtn = el.querySelector(".form-item__icon");
		const inputField = el.querySelector("input");

		tglBtn.addEventListener("click", (e)=>{
		const icon1 = tglBtn.querySelector(".ic-visible");
		const icon2 = tglBtn.querySelector(".ic-hide");

		if(inputField.type === "password")
			inputField.type = "text"
		else inputField.type = "password";

		icon1.classList.toggle("d-none");
		icon2.classList.toggle("d-none");
	});
});
    /*********оценить врача - рейтинг*********** */
	const ratingStar = document.querySelectorAll('.set-rating');
	if(ratingStar.length > 0){
		for (item of ratingStar){
			const starLabel = item.querySelectorAll('label');
			for(let i = 0; i < starLabel.length; i++){
				starLabel[i].addEventListener('click', function(){
					
					for(let j = 0; j < starLabel.length; ++j)
					{
						console.log(i)
						const inputEl = starLabel[j].querySelector('input');
						inputEl.checked = false;
						if(j <= i)inputEl.checked = true;
					}

				})
			}
		}
	}

});
