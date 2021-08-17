"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[337],{3905:function(n,e,t){t.d(e,{Zo:function(){return u},kt:function(){return c}});var a=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function p(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},l=Object.keys(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var o=a.createContext({}),s=function(n){var e=a.useContext(o),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},u=function(n){var e=s(n.components);return a.createElement(o.Provider,{value:e},n.children)},m={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,l=n.originalType,o=n.parentName,u=p(n,["components","mdxType","originalType","parentName"]),d=s(t),c=r,k=d["".concat(o,".").concat(c)]||d[c]||m[c]||l;return t?a.createElement(k,i(i({ref:e},u),{},{components:t})):a.createElement(k,i({ref:e},u))}));function c(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var l=t.length,i=new Array(l);i[0]=d;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=n,p.mdxType="string"==typeof n?n:r,i[1]=p;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3188:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),i=["components"],p={sidebar_position:3},o="Type",s={unversionedId:"TypeScript/type",id:"TypeScript/type",isDocsHomePage:!1,title:"Type",description:"\uc5ec\ub7ec \uac00\uc9c0 \ud0c0\uc785",source:"@site/docs/TypeScript/2.type.md",sourceDirName:"TypeScript",slug:"/TypeScript/type",permalink:"/docs/TypeScript/type",editUrl:"https://github.com/vueveloper/vueveloper.github.io/docs/TypeScript/2.type.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Type System",permalink:"/docs/TypeScript/type-system"},next:{title:"1. \ud568\uc218 \uae30\ubcf8",permalink:"/docs/TypeScript/\ud568\uc218/\ud568\uc218_\uae30\ubcf8"}},u=[{value:"\uc5ec\ub7ec \uac00\uc9c0 \ud0c0\uc785",id:"\uc5ec\ub7ec-\uac00\uc9c0-\ud0c0\uc785",children:[{value:"any",id:"any",children:[]},{value:"unknown",id:"unknown",children:[]},{value:"boolean",id:"boolean",children:[]},{value:"number",id:"number",children:[]},{value:"bigint",id:"bigint",children:[]},{value:"string",id:"string",children:[]},{value:"symbol",id:"symbol",children:[]},{value:"\uac1d\uccb4 \ud0c0\uc785",id:"\uac1d\uccb4-\ud0c0\uc785",children:[]},{value:"\ubc30\uc5f4",id:"\ubc30\uc5f4",children:[]},{value:"\ud29c\ud50c",id:"\ud29c\ud50c",children:[]},{value:"enum(\uc5f4\uac70\ud615)",id:"enum\uc5f4\uac70\ud615",children:[]},{value:"null, undefined, void, never",id:"null-undefined-void-never",children:[]}]}],m={toc:u};function d(n){var e=n.components,t=(0,r.Z)(n,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"type"},"Type"),(0,l.kt)("h2",{id:"\uc5ec\ub7ec-\uac00\uc9c0-\ud0c0\uc785"},"\uc5ec\ub7ec \uac00\uc9c0 \ud0c0\uc785"),(0,l.kt)("h3",{id:"any"},"any"),(0,l.kt)("p",null,"\ud504\ub85c\uadf8\ub798\uba38\uc640 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8 \ub458 \ub2e4 \uc54c \uc218 \uc5c6\ub294 \uc0c1\ud669\uc5d0\uc11c \uae30\ubcf8 \ud0c0\uc785\uc778 ",(0,l.kt)("inlineCode",{parentName:"p"},"any"),"\ub85c \uac00\uc815\ud55c\ub2e4."),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"unknown"},"unknown"),(0,l.kt)("p",null,"\ud0c0\uc785\uc744 \ubbf8\ub9ac \uc54c \uc218 \uc5c6\ub294 \uac12\uc774 \uc788\uc744 \ub54c\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"any")," \ub300\uc2e0, ",(0,l.kt)("inlineCode",{parentName:"p"},"unknown"),"\uc744 \uc0ac\uc6a9\ud558\uba74 \ub41c\ub2e4. ",(0,l.kt)("inlineCode",{parentName:"p"},"unknown"),"\uc740 \ud0c0\uc785\uc744 \uc815\uc81c\ud558\uae30 \uc804\uae4c\uc9c0\ub294 \ud0c0\uc785\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub3c4\ub85d \uac15\uc81c\ud55c\ub2e4. \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uc5f0\uc0b0\uc790\ub294 (",(0,l.kt)("inlineCode",{parentName:"p"},"=="),", ",(0,l.kt)("inlineCode",{parentName:"p"},"==="),", ",(0,l.kt)("inlineCode",{parentName:"p"},"||")," , ",(0,l.kt)("inlineCode",{parentName:"p"},"&&"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"?"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"!"),")\uc774\ub2e4. \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc758 ",(0,l.kt)("inlineCode",{parentName:"p"},"typeof"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"instanceof")," \uc5f0\uc0b0\uc790\ub85c \uc815\uc81c\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"let a: unknown = 30 // unknown\nlet b = a === 30 // boolean\nlet c = a + 10 // error\nif (typeof a === number) {\n    let d = a + 10\n}\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\ud0c0\uc785\uc2a4\ud2b8\ub9bd\ud2b8\uac00 \ubb34\uc5b8\uac00\uc758 \ud0c0\uc785\uc744 ",(0,l.kt)("inlineCode",{parentName:"li"},"unknwon"),"\uc774\ub77c\uace0 \ucd94\ub860\ud558\ub294 \uacbd\uc6b0\ub294 \uc5c6\ub2e4. ",(0,l.kt)("inlineCode",{parentName:"li"},"unknown")," \ud0c0\uc785\uc744 \uc0ac\uc6a9\ud558\uace0\uc790 \ud55c\ub2e4\uba74 \uac1c\ubc1c\uc790\uac00 \uba85\uc2dc\uc801\uc73c\ub85c \uc124\uc815\ud574\uc57c\ud55c\ub2e4."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"unknown")," \ud0c0\uc785\uc774 \uc544\ub2cc \uac12\uacfc ",(0,l.kt)("inlineCode",{parentName:"li"},"unknown")," \ud0c0\uc785\uc778 \uac12\uacfc \ube44\uad50\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"unknwon")," \uac12\uc774 \ud2b9\uc815 \ud0c0\uc785\uc774\ub77c\uace0 \uac00\uc815\ud558\uace0 \ud574\ub2f9 \ud0c0\uc785\uc5d0\uc11c \uc9c0\uc6d0\ud558\ub294 \ub3d9\uc791\uc744 \uc218\ud589\ud560 \uc218 \uc5c6\ub2e4. \uba3c\uc800 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uac8c \ud574\ub2f9 \uac12\uc774 \ud2b9\uc815 \ud0c0\uc785\uc784\uc744 \uc99d\uba85\ud574\uc57c\ud55c\ub2e4.")),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"boolean"},"boolean"),(0,l.kt)("p",null,"boolean \ud0c0\uc785\uc740 ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," \ub450 \uac00\uc9c0 \uac12\uc744 \uac16\ub294\ub2e4. "),(0,l.kt)("p",null,"\uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uc5f0\uc0b0\uc790: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"==, ===, || , &&, ?, !\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"let a = true; // boolean\nlet b = false; // boolean\nconst c = true; // true. \ud0c0\uc785 \ub9ac\ud130\ub7f4\nlet d: boolean = true; // boolean\nlet e: true = true; // true. \ud0c0\uc785 \ub9ac\ud130\ub7f4\nlet f: false = true // error. false \ud0c0\uc785\uc744 true \ud0c0\uc785\uc5d0 \ud560\ub2f9\ud560 \uc218 \uc5c6\uc74c.\n")),(0,l.kt)("br",null),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("strong",{parentName:"p"},"\ud0c0\uc785 \ub9ac\ud130\ub7f4"),(0,l.kt)("br",null),"\uc624\uc9c1 \ud558\ub098\uc758 \uac12\uc744 \ub098\ud0c0\ub0b4\ub294 \ud0c0\uc785"))),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"number"},"number"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"number")," \ud0c0\uc785\uc740 \ubaa8\ub4e0 \uc22b\uc790(\uc815\uc218, \uc18c\uc218, \uc591\uc218, \uc74c\uc218, Infinity, NaN \ub4f1)\uc758 \uc9d1\ud569\uc774\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"let a = 1234 // number\nvar b = Infinity * 0.10 // number\nconst c = 5678 // 5678\nlet d = a < b // boolean\nlet e: number = 100 // number\nlet f: 26.218 = 26.218 // 26.218\nlet g: 26.218 = 10 // error. 26.218 \ud0c0\uc785\uc5d0 \ud560\ub2f9\ud560 \uc218 \uc5c6\uc74c\n")),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"bigint"},"bigint"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"number")," \ubcf4\ub2e4 \ub354 \ud070 \uc218\ub97c \ud45c\ud604\ud560 \uc218 \uc788\ub2e4. ",(0,l.kt)("inlineCode",{parentName:"p"},"number"),"\ub294 253\uae4c\uc9c0\uc758 \uc815\uc218\ub97c \ud45c\ud604\ud560 \uc218 \uc788\ub2e4. \uc22b\uc790\ud615\uacfc \uad00\ub828\ub41c \uc5f0\uc0b0\uc790\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"let a = 1234n // bigint\nconst b = 5678n // 5678n\nvar c = a + b // bigint\nlet d = a < 1235 // boolean\nlet e = 88.5n // error. bigint \ub9ac\ud130\ub7f4\uc740 \ubc18\ub4dc\uc2dc \uc815\uc218\nlet f: bigint = 100n // bigint\nlet g: 100n = 100n // 100n\nlet h: bigint = 100 // error. bigint\uc5d0 \ud560\ub2f9\ud560 \uc218 \uc5c6\uc74c\n")),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"string"},"string"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"let a = 'hello' // string\nvar b = 'python' // string\nconst c = '!' // '!'\nlet d = a + ' ' + b + c // string\nlet e: string = 'react' // string\nlet f: 'vue' = 'vue' // 'vue'\nlet g: 'vue' = 'angular' // error. 'angular'\ub97c 'vue'\uc5d0 \ud560\ub2f9\ud560 \uc218 \uc5c6\uc74c\n")),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"symbol"},"symbol"),(0,l.kt)("p",null,"\uac1d\uccb4\uc640 \ub9f5\uc5d0\uc11c \ubb38\uc790\uc5f4 \ud0a4\ub97c \ub300\uc2e0\ud558\ub294 \uc6a9\ub3c4\ub85c \uc0ac\uc6a9\ud55c\ub2e4. \uc2ec\ubc8c \ud0a4\ub97c \uc0ac\uc6a9\ud558\uba74 \uc0ac\ub78c\ub4e4\uc774 \uc798 \uc54c\ub824\uc9c4 \ud0a4\ub9cc \uc0ac\uc6a9\ud558\ub3c4\ub85d \uac15\uc81c\ud560 \uc218 \uc788\uc73c\ubbc0\ub85c \ud0a4\ub97c \uc798\ubabb \uc124\uc815\ud558\ub294 \uc2e4\uc218\ub97c \ubc29\uc9c0\ud55c\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"let a = Symbol('a') // symbol\nlet b: symbol = Symbol('b') // symbol\nvar c = a === b // boolean\nlet d = a + 'x' // error. '+' \uc5f0\uc0b0\uc744 symbol\uc5d0 \uc801\uc6a9 \ubd88\uac00\nconst e = Symbol('e') // typeof e\nconst f: unique symbol = Symbol('f') // typeof f\nlet g: unique symbol = Symbol('g') // error. unique type\uc740 \ubc18\ub4dc\uc2dc const\nlet h = e === e // boolean\nlet i = e === f // error. unique symbol \ud0c0\uc785\uc740 \uc11c\ub85c \uacb9\uce58\ub294 \uc77c\uc774 \uc5c6\uc73c\ubbc0\ub85c \ubc18\ub4dc\uc2dc false\n")),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"\uac1d\uccb4-\ud0c0\uc785"},"\uac1d\uccb4 \ud0c0\uc785"),(0,l.kt)("p",null,"\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\uc758 ",(0,l.kt)("strong",{parentName:"p"},"\uac1d\uccb4 \ud0c0\uc785\uc740 \uac1d\uccb4\uc758 \ud615\ud0dc\ub97c \uc815\uc758"),"\ud55c\ub2e4. \uac1d\uccb4 \ud0c0\uc785\ub9cc\uc73c\ub85c\ub294 \uac04\ub2e8\ud55c \uac1d\uccb4(",(0,l.kt)("inlineCode",{parentName:"p"},"{}"),"\ub85c \ub9cc\ub4e0 \uac1d\uccb4)\uc640 \ubcf5\uc7a1\ud55c \uac1d\uccb4(",(0,l.kt)("inlineCode",{parentName:"p"},"new"),"\ub97c \uc0ac\uc6a9\ud574 \ub9cc\ub4e0 \uac1d\uccb4)\ub97c \uad6c\ubd84\ud560 \uc218 \uc5c6\ub2e4. \uc774\ub294 ",(0,l.kt)("strong",{parentName:"p"},"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uac00 \uad6c\uc870 \uae30\ubc18 \ud0c0\uc785\uc744 \uac16\ub3c4\ub85d \uc124\uacc4\ub418\uc5c8\uae30 \ub54c\ubb38"),"\uc774\ub2e4. \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\ub3c4 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uc2a4\ud0c0\uc77c\uc744 \uc120\ud638\ud55c\ub2e4."),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("strong",{parentName:"p"},"\uad6c\uc870 \uae30\ubc18 \ud0c0\uc785\ud654"),(0,l.kt)("br",null),"\n\uad6c\uc870 \uae30\ubc18 \ud0c0\uc785\ud654\uc5d0\uc11c\ub294 \uac1d\uccb4\uc758 \uc774\ub984\uc5d0 \uc0c1\uad00\uc5c6\uc774 ",(0,l.kt)("strong",{parentName:"p"},"\uac1d\uccb4\uac00 \uc5b4\ub5a4 \ud504\ub85c\ud37c\ud2f0\ub97c \uac16\uace0 \uc788\ub294\uc9c0 \ub530\uc9c4\ub2e4"),". \uc77c\ubd80 \uc5b8\uc5b4\uc5d0\uc11c\ub294 \ub355 \ud0c0\uc774\ud551\uc774\ub77c\uace0 \ud55c\ub2e4. (\uac89 \ud45c\uc9c0\ub9cc \ubcf4\uace0 \ucc45\uc744 \ud310\ub2e8\ud558\uc9c0 \uc54a\ub294 \uac83\uacfc \uac19\uc740 \uc6d0\ub9ac\ub2e4.)"))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("strong",{parentName:"p"},"\uac1d\uccb4 \ub9ac\ud130\ub7f4 \ubb38\ubc95"),(0,l.kt)("br",null),'\n"\uc774\ub7f0 \ud615\ud0dc\uc758 \ubb3c\uac74\uc774 \uc788\uc5b4!"\ub77c\uace0 \ub9d0\ud558\ub294 \uac83\uc774\ub2e4.'))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"let a: {\n    firstName: string\n    lastName: string\n} = {\n    firstName: 'david',\n    lastName: 'thomas'\n}\n")),(0,l.kt)("p",null,"\ud504\ub85c\ud37c\ud2f0\ub97c \ucd94\uac00\ud558\uac70\ub098 \ud544\uc694\ud55c \ud504\ub85c\ud37c\ud2f0\ub97c \uc81c\uacf5\ud558\uc9c0 \uc54a\uc73c\uba74 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud55c\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"let a: {b: number}\na = {} // error. \ud0c0\uc785\uc5d0 \ud544\uc694\ud55c 'b'\uac00 \uc5c6\uc74c\na = {\n    b: 1,\n    c: 5\n} // error. \uac1d\uccb4 \ub9ac\ud130\ub7f4\uc740 \uc54c\ub824\uc9c4 \ud504\ub85c\ud37c\ud2f0\ub9cc \uc9c0\uc815\ud560 \uc218 \uc788\uc74c\n")),(0,l.kt)("p",null,"\uadf8\ub807\ub2e4\uba74 \uc5b4\ub5a4 \ud504\ub85c\ud37c\ud2f0\ub294 \uc120\ud0dd\ud615\uc774\uace0, \ub098\uc911\uc5d0 \ud504\ub85c\ud37c\ud2f0\uac00 \ucd94\uac00\ub420 \uc218 \uc788\ub2e4\ub294 \uac78 \uc54c\ub824\uc904 \uc218 \uc788\uc744\uae4c?"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"let a: {\n    b: number\n    c?: string\n    [key: string]: boolean\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"a = { b: 1 }\na = { b: 1, c: undefined }\na = { b: 1, c: 'python' }\na = { b: 1, c: 'python' 'hello': true}\n")),(0,l.kt)("br",null),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("strong",{parentName:"p"},"\uc778\ub371\uc2a4 \uc2dc\uadf8\ub2c8\uccd0"),(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"[key: T]: U")," \uac19\uc740 \ubb38\ubc95\uc744 ",(0,l.kt)("strong",{parentName:"p"},"\uc778\ub371\uc2a4 \uc2dc\uadf8\ub2c8\uccd0"),"\ub77c\uace0 \ubd80\ub974\uba70 ",(0,l.kt)("strong",{parentName:"p"},"\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\uc5d0 \uc5b4\ub5a4 \uac1d\uccb4\uac00 \uc5ec\ub7ec \ud0a4\ub97c \uac00\uc9c8 \uc218 \uc788\uc74c"),"\uc744 \uc54c\ub824\uc900\ub2e4. ",(0,l.kt)("strong",{parentName:"p"},'"\uc774 \uac1d\uccb4\uc5d0\uc11c \ubaa8\ub4e0 T \ud0c0\uc785\uc758 \ud0a4\ub294 U \ud0c0\uc785\uc758 \uac12\uc744 \uac16\ub294\ub2e4"'),"\ub77c\uace0 \ud574\uc11d\ud560 \uc218 \uc788\ub2e4. \uc778\ub371\uc2a4 \uc2dc\uadf8\ub2c8\uccd0\ub97c \uc774\uc6a9\ud558\uba74 \uba85\uc2dc\uc801\uc73c\ub85c \uc7a5\uc758\ud55c \ud0a4 \uc678\uc5d0 \ub2e4\uc591\ud55c \ud0a4\ub97c \uac1d\uccb4\uc5d0 \uc548\uc804\ud558\uac8c \ucd94\uac00\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("p",{parentName:"div"},"\uc778\ub371\uc2a4 \uc2dc\uadf8\ub2c8\uccd0\uc5d0\uc11c \ud55c \uac00\uc9c0 \ubc18\ub4dc\uc2dc \uc9c0\ucf1c\uc57c\ud560 \uaddc\uce59\uc774 \uc788\ub2e4. \ud0a4(",(0,l.kt)("inlineCode",{parentName:"p"},"T"),")\ub294 \ubc18\ub4dc\uc2dc ",(0,l.kt)("inlineCode",{parentName:"p"},"number"),"\ub098 ",(0,l.kt)("inlineCode",{parentName:"p"},"string")," \ud0c0\uc785\uc5d0 \ud560\ub2f9\ud560 \uc218 \uc788\ub294 \ud0c0\uc785\uc774\uc5b4\uc57c\ud55c\ub2e4."),(0,l.kt)("p",{parentName:"div"},"\ud0a4 \uc774\ub984\uc740  \uc6d0\ud558\ub294 \uc774\ub984\uc744 \uac00\uc838\ub2e4 \ubc14\uafd4\ub3c4 \ub41c\ub2e4. \uc989, key\uac00 \uc544\ub2c8\uc5b4\ub3c4 \ub41c\ub2e4."))),(0,l.kt)("br",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"let airplaneSeatingAssignments: {\n    [seatNumber: string]: string\n} = {\n    '34D': 'David Thomas'\n    '34E': 'Mark'\n}\n")),(0,l.kt)("p",null,"\uac1d\uccb4 \ud0c0\uc785\uc744 \uc815\uc758\ud560 \ub54c ",(0,l.kt)("inlineCode",{parentName:"p"},"readonly")," \ud0a4\uc6cc\ub4dc\ub97c \uc0ac\uc6a9\ud574 \uc77d\uae30 \uc804\uc6a9\uc73c\ub85c \uc815\uc758\ud560 \uc218 \uc788\ub2e4. \uc989, \uc815\uc758\ud55c \ud544\ub4dc\uc5d0 \ucd08\uae43\uac12\uc744 \ud560\ub2f9\ud55c \ub2e4\uc74c\uc5d0\ub294 \uadf8 \uac12\uc744 \ubc14\uafc0 \uc218 \uc5c6\ub2e4. \uac1d\uccb4 \ud504\ub85c\ud37c\ud2f0\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"p"},"const"),"\ub97c \uc801\uc6a9\ud55c \ub4ef\ud55c \ud6a8\uacfc\ub97c \ub0b8\ub2e4."),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"\ubc30\uc5f4"},"\ubc30\uc5f4"),(0,l.kt)("p",null,"\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\ub294 \ucd08\uae30\ud654\ud560 \ub54c \ubc30\uc5f4\uc744 \ucd94\ub860\ud55c\ub2e4. \ube48 \ubc30\uc5f4\uc744 \uc120\uc5b8\ud558\uac8c \ub418\uba74 ",(0,l.kt)("inlineCode",{parentName:"p"},"any[]"),"\ub85c \ucd94\uce21\ud55c\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"let a = ['red'] // string[]\na.push('blue') // string[]\na.push(10) // error. string \ud0c0\uc785\uc758 \ubc30\uc5f4\uc5d0 number \ud0c0\uc785 \uc778\uc218\ub97c \ud560\ub2f9\ud560 \uc218 \uc5c6\uc74c\n\nlet b = [1] // number[]\nb.push(10) // number[]\nb.push('python') // error. number \ud0c0\uc785 \ubc30\uc5f4\uc5d0 string \ud0c0\uc785 \uc778\uc218\ub97c \ud560\ub2f9\ud560 \uc218 \uc5c6\uc74c\n\nlet c = [1, 'python'] // (number | string)[]\nc.push(5) // (number | string)[]\nc.push(true) // error.\n\nlet f = [] // any[]\nf.push(1) // number[]\nf.push('python') // string[]\n")),(0,l.kt)("p",null,"\uc77d\uae30 \uc804\uc6a9\uc744 \uc9c0\uc6d0\ud55c\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"type A = readonly string[]\ntype B = Readonly<string[]>\ntype C = ReadonlyArray<string>\n")),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"\ud29c\ud50c"},"\ud29c\ud50c"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\ubc30\uc5f4\uc758 \uc11c\ube0c \ud0c0\uc785"),"\uc774\ub2e4. \ud29c\ud50c\uc740 \uae38\uc774\uac00 \uace0\uc815\ub418\uc5b4 \uc788\uace0, \uac01 \uc778\ub371\uc2a4\uc758 \ud0c0\uc785\uc774 \uc54c\ub824\uc9c4 \ubc30\uc5f4\uc758 \uc77c\uc885\uc774\ub2e4. \ub2e4\ub978 \ud0c0\uc785\uacfc \ub2ec\ub9ac ",(0,l.kt)("strong",{parentName:"p"},"\ud29c\ud50c\uc740 \uc120\uc5b8\ud560 \ub54c \ud0c0\uc785\uc744 \uba85\uc2dc"),"\ud574\uc57c\ud55c\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"let a: number = [1]\nlet b: [string, string, number] = ['David', 'Thomas', 1965]\n\n")),(0,l.kt)("p",null,"\uc120\ud0dd\ud615\uc744 \uc9c0\uc6d0\ud55c\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"// \ubc29\ud5a5\uc5d0 \ub530\ub77c \ub2e4\ub978 \uac12\uc744 \uac16\ub294 \uae30\ucc28 \uc694\uae08 \ubc30\uc5f4\nlet trainFares: [number, number?][] = [\n    [3.75],\n    [8.25, 7.70],\n    [10.50]\n]\n")),(0,l.kt)("p",null,"\ub610\ud55c \ucd5c\uc18c \uae38\uc774\ub97c \uac16\ub3c4\ub85d \uc9c0\uc815\ud560 \ub54c\ub294 \ub098\uba38\uc9c0 \uc694\uc18c(",(0,l.kt)("inlineCode",{parentName:"p"},"..."),")\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"let friends: [string, ...string[]] = ['Sara', 'Tali', 'Chloe']\nlet list: [number, boolean, ...string[]] = [1, false, 'a', 'b', 'c']\n")),(0,l.kt)("p",null,"\uc77d\uae30 \uc804\uc6a9\uc744 \uc9c0\uc6d0\ud55c\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"type A = readonly [number, string] // readonly [number, string]\ntype B = Readonly<[number, string]> // readonly [number, string]\n")),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"enum\uc5f4\uac70\ud615"},"enum(\uc5f4\uac70\ud615)"),(0,l.kt)("p",null,"\ud574\ub2f9 \ud0c0\uc785\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 ",(0,l.kt)("strong",{parentName:"p"},"\uac12\uc744 \uc5f4\uac70\ud558\ub294 \uae30\ubc95"),"\uc774\ub2e4. ",(0,l.kt)("strong",{parentName:"p"},"\uc5f4\uac70\ud615\uc740 \ud0a4\ub97c \uac12\uc5d0 \ud560\ub2f9\ud558\ub294 \uc21c\uc11c\uac00 \uc5c6\ub294 \uc790\ub8cc\uad6c\uc870"),"\uc774\ub2e4. \ud0a4\uac00 \ucef4\ud30c\uc77c \ud0c0\uc784\uc5d0 \uace0\uc815\ub41c \uac1d\uccb4\ub77c\uace0 \uc0dd\uac01\ud558\uba74 \uc27d\ub2e4. \ub530\ub77c\uc11c \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\ub294 \ud0a4\uc5d0 \uc811\uadfc\ud560 \ub54c \uc8fc\uc5b4\uc9c4 \ud0a4\uac00 \uc2e4\uc81c \uc874\uc7ac\ud558\ub294\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("br",null),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\uc5f4\uac70\ud615\uc758 \uc774\ub984\uc740 \ub2e8\uc218 \uba85\uc0ac\ub85c \uc4f0\uace0, \uccab \ubb38\uc790\ub294 \ub300\ubb38\uc790\ub85c \ud558\ub294 \uac83\uc774 \uad00\ub840\uc774\ub2e4. \ud0a4\ub3c4 \uc55e \uae00\uc790\ub97c \ub300\ubb38\uc790\ub85c \ud45c\uc2dc\ud55c\ub2e4."))),(0,l.kt)("br",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"enum Language {\n    English,\n    Spanish,\n    Russian\n}\n")),(0,l.kt)("p",null,"\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\ub294 \uc790\ub3d9\uc73c\ub85c ",(0,l.kt)("strong",{parentName:"p"},"\uc5f4\uac70\ud615\uc758 \uac01 \uba64\ubc84\uc5d0 \uc801\uc808\ud55c \uc22b\uc790\ub97c \ucd94\ub860\ud574 \ud560\ub2f9"),"\ud558\uc9c0\ub9cc, \uba85\uc2dc\uc801\uc73c\ub85c \uc124\uc815\ud560 \uc218\ub3c4 \uc788\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"enum Language {\n    English = 0,\n    Spanish = 1,\n    Russian = 2\n}\n")),(0,l.kt)("p",null,"\ubcf4\ud1b5 \uac1d\uccb4\uc5d0\uc11c \uac12\uc744 \uac00\uc838\uc62c \ub54c\ucc98\ub7fc \uc810 \ub610\ub294 \uad04\ud638 \ud45c\uae30\ubc95\uc73c\ub85c \uc5f4\uac70\ud615 \uac12\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"let myFirstLanguage = Language.English\nlet mySecondLanguage = Language[Spanish]\n")),(0,l.kt)("p",null,"\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\ub294 \uc5ec\ub7ec \uc5f4\uac70\ud615 \uc815\uc758 \uc911 \ud55c\uac00\uc9c0 \uac12\ub9cc \ucd94\ub860\ud560 \uc218 \uc788\uc73c\ubbc0\ub85c ",(0,l.kt)("strong",{parentName:"p"},"\uc5f4\uac70\ud615\uc744 \ubd84\ud560\ud560 \ub54c \uc8fc\uc758"),"\ud574\uc57c \ud558\uba70, \ub2e4\uc74c \uc608\ucc98\ub7fc ",(0,l.kt)("strong",{parentName:"p"},"\uac01 \uc5f4\uac70\ud615 \uba64\ubc84\uc5d0 \uba85\uc2dc\uc801\uc73c\ub85c \uac12\uc744 \ud560\ub2f9\ud558\ub294 \uac83\uc774 \uc88b\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"enum Language {\n    English = 0,\n    Spanish = 1\n}\n\nenum Language {\n    Russian = 2\n}\n")),(0,l.kt)("p",null,"\uacc4\uc0b0\ub41c \uac12\uc744 \uc0ac\uc6a9\ud560 \uc218\ub3c4 \uc788\uc73c\ubbc0\ub85c \ubaa8\ub4e0 \uac12\uc744 \uc815\uc758\ud560 \ud544\uc694\ub294 \uc5c6\ub2e4. (\ube60\uc9c4 \uac12\uc740 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\uac00 \ucd94\ub860\ud55c\ub2e4.)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"enum Language {\n    English = 100,\n    Spanish = 200 + 300,\n    Russian // \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\uac00 500 \ub2e4\uc74c \uc22b\uc790\uc778 501\ub85c \ucd94\ub860\n}\n")),(0,l.kt)("p",null,"\uc5f4\uac70\ud615\uc5d0 ",(0,l.kt)("strong",{parentName:"p"},"\ubb38\uc790\uc5f4 \uac12\uc744 \uc0ac\uc6a9\ud558\uac70\ub098 \ubb38\uc790\uc5f4\uacfc \uc22b\uc790\uac12\uc744 \ud63c\ud569"),"\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"enum Color {\n    Red = '#c10000',\n    Blue = '#007ac1',\n    Pink = 0xc10050,\n    White = 255\n}\n")),(0,l.kt)("p",null,"\ub354 \uc548\uc804\ud55c \uc5f4\uac70\ud615 \ud0c0\uc785\uc778 ",(0,l.kt)("inlineCode",{parentName:"p"},"const enum"),"\uc744 \uc774\uc6a9\ud558\uba74 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\uac00 \uc548\uc804\ud558\uac8c \uc791\uc5c5\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"const enum Language {\n    English,\n    Spanish,\n    Russian\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"// \uc720\ud6a8\ud55c enum \ud0a4 \uc811\uadfc\nlet a = Language.English // Color\n\n// \uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 enum \ud0a4 \uc811\uadfc\nlet b = Language.Tagalog // error. Tagalog \ud504\ub85c\ud37c\ud2f0 \uc5c6\uc74c\n\n// \uc720\ud6a8\ud55c enum \ud0a4 \uc811\uadfc\nlet c = Language[0] // error. const enum\uc740 \ubb38\uc790\uc5f4 \ub9ac\ud130\ub7f4\ub85c\ub9cc \uc811\uadfc \uac00\ub2a5\n\nlet d = Language[5] // error. const enum\uc740 \ubb38\uc790\uc5f4 \ub9ac\ud130\ub7f4\ub85c\ub9cc \uc811\uadfc \uac00\ub2a5\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"const enum"),"\uc740 ",(0,l.kt)("strong",{parentName:"p"},"\uc5ed\ubc29\ud5a5 \ucc3e\uae30\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc73c\ubbc0\ub85c \uc5f4\uac70\ud615\uc758 \ub3d9\uc791\uc740 \uc77c\ubc18 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uac1d\uccb4\uc640 \ube44\uc2b7"),"\ud558\ub2e4. \ub610\ud55c ",(0,l.kt)("inlineCode",{parentName:"p"},"const enum"),"\uc740 ",(0,l.kt)("strong",{parentName:"p"},"\uae30\ubcf8\uc801\uc73c\ub85c \uc544\ubb34 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub3c4 \uc0dd\uc131\ud558\uc9c0 \uc54a\uc73c\uba70"),", \uadf8 \ub300\uc2e0 \ud544\uc694\ud55c \uacf3\uc5d0 \uc5f4\uac70\ud615 \uba64\ubc84\uc758 \uac12\uc744 \ucc44\uc6cc \ub123\ub294\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"Language.Spanish"),"\uac00 \uc0ac\uc6a9\ub41c \ubaa8\ub4e0 \ucf54\ub4dc\ub97c \uac12 1\ub85c \ubc14\uafbc\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"const enum Flippable {\n    Burger,\n    Chair,\n    Cup,\n    Skateboard,\n    Table\n}\n\nfunction flip(f: Flippable) {\n    return 'flipped it'\n}\n\nflip(Flippable.Chair) // 'flipped it'\nflip(Flippable.Cup) // 'flipped it'\nflip(12) // 'flipped it' (\uc608\uc0c1\ud558\uc9c0 \ubabb\ud55c \uacb0\uacfc)\n")),(0,l.kt)("p",null,"\ubaa8\ub4e0 \uc22b\uc790\ub97c \uc5f4\uac70\ud615\uc5d0 \ud560\ub2f9\ud560 \uc218 \uc788\uc74c\uc744 \uc54c\uac8c \ub41c\ub2e4. \uc774 \ubb38\uc81c\ub294 \ubb38\uc790\uc5f4 \uac12\uc744 \uac16\ub294 \uc5f4\uac70\ud615\uc744 \uc0ac\uc6a9\ud574 \ud574\uacb0\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"const enum Flippable {\n    Burger = 'Burger',\n    Chair = 'Chair',\n    Cup = 'Cup',\n    Skateboard = 'Skateboard',\n    Table = 'Table'\n}\n\nfunction flip(f: Flippable) {\n    return 'flipped it'\n}\n\nflip(Flippable.Chair) // 'flipped it'\nflip(Flippable.Cup) // 'flipped it'\nflip(12) // error. 12\ub294 'Flippable' \ub9e4\uac1c\ubcc0\uc218 \ud0c0\uc785\uc5d0 \ud560\ub2f9\ud560 \uc218 \uc5c6\uc74c\nflip('Python') // error. 'Python'\uc740 'Flippable' \ub9e4\uac1c\ubcc0\uc218 \ud0c0\uc785\uc5d0 \ud560\ub2f9\ud560 \uc218 \uc5c6\uc74c\n")),(0,l.kt)("p",null,"\uacb0\uacfc\uc801\uc73c\ub85c \uc22b\uc790 \uac12\uc744 \ubc1b\ub294 \uc5f4\uac70\ud615\uc740 \uc804\uccb4 \uc5f4\uac70\ud615\uc758 \uc548\uc815\uc131\uc744 \ud574\uce60 \uc218 \uc788\ub2e4."),(0,l.kt)("br",null),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("inlineCode",{parentName:"p"},"enum"),"\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc740 \uad8c\uc7a5\ud558\ub294 \ud0c0\uc785\uc740 \uc544\ub2c8\ub2e4. ",(0,l.kt)("inlineCode",{parentName:"p"},"enum"),"\uc744 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uace0 ",(0,l.kt)("inlineCode",{parentName:"p"},"const"),"\ub97c \uc774\uc6a9\ud574\ubcf4\uc790"))),(0,l.kt)("br",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"const Flippable = {\n    Burger: 'Burger',\n    Chair: 'Chair',\n    Cup: 'Cup',\n    Skateboard: 'Skateboard',\n    Table: 'Table'\n} as const\n\ntype FlippableValue = typeof Flippable[keyof typeof Flippable]\n\nfunction flip(f: FlippableValue) {\n    return 'flipped it'\n}\n\nflip(\"Burger\") // 'flipped it'\nflip(\"Cup\") // 'flipped it'\n")),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"null-undefined-void-never"},"null, undefined, void, never"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"undefined"),"\ub294 \uc544\uc9c1 \uac12\uc744 \uc815\uc758\ud558\uc9c0 \uc54a\uc740 \uac83\uc774\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"null"),"\uc740 \uac12\uc774 \uc5c6\ub2e4\ub294 \uac83\uc774\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \uac12\uc744 \uacc4\uc0b0\ud558\ub824 \ud558\uba74 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud55c\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"void"),"\ub294 \uba85\uc2dc\uc801\uc73c\ub85c \uc544\ubb34\uac83\ub3c4 \ubc18\ud658\ud558\uc9c0 \uc54a\ub294 \ud568\uc218\uc758 \ubc18\ud658 \ud0c0\uc785\uc774\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"never"),"\ub294 \uc808\ub300 \ubc18\ud658\ud558\uc9c0 \uc54a\ub294 \ud568\uc218 \ud0c0\uc785\uc744 \uac00\ub9ac\ud0a8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"// number \ub610\ub294 null\uc744 \ubc18\ud658\ud558\ub294 \ud568\uc218\nfunction a(x: number) {\n    if (x < 10) {\n        return x\n    }\n    return null\n}\n\n// undefined\ub97c \ubc18\ud658\ud558\ub294 \ud568\uc218\nfunction b() {\n    return undefined\n}\n\n// void\ub97c \ubc18\ud658\ud558\ub294 \ud568\uc218\nfunction c() {\n    let a = 2 + 2\n    let b = a * a\n}\n\n// never\ub97c \ubc18\ud658\ud558\ub294 \ud568\uc218\nfunction d() {\n    throw new Error('error!')\n}\n\n// never\uc744 \ubc18\ud658\ud558\ub294 \ub610 \ub2e4\ub978 \ud568\uc218\nfunction e() {\n    while (true) {\n        doSomething()\n    }\n}\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"unknown"),"\uc774 \ubaa8\ub4e0 \ud0c0\uc785\uc758 \uc0c1\uc704 \ud0c0\uc785\uc774\ub77c\uba74 ",(0,l.kt)("inlineCode",{parentName:"p"},"never"),"\uc740 \ubaa8\ub4e0 \ud0c0\uc785\uc758 \uc11c\ube0c \ud0c0\uc785\uc774\ub2e4."))}d.isMDXComponent=!0}}]);