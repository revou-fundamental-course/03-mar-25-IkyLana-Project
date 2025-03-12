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


// Ini daftar gambar buat banner yang bakal di-slide otomatis
const images = [
    "../assets/banner-img/images-1.jpg",
    "../assets/banner-img/images-2.jpg",
    "../assets/banner-img/images-3.jpg",
    "../assets/banner-img/images-4.jpg"
];

let currentIndex = 0; // Buat nyimpen index gambar yang lagi ditampilin
const banner = document.querySelector(".banner-img"); // Ambil elemen banner biar bisa diubah gambarnya

// Fungsi buat ganti gambar secara otomatis
function changeImage() {
    banner.style.backgroundImage = `url(${images[currentIndex]})`; // Set gambar sesuai index sekarang
    banner.classList.add("active"); // Tambahin efek fade-in

    setTimeout(() => {
        banner.classList.remove("active"); // Hapus efek fade-in biar transisi halus
    }, 3000); // Efek ilangin gambar setelah 3 detik

    currentIndex = (currentIndex + 1) % images.length; // Biar gambar looping terus, balik ke awal pas udah di akhir
}

// Set interval buat ganti gambar tiap 4 detik
setInterval(changeImage, 4000);
changeImage(); // Panggil sekali biar gambar pertama langsung muncul

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
