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
const totalSol = 7777;
const solInput = document.getElementById('solInput');
const percentValue = document.getElementById('percentValue');
const percentDiv = document.querySelector('.percent_div');
const maxWidth = document.querySelector('.percent_big_div').offsetWidth;
const padding = 10 * 2;

solInput.addEventListener('input', function() {
    let inputValue = parseFloat(solInput.value);

    // Default to 0 if input is empty or invalid
    if (isNaN(inputValue) || inputValue === '') {
        inputValue = 0;
        solInput.value = 0;
    } else if (inputValue > totalSol) {
        inputValue = totalSol;
        solInput.value = totalSol; // Optional: Update the input field value to totalSol
    }

    const percentage = (inputValue / totalSol) * 100;

    percentValue.textContent = percentage.toFixed(2) + '%';

    // Calculate the new width, considering padding
    const newWidth = (maxWidth - padding) * (inputValue / totalSol);
    percentDiv.style.width = newWidth + 'px';
});


