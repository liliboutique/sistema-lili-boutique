import{d as Ee,r as Rt}from"./vendor-core-DyYareyy.js";function ka(a,e){(e==null||e>a.length)&&(e=a.length);for(var t=0,r=Array(e);t<e;t++)r[t]=a[t];return r}function Dt(a){if(Array.isArray(a))return a}function Ut(a){if(Array.isArray(a))return ka(a)}function Wt(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function Yt(a,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,Ne(r.key),r)}}function Ht(a,e,t){return e&&Yt(a.prototype,e),Object.defineProperty(a,"prototype",{writable:!1}),a}function oa(a,e){var t=typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(!t){if(Array.isArray(a)||(t=Da(a))||e){t&&(a=t);var r=0,n=function(){};return{s:n,n:function(){return r>=a.length?{done:!0}:{done:!1,value:a[r++]}},e:function(l){throw l},f:n}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,s=!1;return{s:function(){t=t.call(a)},n:function(){var l=t.next();return o=l.done,l},e:function(l){s=!0,i=l},f:function(){try{o||t.return==null||t.return()}finally{if(s)throw i}}}}function p(a,e,t){return(e=Ne(e))in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function Bt(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function Gt(a,e){var t=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(t!=null){var r,n,i,o,s=[],l=!0,c=!1;try{if(i=(t=t.call(a)).next,e===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(r=i.call(t)).done)&&(s.push(r.value),s.length!==e);l=!0);}catch(u){c=!0,n=u}finally{try{if(!l&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(c)throw n}}return s}}function Xt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Vt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qa(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);e&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable})),t.push.apply(t,r)}return t}function f(a){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Qa(Object(t),!0).forEach(function(r){p(a,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):Qa(Object(t)).forEach(function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(t,r))})}return a}function da(a,e){return Dt(a)||Gt(a,e)||Da(a,e)||Xt()}function C(a){return Ut(a)||Bt(a)||Da(a)||Vt()}function Kt(a,e){if(typeof a!="object"||!a)return a;var t=a[Symbol.toPrimitive];if(t!==void 0){var r=t.call(a,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(a)}function Ne(a){var e=Kt(a,"string");return typeof e=="symbol"?e:e+""}function fa(a){"@babel/helpers - typeof";return fa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},fa(a)}function Da(a,e){if(a){if(typeof a=="string")return ka(a,e);var t={}.toString.call(a).slice(8,-1);return t==="Object"&&a.constructor&&(t=a.constructor.name),t==="Map"||t==="Set"?Array.from(a):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?ka(a,e):void 0}}var Za=function(){},Ua={},Fe={},Oe=null,Te={mark:Za,measure:Za};try{typeof window<"u"&&(Ua=window),typeof document<"u"&&(Fe=document),typeof MutationObserver<"u"&&(Oe=MutationObserver),typeof performance<"u"&&(Te=performance)}catch{}var Jt=Ua.navigator||{},ae=Jt.userAgent,ee=ae===void 0?"":ae,_=Ua,x=Fe,te=Oe,na=Te;_.document;var T=!!x.documentElement&&!!x.head&&typeof x.addEventListener=="function"&&typeof x.createElement=="function",_e=~ee.indexOf("MSIE")||~ee.indexOf("Trident/"),ba,qt=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Qt=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,je={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},Zt={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},$e=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],k="classic",aa="duotone",Re="sharp",De="sharp-duotone",Ue="chisel",We="etch",Ye="jelly",He="jelly-duo",Be="jelly-fill",Ge="notdog",Xe="notdog-duo",Ve="slab",Ke="slab-press",Je="thumbprint",qe="utility",Qe="utility-duo",Ze="utility-fill",at="whiteboard",ar="Classic",er="Duotone",tr="Sharp",rr="Sharp Duotone",nr="Chisel",ir="Etch",or="Jelly",sr="Jelly Duo",lr="Jelly Fill",fr="Notdog",cr="Notdog Duo",ur="Slab",dr="Slab Press",mr="Thumbprint",vr="Utility",pr="Utility Duo",hr="Utility Fill",gr="Whiteboard",et=[k,aa,Re,De,Ue,We,Ye,He,Be,Ge,Xe,Ve,Ke,Je,qe,Qe,Ze,at];ba={},p(p(p(p(p(p(p(p(p(p(ba,k,ar),aa,er),Re,tr),De,rr),Ue,nr),We,ir),Ye,or),He,sr),Be,lr),Ge,fr),p(p(p(p(p(p(p(p(ba,Xe,cr),Ve,ur),Ke,dr),Je,mr),qe,vr),Qe,pr),Ze,hr),at,gr);var br={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},yr={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},xr=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),Sr={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},tt=["fak","fa-kit","fakd","fa-kit-duotone"],re={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},wr=["kit"],Ar="kit",zr="kit-duotone",kr="Kit",Mr="Kit Duotone";p(p({},Ar,kr),zr,Mr);var Lr={kit:{"fa-kit":"fak"}},Cr={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Ir={kit:{fak:"fa-kit"}},ne={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},ya,ia={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Pr=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],Er="classic",Nr="duotone",Fr="sharp",Or="sharp-duotone",Tr="chisel",_r="etch",jr="jelly",$r="jelly-duo",Rr="jelly-fill",Dr="notdog",Ur="notdog-duo",Wr="slab",Yr="slab-press",Hr="thumbprint",Br="utility",Gr="utility-duo",Xr="utility-fill",Vr="whiteboard",Kr="Classic",Jr="Duotone",qr="Sharp",Qr="Sharp Duotone",Zr="Chisel",an="Etch",en="Jelly",tn="Jelly Duo",rn="Jelly Fill",nn="Notdog",on="Notdog Duo",sn="Slab",ln="Slab Press",fn="Thumbprint",cn="Utility",un="Utility Duo",dn="Utility Fill",mn="Whiteboard";ya={},p(p(p(p(p(p(p(p(p(p(ya,Er,Kr),Nr,Jr),Fr,qr),Or,Qr),Tr,Zr),_r,an),jr,en),$r,tn),Rr,rn),Dr,nn),p(p(p(p(p(p(p(p(ya,Ur,on),Wr,sn),Yr,ln),Hr,fn),Br,cn),Gr,un),Xr,dn),Vr,mn);var vn="kit",pn="kit-duotone",hn="Kit",gn="Kit Duotone";p(p({},vn,hn),pn,gn);var bn={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},yn={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},Ma={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},xn=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],rt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(Pr,xn),Sn=["solid","regular","light","thin","duotone","brands","semibold"],nt=[1,2,3,4,5,6,7,8,9,10],wn=nt.concat([11,12,13,14,15,16,17,18,19,20]),An=["aw","fw","pull-left","pull-right"],zn=[].concat(C(Object.keys(yn)),Sn,An,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",ia.GROUP,ia.SWAP_OPACITY,ia.PRIMARY,ia.SECONDARY]).concat(nt.map(function(a){return"".concat(a,"x")})).concat(wn.map(function(a){return"w-".concat(a)})),kn={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},F="___FONT_AWESOME___",La=16,it="fa",ot="svg-inline--fa",D="data-fa-i2svg",Ca="data-fa-pseudo-element",Mn="data-fa-pseudo-element-pending",Wa="data-prefix",Ya="data-icon",ie="fontawesome-i2svg",Ln="async",Cn=["HTML","HEAD","STYLE","SCRIPT"],st=["::before","::after",":before",":after"],lt=(function(){try{return!0}catch{return!1}})();function ea(a){return new Proxy(a,{get:function(t,r){return r in t?t[r]:t[k]}})}var ft=f({},je);ft[k]=f(f(f(f({},{"fa-duotone":"duotone"}),je[k]),re.kit),re["kit-duotone"]);var In=ea(ft),Ia=f({},Sr);Ia[k]=f(f(f(f({},{duotone:"fad"}),Ia[k]),ne.kit),ne["kit-duotone"]);var oe=ea(Ia),Pa=f({},Ma);Pa[k]=f(f({},Pa[k]),Ir.kit);var Ha=ea(Pa),Ea=f({},bn);Ea[k]=f(f({},Ea[k]),Lr.kit);ea(Ea);var Pn=qt,ct="fa-layers-text",En=Qt,Nn=f({},br);ea(Nn);var Fn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],xa=Zt,On=[].concat(C(wr),C(zn)),K=_.FontAwesomeConfig||{};function Tn(a){var e=x.querySelector("script["+a+"]");if(e)return e.getAttribute(a)}function _n(a){return a===""?!0:a==="false"?!1:a==="true"?!0:a}if(x&&typeof x.querySelector=="function"){var jn=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];jn.forEach(function(a){var e=da(a,2),t=e[0],r=e[1],n=_n(Tn(t));n!=null&&(K[r]=n)})}var ut={styleDefault:"solid",familyDefault:k,cssPrefix:it,replacementClass:ot,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};K.familyPrefix&&(K.cssPrefix=K.familyPrefix);var G=f(f({},ut),K);G.autoReplaceSvg||(G.observeMutations=!1);var m={};Object.keys(ut).forEach(function(a){Object.defineProperty(m,a,{enumerable:!0,set:function(t){G[a]=t,J.forEach(function(r){return r(m)})},get:function(){return G[a]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(e){G.cssPrefix=e,J.forEach(function(t){return t(m)})},get:function(){return G.cssPrefix}});_.FontAwesomeConfig=m;var J=[];function $n(a){return J.push(a),function(){J.splice(J.indexOf(a),1)}}var W=La,I={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Rn(a){if(!(!a||!T)){var e=x.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=a;for(var t=x.head.childNodes,r=null,n=t.length-1;n>-1;n--){var i=t[n],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return x.head.insertBefore(e,r),a}}var Dn="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function se(){for(var a=12,e="";a-- >0;)e+=Dn[Math.random()*62|0];return e}function X(a){for(var e=[],t=(a||[]).length>>>0;t--;)e[t]=a[t];return e}function Ba(a){return a.classList?X(a.classList):(a.getAttribute("class")||"").split(" ").filter(function(e){return e})}function dt(a){return"".concat(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Un(a){return Object.keys(a||{}).reduce(function(e,t){return e+"".concat(t,'="').concat(dt(a[t]),'" ')},"").trim()}function ma(a){return Object.keys(a||{}).reduce(function(e,t){return e+"".concat(t,": ").concat(a[t].trim(),";")},"")}function Ga(a){return a.size!==I.size||a.x!==I.x||a.y!==I.y||a.rotate!==I.rotate||a.flipX||a.flipY}function Wn(a){var e=a.transform,t=a.containerWidth,r=a.iconWidth,n={transform:"translate(".concat(t/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:n,inner:l,path:c}}function Yn(a){var e=a.transform,t=a.width,r=t===void 0?La:t,n=a.height,i=n===void 0?La:n,o="";return _e?o+="translate(".concat(e.x/W-r/2,"em, ").concat(e.y/W-i/2,"em) "):o+="translate(calc(-50% + ".concat(e.x/W,"em), calc(-50% + ").concat(e.y/W,"em)) "),o+="scale(".concat(e.size/W*(e.flipX?-1:1),", ").concat(e.size/W*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var Hn=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
  --fa-font-utility-semibold: normal 600 1em/1 "Font Awesome 7 Utility";
  --fa-font-utility-duo-semibold: normal 600 1em/1 "Font Awesome 7 Utility Duo";
  --fa-font-utility-fill-semibold: normal 600 1em/1 "Font Awesome 7 Utility Fill";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function mt(){var a=it,e=ot,t=m.cssPrefix,r=m.replacementClass,n=Hn;if(t!==a||r!==e){var i=new RegExp("\\.".concat(a,"\\-"),"g"),o=new RegExp("\\--".concat(a,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");n=n.replace(i,".".concat(t,"-")).replace(o,"--".concat(t,"-")).replace(s,".".concat(r))}return n}var le=!1;function Sa(){m.autoAddCss&&!le&&(Rn(mt()),le=!0)}var Bn={mixout:function(){return{dom:{css:mt,insertCss:Sa}}},hooks:function(){return{beforeDOMElementCreation:function(){Sa()},beforeI2svg:function(){Sa()}}}},O=_||{};O[F]||(O[F]={});O[F].styles||(O[F].styles={});O[F].hooks||(O[F].hooks={});O[F].shims||(O[F].shims=[]);var L=O[F],vt=[],pt=function(){x.removeEventListener("DOMContentLoaded",pt),ca=1,vt.map(function(e){return e()})},ca=!1;T&&(ca=(x.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(x.readyState),ca||x.addEventListener("DOMContentLoaded",pt));function Gn(a){T&&(ca?setTimeout(a,0):vt.push(a))}function ta(a){var e=a.tag,t=a.attributes,r=t===void 0?{}:t,n=a.children,i=n===void 0?[]:n;return typeof a=="string"?dt(a):"<".concat(e," ").concat(Un(r),">").concat(i.map(ta).join(""),"</").concat(e,">")}function fe(a,e,t){if(a&&a[e]&&a[e][t])return{prefix:e,iconName:t,icon:a[e][t]}}var wa=function(e,t,r,n){var i=Object.keys(e),o=i.length,s=t,l,c,u;for(r===void 0?(l=1,u=e[i[0]]):(l=0,u=r);l<o;l++)c=i[l],u=s(u,e[c],c,e);return u};function ht(a){return C(a).length!==1?null:a.codePointAt(0).toString(16)}function ce(a){return Object.keys(a).reduce(function(e,t){var r=a[t],n=!!r.icon;return n?e[r.iconName]=r.icon:e[t]=r,e},{})}function Na(a,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=t.skipHooks,n=r===void 0?!1:r,i=ce(e);typeof L.hooks.addPack=="function"&&!n?L.hooks.addPack(a,ce(e)):L.styles[a]=f(f({},L.styles[a]||{}),i),a==="fas"&&Na("fa",e)}var Q=L.styles,Xn=L.shims,gt=Object.keys(Ha),Vn=gt.reduce(function(a,e){return a[e]=Object.keys(Ha[e]),a},{}),Xa=null,bt={},yt={},xt={},St={},wt={};function Kn(a){return~On.indexOf(a)}function Jn(a,e){var t=e.split("-"),r=t[0],n=t.slice(1).join("-");return r===a&&n!==""&&!Kn(n)?n:null}var At=function(){var e=function(i){return wa(Q,function(o,s,l){return o[l]=wa(s,i,{}),o},{})};bt=e(function(n,i,o){if(i[3]&&(n[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){n[l.toString(16)]=o})}return n}),yt=e(function(n,i,o){if(n[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){n[l]=o})}return n}),wt=e(function(n,i,o){var s=i[2];return n[o]=o,s.forEach(function(l){n[l]=o}),n});var t="far"in Q||m.autoFetchSvg,r=wa(Xn,function(n,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!t&&(s="fas"),typeof o=="string"&&(n.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(n.unicodes[o.toString(16)]={prefix:s,iconName:l}),n},{names:{},unicodes:{}});xt=r.names,St=r.unicodes,Xa=va(m.styleDefault,{family:m.familyDefault})};$n(function(a){Xa=va(a.styleDefault,{family:m.familyDefault})});At();function Va(a,e){return(bt[a]||{})[e]}function qn(a,e){return(yt[a]||{})[e]}function R(a,e){return(wt[a]||{})[e]}function zt(a){return xt[a]||{prefix:null,iconName:null}}function Qn(a){var e=St[a],t=Va("fas",a);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function j(){return Xa}var kt=function(){return{prefix:null,iconName:null,rest:[]}};function Zn(a){var e=k,t=gt.reduce(function(r,n){return r[n]="".concat(m.cssPrefix,"-").concat(n),r},{});return et.forEach(function(r){(a.includes(t[r])||a.some(function(n){return Vn[r].includes(n)}))&&(e=r)}),e}function va(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.family,r=t===void 0?k:t,n=In[r][a];if(r===aa&&!a)return"fad";var i=oe[r][a]||oe[r][n],o=a in L.styles?a:null,s=i||o||null;return s}function ai(a){var e=[],t=null;return a.forEach(function(r){var n=Jn(m.cssPrefix,r);n?t=n:r&&e.push(r)}),{iconName:t,rest:e}}function ue(a){return a.sort().filter(function(e,t,r){return r.indexOf(e)===t})}var de=rt.concat(tt);function pa(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.skipLookups,r=t===void 0?!1:t,n=null,i=ue(a.filter(function(v){return de.includes(v)})),o=ue(a.filter(function(v){return!de.includes(v)})),s=i.filter(function(v){return n=v,!$e.includes(v)}),l=da(s,1),c=l[0],u=c===void 0?null:c,d=Zn(i),h=f(f({},ai(o)),{},{prefix:va(u,{family:d})});return f(f(f({},h),ni({values:a,family:d,styles:Q,config:m,canonical:h,givenPrefix:n})),ei(r,n,h))}function ei(a,e,t){var r=t.prefix,n=t.iconName;if(a||!r||!n)return{prefix:r,iconName:n};var i=e==="fa"?zt(n):{},o=R(r,n);return n=i.iconName||o||n,r=i.prefix||r,r==="far"&&!Q.far&&Q.fas&&!m.autoFetchSvg&&(r="fas"),{prefix:r,iconName:n}}var ti=et.filter(function(a){return a!==k||a!==aa}),ri=Object.keys(Ma).filter(function(a){return a!==k}).map(function(a){return Object.keys(Ma[a])}).flat();function ni(a){var e=a.values,t=a.family,r=a.canonical,n=a.givenPrefix,i=n===void 0?"":n,o=a.styles,s=o===void 0?{}:o,l=a.config,c=l===void 0?{}:l,u=t===aa,d=e.includes("fa-duotone")||e.includes("fad"),h=c.familyDefault==="duotone",v=r.prefix==="fad"||r.prefix==="fa-duotone";if(!u&&(d||h||v)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&ti.includes(t)){var y=Object.keys(s).find(function(S){return ri.includes(S)});if(y||c.autoFetchSvg){var b=xr.get(t).defaultShortPrefixId;r.prefix=b,r.iconName=R(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||i==="fa")&&(r.prefix=j()||"fas"),r}var ii=(function(){function a(){Wt(this,a),this.definitions={}}return Ht(a,[{key:"add",value:function(){for(var t=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];var o=n.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){t.definitions[s]=f(f({},t.definitions[s]||{}),o[s]),Na(s,o[s]);var l=Ha[k][s];l&&Na(l,o[s]),At()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,r){var n=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(n).map(function(i){var o=n[i],s=o.prefix,l=o.iconName,c=o.icon,u=c[2];t[s]||(t[s]={}),u.length>0&&u.forEach(function(d){typeof d=="string"&&(t[s][d]=c)}),t[s][l]=c}),t}}])})(),me=[],H={},B={},oi=Object.keys(B);function si(a,e){var t=e.mixoutsTo;return me=a,H={},Object.keys(B).forEach(function(r){oi.indexOf(r)===-1&&delete B[r]}),me.forEach(function(r){var n=r.mixout?r.mixout():{};if(Object.keys(n).forEach(function(o){typeof n[o]=="function"&&(t[o]=n[o]),fa(n[o])==="object"&&Object.keys(n[o]).forEach(function(s){t[o]||(t[o]={}),t[o][s]=n[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){H[o]||(H[o]=[]),H[o].push(i[o])})}r.provides&&r.provides(B)}),t}function Fa(a,e){for(var t=arguments.length,r=new Array(t>2?t-2:0),n=2;n<t;n++)r[n-2]=arguments[n];var i=H[a]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function U(a){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var n=H[a]||[];n.forEach(function(i){i.apply(null,t)})}function $(){var a=arguments[0],e=Array.prototype.slice.call(arguments,1);return B[a]?B[a].apply(null,e):void 0}function Oa(a){a.prefix==="fa"&&(a.prefix="fas");var e=a.iconName,t=a.prefix||j();if(e)return e=R(t,e)||e,fe(Mt.definitions,t,e)||fe(L.styles,t,e)}var Mt=new ii,li=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,U("noAuto")},fi={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return T?(U("beforeI2svg",e),$("pseudoElements2svg",e),$("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,Gn(function(){ui({autoReplaceSvgRoot:t}),U("watch",e)})}},ci={icon:function(e){if(e===null)return null;if(fa(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:R(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=va(e[0]);return{prefix:r,iconName:R(r,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(m.cssPrefix,"-"))>-1||e.match(Pn))){var n=pa(e.split(" "),{skipLookups:!0});return{prefix:n.prefix||j(),iconName:R(n.prefix,n.iconName)||n.iconName}}if(typeof e=="string"){var i=j();return{prefix:i,iconName:R(i,e)||e}}}},M={noAuto:li,config:m,dom:fi,parse:ci,library:Mt,findIconDefinition:Oa,toHtml:ta},ui=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot,r=t===void 0?x:t;(Object.keys(L.styles).length>0||m.autoFetchSvg)&&T&&m.autoReplaceSvg&&M.dom.i2svg({node:r})};function ha(a,e){return Object.defineProperty(a,"abstract",{get:e}),Object.defineProperty(a,"html",{get:function(){return a.abstract.map(function(r){return ta(r)})}}),Object.defineProperty(a,"node",{get:function(){if(T){var r=x.createElement("div");return r.innerHTML=a.html,r.children}}}),a}function di(a){var e=a.children,t=a.main,r=a.mask,n=a.attributes,i=a.styles,o=a.transform;if(Ga(o)&&t.found&&!r.found){var s=t.width,l=t.height,c={x:s/l/2,y:.5};n.style=ma(f(f({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:n,children:e}]}function mi(a){var e=a.prefix,t=a.iconName,r=a.children,n=a.attributes,i=a.symbol,o=i===!0?"".concat(e,"-").concat(m.cssPrefix,"-").concat(t):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},n),{},{id:o}),children:r}]}]}function vi(a){var e=["aria-label","aria-labelledby","title","role"];return e.some(function(t){return t in a})}function Ka(a){var e=a.icons,t=e.main,r=e.mask,n=a.prefix,i=a.iconName,o=a.transform,s=a.symbol,l=a.maskId,c=a.extra,u=a.watchable,d=u===void 0?!1:u,h=r.found?r:t,v=h.width,y=h.height,b=[m.replacementClass,i?"".concat(m.cssPrefix,"-").concat(i):""].filter(function(g){return c.classes.indexOf(g)===-1}).filter(function(g){return g!==""||!!g}).concat(c.classes).join(" "),S={children:[],attributes:f(f({},c.attributes),{},{"data-prefix":n,"data-icon":i,class:b,role:c.attributes.role||"img",viewBox:"0 0 ".concat(v," ").concat(y)})};!vi(c.attributes)&&!c.attributes["aria-hidden"]&&(S.attributes["aria-hidden"]="true"),d&&(S.attributes[D]="");var w=f(f({},S),{},{prefix:n,iconName:i,main:t,mask:r,maskId:l,transform:o,symbol:s,styles:f({},c.styles)}),A=r.found&&t.found?$("generateAbstractMask",w)||{children:[],attributes:{}}:$("generateAbstractIcon",w)||{children:[],attributes:{}},z=A.children,P=A.attributes;return w.children=z,w.attributes=P,s?mi(w):di(w)}function ve(a){var e=a.content,t=a.width,r=a.height,n=a.transform,i=a.extra,o=a.watchable,s=o===void 0?!1:o,l=f(f({},i.attributes),{},{class:i.classes.join(" ")});s&&(l[D]="");var c=f({},i.styles);Ga(n)&&(c.transform=Yn({transform:n,width:t,height:r}),c["-webkit-transform"]=c.transform);var u=ma(c);u.length>0&&(l.style=u);var d=[];return d.push({tag:"span",attributes:l,children:[e]}),d}function pi(a){var e=a.content,t=a.extra,r=f(f({},t.attributes),{},{class:t.classes.join(" ")}),n=ma(t.styles);n.length>0&&(r.style=n);var i=[];return i.push({tag:"span",attributes:r,children:[e]}),i}var Aa=L.styles;function Ta(a){var e=a[0],t=a[1],r=a.slice(4),n=da(r,1),i=n[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(xa.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(xa.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(xa.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:t,icon:o}}var hi={found:!1,width:512,height:512};function gi(a,e){!lt&&!m.showMissingIcons&&a&&console.error('Icon with name "'.concat(a,'" and prefix "').concat(e,'" is missing.'))}function _a(a,e){var t=e;return e==="fa"&&m.styleDefault!==null&&(e=j()),new Promise(function(r,n){if(t==="fa"){var i=zt(a)||{};a=i.iconName||a,e=i.prefix||e}if(a&&e&&Aa[e]&&Aa[e][a]){var o=Aa[e][a];return r(Ta(o))}gi(a,e),r(f(f({},hi),{},{icon:m.showMissingIcons&&a?$("missingIconAbstract")||{}:{}}))})}var pe=function(){},ja=m.measurePerformance&&na&&na.mark&&na.measure?na:{mark:pe,measure:pe},V='FA "7.1.0"',bi=function(e){return ja.mark("".concat(V," ").concat(e," begins")),function(){return Lt(e)}},Lt=function(e){ja.mark("".concat(V," ").concat(e," ends")),ja.measure("".concat(V," ").concat(e),"".concat(V," ").concat(e," begins"),"".concat(V," ").concat(e," ends"))},Ja={begin:bi,end:Lt},sa=function(){};function he(a){var e=a.getAttribute?a.getAttribute(D):null;return typeof e=="string"}function yi(a){var e=a.getAttribute?a.getAttribute(Wa):null,t=a.getAttribute?a.getAttribute(Ya):null;return e&&t}function xi(a){return a&&a.classList&&a.classList.contains&&a.classList.contains(m.replacementClass)}function Si(){if(m.autoReplaceSvg===!0)return la.replace;var a=la[m.autoReplaceSvg];return a||la.replace}function wi(a){return x.createElementNS("http://www.w3.org/2000/svg",a)}function Ai(a){return x.createElement(a)}function Ct(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.ceFn,r=t===void 0?a.tag==="svg"?wi:Ai:t;if(typeof a=="string")return x.createTextNode(a);var n=r(a.tag);Object.keys(a.attributes||[]).forEach(function(o){n.setAttribute(o,a.attributes[o])});var i=a.children||[];return i.forEach(function(o){n.appendChild(Ct(o,{ceFn:r}))}),n}function zi(a){var e=" ".concat(a.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var la={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(n){t.parentNode.insertBefore(Ct(n),t)}),t.getAttribute(D)===null&&m.keepOriginalSource){var r=x.createComment(zi(t));t.parentNode.replaceChild(r,t)}else t.remove()},nest:function(e){var t=e[0],r=e[1];if(~Ba(t).indexOf(m.replacementClass))return la.replace(e);var n=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===m.replacementClass||l.match(n)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return ta(s)}).join(`
`);t.setAttribute(D,""),t.innerHTML=o}};function ge(a){a()}function It(a,e){var t=typeof e=="function"?e:sa;if(a.length===0)t();else{var r=ge;m.mutateApproach===Ln&&(r=_.requestAnimationFrame||ge),r(function(){var n=Si(),i=Ja.begin("mutate");a.map(n),i(),t()})}}var qa=!1;function Pt(){qa=!0}function $a(){qa=!1}var ua=null;function be(a){if(te&&m.observeMutations){var e=a.treeCallback,t=e===void 0?sa:e,r=a.nodeCallback,n=r===void 0?sa:r,i=a.pseudoElementsCallback,o=i===void 0?sa:i,s=a.observeMutationsRoot,l=s===void 0?x:s;ua=new te(function(c){if(!qa){var u=j();X(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!he(d.addedNodes[0])&&(m.searchPseudoElements&&o(d.target),t(d.target)),d.type==="attributes"&&d.target.parentNode&&m.searchPseudoElements&&o([d.target],!0),d.type==="attributes"&&he(d.target)&&~Fn.indexOf(d.attributeName))if(d.attributeName==="class"&&yi(d.target)){var h=pa(Ba(d.target)),v=h.prefix,y=h.iconName;d.target.setAttribute(Wa,v||u),y&&d.target.setAttribute(Ya,y)}else xi(d.target)&&n(d.target)})}}),T&&ua.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ki(){ua&&ua.disconnect()}function Mi(a){var e=a.getAttribute("style"),t=[];return e&&(t=e.split(";").reduce(function(r,n){var i=n.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),t}function Li(a){var e=a.getAttribute("data-prefix"),t=a.getAttribute("data-icon"),r=a.innerText!==void 0?a.innerText.trim():"",n=pa(Ba(a));return n.prefix||(n.prefix=j()),e&&t&&(n.prefix=e,n.iconName=t),n.iconName&&n.prefix||(n.prefix&&r.length>0&&(n.iconName=qn(n.prefix,a.innerText)||Va(n.prefix,ht(a.innerText))),!n.iconName&&m.autoFetchSvg&&a.firstChild&&a.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=a.firstChild.data)),n}function Ci(a){var e=X(a.attributes).reduce(function(t,r){return t.name!=="class"&&t.name!=="style"&&(t[r.name]=r.value),t},{});return e}function Ii(){return{iconName:null,prefix:null,transform:I,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ye(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=Li(a),r=t.iconName,n=t.prefix,i=t.rest,o=Ci(a),s=Fa("parseNodeAttributes",{},a),l=e.styleParser?Mi(a):[];return f({iconName:r,prefix:n,transform:I,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Pi=L.styles;function Et(a){var e=m.autoReplaceSvg==="nest"?ye(a,{styleParser:!1}):ye(a);return~e.extra.classes.indexOf(ct)?$("generateLayersText",a,e):$("generateSvgReplacementMutation",a,e)}function Ei(){return[].concat(C(tt),C(rt))}function xe(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!T)return Promise.resolve();var t=x.documentElement.classList,r=function(d){return t.add("".concat(ie,"-").concat(d))},n=function(d){return t.remove("".concat(ie,"-").concat(d))},i=m.autoFetchSvg?Ei():$e.concat(Object.keys(Pi));i.includes("fa")||i.push("fa");var o=[".".concat(ct,":not([").concat(D,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(D,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=X(a.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),n("complete");else return Promise.resolve();var l=Ja.begin("onTree"),c=s.reduce(function(u,d){try{var h=Et(d);h&&u.push(h)}catch(v){lt||v.name==="MissingIcon"&&console.error(v)}return u},[]);return new Promise(function(u,d){Promise.all(c).then(function(h){It(h,function(){r("active"),r("complete"),n("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(h){l(),d(h)})})}function Ni(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Et(a).then(function(t){t&&It([t],e)})}function Fi(a){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Oa(e||{}),n=t.mask;return n&&(n=(n||{}).icon?n:Oa(n||{})),a(r,f(f({},t),{},{mask:n}))}}var Oi=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.transform,n=r===void 0?I:r,i=t.symbol,o=i===void 0?!1:i,s=t.mask,l=s===void 0?null:s,c=t.maskId,u=c===void 0?null:c,d=t.classes,h=d===void 0?[]:d,v=t.attributes,y=v===void 0?{}:v,b=t.styles,S=b===void 0?{}:b;if(e){var w=e.prefix,A=e.iconName,z=e.icon;return ha(f({type:"icon"},e),function(){return U("beforeDOMElementCreation",{iconDefinition:e,params:t}),Ka({icons:{main:Ta(z),mask:l?Ta(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:w,iconName:A,transform:f(f({},I),n),symbol:o,maskId:u,extra:{attributes:y,styles:S,classes:h}})})}},Ti={mixout:function(){return{icon:Fi(Oi)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=xe,t.nodeCallback=Ni,t}}},provides:function(e){e.i2svg=function(t){var r=t.node,n=r===void 0?x:r,i=t.callback,o=i===void 0?function(){}:i;return xe(n,o)},e.generateSvgReplacementMutation=function(t,r){var n=r.iconName,i=r.prefix,o=r.transform,s=r.symbol,l=r.mask,c=r.maskId,u=r.extra;return new Promise(function(d,h){Promise.all([_a(n,i),l.iconName?_a(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var y=da(v,2),b=y[0],S=y[1];d([t,Ka({icons:{main:b,mask:S},prefix:i,iconName:n,transform:o,symbol:s,maskId:c,extra:u,watchable:!0})])}).catch(h)})},e.generateAbstractIcon=function(t){var r=t.children,n=t.attributes,i=t.main,o=t.transform,s=t.styles,l=ma(s);l.length>0&&(n.style=l);var c;return Ga(o)&&(c=$("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:n}}}},_i={mixout:function(){return{layer:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.classes,i=n===void 0?[]:n;return ha({type:"layer"},function(){U("beforeDOMElementCreation",{assembler:t,params:r});var o=[];return t(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(C(i)).join(" ")},children:o}]})}}}},ji={mixout:function(){return{counter:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var n=r.classes,i=n===void 0?[]:n,o=r.attributes,s=o===void 0?{}:o,l=r.styles,c=l===void 0?{}:l;return ha({type:"counter",content:t},function(){return U("beforeDOMElementCreation",{content:t,params:r}),pi({content:t.toString(),extra:{attributes:s,styles:c,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(C(i))}})})}}}},$i={mixout:function(){return{text:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.transform,i=n===void 0?I:n,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,u=r.styles,d=u===void 0?{}:u;return ha({type:"text",content:t},function(){return U("beforeDOMElementCreation",{content:t,params:r}),ve({content:t,transform:f(f({},I),i),extra:{attributes:c,styles:d,classes:["".concat(m.cssPrefix,"-layers-text")].concat(C(s))}})})}}},provides:function(e){e.generateLayersText=function(t,r){var n=r.transform,i=r.extra,o=null,s=null;if(_e){var l=parseInt(getComputedStyle(t).fontSize,10),c=t.getBoundingClientRect();o=c.width/l,s=c.height/l}return Promise.resolve([t,ve({content:t.innerHTML,width:o,height:s,transform:n,extra:i,watchable:!0})])}}},Nt=new RegExp('"',"ug"),Se=[1105920,1112319],we=f(f(f(f({},{FontAwesome:{normal:"fas",400:"fas"}}),yr),kn),Cr),Ra=Object.keys(we).reduce(function(a,e){return a[e.toLowerCase()]=we[e],a},{}),Ri=Object.keys(Ra).reduce(function(a,e){var t=Ra[e];return a[e]=t[900]||C(Object.entries(t))[0][1],a},{});function Di(a){var e=a.replace(Nt,"");return ht(C(e)[0]||"")}function Ui(a){var e=a.getPropertyValue("font-feature-settings").includes("ss01"),t=a.getPropertyValue("content"),r=t.replace(Nt,""),n=r.codePointAt(0),i=n>=Se[0]&&n<=Se[1],o=r.length===2?r[0]===r[1]:!1;return i||o||e}function Wi(a,e){var t=a.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),n=isNaN(r)?"normal":r;return(Ra[t]||{})[n]||Ri[t]}function Ae(a,e){var t="".concat(Mn).concat(e.replace(":","-"));return new Promise(function(r,n){if(a.getAttribute(t)!==null)return r();var i=X(a.children),o=i.filter(function(ra){return ra.getAttribute(Ca)===e})[0],s=_.getComputedStyle(a,e),l=s.getPropertyValue("font-family"),c=l.match(En),u=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!c)return a.removeChild(o),r();if(c&&d!=="none"&&d!==""){var h=s.getPropertyValue("content"),v=Wi(l,u),y=Di(h),b=c[0].startsWith("FontAwesome"),S=Ui(s),w=Va(v,y),A=w;if(b){var z=Qn(y);z.iconName&&z.prefix&&(w=z.iconName,v=z.prefix)}if(w&&!S&&(!o||o.getAttribute(Wa)!==v||o.getAttribute(Ya)!==A)){a.setAttribute(t,A),o&&a.removeChild(o);var P=Ii(),g=P.extra;g.attributes[Ca]=e,_a(w,v).then(function(ra){var jt=Ka(f(f({},P),{},{icons:{main:ra,mask:kt()},prefix:v,iconName:A,extra:g,watchable:!0})),ga=x.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?a.insertBefore(ga,a.firstChild):a.appendChild(ga),ga.outerHTML=jt.map(function($t){return ta($t)}).join(`
`),a.removeAttribute(t),r()}).catch(n)}else r()}else r()})}function Yi(a){return Promise.all([Ae(a,"::before"),Ae(a,"::after")])}function Hi(a){return a.parentNode!==document.head&&!~Cn.indexOf(a.tagName.toUpperCase())&&!a.getAttribute(Ca)&&(!a.parentNode||a.parentNode.tagName!=="svg")}var Bi=function(e){return!!e&&st.some(function(t){return e.includes(t)})},Gi=function(e){if(!e)return[];var t=new Set,r=e.split(/,(?![^()]*\))/).map(function(l){return l.trim()});r=r.flatMap(function(l){return l.includes("(")?l:l.split(",").map(function(c){return c.trim()})});var n=oa(r),i;try{for(n.s();!(i=n.n()).done;){var o=i.value;if(Bi(o)){var s=st.reduce(function(l,c){return l.replace(c,"")},o);s!==""&&s!=="*"&&t.add(s)}}}catch(l){n.e(l)}finally{n.f()}return t};function ze(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(T){var t;if(e)t=a;else if(m.searchPseudoElementsFullScan)t=a.querySelectorAll("*");else{var r=new Set,n=oa(document.styleSheets),i;try{for(n.s();!(i=n.n()).done;){var o=i.value;try{var s=oa(o.cssRules),l;try{for(s.s();!(l=s.n()).done;){var c=l.value,u=Gi(c.selectorText),d=oa(u),h;try{for(d.s();!(h=d.n()).done;){var v=h.value;r.add(v)}}catch(b){d.e(b)}finally{d.f()}}}catch(b){s.e(b)}finally{s.f()}}catch(b){m.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(b.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(b){n.e(b)}finally{n.f()}if(!r.size)return;var y=Array.from(r).join(", ");try{t=a.querySelectorAll(y)}catch{}}return new Promise(function(b,S){var w=X(t).filter(Hi).map(Yi),A=Ja.begin("searchPseudoElements");Pt(),Promise.all(w).then(function(){A(),$a(),b()}).catch(function(){A(),$a(),S()})})}}var Xi={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=ze,t}}},provides:function(e){e.pseudoElements2svg=function(t){var r=t.node,n=r===void 0?x:r;m.searchPseudoElements&&ze(n)}}},ke=!1,Vi={mixout:function(){return{dom:{unwatch:function(){Pt(),ke=!0}}}},hooks:function(){return{bootstrap:function(){be(Fa("mutationObserverCallbacks",{}))},noAuto:function(){ki()},watch:function(t){var r=t.observeMutationsRoot;ke?$a():be(Fa("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Me=function(e){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,n){var i=n.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},t)},Ki={mixout:function(){return{parse:{transform:function(t){return Me(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,r){var n=r.getAttribute("data-fa-transform");return n&&(t.transform=Me(n)),t}}},provides:function(e){e.generateAbstractTransformGrouping=function(t){var r=t.main,n=t.transform,i=t.containerWidth,o=t.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(n.x*32,", ").concat(n.y*32,") "),c="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),u="rotate(".concat(n.rotate," 0 0)"),d={transform:"".concat(l," ").concat(c," ").concat(u)},h={transform:"translate(".concat(o/2*-1," -256)")},v={outer:s,inner:d,path:h};return{tag:"g",attributes:f({},v.outer),children:[{tag:"g",attributes:f({},v.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:f(f({},r.icon.attributes),v.path)}]}]}}}},za={x:0,y:0,width:"100%",height:"100%"};function Le(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.attributes&&(a.attributes.fill||e)&&(a.attributes.fill="black"),a}function Ji(a){return a.tag==="g"?a.children:[a]}var qi={hooks:function(){return{parseNodeAttributes:function(t,r){var n=r.getAttribute("data-fa-mask"),i=n?pa(n.split(" ").map(function(o){return o.trim()})):kt();return i.prefix||(i.prefix=j()),t.mask=i,t.maskId=r.getAttribute("data-fa-mask-id"),t}}},provides:function(e){e.generateAbstractMask=function(t){var r=t.children,n=t.attributes,i=t.main,o=t.mask,s=t.maskId,l=t.transform,c=i.width,u=i.icon,d=o.width,h=o.icon,v=Wn({transform:l,containerWidth:d,iconWidth:c}),y={tag:"rect",attributes:f(f({},za),{},{fill:"white"})},b=u.children?{children:u.children.map(Le)}:{},S={tag:"g",attributes:f({},v.inner),children:[Le(f({tag:u.tag,attributes:f(f({},u.attributes),v.path)},b))]},w={tag:"g",attributes:f({},v.outer),children:[S]},A="mask-".concat(s||se()),z="clip-".concat(s||se()),P={tag:"mask",attributes:f(f({},za),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,w]},g={tag:"defs",children:[{tag:"clipPath",attributes:{id:z},children:Ji(h)},P]};return r.push(g,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(z,")"),mask:"url(#".concat(A,")")},za)}),{children:r,attributes:n}}}},Qi={provides:function(e){var t=!1;_.matchMedia&&(t=_.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],n={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:f(f({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=f(f({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:f(f({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||s.children.push({tag:"animate",attributes:f(f({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:f(f({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:f(f({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||r.push({tag:"path",attributes:f(f({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Zi={hooks:function(){return{parseNodeAttributes:function(t,r){var n=r.getAttribute("data-fa-symbol"),i=n===null?!1:n===""?!0:n;return t.symbol=i,t}}}},a1=[Bn,Ti,_i,ji,$i,Xi,Vi,Ki,qi,Qi,Zi];si(a1,{mixoutsTo:M});M.noAuto;var Z=M.config;M.library;M.dom;var Ft=M.parse;M.findIconDefinition;M.toHtml;var e1=M.icon;M.layer;M.text;M.counter;function t1(a){return a=a-0,a===a}function Ot(a){return t1(a)?a:(a=a.replace(/[_-]+(.)?/g,(e,t)=>t?t.toUpperCase():""),a.charAt(0).toLowerCase()+a.slice(1))}function r1(a){return a.charAt(0).toUpperCase()+a.slice(1)}var Y=new Map,n1=1e3;function i1(a){if(Y.has(a))return Y.get(a);const e={};let t=0;const r=a.length;for(;t<r;){const n=a.indexOf(";",t),i=n===-1?r:n,o=a.slice(t,i).trim();if(o){const s=o.indexOf(":");if(s>0){const l=o.slice(0,s).trim(),c=o.slice(s+1).trim();if(l&&c){const u=Ot(l);e[u.startsWith("webkit")?r1(u):u]=c}}}t=i+1}if(Y.size===n1){const n=Y.keys().next().value;n&&Y.delete(n)}return Y.set(a,e),e}function Tt(a,e,t={}){if(typeof e=="string")return e;const r=(e.children||[]).map(u=>Tt(a,u)),n=e.attributes||{},i={};for(const[u,d]of Object.entries(n))switch(!0){case u==="class":{i.className=d;break}case u==="style":{i.style=i1(String(d));break}case u.startsWith("aria-"):case u.startsWith("data-"):{i[u.toLowerCase()]=d;break}default:i[Ot(u)]=d}const{style:o,role:s,"aria-label":l,...c}=t;return o&&(i.style=i.style?{...i.style,...o}:o),s&&(i.role=s),l&&(i["aria-label"]=l,i["aria-hidden"]="false"),a(e.tag,{...c,...i},...r)}var o1=Tt.bind(null,Ee.createElement),Ce=(a,e)=>{const t=Rt.useId();return a||(e?t:void 0)},s1=class{constructor(a="react-fontawesome"){this.enabled=!1;let e=!1;try{e=typeof process<"u"&&!1}catch{}this.scope=a,this.enabled=e}log(...a){this.enabled&&console.log(`[${this.scope}]`,...a)}warn(...a){this.enabled&&console.warn(`[${this.scope}]`,...a)}error(...a){this.enabled&&console.error(`[${this.scope}]`,...a)}},l1="searchPseudoElementsFullScan"in Z?"7.0.0":"6.0.0",f1=Number.parseInt(l1)>=7,q="fa",E={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse"},c1={left:"fa-pull-left",right:"fa-pull-right"},u1={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},d1={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},N={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto"};function m1(a){const e=Z.cssPrefix||Z.familyPrefix||q;return e===q?a:a.replace(new RegExp(String.raw`(?<=^|\s)${q}-`,"g"),`${e}-`)}function v1(a){const{beat:e,fade:t,beatFade:r,bounce:n,shake:i,spin:o,spinPulse:s,spinReverse:l,pulse:c,fixedWidth:u,inverse:d,border:h,flip:v,size:y,rotation:b,pull:S,swapOpacity:w,rotateBy:A,widthAuto:z,className:P}=a,g=[];return P&&g.push(...P.split(" ")),e&&g.push(E.beat),t&&g.push(E.fade),r&&g.push(E.beatFade),n&&g.push(E.bounce),i&&g.push(E.shake),o&&g.push(E.spin),l&&g.push(E.spinReverse),s&&g.push(E.spinPulse),c&&g.push(E.pulse),u&&g.push(N.fixedWidth),d&&g.push(N.inverse),h&&g.push(N.border),v===!0&&g.push(N.flip),(v==="horizontal"||v==="both")&&g.push(N.flipHorizontal),(v==="vertical"||v==="both")&&g.push(N.flipVertical),y!=null&&g.push(d1[y]),b!=null&&b!==0&&g.push(u1[b]),S!=null&&g.push(c1[S]),w&&g.push(N.swapOpacity),f1?(A&&g.push(N.rotateBy),z&&g.push(N.widthAuto),(Z.cssPrefix||Z.familyPrefix||q)===q?g:g.map(m1)):g}var p1=a=>typeof a=="object"&&"icon"in a&&!!a.icon;function Ie(a){if(a)return p1(a)?a:Ft.icon(a)}function h1(a){return Object.keys(a)}var Pe=new s1("FontAwesomeIcon"),_t={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},g1=new Set(Object.keys(_t)),b1=Ee.forwardRef((a,e)=>{const t={..._t,...a},{icon:r,mask:n,symbol:i,title:o,titleId:s,maskId:l,transform:c}=t,u=Ce(l,!!n),d=Ce(s,!!o),h=Ie(r);if(!h)return Pe.error("Icon lookup is undefined",r),null;const v=v1(t),y=typeof c=="string"?Ft.transform(c):c,b=Ie(n),S=e1(h,{...v.length>0&&{classes:v},...y&&{transform:y},...b&&{mask:b},symbol:i,title:o,titleId:d,maskId:u});if(!S)return Pe.error("Could not find icon",h),null;const{abstract:w}=S,A={ref:e};for(const z of h1(t))g1.has(z)||(A[z]=t[z]);return o1(w[0],A)});b1.displayName="FontAwesomeIcon";var P1={prefix:"fas",iconName:"calendar-check",icon:[448,512,[],"f274","M320 0c17.7 0 32 14.3 32 32l0 32 32 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l32 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32zm22 161.7c-10.7-7.8-25.7-5.4-33.5 5.3L189.1 331.2 137 279.1c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c5 5 11.9 7.5 18.8 7s13.4-4.1 17.5-9.8L347.3 195.2c7.8-10.7 5.4-25.7-5.3-33.5z"]},y1={prefix:"fas",iconName:"gears",icon:[640,512,["cogs"],"f085","M415.9 210.5c12.2-3.3 25 2.5 30.5 13.8L465 261.9c10.3 1.4 20.4 4.2 29.9 8.1l35-23.3c10.5-7 24.4-5.6 33.3 3.3l19.2 19.2c8.9 8.9 10.3 22.9 3.3 33.3l-23.3 34.9c1.9 4.7 3.6 9.6 5 14.7 1.4 5.1 2.3 10.1 3 15.2l37.7 18.6c11.3 5.6 17.1 18.4 13.8 30.5l-7 26.2c-3.3 12.1-14.6 20.3-27.2 19.5l-42-2.7c-6.3 8.1-13.6 15.6-21.9 22l2.7 41.9c.8 12.6-7.4 24-19.5 27.2l-26.2 7c-12.2 3.3-24.9-2.5-30.5-13.8l-18.6-37.6c-10.3-1.4-20.4-4.2-29.9-8.1l-35 23.3c-10.5 7-24.4 5.6-33.3-3.3l-19.2-19.2c-8.9-8.9-10.3-22.8-3.3-33.3l23.3-35c-1.9-4.7-3.6-9.6-5-14.7s-2.3-10.2-3-15.2l-37.7-18.6c-11.3-5.6-17-18.4-13.8-30.5l7-26.2c3.3-12.1 14.6-20.3 27.2-19.5l41.9 2.7c6.3-8.1 13.6-15.6 21.9-22l-2.7-41.8c-.8-12.6 7.4-24 19.5-27.2l26.2-7zM448.4 340a44 44 0 1 0 .1 88 44 44 0 1 0 -.1-88zM224.9-45.5l26.2 7c12.1 3.3 20.3 14.7 19.5 27.2l-2.7 41.8c8.3 6.4 15.6 13.8 21.9 22l42-2.7c12.5-.8 23.9 7.4 27.2 19.5l7 26.2c3.2 12.1-2.5 24.9-13.8 30.5l-37.7 18.6c-.7 5.1-1.7 10.2-3 15.2s-3.1 10-5 14.7l23.3 35c7 10.5 5.6 24.4-3.3 33.3L307.3 262c-8.9 8.9-22.8 10.3-33.3 3.3L239 242c-9.5 3.9-19.6 6.7-29.9 8.1l-18.6 37.6c-5.6 11.3-18.4 17-30.5 13.8l-26.2-7c-12.2-3.3-20.3-14.7-19.5-27.2l2.7-41.9c-8.3-6.4-15.6-13.8-21.9-22l-42 2.7c-12.5 .8-23.9-7.4-27.2-19.5l-7-26.2c-3.2-12.1 2.5-24.9 13.8-30.5l37.7-18.6c.7-5.1 1.7-10.1 3-15.2 1.4-5.1 3-10 5-14.7L55.1 46.5c-7-10.5-5.6-24.4 3.3-33.3L77.6-6c8.9-8.9 22.8-10.3 33.3-3.3l35 23.3c9.5-3.9 19.6-6.7 29.9-8.1l18.6-37.6c5.6-11.3 18.3-17 30.5-13.8zM192.4 84a44 44 0 1 0 0 88 44 44 0 1 0 0-88z"]},E1=y1,N1={prefix:"fas",iconName:"calculator",icon:[384,512,[128425],"f1ec","M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zM96 64l192 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L96 160c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32zm16 168a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm80 24a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm128-24a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM88 352a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm128-24a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm80 24a24 24 0 1 1 0-48 24 24 0 1 1 0 48zM64 424c0-13.3 10.7-24 24-24l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L88 448c-13.3 0-24-10.7-24-24zm232-24c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24z"]},x1={prefix:"fas",iconName:"cloud-arrow-up",icon:[576,512,[62338,"cloud-upload","cloud-upload-alt"],"f0ee","M144 480c-79.5 0-144-64.5-144-144 0-63.4 41-117.2 97.9-136.5-1.3-7.7-1.9-15.5-1.9-23.5 0-79.5 64.5-144 144-144 55.4 0 103.5 31.3 127.6 77.1 14.2-8.3 30.8-13.1 48.4-13.1 53 0 96 43 96 96 0 15.7-3.8 30.6-10.5 43.7 44 20.3 74.5 64.7 74.5 116.3 0 70.7-57.3 128-128 128l-304 0zM305 191c-9.4-9.4-24.6-9.4-33.9 0l-72 72c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l31-31 0 102.1c0 13.3 10.7 24 24 24s24-10.7 24-24l0-102.1 31 31c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-72-72z"]},F1=x1,O1={prefix:"fas",iconName:"basket-shopping",icon:[576,512,["shopping-basket"],"f291","M288 0c6.6 0 12.9 2.7 17.4 7.5l144 152 .5 .5 78.1 0c17.7 0 32 14.3 32 32 0 14.5-9.6 26.7-22.8 30.7L491.1 429.9c-6.5 29.3-32.5 50.1-62.5 50.1l-281.3 0c-30 0-56-20.8-62.5-50.1l-46-207.2c-13.2-3.9-22.8-16.2-22.8-30.7 0-17.7 14.3-32 32-32l78.1 0 .5-.5 144-152C275.1 2.7 281.4 0 288 0zm0 58.9L192.2 160 383.8 160 288 58.9zM208 264c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112zm80-24c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm128 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112z"]},T1={prefix:"fas",iconName:"cash-register",icon:[512,512,[],"f788","M96 0C60.7 0 32 28.7 32 64s28.7 64 64 64l48 0 0 32-57 0c-31.6 0-58.5 23.1-63.3 54.4L1.1 364.1C.4 368.8 0 373.6 0 378.4L0 448c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-69.6c0-4.8-.4-9.6-1.1-14.4L488.2 214.4C483.5 183.1 456.6 160 425 160l-217 0 0-32 48 0c35.3 0 64-28.7 64-64S291.3 0 256 0L96 0zm0 48l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L96 80c-8.8 0-16-7.2-16-16s7.2-16 16-16zM64 424c0-13.3 10.7-24 24-24l336 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L88 448c-13.3 0-24-10.7-24-24zm48-160a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm120-24a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM160 344a24 24 0 1 1 0-48 24 24 0 1 1 0 48zM328 240a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM256 344a24 24 0 1 1 0-48 24 24 0 1 1 0 48zM424 240a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM352 344a24 24 0 1 1 0-48 24 24 0 1 1 0 48z"]},_1={prefix:"fas",iconName:"share-nodes",icon:[512,512,["share-alt"],"f1e0","M384 192c53 0 96-43 96-96s-43-96-96-96-96 43-96 96c0 5.4 .5 10.8 1.3 16L159.6 184.1c-16.9-15-39.2-24.1-63.6-24.1-53 0-96 43-96 96s43 96 96 96c24.4 0 46.6-9.1 63.6-24.1L289.3 400c-.9 5.2-1.3 10.5-1.3 16 0 53 43 96 96 96s96-43 96-96-43-96-96-96c-24.4 0-46.6 9.1-63.6 24.1L190.7 272c.9-5.2 1.3-10.5 1.3-16s-.5-10.8-1.3-16l129.7-72.1c16.9 15 39.2 24.1 63.6 24.1z"]},j1={prefix:"fas",iconName:"percent",icon:[448,512,[62101,62785,"percentage"],"25","M192 128a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zM448 384a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zM438.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-384 384c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l384-384z"]},S1={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},$1=S1,R1={prefix:"fas",iconName:"boxes-stacked",icon:[512,512,[62625,"boxes","boxes-alt"],"f468","M224 0l0 64c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-64 32 0c35.3 0 64 28.7 64 64l0 128c0 5.5-.7 10.9-2 16l-252 0c-1.3-5.1-2-10.5-2-16l0-128c0-35.3 28.7-64 64-64l32 0zm96 512c-11.2 0-21.8-2.9-31-8 9.5-16.5 15-35.6 15-56l0-128c0-20.4-5.5-39.5-15-56 9.2-5.1 19.7-8 31-8l32 0 0 64c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-64 32 0c35.3 0 64 28.7 64 64l0 128c0 35.3-28.7 64-64 64l-128 0zM0 320c0-35.3 28.7-64 64-64l32 0 0 64c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-64 32 0c35.3 0 64 28.7 64 64l0 128c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 320z"]},w1={prefix:"fas",iconName:"floppy-disk",icon:[448,512,[128190,128426,"save"],"f0c7","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-242.7c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32L64 32zm32 96c0-17.7 14.3-32 32-32l160 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-64zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},D1=w1,U1={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6-46.8 43.5-78.1 95.4-93 131.1-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64-11.5 0-22.3-3-31.7-8.4-1 10.9-.1 22.1 2.9 33.2 13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-12.2-45.7-55.5-74.8-101.1-70.8 5.3 9.3 8.4 20.1 8.4 31.7z"]},W1={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z"]},Y1={prefix:"fas",iconName:"receipt",icon:[384,512,[129534],"f543","M14 2.2C22.5-1.7 32.5-.3 39.6 5.8L80 40.4 120.4 5.8c9-7.7 22.3-7.7 31.2 0L192 40.4 232.4 5.8c9-7.7 22.2-7.7 31.2 0L304 40.4 344.4 5.8c7.1-6.1 17.1-7.5 25.6-3.6S384 14.6 384 24l0 464c0 9.4-5.5 17.9-14 21.8s-18.5 2.5-25.6-3.6l-40.4-34.6-40.4 34.6c-9 7.7-22.2 7.7-31.2 0l-40.4-34.6-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L80 471.6 39.6 506.2c-7.1 6.1-17.1 7.5-25.6 3.6S0 497.4 0 488L0 24C0 14.6 5.5 6.1 14 2.2zM104 136c-13.3 0-24 10.7-24 24s10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0zM80 352c0 13.3 10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0c-13.3 0-24 10.7-24 24zm24-120c-13.3 0-24 10.7-24 24s10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0z"]},H1={prefix:"fas",iconName:"right-to-bracket",icon:[512,512,["sign-in-alt"],"f2f6","M345 273c9.4-9.4 9.4-24.6 0-33.9L201 95c-6.9-6.9-17.2-8.9-26.2-5.2S160 102.3 160 112l0 80-112 0c-26.5 0-48 21.5-48 48l0 32c0 26.5 21.5 48 48 48l112 0 0 80c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2L345 273zm7 143c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0z"]},A1={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L368 46.1 465.9 144 490.3 119.6c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L432 177.9 334.1 80 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"]},B1=A1,G1={prefix:"fas",iconName:"folder-open",icon:[576,512,[128194,128449,61717],"f07c","M56 225.6L32.4 296.2 32.4 96c0-35.3 28.7-64 64-64l138.7 0c13.8 0 27.3 4.5 38.4 12.8l38.4 28.8c5.5 4.2 12.3 6.4 19.2 6.4l117.3 0c35.3 0 64 28.7 64 64l0 16-365.4 0c-41.3 0-78 26.4-91.1 65.6zM477.8 448L99 448c-32.8 0-55.9-32.1-45.5-63.2l48-144C108 221.2 126.4 208 147 208l378.8 0c32.8 0 55.9 32.1 45.5 63.2l-48 144c-6.5 19.6-24.9 32.8-45.5 32.8z"]},X1={prefix:"fas",iconName:"print",icon:[512,512,[128424,128438,9113],"f02f","M64 64C64 28.7 92.7 0 128 0L341.5 0c17 0 33.3 6.7 45.3 18.7l42.5 42.5c12 12 18.7 28.3 18.7 45.3l0 37.5-384 0 0-80zM0 256c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 96c0 17.7-14.3 32-32 32l-32 0 0 64c0 35.3-28.7 64-64 64l-256 0c-35.3 0-64-28.7-64-64l0-64-32 0c-17.7 0-32-14.3-32-32l0-96zM128 416l0 32 256 0 0-96-256 0 0 64zM456 272a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z"]},V1={prefix:"fas",iconName:"users",icon:[640,512,[],"f0c0","M320 16a104 104 0 1 1 0 208 104 104 0 1 1 0-208zM96 88a72 72 0 1 1 0 144 72 72 0 1 1 0-144zM0 416c0-70.7 57.3-128 128-128 12.8 0 25.2 1.9 36.9 5.4-32.9 36.8-52.9 85.4-52.9 138.6l0 16c0 11.4 2.4 22.2 6.7 32L32 480c-17.7 0-32-14.3-32-32l0-32zm521.3 64c4.3-9.8 6.7-20.6 6.7-32l0-16c0-53.2-20-101.8-52.9-138.6 11.7-3.5 24.1-5.4 36.9-5.4 70.7 0 128 57.3 128 128l0 32c0 17.7-14.3 32-32 32l-86.7 0zM472 160a72 72 0 1 1 144 0 72 72 0 1 1 -144 0zM160 432c0-88.4 71.6-160 160-160s160 71.6 160 160l0 16c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-16z"]},K1={prefix:"fas",iconName:"database",icon:[448,512,[],"f1c0","M448 205.8c-14.8 9.8-31.8 17.7-49.5 24-47 16.8-108.7 26.2-174.5 26.2S96.4 246.5 49.5 229.8c-17.6-6.3-34.7-14.2-49.5-24L0 288c0 44.2 100.3 80 224 80s224-35.8 224-80l0-82.2zm0-77.8l0-48C448 35.8 347.7 0 224 0S0 35.8 0 80l0 48c0 44.2 100.3 80 224 80s224-35.8 224-80zM398.5 389.8C351.6 406.5 289.9 416 224 416S96.4 406.5 49.5 389.8c-17.6-6.3-34.7-14.2-49.5-24L0 432c0 44.2 100.3 80 224 80s224-35.8 224-80l0-66.2c-14.8 9.8-31.8 17.7-49.5 24z"]},J1={prefix:"fas",iconName:"money-bill-trend-up",icon:[512,512,[],"e529","M480 8c0-13.3-10.7-24-24-24L354.2-16c-13.3 0-24 10.7-24 24s10.7 24 24 24l43.9 0-111.3 111.3-95.1-81.5c-9-7.7-22.2-7.7-31.2 0l-112 96c-10.1 8.6-11.2 23.8-2.6 33.8s23.8 11.2 33.8 2.6l96.4-82.6 96.4 82.6c9.5 8.2 23.7 7.6 32.6-1.3l127-127 0 43.9c0 13.3 10.7 24 24 24s24-10.7 24-24L480 8zM48 256c-26.5 0-48 21.5-48 48L0 464c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-160c0-26.5-21.5-48-48-48L48 256zm47.3 56c-3.4 20.1-19.2 36-39.4 39.4-4.4 .7-8-2.9-8-7.3l0-32c0-4.4 3.6-8 8-8l32 0c4.4 0 8.1 3.6 7.3 8zm0 144.1c.7 4.4-2.9 8-7.3 8l-32 0c-4.4 0-8-3.6-8-8l0-32c0-4.4 3.6-8.1 8-7.3 20.1 3.4 36 19.2 39.4 39.4zM456 416.7c4.4-.7 8 2.9 8 7.3l0 32c0 4.4-3.6 8-8 8l-32 0c-4.4 0-8.1-3.6-7.3-8 3.4-20.1 19.2-36 39.4-39.4zM416.7 312c-.7-4.4 2.9-8 7.3-8l32 0c4.4 0 8 3.6 8 8l0 32c0 4.4-3.6 8.1-8 7.3-20.1-3.4-36-19.2-39.4-39.4zM192 384a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"]},q1={prefix:"fas",iconName:"user-shield",icon:[576,512,[],"f505","M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l251.5 0C261 469.4 240 414.5 240 356.4l0-31.1c0-7.3 1-14.5 2.9-21.3l-48.6 0zm251 184.5l-13.3 6.3 0-188.1 96 32 0 19.6c0 55.8-32.2 106.5-82.7 130.3zM421.9 259.5l-112 37.3c-13.1 4.4-21.9 16.6-21.9 30.4l0 31.1c0 74.4 43 142.1 110.2 173.7l18.5 8.7c4.8 2.2 10 3.4 15.2 3.4s10.5-1.2 15.2-3.4l18.5-8.7C533 500.3 576 432.6 576 358.2l0-31.1c0-13.8-8.8-26-21.9-30.4l-112-37.3c-6.6-2.2-13.7-2.2-20.2 0z"]},Q1={prefix:"fas",iconName:"user-clock",icon:[576,512,[],"f4fd","M224 8a120 120 0 1 1 0 240 120 120 0 1 1 0-240zM194.3 304l59.4 0c3.9 0 7.9 .1 11.8 .4-16.2 28.2-25.5 60.8-25.5 95.6 0 41.8 13.4 80.5 36 112L45.7 512C29.3 512 16 498.7 16 482.3 16 383.8 95.8 304 194.3 304zM288 400a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-80c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16l48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-48c0-8.8-7.2-16-16-16z"]},Z1={prefix:"fas",iconName:"box-open",icon:[640,512,[],"f49e","M560.3 237.2c10.4 11.8 28.3 14.4 41.8 5.5 14.7-9.8 18.7-29.7 8.9-44.4l-48-72c-2.8-4.2-6.6-7.7-11.1-10.2L351.4 4.7c-19.3-10.7-42.8-10.7-62.2 0L88.8 116c-5.4 3-9.7 7.4-12.6 12.8L27.7 218.7c-12.6 23.4-3.8 52.5 19.6 65.1l33 17.7 0 53.3c0 23 12.4 44.3 32.4 55.7l176 99.7c19.6 11.1 43.5 11.1 63.1 0l176-99.7c20.1-11.4 32.4-32.6 32.4-55.7l0-117.5zm-240-9.8L170.2 144 320.3 60.6 470.4 144 320.3 227.4zm-41.5 50.2l-21.3 46.2-165.8-88.8 25.4-47.2 161.7 89.8z"]},ao={prefix:"fas",iconName:"clipboard-list",icon:[384,512,[],"f46d","M311.4 32l8.6 0c35.3 0 64 28.7 64 64l0 352c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l8.6 0C83.6 12.9 104.3 0 128 0L256 0c23.7 0 44.4 12.9 55.4 32zM248 112c13.3 0 24-10.7 24-24s-10.7-24-24-24L136 64c-13.3 0-24 10.7-24 24s10.7 24 24 24l112 0zM128 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm32 0c0 13.3 10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-112 0c-13.3 0-24 10.7-24 24zm0 128c0 13.3 10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-112 0c-13.3 0-24 10.7-24 24zM96 416a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]},eo={prefix:"fas",iconName:"money-bill-wave",icon:[512,512,[],"f53a","M0 419.6L0 109.5c0-23.2 24.1-38.6 46.3-32 87.7 26.2 149.7 5.5 212.1-15.3 64.5-21.5 129.4-43.1 223.3-13.1 18.5 5.9 30.3 23.8 30.3 43.3l0 310.1c0 23.2-24.1 38.6-46.2 32-87.7-26.2-149.8-5.5-212.1 15.3-64.5 21.5-129.4 43.1-223.3 13.1-18.5-5.9-30.3-23.8-30.3-43.3zM336 256c0-53-35.8-96-80-96s-80 43-80 96 35.8 96 80 96 80-43 80-96zM120 413.6c4.4 0 7.9-3.8 7.2-8.1-4.6-27.8-27-49.5-55.2-53-4.4-.5-8 3.1-8 7.5l0 39.9c0 3.6 2.4 6.8 6 7.7 17.9 4.2 34.3 6.1 50 6.1zm318.5-51.1c5 .8 9.5-3 9.5-8l0-42.6c0-4.4-3.6-8.1-8-7.5-25.2 3.1-45.9 20.9-53.2 44.6-1.4 4.7 2.3 9.1 7.2 9.2 14.2 .4 29 1.7 44.4 4.3zM448 152l0-39.9c0-3.6-2.5-6.8-6-7.7-17.9-4.2-34.3-6.1-50-6.1-4.4 0-7.9 3.8-7.2 8.1 4.6 27.8 27 49.5 55.2 53 4.4 .5 8-3.1 8-7.5zM125.2 162.9c1.4-4.7-2.3-9.1-7.2-9.2-14.2-.4-29-1.7-44.4-4.3-5-.8-9.5 3-9.5 8L64 200c0 4.4 3.6 8.1 8 7.5 25.2-3.1 45.9-20.9 53.2-44.6z"]},to={prefix:"fas",iconName:"building",icon:[384,512,[127970,61687],"f1ad","M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zM176 352l32 0c17.7 0 32 14.3 32 32l0 80-96 0 0-80c0-17.7 14.3-32 32-32zM96 112c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM240 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM96 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm144-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z"]},ro={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z"]},no={prefix:"fas",iconName:"spinner",icon:[512,512,[],"f110","M208 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm0 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM48 208a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm368 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM75 369.1A48 48 0 1 1 142.9 437 48 48 0 1 1 75 369.1zM75 75A48 48 0 1 1 142.9 142.9 48 48 0 1 1 75 75zM437 369.1A48 48 0 1 1 369.1 437 48 48 0 1 1 437 369.1z"]},io={prefix:"fas",iconName:"barcode",icon:[448,512,[],"f02a","M32 32C14.3 32 0 46.3 0 64L0 448c0 17.7 14.3 32 32 32s32-14.3 32-32L64 64c0-17.7-14.3-32-32-32zm88 0c-13.3 0-24 10.7-24 24l0 400c0 13.3 10.7 24 24 24s24-10.7 24-24l0-400c0-13.3-10.7-24-24-24zm72 32l0 384c0 17.7 14.3 32 32 32s32-14.3 32-32l0-384c0-17.7-14.3-32-32-32s-32 14.3-32 32zm208-8l0 400c0 13.3 10.7 24 24 24s24-10.7 24-24l0-400c0-13.3-10.7-24-24-24s-24 10.7-24 24zm-96 0l0 400c0 13.3 10.7 24 24 24s24-10.7 24-24l0-400c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},z1={prefix:"fas",iconName:"right-left",icon:[512,512,["exchange-alt"],"f362","M502.6 150.6l-96 96c-9.2 9.2-22.9 11.9-34.9 6.9S352 236.9 352 224l0-64-320 0c-17.7 0-32-14.3-32-32S14.3 96 32 96l320 0 0-64c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l96 96c12.5 12.5 12.5 32.8 0 45.3zm-397.3 352l-96-96c-12.5-12.5-12.5-32.8 0-45.3l96-96c9.2-9.2 22.9-11.9 34.9-6.9S160 275.1 160 288l0 64 320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-320 0 0 64c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9z"]},oo=z1,so={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"]},lo={prefix:"fas",iconName:"lock-open",icon:[576,512,[],"f3c1","M384 96c0-35.3 28.7-64 64-64s64 28.7 64 64l0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32c0-70.7-57.3-128-128-128S320 25.3 320 96l0 64-160 0c-35.3 0-64 28.7-64 64l0 224c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64l-32 0 0-64z"]},fo={prefix:"fas",iconName:"tags",icon:[576,512,[],"f02c","M401.2 39.1L549.4 189.4c27.7 28.1 27.7 73.1 0 101.2L393 448.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L515.3 256.8c9.2-9.3 9.2-24.4 0-33.7L367 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM32.1 229.5L32.1 96c0-35.3 28.7-64 64-64l133.5 0c17 0 33.3 6.7 45.3 18.7l144 144c25 25 25 65.5 0 90.5L285.4 418.7c-25 25-65.5 25-90.5 0l-144-144c-12-12-18.7-28.3-18.7-45.3zm144-85.5a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},co={prefix:"fas",iconName:"id-card",icon:[576,512,[62147,"drivers-license"],"f2c2","M0 96C0 60.7 28.7 32 64 32l448 0c35.3 0 64 28.7 64 64L0 96zm0 48l576 0 0 272c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 144zM247.3 416c20.2 0 35.3-19.4 22.4-35-14.7-17.7-36.9-29-61.7-29l-64 0c-24.8 0-47 11.3-61.7 29-12.9 15.6 2.2 35 22.4 35l142.5 0zM176 312a56 56 0 1 0 0-112 56 56 0 1 0 0 112zM360 208c-13.3 0-24 10.7-24 24s10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-112 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-112 0z"]},uo={prefix:"fas",iconName:"address-book",icon:[512,512,[62138,"contact-book"],"f2b9","M96 0C60.7 0 32 28.7 32 64l0 384c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L96 0zM208 288l64 0c44.2 0 80 35.8 80 80 0 8.8-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16 0-44.2 35.8-80 80-80zm-24-96a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64zm0 128c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64zM496 320c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64c0-8.8-7.2-16-16-16z"]},k1={prefix:"fas",iconName:"clock-rotate-left",icon:[576,512,["history"],"f1da","M288 64c106 0 192 86 192 192S394 448 288 448c-65.2 0-122.9-32.5-157.6-82.3-10.1-14.5-30.1-18-44.6-7.9s-18 30.1-7.9 44.6C124.1 468.6 201 512 288 512 429.4 512 544 397.4 544 256S429.4 0 288 0C202.3 0 126.5 42.1 80 106.7L80 80c0-17.7-14.3-32-32-32S16 62.3 16 80l0 112c0 17.7 14.3 32 32 32l24.6 0c.5 0 1 0 1.5 0l86 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-38.3 0C154.9 102.6 217 64 288 64zm24 88c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 104c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65 0-94.1z"]},mo=k1,M1={prefix:"fas",iconName:"truck-ramp-box",icon:[576,512,["truck-loading"],"f4de","M400 32c-44.2 0-80 35.8-80 80l0 248.2-297.2 89.2C5.9 454.4-3.7 472.3 1.4 489.2s22.9 26.5 39.8 21.5l315.5-94.6 43.7 0c-.2 2.6-.4 5.3-.4 8 0 48.6 39.4 88 88 88s88-39.4 88-88l0-392-176 0zM528 424c0 22.1-17.9 40-40 40s-40-17.9-40-40 17.9-40 40-40c22.1 0 39.9 17.9 40 39.9l0 .1zM51.9 149.5C18.1 159.8-.9 195.6 9.4 229.4l28.1 91.8C47.8 355 83.6 374 117.4 363.7l91.8-28.1c33.8-10.3 52.8-46.1 42.5-79.9l-28.1-91.8c-10.3-33.8-46.1-52.8-79.9-42.5L51.9 149.5z"]},vo=M1,po={prefix:"fas",iconName:"chart-pie",icon:[576,512,["pie-chart"],"f200","M512.4 240l-176 0c-17.7 0-32-14.3-32-32l0-176c0-17.7 14.4-32.2 31.9-29.9 107 14.2 191.8 99 206 206 2.3 17.5-12.2 31.9-29.9 31.9zM222.6 37.2c18.1-3.8 33.8 11 33.8 29.5l0 197.3c0 5.6 2 11 5.5 15.3L394 438.7c11.7 14.1 9.2 35.4-6.9 44.1-34.1 18.6-73.2 29.2-114.7 29.2-132.5 0-240-107.5-240-240 0-115.5 81.5-211.9 190.2-234.8zM477.8 288l64 0c18.5 0 33.3 15.7 29.5 33.8-10.2 48.4-35 91.4-69.6 124.2-12.3 11.7-31.6 9.2-42.4-3.9L374.9 340.4c-17.3-20.9-2.4-52.4 24.6-52.4l78.2 0z"]},ho={prefix:"fas",iconName:"credit-card",icon:[512,512,[128179,62083,"credit-card-alt"],"f09d","M0 128l0 32 512 0 0-32c0-35.3-28.7-64-64-64L64 64C28.7 64 0 92.7 0 128zm0 80L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-176-512 0zM64 360c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24zm144 0c0-13.3 10.7-24 24-24l64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0c-13.3 0-24-10.7-24-24z"]},L1={prefix:"fas",iconName:"triangle-exclamation",icon:[512,512,[9888,"exclamation-triangle","warning"],"f071","M256 0c14.7 0 28.2 8.1 35.2 21l216 400c6.7 12.4 6.4 27.4-.8 39.5S486.1 480 472 480L40 480c-14.1 0-27.2-7.4-34.4-19.5s-7.5-27.1-.8-39.5l216-400c7-12.9 20.5-21 35.2-21zm0 352a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0-192c-18.2 0-32.7 15.5-31.4 33.7l7.4 104c.9 12.5 11.4 22.3 23.9 22.3 12.6 0 23-9.7 23.9-22.3l7.4-104c1.3-18.2-13.1-33.7-31.4-33.7z"]},go=L1,bo={prefix:"fas",iconName:"store",icon:[512,512,[],"f54e","M30.7 72.3C37.6 48.4 59.5 32 84.4 32l344 0c24.9 0 46.8 16.4 53.8 40.3l23.4 80.2c12.8 43.7-20.1 87.5-65.6 87.5-26.3 0-49.4-14.9-60.8-37.1-11.6 21.9-34.6 37.1-61.4 37.1-26.6 0-49.7-15-61.3-37-11.6 22-34.7 37-61.3 37-26.8 0-49.8-15.1-61.4-37.1-11.4 22.1-34.5 37.1-60.8 37.1-45.6 0-78.4-43.7-65.6-87.5L30.7 72.3zM96.4 352l320 0 0-66.4c7.6 1.6 15.5 2.4 23.5 2.4 14.3 0 28-2.6 40.5-7.2l0 151.2c0 26.5-21.5 48-48 48l-352 0c-26.5 0-48-21.5-48-48l0-151.2c12.5 4.6 26.1 7.2 40.5 7.2 8.1 0 15.9-.8 23.5-2.4l0 66.4z"]},yo={prefix:"fas",iconName:"download",icon:[448,512,[],"f019","M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 242.7 256 32zM64 320c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-46.9 0-56.6 56.6c-31.2 31.2-81.9 31.2-113.1 0L110.9 320 64 320zm304 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},xo={prefix:"fas",iconName:"file-pdf",icon:[576,512,[],"f1c1","M96 0C60.7 0 32 28.7 32 64l0 384c0 35.3 28.7 64 64 64l80 0 0-112c0-35.3 28.7-64 64-64l176 0 0-165.5c0-17-6.7-33.3-18.7-45.3L290.7 18.7C278.7 6.7 262.5 0 245.5 0L96 0zM357.5 176L264 176c-13.3 0-24-10.7-24-24L240 58.5 357.5 176zM240 380c-11 0-20 9-20 20l0 128c0 11 9 20 20 20s20-9 20-20l0-28 12 0c33.1 0 60-26.9 60-60s-26.9-60-60-60l-32 0zm32 80l-12 0 0-40 12 0c11 0 20 9 20 20s-9 20-20 20zm96-80c-11 0-20 9-20 20l0 128c0 11 9 20 20 20l32 0c28.7 0 52-23.3 52-52l0-64c0-28.7-23.3-52-52-52l-32 0zm20 128l0-88 12 0c6.6 0 12 5.4 12 12l0 64c0 6.6-5.4 12-12 12l-12 0zm88-108l0 128c0 11 9 20 20 20s20-9 20-20l0-44 28 0c11 0 20-9 20-20s-9-20-20-20l-28 0 0-24 28 0c11 0 20-9 20-20s-9-20-20-20l-48 0c-11 0-20 9-20 20z"]},So={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"]},wo={prefix:"fas",iconName:"box",icon:[448,512,[128230],"f466","M369.4 128l-34.3-48-222.1 0-34.3 48 290.7 0zM0 148.5c0-13.3 4.2-26.3 11.9-37.2L60.9 42.8C72.9 26 92.3 16 112.9 16l222.1 0c20.7 0 40.1 10 52.1 26.8l48.9 68.5c7.8 10.9 11.9 23.9 11.9 37.2L448 416c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 148.5z"]},Ao={prefix:"fas",iconName:"eye-slash",icon:[576,512,[],"f070","M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM204.5 138.7c23.5-16.8 52.4-26.7 83.5-26.7 79.5 0 144 64.5 144 144 0 31.1-9.9 59.9-26.7 83.5l-34.7-34.7c12.7-21.4 17-47.7 10.1-73.7-13.7-51.2-66.4-81.6-117.6-67.9-8.6 2.3-16.7 5.7-24 10l-34.7-34.7zM325.3 395.1c-11.9 3.2-24.4 4.9-37.3 4.9-79.5 0-144-64.5-144-144 0-12.9 1.7-25.4 4.9-37.3L69.4 139.2c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6l-64.2-64.2z"]},zo={prefix:"fas",iconName:"users-gear",icon:[640,512,["users-cog"],"f509","M320 224a104 104 0 1 0 0-208 104 104 0 1 0 0 208zM96 232a72 72 0 1 0 0-144 72 72 0 1 0 0 144zM0 416l0 32c0 17.7 14.3 32 32 32l86.7 0c-4.3-9.8-6.7-20.6-6.7-32l0-16c0-53.2 20-101.8 52.9-138.6-11.7-3.5-24.1-5.4-36.9-5.4-70.7 0-128 57.3-128 128zM616 160a72 72 0 1 0 -144 0 72 72 0 1 0 144 0zM160 432l0 16c0 17.7 14.3 32 32 32l156.8 0c-7.1-21.6-6.3-44.4 10.7-64-14-16.2-20.5-39.7-11.4-63.3 6.6-17.1 15.9-33.1 27.4-47.3 5.4-6.6 11.6-11.7 18.3-15.4-22.1-11.5-47.2-18-73.8-18-88.4 0-160 71.6-160 160zm464.6-44.1c6.3-3.6 9.5-11.1 6.8-18-4.8-12.4-11.5-24.1-19.9-34.4-4.6-5.7-12.7-6.7-19-3-21.8 12.6-48.6-2.8-48.6-28.1 0-7.3-4.9-13.8-12.1-14.9-12.9-2-26.8-2-39.7 0-7.2 1.1-12.1 7.6-12.1 14.9 0 25.2-26.8 40.7-48.6 28.1-6.3-3.6-14.4-2.6-19 3-8.4 10.3-15.1 22-19.9 34.4-2.6 6.8 .5 14.3 6.8 17.9 21.9 12.6 21.9 43.5 0 56.2-6.3 3.6-9.5 11.1-6.8 17.9 4.8 12.4 11.5 24.1 19.9 34.4 4.6 5.7 12.7 6.7 19 3 21.8-12.6 48.6 2.9 48.6 28.1 0 7.3 4.9 13.8 12.1 14.9 12.9 2 26.8 2 39.7 0 7.2-1.1 12.1-7.6 12.1-14.9 0-25.2 26.8-40.7 48.6-28.1 6.3 3.6 14.4 2.6 19-3 8.4-10.3 15.1-22 19.9-34.4 2.6-6.8-.5-14.3-6.8-17.9-21.9-12.6-21.9-43.5 0-56.2zM472 416a40 40 0 1 1 80 0 40 40 0 1 1 -80 0z"]},ko={prefix:"fas",iconName:"list-check",icon:[512,512,["tasks"],"f0ae","M133.8 36.3c10.9 7.6 13.5 22.6 5.9 33.4l-56 80c-4.1 5.8-10.5 9.5-17.6 10.1S52 158 47 153L7 113C-2.3 103.6-2.3 88.4 7 79S31.6 69.7 41 79l19.8 19.8 39.6-56.6c7.6-10.9 22.6-13.5 33.4-5.9zm0 160c10.9 7.6 13.5 22.6 5.9 33.4l-56 80c-4.1 5.8-10.5 9.5-17.6 10.1S52 318 47 313L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l19.8 19.8 39.6-56.6c7.6-10.9 22.6-13.5 33.4-5.9zM224 96c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32zM64 376a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"]},C1={prefix:"fas",iconName:"arrows-rotate",icon:[512,512,[128472,"refresh","sync"],"f021","M65.9 228.5c13.3-93 93.4-164.5 190.1-164.5 53 0 101 21.5 135.8 56.2 .2 .2 .4 .4 .6 .6l7.6 7.2-47.9 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 53.4-11.3-10.7C390.5 28.6 326.5 0 256 0 127 0 20.3 95.4 2.6 219.5 .1 237 12.2 253.2 29.7 255.7s33.7-9.7 36.2-27.1zm443.5 64c2.5-17.5-9.7-33.7-27.1-36.2s-33.7 9.7-36.2 27.1c-13.3 93-93.4 164.5-190.1 164.5-53 0-101-21.5-135.8-56.2-.2-.2-.4-.4-.6-.6l-7.6-7.2 47.9 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 320c-8.5 0-16.7 3.4-22.7 9.5S-.1 343.7 0 352.3l1 127c.1 17.7 14.6 31.9 32.3 31.7S65.2 496.4 65 478.7l-.4-51.5 10.7 10.1c46.3 46.1 110.2 74.7 180.7 74.7 129 0 235.7-95.4 253.4-219.5z"]},Mo=C1,Lo={prefix:"fas",iconName:"list-ul",icon:[512,512,["list-dots"],"f0ca","M48 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM48 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM96 256a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"]},Co={prefix:"fas",iconName:"hand-holding-dollar",icon:[576,512,["hand-holding-usd"],"f4c0","M288-16c-13.3 0-24 10.7-24 24l0 12-1.8 0c-36.6 0-66.2 29.7-66.2 66.2 0 33.4 24.9 61.6 58 65.7l61 7.6c5.1 .6 9 5 9 10.2 0 5.7-4.6 10.2-10.2 10.2L240 180c-15.5 0-28 12.5-28 28s12.5 28 28 28l24 0 0 12c0 13.3 10.7 24 24 24s24-10.7 24-24l0-12 1.8 0c36.6 0 66.2-29.7 66.2-66.2 0-33.4-24.9-61.6-58-65.7l-61-7.6c-5.1-.6-9-5-9-10.2 0-5.7 4.6-10.2 10.2-10.2L328 76c15.5 0 28-12.5 28-28s-12.5-28-28-28l-16 0 0-12c0-13.3-10.7-24-24-24zM109.3 341.5L66.7 384 32 384c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l320.5 0c29 0 57.3-9.3 80.7-26.5l126.6-93.3c17.8-13.1 21.6-38.1 8.5-55.9s-38.1-21.6-55.9-8.5L392.6 416 280 416c-13.3 0-24-10.7-24-24s10.7-24 24-24l72 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-152.2 0c-33.9 0-66.5 13.5-90.5 37.5z"]},Io={prefix:"fas",iconName:"cart-shopping",icon:[640,512,[128722,"shopping-cart"],"f07a","M24-16C10.7-16 0-5.3 0 8S10.7 32 24 32l45.3 0c3.9 0 7.2 2.8 7.9 6.6l52.1 286.3c6.2 34.2 36 59.1 70.8 59.1L456 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-255.9 0c-11.6 0-21.5-8.3-23.6-19.7l-5.1-28.3 303.6 0c30.8 0 57.2-21.9 62.9-52.2L568.9 69.9C572.6 50.2 557.5 32 537.4 32l-412.7 0-.4-2c-4.8-26.6-28-46-55.1-46L24-16zM208 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm224 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"]};export{E1 as $,Ao as A,U1 as B,wo as C,eo as D,Co as E,b1 as F,Q1 as G,Y1 as H,q1 as I,Mo as J,co as K,zo as L,G1 as M,ho as N,K1 as O,lo as P,mo as Q,to as R,j1 as S,yo as T,F1 as U,Lo as V,P1 as W,po as X,ao as Y,xo as Z,J1 as _,so as a,no as b,H1 as c,bo as d,Io as e,ro as f,O1 as g,fo as h,T1 as i,io as j,R1 as k,X1 as l,$1 as m,W1 as n,N1 as o,oo as p,So as q,Z1 as r,D1 as s,go as t,B1 as u,V1 as v,uo as w,vo as x,ko as y,_1 as z};
