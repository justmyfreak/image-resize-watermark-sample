# Image resize and image watermak sample

* Setup GraphicsMagick [https://github.com/aheckmann/gm](https://github.com/aheckmann/gm)
* Setup ImageMagick [https://github.com/yourdeveloper/node-imagemagick](https://github.com/yourdeveloper/node-imagemagick)
* Install dependencies `npm install`
* Ready to Rocks!!

## Resizing image without losing quality

```
node thumbnail.js
```

It will generate `kitten-small.jpg` and `kitten-medium.jpg` 

## Add watermark to `kitten.jpg`

```
node watermark.js
```

It will generate `kitten-watermarked.png`