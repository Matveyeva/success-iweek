document.addEventListener("DOMContentLoaded", function (){
	
	const toggleMenu = document.querySelector('#toggle-menu');
	const mobMenu = document.querySelector('#header-mobile-menu');
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
});
