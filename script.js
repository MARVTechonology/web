function toggleMenu() {
    const menu = document.querySelector('.fullscreen-menu');
    menu.classList.toggle('active');  // 'active' クラスを追加/削除してメニューを開閉する
}

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('show');
  } else {
    header.classList.remove('show');
  }
});
