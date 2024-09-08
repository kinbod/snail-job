import{a as j,N as O,b as A}from"./search-form.vue_vue_type_script_setup_true_lang-DWHJMzUA.js";import{d as U,Z as T,a0 as F,o as C,c as I,h as o,$ as t,a4 as q,ax as G,aa as K,r as D,q as Z,w as h,f as l,bZ as E,L as H,aB as Y,B as W,ay as J,Y as P,az as Q,a3 as X,aj as ee,b as ae,ah as $,ak as te,F as oe}from"./index-FUIa4-vU.js";import{f as le,a as ne,b as se,c as re,d as ce}from"./workflow-C9G6jvXp.js";import{_ as ue,u as ie,a as me}from"./table-DGi3nvCm.js";import{_ as de}from"./select-group.vue_vue_type_script_setup_true_lang-gBWYpD9F.js";import{_ as pe}from"./datetime-range.vue_vue_type_script_setup_true_lang-DeHqOogJ.js";import{_ as fe}from"./AutoComplete-Bl933e0P.js";import{b as he}from"./Grid-C3gcBClN.js";import"./group-BxDj9-KV.js";const ke=U({name:"TaskBatchStatus",__name:"task-batch-status",props:T({disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(c){const k=c,d=F(c,"modelValue");return(_,p)=>{const s=K;return C(),I(s,{value:d.value,"onUpdate:value":p[0]||(p[0]=u=>d.value=u),placeholder:o(t)("common.taskBatchStatus.form"),options:o(q)(o(G)),disabled:k.disabled,clearable:k.clearable},null,8,["value","placeholder","options","disabled","clearable"])}}}),we=U({name:"WorkflowBatchSearch",__name:"workflow-batch-search",props:{model:{required:!0},modelModifiers:{}},emits:T(["reset","search"],["update:model"]),setup(c,{emit:k}){const d=D(!1),_=k,p=D([]),s=F(c,"model"),u=D(s.value.workflowName);function v(){u.value="",_("reset")}function B(){_("search")}async function w(){const r=await le({keywords:u.value,groupName:s.value.groupName});p.value=r.data}function y(r){s.value.workflowId=r}Z(()=>u.value,r=>{r.length!==0?w():d.value=!1});function x(r){return r.map(n=>({value:n.id,label:n.workflowName}))}function b(r){return[r.label,`(${r.value})`]}return(r,n)=>{const g=ue,N=fe,R=j;return C(),I(R,{"btn-span":"12 s:24 m:10 l:12 xl:16",model:s.value,onSearch:B,onReset:v},{default:h(()=>[l(g,{span:"24 s:12 m:8",label:o(t)("page.workflowBatch.groupName"),path:"groupName",class:"pr-24px"},{default:h(()=>[l(de,{value:s.value.groupName,"onUpdate:value":n[0]||(n[0]=i=>s.value.groupName=i),clearable:""},null,8,["value"])]),_:1},8,["label"]),l(g,{span:"24 s:12 m:8",label:o(t)("page.workflowBatch.workflowName"),"label-width":100,path:"workflowName",class:"pr-24px"},{default:h(()=>[l(N,{value:u.value,"onUpdate:value":n[1]||(n[1]=i=>u.value=i),placeholder:o(t)("page.workflowBatch.form.workflowName"),options:x(p.value),"empty-visible":d.value,clearable:"",filterable:"","render-label":b,onSelect:y},null,8,["value","placeholder","options","empty-visible"])]),_:1},8,["label"]),l(g,{span:"24 s:12 m:8",label:o(t)("page.workflowBatch.taskBatchStatus"),path:"taskBatchStatus",class:"pr-24px"},{default:h(()=>[l(ke,{value:s.value.taskBatchStatus,"onUpdate:value":n[2]||(n[2]=i=>s.value.taskBatchStatus=i),clearable:""},null,8,["value"])]),_:1},8,["label"]),l(g,{span:"24 s:24 m:14 l:12 xl:8",label:o(t)("page.common.createTime"),path:"datetimeRange",class:"pr-24px"},{default:h(()=>[l(pe,{value:s.value.datetimeRange,"onUpdate:value":n[3]||(n[3]=i=>s.value.datetimeRange=i)},null,8,["value"])]),_:1},8,["label"])]),_:1},8,["model"])}}}),ge={class:"min-h-500px flex-col-stretch gap-16px overflow-hidden lt-sm:overflow-auto"};function S(c){return typeof c=="function"||Object.prototype.toString.call(c)==="[object Object]"&&!te(c)}const De=U({name:"workflow_batch",__name:"index",setup(c){const k=E(),d=H(),_=history.state.workflowId,p=history.state.workflowName,s=history.state.taskBatchStatus,{columns:u,columnChecks:v,data:B,getData:w,loading:y,mobilePagination:x,searchParams:b,resetSearchParams:r}=ie({apiFn:ne,apiParams:{page:1,size:10,workflowId:null,workflowName:null,groupName:null,taskBatchStatus:null,datetimeRange:Y()},searchParams:{workflowId:_,workflowName:p,taskBatchStatus:s},columns:()=>[{type:"selection"},{key:"id",title:t("common.index"),align:"center",width:120,render:e=>{function a(){V(e.id)}return l(W,{text:!0,tag:"a",type:"primary",onClick:a,class:"ws-normal"},{default:()=>[e.id]})}},{key:"workflowName",title:t("page.workflowBatch.workflowName"),align:"left",minWidth:120},{key:"groupName",title:t("page.workflowBatch.groupName"),align:"left",minWidth:120},{key:"executionAt",title:t("page.workflowBatch.executionAt"),align:"left",minWidth:120},{key:"taskBatchStatus",title:t("page.workflowBatch.taskBatchStatus"),align:"left",minWidth:120,render:e=>{if(!e.taskBatchStatus)return null;const a={1:"info",2:"success",3:"success",4:"error",5:"warning",6:"warning"},m=t(J[e.taskBatchStatus]);return l(P,{type:a[e.taskBatchStatus]},S(m)?m:{default:()=>[m]})}},{key:"operationReason",title:t("page.workflowBatch.operationReason"),align:"left",minWidth:120,render:e=>{if(!e.operationReason)return null;const a=t(Q[e.operationReason]);return l(P,{type:"warning"},S(a)?a:{default:()=>[a]})}},{key:"createDt",title:t("page.workflowBatch.createDt"),align:"left",minWidth:120},{key:"operate",title:t("common.operate"),align:"center",width:130,render:e=>l("div",{class:"flex-center gap-8px"},[(e==null?void 0:e.taskBatchStatus)===1||(e==null?void 0:e.taskBatchStatus)===2?l(X,null,[l(O,{onPositiveClick:()=>M(e.id)},{default:()=>t("common.confirmStop"),trigger:()=>{let a;return l(W,{type:"error",text:!0,ghost:!0,size:"small"},S(a=t("common.stop"))?a:{default:()=>[a]})}}),l(ee,{vertical:!0},null)]):"",l(O,{onPositiveClick:()=>R(e.id)},{default:()=>t("common.confirmDelete"),trigger:()=>{let a;return l(W,{type:"error",text:!0,ghost:!0,size:"small"},S(a=t("common.delete"))?a:{default:()=>[a]})}})])}]}),{checkedRowKeys:n,onDeleted:g,onBatchDeleted:N}=me(B,w);async function R(e){const{error:a}=await se(e);a||g()}async function i(){const{error:e}=await ce(n.value);e||N()}async function M(e){var m;const{error:a}=await re(e);a||((m=window.$message)==null||m.success(t("common.executeSuccess")),w())}function V(e){k.push({path:"/workflow/form/batch",query:{id:e}})}return(e,a)=>{const m=A,z=he,L=oe;return C(),ae("div",ge,[l(we,{model:o(b),"onUpdate:model":a[0]||(a[0]=f=>$(b)?b.value=f:null),onReset:o(r),onSearch:o(w)},null,8,["model","onReset","onSearch"]),l(L,{title:o(t)("page.workflowBatch.title"),bordered:!1,size:"small",class:"sm:flex-1-hidden card-wrapper","header-class":"view-card-header"},{"header-extra":h(()=>[l(m,{columns:o(v),"onUpdate:columns":a[1]||(a[1]=f=>$(v)?v.value=f:null),"disabled-delete":o(n).length===0,loading:o(y),"show-add":!1,onDelete:i,onRefresh:o(w)},null,8,["columns","disabled-delete","loading","onRefresh"])]),default:h(()=>[l(z,{"checked-row-keys":o(n),"onUpdate:checkedRowKeys":a[2]||(a[2]=f=>$(n)?n.value=f:null),columns:o(u),data:o(B),"flex-height":!o(d).isMobile,"scroll-x":962,loading:o(y),remote:"","row-key":f=>f.id,pagination:o(x),class:"sm:h-full"},null,8,["checked-row-keys","columns","data","flex-height","loading","row-key","pagination"])]),_:1},8,["title"])])}}});export{De as default};
