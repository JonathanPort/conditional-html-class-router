# ConditionalHTMLClassRouter.js

A simple and lightweight (Only 1.2kb before GZip) ES6 component that can be used to route page specific code to the intended page to execute based on the current page class. You can choose what element you want it to pick up the class from and also what prefix for that class e.g. `body.page--`. This package also allows conditionals such as "only" or "except" so you can run code on all pages but 'home' for example.


### Usage
- - - -
1. Installation
```shell
npm install conditional-html-class-router --save

# or download the `dist/ConditionalHTMLClassRouter.js` for manual use.
```

2. Import the Module
```JavaScript

// ES6 Import
import Router from 'conditional-html-class-router';

// Require.js
const Router = require('conditional-html-class-router');
```

3. Fire up the router. It's best to make one file called `router.js` and use this as your start point for all code to follow.
```JavaScript

let prefix = 'page--',    // Optional. Default is 'page--'. Can be empty but not recommended.
    classElem = '.body';  // Optional. Default is 'body'.

new Router([

    // Add a method called 'only' to make sure code only runs on a page with the array of classes.
    {
        code: () => {
		
	    // Code!
	    console.log('Home page!');
	    
	},
	only: ['home']
    },

    // Add a method called 'except' to make sure code runs on all pages except those in the array of classes.
    {
	code: () => {
	
	    // Code!
	    console.log('Global except the about and contact page!');
	    
	},
	except: ['about', 'contact']
    },

    // By not adding 'only' or 'except' method, anycode inside here will run on all pages.
    {
	code: () => {
		
	    // Code!
	    console.log('Home page!');
	    
	}
    }

], prefix, classElem);
```

## Contributing [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)
