let hidden = false
document.addEventListener('scroll', function () {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  console.log('Scroll Top:', scrollTop);
  const animationCloud = document.getElementById("animation-cloud");
  const animationBirds = document.getElementById("animation-birds")
  const animationWindowOne = document.getElementById("animation-window-one")
  const animationWindowTwo = document.getElementById("animation-window-two")
  const animationWindowThree = document.getElementById("animation-window-three")
  if (scrollTop >= 50 && scrollTop <= 100) {
    animationCloud.style.left = '150px';
    animationBirds.style.left = '270px';
    animationWindowOne.setAttribute("src", './Public/Animation/window-3.png')
    animationWindowTwo.setAttribute("src", './Public/Animation/window-2.png')
    animationWindowThree.setAttribute("src", './Public/Animation/window-4.png')
  } else if (scrollTop > 100 && scrollTop <= 700) {
    animationWindowOne.setAttribute("src", './Public/Animation/window-5.png')
    animationWindowTwo.setAttribute("src", './Public/Animation/window-6.png')
    animationWindowThree.setAttribute("src", './Public/Animation/window-7.png')
  } else if (scrollTop > 700) {
    const animation = document.getElementById("animation")
    animation.style.display = "none"
    hidden = true
  } else if (scrollTop < 50 && !hidden) {
    animationCloud.style.left = '30px';
    animationBirds.style.left = '120px';
    animationWindowOne.setAttribute("src", './Public/Animation/window-1.png')
    animationWindowTwo.setAttribute("src", './Public/Animation/window-1.png')
    animationWindowThree.setAttribute("src", './Public/Animation/window-1.png')
  }
});
