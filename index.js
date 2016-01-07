var scrollToElement = require('scroll-element-into-view'),
    Bezier = require('bezier-easing');

module.exports = function(target, time, curve) {

    curve = curve || 'ease';

    var easingFunction = typeof curve === 'string' ? Bezier.css[curve].get: Bezier.apply(null, curve).get;

    scrollToElement(target, time, easingFunction);
};
