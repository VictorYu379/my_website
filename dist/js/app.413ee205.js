(function(t){function e(e){for(var r,o,s=e[0],c=e[1],l=e[2],v=0,d=[];v<s.length;v++)o=s[v],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},i=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var p=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"00b5":function(t,e,a){t.exports=a.p+"img/general-ledger.c6b198cd.png"},"034f":function(t,e,a){"use strict";var r=a("85ec"),n=a.n(r);n.a},"07d9":function(t,e,a){t.exports=a.p+"img/dollarsign.b3f52199.png"},"12aa":function(t,e,a){t.exports=a.p+"img/invertor_warm.9c7c5ab0.png"},5090:function(t,e,a){t.exports=a.p+"img/Pdf-js_logo.svg.db08d18d.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-app-bar",{attrs:{app:"",dark:"",color:"primary"}},[r("v-container",{staticClass:"d-flex"},[r("div",{staticClass:"d-flex align-center"},[r("span",[t._v("Jingkai Yu ― A software engineer")])]),r("v-spacer"),r("v-tooltip",{attrs:{bottom:"","open-delay":"1500"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[r("v-btn",t._g(t._b({attrs:{href:"https://github.com/VictorYu379",target:"_blank",text:""}},"v-btn",n,!1),a),[r("v-icon",{attrs:{"x-large":""}},[t._v("mdi-github")])],1)]}}])},[r("span",[t._v("Github")])]),r("v-tooltip",{attrs:{bottom:"","open-delay":"1500"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[r("v-btn",t._g(t._b({attrs:{href:"https://linkedin.com/in/victor-yu-549aa3113",target:"_blank",text:""}},"v-btn",n,!1),a),[r("v-icon",{attrs:{"x-large":""}},[t._v("mdi-linkedin")])],1)]}}])},[r("span",[t._v("LinkedIn")])]),r("v-tooltip",{attrs:{bottom:"","open-delay":"1500"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[r("v-btn",t._g(t._b({attrs:{href:"Resume-Yu Jingkai 2020 fall.pdf",target:"_blank",text:""}},"v-btn",n,!1),a),[r("v-icon",{attrs:{"x-large":""}},[t._v("mdi-file-account")])],1)]}}])},[r("span",[t._v("Resume")])])],1)],1),r("v-main",[r("v-container",{staticClass:"mt-10",attrs:{color:"purple"}},[r("div",{attrs:{id:"header"}},[r("h3",[t._v("Make software that works for people")])]),r("div",[r("span",[t._v("Currently enrolled in Georgia Tech as a senior CS undergrad student")])]),r("div",[r("span",[t._v("Previously interned @ HubSpot, Revel Systems, Hisense, ICBC")])]),r("div",[r("span",[t._v("Intern projects involved infrastructure and backend development,")])]),r("div",[r("span",[t._v("including Kubernetes, Apache Kafka, DynamoDB, AWS Lambda, AWS Kinesis")])])]),r("v-img",{attrs:{src:a("8305"),height:"400px",gradient:"to bottom, rgba(7, 2, 37, 1), rgba(15, 43, 92, 0.0) 20%, rgba(15, 43, 92, 0.0) 80%, rgba(7, 2, 37, 1)"}}),r("div",{attrs:{id:"projects"}},[r("h2",[t._v("Artifacts")]),r("v-card",{staticClass:"d-flex",attrs:{height:"300px",raised:"",color:"#0C0A54"}},[r("v-row",{staticClass:"white--text fill-height space-between pl-15 pr-15",attrs:{align:"center"}},[r("v-col",{attrs:{cols:"4"}},[r("div",{staticClass:"subheading"},[t._v("PDF.js with Vue Cli")]),r("div",{staticClass:"body-1"},[t._v("A refactoring of Mozilla PDF.js, it replaces the default plain HTML and vanilla JavaScript with Vue framework. This project adopted Vue CLI and Vueetify to streamline development.")]),r("div",[r("v-btn",{attrs:{icon:"",dark:"",href:"https://github.com/VictorYu379/pdfjsWithVueCli-demo"}},[r("v-icon",{attrs:{large:""}},[t._v("mdi-github")])],1)],1)]),r("v-spacer"),r("v-col",{attrs:{cols:"2"}},[r("v-img",{attrs:{src:a("cf05"),"max-height":"200px",contain:""}})],1),r("v-col",{attrs:{cols:"2"}},[r("v-img",{attrs:{src:a("5e2a"),"max-height":"50px",contain:""}})],1),r("v-col",{attrs:{cols:"2"}},[r("v-img",{attrs:{src:a("5090"),"max-height":"200px",contain:""}})],1),r("v-spacer")],1)],1),r("v-card",{staticClass:"d-flex",attrs:{height:"300px",raised:"",color:"#0c0a73"}},[r("v-row",{staticClass:"white--text fill-height space-between pl-15 pr-15",attrs:{align:"center"}},[r("v-col",{attrs:{cols:"3"}},[r("div",{staticClass:"subheading"},[t._v("Invertor")]),r("div",{staticClass:"body-1"},[t._v("A chrome extension PDF viewer in dark mode. Based on Mozilla PDF.js source code, it can view documents in multiple color themes in order to provide better eye protection.")]),r("div",[r("v-btn",{attrs:{icon:"",dark:"",href:"https://github.com/VictorYu379/Invertor"}},[r("v-icon",{attrs:{large:""}},[t._v("mdi-github")])],1)],1)]),r("v-spacer"),r("v-col",{attrs:{cols:"2"}},[r("v-img",{attrs:{src:a("c7a6"),"max-height":"200px",contain:""}})],1),r("v-col",{attrs:{cols:"1"}},[r("v-img",{attrs:{src:a("5e2a"),"max-height":"50px",contain:""}})],1),r("v-col",{attrs:{cols:"2"}},[r("v-img",{attrs:{src:a("5e4a"),"max-height":"200px",contain:""}})],1),r("v-col",{attrs:{cols:"1"}},[r("v-img",{attrs:{src:a("5e2a"),"max-height":"50px",contain:""}})],1),r("v-col",{attrs:{cols:"2"}},[r("v-img",{attrs:{src:a("12aa"),"max-height":"200px",contain:""}})],1)],1)],1),r("v-card",{staticClass:"d-flex",attrs:{height:"300px",raised:"",color:"#012e30"}},[r("v-row",{staticClass:"white--text fill-height space-between pl-15 pr-15",attrs:{align:"center"}},[r("v-col",{attrs:{cols:"4"}},[r("div",{staticClass:"subheading"},[t._v("Finanacial Management")]),r("div",{staticClass:"body-1"},[t._v("A web app for managing your personal daily expenditure. Made with Vue.js, MySQL, Express and Node.js. Basic login and expenditure logging have been implemented.")]),r("div",[r("v-btn",{attrs:{icon:"",dark:"",href:"https://github.com/VictorYu379/Fin_Man"}},[r("v-icon",{attrs:{large:""}},[t._v("mdi-github")])],1)],1)]),r("v-spacer"),r("v-col",{attrs:{cols:"2"}},[r("v-img",{attrs:{src:a("07d9"),"max-height":"200px",contain:""}})],1),r("v-col",{attrs:{cols:"1"}},[r("v-img",{attrs:{src:a("5e2a"),"max-height":"50px",contain:""}})],1),r("v-col",{attrs:{cols:"2"}},[r("v-img",{attrs:{src:a("00b5"),"max-height":"200px",contain:""}})],1),r("v-spacer")],1)],1)],1)],1)],1)},i=[],o={name:"App",title:"Jingkai Yu's Space",data:function(){return{colors:["primary","secondary","yellow darken-2","red","orange"],model:0}}},s=o,c=(a("034f"),a("2877")),l=a("6544"),p=a.n(l),v=a("7496"),d=a("40dc"),u=a("8336"),g=a("b0af"),f=a("62ad"),h=a("a523"),m=a("132d"),b=a("adda"),x=a("f6c4"),_=a("0fd9"),y=a("2fa4"),w=a("3a2f"),k=Object(c["a"])(s,n,i,!1,null,null,null),C=k.exports;p()(k,{VApp:v["a"],VAppBar:d["a"],VBtn:u["a"],VCard:g["a"],VCol:f["a"],VContainer:h["a"],VIcon:m["a"],VImg:b["a"],VMain:x["a"],VRow:_["a"],VSpacer:y["a"],VTooltip:w["a"]});var V=a("f309");r["a"].use(V["a"]);var j=new V["a"]({theme:{themes:{light:{primary:"#0f2b5c",secondary:"#b0bec5",accent:"#8c9eff",error:"#b71c1c"}}}});function S(t){var e=t.$options.title;if(e)return"function"===typeof e?e.call(t):e}var M={created:function(){var t=S(this);t&&(document.title=t)}};r["a"].config.productionTip=!1,r["a"].mixin(M),new r["a"]({vuetify:j,render:function(t){return t(C)}}).$mount("#app")},"5e2a":function(t,e,a){t.exports=a.p+"img/rightarrow.47396597.png"},"5e4a":function(t,e,a){t.exports=a.p+"img/invertor_dark.1a47c46b.png"},8305:function(t,e,a){t.exports=a.p+"img/ruihetu-crop.9a783703.jpeg"},"85ec":function(t,e,a){},c7a6:function(t,e,a){t.exports=a.p+"img/invertor-before.af5b0695.png"},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.413ee205.js.map