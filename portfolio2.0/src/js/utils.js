const toggleMobile = document.querySelector('#toggle-mobile-menu');

const navBarMobile = document.querySelector('.nav');

toggleMobile.addEventListener('click', function () {
  const visible = navBarMobile.getAttribute('data-visible');

  if (visible === 'false') {
    navBarMobile.setAttribute('data-visible', true);
    toggleMobile.setAttribute('data-fixed', true);
  } else {
    navBarMobile.setAttribute('data-visible', false);
    toggleMobile.setAttribute('data-fixed', false);
  }
});

// =============================
// =============================

const darkModeBtn = document.querySelector('#dark-light');
const darkModeBtnText = document.querySelector('#mode');

darkModeBtn.addEventListener('click', () => {
  const mode = darkModeBtnText.getAttribute('data-mode');

  if (mode === 'light') {
    darkModeBtnText.setAttribute('data-mode', 'dark');
    darkModeBtnText.textContent = 'dark';
  } else {
    darkModeBtnText.setAttribute('data-mode', 'light');
    darkModeBtnText.textContent = 'light';
  }

  document.body.classList.toggle('dark-mode');
});

// =============================
// =============================
