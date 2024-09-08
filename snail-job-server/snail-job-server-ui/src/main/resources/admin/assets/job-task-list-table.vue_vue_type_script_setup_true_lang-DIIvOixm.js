import{bF as Mt,d3 as St,a as le,b0 as vt,bp as pe,b5 as Nt,bq as Ie,bv as jt,d as Qe,b6 as Rt,r as _e,i as Ot,q as Me,ba as De,b9 as et,bc as Ct,al as Le,aR as oe,bl as tt,o as Ee,b as nt,e as st,cj as Tt,$ as L,f as v,B as Q,d4 as Bt,Y as $t,aJ as Pe,a3 as He,c as Ue,w as ee,h as W,a4 as At,d5 as It,g as We,ai as Dt,ak as Lt,d6 as ze,aa as Pt,F as Ht,d7 as Ge}from"./index-FUIa4-vU.js";import{u as Ut}from"./table-DGi3nvCm.js";import{j as Wt,k as zt}from"./job-CSfapI8R.js";import{b as Gt}from"./Grid-C3gcBClN.js";function Ft(e,t){const n=Mt(St,null);return le(()=>e.hljs||(n==null?void 0:n.mergedHljsRef.value))}function Kt(e){const{textColor2:t,fontSize:n,fontWeightStrong:l,textColor3:p}=e;return{textColor:t,fontSize:n,fontWeightStrong:l,"mono-3":"#a0a1a7","hue-1":"#0184bb","hue-2":"#4078f2","hue-3":"#a626a4","hue-4":"#50a14f","hue-5":"#e45649","hue-5-2":"#c91243","hue-6":"#986801","hue-6-2":"#c18401",lineNumberTextColor:p}}const Jt={name:"Code",common:vt,self:Kt},qt=pe([Nt("code",`
 font-size: var(--n-font-size);
 font-family: var(--n-font-family);
 `,[Ie("show-line-numbers",`
 display: flex;
 `),jt("line-numbers",`
 user-select: none;
 padding-right: 12px;
 text-align: right;
 transition: color .3s var(--n-bezier);
 color: var(--n-line-number-text-color);
 `),Ie("word-wrap",[pe("pre",`
 white-space: pre-wrap;
 word-break: break-all;
 `)]),pe("pre",`
 margin: 0;
 line-height: inherit;
 font-size: inherit;
 font-family: inherit;
 `),pe("[class^=hljs]",`
 color: var(--n-text-color);
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),({props:e})=>{const t=`${e.bPrefix}code`;return[`${t} .hljs-comment,
 ${t} .hljs-quote {
 color: var(--n-mono-3);
 font-style: italic;
 }`,`${t} .hljs-doctag,
 ${t} .hljs-keyword,
 ${t} .hljs-formula {
 color: var(--n-hue-3);
 }`,`${t} .hljs-section,
 ${t} .hljs-name,
 ${t} .hljs-selector-tag,
 ${t} .hljs-deletion,
 ${t} .hljs-subst {
 color: var(--n-hue-5);
 }`,`${t} .hljs-literal {
 color: var(--n-hue-1);
 }`,`${t} .hljs-string,
 ${t} .hljs-regexp,
 ${t} .hljs-addition,
 ${t} .hljs-attribute,
 ${t} .hljs-meta-string {
 color: var(--n-hue-4);
 }`,`${t} .hljs-built_in,
 ${t} .hljs-class .hljs-title {
 color: var(--n-hue-6-2);
 }`,`${t} .hljs-attr,
 ${t} .hljs-variable,
 ${t} .hljs-template-variable,
 ${t} .hljs-type,
 ${t} .hljs-selector-class,
 ${t} .hljs-selector-attr,
 ${t} .hljs-selector-pseudo,
 ${t} .hljs-number {
 color: var(--n-hue-6);
 }`,`${t} .hljs-symbol,
 ${t} .hljs-bullet,
 ${t} .hljs-link,
 ${t} .hljs-meta,
 ${t} .hljs-selector-id,
 ${t} .hljs-title {
 color: var(--n-hue-2);
 }`,`${t} .hljs-emphasis {
 font-style: italic;
 }`,`${t} .hljs-strong {
 font-weight: var(--n-font-weight-strong);
 }`,`${t} .hljs-link {
 text-decoration: underline;
 }`]}]),Vt=Object.assign(Object.assign({},et.props),{language:String,code:{type:String,default:""},trim:{type:Boolean,default:!0},hljs:Object,uri:Boolean,inline:Boolean,wordWrap:Boolean,showLineNumbers:Boolean,internalFontSize:Number,internalNoHighlight:Boolean}),Fe=Qe({name:"Code",props:Vt,setup(e,{slots:t}){const{internalNoHighlight:n}=e,{mergedClsPrefixRef:l,inlineThemeDisabled:p}=Rt(),g=_e(null),i=n?{value:void 0}:Ft(e),a=(S,C,j)=>{const{value:B}=i;return!B||!(S&&B.getLanguage(S))?null:B.highlight(j?C.trim():C,{language:S}).value},f=le(()=>e.inline||e.wordWrap?!1:e.showLineNumbers),m=()=>{if(t.default)return;const{value:S}=g;if(!S)return;const{language:C}=e,j=e.uri?window.decodeURIComponent(e.code):e.code;if(C){const $=a(C,j,e.trim);if($!==null){if(e.inline)S.innerHTML=$;else{const q=S.querySelector(".__code__");q&&S.removeChild(q);const z=document.createElement("pre");z.className="__code__",z.innerHTML=$,S.appendChild(z)}return}}if(e.inline){S.textContent=j;return}const B=S.querySelector(".__code__");if(B)B.textContent=j;else{const $=document.createElement("pre");$.className="__code__",$.textContent=j,S.innerHTML="",S.appendChild($)}};Ot(m),Me(De(e,"language"),m),Me(De(e,"code"),m),n||Me(i,m);const M=et("Code","-code",qt,Jt,e,l),P=le(()=>{const{common:{cubicBezierEaseInOut:S,fontFamilyMono:C},self:{textColor:j,fontSize:B,fontWeightStrong:$,lineNumberTextColor:q,"mono-3":z,"hue-1":V,"hue-2":fe,"hue-3":se,"hue-4":ie,"hue-5":o,"hue-5-2":_,"hue-6":w,"hue-6-2":R}}=M.value,{internalFontSize:E}=e;return{"--n-font-size":E?`${E}px`:B,"--n-font-family":C,"--n-font-weight-strong":$,"--n-bezier":S,"--n-text-color":j,"--n-mono-3":z,"--n-hue-1":V,"--n-hue-2":fe,"--n-hue-3":se,"--n-hue-4":ie,"--n-hue-5":o,"--n-hue-5-2":_,"--n-hue-6":w,"--n-hue-6-2":R,"--n-line-number-text-color":q}}),D=p?Ct("code",le(()=>`${e.internalFontSize||"a"}`),P,e):void 0;return{mergedClsPrefix:l,codeRef:g,mergedShowLineNumbers:f,lineNumbers:le(()=>{let S=1;const C=[];let j=!1;for(const B of e.code)B===`
`?(j=!0,C.push(S++)):j=!1;return j||C.push(S++),C.join(`
`)}),cssVars:p?void 0:P,themeClass:D==null?void 0:D.themeClass,onRender:D==null?void 0:D.onRender}},render(){var e,t;const{mergedClsPrefix:n,wordWrap:l,mergedShowLineNumbers:p,onRender:g}=this;return g==null||g(),Le("code",{class:[`${n}-code`,this.themeClass,l&&`${n}-code--word-wrap`,p&&`${n}-code--show-line-numbers`],style:this.cssVars,ref:"codeRef"},p?Le("pre",{class:`${n}-code__line-numbers`},this.lineNumbers):null,(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e))}});function as(e){return oe({url:"/job/batch/list",method:"get",params:e})}function os(e){return oe({url:`/job/batch/${e}`,method:"get"})}function ls(e){return oe({url:`/job/batch/stop/${e}`,method:"post"})}function cs(e){return oe({url:`/job/batch/retry/${e}`,method:"post"})}function us(e){return oe({url:"/job/batch/ids",method:"delete",data:[e]})}function fs(e){return oe({url:"/job/batch/ids",method:"delete",data:e})}const Xt={class:"inline-block",viewBox:"0 0 1024 1024",width:"1em",height:"1em"},Yt=st("path",{fill:"currentColor",d:"M758.2 839.1C851.8 765.9 912 651.9 912 523.9C912 303 733.5 124.3 512.6 124C291.4 123.7 112 302.8 112 523.9c0 125.2 57.5 236.9 147.6 310.2c3.5 2.8 8.6 2.2 11.4-1.3l39.4-50.5c2.7-3.4 2.1-8.3-1.2-11.1c-8.1-6.6-15.9-13.7-23.4-21.2a318.6 318.6 0 0 1-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7s63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6s52.5 63.6 68.6 101.7c16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.6 318.6 0 0 1-68.6 101.7c-9.3 9.3-19.1 18-29.3 26L668.2 724a8 8 0 0 0-14.1 3l-39.6 162.2c-1.2 5 2.6 9.9 7.7 9.9l167 .8c6.7 0 10.5-7.7 6.3-12.9z"},null,-1),Zt=[Yt];function Qt(e,t){return Ee(),nt("svg",Xt,[...Zt])}const en=tt({name:"ant-design-redo-outlined",render:Qt}),tn={class:"inline-block",viewBox:"0 0 1024 1024",width:"1em",height:"1em"},nn=st("path",{fill:"currentColor",d:"M168 504.2c1-43.7 10-86.1 26.9-126c17.3-41 42.1-77.7 73.7-109.4S337 212.3 378 195c42.4-17.9 87.4-27 133.9-27s91.5 9.1 133.8 27A341.5 341.5 0 0 1 755 268.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 0 0 3 14.1l175.7 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c0-6.7-7.7-10.5-12.9-6.3l-56.4 44.1C765.8 155.1 646.2 92 511.8 92C282.7 92 96.3 275.6 92 503.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8m756 7.8h-60c-4.4 0-7.9 3.5-8 7.8c-1 43.7-10 86.1-26.9 126c-17.3 41-42.1 77.8-73.7 109.4A342.45 342.45 0 0 1 512.1 856a342.24 342.24 0 0 1-243.2-100.8c-9.9-9.9-19.2-20.4-27.8-31.4l60.2-47a8 8 0 0 0-3-14.1l-175.7-43c-5-1.2-9.9 2.6-9.9 7.7l-.7 181c0 6.7 7.7 10.5 12.9 6.3l56.4-44.1C258.2 868.9 377.8 932 512.2 932c229.2 0 415.5-183.7 419.8-411.8a8 8 0 0 0-8-8.2"},null,-1),sn=[nn];function rn(e,t){return Ee(),nt("svg",tn,[...sn])}const an=tt({name:"ant-design-sync-outlined",render:rn});function it(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(t=>{const n=e[t],l=typeof n;(l==="object"||l==="function")&&!Object.isFrozen(n)&&it(n)}),e}class Ke{constructor(t){t.data===void 0&&(t.data={}),this.data=t.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function rt(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function Y(e,...t){const n=Object.create(null);for(const l in e)n[l]=e[l];return t.forEach(function(l){for(const p in l)n[p]=l[p]}),n}const on="</span>",Je=e=>!!e.scope,ln=(e,{prefix:t})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const n=e.split(".");return[`${t}${n.shift()}`,...n.map((l,p)=>`${l}${"_".repeat(p+1)}`)].join(" ")}return`${t}${e}`};class cn{constructor(t,n){this.buffer="",this.classPrefix=n.classPrefix,t.walk(this)}addText(t){this.buffer+=rt(t)}openNode(t){if(!Je(t))return;const n=ln(t.scope,{prefix:this.classPrefix});this.span(n)}closeNode(t){Je(t)&&(this.buffer+=on)}value(){return this.buffer}span(t){this.buffer+=`<span class="${t}">`}}const qe=(e={})=>{const t={children:[]};return Object.assign(t,e),t};class Ne{constructor(){this.rootNode=qe(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(t){this.top.children.push(t)}openNode(t){const n=qe({scope:t});this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(t){return this.constructor._walk(t,this.rootNode)}static _walk(t,n){return typeof n=="string"?t.addText(n):n.children&&(t.openNode(n),n.children.forEach(l=>this._walk(t,l)),t.closeNode(n)),t}static _collapse(t){typeof t!="string"&&t.children&&(t.children.every(n=>typeof n=="string")?t.children=[t.children.join("")]:t.children.forEach(n=>{Ne._collapse(n)}))}}class un extends Ne{constructor(t){super(),this.options=t}addText(t){t!==""&&this.add(t)}startScope(t){this.openNode(t)}endScope(){this.closeNode()}__addSublanguage(t,n){const l=t.root;n&&(l.scope=`language:${n}`),this.add(l)}toHTML(){return new cn(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function ce(e){return e?typeof e=="string"?e:e.source:null}function at(e){return ne("(?=",e,")")}function fn(e){return ne("(?:",e,")*")}function hn(e){return ne("(?:",e,")?")}function ne(...e){return e.map(n=>ce(n)).join("")}function dn(e){const t=e[e.length-1];return typeof t=="object"&&t.constructor===Object?(e.splice(e.length-1,1),t):{}}function je(...e){return"("+(dn(e).capture?"":"?:")+e.map(l=>ce(l)).join("|")+")"}function ot(e){return new RegExp(e.toString()+"|").exec("").length-1}function gn(e,t){const n=e&&e.exec(t);return n&&n.index===0}const pn=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function Re(e,{joinWith:t}){let n=0;return e.map(l=>{n+=1;const p=n;let g=ce(l),i="";for(;g.length>0;){const a=pn.exec(g);if(!a){i+=g;break}i+=g.substring(0,a.index),g=g.substring(a.index+a[0].length),a[0][0]==="\\"&&a[1]?i+="\\"+String(Number(a[1])+p):(i+=a[0],a[0]==="("&&n++)}return i}).map(l=>`(${l})`).join(t)}const bn=/\b\B/,lt="[a-zA-Z]\\w*",Oe="[a-zA-Z_]\\w*",ct="\\b\\d+(\\.\\d+)?",ut="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",ft="\\b(0b[01]+)",_n="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",En=(e={})=>{const t=/^#![ ]*\//;return e.binary&&(e.begin=ne(t,/.*\b/,e.binary,/\b.*/)),Y({scope:"meta",begin:t,end:/$/,relevance:0,"on:begin":(n,l)=>{n.index!==0&&l.ignoreMatch()}},e)},ue={begin:"\\\\[\\s\\S]",relevance:0},xn={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[ue]},mn={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[ue]},yn={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},me=function(e,t,n={}){const l=Y({scope:"comment",begin:e,end:t,contains:[]},n);l.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const p=je("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return l.contains.push({begin:ne(/[ ]+/,"(",p,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),l},wn=me("//","$"),kn=me("/\\*","\\*/"),Mn=me("#","$"),Sn={scope:"number",begin:ct,relevance:0},vn={scope:"number",begin:ut,relevance:0},Nn={scope:"number",begin:ft,relevance:0},jn={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[ue,{begin:/\[/,end:/\]/,relevance:0,contains:[ue]}]},Rn={scope:"title",begin:lt,relevance:0},On={scope:"title",begin:Oe,relevance:0},Cn={begin:"\\.\\s*"+Oe,relevance:0},Tn=function(e){return Object.assign(e,{"on:begin":(t,n)=>{n.data._beginMatch=t[1]},"on:end":(t,n)=>{n.data._beginMatch!==t[1]&&n.ignoreMatch()}})};var be=Object.freeze({__proto__:null,APOS_STRING_MODE:xn,BACKSLASH_ESCAPE:ue,BINARY_NUMBER_MODE:Nn,BINARY_NUMBER_RE:ft,COMMENT:me,C_BLOCK_COMMENT_MODE:kn,C_LINE_COMMENT_MODE:wn,C_NUMBER_MODE:vn,C_NUMBER_RE:ut,END_SAME_AS_BEGIN:Tn,HASH_COMMENT_MODE:Mn,IDENT_RE:lt,MATCH_NOTHING_RE:bn,METHOD_GUARD:Cn,NUMBER_MODE:Sn,NUMBER_RE:ct,PHRASAL_WORDS_MODE:yn,QUOTE_STRING_MODE:mn,REGEXP_MODE:jn,RE_STARTERS_RE:_n,SHEBANG:En,TITLE_MODE:Rn,UNDERSCORE_IDENT_RE:Oe,UNDERSCORE_TITLE_MODE:On});function Bn(e,t){e.input[e.index-1]==="."&&t.ignoreMatch()}function $n(e,t){e.className!==void 0&&(e.scope=e.className,delete e.className)}function An(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=Bn,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function In(e,t){Array.isArray(e.illegal)&&(e.illegal=je(...e.illegal))}function Dn(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function Ln(e,t){e.relevance===void 0&&(e.relevance=1)}const Pn=(e,t)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const n=Object.assign({},e);Object.keys(e).forEach(l=>{delete e[l]}),e.keywords=n.keywords,e.begin=ne(n.beforeMatch,at(n.begin)),e.starts={relevance:0,contains:[Object.assign(n,{endsParent:!0})]},e.relevance=0,delete n.beforeMatch},Hn=["of","and","for","in","not","or","if","then","parent","list","value"],Un="keyword";function ht(e,t,n=Un){const l=Object.create(null);return typeof e=="string"?p(n,e.split(" ")):Array.isArray(e)?p(n,e):Object.keys(e).forEach(function(g){Object.assign(l,ht(e[g],t,g))}),l;function p(g,i){t&&(i=i.map(a=>a.toLowerCase())),i.forEach(function(a){const f=a.split("|");l[f[0]]=[g,Wn(f[0],f[1])]})}}function Wn(e,t){return t?Number(t):zn(e)?0:1}function zn(e){return Hn.includes(e.toLowerCase())}const Ve={},te=e=>{console.error(e)},Xe=(e,...t)=>{console.log(`WARN: ${e}`,...t)},re=(e,t)=>{Ve[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),Ve[`${e}/${t}`]=!0)},xe=new Error;function dt(e,t,{key:n}){let l=0;const p=e[n],g={},i={};for(let a=1;a<=t.length;a++)i[a+l]=p[a],g[a+l]=!0,l+=ot(t[a-1]);e[n]=i,e[n]._emit=g,e[n]._multi=!0}function Gn(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw te("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),xe;if(typeof e.beginScope!="object"||e.beginScope===null)throw te("beginScope must be object"),xe;dt(e,e.begin,{key:"beginScope"}),e.begin=Re(e.begin,{joinWith:""})}}function Fn(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw te("skip, excludeEnd, returnEnd not compatible with endScope: {}"),xe;if(typeof e.endScope!="object"||e.endScope===null)throw te("endScope must be object"),xe;dt(e,e.end,{key:"endScope"}),e.end=Re(e.end,{joinWith:""})}}function Kn(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function Jn(e){Kn(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),Gn(e),Fn(e)}function qn(e){function t(i,a){return new RegExp(ce(i),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(a?"g":""))}class n{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(a,f){f.position=this.position++,this.matchIndexes[this.matchAt]=f,this.regexes.push([f,a]),this.matchAt+=ot(a)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const a=this.regexes.map(f=>f[1]);this.matcherRe=t(Re(a,{joinWith:"|"}),!0),this.lastIndex=0}exec(a){this.matcherRe.lastIndex=this.lastIndex;const f=this.matcherRe.exec(a);if(!f)return null;const m=f.findIndex((P,D)=>D>0&&P!==void 0),M=this.matchIndexes[m];return f.splice(0,m),Object.assign(f,M)}}class l{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(a){if(this.multiRegexes[a])return this.multiRegexes[a];const f=new n;return this.rules.slice(a).forEach(([m,M])=>f.addRule(m,M)),f.compile(),this.multiRegexes[a]=f,f}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(a,f){this.rules.push([a,f]),f.type==="begin"&&this.count++}exec(a){const f=this.getMatcher(this.regexIndex);f.lastIndex=this.lastIndex;let m=f.exec(a);if(this.resumingScanAtSamePosition()&&!(m&&m.index===this.lastIndex)){const M=this.getMatcher(0);M.lastIndex=this.lastIndex+1,m=M.exec(a)}return m&&(this.regexIndex+=m.position+1,this.regexIndex===this.count&&this.considerAll()),m}}function p(i){const a=new l;return i.contains.forEach(f=>a.addRule(f.begin,{rule:f,type:"begin"})),i.terminatorEnd&&a.addRule(i.terminatorEnd,{type:"end"}),i.illegal&&a.addRule(i.illegal,{type:"illegal"}),a}function g(i,a){const f=i;if(i.isCompiled)return f;[$n,Dn,Jn,Pn].forEach(M=>M(i,a)),e.compilerExtensions.forEach(M=>M(i,a)),i.__beforeBegin=null,[An,In,Ln].forEach(M=>M(i,a)),i.isCompiled=!0;let m=null;return typeof i.keywords=="object"&&i.keywords.$pattern&&(i.keywords=Object.assign({},i.keywords),m=i.keywords.$pattern,delete i.keywords.$pattern),m=m||/\w+/,i.keywords&&(i.keywords=ht(i.keywords,e.case_insensitive)),f.keywordPatternRe=t(m,!0),a&&(i.begin||(i.begin=/\B|\b/),f.beginRe=t(f.begin),!i.end&&!i.endsWithParent&&(i.end=/\B|\b/),i.end&&(f.endRe=t(f.end)),f.terminatorEnd=ce(f.end)||"",i.endsWithParent&&a.terminatorEnd&&(f.terminatorEnd+=(i.end?"|":"")+a.terminatorEnd)),i.illegal&&(f.illegalRe=t(i.illegal)),i.contains||(i.contains=[]),i.contains=[].concat(...i.contains.map(function(M){return Vn(M==="self"?i:M)})),i.contains.forEach(function(M){g(M,f)}),i.starts&&g(i.starts,a),f.matcher=p(f),f}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=Y(e.classNameAliases||{}),g(e)}function gt(e){return e?e.endsWithParent||gt(e.starts):!1}function Vn(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(t){return Y(e,{variants:null},t)})),e.cachedVariants?e.cachedVariants:gt(e)?Y(e,{starts:e.starts?Y(e.starts):null}):Object.isFrozen(e)?Y(e):e}var Xn="11.10.0";class Yn extends Error{constructor(t,n){super(t),this.name="HTMLInjectionError",this.html=n}}const Se=rt,Ye=Y,Ze=Symbol("nomatch"),Zn=7,pt=function(e){const t=Object.create(null),n=Object.create(null),l=[];let p=!0;const g="Could not find the language '{}', did you forget to load/include a language module?",i={disableAutodetect:!0,name:"Plain text",contains:[]};let a={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:un};function f(s){return a.noHighlightRe.test(s)}function m(s){let u=s.className+" ";u+=s.parentNode?s.parentNode.className:"";const b=a.languageDetectRe.exec(u);if(b){const y=_(b[1]);return y||(Xe(g.replace("{}",b[1])),Xe("Falling back to no-highlight mode for this block.",s)),y?b[1]:"no-highlight"}return u.split(/\s+/).find(y=>f(y)||_(y))}function M(s,u,b){let y="",N="";typeof u=="object"?(y=s,b=u.ignoreIllegals,N=u.language):(re("10.7.0","highlight(lang, code, ...args) has been deprecated."),re("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),N=s,y=u),b===void 0&&(b=!0);const U={code:y,language:N};G("before:highlight",U);const X=U.result?U.result:P(U.language,U.code,b);return X.code=U.code,G("after:highlight",X),X}function P(s,u,b,y){const N=Object.create(null);function U(r,c){return r.keywords[c]}function X(){if(!h.keywords){O.addText(k);return}let r=0;h.keywordPatternRe.lastIndex=0;let c=h.keywordPatternRe.exec(k),d="";for(;c;){d+=k.substring(r,c.index);const x=K.case_insensitive?c[0].toLowerCase():c[0],T=U(h,x);if(T){const[J,wt]=T;if(O.addText(d),d="",N[x]=(N[x]||0)+1,N[x]<=Zn&&(ge+=wt),J.startsWith("_"))d+=c[0];else{const kt=K.classNameAliases[J]||J;F(c[0],kt)}}else d+=c[0];r=h.keywordPatternRe.lastIndex,c=h.keywordPatternRe.exec(k)}d+=k.substring(r),O.addText(d)}function he(){if(k==="")return;let r=null;if(typeof h.subLanguage=="string"){if(!t[h.subLanguage]){O.addText(k);return}r=P(h.subLanguage,k,!0,Ae[h.subLanguage]),Ae[h.subLanguage]=r._top}else r=S(k,h.subLanguage.length?h.subLanguage:null);h.relevance>0&&(ge+=r.relevance),O.__addSublanguage(r._emitter,r.language)}function I(){h.subLanguage!=null?he():X(),k=""}function F(r,c){r!==""&&(O.startScope(c),O.addText(r),O.endScope())}function Ce(r,c){let d=1;const x=c.length-1;for(;d<=x;){if(!r._emit[d]){d++;continue}const T=K.classNameAliases[r[d]]||r[d],J=c[d];T?F(J,T):(k=J,X(),k=""),d++}}function Te(r,c){return r.scope&&typeof r.scope=="string"&&O.openNode(K.classNameAliases[r.scope]||r.scope),r.beginScope&&(r.beginScope._wrap?(F(k,K.classNameAliases[r.beginScope._wrap]||r.beginScope._wrap),k=""):r.beginScope._multi&&(Ce(r.beginScope,c),k="")),h=Object.create(r,{parent:{value:h}}),h}function Be(r,c,d){let x=gn(r.endRe,d);if(x){if(r["on:end"]){const T=new Ke(r);r["on:end"](c,T),T.isMatchIgnored&&(x=!1)}if(x){for(;r.endsParent&&r.parent;)r=r.parent;return r}}if(r.endsWithParent)return Be(r.parent,c,d)}function _t(r){return h.matcher.regexIndex===0?(k+=r[0],1):(ke=!0,0)}function Et(r){const c=r[0],d=r.rule,x=new Ke(d),T=[d.__beforeBegin,d["on:begin"]];for(const J of T)if(J&&(J(r,x),x.isMatchIgnored))return _t(c);return d.skip?k+=c:(d.excludeBegin&&(k+=c),I(),!d.returnBegin&&!d.excludeBegin&&(k=c)),Te(d,r),d.returnBegin?0:c.length}function xt(r){const c=r[0],d=u.substring(r.index),x=Be(h,r,d);if(!x)return Ze;const T=h;h.endScope&&h.endScope._wrap?(I(),F(c,h.endScope._wrap)):h.endScope&&h.endScope._multi?(I(),Ce(h.endScope,r)):T.skip?k+=c:(T.returnEnd||T.excludeEnd||(k+=c),I(),T.excludeEnd&&(k=c));do h.scope&&O.closeNode(),!h.skip&&!h.subLanguage&&(ge+=h.relevance),h=h.parent;while(h!==x.parent);return x.starts&&Te(x.starts,r),T.returnEnd?0:c.length}function mt(){const r=[];for(let c=h;c!==K;c=c.parent)c.scope&&r.unshift(c.scope);r.forEach(c=>O.openNode(c))}let de={};function $e(r,c){const d=c&&c[0];if(k+=r,d==null)return I(),0;if(de.type==="begin"&&c.type==="end"&&de.index===c.index&&d===""){if(k+=u.slice(c.index,c.index+1),!p){const x=new Error(`0 width match regex (${s})`);throw x.languageName=s,x.badRule=de.rule,x}return 1}if(de=c,c.type==="begin")return Et(c);if(c.type==="illegal"&&!b){const x=new Error('Illegal lexeme "'+d+'" for mode "'+(h.scope||"<unnamed>")+'"');throw x.mode=h,x}else if(c.type==="end"){const x=xt(c);if(x!==Ze)return x}if(c.type==="illegal"&&d==="")return 1;if(we>1e5&&we>c.index*3)throw new Error("potential infinite loop, way more iterations than matches");return k+=d,d.length}const K=_(s);if(!K)throw te(g.replace("{}",s)),new Error('Unknown language: "'+s+'"');const yt=qn(K);let ye="",h=y||yt;const Ae={},O=new a.__emitter(a);mt();let k="",ge=0,Z=0,we=0,ke=!1;try{if(K.__emitTokens)K.__emitTokens(u,O);else{for(h.matcher.considerAll();;){we++,ke?ke=!1:h.matcher.considerAll(),h.matcher.lastIndex=Z;const r=h.matcher.exec(u);if(!r)break;const c=u.substring(Z,r.index),d=$e(c,r);Z=r.index+d}$e(u.substring(Z))}return O.finalize(),ye=O.toHTML(),{language:s,value:ye,relevance:ge,illegal:!1,_emitter:O,_top:h}}catch(r){if(r.message&&r.message.includes("Illegal"))return{language:s,value:Se(u),illegal:!0,relevance:0,_illegalBy:{message:r.message,index:Z,context:u.slice(Z-100,Z+100),mode:r.mode,resultSoFar:ye},_emitter:O};if(p)return{language:s,value:Se(u),illegal:!1,relevance:0,errorRaised:r,_emitter:O,_top:h};throw r}}function D(s){const u={value:Se(s),illegal:!1,relevance:0,_top:i,_emitter:new a.__emitter(a)};return u._emitter.addText(s),u}function S(s,u){u=u||a.languages||Object.keys(t);const b=D(s),y=u.filter(_).filter(R).map(I=>P(I,s,!1));y.unshift(b);const N=y.sort((I,F)=>{if(I.relevance!==F.relevance)return F.relevance-I.relevance;if(I.language&&F.language){if(_(I.language).supersetOf===F.language)return 1;if(_(F.language).supersetOf===I.language)return-1}return 0}),[U,X]=N,he=U;return he.secondBest=X,he}function C(s,u,b){const y=u&&n[u]||b;s.classList.add("hljs"),s.classList.add(`language-${y}`)}function j(s){let u=null;const b=m(s);if(f(b))return;if(G("before:highlightElement",{el:s,language:b}),s.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",s);return}if(s.children.length>0&&(a.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(s)),a.throwUnescapedHTML))throw new Yn("One of your code blocks includes unescaped HTML.",s.innerHTML);u=s;const y=u.textContent,N=b?M(y,{language:b,ignoreIllegals:!0}):S(y);s.innerHTML=N.value,s.dataset.highlighted="yes",C(s,b,N.language),s.result={language:N.language,re:N.relevance,relevance:N.relevance},N.secondBest&&(s.secondBest={language:N.secondBest.language,relevance:N.secondBest.relevance}),G("after:highlightElement",{el:s,result:N,text:y})}function B(s){a=Ye(a,s)}const $=()=>{V(),re("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function q(){V(),re("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let z=!1;function V(){if(document.readyState==="loading"){z=!0;return}document.querySelectorAll(a.cssSelector).forEach(j)}function fe(){z&&V()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",fe,!1);function se(s,u){let b=null;try{b=u(e)}catch(y){if(te("Language definition for '{}' could not be registered.".replace("{}",s)),p)te(y);else throw y;b=i}b.name||(b.name=s),t[s]=b,b.rawDefinition=u.bind(null,e),b.aliases&&w(b.aliases,{languageName:s})}function ie(s){delete t[s];for(const u of Object.keys(n))n[u]===s&&delete n[u]}function o(){return Object.keys(t)}function _(s){return s=(s||"").toLowerCase(),t[s]||t[n[s]]}function w(s,{languageName:u}){typeof s=="string"&&(s=[s]),s.forEach(b=>{n[b.toLowerCase()]=u})}function R(s){const u=_(s);return u&&!u.disableAutodetect}function E(s){s["before:highlightBlock"]&&!s["before:highlightElement"]&&(s["before:highlightElement"]=u=>{s["before:highlightBlock"](Object.assign({block:u.el},u))}),s["after:highlightBlock"]&&!s["after:highlightElement"]&&(s["after:highlightElement"]=u=>{s["after:highlightBlock"](Object.assign({block:u.el},u))})}function A(s){E(s),l.push(s)}function H(s){const u=l.indexOf(s);u!==-1&&l.splice(u,1)}function G(s,u){const b=s;l.forEach(function(y){y[b]&&y[b](u)})}function bt(s){return re("10.7.0","highlightBlock will be removed entirely in v12.0"),re("10.7.0","Please use highlightElement now."),j(s)}Object.assign(e,{highlight:M,highlightAuto:S,highlightAll:V,highlightElement:j,highlightBlock:bt,configure:B,initHighlighting:$,initHighlightingOnLoad:q,registerLanguage:se,unregisterLanguage:ie,listLanguages:o,getLanguage:_,registerAliases:w,autoDetection:R,inherit:Ye,addPlugin:A,removePlugin:H}),e.debugMode=function(){p=!1},e.safeMode=function(){p=!0},e.versionString=Xn,e.regex={concat:ne,lookahead:at,either:je,optional:hn,anyNumberOfTimes:fn};for(const s in be)typeof be[s]=="object"&&it(be[s]);return Object.assign(e,be),e},ae=pt({});ae.newInstance=()=>pt({});var Qn=ae;ae.HighlightJS=ae;ae.default=ae;const ve=Tt(Qn);function es(e){const t={className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},n={match:/[{}[\],:]/,className:"punctuation",relevance:0},l=["true","false","null"],p={scope:"literal",beginKeywords:l.join(" ")};return{name:"JSON",aliases:["jsonc"],keywords:{literal:l},contains:[t,n,e.QUOTE_STRING_MODE,p,e.C_NUMBER_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE],illegal:"\\S"}}function ts(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Lt(e)}const hs=Qe({name:"JobTaskListTable",__name:"job-task-list-table",props:{rowData:{default:null},isRetry:{type:Boolean}},emits:["retry","showLog"],setup(e,{emit:t}){var se,ie;ve.registerLanguage("json",es);const n=e,l=t,p=_e([]),g=_e(new Map),i=_e(new Map),{columns:a,searchParams:f,columnChecks:m,data:M,getData:P,loading:D,mobilePagination:S}=Ut({apiFn:Wt,apiParams:{page:1,size:10,groupName:(se=n.rowData)==null?void 0:se.groupName,taskBatchId:(ie=n.rowData)==null?void 0:ie.id,startId:0,fromIndex:0,taskStatus:void 0},columns:()=>[{key:"id",title:L("page.jobBatch.jobTask.id"),align:"left",width:100,ellipsis:{tooltip:!0}},{key:"index",title:L("common.log"),align:"center",width:64,render:o=>v(Q,{type:"info",text:!0,onClick:()=>l("showLog",o)},{default:()=>[v("span",{class:"w-28px ws-break-spaces"},[L("page.log.view")])]})},{key:"groupName",title:L("page.jobBatch.jobTask.groupName"),align:"left",minWidth:180},{key:"taskName",title:L("page.jobBatch.jobName"),align:"left",minWidth:180},{key:"taskStatus",title:L("page.jobBatch.jobTask.taskStatus"),align:"left",minWidth:80,render:o=>{if(o.taskStatus===null)return null;const _=L(Bt[o.taskStatus]);return v($t,{type:{1:"info",2:"info",3:"info",4:"error",5:"error",6:"error"}[o.taskStatus]},ts(_)?_:{default:()=>[_]})}},{key:"clientInfo",title:L("page.jobBatch.jobTask.clientInfo"),align:"left",minWidth:150,render:o=>{var _;if(o.clientInfo){const w=(_=o.clientInfo)==null?void 0:_.split("@"),R=w.length>1?w[1]:"";return v("div",null,[R])}return v("div",null,[o.clientInfo])}},{key:"argsStr",title:L("page.jobBatch.jobTask.argsStr"),align:"center",titleAlign:"center",minWidth:120,render:o=>{const _=()=>v("td",{class:"n-data-table-td n-data-table-td--last-col",colspan:a.value.length||9},[v(Fe,{class:`max-h-300px overflow-auto ${String(o.parentId)!=="0"?"pl-36px":""}`,hljs:ve,code:Ge(o.argsStr),language:"json","show-line-numbers":!0},null)]),w=()=>{if(i.value.get(o.id)){const H=document.querySelector(`#job-task-result-${o.id}`);H==null||H.remove(),i.value.set(o.id,!1)}if(g.value.get(o.id))return;const E=document.querySelector(`#job-task-${o.id}`),A=document.createElement("tr");A.setAttribute("id",`job-task-args-${o.id}`),A.setAttribute("class","n-data-table-tr n-data-table-tr--expanded"),E==null||E.after(A),ze(_(),A),g.value.set(o.id,!0)},R=()=>{if(!g.value.get(o.id))return;const E=document.querySelector(`#job-task-args-${o.id}`);E==null||E.remove(),g.value.set(o.id,!1)};return v(He,null,[g.value.get(o.id)?v(Q,{type:"primary",text:!0,onClick:()=>R()},{default:()=>[v("span",{class:"w-28px ws-break-spaces"},["收起"])]}):v(Q,{type:"primary",text:!0,disabled:!Pe(o.argsStr),onClick:()=>w()},{default:()=>[v("span",{class:"w-28px ws-break-spaces"},[`查看
参数`])]})])}},{key:"resultMessage",title:L("page.jobBatch.jobTask.resultMessage"),align:"left",minWidth:120,render:o=>{const _=()=>v("td",{class:"n-data-table-td n-data-table-td--last-col",colspan:a.value.length||9},[v(Fe,{class:`max-h-300px overflow-auto ${String(o.parentId)!=="0"?"pl-36px":""}`,hljs:ve,code:Ge(o.resultMessage),language:"json","show-line-numbers":!0},null)]),w=()=>{if(g.value.get(o.id)){const H=document.querySelector(`#job-task-args-${o.id}`);H==null||H.remove(),g.value.set(o.id,!1)}if(i.value.get(o.id))return;const E=document.querySelector(`#job-task-${o.id}`),A=document.createElement("tr");A.setAttribute("id",`job-task-result-${o.id}`),A.setAttribute("class","n-data-table-tr n-data-table-tr--expanded"),E==null||E.after(A),ze(_(),A),i.value.set(o.id,!0)},R=()=>{if(!i.value.get(o.id))return;const E=document.querySelector(`#job-task-result-${o.id}`);E==null||E.remove(),i.value.set(o.id,!1)};return v(He,null,[i.value.get(o.id)?v(Q,{type:"primary",text:!0,onClick:()=>R()},{default:()=>[v("span",{class:"w-28px ws-break-spaces"},["收起"])]}):v(Q,{type:"primary",text:!0,disabled:!Pe(o.resultMessage),onClick:()=>w()},{default:()=>[v("span",{class:"w-28px ws-break-spaces"},[`查看
结果`])]})])}},{key:"retryCount",title:L("page.jobBatch.jobTask.retryCount"),align:"left",minWidth:64},{key:"createDt",title:L("page.jobBatch.jobTask.createDt"),align:"left",minWidth:130}]}),C=()=>{const o=i.value.entries();for(const[w,R]of o){const E=document.querySelector(`#job-task-result-${w}`);E==null||E.remove(),i.value.set(w,!1)}const _=g.value.entries();for(const[w,R]of _){const E=document.querySelector(`#job-task-args-${w}`);E==null||E.remove(),g.value.set(w,!1)}},j=o=>new Promise((_,w)=>{zt({groupName:o.groupName,taskBatchId:o.taskBatchId,startId:0,fromIndex:0,parentId:o.id}).then(R=>{o.children=R.data||[],_()}).catch(R=>{w(R)})}),B=o=>{p.value=o},$=o=>{p.value=[],C()};async function q(){f.taskStatus=void 0,p.value=[],C(),await P()}const z=async()=>{l("retry")},V=()=>{var o,_,w;return((o=n.rowData)==null?void 0:o.taskBatchStatus)===4||((_=n.rowData)==null?void 0:_.taskBatchStatus)===5||((w=n.rowData)==null?void 0:w.taskBatchStatus)===6};return(()=>{m.value=m.value.filter(o=>{var _;return["4","5"].includes(String((_=n.rowData)==null?void 0:_.taskType)||"-1")?!0:o.key!=="taskName"})})(),(o,_)=>{const w=Pt,R=an,E=en,A=Gt,H=Ht;return Ee(),Ue(H,{bordered:!1,size:"small",class:"sm:flex-1-hidden card-wrapper pt-16px","content-style":{padding:0},"header-style":{padding:0}},{header:ee(()=>[v(w,{value:W(f).taskStatus,"onUpdate:value":[_[0]||(_[0]=G=>W(f).taskStatus=G),W(P)],clearable:"",class:"max-w-180px",options:W(At)(W(It)),placeholder:"请选择状态"},null,8,["value","options","onUpdate:value"])]),"header-extra":ee(()=>[v(W(Q),{class:"mr-16px",onClick:q},{icon:ee(()=>[v(R,{class:"text-icon"})]),default:ee(()=>[We(" 刷新 ")]),_:1}),V()?(Ee(),Ue(W(Q),{key:0,onClick:z},{icon:ee(()=>[v(E,{class:"text-icon"})]),default:ee(()=>[We(" 重试 ")]),_:1})):Dt("",!0)]),default:ee(()=>[v(A,{columns:W(a),data:W(M),loading:W(D),remote:"","scroll-x":1e3,"row-key":G=>G.id,pagination:W(S),indent:16,cascade:!1,"allow-checking-not-loaded":"","expanded-row-keys":p.value,class:"mt-16px sm:h-full","row-props":G=>({id:`job-task-${G.id}`}),"onUpdate:expandedRowKeys":B,"onUpdate:page":$,onLoad:j},null,8,["columns","data","loading","row-key","pagination","expanded-row-keys","row-props"])]),_:1})}}});export{ve as H,hs as _,as as a,us as b,fs as c,ls as d,os as e,cs as f,en as g,es as j};
