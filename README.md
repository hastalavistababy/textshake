## Textshake

Textshake is jQuery plugin for shake characters 

## Install

```sh
bower install textshake
```

## How to use
* Include jquery 
* Include **textshadow.js** file into the index.html
```html
<script src="textshadow.js"></script> 
```
* Init textshaker
```js
// $('yourselector').textSahker(time, step, maintext, shaketext, aftershakefinishedfunction);
var mainText = 'Hii this is main text';
var shakeText = 'Hii this is shake text';
$('.mySelector').hover(function(){
  $(this).textShaker(500, 100, mainText, shakeText, function(){
    console.log('Shake finished !');
  });
});
```

<a target="_blank" href="http://codepen.io/Hastalavistababy/pen/NAvaqo">Try demo</a>

