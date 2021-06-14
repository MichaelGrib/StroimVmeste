const openmenu = document.getElementById('open_mobile')
const exitmenu = document.getElementById('exit_mobile')
const mobile = document.getElementById('mobilemenu')
document.getElementById('open_mobile').addEventListener('click', () => {
	mobile.style.display = 'flex'
})
exitmenu.addEventListener('click', () => {
	mobile.style.display = 'none'
})