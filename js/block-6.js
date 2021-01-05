
const mySwiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    watchOverflow: true,
    slidesPerView: 1,
    spaceBetween: 16,
})

let showBtn = document.querySelector('.sm-content__show-more')
let content = document.querySelector('.show-more-content')

showBtn.addEventListener('click', function (evt) {
    evt.preventDefault()
    if (showBtn.textContent === "Показать все") {
        content.classList.add('show-content')
        showBtn.textContent = "Скрыть"
        showBtn.classList.add('icon-reverse')
    } else {
        content.classList.remove('show-content')
        showBtn.textContent = "Показать все"
        showBtn.classList.remove('icon-reverse')
    }
})