function cekNilai() {
    const nim = document.getElementById('nim').value.trim();
    const nilai = parseInt(document.getElementById('nilai').value);
    const hasil = document.getElementById('hasil');

    if (!nim) {
        hasil.innerHTML = "NIM tidak boleh kosong!";
        hasil.className = "error";
        return;
    }

    if (isNaN(nilai) || nilai < 0 || nilai > 100) {
        hasil.innerHTML = "Nilai tidak valid!";
        hasil.className = "error";
        return;
    }

    let hurufMutu = '';
    if (nilai >= 80) hurufMutu = 'A';
    else if (nilai >= 70) hurufMutu = 'B';
    else if (nilai >= 60) hurufMutu = 'C';
    else if (nilai >= 50) hurufMutu = 'D';
    else hurufMutu = 'E';

    hasil.innerHTML = `NIM: ${nim} <br> Huruf Mutu: ${hurufMutu}`;
    hasil.className = "success";
}
