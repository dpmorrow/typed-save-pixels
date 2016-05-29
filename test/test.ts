import test = require('blue-tape');
import zeros = require('zeros');
import savePixels = require('save-pixels');

test('module can load properly', null, function(t) {
  let imgsrc = zeros([1, 1, 3]);
  let test = savePixels(imgsrc, 'png');

  t.notEqual(null, test, 'created instance is not null');
  t.end();
});

test('module can create image object', null, function(t) {
  let imgsrc = zeros([1, 1, 3]);
  let test = savePixels(imgsrc, 'png');

  t.notEqual(undefined, test.data, 'creates a png');
  t.end();
});
