const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = './images/icons/nav-close.svg';
    } else {
        navBtnImg.src = './images/icons/nav-open.svg';
    }
}
AOS.init({
    // disable: 'mobile',
    // once: true
});
// https://michalsnik.github.io/aos/?utm_source=cdnjs&utm_medium=cdnjs_link&utm_campaign=cdnjs_library
