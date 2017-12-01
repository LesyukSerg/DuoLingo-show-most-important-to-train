// ==UserScript==
// @name			DuoLingo show important
// @namespace		duolingo
// @version      0.1
// @description  try to take over the world!
// @author       You
// @updateURL   https://github.com/LesyukSerg/DuoLingo_important-to-train/raw/master/dl_feature.meta.js
// @downloadURL https://github.com/LesyukSerg/DuoLingo_important-to-train/raw/master/dl_feature.user.js

// @match        https://www.duolingo.com/
// @grant        none
// ==/UserScript==

(function() {
   function ksort(obj) {
       var keys = Object.keys(obj).sort(), sortedObj = {};

       for (var i in keys) {
           sortedObj[keys[i]] = obj[keys[i]];
       }

       return sortedObj;
   }

    var elements = {};
    var polygons = document.getElementsByClassName('_25x7O');

    for (var i = 0; i < polygons.length; i++) {
        var pos = polygons[i].points[0].x;
        var el = polygons[i].parentNode.parentNode.parentNode.parentNode;
        elements[pos] = el;
    }
    elements = ksort(elements);

    for (i in elements) {
        elements[i].style = "position:absolute;top:40%;left:40%;transform:scale(3,3);background-color:#FFF;border:1px solid #e9e9e9;border-radius:8px;padding:5px;box-shadow: 0 0 10px #78C800";
        break;
    }
})();
