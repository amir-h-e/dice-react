(this["webpackJsonpreact-dice"]=this["webpackJsonpreact-dice"]||[]).push([[0],{11:function(e,c,t){"use strict";t.r(c);var a=t(1),n=t.n(a),r=t(4),i=t.n(r),s=t(2),l=(t(9),t(0)),j=function(e){var c=e.rollDice,t=e.holdScore,a=e.dice,n=e.isWinner,r=e.newGame;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("button",{className:"new",onClick:r,children:"new game"}),!n&&Object(l.jsx)("button",{className:"role",onClick:c,children:"role dice"}),a&&Object(l.jsx)("button",{className:"hold",onClick:t,children:"hold"})]})},o=function(e){var c=e.dice;return c&&Object(l.jsx)("img",{className:"img-dice",src:"images/dice-".concat(c,".png"),alt:""})},d=function(e){var c=e.isActive,t=e.score,a=e.current,n=e.playerName,r=e.isWinner;return Object(l.jsxs)("div",{id:"".concat(r&&"winner"),className:"player-0 side ".concat(c&&"active"),children:[Object(l.jsx)("div",{className:"player-0-name",children:Object(l.jsx)("span",{children:r?"".concat(n+" win"," "):"".concat(n)})}),Object(l.jsx)("div",{className:"player-0-score",children:t}),Object(l.jsx)("div",{className:"player-0-sum",children:a})]})};var b=function(){var e=Object(a.useState)("player-0"),c=Object(s.a)(e,2),t=c[0],n=c[1],r=Object(a.useState)(0),i=Object(s.a)(r,2),b=i[0],u=i[1],p=Object(a.useState)(0),O=Object(s.a)(p,2),m=O[0],y=O[1],h=Object(a.useState)(0),x=Object(s.a)(h,2),v=x[0],N=x[1],f=Object(a.useState)(null),S=Object(s.a)(f,2),w=S[0],g=S[1],k=Object(a.useState)(null),W=Object(s.a)(k,2),A=W[0],C=W[1],M=function(){N(0),n("player-0"===t?"player-1":"player-0")};return Object(l.jsxs)("div",{className:"parent",children:[Object(l.jsx)(d,{playerName:"player A",isActive:"player-0"===t,score:b,current:"player-0"===t?v:0,isWinner:"player-0"===A}),Object(l.jsx)(d,{playerName:"player B",isActive:"player-1"===t,score:m,current:"player-1"===t?v:0,isWinner:"player-1"===A}),Object(l.jsx)(j,{rollDice:function(){var e=Math.ceil(6*Math.random());g(e),1!==e?N(v+e):M()},holdScore:function(){"player-0"===t?(u(b+v),b+v>=25&&C("player-0")):(y(m+v),m+v>=25&&C("player-1")),M()},dice:w,isWinner:A,newGame:function(){n("player-0"),u(0),y(0),N(0),g(null),C(null)}}),Object(l.jsx)(o,{dice:w})]})};i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root"))},9:function(e,c,t){}},[[11,1,2]]]);
//# sourceMappingURL=main.208415bf.chunk.js.map