## Textshake

Textshake is jQuery plugin for shake characters 

## Install

```sh
bower install textshake
```

## How to use
* Include jquery 
* Include **textshake.js** file into the index.html
```html
<script src="textshake.js"></script> 
```
* Init textShake
```js
// $('yourselector').textShake(time, step, maintext, shaketext, aftershakefinishedfunction);
var mainText = 'Hii this is main text';
var shakeText = 'Hii this is shake text';
$('.mySelector').hover(function(){
  $(this).textShake(500, 100, mainText, shakeText, function(){
    console.log('Shake finished !');
  });
});
```

<a target="_blank" href="http://codepen.io/Hastalavistababy/pen/NAvaqo">Try demo</a>

