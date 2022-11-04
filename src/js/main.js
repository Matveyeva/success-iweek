document.addEventListener("DOMContentLoaded", function (){
	
	const toggleMenu = document.querySelector('#toggle-menu');
	
	toggleMenu.addEventListener('click', function(){
		if(toggleMenu.classList.contains('active')){
			this.classList.remove('active');
			console.log(toggleMenu.classList);
		}else{
			this.classList.add('active');
			console.log(toggleMenu.classList);
		}
		
	});
});
