import './polyfills.server.mjs';
import{A as i,B as g,C as a,D as p,E as y,F as U,N as M,O as Z,P as Y,Q as ee,R as te,U as ne,_ as D,a as B,b as W,c as F,d as L,e as R,f as z,g as G,h as $,i as H,j as K,k as E,l as v,m as _,n as d,o as x,p as Q,q as V,r as q,s as k,t as c,u as w,v as J,w as f,x as X,y as u,z as o}from"./chunk-446RXYJ5.mjs";var Ce=[],ie=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=x({type:e}),e.\u0275inj=v({imports:[D.forRoot(Ce),D]});let t=e;return t})();function T(t){return Array.isArray(t)?t:[t]}var N;try{N=typeof Intl<"u"&&Intl.v8BreakIterator}catch{N=!1}var oe=(()=>{let e=class e{constructor(r){this._platformId=r,this.isBrowser=this._platformId?Y(this._platformId):typeof document=="object"&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!!(window.chrome||N)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}};e.\u0275fac=function(n){return new(n||e)(_(V))},e.\u0275prov=E({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var re=new Set,b,xe=(()=>{let e=class e{constructor(r,n){this._platform=r,this._nonce=n,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Oe}matchMedia(r){return(this._platform.WEBKIT||this._platform.BLINK)&&ye(r,this._nonce),this._matchMedia(r)}};e.\u0275fac=function(n){return new(n||e)(_(oe),_(q,8))},e.\u0275prov=E({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function ye(t,e){if(!re.has(t))try{b||(b=document.createElement("style"),e&&(b.nonce=e),b.setAttribute("type","text/css"),document.head.appendChild(b)),b.sheet&&(b.sheet.insertRule(`@media ${t} {body{ }}`,0),re.add(t))}catch(s){console.error(s)}}function Oe(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var I=(()=>{let e=class e{constructor(r,n){this._mediaMatcher=r,this._zone=n,this._queries=new Map,this._destroySubject=new W}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(r){return ae(T(r)).some(l=>this._registerQuery(l).mql.matches)}observe(r){let l=ae(T(r)).map(O=>this._registerQuery(O).observable),m=L(l);return m=R(m.pipe(G(1)),m.pipe($(1),z(0))),m.pipe(F(O=>{let P={matches:!1,breakpoints:{}};return O.forEach(({matches:S,query:Me})=>{P.matches=P.matches||S,P.breakpoints[Me]=S}),P}))}_registerQuery(r){if(this._queries.has(r))return this._queries.get(r);let n=this._mediaMatcher.matchMedia(r),m={observable:new B(O=>{let P=S=>this._zone.run(()=>O.next(S));return n.addListener(P),()=>{n.removeListener(P)}}).pipe(H(n),F(({matches:O})=>({query:r,matches:O})),K(this._destroySubject)),mql:n};return this._queries.set(r,m),m}};e.\u0275fac=function(n){return new(n||e)(_(xe),_(J))},e.\u0275prov=E({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function ae(t){return t.map(e=>e.split(",")).reduce((e,s)=>e.concat(s)).map(e=>e.trim())}var C={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var ce=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=d({type:e,selectors:[["app-banner"]],decls:19,vars:0,consts:[[1,"container"],[1,"title"],[1,"name"],[1,"profile"],[1,"profile-bg"],["src","assets/Sundar-Pichar-Profile-Square.png","alt",""]],template:function(n,l){n&1&&(o(0,"div",0)(1,"div",1)(2,"span"),a(3,"My Portfolio"),i()(),o(4,"div",2)(5,"span")(6,"span"),a(7,"Hi,"),i(),a(8," I am "),i(),g(9,"br"),o(10,"span"),a(11,"Pratik Gaikwad"),i(),g(12,"br"),o(13,"span"),a(14,"Senior Software Engineer"),i(),g(15,"br"),i(),o(16,"div",3),g(17,"div",4)(18,"img",5),i()())},styles:['[_nghost-%COMP%]{display:block;padding:4rem 2rem 6rem;background-color:var(--dark-gray);clip-path:polygon(0% 0%,100% 0%,100% 95%,50% 100%,0% 95%)}.container[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr}.title[_ngcontent-%COMP%]{font-size:4rem;padding:0 0 2rem;text-align:center;color:var(--green);text-decoration:none;font-family:Roboto Condensed,sans-serif}.name[_ngcontent-%COMP%]{grid-row:3/4;padding:2rem;color:#fff;font-size:2rem;margin-top:3rem;outline:1px solid white;font-family:"Roboto Condensed" sans-serif}.name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(1)   span[_ngcontent-%COMP%]{font-size:3rem;color:var(--green)}.name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(2){display:inline-block;color:var(--green);font-size:4rem;font-weight:700;padding:10px 0;letter-spacing:8px;text-shadow:10px 8px 10px var(--black)}.profile[_ngcontent-%COMP%]{width:300px;height:300px;grid-row:2/3;margin:0 auto;position:relative;clip-path:inset(0 round 0 0 25%)}.profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute}.profile[_ngcontent-%COMP%]   .profile-bg[_ngcontent-%COMP%]{height:75%;width:100%;bottom:0%;position:absolute;background-color:#69f0ae;clip-path:inset(0 round 50% 0 0)}.pc[_nghost-%COMP%]{padding:4rem 2rem 10rem;clip-path:polygon(0% 0%,100% 0%,100% 90%,50% 100%,0% 90%)}.pc[_nghost-%COMP%]   .profile[_ngcontent-%COMP%]{grid-row:1/3;grid-column:2/3;width:300px;height:300px}']});let t=e;return t})();function _e(t,e){if(t&1&&(o(0,"td"),a(1),i()),t&2){let s=e.$implicit;c(),p(s)}}function be(t,e){if(t&1&&(o(0,"tr"),u(1,_e,2,1,"td",2),i()),t&2){let s=e.$implicit;c(),f("ngForOf",s)}}function we(t,e){if(t&1&&(o(0,"p"),a(1),i()),t&2){let s=e.$implicit;c(),y(" ",s," ")}}var le=(()=>{let e=class e{constructor(){this.myData=[["Name","Pratik Gaikwad"],["DOB","16/04/1992"],["Work Experience","8 years"],["Education","BE (2014)"],["Intrests","Cricket"]],this.aboutMe=["Hi, I am Software Engineer with 8+ years of experience in software industry","Woked as Senior Software Engineer in Google for various tech stacks","Delivered all products within deadlines. Always eager to learn new technologies.","Currently working as CEO of X."]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=d({type:e,selectors:[["app-personal-information"]],decls:9,vars:2,consts:[[1,"container"],[1,"title"],[4,"ngFor","ngForOf"]],template:function(n,l){n&1&&(o(0,"div",0)(1,"h1",1)(2,"span"),a(3,"Personal Information"),i()(),o(4,"table")(5,"tbody"),u(6,be,2,1,"tr",2),i()(),o(7,"section"),u(8,we,2,1,"p",2),i()()),n&2&&(c(6),f("ngForOf",l.myData),c(2),f("ngForOf",l.aboutMe))},dependencies:[M],styles:["[_nghost-%COMP%]{display:block;color:#fff;padding:3rem 2rem}.container[_ngcontent-%COMP%]{gap:2rem;display:grid}table[_ngcontent-%COMP%]{font-size:1.3rem;outline:1px solid white}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{height:40px}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding-left:.5rem}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2n){color:var(--green)}section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;text-align:justify}section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:first-child){margin-top:1rem}.pc[_nghost-%COMP%]{margin-top:3rem}.pc[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}.pc[_nghost-%COMP%]   h1[_ngcontent-%COMP%]{grid-column:1/3}.pc[_nghost-%COMP%]   section[_ngcontent-%COMP%], .pc[_nghost-%COMP%]   table[_ngcontent-%COMP%]{width:80%;margin:auto}"]});let t=e;return t})();function Se(t,e){if(t&1&&(o(0,"section")(1,"h2"),a(2),i(),o(3,"h3"),a(4),i(),o(5,"h4"),a(6),i(),o(7,"h4"),a(8),i()()),t&2){let s=e.$implicit;c(2),p(s.course),c(2),p(s.institute),c(2),p(s.duration),c(2),p(s.score)}}var pe=(()=>{let e=class e{constructor(){this.educationList=[{institute:"School of Execellence",course:"Maths",duration:"121 -112",score:"90%"},{institute:"School of Execellence",course:"Maths",duration:"121 -112",score:"90%"},{institute:"School of Execellence",course:"Maths",duration:"121 -112",score:"90%"},{institute:"School of Execellence",course:"Maths",duration:"121 -112",score:"90%"},{institute:"School of Execellence",course:"Maths",duration:"121 -112",score:"90%"}]}ngOnInit(){}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=d({type:e,selectors:[["app-education"]],decls:4,vars:1,consts:[[1,"container"],[4,"ngFor","ngForOf"]],template:function(n,l){n&1&&(o(0,"div",0)(1,"h1"),a(2,"Education"),i(),u(3,Se,9,4,"section",1),i()),n&2&&(c(3),f("ngForOf",l.educationList))},dependencies:[M],styles:["[_nghost-%COMP%]{display:block;color:#fff;padding:3rem 2rem}section[_ngcontent-%COMP%]{margin-top:2rem}section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:var(--green)}section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:var(--gray--light)}.pc[_nghost-%COMP%]   section[_ngcontent-%COMP%]{width:600px;position:relative;margin-left:5rem;display:grid;gap:0 1.5rem;grid-template-columns:1fr 5fr;grid-template-rows:repeat(3,1fr)}.pc[_nghost-%COMP%]   section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]:nth-child(4){grid-row:1/4;margin-top:0%;display:flex;font-size:1.5rem;align-items:center;justify-content:center;border-right:1px solid white}"]});let t=e;return t})();function Ie(t,e){if(t&1&&(o(0,"li"),a(1),i()),t&2){let s=e.$implicit;c(),y(" ",s,"")}}function je(t,e){if(t&1&&(o(0,"li")(1,"h2"),a(2),i(),o(3,"h3"),a(4),i(),o(5,"h4"),a(6),i(),o(7,"ul"),u(8,Ie,2,1,"li",1),i()()),t&2){let s=e.$implicit;c(2),p(s.role),c(2),p(s.company),c(2),p(s.duration),c(2),f("ngForOf",s.description)}}var de=(()=>{let e=class e{constructor(){this.workExperienceList=[{role:"Senior Engineer",company:"GoldMan Sach",duration:"3yrs",description:["Worked with multiple teams to develop desktop and web apss","Worked on difference technologies as Java, Android, Angular"]},{role:"Senior Engineer",company:"GoldMan Sach",duration:"3yrs",description:["Worked with multiple teams to develop desktop and web apss","Worked on difference technologies as Java, Android, Angular"]},{role:"Senior Engineer",company:"GoldMan Sach",duration:"3yrs",description:["Worked with multiple teams to develop desktop and web apss","Worked on difference technologies as Java, Android, Angular"]},{role:"Senior Engineer",company:"GoldMan Sach",duration:"3yrs",description:["Worked with multiple teams to develop desktop and web apss","Worked on difference technologies as Java, Android, Angular"]}]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=d({type:e,selectors:[["app-work-experience"]],decls:5,vars:1,consts:[[1,"container"],[4,"ngFor","ngForOf"]],template:function(n,l){n&1&&(o(0,"div",0)(1,"h1"),a(2," Work Experience "),i(),o(3,"ul"),u(4,je,9,4,"li",1),i()()),n&2&&(c(4),f("ngForOf",l.workExperienceList))},dependencies:[M],styles:['[_nghost-%COMP%]{display:block;color:#fff;padding:3rem 2rem}ul[_ngcontent-%COMP%]:has(ul){padding:0%;list-style:none}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:has(ul){margin-top:2rem}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:var(--green)}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:var(--gray-light)}.pc[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:has(ul){width:max-content;position:relative;margin-left:5rem}.pc[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:has(ul):before{content:"";position:absolute;width:20px;height:20px;left:-60px;top:5px;border-radius:50%;z-index:2;background-color:var(--green)}.pc[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:has(ul):after{content:"";position:absolute;width:1px;height:130%;left:-50px;top:5px;z-index:1;background-color:var(--gray-light)}.pc[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:has(ul):last-child:after{height:100%}']});let t=e;return t})();var Fe=t=>({width:t});function De(t,e){if(t&1&&(o(0,"section")(1,"h2"),a(2),i(),o(3,"h4"),a(4),i(),o(5,"div",2)(6,"div",3),g(7,"div",4),i(),o(8,"div"),a(9),i()()()),t&2){let s=e.$implicit;c(2),p(s.name),c(2),p(s.level),c(3),f("ngStyle",U(4,Fe,s.rating+"%")),c(2),y("",s.rating,"%")}}var me=(()=>{let e=class e{constructor(){this.skills=[{name:"Angular, Anagular Material",level:"Expert",rating:85},{name:"Angular, Anagular Material",level:"Expert",rating:85},{name:"Angular, Anagular Material",level:"Expert",rating:85},{name:"Angular, Anagular Material",level:"Expert",rating:85},{name:"Angular, Anagular Material",level:"Expert",rating:85},{name:"Angular, Anagular Material",level:"Expert",rating:85}]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=d({type:e,selectors:[["app-skills"]],decls:4,vars:1,consts:[[1,"container"],[4,"ngFor","ngForOf"],[1,"rating"],[1,"bar"],[3,"ngStyle"]],template:function(n,l){n&1&&(o(0,"div",0)(1,"h1"),a(2,"Skills"),i(),u(3,De,10,6,"section",1),i()),n&2&&(c(3),f("ngForOf",l.skills))},dependencies:[M,Z],styles:["[_nghost-%COMP%]{display:block;color:#fff;padding:3rem 2rem}section[_ngcontent-%COMP%]{margin-top:2rem}section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:var(--green);font-family:Roboto Condensed,sans-serif}section[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]{width:100%;height:max-content;margin-top:.5rem;display:flex;align-items:center;justify-content:space-between}section[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{height:5px;flex-grow:1;margin-right:1rem;background-color:#fff3}section[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{height:100%;background-color:var(--green)}.pc[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{display:grid;gap:2rem 4rem;grid-template-columns:1fr 1fr}.pc[_nghost-%COMP%]   h1[_ngcontent-%COMP%]{grid-column:1/3}.pc[_nghost-%COMP%]   section[_ngcontent-%COMP%]{margin-top:1rem}"]});let t=e;return t})();function Ne(t,e){if(t&1&&(o(0,"li"),a(1),i()),t&2){let s=e.$implicit;c(),y(" ",s,"")}}function Be(t,e){if(t&1&&(o(0,"section")(1,"h2"),a(2),i(),o(3,"h3")(4,"span"),a(5,"Technologies :"),i(),o(6,"span"),a(7),i()(),o(8,"ul"),u(9,Ne,2,1,"li",1),i()()),t&2){let s=e.$implicit;c(2),p(s.title),c(5),p(s.technologies),c(2),f("ngForOf",s.description)}}var fe=(()=>{let e=class e{constructor(){this.projects=[{title:"Google project",technologies:"java , Angular",description:["Worked as lead engineer"]},{title:"Google project",technologies:"java , Angular",description:["Worked as lead engineer"]},{title:"Google project",technologies:"java , Angular",description:["Worked as lead engineer"]},{title:"Google project",technologies:"java , Angular",description:["Worked as lead engineer"]},{title:"Google project",technologies:"java , Angular",description:["Worked as lead engineer"]}]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=d({type:e,selectors:[["app-projects"]],decls:4,vars:1,consts:[[1,"container"],[4,"ngFor","ngForOf"]],template:function(n,l){n&1&&(o(0,"div",0)(1,"h1"),a(2,"Projects"),i(),u(3,Be,10,3,"section",1),i()),n&2&&(c(3),f("ngForOf",l.projects))},dependencies:[M],styles:['[_nghost-%COMP%]{display:block;color:#fff;padding:3rem 2rem}section[_ngcontent-%COMP%]{margin-top:2rem}section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:var(--green)}section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:.5rem;color:var(--gray-light)}section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-top:.5rem;list-style:circle}.pc[_nghost-%COMP%]   section[_ngcontent-%COMP%]{margin-left:5rem;position:relative}.pc[_nghost-%COMP%]   section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){color:#fff}.pc[_nghost-%COMP%]   section[_ngcontent-%COMP%]:before{content:"";position:absolute;width:20px;height:20px;left:-60px;top:5px;border-radius:50%;z-index:2;background-color:var(--green)}.pc[_nghost-%COMP%]   section[_ngcontent-%COMP%]:after{content:"";position:absolute;width:1px;height:130%;left:-50px;top:5px;z-index:1;background-color:var(--gray-light)}.pc[_nghost-%COMP%]   section[_ngcontent-%COMP%]:last-child:after{height:100%}']});let t=e;return t})();var ge=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=d({type:e,selectors:[["app-contact"]],decls:15,vars:0,consts:[[1,"container"],[1,"social-media"],[1,"bx","bxl-gmail"],[1,"bx","bxl-facebook-circle"],[1,"bx","bxl-instagram"],[1,"contact-info"]],template:function(n,l){n&1&&(o(0,"div",0)(1,"h1"),a(2,"Contact"),i(),o(3,"ul",1)(4,"li"),g(5,"i",2),i(),o(6,"li"),g(7,"i",3),i(),o(8,"li"),g(9,"i",4),i()(),o(10,"ul",5)(11,"li"),a(12,"Mobile: 8109198585"),i(),o(13,"li"),a(14,"pratikgaikwad8586.com"),i()()())},styles:["[_nghost-%COMP%]{display:block;color:#fff;padding:2rem 3rem}ul[_ngcontent-%COMP%]{margin-top:2rem;list-style:none;padding:0%}.social-media[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-around;font-size:2rem}.social-media[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{height:60px;width:60px;display:flex;align-items:center;justify-content:center;border-radius:50%;color:var(--green);background-color:#fff3}.contact-info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{height:30px;font-size:1.2rem}.pc[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{display:grid;gap:2rem;grid-template-columns:1fr 1fr}.pc[_nghost-%COMP%]   h1[_ngcontent-%COMP%]{grid-column:1/3}.pc[_nghost-%COMP%]   .social-media[_ngcontent-%COMP%], .pc[_nghost-%COMP%]   .contact-info[_ngcontent-%COMP%]{width:400px;margin:0 auto}.pc[_nghost-%COMP%]   .social-media[_ngcontent-%COMP%]{cursor:pointer}.pc[_nghost-%COMP%]   .social-media[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#ffffff4d}"]});let t=e;return t})();var ue=(()=>{let e=class e{constructor(r,n){this.element=r,this.breakpointObserver=n,this.breakpointObserver.observe([C.HandsetPortrait,C.WebLandscape]).subscribe({next:l=>{for(let m of Object.keys(l.breakpoints))l.breakpoints[m]&&(m===C.HandsetPortrait&&this.element.nativeElement.classList.remove("pc"),m===C.WebLandscape&&this.element.nativeElement.classList.add("pc"))}})}};e.\u0275fac=function(n){return new(n||e)(w(k),w(I))},e.\u0275dir=Q({type:e,selectors:[["","appResponsive",""]]});let t=e;return t})();var A=(()=>{let e=class e{constructor(r,n){this.element=r,this.breakpointObserver=n,this.title="pratik-portfolio",this.pcMode=!1,this.breakpointObserver.observe([C.HandsetPortrait,C.WebLandscape]).subscribe({next:l=>{for(let m of Object.keys(l.breakpoints))l.breakpoints[m]&&(m===C.HandsetPortrait&&(this.pcMode=!1),m===C.WebLandscape&&(this.pcMode=!0))}})}};e.\u0275fac=function(n){return new(n||e)(w(k),w(I))},e.\u0275cmp=d({type:e,selectors:[["app-root"]],hostVars:2,hostBindings:function(n,l){n&2&&X("pc",l.pcMode)},decls:8,vars:0,consts:[["appResponsive",""],[1,"container"]],template:function(n,l){n&1&&(g(0,"app-banner",0)(1,"app-personal-information",0),o(2,"div",1),g(3,"app-education",0)(4,"app-work-experience",0),i(),g(5,"app-projects",0)(6,"app-skills",0)(7,"app-contact",0))},dependencies:[ce,le,pe,de,me,fe,ge,ue],styles:["[_nghost-%COMP%]{display:block;background-color:var(--black)}.pc[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr}"]});let t=e;return t})();var he=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=x({type:e,bootstrap:[A]}),e.\u0275inj=v({providers:[te()],imports:[ee,ie]});let t=e;return t})();var ze=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=x({type:e,bootstrap:[A]}),e.\u0275inj=v({imports:[he,ne]});let t=e;return t})();export{ze as a};