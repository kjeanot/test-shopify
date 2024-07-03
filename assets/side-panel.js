const sidePanelToggle = document.querySelectorAll('.toggle-side-panel');

sidePanelToggle.forEach(element => {
  element.addEventListener('click', function() {
    document.querySelector('.side-panel').classList.toggle('side-panel--open');
  });
});

