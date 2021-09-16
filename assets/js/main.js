const next = document.querySelector('#next')
const prev = document.querySelector('#prev')

const sliders = document.querySelectorAll('.carousel-item')

const nextSlider = () => {
	const totalSliders = sliders.length - 1
	let indice

	sliders.forEach((slider, i) => {
		if (slider.classList.contains('active')) {
			slider.classList.remove('active')
			indice = i + 1
			if (indice > totalSliders) indice = 0
		}
	})

	sliders[indice].classList.add('active')
}

const prevSlider = () => {
	const totalSliders = sliders.length - 1
	let indice

	sliders.forEach((slider, i) => {
		if (slider.classList.contains('active')) {
			slider.classList.remove('active')
			indice = i - 1
			if (indice < 0) indice = totalSliders
		}
	})

	sliders[indice].classList.add('active')
}

next.addEventListener('click', () => {
	clearInterval(runSlider)
	nextSlider()
	runSlider = setInterval(() => {
		nextSlider()
	}, 5000)
})

prev.addEventListener('click', () => {
	clearInterval(runSlider)
	prevSlider()
	runSlider = setInterval(() => {
		nextSlider()
	}, 5000)
})

let runSlider = setInterval(() => {
	nextSlider()
}, 5000)

document.onload = runSlider
