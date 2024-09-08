import{a as le,N as A,b as ne}from"./search-form.vue_vue_type_script_setup_true_lang-DWHJMzUA.js";import{d as z,Z as q,r as T,a0 as K,q as se,o as P,c as E,w as s,f as e,h as t,$ as a,a4 as re,ax as ue,aa as ie,b as H,g as S,t as D,ac as U,ay as Y,az as Z,aA as ce,a3 as V,Y as I,aw as pe,av as me,l as de,L as fe,ag as F,aB as be,a8 as ge,_ as he,B as J,aC as _e,aD as G,aj as O,ah as L,ai as ve,ak as ye,F as Be}from"./index-FUIa4-vU.js";import{f as Q,_ as ke,a as we,b as je,c as Se,d as De}from"./job-task-list-table.vue_vue_type_script_setup_true_lang-DIIvOixm.js";import{_ as Ne,u as xe,a as Re}from"./table-DGi3nvCm.js";import{_ as Te}from"./select-group.vue_vue_type_script_setup_true_lang-gBWYpD9F.js";import{_ as $e}from"./datetime-range.vue_vue_type_script_setup_true_lang-DeHqOogJ.js";import{f as Ce}from"./job-CSfapI8R.js";import{_ as Je}from"./AutoComplete-Bl933e0P.js";import{_ as Le}from"./log-drawer-DBbAafJ2.js";import{_ as Ue}from"./detail-drawer-bwrDwggh.js";import{_ as Ie,a as Pe}from"./DescriptionsItem-C7R9mygj.js";import{b as Me}from"./Grid-C3gcBClN.js";import"./group-BxDj9-KV.js";import"./CollapseItem-BMMOxk7k.js";const Ae=z({name:"JobBatchSearch",__name:"job-batch-search",props:{model:{required:!0},modelModifiers:{}},emits:q(["reset","search"],["update:model"]),setup(y,{emit:$}){const B=T(!1),_=$,k=T([]),i=K(y,"model"),v=T(i.value.jobName);function r(){v.value="",_("reset")}function b(){_("search")}async function f(){const u=await Ce({keywords:v.value,groupName:i.value.groupName});k.value=u.data}function w(u){i.value.jobId=u}se(()=>v.value,u=>{u.length!==0?(f(),i.value.jobName=u):B.value=!1});function C(u){return u.map(c=>({value:c.id,label:c.jobName}))}function N(u){return[u.label,`(${u.value})`]}return(u,c)=>{const j=Ne,x=Je,n=ie,p=le;return P(),E(p,{"btn-span":"12 s:24 m:10 l:12 xl:16",model:i.value,onSearch:b,onReset:r},{default:s(()=>[e(j,{span:"24 s:12 m:8",label:t(a)("page.jobBatch.groupName"),path:"groupName",class:"pr-24px"},{default:s(()=>[e(Te,{value:i.value.groupName,"onUpdate:value":c[0]||(c[0]=g=>i.value.groupName=g),clearable:""},null,8,["value"])]),_:1},8,["label"]),e(j,{span:"24 s:12 m:8",label:t(a)("page.jobBatch.jobName"),path:"jobName",class:"pr-24px"},{default:s(()=>[e(x,{value:v.value,"onUpdate:value":c[1]||(c[1]=g=>v.value=g),placeholder:t(a)("page.jobBatch.form.jobName"),options:C(k.value),"empty-visible":B.value,clearable:"",filterable:"","render-label":N,onSelect:w},null,8,["value","placeholder","options","empty-visible"])]),_:1},8,["label"]),e(j,{span:"24 s:12 m:8",label:t(a)("page.jobBatch.taskBatchStatus"),path:"taskBatchStatus",class:"pr-24px"},{default:s(()=>[e(n,{value:i.value.taskBatchStatus,"onUpdate:value":c[2]||(c[2]=g=>i.value.taskBatchStatus=g),placeholder:t(a)("common.taskBatchStatus.form"),options:t(re)(t(ue)).filter(g=>![98,99].includes(g.value)),clearable:""},null,8,["value","placeholder","options"])]),_:1},8,["label"]),e(j,{span:"24 s:24 m:14 l:12 xl:8",label:t(a)("page.common.createTime"),path:"datetimeRange",class:"pr-24px"},{default:s(()=>[e($e,{value:i.value.datetimeRange,"onUpdate:value":c[3]||(c[3]=g=>i.value.datetimeRange=g)},null,8,["value"])]),_:1},8,["label"])]),_:1},8,["model"])}}}),Oe=z({name:"JobBatchDetailDrawer",__name:"job-batch-detail-drawer",props:q({rowData:{default:null},log:{type:Boolean,default:!1}},{visible:{type:Boolean,default:!1},visibleModifiers:{}}),emits:["update:visible"],setup(y){const $=y,B=K(y,"visible"),_=T(),k=T(!1);async function i(r){k.value=!0,_.value=r}async function v(){var b;const{error:r}=await Q($.rowData.id);r||(b=window.$message)==null||b.success(a("common.operateSuccess"))}return(r,b)=>{const f=Ie,w=I,C=Pe,N=pe,u=ke,c=me,j=Ue,x=Le;return P(),H(V,null,[e(j,{modelValue:B.value,"onUpdate:modelValue":b[0]||(b[0]=n=>B.value=n),title:t(a)("page.jobBatch.detail"),width:["50%","90%"]},{default:s(()=>[e(c,{type:"segment",animated:"","default-value":r.log?1:0},{default:s(()=>[e(N,{name:0,tab:t(a)("page.log.info")},{default:s(()=>[e(C,{class:"pt-16px","label-placement":"top",bordered:"",column:2},{default:s(()=>[e(f,{label:t(a)("page.jobBatch.groupName")},{default:s(()=>{var n;return[S(D((n=r.rowData)==null?void 0:n.groupName),1)]}),_:1},8,["label"]),e(f,{label:t(a)("page.jobBatch.jobName")},{default:s(()=>{var n;return[S(D((n=r.rowData)==null?void 0:n.jobName),1)]}),_:1},8,["label"]),e(f,{label:t(a)("page.jobBatch.taskBatchStatus")},{default:s(()=>{var n;return[e(w,{type:t(U)((n=r.rowData)==null?void 0:n.taskBatchStatus)},{default:s(()=>{var p;return[S(D(t(a)(t(Y)[(p=r.rowData)==null?void 0:p.taskBatchStatus])),1)]}),_:1},8,["type"])]}),_:1},8,["label"]),e(f,{label:t(a)("page.jobBatch.executionAt")},{default:s(()=>{var n;return[S(D((n=r.rowData)==null?void 0:n.executionAt),1)]}),_:1},8,["label"]),e(f,{label:t(a)("page.jobBatch.operationReason")},{default:s(()=>{var n;return[e(w,{type:t(U)((n=r.rowData)==null?void 0:n.operationReason)},{default:s(()=>{var p;return[S(D(t(a)(t(Z)[(p=r.rowData)==null?void 0:p.operationReason])),1)]}),_:1},8,["type"])]}),_:1},8,["label"]),e(f,{label:t(a)("page.jobBatch.executorType")},{default:s(()=>{var n;return[e(w,{type:t(U)((n=r.rowData)==null?void 0:n.executorType)},{default:s(()=>{var p;return[S(D(t(a)(t(ce)[(p=r.rowData)==null?void 0:p.executorType])),1)]}),_:1},8,["type"])]}),_:1},8,["label"]),e(f,{label:t(a)("page.jobBatch.executorInfo"),span:2},{default:s(()=>{var n;return[S(D((n=r.rowData)==null?void 0:n.executorInfo),1)]}),_:1},8,["label"]),e(f,{label:t(a)("common.createDt"),span:2},{default:s(()=>{var n;return[S(D((n=r.rowData)==null?void 0:n.createDt),1)]}),_:1},8,["label"])]),_:1})]),_:1},8,["tab"]),e(N,{name:1,tab:t(a)("page.log.title"),"display-directive":"if"},{default:s(()=>[e(u,{"row-data":r.rowData,onShowLog:i,onRetry:v},null,8,["row-data"])]),_:1},8,["tab"])]),_:1},8,["default-value"])]),_:1},8,["modelValue","title"]),e(x,{show:k.value,"onUpdate:show":b[1]||(b[1]=n=>k.value=n),title:t(a)("page.log.title"),"task-data":_.value},null,8,["show","title","task-data"])],64)}}}),Ve=de(Oe,[["__scopeId","data-v-e5f932b6"]]),ze={class:"min-h-500px flex-col-stretch gap-16px overflow-hidden lt-sm:overflow-auto"};function R(y){return typeof y=="function"||Object.prototype.toString.call(y)==="[object Object]"&&!ye(y)}const oa=z({name:"job_batch",__name:"index",setup(y){const $=fe(),B=T(),{bool:_,setTrue:k}=F(!1),{bool:i,setBool:v}=F(!1),r=history.state.jobName,b=history.state.jobId,f=history.state.taskBatchStatus,{columnChecks:w,columns:C,data:N,getData:u,loading:c,mobilePagination:j,searchParams:x,resetSearchParams:n}=xe({apiFn:we,apiParams:{page:1,size:10,groupName:null,jobName:null,taskBatchStatus:null,jobId:null,datetimeRange:be()},searchParams:{jobId:b,jobName:r,taskBatchStatus:f},columns:()=>[{type:"selection",width:30},{key:"id",align:"center",width:60,title:()=>e("div",{class:"flex-center"},[e("span",null,[a("page.jobBatch.jobTask.id")]),e(ge,{trigger:"hover"},{trigger:()=>e("span",{class:"mb-2px ml-5px text-16px"},[e(he,{icon:"ant-design:info-circle-outlined"},null)]),default:()=>e("span",null,[a("common.idDetailTip")])})]),render:o=>{function l(){B.value=o,v(!1),k()}return e(J,{text:!0,tag:"a",type:"primary",onClick:l,class:"ws-normal"},{default:()=>[o.id]})}},{key:"groupName",title:a("page.jobBatch.groupName"),align:"left",width:120},{key:"taskType",title:a("page.jobBatch.taskType"),align:"center",width:120,render:o=>{if(o.taskType===null)return null;const l={1:"info",2:"success",3:"error",4:"primary",5:"warning"},m=a(_e[o.taskType]);return e(I,{type:l[o.taskType]},R(m)?m:{default:()=>[m]})}},{key:"jobName",title:a("page.jobBatch.jobName"),align:"center",width:120},{key:"executionAt",title:a("page.jobBatch.executionAt"),align:"center",width:120},{key:"duration",title:a("page.jobBatch.duration"),align:"center",width:120,render:o=>o.taskBatchStatus===3?Math.round(G(o.updateDt).diff(G(o.executionAt))/1e3):null},{key:"taskBatchStatus",title:a("page.jobBatch.taskBatchStatus"),align:"center",width:120,render:o=>{if(o.taskBatchStatus===null)return null;const l=a(Y[o.taskBatchStatus]);return e(I,{type:{1:"info",2:"info",3:"info",4:"error",5:"error",6:"error"}[o.taskBatchStatus]},R(l)?l:{default:()=>[l]})}},{key:"operationReason",title:a("page.jobBatch.operationReason"),align:"center",width:120,render:o=>{if(o.operationReason===null)return null;const l=a(Z[o.operationReason]);return e(I,{type:U(o.operationReason)},R(l)?l:{default:()=>[l]})}},{key:"createDt",title:a("common.createDt"),align:"center",width:120},{key:"operate",title:a("common.operate"),align:"center",width:160,render:o=>{let l;const m=()=>o.taskBatchStatus===1||o.taskBatchStatus===2?e(V,null,[e(O,{vertical:!0},null),e(A,{onPositiveClick:()=>oe(o.id)},{default:()=>a("common.confirmStop"),trigger:()=>{let d;return e(J,{type:"error",text:!0,ghost:!0,size:"small"},R(d=a("common.stop"))?d:{default:()=>[d]})}})]):null,M=()=>o.taskBatchStatus===4||o.taskBatchStatus===5||o.taskBatchStatus===6?e(V,null,[e(O,{vertical:!0},null),e(A,{onPositiveClick:()=>te(o.id)},{default:()=>a("common.confirmRetry"),trigger:()=>{let d;return e(J,{type:"error",text:!0,ghost:!0,size:"small"},R(d=a("common.retry"))?d:{default:()=>[d]})}})]):null;return e("div",{class:"flex-center gap-8px"},[e(J,{type:"primary",text:!0,ghost:!0,size:"small",onClick:()=>ae(o)},R(l=a("common.log"))?l:{default:()=>[l]}),m(),M(),e(O,{vertical:!0},null),e(A,{onPositiveClick:()=>X(o.id)},{default:()=>a("common.confirmDelete"),trigger:()=>{let d;return e(J,{type:"error",text:!0,ghost:!0,size:"small"},R(d=a("common.delete"))?d:{default:()=>[d]})}})])}}]}),{checkedRowKeys:p,onDeleted:g,onBatchDeleted:W}=Re(N,u);async function X(o){const{error:l}=await je(o);l||g()}async function ee(){const{error:o}=await Se(p.value);o||W()}function ae(o){B.value=o,v(!0),k()}async function te(o){var m;const{error:l}=await Q(o);l||((m=window.$message)==null||m.success(a("common.operateSuccess")),u())}async function oe(o){var m;const{error:l}=await De(o);l||((m=window.$message)==null||m.success(a("common.operateSuccess")),u())}return(o,l)=>{const m=ne,M=Me,d=Be;return P(),H("div",ze,[e(Ae,{model:t(x),"onUpdate:model":l[0]||(l[0]=h=>L(x)?x.value=h:null),onReset:t(n),onSearch:t(u)},null,8,["model","onReset","onSearch"]),e(d,{title:t(a)("page.jobBatch.title"),bordered:!1,size:"small",class:"sm:flex-1-hidden card-wrapper","header-class":"view-card-header"},{"header-extra":s(()=>[e(m,{columns:t(w),"onUpdate:columns":l[1]||(l[1]=h=>L(w)?w.value=h:null),"disabled-delete":t(p).length===0,loading:t(c),"show-add":!1,onDelete:ee,onRefresh:t(u)},null,8,["columns","disabled-delete","loading","onRefresh"])]),default:s(()=>[e(M,{"checked-row-keys":t(p),"onUpdate:checkedRowKeys":l[2]||(l[2]=h=>L(p)?p.value=h:null),columns:t(C),data:t(N),"flex-height":!t($).isMobile,"scroll-x":1200,loading:t(c),remote:"","row-key":h=>h.id,pagination:t(j),class:"sm:h-full"},null,8,["checked-row-keys","columns","data","flex-height","loading","row-key","pagination"])]),_:1},8,["title"]),t(_)?(P(),E(Ve,{key:0,visible:t(_),"onUpdate:visible":l[3]||(l[3]=h=>L(_)?_.value=h:null),log:t(i),"onUpdate:log":l[4]||(l[4]=h=>L(i)?i.value=h:null),"row-data":B.value},null,8,["visible","log","row-data"])):ve("",!0)])}}});export{oa as default};
