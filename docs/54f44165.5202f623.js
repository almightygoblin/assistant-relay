(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{114:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return n?a.a.createElement(m,l({ref:t},c,{components:n})):a.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(6),i=(n(0),n(114)),o={id:"installation",title:"Installation",description:"How to install Assistant Relay"},l={id:"getting-started/installation",title:"Installation",description:"How to install Assistant Relay",source:"@site/docs/getting-started/installation.md",permalink:"/assistant-relay/docs/getting-started/installation",sidebar:"docs",previous:{title:"Contributing",permalink:"/assistant-relay/docs/contributing"},next:{title:"Configuration",permalink:"/assistant-relay/docs/getting-started/configuration"}},s=[{value:"Requirements",id:"requirements",children:[]},{value:"Installation",id:"installation",children:[]}],c={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"At its core, Assistant Relay is powered by Node.js"),Object(i.b)("h2",{id:"requirements"},"Requirements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://nodejs.org/en/"}),"Node.js")," version >= 10.13.0 (this can be checked by running ",Object(i.b)("inlineCode",{parentName:"li"},"node -v"),"). If you require multiple Node versions, you can use ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/nvm-sh/nvm"}),"NVM")," to manage multiple versions on a single machine"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.python.org/downloads/"}),"Python")," version >= 3.7 (If you're running Assistant Relay version <= 3.2, this is not required)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://pm2.keymetrics.io/"}),"PM2")," will be installed as a pre-requisite. If you do not already have it installed, please install after Node.js by running ",Object(i.b)("inlineCode",{parentName:"li"},"npm i pm2 -g")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/greghesp/assistant-relay/releases"}),"Assistant Relay")," - Make sure you download the latest ",Object(i.b)("strong",{parentName:"li"},"release.zip"),".  Do not download the Source Code!")),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"To install Assistant Relay, unzip the contents of ",Object(i.b)("inlineCode",{parentName:"p"},"release.zip")," to a folder of your choosing. For these documents, the folder name will be ",Object(i.b)("inlineCode",{parentName:"p"},"assistant-relay")),Object(i.b)("p",null,"In the ",Object(i.b)("inlineCode",{parentName:"p"},"assistant-relay")," folder, open a terminal/command window and run the below command to install the required dependencies"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"npm run i\n")))}p.isMDXComponent=!0}}]);