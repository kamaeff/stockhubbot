document.addEventListener('DOMContentLoaded', function () {
	const burger = document.getElementById('burger')
	const nav = document.querySelector('.nav')
	const logo = document.querySelector('.header__img-adaptive')

	if (burger) {
		burger.addEventListener('click', function () {
			console.log('clicked')
			nav.classList.toggle('active')
			logo.classList.toggle('none')
		})
	}
})
