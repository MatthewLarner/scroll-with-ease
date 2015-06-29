# scroll-with-ease

Scroll an element into view

## Usage

```javascript
var scwease = require('scroll-with-ease');
scrollIntoView(element);
```

## Timing and easing functions

You can pass in an animation time and an array of points to create a cubic bezier curve for easing.

```javascript
scrollIntoView(element, 1500, [0.42, 0.0, 0.58, 1.0])
```

Also accepts familiar css timing functions: ease, linear, ease-in, ease-out, ease-in-out.

```javascript
scrollIntoView(element, 1500, 'ease-out')
```

Defaults set to 750ms and 'ease'.
