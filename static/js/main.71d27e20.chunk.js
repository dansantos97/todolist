(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{18:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(4),i=n.n(r),s=(n(18),n(6)),o=n(2),d=n(1);var l=function(e){return Object(d.jsx)("div",{className:e.className?"".concat(e.className," card"):"card",children:e.children})},j=n(10);var u=function e(t){Object(j.a)(this,e),this.id=parseInt(1e5*Math.random()),this.text=t,this.done=!1};u.lastId=0;var b=u;function O(e){return e.done?Object(d.jsx)("img",{alt:"done",src:"./assets/on.png"}):Object(d.jsx)("img",{alt:"undone",src:"./assets/off.png"})}var h=function(e){var t=Object(o.b)();return Object(d.jsx)("li",{children:Object(d.jsxs)(l,{className:e.item.done?"done item":"item",children:[e.item.text,Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{onClick:function(){t({type:"CHANGE_DONE",payload:e.item.id})},children:Object(d.jsx)(O,{done:e.item.done})}),Object(d.jsx)("button",{onClick:function(){t({type:"DELETE_ITEM",payload:e.item.id})},children:Object(d.jsx)("img",{alt:"delete",src:"./assets/lixo.png"})})]})]})})};var f=function(e){var t=Object(o.c)((function(e){return e}));return Object(d.jsx)("ul",{children:t.map((function(e){return Object(d.jsx)(h,{item:e},e.id)}))})},m=n(11);var x=function(e){var t=Object(c.useState)(""),n=Object(s.a)(t,2),a=n[0],r=n[1],i=Object(o.b)();return Object(d.jsxs)("form",{children:[Object(d.jsx)("input",{onChange:function(e){var t=e.target.value;r(t)},type:"text",ref:function(e){return e&&e.focus()},value:a}),Object(d.jsx)("button",{className:"button",onClick:function(t){t.preventDefault(),a&&(i(function(e){return{type:"ADD_ITEM",payload:new b(e)}}(a)),r(""),e.onHideModal())},children:Object(d.jsx)(m.a,{})})]})};var v=function(e){return Object(d.jsx)("div",{id:"modal",onClick:function(t){"modal"===t.target.id&&e.onHideModal()},className:e.show?"modal":"modal hide",children:Object(d.jsx)(l,{className:"cardModal",children:e.children})})},p=(n(26),n(13)),g=n(12);var N="savedItems";var E=Object(p.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ITEM":return[].concat(Object(g.a)(e),[t.payload]);case"DELETE_ITEM":return e.filter((function(e){return e.id!==t.payload}));case"CHANGE_DONE":return e.map((function(e){return e.id===t.payload&&(e.done=!e.done),e}));default:return e}}),function(){var e=localStorage.getItem(N);return e?JSON.parse(e):[]}());E.subscribe((function(){var e;e=E.getState(),localStorage.setItem(N,JSON.stringify(e))}));var y=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1];function r(){a(!1)}return Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)(o.a,{store:E,children:[Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("h1",{children:"Lista de Tarefas"}),Object(d.jsx)("button",{onClick:function(){a(!0)},className:"addButton",children:"+"})]}),Object(d.jsx)(f,{}),Object(d.jsx)(v,{show:n,onHideModal:r,children:Object(d.jsx)(x,{onHideModal:r})})]})})};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.71d27e20.chunk.js.map