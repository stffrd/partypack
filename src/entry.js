/* entry.js */
/*
  This is it. The big one, the workhorse, the module that tirelessly
  shoulders the burden.

  Ideally, you'll be requiring all of your other modules in here to either
    a) Setup the initial stuff you're gonna need
    b) Gather all the stuff you need in the same place to do stuff with it.

  Notes:

  - If you want to put something on the window object, you'll be referencing 'global' to
    do so! (ex. global.namespace === window.namespace) in a browser, 'global' becomes 'window'
*/
// Example import
import * as example from './js/example.js';

// Assigning the imported module to the global namespace
// (which is window in a browser context)
global.example = example;

example.write(`
  this appears in the console.
  Edit me (and save) to see the reload!
`);

// Leave at the bottom of your modules to enable a
// full dependency tree reload when a change is detected.
// https://webpack.github.io/docs/hot-module-replacement.html
if (module.hot) {
  // This block isn't reached in initial compilation,
  // it's reached when a hot reload occurs
  module.hot.accept();
}
