/* entry.js */
/* 
  This is it. The big one, the workhorse, the module that tirelessly
  shoulders the burden. 

  Ideally, you'll be requiring all of your other login in here to either
    a) Setup the initial stuff you're gonna need
    b) Gather all the stuff you need in the same place to do stuff with it.
*/

var behavior = require('./js/behavior.js')
global.behavior = behavior