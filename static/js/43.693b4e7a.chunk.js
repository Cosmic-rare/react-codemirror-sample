(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[43],{79:function(t,e,r){"use strict";function n(t,e,r){return e(r),r(t,e)}r.r(e),r.d(e,"elm",(function(){return v}));var i=/[a-z]/,o=/[A-Z]/,a=/[a-zA-Z0-9_]/,u=/[0-9]/,f=/[0-9A-Fa-f]/,s=/[-&*+.\\/<>=?^|:]/,c=/[(),[\]{}]/,l=/[ \v\f]/;function p(){return function(t,e){if(t.eatWhile(l))return null;var r=t.next();if(c.test(r))return"{"===r&&t.eat("-")?n(t,e,h(1)):"["===r&&t.match("glsl|")?n(t,e,d):"builtin";if("'"===r)return n(t,e,x);if('"'===r)return t.eat('"')?t.eat('"')?n(t,e,m):"string":n(t,e,k);if(o.test(r))return t.eatWhile(a),"type";if(i.test(r)){var p=1===t.pos;return t.eatWhile(a),p?"def":"variable"}if(u.test(r)){if("0"===r){if(t.eat(/[xX]/))return t.eatWhile(f),"number"}else t.eatWhile(u);return t.eat(".")&&t.eatWhile(u),t.eat(/[eE]/)&&(t.eat(/[-+]/),t.eatWhile(u)),"number"}return s.test(r)?"-"===r&&t.eat("-")?(t.skipToEnd(),"comment"):(t.eatWhile(s),"keyword"):"_"===r?"keyword":"error"}}function h(t){return 0==t?p():function(e,r){for(;!e.eol();){var n=e.next();if("{"==n&&e.eat("-"))++t;else if("-"==n&&e.eat("}")&&0===--t)return r(p()),"comment"}return r(h(t)),"comment"}}function m(t,e){for(;!t.eol();){if('"'===t.next()&&t.eat('"')&&t.eat('"'))return e(p()),"string"}return"string"}function k(t,e){for(;t.skipTo('\\"');)t.next(),t.next();return t.skipTo('"')?(t.next(),e(p()),"string"):(t.skipToEnd(),e(p()),"error")}function x(t,e){for(;t.skipTo("\\'");)t.next(),t.next();return t.skipTo("'")?(t.next(),e(p()),"string"):(t.skipToEnd(),e(p()),"error")}function d(t,e){for(;!t.eol();){if("|"===t.next()&&t.eat("]"))return e(p()),"string"}return"string"}var g={case:1,of:1,as:1,if:1,then:1,else:1,let:1,in:1,type:1,alias:1,module:1,where:1,import:1,exposing:1,port:1},v={startState:function(){return{f:p()}},copyState:function(t){return{f:t.f}},token:function(t,e){var r=e.f(t,(function(t){e.f=t})),n=t.current();return g.hasOwnProperty(n)?"keyword":r}}}}]);
//# sourceMappingURL=43.693b4e7a.chunk.js.map