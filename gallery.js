const elGallery = document.getElementById('modal_gallery')
let gallery

//open slideshow functions
const galleryImages = document.querySelectorAll('.gallery__img') 
galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        elGallery.style.display = 'flex'
        gallery = new Splide( '#full_gallery', {
            type       : 'slide',
            pagination : true,
            perPage    : 1,
            dots       : true,
            focus      : 'center',
            gap        : 8,
            start      : index,
            autoWidth  : true, 
            cover      : true,
            arrows     : true,
            autoplay   : true,
            interval   : 3200,

        } ).mount()
    })
})


//close slideshow functions
window.addEventListener('keydown', event => {
    if (event.code ==='Escape') {
        elGallery.style.display = 'none'
        gallery.destroy()
    }
})
document.getElementById('modal_exit').addEventListener('click', () => {
    elGallery.style.display = 'none'
    gallery.destroy()
})