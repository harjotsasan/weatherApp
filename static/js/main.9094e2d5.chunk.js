(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{22:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(17),i=n.n(r),s=(n(22),n(4)),o=n.n(s),u=n(7),d=n(3),l=n(8),j=n.n(l),h=n(5),f=(n(42),n(43),n(0)),p=function(e){var t=Object(a.useState)(""),n=Object(d.a)(t,2),c=n[0],r=n[1];return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:"weatherCardContainer",children:Object(f.jsx)("div",{className:"weatherCard",children:Object(f.jsxs)("form",{children:[Object(f.jsx)("input",{type:"text",value:c,onChange:function(e){var t=e.target.value;r(t)},placeholder:"Enter the City...",name:"cityInputField",autoFocus:!0}),Object(f.jsx)("button",{onClick:function(t){t.preventDefault(),e.theCity(c)},children:Object(f.jsx)("i",{className:"fas fa-search-location",children:" Search"})})]})})})})},b=function(){var e=Object(h.useState)(""),t=Object(d.a)(e,2),n=t[0],a=t[1],c=Object(h.useState)({}),r=Object(d.a)(c,2),i=r[0],s=r[1],l="http://api.openweathermap.org/data/2.5/weather?q=".concat(n,"&appid=").concat("a6fa573d63f563261ef96a20068752c8","&units=metric");Object(h.useEffect)((function(){b()}));var b=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get(l);case 2:t=e.sent,console.log(t.data),s(t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://geolocation-db.com/json/afa4d000-8eb9-11eb-a6ff-2538b793e762");case 2:t=e.sent,n="".concat(t.data.city),console.log(t),a(n),b();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:"undefined"!=typeof i.main&&i.main.temp>15?"app warm":"app",children:Object(f.jsxs)("div",{className:"linearGradientBackGround",children:[Object(f.jsx)(p,{theCity:function(e){a(e),b(),console.log("".concat(e))}}),Object(f.jsx)("div",{className:"currentLocationButtonContainer",children:Object(f.jsxs)("button",{className:"currentLocation",onClick:m,children:[" ",Object(f.jsx)("i",{class:"fas fa-map-marker-alt"})," Current location"]})}),"undefined"!=typeof i.main?Object(f.jsxs)("div",{className:"container",children:[Object(f.jsxs)("div",{className:"cityCountry",children:[n,", ",i.sys.country]}),Object(f.jsxs)("div",{className:"degreeCelsius",children:[Math.round(i.main.temp),"\xb0c"]}),Object(f.jsx)("div",{children:i.weather[0].description})]}):""]})})})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(b,{})}),document.getElementById("root")),m()}},[[45,1,2]]]);
//# sourceMappingURL=main.9094e2d5.chunk.js.map