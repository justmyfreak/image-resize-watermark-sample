var gm = require('gm').subClass({imageMagick: true});

gm('kitten.jpg')
.draw(['image Over 0,0 0,0 watermark.png'])
.write('kitten-watermarked.png', function (err) {
  if (err) console.log('aaw, shucks');
  console.log('Image saved as kitten-watermarked.png');
});