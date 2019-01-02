
// Load in dependencies
var fs = require('fs');
var Spritesmith = require('spritesmith');

// Generate our spritesheet
Spritesmith.run({
  src: [
    __dirname + '/1.png',
    __dirname + '/2.png',
    __dirname + '/3.png'
    // __dirname + '/to_return.png'
  ],
  padding: 10,
  algorithm: 'diagonal'
}, function handleResult (err, result) {
  // If there was an error, throw it
  if (err) {
    throw err;
  }

    // Output the image
    fs.writeFileSync(__dirname + '/alt-diagonal.png', result.image);
    console.log('coordinates', result.coordinates)
    console.log('properties', result.properties)
});
