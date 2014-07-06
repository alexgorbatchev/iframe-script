!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.iframeScript=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
var createIframe, injectFunc;

createIframe = function() {
  var iframe, style;
  iframe = document.createElement('IFRAME');
  style = iframe.style;
  style.width = style.height = '1px';
  style.left = style.top = '-10px';
  style.position = 'absolute';
  return document.body.appendChild(iframe);
};

injectFunc = function(iframe, fn, opts) {
  var contentWindow, iframeDoc, script;
  contentWindow = iframe.contentWindow;
  iframeDoc = contentWindow.document;
  script = iframeDoc.createElement('SCRIPT');
  script.innerHTML = "var fn = " + (fn.toString()) + ";";
  iframeDoc.body.appendChild(script);
  return contentWindow.fn(opts);
};

module.exports = function(fn, opts, callback) {
  var iframe;
  iframe = createIframe();
  return setTimeout(function() {
    return callback(null, injectFunc(iframe, fn, opts));
  });
};


},{}]},{},[1])
(1)
});