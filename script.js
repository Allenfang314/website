var textWrapper = document.querySelector('.kl-font');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.kl-font .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.kl-font',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
	

var grid = new Muuri('.kl-grid', {
  dragEnabled: true,
  layout: {
    fillGaps: true
  }
});

window.addEventListener('load', function () {
  grid.refreshItems().layout();
  document.body.classList.add('images-loaded');
});
