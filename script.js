// Memilih elemen yang dibutuhkan
const menuIcon = document.querySelector('#menu-icon');
const navMenu = document.querySelector('#nav-menu');

// Menambahkan event listener saat ikon menu diklik
menuIcon.addEventListener('click', () => {
    // Toggle kelas 'active' pada menu navigasi
    navMenu.classList.toggle('active');
    
    // Mengubah ikon dari hamburger ke 'X' dan sebaliknya
    if (navMenu.classList.contains('active')) {
        menuIcon.classList.remove('bx-menu');
        menuIcon.classList.add('bx-x');
    } else {
        menuIcon.classList.remove('bx-x');
        menuIcon.classList.add('bx-menu');
    }
});

// Optional: Menutup menu saat link di klik (untuk navigasi di halaman yang sama)
document.querySelectorAll('.nav-menu a').forEach(navLink => {
    navLink.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            menuIcon.classList.remove('bx-x');
            menuIcon.classList.add('bx-menu');
        }
    });
});