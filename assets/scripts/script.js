window.addEventListener('load', function (e) {
	const bars = document.querySelector('header nav .bars')
	const navbarMobile = document.querySelector('.nav-mobile')
	const navbarMobileLinks = document.querySelectorAll('.nav-mobile ul li')
	const navbarMobileBtn = document.querySelector('.nav-mobile .bars')

	bars.addEventListener('click', () => {
		navbarMobile.style.display = 'flex'
	})
	navbarMobileBtn.addEventListener('click', () => {
		navbarMobile.style.display = 'none'
	})
	navbarMobileLinks.forEach(item => {
		item.addEventListener('click', () => {
			navbarMobile.style.display = 'none'
		})
	})
})

document.getElementById('copyButton').addEventListener('click', function () {
	const textToCopy = 'FwKD9VVSjAMxSyLaTK2H92g9vzYVdHrBAi4ZtkgBxNtc'
	const copyButton = document.getElementById('copyButton')

	const tempTextarea = document.createElement('textarea')
	tempTextarea.value = textToCopy
	document.body.appendChild(tempTextarea)

	tempTextarea.select()
	tempTextarea.setSelectionRange(0, 99999) 

	document.execCommand('copy')

	document.body.removeChild(tempTextarea)

	copyButton.textContent = 'Copied ✅'

	setTimeout(() => {
		copyButton.textContent = 'Copy'
	}, 2000)
})
