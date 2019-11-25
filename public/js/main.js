let image = document.getElementById('mainImage')
let logo = document.querySelector('.main-header__logo')
// import '../sass/main.scss'
// import '../sass/home.scss'

let setImageWidth = () =>{
    let windowInnerWidth = window.innerWidth
    if (image) {
        if (windowInnerWidth < 700) image.style.height = '300px'
        else if (windowInnerWidth < 1200) image.style.height = "350px"
        else image.style.height = '400px'
    }
}
setImageWidth()
window.addEventListener('resize', setImageWidth)

logo.onclick = function(){
    window.location.href = '/'
}