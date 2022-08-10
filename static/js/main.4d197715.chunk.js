(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{53:function(e,a,t){e.exports=t(82)},58:function(e,a,t){},82:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(5),i=t.n(c),o=(t(58),t(14)),l=t.n(o),s=t(17),u=t(38),h=t(39),m=t(47),p=t(48),d=t(115),w=t(22),f=t(8),v=t(41),b=t.n(v),g=function(e){return function(){var a=Object(s.a)(l.a.mark((function a(t,r){var n,c,i;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n="https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat("c5107294a60ce0ca5f6135c5edf9f7ef","&units=imperial"),a.next=4,b.a.get(n);case 4:c=a.sent,i=c.data,console.log(c.data),t({type:"GET_DATA",payload:{weather:i}}),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),console.log("ERROR 404:",a.t0.message);case 13:case"end":return a.stop()}}),a,null,[[0,10]])})));return function(e,t){return a.apply(this,arguments)}}()},E=function(e){Object(p.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(u.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=a.call.apply(a,[this].concat(n))).state={userInput:"",isSearching:!1},e.onChange=function(a){var t=e.state.userInput;t=a.target.value,console.log(t),e.setState({userInput:t})},e.searchSubmit=function(){var a=Object(s.a)(l.a.mark((function a(t){var r,n;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r=e.state.userInput,n=e.props.triggerGetData,t.preventDefault(),e.setState({isSearching:!0}),a.next=6,n(r);case 6:e.setState({userInput:"",isSearching:!1});case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e.dateToday=function(e){var a=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],t=e.getFullYear(),r=e.getDate();return"".concat(a," ").concat(r," ").concat(t)},e}return Object(h.a)(t,[{key:"render",value:function(){var e="AppDefault",a=this.state,t=a.isSearching,r=a.userInput,c=this.props.weather;return t&&!c.weather?n.a.createElement("div",null,"Loading..."):(c.weather&&c.weather[0]&&c.weather[0].main&&"Clear"===c.weather[0].main&&(e="AppClear"),c.weather&&c.weather[0]&&c.weather[0].main&&"Clouds"===c.weather[0].main&&(e="AppCloudy"),c.weather&&c.weather[0]&&c.weather[0].main&&"Thunderstorm"===c.weather[0].main&&(e="AppThunderStorm"),c.weather&&c.weather[0]&&c.weather[0].main&&"Clear"===c.weather[0].main&&(e="AppClear"),c.weather&&c.weather[0]&&c.weather[0].main&&"Rain"===c.weather[0].main&&(e="AppRainy"),c.weather&&c.weather[0]&&c.weather[0].main&&"Drizzle"===c.weather[0].main&&(e="AppRainy"),n.a.createElement("div",{className:e},n.a.createElement("main",null,n.a.createElement("div",null,n.a.createElement("form",{className:"search-box",noValidate:!0,autoComplete:"off",onSubmit:this.searchSubmit},n.a.createElement(d.a,{id:"filled-basic",className:"search-bar",variant:"filled",label:"Search US City",onChange:this.onChange,value:r})),"undefined"!=typeof c.main?n.a.createElement("div",null,n.a.createElement("div",{className:"date"},this.dateToday(new Date)),n.a.createElement("div",{className:"location-box"},n.a.createElement("div",{className:"location"},c.name,", ",c.sys.country),n.a.createElement("div",{className:"weather"},c.weather[0].main,", ",c.weather[0].description)),n.a.createElement("div",{className:"temp-box"},n.a.createElement("br",null),n.a.createElement("h2",{className:"temp1"},Math.round(c.main.temp),"\xb0 F"),n.a.createElement("div",{className:"temp2"},"Hi ",Math.round(c.main.temp_max),"\xb0 F Lo ",Math.round(c.main.temp_min),"\xb0 F"))):n.a.createElement("br",null))),n.a.createElement("footer",null,"Made with OpenWeather Current Weather Data API")))}}]),t}(n.a.Component),y=Object(w.b)((function(e){return{weather:e.weatherData.weather}}),(function(e){return{triggerGetData:Object(f.b)(g,e)}}))(E);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=t(45),S=t(49),A={weather:[]};var D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_DATA":var t=a.payload.weather;return Object(S.a)({},e,{weather:t});default:return e}},C=Object(f.c)({weatherData:D}),j=t(46),N=t(114),_=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||f.d,x=Object(f.e)(C,_(Object(f.a)(O.a))),T=Object(j.a)({palette:{primary:{main:"#ffcdd2"},secondary:{main:"#f44336"}}});console.log(T),i.a.render(n.a.createElement(w.a,{store:x},n.a.createElement(N.a,{theme:T},n.a.createElement(n.a.StrictMode,null,n.a.createElement(y,null)),","),","),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[53,1,2]]]);
//# sourceMappingURL=main.4d197715.chunk.js.map