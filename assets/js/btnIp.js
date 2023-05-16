const btn_scrolltop = document.getElementById('btn_scrolltop');
btn_scrolltop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.onscroll = () => {
    if (window.scrollY < 500) {

        btn_scrolltop.classList.remove("btn-scrolltop-on")

    } else {
        btn_scrolltop.classList.add("btn-scrolltop-on")
    }
    console.log(Window.scrollY)
}
