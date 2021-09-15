const openmenu = document.getElementById('open_mobile')
const exitmenu = document.getElementById('exit_mobile')
const mobile = document.getElementById('mobilemenu')
openmenu.addEventListener('click', () => {
	mobile.style.display = 'flex'
})
exitmenu.addEventListener('click', () => {
	mobile.style.display = 'none'
})
document.querySelectorAll('.mnav__link').forEach(el => {
	el.addEventListener('click', () => mobile.style.display = 'none')
})