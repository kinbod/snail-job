import{a as E,b as J,N as L}from"./search-form-CKlPFgxd.js";import{aP as k,aR as Q,b as B,o as R,e as X,d as $,a0 as P,a1 as T,c as U,w as r,f as a,h as t,$ as l,D as Y,g as f,t as _,a9 as Z,L as ee,r as te,af as ae,bl as le,i as oe,ag as D,B as w,G as ne,ah as re,ai as se}from"./index-CW-HgCkC.js";import{g as ie}from"./group-Bv7in7Sf.js";import{_ as de,u as ue,a as me}from"./table-pZMqSpSu.js";import{_ as ce}from"./select-group.vue_vue_type_script_setup_true_lang-QkZyy-_Q.js";import{_ as pe}from"./select-scene.vue_vue_type_script_setup_true_lang-BzSzZPk5.js";import{_ as ge}from"./datetime-range.vue_vue_type_script_setup_true_lang-DJx4jqU-.js";import{_ as fe,a as _e}from"./DescriptionsItem-CtvncyNk.js";import{b as be}from"./Grid-DNunwvuN.js";import"./CollapseItem-_OeQO-9P.js";import"./retry-scene-Bda98CLN.js";function he(i){return k({url:"/retry-dead-letter/list",method:"get",params:i})}function ye(i,c){return k({url:`/retry-dead-letter/${i}?groupName=${c}`,method:"get"})}function I(i){return k({url:"/retry-dead-letter/batch/rollback",method:"post",data:i})}function S(i){return k({url:"/retry-dead-letter/batch",method:"delete",data:i})}const ve={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"};function Ne(i,c){return R(),B("svg",ve,c[0]||(c[0]=[X("path",{fill:"currentColor",d:"M20.93 14A7 7 0 0 1 14 20H5.5v-2H14a5 5 0 1 0 0-10H6.914l2.5 2.5L8 11.914L3.086 7L8 2.086L9.414 3.5L6.914 6H14a7 7 0 0 1 7 7v1z"},null,-1)]))}const De=Q({name:"tdesign-rollback",render:Ne}),we=$({name:"RetryDeadLetterSearch",__name:"dead-letter-search",props:{model:{required:!0},modelModifiers:{}},emits:P(["reset","search"],["update:model"]),setup(i,{emit:c}){const u=c,s=T(i,"model");function p(){u("reset")}function y(){u("search")}return(h,e)=>{const m=de,v=Y,x=E;return R(),U(x,{"btn-span":"12 s:24 m:10 l:12 xl:16",model:s.value,onSearch:y,onReset:p},{default:r(()=>[a(m,{span:"24 s:12 m:6",label:t(l)("page.retryTask.groupName"),path:"groupName",class:"pr-24px"},{default:r(()=>[a(ce,{value:s.value.groupName,"onUpdate:value":e[0]||(e[0]=d=>s.value.groupName=d),clearable:""},null,8,["value"])]),_:1},8,["label"]),a(m,{span:"24 s:12 m:6",label:t(l)("page.retryTask.sceneName"),path:"sceneName",class:"pr-24px"},{default:r(()=>[a(pe,{value:s.value.sceneName,"onUpdate:value":e[1]||(e[1]=d=>s.value.sceneName=d),"group-name":s.value.groupName,clearable:""},null,8,["value","group-name"])]),_:1},8,["label"]),a(m,{span:"24 s:12 m:6",label:t(l)("page.retry.bizNo"),path:"bizNo",class:"pr-24px"},{default:r(()=>[a(v,{value:s.value.bizNo,"onUpdate:value":e[2]||(e[2]=d=>s.value.bizNo=d),placeholder:t(l)("page.retry.form.bizNo"),clearable:""},null,8,["value","placeholder"])]),_:1},8,["label"]),a(m,{span:"24 s:12 m:6",label:t(l)("page.retry.idempotentId"),path:"idempotentId",class:"pr-24px"},{default:r(()=>[a(v,{value:s.value.idempotentId,"onUpdate:value":e[3]||(e[3]=d=>s.value.idempotentId=d),placeholder:t(l)("page.retry.form.idempotentId"),clearable:""},null,8,["value","placeholder"])]),_:1},8,["label"]),a(m,{span:"24 s:12 m:15 l:12 xl:9",label:t(l)("page.common.createTime"),path:"datetimeRange"},{default:r(()=>[a(ge,{value:s.value.datetimeRange,"onUpdate:value":e[4]||(e[4]=d=>s.value.datetimeRange=d)},null,8,["value"])]),_:1},8,["label"])]),_:1},8,["model"])}}}),ke=$({name:"RetryDeadLetterDetailDrawer",__name:"retry-letter-detail-drawer",props:P({rowData:{}},{visible:{type:Boolean,default:!1},visibleModifiers:{}}),emits:["update:visible"],setup(i){const c=T(i,"visible");return(u,s)=>{const p=_e,y=fe,h=Z;return R(),U(h,{modelValue:c.value,"onUpdate:modelValue":s[0]||(s[0]=e=>c.value=e),title:t(l)("page.retryDeadLetter.detail")},{default:r(()=>[a(y,{"label-placement":"top",bordered:"",column:3},{default:r(()=>[a(p,{label:t(l)("page.retry.groupName"),span:3},{default:r(()=>{var e;return[f(_((e=u.rowData)==null?void 0:e.groupName),1)]}),_:1},8,["label"]),a(p,{label:t(l)("page.retry.sceneName"),span:3},{default:r(()=>{var e;return[f(_((e=u.rowData)==null?void 0:e.sceneName),1)]}),_:1},8,["label"]),a(p,{label:t(l)("page.retry.bizNo"),span:3},{default:r(()=>{var e;return[f(_((e=u.rowData)==null?void 0:e.bizNo),1)]}),_:1},8,["label"]),a(p,{label:t(l)("page.retry.idempotentId"),span:3},{default:r(()=>{var e;return[f(_((e=u.rowData)==null?void 0:e.idempotentId),1)]}),_:1},8,["label"]),a(p,{label:t(l)("page.retry.executorName"),span:3},{default:r(()=>{var e;return[f(_((e=u.rowData)==null?void 0:e.executorName),1)]}),_:1},8,["label"]),a(p,{label:t(l)("page.retry.argsStr"),span:3},{default:r(()=>{var e;return[f(_((e=u.rowData)==null?void 0:e.argsStr),1)]}),_:1},8,["label"]),a(p,{label:t(l)("common.createDt"),span:3},{default:r(()=>{var e;return[f(_((e=u.rowData)==null?void 0:e.createDt),1)]}),_:1},8,["label"])]),_:1})]),_:1},8,["modelValue","title"])}}}),Re={class:"min-h-500px flex-col-stretch gap-16px overflow-hidden lt-sm:overflow-auto"};function z(i){return typeof i=="function"||Object.prototype.toString.call(i)==="[object Object]"&&!se(i)}const Ve=$({name:"retry_dead-letter",__name:"index",setup(i){const c=ee(),u=te(),{bool:s,setTrue:p}=ae(!1),{columns:y,columnChecks:h,data:e,getData:m,loading:v,mobilePagination:x,searchParams:d,resetSearchParams:C}=ue({apiFn:he,apiParams:{page:1,size:10,groupName:null,sceneName:null,datetimeRange:le()},columns:()=>[{type:"selection",align:"center",width:48},{key:"id",title:l("common.index"),align:"center",width:120,render:n=>{async function o(){await W(n),p()}return a(w,{text:!0,tag:"a",type:"primary",onClick:o,class:"ws-normal"},{default:()=>[n.id]})}},{key:"groupName",title:l("page.retryDeadLetter.groupName"),align:"center",minWidth:120},{key:"sceneName",title:l("page.retryDeadLetter.sceneName"),align:"center",minWidth:120},{key:"idempotentId",title:l("page.retryDeadLetter.idempotentId"),align:"center",minWidth:120},{key:"bizNo",title:l("page.retryDeadLetter.bizNo"),align:"center",minWidth:120},{key:"createDt",title:l("page.retryDeadLetter.createDt"),align:"center",minWidth:120},{key:"operate",title:l("common.operate"),align:"center",width:130,render:n=>a("div",{class:"flex-center gap-8px"},[a(L,{onPositiveClick:()=>j(n)},{default:()=>l("common.confirmRollback"),trigger:()=>{let o;return a(w,{type:"info",text:!0,ghost:!0,size:"small"},z(o=l("common.rollback"))?o:{default:()=>[o]})}}),a(re,{vertical:!0},null),a(L,{onPositiveClick:()=>H(n)},{default:()=>l("common.confirmDelete"),trigger:()=>{let o;return a(w,{type:"error",text:!0,ghost:!0,size:"small"},z(o=l("common.delete"))?o:{default:()=>[o]})}})])}]}),{handleAdd:V,checkedRowKeys:b,onDeleted:A,onBatchDeleted:M}=me(e,m);async function G(){const{error:n}=await S({ids:b.value,groupName:d.groupName});n||n||M()}async function O(){var o;const{error:n}=await I({ids:b.value});n||((o=window.$message)==null||o.success(l("common.rollbackSuccess")),m())}async function H(n){const{error:o}=await S({ids:[n.id],groupName:n.groupName});o||A()}async function W(n){const o=await ye(n.id,n.groupName);u.value=o.data||null}async function j(n){var N;const{error:o}=await I({ids:[n.id],groupName:n.groupName});o||((N=window.$message)==null||N.success(l("common.rollbackSuccess")),m())}return oe(async()=>{const{error:n,data:o}=await ie();!n&&o.length>0&&m()}),(n,o)=>{const N=De,F=J,q=be,K=ne;return R(),B("div",Re,[a(we,{model:t(d),"onUpdate:model":o[0]||(o[0]=g=>D(d)?d.value=g:null),onReset:t(C),onSearch:t(m)},null,8,["model","onReset","onSearch"]),a(K,{title:t(l)("page.retryDeadLetter.title"),bordered:!1,size:"small",class:"sm:flex-1-hidden card-wrapper","header-class":"view-card-header"},{"header-extra":r(()=>[a(F,{columns:t(h),"onUpdate:columns":o[1]||(o[1]=g=>D(h)?h.value=g:null),"disabled-delete":t(b).length===0,loading:t(v),"show-add":!1,onAdd:t(V),onDelete:G,onRefresh:t(m)},{addAfter:r(()=>[a(t(L),{onPositiveClick:O},{trigger:r(()=>[a(t(w),{size:"small",ghost:"",type:"primary",disabled:t(b).length===0},{icon:r(()=>[a(N,{class:"text-icon"})]),default:r(()=>[f(" "+_(t(l)("common.batchRollback")),1)]),_:1},8,["disabled"])]),default:r(()=>[f(" "+_(t(l)("common.confirmRollback")),1)]),_:1})]),_:1},8,["columns","disabled-delete","loading","onAdd","onRefresh"])]),default:r(()=>[a(q,{"checked-row-keys":t(b),"onUpdate:checkedRowKeys":o[2]||(o[2]=g=>D(b)?b.value=g:null),columns:t(y),data:t(e),"flex-height":!t(c).isMobile,"scroll-x":962,loading:t(v),remote:"","row-key":g=>g.id,pagination:t(x),class:"sm:h-full"},null,8,["checked-row-keys","columns","data","flex-height","loading","row-key","pagination"]),a(ke,{visible:t(s),"onUpdate:visible":o[3]||(o[3]=g=>D(s)?s.value=g:null),"row-data":u.value},null,8,["visible","row-data"])]),_:1},8,["title"])])}}});export{Ve as default};
