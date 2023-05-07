const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    let angkaPertama = document.getElementById('angkaPertama');
    let angkaKedua = document.getElementById('angkaKedua');
    let resultElement = document.getElementById('result');
    targetId = e.target.id;

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('active');
    }
    if (button.classList.contains('operator')) {
      button.classList.add('active');
    }

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

    let result = 0;
    switch (targetId) {
      case 'tambah':
        result = Number(angkaPertama.value) + Number(angkaKedua.value);
        break;
      case 'kurang':
        result = Number(angkaPertama.value) - Number(angkaKedua.value);
        break;
      case 'bagi':
        if (Number(angkaKedua.value) === 0) {
          resultElement.innerHTML =
            '<span style="color: red;">tidak bisa dibagi dengan 0<span>';
          return;
        }
        result = Number(angkaPertama.value) / Number(angkaKedua.value);
        break;
      case 'kali':
        result = Number(angkaPertama.value) * Number(angkaKedua.value);
        break;
    }
    resultElement.innerText = result;
  });
});
