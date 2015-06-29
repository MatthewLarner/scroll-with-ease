var scrollToElement = require('scroll-element-into-view'),
    Bezier = require('bezier-easing')

module.exports = function(target, time, curve) {

    curve = curve || 'ease';

    var easingFunction = typeof curve === 'string' ? Bezier.css[curve]: Bezier.apply(null, curve)

    scrollToElement(target, time, easingFunction);
};
