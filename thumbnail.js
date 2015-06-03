var im = require('imagemagick');

im.convert(['kitten.jpg', '-resize', '25x120', 'kitten-small.jpg'], 
function(err, stdout){
  if (err) throw err;
  console.log('stdout:', stdout);
});

im.resize({
  srcPath: 'kitten.jpg',
  dstPath: 'kitten-medium.jpg',
  width:   256,
  quality: 1, // using best quality
  progressive: false // ensure the conversion not losing quality
}, function(err, stdout, stderr){
  if (err) throw err;
  console.log('resized kitten.jpg to fit within 256x256px');
});