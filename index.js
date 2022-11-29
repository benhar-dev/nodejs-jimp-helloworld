var Jimp = require('jimp');

Jimp.read('./images/source.bmp', (err, image) => {
  if (err) throw err;
  image
    .resize(256, 256)
    .quality(60)
    .write('./images/result.jpg');
});