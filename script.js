function generatePrompt() {

  const theme = document.getElementById('theme').value;
  const amount = document.getElementById('amount').value;
  const difficulty = document.getElementById('difficulty').value;
  const color = document.getElementById('color').value;

  const prompt = `
Bertindak sebagai developer game edukasi profesional.

Buatkan game bahasa Inggris interaktif anak berbasis:
- HTML
- CSS
- JavaScript

Tema game:
${theme}

Jumlah soal:
${amount}

Tingkat kesulitan:
${difficulty}

Warna utama:
${color}

Fitur wajib:
- Tampilan modern anak-anak
- Mobile friendly
- Full responsive
- Ada skor
- Ada tombol next
- Ada efek suara sederhana
- Ada animasi benar dan salah
- Gunakan emoji lucu
- Gunakan warna cerah
- Soal tidak duplikat
- Pilihan jawaban diacak
- Ada halaman game over
- Ada tombol restart
- Cocok untuk usia 4-10 tahun

Struktur soal:
{
  "question":"...",
  "options":["...","...","..."],
  "answer":"..."
}

Kategori soal:
- Hewan
- Warna
- Buah
- Angka
- Greeting
- Sekolah

Buat seluruh game dalam 1 file HTML lengkap.

Gunakan style modern seperti game Android edukasi anak.

Tambahkan:
- progress bar
- sound effect
- efek glow
- card animation
- transisi halus
- icon lucu

Output:
langsung kode lengkap siap jalan.
`;

  document.getElementById('result').value = prompt;
}

function copyPrompt() {
  const textarea = document.getElementById('result');
  textarea.select();
  document.execCommand('copy');
  alert('Prompt berhasil di copy 🚀');
}
