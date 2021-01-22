
const jsHeaderHeading = document.querySelector('.js-header-heading');
const jsHeaderHeadingLogo = document.querySelector('.js-header-heading__logo');
const jsMenuBtnBar = document.querySelector('.js-menu-btn__bar');
window.addEventListener('scroll', ()=> {
    const scrollValue = window.pageYOffset;
    // メニューバーの固定
    if (scrollValue >= 40 ? jsHeaderHeading.classList.add('js-fixed') : jsHeaderHeading.classList.remove('js-fixed'));
    // メニューバーの色の指定
    if (scrollValue >= 600 ? jsHeaderHeadingLogo.classList.add('js-color') : jsHeaderHeadingLogo.classList.remove('js-color'));
    if (scrollValue >= 600 ? jsMenuBtnBar.classList.add('js-background-color') : jsMenuBtnBar.classList.remove('js-background-color'));
});
// メニューバーのクリック時
const jsMenuBtn = document.querySelector('.js-menu-btn');
const jsNavWrapper = document.querySelector('.js-nav-wrapper');
jsMenuBtn.addEventListener('click', () => {
    jsMenuBtn.classList.toggle('js-close-btn');
    jsNavWrapper.classList.toggle('js-nav');
});
// アイテムのクリックでメニューを閉じる
const itemLinks = document.querySelectorAll('.menu-item__link');
for (let i = 0; i < itemLinks.length; i++) {
    itemLinks[i].addEventListener('click', () => {
        jsMenuBtn.classList.remove('js-close-btn');
        jsNavWrapper.classList.remove('js-nav');
    });
}
// スムーススクロール
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < smoothScrollTrigger.length; i++) {
    smoothScrollTrigger[i].addEventListener('click', (e) => {
        e.preventDefault();
        let href = smoothScrollTrigger[i].getAttribute('href');
        let targetElement = document.getElementById(href.replace('#',''));
        const rect = targetElement.getBoundingClientRect().top;
        const offset = window.pageYOffset;
        const gap = 0;
        const target = rect + offset - gap;
        window.scrollTo({
            top: target,
            behavior: 'smooth',
        });
    });
}