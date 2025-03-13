// File Javascript

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 130, // Sesuaikan dengan tinggi header
                behavior: 'smooth'
            });
        }
    });
});

function toggleMenu() {
    const navMenu = document.querySelector(".nav-menu");
    navMenu.classList.toggle("active"); // Toggle class 'active'
}

const images = [
    "./assets/banner-img/images-1.jpg",
    "./assets/banner-img/images-2.jpg",
    "./assets/banner-img/images-3.jpg",
    "./assets/banner-img/images-4.jpg"
];

let index = 1;
const banner = document.querySelector(".banner-img");

function changeImage() {
    banner.style.opacity = 0; // Menghilangkan gambar dulu
    setTimeout(() => {
        banner.style.backgroundImage = `url(${images[index]})`;
        banner.style.opacity = 1; // Munculkan gambar baru
        index = (index + 1  ) % images.length;
    }, 500); // Delay efek transisi
}

setInterval(changeImage, 3000); // Ganti gambar setiap 3 detik

// Inisialisasi gambar pertama
banner.style.backgroundImage = `url(${images[0]})`;


// Fungsi buat handle submit form tanpa reload halaman
function submitForm(event) {
    event.preventDefault(); // Cegah reload biar hasilnya bisa langsung muncul

    // Ambil data dari form
    let name = document.getElementById("name").value; // Ambil nama yang diisi user
    let birthDate = document.getElementById("birth-date").value; // Ambil tanggal lahir
    let message = document.getElementById("message").value; // Ambil pesan yang diinput user
    let gender = document.querySelector('input[name="gender"]:checked'); // Cek jenis kelamin yang telah dipilih

    // Ambil waktu sekarang dalam format yang gampang dibaca
    let currentTime = new Date().toLocaleString();

    // Kalau gender belum dipilih, kasih default "Tidak Dipilih"
    let genderValue = gender ? gender.value : "Tidak Dipilih";

    // Masukin hasil input ke dalam message-result
    document.getElementById("current-time").textContent = `Current time : ${currentTime}`;
    document.getElementById("result-name").textContent = `Nama : ${name}`;
    document.getElementById("result-birth").textContent = `Tanggal Lahir : ${birthDate}`;
    document.getElementById("result-gender").textContent = `Jenis Kelamin : ${genderValue}`;
    document.getElementById("result-message").textContent = `Pesan : ${message}`;
}
