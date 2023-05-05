const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    let angkaPertama = document.getElementById('angkaPertama');
    let angkaKedua = document.getElementById('angkaKedua');
    let resultElement = document.getElementById('result');
    targetId = e.target.id;
    let result = 0;

    if (targetId == 'reset') {
      angkaPertama.value = '';
      angkaKedua.value = '';
      resultElement.innerText = 0;
      return;
    }

    if (!angkaPertama.value || !angkaKedua.value) {
      resultElement.innerHTML =
        '<span style="color: red;">masukkan angka<span>';
      return;
    }

    switch (targetId) {
      case 'tambah':
        result = Number(angkaPertama.value) + Number(angkaKedua.value);
        break;
      case 'kurang':
        result = Number(angkaPertama.value) - Number(angkaKedua.value);
        break;
      case 'bagi':
        result = Number(angkaPertama.value) / Number(angkaKedua.value);
        break;
      case 'kali':
        result = Number(angkaPertama.value) * Number(angkaKedua.value);
        break;
    }
    resultElement.innerText = result;
  });
});
