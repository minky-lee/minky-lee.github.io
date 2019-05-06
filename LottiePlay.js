

var animation = bodymovin.loadAnimation({
  container: document.getElementById('lottie'), // Required
  path: 'hello.json', // Required
  renderer: 'svg/canvas/html', // Required
  loop: true, // Optional
  autoplay: true, // Optional
})
