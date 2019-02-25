(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),l=(a(14),a(2)),i=a(3),s=a(5),u=a(4),m=a(6),h=a(1),f=function(e){var t=e.onClick,a=e.className,n=void 0===a?"btn":a,c=e.children;return r.a.createElement("div",null,r.a.createElement("button",{onClick:t,className:n},c))},b=(a(16),function(e){return r.a.createElement("div",null,e.items.map(function(e){var t=e.volumeInfo,a=(t.id,t.title),n=t.authors,c=t.publisher,o=t.imageLinks,l=t.infoLink;return r.a.createElement("div",{className:"books"},r.a.createElement("img",{src:o.thumbnail,alt:a,className:"book-img",key:o}),r.a.createElement("h2",{key:a},a),r.a.createElement("p",{className:"author",key:n},n),r.a.createElement("p",{className:"publisher",key:c},c),r.a.createElement(f,null,r.a.createElement("a",{href:l,key:l},"Visit")))}))}),E=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={hasError:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",{style:{marginTop:"50px"}},"Something went wrong. Please try again."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(n.Component),d=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={query:"",items:[]},a.fetchQuery=a.fetchQuery.bind(Object(h.a)(Object(h.a)(a))),a.onSearchChange=a.onSearchChange.bind(Object(h.a)(Object(h.a)(a))),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"fetchQuery",value:function(){var e=this,t=this.state.query;fetch("".concat("https://www.googleapis.com/books/v1/volumes","?q=").concat(t)).then(function(e){return e.json()}).then(function(a){if(t){var n=a.items;e.setState({items:n}),console.log(n)}else alert("Please enter a search term.")})}},{key:"onSearchChange",value:function(e){this.setState({query:e.target.value.trim()})}},{key:"render",value:function(){var e=this,t=this.state.query.query;this.state.items.items;return r.a.createElement("div",{className:"form"},r.a.createElement("input",{type:"text",placeholder:"Seach by author, title, or ISBN",onChange:this.onSearchChange}),r.a.createElement(f,{onClick:function(){return e.fetchQuery(t)}},"Search"),r.a.createElement(E,null,r.a.createElement(b,{items:this.state.items})))}}]),t}(n.Component),p=function(){return r.a.createElement("footer",null,r.a.createElement("hr",null),r.a.createElement("p",null,"Made by"," ",r.a.createElement("a",{href:"https://github.com/username1001",rel:"noopener noreferrer",target:"_blank"},"Matt"),". View the"," ",r.a.createElement("a",{href:"https://github.com/username1001/book-finder",rel:"noopener noreferrer",target:"_blank"},"source code"),"."))},v=(a(18),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("h1",null,"BOOK FINDER"),r.a.createElement("p",null,"Find all of your favorite books!")),r.a.createElement("div",{className:"search-area"},r.a.createElement(d,null)),r.a.createElement("div",{className:"book-display"}),r.a.createElement(p,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(20)}},[[9,2,1]]]);
//# sourceMappingURL=main.3d1f7a36.chunk.js.map