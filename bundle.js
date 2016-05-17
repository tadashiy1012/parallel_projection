(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

window.addEventListener('load', function () {
    var cubes = [[100, 50, 100], [300, 50, 100], [300, 250, 100], [100, 250, 100], [100, 50, 300], [300, 50, 300], [300, 250, 300], [100, 250, 300]];
    var d2pos = [];
    for (var i = 0; i < cubes.length; i++) {
        d2pos[i] = [cubes[i][0], cubes[i][1]];
    }
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var startAngle = 0;
    var endAngle = 360;
    for (var j = 0; j < d2pos.length; j++) {
        ctx.beginPath();
        ctx.arc(d2pos[j][0], d2pos[j][1], 1, startAngle, endAngle, false);
        ctx.stroke();
    }
    for (var _i = 0; _i < d2pos.length; _i++) {
        var start = d2pos[_i];
        var end = d2pos[_i + 1] !== undefined ? d2pos[_i + 1] : d2pos[0];
        ctx.beginPath();
        ctx.moveTo(start[0], start[1]);
        ctx.lineTo(end[0], end[1]);
        ctx.stroke();
    }
});

},{}]},{},[1]);
