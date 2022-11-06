document.addEventListener("DOMContentLoaded", function (){
	
	const toggleMenu = document.querySelector('#toggle-menu');
	const mobMenu = document.querySelector('#header-mobile-menu');
	const bodyEl = document.querySelector('body');
	if(toggleMenu){
		toggleMenu.addEventListener('click', function(){
			if(toggleMenu.classList.contains('active')){
				this.classList.remove('active');
				mobMenu.style.maxHeight = 0+'px';
			}else{
				this.classList.add('active');
				console.log(toggleMenu.classList);
				mobMenu.style.maxHeight = mobMenu.scrollHeight+'px';
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
	console.log(mySelectBlocks);
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
            overlay.classList.remove('active');
            
          }
          e.preventDefault();
          const itemAttr = item.getAttribute('frame-btn');

          for(let frame of modalFrames){
            const frameAttr =frame.getAttribute('frame-modal');	
            if(frameAttr == itemAttr){
              frame.classList.add('visible');
              bodyEl.classList.add('noscroll');
               overlay.classList.add('active');
               
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
          overlay.classList.remove('active');
          
        });
      }
    }
});
