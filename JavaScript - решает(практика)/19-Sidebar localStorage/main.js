window.onload = function () {

  var localStor = (localStorage.getItem('sidebar')) ? localStorage.getItem('sidebar') : '';
  // console.log('localStorage - ' + localStor);
  var sidebarToggle = document.querySelector('.sidebar');

  if (localStor === 'open' || localStor === '') {
    sidebarToggle.classList.remove('close');
    sidebarToggle.classList.add('open');
  } else {
    sidebarToggle.classList.remove('open');
    sidebarToggle.classList.add('close');
  }

  document.getElementById('sidebar').onclick = function () {
    if (sidebarToggle.classList.contains('open')) {
      localStorage.setItem('sidebar', 'close');
      sidebarToggle.classList.remove('open');
      sidebarToggle.classList.add('close');
    } else {
      localStorage.setItem('sidebar', 'open');
      sidebarToggle.classList.remove('close');
      sidebarToggle.classList.add('open');
    }
  }

};

// localStorage.setItem('ключ', 'значение')
// localStorage.getItem('ключ')
// localStorage.removeItem("Ключ")
// localStorage.clear()