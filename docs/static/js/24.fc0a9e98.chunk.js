(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[24],{150:function(O,e,t){"use strict";t.r(e),t.d(e,"completeFromSchema",(function(){return x})),t.d(e,"xml",(function(){return _})),t.d(e,"xmlLanguage",(function(){return y}));var n=t(0),r=t(2),a=t(13),o=t(8);function s(O){return 45==O||46==O||58==O||O>=65&&O<=90||95==O||O>=97&&O<=122||O>=161}var d=null,i=null,l=0;function c(O,e){var t,n=O.pos+e;if(i==O&&l==n)return d;for(;9==(t=O.peek(e))||10==t||13==t||32==t;)e++;for(var r="";;){var a=O.peek(e);if(!s(a))break;r+=String.fromCharCode(a),e++}return i=O,l=n,d=r||null}function u(O,e){this.name=O,this.parent=e,this.hash=e?e.hash:0;for(var t=0;t<O.length;t++)this.hash+=(this.hash<<4)+O.charCodeAt(t)+(O.charCodeAt(t)<<8)}var $=new a.a({start:null,shift:function(O,e,t,n){return 1==e?new u(c(n,1)||"",O):O},reduce:function(O,e){return 10==e&&O?O.parent:O},reuse:function(O,e,t,n){var r=e.type.id;return 1==r||12==r?new u(c(n,1)||"",O):O},hash:function(O){return O?O.hash:0},strict:!1}),p=new a.b((function(O,e){if(60==O.next)if(O.advance(),47==O.next){O.advance();var t=c(O,0);if(!t)return O.acceptToken(5);if(e.context&&t==e.context.name)return O.acceptToken(2);for(var n=e.context;n;n=n.parent)if(n.name==t)return O.acceptToken(3,-2);O.acceptToken(4)}else if(33!=O.next&&63!=O.next)return O.acceptToken(1)}),{contextual:!0});function f(O,e){return new a.b((function(t){for(var n=0,r=0;;r++){if(t.next<0){r&&t.acceptToken(O);break}if(t.next==e.charCodeAt(n)){if(++n==e.length){r>e.length&&t.acceptToken(O,1-e.length);break}}else n=0;t.advance()}}))}var v=f(36,"--\x3e"),k=f(37,"?>"),m=f(38,"]]>"),g=a.c.deserialize({version:13,states:"-OOQOaOOOcObO'#CcOkOdO'#CdOOOP'#Cv'#CvOsOaO'#DTO!XOaOOOOOQ'#Cw'#CwO!aObO,58}OOOP,58},58}OOOS'#Cx'#CxO!iOdO,59OOOOP,59O,59OOOOP-E6t-E6tO!qO`O'#ChO#kOqO'#CfOOOP'#Cf'#CfO#rOaO'#CyQ$TOPOOO$YOaOOOOOQ-E6u-E6uOOOP1G.i1G.iOOOS-E6v-E6vOOOP1G.j1G.jOOOO'#Cz'#CzO$hO`O,59SO$pO!bO,59SO%OOhO'#CqO%WO`O'#CrOOOP'#D]'#D]OOOP'#C}'#C}O%`OqO,59QO%gO`O'#CsOOOP,59Q,59QOOOP,59e,59eOOOP-E6w-E6wO$TOPOOOOOO-E6x-E6xO%oO!bO1G.nO%oO!bO1G.nO%}O`O'#CjO&VO!bO'#C{O&eO!bO1G.nOOOP1G.n1G.nOOOP1G.{1G.{OOOW'#DO'#DOO&pOhO,59]OOOP,59],59]O&xO`O,59^O'QO`O,59^OOOP-E6{-E6{OOOP1G.l1G.lO'YO`O,59_O'bO`O,59_O'jO!bO7+$YO'xO!bO7+$YOOOP7+$Y7+$YOOOP7+$g7+$gO(TO`O,59UO(]O`O,59UO(eO!bO,59gOOOO-E6y-E6yOOOW-E6|-E6|OOOP1G.w1G.wO(sO`O1G.xO(sO`O1G.xOOOP1G.x1G.xO({O`O1G.yO({O`O1G.yOOOP1G.y1G.yO)TO!bO<<GtOOOP<<Gt<<GtOOOP<<HR<<HRO(]O`O1G.pO(]O`O1G.pO)`O#tO'#CmOOOO1G.p1G.pO)nO`O7+$dOOOP7+$d7+$dO)vO`O7+$eOOOP7+$e7+$eOOOPAN=`AN=`OOOPAN=mAN=mO(]O`O7+$[OOOO7+$[7+$[OOOO'#C|'#C|O*OO#tO,59XOOOO,59X,59XOOOP<<HO<<HOOOOP<<HP<<HPOOOO<<Gv<<GvOOOO-E6z-E6zOOOO1G.s1G.s",stateData:"*^~OyPOzRO|QOPwPXwP~OtUOxWO~OuXO{ZO~OyPOzRO|QOPwXXwXswX~OP]OXbO~OtUOxdO~OuXO{fO~O]iOzgO~OP]OQoOSkOTlOblOclOdlOyPO|QO!RjO~ORpO~P!yOyPOzRO|QOPwPswP~OP]O~OyPOzRO|QOPwP~O]uOzgO~OZzO_wOh{OzgO~Ov|O!Q!OO~O]!QOzgO~OR!SO~P!yO]!UOzgO~OZ!XO_wOh!YOzgO~O`![OzgO~OzgOZoX_oXhoX~OZ!XO_wOh!YO~Ov|O!Q!`O~O]!aOzgO~OZ!cOzgO~O]!dOzgO~OZ!fOzgO~OZ!hO_wOh!iOzgO~OZ!hO_wOh!iO~O`!jOzgO~OzgO}!lO~OzgOZoa_oahoa~OZ!oOzgO~OZ!qOzgO~OZ!rO_wOh!sO~Ob!vOc!vO}!xO!O!vO~OZ!yOzgO~OZ!zOzgO~Ob!vOc!vO}!}O!O!vO~O",goto:"&S!QPPPPPPP!R!RP!]P!fP!mPP!vPPP!X!X#QP#W#_#g#m#s#z%S%c%i%oPPPP%uPPPPPPP&OWROS`bTl^nU`TasTl^nZ^T^ans_xiuvy!V!W!gQ!m![S!u!j!kR!{!tQp^R!SnZ_T^ansUSO`bR[SQVPRcVQYQReYSaTsRraQh]jthv!P!T!V!Z!]!b!e!k!n!p!tQviQ!PkQ!ToQ!VuQ!ZwQ!]xQ!b!QQ!e!UQ!k![Q!n!aQ!p!dR!t!jQyiS!WuvU!^y!W!gR!g!VQ!w!lR!|!wQn^R!RnQ}jR!_}QTOQq`RsbTm^n",nodeNames:"\u26a0 StartTag StartCloseTag MissingCloseTag StartCloseTag StartCloseTag Document Comment ProcessingInst DoctypeDecl Element EndTag OpenTag TagName Attribute AttributeName Is AttributeValue EntityReference CharacterReference Text Cdata MismatchedCloseTag CloseTag SelfCloseEndTag SelfClosingTag",maxTerm:49,context:$,nodeProps:[[o.b.closedBy,1,"SelfCloseEndTag EndTag",12,"CloseTag MissingCloseTag"],[o.b.openedBy,11,"StartTag StartCloseTag",23,"OpenTag",24,"StartTag"]],skippedNodes:[0],repeatNodeCount:9,tokenData:"Az~R!WOX$kXY%rYZ%rZ]$k]^%r^p$kpq%rqr$krs&tsv$kvw'Uw}$k}!O(q!O!P$k!P!Q*n!Q![$k![!]+z!]!^$k!^!_/s!_!`=i!`!a>U!a!b>q!b!c$k!c!}+z!}#P$k#P#Q?}#Q#R$k#R#S+z#S#T$k#T#o+z#o%W$k%W%o+z%o%p$k%p&a+z&a&b$k&b1p+z1p4U$k4U4d+z4d4e$k4e$IS+z$IS$I`$k$I`$Ib+z$Ib$Kh$k$Kh%#t+z%#t&/x$k&/x&Et+z&Et&FV$k&FV;'S+z;'S;:j/S;:j?&r$k?&r?Ah+z?Ah?BY$k?BY?Mn+z?Mn~$kY$rUdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_~$kQ%ZRdQOv%Uw!^%U!_~%UW%iR!OWOr%dsv%dw~%d_%{]dQ!OWzTOX$kXY%rYZ%rZ]$k]^%r^p$kpq%rqr$krs%Usv$kw!^$k!^!_%d!_~$kZ&{R}XdQOv%Uw!^%U!_~%U~'XTOp'hqs'hst(Pt!]'h!^~'h~'kTOp'hqs'ht!]'h!]!^'z!^~'h~(POb~~(SROp(]q!](]!^~(]~(`SOp(]q!](]!]!^(l!^~(]~(qOc~Z(xWdQ!OWOr$krs%Usv$kw}$k}!O)b!O!^$k!^!_%d!_~$kZ)iWdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_!`$k!`!a*R!a~$kZ*[UxPdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_~$k^*uWdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_!`$k!`!a+_!a~$k^+hUhSdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_~$k_,V}_S]PdQ!OWOr$krs%Usv$kw}$k}!O+z!O!P+z!P!Q$k!Q![+z![!]+z!]!^$k!^!_%d!_!c$k!c!}+z!}#R$k#R#S+z#S#T$k#T#o+z#o$}$k$}%O+z%O%W$k%W%o+z%o%p$k%p&a+z&a&b$k&b1p+z1p4U+z4U4d+z4d4e$k4e$IS+z$IS$I`$k$I`$Ib+z$Ib$Je$k$Je$Jg+z$Jg$Kh$k$Kh%#t+z%#t&/x$k&/x&Et+z&Et&FV$k&FV;'S+z;'S;:j/S;:j?&r$k?&r?Ah+z?Ah?BY$k?BY?Mn+z?Mn~$k_/ZWdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_;=`$k;=`<%l+z<%l~$kZ/xU!OWOq%dqr0[sv%dw!a%d!a!b=X!b~%dZ0aZ!OWOr%dsv%dw}%d}!O1S!O!f%d!f!g1x!g!}%d!}#O5s#O#W%d#W#X:k#X~%dZ1XT!OWOr%dsv%dw}%d}!O1h!O~%dZ1oRyR!OWOr%dsv%dw~%dX1}T!OWOr%dsv%dw!q%d!q!r2^!r~%dX2cT!OWOr%dsv%dw!e%d!e!f2r!f~%dX2wT!OWOr%dsv%dw!v%d!v!w3W!w~%dX3]T!OWOr%dsv%dw!{%d!{!|3l!|~%dX3qT!OWOr%dsv%dw!r%d!r!s4Q!s~%dX4VT!OWOr%dsv%dw!g%d!g!h4f!h~%dX4kV!OWOr4frs5Qsv4fvw5Qw!`4f!`!a5c!a~4fP5TRO!`5Q!`!a5^!a~5QP5cOXPX5jRXP!OWOr%dsv%dw~%dY5xV!OWOr%dsv%dw!e%d!e!f6_!f#V%d#V#W8w#W~%dY6dT!OWOr%dsv%dw!f%d!f!g6s!g~%dY6xT!OWOr%dsv%dw!c%d!c!d7X!d~%dY7^T!OWOr%dsv%dw!v%d!v!w7m!w~%dY7rT!OWOr%dsv%dw!c%d!c!d8R!d~%dY8WT!OWOr%dsv%dw!}%d!}#O8g#O~%dY8nR!OW!RQOr%dsv%dw~%dY8|T!OWOr%dsv%dw#W%d#W#X9]#X~%dY9bT!OWOr%dsv%dw#T%d#T#U9q#U~%dY9vT!OWOr%dsv%dw#h%d#h#i:V#i~%dY:[T!OWOr%dsv%dw#T%d#T#U8R#U~%dX:pT!OWOr%dsv%dw#c%d#c#d;P#d~%dX;UT!OWOr%dsv%dw#V%d#V#W;e#W~%dX;jT!OWOr%dsv%dw#h%d#h#i;y#i~%dX<OT!OWOr%dsv%dw#m%d#m#n<_#n~%dX<dT!OWOr%dsv%dw#d%d#d#e<s#e~%dX<xT!OWOr%dsv%dw#X%d#X#Y4f#Y~%dZ=`R|R!OWOr%dsv%dw~%dZ=rU`PdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_~$k_>_UZTdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_~$kZ>xWdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_!`$k!`!a?b!a~$kZ?kU{PdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_~$kZ@UWdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_#P$k#P#Q@n#Q~$kZ@uWdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_!`$k!`!aA_!a~$kZAhU!QPdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_~$k",tokenizers:[p,v,k,m,0,1,2,3],topRules:{Document:[0,6]},tokenPrec:0}),h=t(3),T=t(5);function P(O,e){var t=e&&e.getChild("TagName");return t?O.sliceString(t.from,t.to):""}function b(O,e){var t=e&&e.firstChild;return t&&"OpenTag"==t.name?P(O,t):""}function w(O){for(var e=O&&O.parent;e;e=e.parent)if("Element"==e.name)return e;return null}var C=function O(e,t,n){Object(r.a)(this,O),this.attrs=t,this.attrValues=n,this.children=[],this.name=e.name,this.completion=Object.assign(Object.assign({type:"type"},e.completion||{}),{label:this.name}),this.openCompletion=Object.assign(Object.assign({},this.completion),{label:"<"+this.name}),this.closeCompletion=Object.assign(Object.assign({},this.completion),{label:"</"+this.name+">",boost:2}),this.closeNameCompletion=Object.assign(Object.assign({},this.completion),{label:this.name+">"}),this.text=e.textContent?e.textContent.map((function(O){return{label:O,type:"text"}})):[]},W=/^[:\-\.\w\u00b7-\uffff]*$/;function Q(O){return Object.assign(Object.assign({type:"property"},O.completion||{}),{label:O.name})}function z(O){return"string"==typeof O?{label:'"'.concat(O,'"'),type:"constant"}:/^"/.test(O.label)?O:Object.assign(Object.assign({},O),{label:'"'.concat(O.label,'"')})}function x(O,e){var t,r=[],a=[],o=Object.create(null),s=Object(n.a)(e);try{for(s.s();!(t=s.n()).done;){var d=t.value,i=Q(d);r.push(i),d.global&&a.push(i),d.values&&(o[d.name]=d.values.map(z))}}catch(y){s.e(y)}finally{s.f()}var l,c=[],u=[],$=Object.create(null),p=Object(n.a)(O);try{var f=function(){var O=l.value,e=a,t=o;O.attributes&&(e=e.concat(O.attributes.map((function(O){return"string"==typeof O?r.find((function(e){return e.label==O}))||{label:O,type:"property"}:(O.values&&(t==o&&(t=Object.create(t)),t[O.name]=O.values.map(z)),Q(O))}))));var n=new C(O,e,t);$[n.name]=n,c.push(n),O.top&&u.push(n)};for(p.s();!(l=p.n()).done;)f()}catch(y){p.e(y)}finally{p.f()}u.length||(u=c);for(var v=0;v<c.length;v++){var k=O[v],m=c[v];if(k.children){var g,T=Object(n.a)(k.children);try{for(T.s();!(g=T.n()).done;){var x=g.value;$[x]&&m.children.push($[x])}}catch(y){T.e(y)}finally{T.f()}}else m.children=c}return function(O){var e,t=O.state.doc,n=function(O,e){for(var t,n=Object(h.w)(O).resolveInner(e,-1),r=null,a=n;!r&&a.parent;a=a.parent)"OpenTag"!=a.name&&"CloseTag"!=a.name&&"SelfClosingTag"!=a.name&&"MismatchedCloseTag"!=a.name||(r=a);if(r&&(r.to>e||r.lastChild.type.isError)){var o=r.parent;if("TagName"==n.name)return"CloseTag"==r.name||"MismatchedCloseTag"==r.name?{type:"closeTag",from:n.from,context:o}:{type:"openTag",from:n.from,context:w(o)};if("AttributeName"==n.name)return{type:"attrName",from:n.from,context:r};if("AttributeValue"==n.name)return{type:"attrValue",from:n.from,context:r};var s=n==r||"Attribute"==n.name?n.childBefore(e):n;return"StartTag"==(null===s||void 0===s?void 0:s.name)?{type:"openTag",from:e,context:w(o)}:"StartCloseTag"==(null===s||void 0===s?void 0:s.name)&&s.to<=e?{type:"closeTag",from:e,context:o}:"Is"==(null===s||void 0===s?void 0:s.name)?{type:"attrValue",from:e,context:r}:s?{type:"attrName",from:e,context:r}:null}if("StartCloseTag"==n.name)return{type:"closeTag",from:e,context:n.parent};for(;n.parent&&n.to==e&&!(null===(t=n.lastChild)||void 0===t?void 0:t.type.isError);)n=n.parent;return"Element"==n.name||"Text"==n.name||"Document"==n.name?{type:"tag",from:e,context:"Element"==n.name?n:w(n)}:null}(O.state,O.pos);if(!n||"tag"==n.type&&!O.explicit)return null;var r=n.type,s=n.from,d=n.context;if("openTag"==r){var i=u,l=b(t,d);if(l){var p=$[l];i=(null===p||void 0===p?void 0:p.children)||c}return{from:s,options:i.map((function(O){return O.completion})),span:W}}if("closeTag"==r){var f=b(t,d);return f?{from:s,to:O.pos+(">"==t.sliceString(O.pos,O.pos+1)?1:0),options:[(null===(e=$[f])||void 0===e?void 0:e.closeNameCompletion)||{label:f+">",type:"type"}],span:W}:null}if("attrName"==r){var v=$[P(t,d)];return{from:s,options:(null===v||void 0===v?void 0:v.attrs)||a,span:W}}if("attrValue"==r){var k=function(O,e,t){var n=e&&e.getChildren("Attribute").find((function(O){return O.from<=t&&O.to>=t})),r=n&&n.getChild("AttributeName");return r?O.sliceString(r.from,r.to):""}(t,d,s);if(!k)return null;var m=$[P(t,d)],g=((null===m||void 0===m?void 0:m.attrValues)||o)[k];return g&&g.length?{from:s,to:O.pos+('"'==t.sliceString(O.pos,O.pos+1)?1:0),options:g,span:/^"[^"]*"?$/}:null}if("tag"==r){var T=b(t,d),C=$[T],Q=[],z=d&&d.lastChild;!T||z&&"CloseTag"==z.name&&P(t,z)==T||Q.push(C?C.closeCompletion:{label:"</"+T+">",type:"type",boost:2});var x=Q.concat(((null===C||void 0===C?void 0:C.children)||(d?c:u)).map((function(O){return O.openCompletion})));if(d&&(null===C||void 0===C?void 0:C.text.length)){var y=d.firstChild;y.to>O.pos-20&&!/\S/.test(O.state.sliceDoc(y.to,O.pos))&&(x=x.concat(C.text))}return{from:s,options:x,span:/^<\/?[:\-\.\w\u00b7-\uffff]*$/}}return null}}var y=h.b.define({parser:g.configure({props:[h.p.add({Element:function(O){var e=/^\s*<\//.test(O.textAfter);return O.lineIndent(O.node.from)+(e?0:O.unit)},"OpenTag CloseTag SelfClosingTag":function(O){return O.column(O.node.from)+O.unit}}),h.l.add({Element:function(O){var e=O.firstChild,t=O.lastChild;return e&&"OpenTag"==e.name?{from:e.to,to:"CloseTag"==t.name?t.from:O.to}:null}}),Object(T.c)({Text:T.d.content,"StartTag StartCloseTag EndTag SelfCloseEndTag":T.d.angleBracket,TagName:T.d.tagName,"MismatchedCloseTag/Tagname":[T.d.tagName,T.d.invalid],AttributeName:T.d.attributeName,AttributeValue:T.d.attributeValue,Is:T.d.definitionOperator,"EntityReference CharacterReference":T.d.character,Comment:T.d.blockComment,ProcessingInst:T.d.processingInstruction,DoctypeDecl:T.d.documentMeta,Cdata:T.d.special(T.d.string)})]}),languageData:{commentTokens:{block:{open:"\x3c!--",close:"--\x3e"}},indentOnInput:/^\s*<\/$/}});function _(){var O=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new h.e(y,y.data.of({autocomplete:x(O.elements||[],O.attributes||[])}))}}}]);
//# sourceMappingURL=24.fc0a9e98.chunk.js.map