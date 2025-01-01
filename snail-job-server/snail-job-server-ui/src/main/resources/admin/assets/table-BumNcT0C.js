import{d as V,j as A,k as N}from"./Grid-3R-51InK.js";import{d as Y,r as S,am as M,dY as $,E as H,e7 as U,e8 as W,e9 as q,ah as B,p as L,ea as E,a as j,ar as X,L as J,$ as z,q as Q,at as Z}from"./index-Dlhm-fK8.js";const ee=Object.assign(Object.assign({},A),U),oe=Y({__GRID_ITEM__:!0,name:"FormItemGridItem",alias:["FormItemGi"],props:ee,setup(){const a=S(null);return{formItemInstRef:a,validate:(...t)=>{const{value:h}=a;if(h)return h.validate(...t)},restoreValidation:()=>{const{value:t}=a;t&&t.restoreValidation()}}},render(){return M(V,$(this.$.vnode.props||{},N),{default:()=>{const a=$(this.$props,W);return M(H,Object.assign({ref:"formItemInstRef"},a),this.$slots)}})}});function ae(a){const{loading:m,startLoading:y,endLoading:t}=q(),{bool:h,setBool:f}=B(),{apiFn:I,apiParams:l,transformer:C,immediate:w=!0,getColumnChecks:_,getColumns:b}=a,g=L(E({...l})),s=S(a.columns()),P=S([]),i=S(_(a.columns())),p=j(()=>b(s.value,i.value));function D(){s.value=a.columns();const u=new Map(i.value.map(c=>[c.key,c.checked])),k=_(s.value);i.value=k.map(c=>({...c,checked:u.get(c.key)??c.checked}))}async function v(){var e;y();const u=T(g),k=await I(u),c=C(k);P.value=c.data,f(c.data.length===0),await((e=a.onFetched)==null?void 0:e.call(a,c)),t()}function T(u){const k={};return Object.entries(u).forEach(([c,e])=>{e!=null&&(k[c]=e)}),k}function r(u){Object.assign(g,u)}function O(){Object.assign(g,E(l))}return w&&(a.searchParams&&r(a.searchParams),v()),{loading:m,empty:h,data:P,columns:p,columnChecks:i,reloadColumns:D,getData:v,searchParams:g,updateSearchParams:r,resetSearchParams:O}}function re(a){const m=X(),y=J(),t=j(()=>y.isMobile),{apiFn:h,apiParams:f,immediate:I}=a,l=a.showTotal||!0,C="__selection__",w="__expand__",{loading:_,empty:b,data:g,columns:s,columnChecks:P,reloadColumns:i,getData:p,searchParams:D,updateSearchParams:v,resetSearchParams:T}=ae({apiFn:h,apiParams:f,searchParams:a.searchParams,columns:a.columns,transformer:e=>{const{data:d=[],page:n=1,size:x=10,total:o=0}=e.data||{},F=x<=0?10:x;return{data:d.map((G,R)=>({...G,index:(n-1)*F+R+1})),pageNum:n,pageSize:F,total:o}},getColumnChecks:e=>{const d=[];return e.forEach(n=>{K(n)?d.push({key:n.key,title:n.title,checked:!0}):n.type==="selection"?d.push({key:C,title:z("common.check"),checked:!0}):n.type==="expand"&&d.push({key:w,title:z("common.expandColumn"),checked:!0})}),d},getColumns:(e,d)=>{const n=new Map;return e.forEach(o=>{K(o)?n.set(o.key,o):o.type==="selection"?n.set(C,o):o.type==="expand"&&n.set(w,o),t.value&&o.fixed&&(o.fixed=void 0)}),d.filter(o=>o.checked).map(o=>n.get(o.key))},onFetched:async e=>{const{pageNum:d,pageSize:n,total:x}=e;u({page:d,pageSize:n,itemCount:x})},immediate:I}),r=L({page:1,pageSize:10,showSizePicker:!0,pageSizes:[10,15,20,25,30],onUpdatePage:async e=>{r.page=e,v({page:e,size:r.pageSize}),p()},onUpdatePageSize:async e=>{r.pageSize=e,r.page=1,v({page:r.page,size:e}),p()},...l?{prefix:e=>z("datatable.itemCount",{total:e.itemCount})}:{}}),O=j(()=>({...r,pageSlot:t.value?3:9,prefix:!t.value&&l?r.prefix:void 0}));function u(e){Object.assign(r,e)}async function k(e=1){u({page:e}),v({page:e,size:r.pageSize}),await p()}return m.run(()=>{Q(()=>y.locale,()=>{i()})}),Z(()=>{m.stop()}),{loading:_,empty:b,data:g,columns:s,columnChecks:P,reloadColumns:i,pagination:r,mobilePagination:O,updatePagination:u,getData:p,getDataByPage:k,searchParams:D,updateSearchParams:v,resetSearchParams:()=>{T(),p()}}}function ce(a,m){const{bool:y,setTrue:t,setFalse:h}=B(),f=S("add");function I(){f.value="add",t()}const l=S(null);function C(s){f.value="edit";const P=a.value.find(i=>i.id===s)||null;l.value=E(P),t()}function w(s){var i;f.value="add";const P=a.value.find(p=>p.id===s)||null;l.value=E(P),(i=l.value)==null||delete i.id,t()}const _=S([]);async function b(){var s;(s=window.$message)==null||s.success(z("common.deleteSuccess")),_.value=[],await m()}async function g(){var s;(s=window.$message)==null||s.success(z("common.deleteSuccess")),await m()}return{drawerVisible:y,openDrawer:t,closeDrawer:h,operateType:f,handleAdd:I,editingData:l,handleEdit:C,handleCopy:w,checkedRowKeys:_,onBatchDeleted:b,onDeleted:g}}function K(a){return!!a.key}export{oe as _,ce as a,re as u};
