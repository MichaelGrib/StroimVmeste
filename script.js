const banner = new Splide( '#banner', {
	type       : 'fade',
	pagination : true,
	arrows     : false,
	cover      : true,
    autoplay   : true,
} ).mount();

const tel = document.getElementById('tel')
telvalue = tel.value
document.getElementById('selecttel').addEventListener('click', () => {
	tel.select()
})
tel.addEventListener('input', event => {
	event.preventDefault()
	tel.value = telvalue
})

