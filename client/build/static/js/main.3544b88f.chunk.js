(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{213:function(e,t,n){},237:function(e,t,n){},238:function(e,t,n){},239:function(e,t,n){},240:function(e,t,n){},407:function(e,t,n){},408:function(e,t,n){},409:function(e,t,n){"use strict";n.r(t);var s,c=n(0),a=n(186),r=n.n(a),i=n(87),j=n(7),o=n(40),l=(n(213),n(1)),u=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),r=Object(o.a)(a,2),j=r[0],u=r[1];return Object(l.jsx)("div",{className:"joinOuterContainer",children:Object(l.jsxs)("div",{className:"joinInnerContainer",children:[Object(l.jsx)("h1",{className:"heading",children:"Join"}),Object(l.jsx)("div",{children:Object(l.jsx)("input",{placeholder:"Name",className:"joinInput",type:"text",onChange:function(e){return s(e.target.value)}})}),Object(l.jsx)("div",{children:Object(l.jsx)("input",{placeholder:"Room",className:"joinInput mt-20",type:"text",onChange:function(e){return u(e.target.value)}})}),Object(l.jsx)(i.b,{onClick:function(e){return n&&j?null:e.preventDefault()},to:"/chat?name=".concat(n,"&room=").concat(j),children:Object(l.jsx)("button",{className:"button mt-20",type:"submit",children:"Sign In"})})]})})},m=n(208),b=n(189),O=n.n(b),d=n(207),h=(n(237),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAAXNSR0IArs4c6QAAAExJREFUCB1jbPh/le3lx5tNDIwMcQwg8J9hkTi/eh0LWJCBoRwoAAPlQDEGJrhKmDCIBupmQuYjs5lAZiILgNlAMRaQRSAz4UZCLQcAIwYaiAejKoYAAAAASUVORK5CYII="),A=(n(238),function(e){var t=e.users;return Object(l.jsxs)("div",{className:"textContainer",children:[Object(l.jsxs)("div",{children:[Object(l.jsxs)("h1",{children:["Realtime Chat Application ",Object(l.jsx)("span",{role:"img","aria-label":"emoji",children:"\ud83d\udcac"})]}),Object(l.jsxs)("h2",{children:["Created with React, Express, Node and Socket.IO ",Object(l.jsx)("span",{role:"img","aria-label":"emoji",children:"\u2764\ufe0f"})]}),Object(l.jsxs)("h2",{children:["Programmed by James L. Romero with guidance by JavaScript Mastery! ",Object(l.jsx)("span",{role:"img","aria-label":"emoji",children:"\u2b05\ufe0f"})]})]}),t?Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"People currently chatting:"}),Object(l.jsx)("div",{className:"activeContainer",children:Object(l.jsx)("h2",{children:t.map((function(e){var t=e.name;return Object(l.jsxs)("div",{className:"activeItem",children:[t,Object(l.jsx)("img",{alt:"Online Icon",src:h})]},t)}))})})]}):null]})}),x=(n(239),function(e){var t=e.room;return Object(l.jsxs)("div",{className:"infoBar",children:[Object(l.jsxs)("div",{className:"leftInnerContainer",children:[Object(l.jsx)("img",{className:"onlineIcon",src:h,alt:"online"}),Object(l.jsx)("h3",{children:t})]}),Object(l.jsx)("div",{className:"rightInnerContainer",children:Object(l.jsx)("a",{href:"/",children:Object(l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHBJREFUGBmNkAEKwCAMA2VfGP2mrx3sOV2us6IymIXQGlNTW9zdhCqcZQm4dmelFUp+CZZa6sYpeUVIFyIixMqjCO51Wy5unQExuYSbSF5JASLqPsqRM21lOoWc89tagr3PSMgOiWlwnUeXWA/E78IfuAX270S3ydAAAAAASUVORK5CYII=",alt:"close"})})})]})}),g=(n(240),function(e){var t=e.setMessage,n=e.sendMessage,s=e.message;return Object(l.jsxs)("form",{className:"form",children:[Object(l.jsx)("input",{className:"input",type:"text",placeholder:"Type a message...",value:s,onChange:function(e){var n=e.target.value;return t(n)},onKeyPress:function(e){return"Enter"===e.key?n(e):null}}),Object(l.jsx)("button",{className:"sendButton",onClick:function(e){return n(e)},children:"Send"})]})}),p=n(206),f=(n(407),n(133)),v=n.n(f),N=function(e){var t=e.message,n=t.text,s=t.user,c=!1,a=e.name.trim().toLowerCase();return s===a&&(c=!0),c?Object(l.jsxs)("div",{className:"messageContainer justifyEnd",children:[Object(l.jsx)("p",{className:"sentText pr-10",children:a}),Object(l.jsx)("div",{className:"messageBox backgroundBlue",children:Object(l.jsx)("p",{className:"messageText colorWhite",children:v.a.emojify(n)})})]}):Object(l.jsxs)("div",{className:"messageContainer justifyStart",children:[Object(l.jsx)("div",{className:"messageBox backgroundLight",children:Object(l.jsx)("p",{className:"messageText colorDark",children:v.a.emojify(n)})}),Object(l.jsx)("p",{className:"sentText pl-10 ",children:s})]})},C=(n(408),function(e){var t=e.messages,n=e.name;return Object(l.jsx)(p.a,{className:"messages",children:t.map((function(e,t){return Object(l.jsx)("div",{children:Object(l.jsx)(N,{message:e,name:n})},t)}))})}),I=function(e){var t=e.location,n=Object(c.useState)(""),a=Object(o.a)(n,2),r=a[0],i=a[1],j=Object(c.useState)(""),u=Object(o.a)(j,2),b=u[0],h=u[1],p=Object(c.useState)(""),f=Object(o.a)(p,2),v=f[0],N=f[1],I=Object(c.useState)(""),S=Object(o.a)(I,2),y=S[0],R=S[1],w=Object(c.useState)([]),E=Object(o.a)(w,2),k=E[0],M=E[1],B="https://realtime-chat-app-2022.herokuapp.com/";Object(c.useEffect)((function(){var e=O.a.parse(t.search),n=e.name,c=e.room;s=Object(d.a)(B,{transports:["websocket"]}),i(n),h(c),s.emit("join",{name:n,room:c},(function(e){e&&alert(e)}))}),[B,t.search]),Object(c.useEffect)((function(){s.on("message",(function(e){M((function(t){return[].concat(Object(m.a)(t),[e])}))})),s.on("roomData",(function(e){var t=e.users;N(t)}))}),[]);return Object(l.jsxs)("div",{className:"outerContainer",children:[Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(x,{room:b}),Object(l.jsx)(C,{messages:k,name:r}),Object(l.jsx)(g,{message:y,setMessage:R,sendMessage:function(e){e.preventDefault(),y&&s.emit("sendMessage",y,(function(){return R("")}))}})]}),Object(l.jsx)(A,{users:v})]})},S=function(){return Object(l.jsxs)(i.a,{children:[Object(l.jsx)(j.a,{path:"/",exact:!0,component:u}),Object(l.jsx)(j.a,{path:"/chat",component:I})]})};r.a.render(Object(l.jsx)(S,{}),document.querySelector("#root"))}},[[409,1,2]]]);
//# sourceMappingURL=main.3544b88f.chunk.js.map