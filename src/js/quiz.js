const quizPlates = document.querySelectorAll('.quiz-plate');
if (quizPlates.length > 0){
	for (let i = 0; i < quizPlates.length; i++ ){
		
		const plateNextButton = quizPlates[i].querySelector('[data-next]');
		const plateBackButton = quizPlates[i].querySelector('[data-back]');

		if (plateNextButton){
			plateNextButton.addEventListener('click', function(){
				quizPlates[i].classList.remove('quiz-plate--active');
				quizPlates[i+1].classList.add('quiz-plate--active');

			});
		}
		console.log(plateBackButton);
		if (plateBackButton){
			plateBackButton.addEventListener('click', function () {
				console.log('123');
				quizPlates[i].classList.remove('quiz-plate--active');
				quizPlates[i-1].classList.add('quiz-plate--active');

			});
		}
		
	}
}