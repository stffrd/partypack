#Partypack

*A scaffolding tool for webpack based projects*

## The Skinny

Boy, I sure hate setting up a build system every single time I want to start a new project. You probably do, too. You probably wish that in the time it took you to set up webpack and a few other bits and bobs that you could actually be developing.

This is a very bare-bones solution for that problem.

## A lot with a little

Partypack is, again, just a scaffolding for your project. At its core it includes a few minimal things:

 - Development config file (for Webpack)
 - Production config file (also for Webpack)
 - Babel Compiler (in case you're feeling extra ES6-esque or using React)
 - Winning enthusiasm (You gotta bring that one, buddy)

## How do I work this crazy thing?

Simple! Just make sure of two things:

 1. that any/all `.js` files are included in the`src` directory when you start developing.

 2. that any code you want to be included in the bundle is referenced in `entry.js` by way of `import` (ES6) or `require` (CommonJS).

### commands

 - `npm run develop` starts your development server at `localhost:3000` and runs a hot reload whenever you update files in your `src` directory

 - `npm run dev-build` outputs your bundled scripts into the `build/` folder under `bundle.js`
 - `npm run prod-build` outputs your bundled scripts into the `build/` folder that are now minified and optimized for your application.

 At the end of the day you'll reference your bundle in your HTML like so:

 `<script src="static/bundle.js"></script>`

 **Note:** *the file path is `static/` instead of `build/` because the `publicpath` property has been set in our Webpack `.config` files. This means that when you run the server, there is no file output in `dist`, but the output is used by the running server instance to hot reload*

 LET'S PARTY.
