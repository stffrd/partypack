/*
  This is one of many prosperous modules you'll create and require
  via entry.js

  You can import with require/import and export with module.exports/export
  you can also mix and match those, but please don't. that's just weird.
  Don't be weird.
*/

const x = 5;
const y = 10;

function example() {
  return 'This is an example function that we can export';
}

function write(msg) {
  console.log(msg);
}

// export our variables AND our function.
export {
  x,
  y,
  example,
  write
};
