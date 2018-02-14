(() => {
  console.log('svg script file loaded');

  let svgs = document.querySelectorAll('svg');

  function logThisSvg(){
    console.log(this.id);
  }

  svgs.forEach(svg => svg.addEventListener('click, logThisSvg'));
})();
