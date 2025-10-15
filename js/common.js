const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

const preventDefaultAnchor = () => {
    const $links = getAll('a[href="#"]');
    $links.forEach((link) => link.addEventListener('click', (e) => e.preventDefault()));
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const navi = () => {
    const $gnbli = getAll('#header .nav .gnb > li');
    const $nav = get('#header .nav');
    const $navBar = get('#header .nav-bg');
    $gnbli.forEach((itemLi) => {
        itemLi.addEventListener('mouseenter', (e) => {
            $nav.classList.add('on');
            $navBar.classList.add('on');
        });
    });
    $nav.addEventListener('mouseleave', (e) => {
        $nav.classList.remove('on');
        $navBar.classList.remove('on');
    });
};
const familySite = () => {};


const siteMap = () => {
    const $sitemap = get('.sitemap');
    const $bg = get('.bg');
    const $allmenu = get('#header .util .all-menu');
    const $close = get('.sitemap .close'); // ✨ 닫기 버튼 추가

    // 전체메뉴 열기
    $allmenu.addEventListener('click', (e) => {
        $sitemap.classList.add('on');
        $bg.classList.add('on');
    });

    // 닫기 버튼 클릭 시 닫힘 ✨
    $close.addEventListener('click', (e) => {
        $sitemap.classList.remove('on');
        $bg.classList.remove('on');
    });

    // 배경 클릭 시 닫힘 ✨
    $bg.addEventListener('click', (e) => {
        $sitemap.classList.remove('on');
        $bg.classList.remove('on');
    });
};
const topBar = () => {
    const $top = get('.top');
    const $header = get('#header');

    let ty = 0;
    $top.addEventListener('click', (e) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', (e) => {
        ty = window.scrollY;
        if (ty > 200) {
            $top.classList.add('on');
        } else {
            $top.classList.remove('on');
        }

        if (ty > 100) {
            $header.classList.add('on');
        } else {
            $header.classList.remove('on');
        }
    });
};

const comInit = () => {
    navi();
    topBar();
    siteMap();
};

(() => {
    preventDefaultAnchor();
    comInit();
})();
