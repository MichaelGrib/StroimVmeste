const banner = new Splide( '#banner', {
	type       : 'fade',
	pagination : true,
	arrows     : false,
	cover      : true,
    autoplay   : true,
} ).mount();
const works = new Splide( '.obj__slider', {
	type       : 'loop',
	gap        : 4,
	fixedHeight: 370,
	perPage    :  3,
	autoWidth  : true,
	pagination : true,
	arrows     : true,
	cover      : true,
	trimSpace  : false,
} ).mount();




