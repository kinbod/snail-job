import{_ as T,u as q,a as O,N as j,b as z}from"./table-Bdl3-G-Y.js";import{d as W,U as A,p as F,V as G,o as D,c as L,w as m,f as l,h as a,$ as o,a6 as V,dQ as K,J as E,s as H,b as J,ad as v,B as x,bl as Q,N as R,bm as X,I as Y,ae as Z}from"./index-CHgAHQIl.js";import{f as ee,a as te,b as ae}from"./workflow-B4-fagod.js";import{_ as oe}from"./search-form.vue_vue_type_script_setup_true_lang-BfZ4by1v.js";import{_ as le}from"./select-group.vue_vue_type_script_setup_true_lang-fZ9yr9an.js";import{_ as ne}from"./task-batch-status.vue_vue_type_script_setup_true_lang-CZqj1cRx.js";import{_ as se}from"./Grid-DHGKk79k.js";import"./FormItem-B3tfy17D.js";import"./Space-CeVCCXQI.js";import"./round-search-KK91k1IY.js";import"./form-BuwwOwyC.js";import"./group-BUALrrKR.js";const re=W({name:"WorkflowBatchSearch",__name:"workflow-batch-search",props:{model:{required:!0},modelModifiers:{}},emits:A(["reset","search"],["update:model"]),setup(p,{emit:_}){const d=_,g=F([]),r=G(p,"model");function B(){d("reset")}function f(){d("search")}async function h(c){const n=await ee({groupName:c});g.value=n.data}return h(""),(c,n)=>{const w=T,k=V,b=oe;return D(),L(b,{model:r.value,onSearch:f,onReset:B},{default:m(()=>[l(w,{span:"24 s:12 m:6",label:a(o)("page.workflowBatch.groupName"),path:"groupName",class:"pr-24px"},{default:m(()=>[l(le,{value:r.value.groupName,"onUpdate:value":[n[0]||(n[0]=s=>r.value.groupName=s),h]},null,8,["value"])]),_:1},8,["label"]),l(w,{span:"24 s:12 m:6",label:a(o)("page.workflowBatch.workflowName"),"label-width":100,path:"workflowName",class:"pr-24px"},{default:m(()=>[l(k,{value:r.value.workflowId,"onUpdate:value":n[1]||(n[1]=s=>r.value.workflowId=s),placeholder:a(o)("page.workflowBatch.form.workflowName"),"value-field":"id","label-field":"workflowName",options:g.value,clearable:"",filterable:""},null,8,["value","placeholder","options"])]),_:1},8,["label"]),l(w,{span:"24 s:12 m:6",label:a(o)("page.workflowBatch.taskBatchStatus"),path:"taskBatchStatus",class:"pr-24px"},{default:m(()=>[l(ne,{value:r.value.taskBatchStatus,"onUpdate:value":n[2]||(n[2]=s=>r.value.taskBatchStatus=s)},null,8,["value"])]),_:1},8,["label"])]),_:1},8,["model"])}}}),ie={class:"min-h-500px flex-col-stretch gap-16px overflow-hidden lt-sm:overflow-auto"};function S(p){return typeof p=="function"||Object.prototype.toString.call(p)==="[object Object]"&&!Z(p)}const be=W({name:"workflow_batch",__name:"index",setup(p){var y,N;const _=K(),d=E(),g=((y=d.query)==null?void 0:y.workflowId)===void 0?null:Number.parseInt((N=d.query)==null?void 0:N.workflowId,10),r=H(),{columns:B,columnChecks:f,data:h,getData:c,loading:n,mobilePagination:w,searchParams:k,resetSearchParams:b}=q({apiFn:te,apiParams:{page:1,size:10,workflowId:g,groupName:null,taskBatchStatus:null},columns:()=>[{key:"id",title:o("common.index"),align:"center",width:120,render:e=>{function t(){C(e.id)}return l(x,{text:!0,tag:"a",type:"primary",onClick:t,class:"ws-normal"},{default:()=>[e.id]})}},{key:"workflowName",title:o("page.workflowBatch.workflowName"),align:"left",minWidth:120},{key:"groupName",title:o("page.workflowBatch.groupName"),align:"left",minWidth:120},{key:"executionAt",title:o("page.workflowBatch.executionAt"),align:"left",minWidth:120},{key:"taskBatchStatus",title:o("page.workflowBatch.taskBatchStatus"),align:"left",minWidth:120,render:e=>{if(!e.taskBatchStatus)return null;const t={1:"info",2:"success",3:"success",4:"error",5:"warning",6:"warning"},i=o(Q[e.taskBatchStatus]);return l(R,{type:t[e.taskBatchStatus]},S(i)?i:{default:()=>[i]})}},{key:"operationReason",title:o("page.workflowBatch.operationReason"),align:"left",minWidth:120,render:e=>{if(!e.operationReason)return null;const t=o(X[e.operationReason]);return l(R,{type:"warning"},S(t)?t:{default:()=>[t]})}},{key:"createDt",title:o("page.workflowBatch.createDt"),align:"left",minWidth:120},{key:"operate",title:o("common.operate"),align:"center",width:130,render:e=>l("div",{class:"flex-center gap-8px"},[(e==null?void 0:e.taskBatchStatus)===1||(e==null?void 0:e.taskBatchStatus)===2?l(j,{onPositiveClick:()=>$(e.id)},{default:()=>o("common.confirmStop"),trigger:()=>{let t;return l(x,{type:"error",text:!0,ghost:!0,size:"small"},S(t=o("common.stop"))?t:{default:()=>[t]})}}):""])}]}),{checkedRowKeys:s,onBatchDeleted:I}=O(h,c);async function U(){I()}async function $(e){var i;const{error:t}=await ae(e);t||((i=window.$message)==null||i.success(o("common.executeSuccess")),c())}function C(e){_.push({path:"/workflow/form/batch",query:{id:e}})}return(e,t)=>{const i=z,P=se,M=Y;return D(),J("div",ie,[l(re,{model:a(k),"onUpdate:model":t[0]||(t[0]=u=>v(k)?k.value=u:null),onReset:a(b),onSearch:a(c)},null,8,["model","onReset","onSearch"]),l(M,{title:a(o)("page.workflowBatch.title"),bordered:!1,size:"small",class:"sm:flex-1-hidden card-wrapper","header-class":"view-card-header"},{"header-extra":m(()=>[l(i,{columns:a(f),"onUpdate:columns":t[1]||(t[1]=u=>v(f)?f.value=u:null),"disabled-delete":a(s).length===0,loading:a(n),"show-add":!1,"show-delete":!1,onDelete:U,onRefresh:a(c)},null,8,["columns","disabled-delete","loading","onRefresh"])]),default:m(()=>[l(P,{"checked-row-keys":a(s),"onUpdate:checkedRowKeys":t[2]||(t[2]=u=>v(s)?s.value=u:null),columns:a(B),data:a(h),"flex-height":!a(r).isMobile,"scroll-x":962,loading:a(n),remote:"","row-key":u=>u.id,pagination:a(w),class:"sm:h-full"},null,8,["checked-row-keys","columns","data","flex-height","loading","row-key","pagination"])]),_:1},8,["title"])])}}});export{be as default};
