// Header
// => Show & Hide Header
let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    // Scroll ke atas
    if (scrollTop > header.offsetHeight) {
      header.style.transform = 'translateY(-120px)';
    } else {
      header.style.transform = 'translateY(0)';
    }
  } else {
    // Scroll ke bawah
    header.style.transform = 'translateY(0)';
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Untuk menghindari bug pada mobile
});

// user control element
// ambil selector option (titik tiga di sebelah kanan atas)
const userControl = document.querySelector('.user-controls');

// jika option di klik maka, munculkan user control
document.querySelector('#ellipsis-btn').addEventListener('click', () => {
  userControl.classList.add('user-controls-active');
});

// jika tombol X (di pojok kanan atas user control) maka, sembunyikan user control
document.querySelector('.close-user-control').addEventListener('click', () => {
  userControl.classList.remove('user-controls-active');
});
// ------------------------------------------
