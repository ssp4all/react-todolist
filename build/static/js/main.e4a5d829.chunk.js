(this["webpackJsonpreact-todolist"]=this["webpackJsonpreact-todolist"]||[]).push([[0],{28:function(t,e,n){},30:function(t,e,n){},36:function(t,e,n){"use strict";n.r(e);var c=n(0),o=n(1),r=n(20),s=n.n(r),i=(n(28),n(18)),d=n(15),j=n.n(d),a=n(21),l=n(12),u=(n(30),function(t){var e,n=t.item,o=t.delTodo,r=t.markComplete;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{style:(e=n.completed,{textDecoration:!0===e?"line-through":"none"}),children:Object(c.jsxs)("p",{children:[Object(c.jsx)("input",{type:"checkbox",id:n.id,onChange:function(){return r(n.id)}})," ",n.title," ",Object(c.jsx)("button",{onClick:function(){return o(n.id)},children:" X"})]})})})}),b=function(t){var e=t.todos,n=t.delTodo,o=t.markComplete;return console.log("Todos",e),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{children:"TOdos goes here!"}),e.map((function(t){return Object(c.jsx)(u,{item:t,delTodo:n,markComplete:o},t.id)}))]})},h=n(10),O=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("header",{children:[Object(c.jsx)("h1",{children:"TodoList by Suraj"}),Object(c.jsx)("nav",{children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)(h.b,{to:"/",children:" Home "})}),Object(c.jsx)("li",{children:Object(c.jsx)(h.b,{to:"/about",children:" About "})})]})})]})})},x=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"About US"})})})},p=function(t){var e=t.addTask,n=Object(o.useState)(""),r=Object(l.a)(n,2),s=r[0],i=r[1];return Object(c.jsx)("div",{children:Object(c.jsxs)("form",{children:[Object(c.jsx)("input",{type:"text",name:"taskVal",placeholder:"Type here",value:s,onChange:function(t){return i(t.target.value)}}),Object(c.jsx)("input",{type:"button",value:"Add",onClick:function(){return e(s,i)}})]})})},m=n(2),f=function(){return Object(c.jsx)("h1",{children:" Not Found Page"})};var v=function(){var t=Object(o.useState)({todos:[]}),e=Object(l.a)(t,2),n=e[0],r=e[1];Object(o.useEffect)((function(){(function(){var t=Object(a.a)(j.a.mark((function t(){var e,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,console.log("F",n),n&&0!==n.length?r({todos:n}):r({todos:[]});case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);var s=function(t){r({todos:n.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},d=function(t){r({todos:Object(i.a)(n.todos.filter((function(e){return e.id!==t})))})},u=function(t,e){var c={id:Math.floor(100*Math.random()),title:t,completed:!1};r({todos:[].concat(Object(i.a)(n.todos),[c])}),e("")};return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(h.a,{children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(O,{}),Object(c.jsxs)(m.c,{children:[Object(c.jsx)(m.a,{exact:!0,path:"/",render:function(t){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(p,{addTask:u}),n.todos&&0!==n.todos.length?Object(c.jsx)(b,{todos:n.todos,delTodo:d,markComplete:s}):Object(c.jsx)("p",{children:"No tasks!"})]})}}),Object(c.jsx)(m.a,{path:"/about",component:x,exact:!0}),Object(c.jsx)(m.a,{component:f})]})]})})})};s.a.render(Object(c.jsx)(v,{}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.e4a5d829.chunk.js.map