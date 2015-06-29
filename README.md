# scroll-with-ease

Scroll an element into view with animation time and cubic bezier easing functions.

## Usage

```javascript
var scwease = require('scroll-with-ease');
scwease(element);
```

## Timing and easing functions

You can pass in an animation time and an array of points to create a cubic bezier curve for easing.

```javascript
scwease(element, 1500, [0.42, 0.0, 0.58, 1.0])
```

Also accepts familiar css timing functions: ease, linear, ease-in, ease-out, ease-in-out.

```javascript
scwease(element, 1500, 'ease-out')
```

Defaults set to 750ms and 'ease'.
