import{c as He,d as Fe,a as sa,N as Ae,b as ua}from"./search-form.vue_vue_type_script_setup_true_lang-CiN8VA7k.js";import{d as pa,_ as ia,a as da}from"./download-DHVW8dOr.js";import{_ as ma}from"./delete-alert-_CWckxKJ.js";import{d as q,r as P,o as k,c as I,h as a,$ as t,a5 as we,aF as ca,ab as re,Z as Y,a0 as ke,aG as ga,aH as ba,aI as fa,aJ as va,L as Ge,q as Q,b as de,w as l,f as e,g as w,t as D,aj as Ue,aK as ae,aa as Ce,D as Ve,p as te,z as ya,A as ze,a as qe,a2 as Je,aL as We,a4 as Se,e as ie,x as Qe,aM as Oe,C as $e,s as Re,ac as _a,E as Ye,H as Ze,B as le,F as Pe,I as Xe,l as ea,aN as Ta,ad as ye,aD as aa,aO as ka,aP as ha,aB as ja,aQ as la,aR as ta,Y as De,u as Sa,ah as Be,ai as _e,ak as Le,aS as wa,al as Na}from"./index-Dlhm-fK8.js";import{a as xa,b as Ia,c as Da,d as Ua,e as Ke,g as Oa}from"./job-DaTjC9FR.js";import{_ as $a,u as Ra,a as Va}from"./table-BumNcT0C.js";import{_ as Ja}from"./status-switch.vue_vue_type_script_setup_true_lang-BF7EJgO0.js";import{u as Ca}from"./auth-VqY08jsz.js";import{f as Pa}from"./notify-CzjhdH-_.js";import{_ as Ee,a as Ea}from"./route-key.vue_vue_type_script_setup_true_lang-kkA36ovn.js";import{_ as oe}from"./code-mirror.vue_vue_type_script_setup_true_lang-CVcHTA2j.js";import{_ as Ma}from"./cron-input.vue_vue_type_style_index_0_lang-DJqzXQwn.js";import{_ as oa}from"./select-group.vue_vue_type_script_setup_true_lang-BowmroEB.js";import{_ as ra}from"./DynamicInput-AXL7jwHE.js";import{a as Aa,_ as Ba,d as La,c as Ka,b as Ha}from"./Grid-3R-51InK.js";import{_ as Fa}from"./detail-drawer-CZtUR7gy.js";import{_ as Ga,a as za}from"./DescriptionsItem-g_tZg_fN.js";import"./Progress-CJD1ciXM.js";import"./group-CP2HSNrU.js";const qa=q({name:"TriggerType",__name:"trigger-type",emits:["update:value"],setup(U,{emit:x}){const u=x,v=P(),c=d=>{u("update:value",d)};return(d,b)=>{const f=re;return k(),I(f,{value:v.value,"onUpdate:value":[b[0]||(b[0]=o=>v.value=o),c],placeholder:a(t)("common.triggerType.form"),options:a(we)(a(ca))},null,8,["value","placeholder","options"])}}}),na=q({name:"SystemUser",__name:"system-user",props:Y({disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1}},{modelValue:{},modelModifiers:{}}),emits:Y(["update:modelValue"],["update:modelValue"]),setup(U,{emit:x}){const u=U,v=ke(U,"modelValue"),c=x,d=P();async function b(){const{data:o,error:g}=await ga();g||(d.value=o==null?void 0:o.data)}const f=o=>{c("update:modelValue",o)};return b(),(o,g)=>{const B=re;return k(),I(B,{value:v.value,"onUpdate:value":[g[0]||(g[0]=$=>v.value=$),f],placeholder:a(t)("page.userManager.form.ownerName"),options:d.value,"value-field":"id","label-field":"username",disabled:u.disabled,clearable:u.clearable,filterable:""},null,8,["value","placeholder","options","disabled","clearable"])}}}),Wa=q({name:"BlockStrategy",__name:"block-strategy",emits:["update:value"],setup(U,{emit:x}){const u=P(),v=x,c=d=>{v("update:value",d)};return(d,b)=>{const f=re;return k(),I(f,{value:u.value,"onUpdate:value":[b[0]||(b[0]=o=>u.value=o),c],placeholder:a(t)("common.blockStrategy.form"),options:a(we)(a(ba))},null,8,["value","placeholder","options"])}}}),Qa=q({name:"TriggerStrategy",__name:"executor-type",emits:["update:value"],setup(U,{emit:x}){const u=P(),v=x,c=d=>{v("update:value",d)};return(d,b)=>{const f=re;return k(),I(f,{value:u.value,"onUpdate:value":[b[0]||(b[0]=o=>u.value=o),c],placeholder:a(t)("common.executorType.form"),options:a(we)(a(fa))},null,8,["value","placeholder","options"])}}}),Ya=q({name:"TaskType",__name:"task-type",emits:["update:value"],setup(U,{emit:x}){const u=x,v=P(),c=d=>{u("update:value",d)};return(d,b)=>{const f=re;return k(),I(f,{value:v.value,"onUpdate:value":[b[0]||(b[0]=o=>v.value=o),c],placeholder:a(t)("common.routeKey.routeForm"),options:a(we)(a(va))},null,8,["value","placeholder","options"])}}}),Za=q({name:"JobTriggerInterval",__name:"job-trigger-interval",props:Y({triggerType:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(U){const x=ke(U,"modelValue"),u=U,v=Ge(),c=P(u.triggerType===2?Number(x.value):60),d=P(u.triggerType===3?x.value:"* * * * * ?");return Q(c,b=>{u.triggerType===2&&(x.value=`${b}`)},{immediate:!0}),Q(d,b=>{u.triggerType===3&&(x.value=b)},{immediate:!0}),Q(()=>u.triggerType,b=>{b===2?x.value=`${c.value}`:b===3?x.value=d.value:x.value="*"},{immediate:!0}),(b,f)=>{const o=ae,g=Ee,B=Ce,$=Ve;return k(),de("div",null,[b.triggerType===2?(k(),I(B,{key:0},{default:l(()=>[e(o,{value:c.value,"onUpdate:value":f[0]||(f[0]=N=>c.value=N),placeholder:b.$t("page.jobTask.form.triggerInterval")},null,8,["value","placeholder"]),e(g,null,{default:l(()=>[w(D(b.$t("common.second")),1)]),_:1})]),_:1})):b.triggerType===3?(k(),I(a(Ma),{key:1,modelValue:d.value,"onUpdate:modelValue":f[1]||(f[1]=N=>d.value=N),placeholder:b.$t("page.jobTask.form.triggerInterval_CRON"),lang:a(v).locale},null,8,["modelValue","placeholder","lang"])):b.triggerType===99?(k(),I($,{key:2,disabled:""})):Ue("",!0)])}}}),Xa={class:"w-full w-full flex-col items-start gap-12px pt-5px"},el={class:"flex"},al=q({name:"JobTaskOperateDrawer",__name:"job-task-operate-drawer",props:Y({operateType:{},rowData:{}},{visible:{type:Boolean,default:!1},visibleModifiers:{}}),emits:Y(["submitted"],["update:visible"]),setup(U,{emit:x}){const u=P([]),v=U,c=x,d=P(0),b=ke(U,"visible"),f=te({args:[{arg:""}]}),o=P(0),g=P(null),{formRef:B,validate:$,restoreValidation:N}=ya(),{defaultRequiredRule:T}=ze(),ne=qe(()=>({add:t("page.jobTask.addJobTask"),edit:t("page.jobTask.editJobTask")})[v.operateType]);async function L(){const h=await Pa(3);u.value=h.data}const n=te(me());function me(){return{groupName:void 0,ownerId:void 0,notifyIds:[],jobName:"",argsStr:"",argsType:1,jobStatus:1,routeKey:4,executorType:1,triggerType:2,executorInfo:void 0,triggerInterval:"60",blockStrategy:1,executorTimeout:60,maxRetryTimes:3,retryInterval:1,taskType:1,parallelNum:1,description:""}}const Z={groupName:T,jobName:T,argsType:T,jobStatus:T,routeKey:T,executorType:T,executorInfo:T,triggerType:T,triggerInterval:T,blockStrategy:T,executorTimeout:T,maxRetryTimes:T,retryInterval:T,taskType:T,parallelNum:T},E=P([]),O=te(ce());function ce(){return{method:"POST",url:"",headers:{},body:"",mediaType:"application/json",timeout:60}}const ge=[{label:"Http 执行器",value:"snailJobHttpExecutor"},{label:"CMD 执行器",value:"snailJobCMDJobExecutor"},{label:"PowerShell 执行器",value:"snailJobPowerShellJobExecutor"},{label:"Shell 执行器",value:"snailJobShellJobExecutor"}],K=te(C());function C(){return{method:"LOCAL_SCRIPT",scriptParams:"",charset:""}}function he(){if(v.operateType==="add"&&!v.rowData){Object.assign(n,me()),d.value=0,E.value=[],Object.assign(O,ce()),Object.assign(K,C());return}if(v.rowData){if(Object.assign(n,v.rowData),n.taskType===3&&n.argsStr&&Object.assign(f,{args:JSON.parse(n.argsStr).map(h=>({arg:h}))}),n.taskType===5&&n.argsStr){const h=JSON.parse(n.argsStr);o.value=h.shardNum,n.argsStr=h.argsStr}ge.map(h=>h.value).includes(n.executorInfo)&&(d.value=1,n.executorInfo==="snailJobHttpExecutor"?(Object.assign(O,JSON.parse(n.argsStr)),O.headers&&(E.value=Object.keys(O.headers).map(h=>({key:h,value:O.headers[h]})))):Object.assign(K,JSON.parse(n.argsStr)))}}function _(){b.value=!1}async function m(){var G,je,Me;await $();const{id:h,groupName:r,ownerId:i,ownerName:p,notifyIds:j,jobName:M,argsType:H,jobStatus:V,routeKey:A,executorType:y,executorInfo:S,triggerType:se,triggerInterval:Ne,blockStrategy:ue,executorTimeout:xe,maxRetryTimes:be,retryInterval:fe,taskType:F,parallelNum:pe,description:Ie}=n;let s=F===5?JSON.stringify({shardNum:o.value,argsStr:n.argsStr}):n.argsStr;if(d.value===1&&(await((G=g.value)==null?void 0:G.validate()),n.executorInfo==="snailJobHttpExecutor"?(E.value.forEach(ve=>{O.headers[ve.key]=ve.value}),s=JSON.stringify(O)):s=JSON.stringify(K)),v.operateType==="add"){const{error:ve}=await xa({groupName:r,ownerId:i,ownerName:p,notifyIds:j,jobName:M,argsStr:s,argsType:H,jobStatus:V,routeKey:A,executorType:y,executorInfo:S,triggerType:se,triggerInterval:Ne,blockStrategy:ue,executorTimeout:xe,maxRetryTimes:be,retryInterval:fe,taskType:F,parallelNum:pe,description:Ie});if(ve)return;(je=window.$message)==null||je.success(t("common.addSuccess"))}if(v.operateType==="edit"){const{error:ve}=await Ia({id:h,groupName:r,ownerId:i,ownerName:p,notifyIds:j,jobName:M,argsStr:s,argsType:H,jobStatus:V,routeKey:A,executorType:y,executorInfo:S,triggerType:se,triggerInterval:Ne,blockStrategy:ue,executorTimeout:xe,maxRetryTimes:be,retryInterval:fe,taskType:F,parallelNum:pe,description:Ie});if(ve)return;(Me=window.$message)==null||Me.success(t("common.updateSuccess"))}_(),c("submitted")}function R(){if(n.taskType===3&&f.args){const h=f.args.map(r=>r.arg.trim()).filter(r=>!!r);n.argsStr=h.length>0?JSON.stringify(h):""}return n.argsStr}const z=h=>{f.args.splice(h,1)},J=()=>{f.args.push({arg:""})};Q(b,()=>{var h;b.value&&(he(),N(),L(),(h=g.value)==null||h.restoreValidation())}),Q(f,()=>{b.value&&n.taskType===3&&R()}),Q(()=>n.taskType,h=>{v.operateType==="add"&&b.value&&(h!==3&&(f.args=[]),h!==5&&(o.value=1),n.argsStr="")});function X(){if(d.value===0){n.executorInfo="";return}n.executorInfo="snailJobHttpExecutor"}const ee=[{label:"GET",value:"get"},{label:"POST",value:"post"},{label:"PUT",value:"put"},{label:"DELETE",value:"delete"}],W=[{label:"需下载脚本",value:"DOWNLOAD"},{label:"脚本代码",value:"SCRIPT_CODE"},{label:"使用本地脚本",value:"LOCAL_SCRIPT"}];return(h,r)=>{const i=Ve,p=Ye,j=na,M=Aa,H=Ze,V=Ba,A=re,y=Fe,S=le,se=He,Ne=Pe,ue=Ce,xe=ra,be=Ee,fe=Xe,F=La,pe=Ka,Ie=qa;return k(),I(_a,{modelValue:b.value,"onUpdate:modelValue":r[32]||(r[32]=s=>b.value=s),title:ne.value,"min-size":480,onHandleSubmit:m},{footer:l(()=>[e(H,{size:16},{default:l(()=>[e(S,{onClick:_},{default:l(()=>[w(D(a(t)("common.cancel")),1)]),_:1}),e(S,{type:"primary",onClick:m},{default:l(()=>[w(D(a(t)("common.save")),1)]),_:1})]),_:1})]),default:l(()=>[e(fe,{ref_key:"formRef",ref:B,model:n,rules:Z},{default:l(()=>[e(p,{label:a(t)("page.jobTask.jobName"),path:"jobName"},{default:l(()=>[e(i,{value:n.jobName,"onUpdate:value":r[0]||(r[0]=s=>n.jobName=s),maxlength:64,"show-count":"",placeholder:a(t)("page.jobTask.form.jobName")},null,8,["value","placeholder"])]),_:1},8,["label"]),e(p,{label:a(t)("page.jobTask.groupName"),path:"groupName"},{default:l(()=>[e(oa,{value:n.groupName,"onUpdate:value":r[1]||(r[1]=s=>n.groupName=s),disabled:v.operateType==="edit"},null,8,["value","disabled"])]),_:1},8,["label"]),e(p,{label:a(t)("page.jobTask.ownerName"),path:"ownerId"},{default:l(()=>[e(j,{value:n.ownerId,"onUpdate:value":r[2]||(r[2]=s=>n.ownerId=s)},null,8,["value"])]),_:1},8,["label"]),e(p,{label:a(t)("page.jobTask.jobStatus"),path:"jobStatus"},{default:l(()=>[e(V,{value:n.jobStatus,"onUpdate:value":r[3]||(r[3]=s=>n.jobStatus=s),name:"jobStatus"},{default:l(()=>[e(H,null,{default:l(()=>[(k(!0),de(Se,null,Je(a(We),s=>(k(),I(M,{key:s.value,value:s.value,label:a(t)(s.label)},null,8,["value","label"]))),128))]),_:1})]),_:1},8,["value"])]),_:1},8,["label"]),e(p,{label:a(t)("page.jobTask.taskType"),path:"taskType"},{default:l(()=>[e(Ya,{value:n.taskType,"onUpdate:value":r[4]||(r[4]=s=>n.taskType=s),placeholder:a(t)("page.jobTask.form.taskType")},null,8,["value","placeholder"])]),_:1},8,["label"]),e(p,{label:a(t)("page.jobTask.executorType"),path:"executorType"},{default:l(()=>[e(Qa,{value:n.executorType,"onUpdate:value":r[5]||(r[5]=s=>n.executorType=s)},null,8,["value"])]),_:1},8,["label"]),e(p,{label:a(t)("page.jobTask.executorInfo"),path:"executorInfo"},{default:l(()=>[ie("div",Xa,[e(V,{value:d.value,"onUpdate:value":r[6]||(r[6]=s=>d.value=s),onChange:X},{default:l(()=>[e(M,{value:0},{default:l(()=>r[33]||(r[33]=[w("自定义执行器")])),_:1}),e(M,{value:1},{default:l(()=>r[34]||(r[34]=[w("内置执行器")])),_:1})]),_:1},8,["value"]),d.value===0?(k(),I(i,{key:0,value:n.executorInfo,"onUpdate:value":r[7]||(r[7]=s=>n.executorInfo=s),placeholder:a(t)("page.jobTask.form.executorInfo")},null,8,["value","placeholder"])):(k(),I(A,{key:1,value:n.executorInfo,"onUpdate:value":r[8]||(r[8]=s=>n.executorInfo=s),options:ge,placeholder:"请选择内置执行器"},null,8,["value"]))])]),_:1},8,["label"]),n.taskType===5?(k(),I(p,{key:0,label:a(t)("page.jobTask.shardNum")},{default:l(()=>[e(a(ae),{value:o.value,"onUpdate:value":r[9]||(r[9]=s=>o.value=s),min:1,placeholder:a(t)("page.jobTask.form.shardNum")},null,8,["value","placeholder"])]),_:1},8,["label"])):Ue("",!0),e(p,{label:a(t)("page.jobTask.argsStr"),path:"argsStr","show-label":d.value===0,"show-feedback":d.value===0,rule:n.taskType===3?a(T):void 0},{default:l(()=>[d.value===0?(k(),de(Se,{key:0},[n.taskType===3?(k(),I(Ne,{key:0,class:"flex-col"},{default:l(()=>[(k(!0),de(Se,null,Je(f.args,(s,G)=>(k(),I(p,{key:G,label:`分片参数 ${G+1}`,path:`args[${G}].arg`,"show-feedback":!1,class:"m-b-12px",rule:{required:!0,message:`${a(t)("page.jobTask.form.argsStr")} ${G+1}`,trigger:["input","blur"],validator(){return!!s.arg}}},{default:l(()=>[e(oe,{modelValue:s.arg,"onUpdate:modelValue":je=>s.arg=je,lang:"json",placeholder:a(t)("page.jobTask.form.argsStr")},null,8,["modelValue","onUpdate:modelValue","placeholder"]),e(S,{class:"ml-12px",type:"error",dashed:"",onClick:je=>z(G)},{default:l(()=>[e(y,{class:"text-icon"})]),_:2},1032,["onClick"])]),_:2},1032,["label","path","rule"]))),128)),e(S,{block:"",dashed:"","attr-type":"button",onClick:J},{default:l(()=>[e(se,{class:"text-icon"})]),_:1})]),_:1})):(k(),I(oe,{key:1,modelValue:n.argsStr,"onUpdate:modelValue":r[10]||(r[10]=s=>n.argsStr=s),lang:"json",placeholder:a(t)("page.jobTask.form.argsStr")},null,8,["modelValue","placeholder"]))],64)):n.executorInfo==="snailJobHttpExecutor"?(k(),I(fe,{key:1,ref_key:"customformRef",ref:g,class:"w-full",model:O},{default:l(()=>[e(p,{label:"请求参数",rule:a(T),path:"url"},{default:l(()=>[e(ue,null,{default:l(()=>[e(A,{value:O.method,"onUpdate:value":r[11]||(r[11]=s=>O.method=s),class:"http-method",options:ee},null,8,["value"]),e(i,{value:O.url,"onUpdate:value":r[12]||(r[12]=s=>O.url=s),placeholder:"请输入请求地址",class:"w-full"},null,8,["value"])]),_:1})]),_:1},8,["rule"]),e(p,{label:"Media Type"},{default:l(()=>[e(i,{value:O.mediaType,"onUpdate:value":r[13]||(r[13]=s=>O.mediaType=s),placeholder:"请输入 Media Type"},null,8,["value"])]),_:1}),r[36]||(r[36]=ie("div",{class:"n-form-item-label"},"Header 参数",-1)),e(xe,{value:E.value,"onUpdate:value":r[16]||(r[16]=s=>E.value=s),class:Qe(E.value.length?void 0:"mb-24px"),"item-style":"margin-bottom: 0;","on-create":()=>({key:"",value:""})},{default:l(({index:s})=>[ie("div",el,[e(p,{"ignore-path-change":"","show-label":!1,path:`headers[${s}].key`,rule:{required:!0,message:"请输入键",trigger:["input","blur"],validator:()=>a(Oe)(E.value[s].key)}},{default:l(()=>[e(i,{value:E.value[s].key,"onUpdate:value":G=>E.value[s].key=G,placeholder:"Key",onKeydown:r[14]||(r[14]=$e(Re(()=>{},["prevent"]),["enter"]))},null,8,["value","onUpdate:value"])]),_:2},1032,["path","rule"]),r[35]||(r[35]=ie("div",{class:"mx-8px h-34px text-center line-height-34px"},"=",-1)),e(p,{"ignore-path-change":"","show-label":!1,path:`headers[${s}].value`,rule:{required:!0,message:"请输入值",trigger:["input","blur"],validator:()=>a(Oe)(E.value[s].value)}},{default:l(()=>[e(i,{value:E.value[s].value,"onUpdate:value":G=>E.value[s].value=G,placeholder:"Value",onKeydown:r[15]||(r[15]=$e(Re(()=>{},["prevent"]),["enter"]))},null,8,["value","onUpdate:value"])]),_:2},1032,["path","rule"])])]),_:1},8,["value","class"]),e(p,{label:"Body 参数"},{default:l(()=>[e(oe,{modelValue:O.body,"onUpdate:modelValue":r[17]||(r[17]=s=>O.body=s),lang:"json",placeholder:"请输入 Body 参数"},null,8,["modelValue"])]),_:1}),e(p,{label:"接口超时时间"},{default:l(()=>[e(ue,null,{default:l(()=>[e(a(ae),{value:O.timeout,"onUpdate:value":r[18]||(r[18]=s=>O.timeout=s),class:"w-full",min:1,max:99999999,placeholder:a(t)("page.jobTask.form.executorTimeout"),clearable:""},null,8,["value","placeholder"]),e(be,null,{default:l(()=>[w(D(a(t)("common.second")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])):(k(),I(fe,{key:2,ref_key:"customformRef",ref:g,class:"w-full",model:K},{default:l(()=>[e(p,{label:"脚本类型"},{default:l(()=>[e(A,{value:K.method,"onUpdate:value":r[19]||(r[19]=s=>K.method=s),options:W},null,8,["value"])]),_:1}),e(p,{label:"脚本参数"},{default:l(()=>[e(oe,{modelValue:K.scriptParams,"onUpdate:modelValue":r[20]||(r[20]=s=>K.scriptParams=s),lang:"json",placeholder:"请输入脚本参数"},null,8,["modelValue"])]),_:1}),e(p,{label:"编码格式"},{default:l(()=>[e(i,{value:K.charset,"onUpdate:value":r[21]||(r[21]=s=>K.charset=s),placeholder:"请输入编码格式"},null,8,["value"])]),_:1})]),_:1},8,["model"]))]),_:1},8,["label","show-label","show-feedback","rule"]),e(pe,{cols:"2 s:1 m:2",responsive:"screen","x-gap":"20"},{default:l(()=>[e(F,null,{default:l(()=>[e(p,{label:a(t)("page.jobTask.routeKey"),path:"routeKey"},{default:l(()=>[e(Ea,{value:n.routeKey,"onUpdate:value":r[22]||(r[22]=s=>n.routeKey=s),"task-type":n.taskType},null,8,["value","task-type"])]),_:1},8,["label"])]),_:1}),e(F,null,{default:l(()=>[e(p,{label:a(t)("page.jobTask.blockStrategy"),path:"blockStrategy"},{default:l(()=>[e(Wa,{value:n.blockStrategy,"onUpdate:value":r[23]||(r[23]=s=>n.blockStrategy=s)},null,8,["value"])]),_:1},8,["label"])]),_:1})]),_:1}),e(pe,{cols:"2 s:1 m:2",responsive:"screen","x-gap":"20"},{default:l(()=>[e(F,null,{default:l(()=>[e(p,{label:a(t)("page.jobTask.triggerType"),path:"triggerType"},{default:l(()=>[e(Ie,{value:n.triggerType,"onUpdate:value":r[24]||(r[24]=s=>n.triggerType=s),placeholder:a(t)("page.jobTask.form.triggerType")},null,8,["value","placeholder"])]),_:1},8,["label"])]),_:1}),e(F,null,{default:l(()=>[e(p,{label:a(t)("page.jobTask.triggerInterval"),path:"triggerInterval"},{default:l(()=>[e(Za,{modelValue:n.triggerInterval,"onUpdate:modelValue":r[25]||(r[25]=s=>n.triggerInterval=s),"trigger-type":n.triggerType},null,8,["modelValue","trigger-type"])]),_:1},8,["label"])]),_:1})]),_:1}),e(pe,{cols:"2 s:1 m:2",responsive:"screen","x-gap":"20"},{default:l(()=>[e(F,null,{default:l(()=>[e(p,{label:a(t)("page.jobTask.executorTimeout"),path:"executorTimeout"},{default:l(()=>[e(ue,null,{default:l(()=>[e(a(ae),{value:n.executorTimeout,"onUpdate:value":r[26]||(r[26]=s=>n.executorTimeout=s),min:1,max:99999999,placeholder:a(t)("page.jobTask.form.executorTimeout"),clearable:""},null,8,["value","placeholder"]),e(be,null,{default:l(()=>[w(D(a(t)("common.second")),1)]),_:1})]),_:1})]),_:1},8,["label"])]),_:1}),e(F,null,{default:l(()=>[e(p,{label:a(t)("page.jobTask.maxRetryTimes"),path:"maxRetryTimes"},{default:l(()=>[e(a(ae),{value:n.maxRetryTimes,"onUpdate:value":r[27]||(r[27]=s=>n.maxRetryTimes=s),min:0,max:999,placeholder:a(t)("page.jobTask.form.maxRetryTimes"),clearable:""},null,8,["value","placeholder"])]),_:1},8,["label"])]),_:1})]),_:1}),e(pe,{cols:"2 s:1 m:2",responsive:"screen","x-gap":"20"},{default:l(()=>[e(F,null,{default:l(()=>[e(p,{label:a(t)("page.jobTask.retryInterval"),path:"retryInterval"},{default:l(()=>[e(ue,null,{default:l(()=>[e(a(ae),{value:n.retryInterval,"onUpdate:value":r[28]||(r[28]=s=>n.retryInterval=s),min:1,max:99999999,placeholder:a(t)("page.jobTask.form.retryInterval"),clearable:""},null,8,["value","placeholder"]),e(be,null,{default:l(()=>[w(D(a(t)("common.second")),1)]),_:1})]),_:1})]),_:1},8,["label"])]),_:1}),e(F,null,{default:l(()=>[n.taskType!==1&&n.taskType!==2?(k(),I(p,{key:0,label:a(t)("page.jobTask.parallelNum"),path:"parallelNum"},{default:l(()=>[e(a(ae),{value:n.parallelNum,"onUpdate:value":r[29]||(r[29]=s=>n.parallelNum=s),min:1,max:999,placeholder:a(t)("page.jobTask.form.parallelNum"),clearable:""},null,8,["value","placeholder"])]),_:1},8,["label"])):Ue("",!0)]),_:1})]),_:1}),e(p,{label:a(t)("page.jobTask.notifyId"),path:"notifyIds"},{default:l(()=>[e(A,{value:n.notifyIds,"onUpdate:value":r[30]||(r[30]=s=>n.notifyIds=s),"value-field":"id","label-field":"notifyName",placeholder:a(t)("page.jobTask.form.notifyId"),options:u.value,clearable:"",multiple:""},null,8,["value","placeholder","options"])]),_:1},8,["label"]),e(p,{label:a(t)("page.jobTask.description"),path:"description"},{default:l(()=>[e(i,{value:n.description,"onUpdate:value":r[31]||(r[31]=s=>n.description=s),type:"textarea",placeholder:a(t)("page.jobTask.form.description")},null,8,["value","placeholder"])]),_:1},8,["label"])]),_:1},8,["model"])]),_:1},8,["modelValue","title"])}}}),ll=ea(al,[["__scopeId","data-v-3b01e7c9"]]),tl={class:"flex"},ol=q({name:"JobTaskTriggerModal",__name:"job-task-trigger-modal",props:Y({rowData:{}},{visible:{type:Boolean,default:!1},visibleModifiers:{}}),emits:Y(["submitted"],["update:visible"]),setup(U,{emit:x}){const u=U,v=x,c=ke(U,"visible"),d=te({args:[{arg:""}]}),b=P(0),f=P(null),{defaultRequiredRule:o}=ze(),g=te(B());function B(){var _;return{jobId:(_=u.rowData)==null?void 0:_.id,tmpArgsStr:""}}const $=P([]),N=te(T());function T(){return{method:"POST",url:"",headers:{},body:"",mediaType:"application/json",timeout:60}}const ne=[{label:"Http 执行器",value:"snailJobHttpExecutor"},{label:"CMD 执行器",value:"snailJobCMDJobExecutor"},{label:"PowerShell 执行器",value:"snailJobPowerShellJobExecutor"},{label:"Shell 执行器",value:"snailJobShellJobExecutor"}],L=te(n());function n(){return{method:"LOCAL_SCRIPT",scriptParams:"",charset:""}}function me(){if(!u.rowData){Object.assign(g,B()),$.value=[],Object.assign(N,T()),Object.assign(L,n());return}Object.assign(g,u.rowData);const _=u.rowData.taskType,m=u.rowData.argsStr;if(m){if(g.tmpArgsStr=m,_===3&&Object.assign(d,{args:JSON.parse(m).map(R=>({arg:R}))}),_===5){const R=JSON.parse(m);b.value=R.shardNum,g.tmpArgsStr=R.argsStr}ne.map(R=>R.value).includes(u.rowData.executorInfo)&&(u.rowData.executorInfo==="snailJobHttpExecutor"?(Object.assign(N,JSON.parse(m)),N.headers&&($.value=Object.keys(N.headers).map(R=>({key:R,value:N.headers[R]})))):Object.assign(L,JSON.parse(m)))}}function Z(){c.value=!1}function E(){var _;if(((_=u.rowData)==null?void 0:_.taskType)===3&&d.args){const m=d.args.map(R=>R.arg.trim()).filter(R=>!!R);g.tmpArgsStr=m.length>0?JSON.stringify(m):""}return g.tmpArgsStr}const O=_=>{d.args.splice(_,1)},ce=()=>{d.args.push({arg:""})};Q(c,()=>{var _;c.value&&(me(),(_=f.value)==null||_.restoreValidation())}),Q(d,()=>{var _;c.value&&((_=u.rowData)==null?void 0:_.taskType)===3&&E()}),Q(()=>{var _;return(_=u.rowData)==null?void 0:_.taskType},_=>{c.value&&(_!==3&&(d.args=[]),_!==5&&(b.value=1),g.tmpArgsStr="")});const ge=[{label:"GET",value:"get"},{label:"POST",value:"post"},{label:"PUT",value:"put"},{label:"DELETE",value:"delete"}],K=[{label:"需下载脚本",value:"DOWNLOAD"},{label:"脚本代码",value:"SCRIPT_CODE"},{label:"使用本地脚本",value:"LOCAL_SCRIPT"}],C=qe(()=>ne.map(_=>_.value).includes(u.rowData.executorInfo)?1:0);async function he(){var R,z,J,X,ee;let _=((R=u.rowData)==null?void 0:R.taskType)===5?JSON.stringify({shardNum:b.value,argsStr:g.tmpArgsStr}):g.tmpArgsStr;C.value===1&&(await((z=f.value)==null?void 0:z.validate()),((J=u.rowData)==null?void 0:J.executorInfo)==="snailJobHttpExecutor"?($.value.forEach(W=>{N.headers[W.key]=W.value}),_=JSON.stringify(N)):_=JSON.stringify(L));const{error:m}=await Da({jobId:(X=u.rowData)==null?void 0:X.id,tmpArgsStr:_});m||((ee=window.$message)==null||ee.success(t("common.executeSuccess")),Z(),v("submitted"))}return(_,m)=>{const R=Fe,z=le,J=Ye,X=He,ee=Pe,W=re,h=Ve,r=Ce,i=ra,p=Ee,j=Xe,M=Ze,H=Ta;return k(),I(H,{show:c.value,"onUpdate:show":m[12]||(m[12]=V=>c.value=V),class:"max-w-90% w-600px",preset:"card",title:"执行任务",bordered:!1},{footer:l(()=>[e(M,{justify:"end",size:16},{default:l(()=>[e(z,{onClick:Z},{default:l(()=>[w(D(a(t)("common.cancel")),1)]),_:1}),e(z,{type:"primary",onClick:he},{default:l(()=>m[15]||(m[15]=[w("执行")])),_:1})]),_:1})]),default:l(()=>[e(j,{model:g},{default:l(()=>{var V;return[_.rowData?(k(),I(J,{key:0,label:a(t)("page.jobTask.argsStr"),path:"argsStr","show-label":C.value===0,"show-feedback":C.value===0,rule:((V=_.rowData)==null?void 0:V.taskType)===3?a(o):void 0},{default:l(()=>{var A;return[C.value===0?(k(),de(Se,{key:0},[((A=_.rowData)==null?void 0:A.taskType)===3?(k(),I(ee,{key:0,class:"flex-col"},{default:l(()=>[(k(!0),de(Se,null,Je(d.args,(y,S)=>(k(),I(J,{key:S,label:`分片参数 ${S+1}`,path:`args[${S}].arg`,"show-feedback":!1,class:"m-b-12px",rule:{required:!0,message:`${a(t)("page.jobTask.form.argsStr")} ${S+1}`,trigger:["input","blur"],validator(){return!!y.arg}}},{default:l(()=>[e(oe,{modelValue:y.arg,"onUpdate:modelValue":se=>y.arg=se,lang:"json",placeholder:a(t)("page.jobTask.form.argsStr")},null,8,["modelValue","onUpdate:modelValue","placeholder"]),e(z,{class:"ml-12px",type:"error",dashed:"",onClick:se=>O(S)},{default:l(()=>[e(R,{class:"text-icon"})]),_:2},1032,["onClick"])]),_:2},1032,["label","path","rule"]))),128)),e(z,{block:"",dashed:"","attr-type":"button",onClick:ce},{default:l(()=>[e(X,{class:"text-icon"})]),_:1})]),_:1})):(k(),I(oe,{key:1,modelValue:g.tmpArgsStr,"onUpdate:modelValue":m[0]||(m[0]=y=>g.tmpArgsStr=y),lang:"json",placeholder:a(t)("page.jobTask.form.argsStr")},null,8,["modelValue","placeholder"]))],64)):_.rowData.executorInfo==="snailJobHttpExecutor"?(k(),I(j,{key:1,ref_key:"customformRef",ref:f,class:"w-full",model:N},{default:l(()=>[e(J,{label:"请求参数",rule:a(o),path:"url"},{default:l(()=>[e(r,null,{default:l(()=>[e(W,{value:N.method,"onUpdate:value":m[1]||(m[1]=y=>N.method=y),class:"http-method",options:ge},null,8,["value"]),e(h,{value:N.url,"onUpdate:value":m[2]||(m[2]=y=>N.url=y),placeholder:"请输入请求地址",class:"w-full"},null,8,["value"])]),_:1})]),_:1},8,["rule"]),e(J,{label:"Media Type"},{default:l(()=>[e(h,{value:N.mediaType,"onUpdate:value":m[3]||(m[3]=y=>N.mediaType=y),placeholder:"请输入 Media Type"},null,8,["value"])]),_:1}),m[14]||(m[14]=ie("div",{class:"n-form-item-label"},"Header 参数",-1)),e(i,{value:$.value,"onUpdate:value":m[6]||(m[6]=y=>$.value=y),class:Qe($.value.length?void 0:"mb-24px"),"item-style":"margin-bottom: 0;","on-create":()=>({key:"",value:""})},{default:l(({index:y})=>[ie("div",tl,[e(J,{"ignore-path-change":"","show-label":!1,path:`headers[${y}].key`,rule:{required:!0,message:"请输入键",trigger:["input","blur"],validator:()=>a(Oe)($.value[y].key)}},{default:l(()=>[e(h,{value:$.value[y].key,"onUpdate:value":S=>$.value[y].key=S,placeholder:"Key",onKeydown:m[4]||(m[4]=$e(Re(()=>{},["prevent"]),["enter"]))},null,8,["value","onUpdate:value"])]),_:2},1032,["path","rule"]),m[13]||(m[13]=ie("div",{class:"mx-8px h-34px text-center line-height-34px"},"=",-1)),e(J,{"ignore-path-change":"","show-label":!1,path:`headers[${y}].value`,rule:{required:!0,message:"请输入值",trigger:["input","blur"],validator:()=>a(Oe)($.value[y].value)}},{default:l(()=>[e(h,{value:$.value[y].value,"onUpdate:value":S=>$.value[y].value=S,placeholder:"Value",onKeydown:m[5]||(m[5]=$e(Re(()=>{},["prevent"]),["enter"]))},null,8,["value","onUpdate:value"])]),_:2},1032,["path","rule"])])]),_:1},8,["value","class"]),e(J,{label:"Body 参数"},{default:l(()=>[e(oe,{modelValue:N.body,"onUpdate:modelValue":m[7]||(m[7]=y=>N.body=y),lang:"json",placeholder:"请输入 Body 参数"},null,8,["modelValue"])]),_:1}),e(J,{label:"接口超时时间"},{default:l(()=>[e(r,null,{default:l(()=>[e(a(ae),{value:N.timeout,"onUpdate:value":m[8]||(m[8]=y=>N.timeout=y),class:"w-full",min:1,max:99999999,placeholder:a(t)("page.jobTask.form.executorTimeout"),clearable:""},null,8,["value","placeholder"]),e(p,null,{default:l(()=>[w(D(a(t)("common.second")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])):(k(),I(j,{key:2,ref_key:"customformRef",ref:f,class:"w-full",model:L},{default:l(()=>[e(J,{label:"脚本类型"},{default:l(()=>[e(W,{value:L.method,"onUpdate:value":m[9]||(m[9]=y=>L.method=y),options:K},null,8,["value"])]),_:1}),e(J,{label:"脚本参数"},{default:l(()=>[e(oe,{modelValue:L.scriptParams,"onUpdate:modelValue":m[10]||(m[10]=y=>L.scriptParams=y),lang:"json",placeholder:"请输入脚本参数"},null,8,["modelValue"])]),_:1}),e(J,{label:"编码格式"},{default:l(()=>[e(h,{value:L.charset,"onUpdate:value":m[11]||(m[11]=y=>L.charset=y),placeholder:"请输入编码格式"},null,8,["value"])]),_:1})]),_:1},8,["model"]))]}),_:1},8,["label","show-label","show-feedback","rule"])):Ue("",!0)]}),_:1},8,["model"])]),_:1},8,["show"])}}}),rl=ea(ol,[["__scopeId","data-v-95b44d53"]]),nl=q({name:"JobTaskSearch",__name:"job-task-search",props:{model:{required:!0},modelModifiers:{}},emits:Y(["reset","search"],["update:model"]),setup(U,{emit:x}){const u=x,v=ke(U,"model");function c(){u("reset")}function d(){u("search")}return(b,f)=>{const o=$a,g=Ve,B=re,$=na,N=sa;return k(),I(N,{"btn-span":"12 s:24 m:24 l:24 xl:24",model:v.value,onSearch:d,onReset:c},{default:l(()=>[e(o,{span:"24 s:12 m:6",label:a(t)("page.jobTask.groupName"),path:"groupName",class:"pr-24px"},{default:l(()=>[e(oa,{value:v.value.groupName,"onUpdate:value":f[0]||(f[0]=T=>v.value.groupName=T),clearable:""},null,8,["value"])]),_:1},8,["label"]),e(o,{span:"24 s:12 m:6",label:a(t)("page.jobTask.jobName"),path:"jobName",class:"pr-24px"},{default:l(()=>[e(g,{value:v.value.jobName,"onUpdate:value":f[1]||(f[1]=T=>v.value.jobName=T),placeholder:a(t)("page.jobTask.form.jobName"),clearable:""},null,8,["value","placeholder"])]),_:1},8,["label"]),e(o,{span:"24 s:12 m:6",label:a(t)("page.jobTask.executorInfo"),path:"executorInfo",class:"pr-24px","label-width":100},{default:l(()=>[e(g,{value:v.value.executorInfo,"onUpdate:value":f[2]||(f[2]=T=>v.value.executorInfo=T),placeholder:a(t)("page.jobTask.form.executorInfo"),clearable:""},null,8,["value","placeholder"])]),_:1},8,["label"]),e(o,{span:"24 s:12 m:6",label:a(t)("page.jobTask.jobStatus"),path:"jobStatus",class:"pr-24px"},{default:l(()=>[e(B,{value:v.value.jobStatus,"onUpdate:value":f[3]||(f[3]=T=>v.value.jobStatus=T),placeholder:a(t)("page.jobTask.form.jobStatus"),options:a(we)(a(We)),clearable:""},null,8,["value","placeholder","options"])]),_:1},8,["label"]),e(o,{span:"24 s:12 m:6",label:a(t)("page.jobTask.ownerName"),path:"ownerId",class:"pr-24px"},{default:l(()=>[e($,{value:v.value.ownerId,"onUpdate:value":f[4]||(f[4]=T=>v.value.ownerId=T),clearable:""},null,8,["value"])]),_:1},8,["label"])]),_:1},8,["model"])}}}),sl=q({name:"JobTaskDetailDrawer",__name:"job-task-detail-drawer",props:Y({rowData:{}},{visible:{type:Boolean,default:!1},visibleModifiers:{}}),emits:["update:visible"],setup(U){const x=ke(U,"visible");return(u,v)=>{const c=Ga,d=De,b=za,f=Fa;return k(),I(f,{modelValue:x.value,"onUpdate:modelValue":v[0]||(v[0]=o=>x.value=o),title:a(t)("page.jobTask.detail"),width:["50%","90%"]},{default:l(()=>[e(b,{"label-placement":"top",bordered:"",column:2},{default:l(()=>[e(c,{label:a(t)("page.jobTask.groupName")},{default:l(()=>{var o;return[w(D((o=u.rowData)==null?void 0:o.groupName),1)]}),_:1},8,["label"]),e(c,{label:a(t)("page.jobTask.jobName")},{default:l(()=>{var o;return[w(D((o=u.rowData)==null?void 0:o.jobName),1)]}),_:1},8,["label"]),e(c,{label:a(t)("page.jobTask.taskType")},{default:l(()=>{var o;return[e(d,{type:a(ye)((o=u.rowData)==null?void 0:o.taskType)},{default:l(()=>{var g;return[w(D(a(t)(a(aa)[(g=u.rowData)==null?void 0:g.taskType])),1)]}),_:1},8,["type"])]}),_:1},8,["label"]),e(c,{label:a(t)("page.jobTask.argsStr")},{default:l(()=>{var o;return[w(D((o=u.rowData)==null?void 0:o.argsStr),1)]}),_:1},8,["label"]),e(c,{label:a(t)("page.jobTask.nextTriggerAt")},{default:l(()=>{var o;return[w(D((o=u.rowData)==null?void 0:o.nextTriggerAt),1)]}),_:1},8,["label"]),e(c,{label:a(t)("page.jobTask.jobStatus")},{default:l(()=>{var o;return[e(d,{type:a(ye)((o=u.rowData)==null?void 0:o.jobStatus)},{default:l(()=>{var g;return[w(D(a(t)(a(ka)[(g=u.rowData)==null?void 0:g.jobStatus])),1)]}),_:1},8,["type"])]}),_:1},8,["label"]),e(c,{label:a(t)("page.jobTask.routeKey")},{default:l(()=>{var o;return[e(d,{type:a(ye)((o=u.rowData)==null?void 0:o.routeKey)},{default:l(()=>{var g;return[w(D(a(t)(a(ha)[(g=u.rowData)==null?void 0:g.routeKey])),1)]}),_:1},8,["type"])]}),_:1},8,["label"]),e(c,{label:a(t)("page.jobTask.executorType")},{default:l(()=>{var o;return[e(d,{type:a(ye)((o=u.rowData)==null?void 0:o.executorType)},{default:l(()=>{var g;return[w(D(a(t)(a(ja)[(g=u.rowData)==null?void 0:g.executorType])),1)]}),_:1},8,["type"])]}),_:1},8,["label"]),e(c,{label:a(t)("page.jobTask.executorInfo")},{default:l(()=>{var o;return[w(D((o=u.rowData)==null?void 0:o.executorInfo),1)]}),_:1},8,["label"]),e(c,{label:a(t)("page.jobTask.triggerType")},{default:l(()=>{var o;return[e(d,{type:a(ye)((o=u.rowData)==null?void 0:o.triggerType)},{default:l(()=>{var g;return[w(D(a(t)(a(la)[(g=u.rowData)==null?void 0:g.triggerType])),1)]}),_:1},8,["type"])]}),_:1},8,["label"]),e(c,{label:a(t)("page.jobTask.triggerInterval")},{default:l(()=>{var o;return[w(D((o=u.rowData)==null?void 0:o.triggerInterval),1)]}),_:1},8,["label"]),e(c,{label:a(t)("page.jobTask.blockStrategy")},{default:l(()=>{var o;return[e(d,{type:a(ye)((o=u.rowData)==null?void 0:o.blockStrategy)},{default:l(()=>{var g;return[w(D(a(t)(a(ta)[(g=u.rowData)==null?void 0:g.blockStrategy])),1)]}),_:1},8,["type"])]}),_:1},8,["label"]),e(c,{label:a(t)("page.jobTask.executorTimeout")},{default:l(()=>{var o;return[w(D((o=u.rowData)==null?void 0:o.executorTimeout),1)]}),_:1},8,["label"]),e(c,{label:a(t)("page.jobTask.maxRetryTimes")},{default:l(()=>{var o;return[w(D((o=u.rowData)==null?void 0:o.maxRetryTimes),1)]}),_:1},8,["label"]),e(c,{label:a(t)("page.jobTask.retryInterval")},{default:l(()=>{var o;return[w(D((o=u.rowData)==null?void 0:o.retryInterval),1)]}),_:1},8,["label"]),e(c,{label:a(t)("page.jobTask.parallelNum")},{default:l(()=>{var o;return[w(D((o=u.rowData)==null?void 0:o.parallelNum),1)]}),_:1},8,["label"]),e(c,{label:a(t)("page.jobTask.description"),span:2},{default:l(()=>{var o;return[w(D((o=u.rowData)==null?void 0:o.description),1)]}),_:1},8,["label"])]),_:1})]),_:1},8,["modelValue","title"])}}}),ul={class:"min-h-500px flex-col-stretch gap-16px overflow-hidden lt-sm:overflow-auto"};function Te(U){return typeof U=="function"||Object.prototype.toString.call(U)==="[object Object]"&&!Na(U)}const Il=q({name:"job_task",__name:"index",setup(U){const{hasAuth:x}=Ca(),u=Ge(),{routerPushByKey:v}=Sa(),c=P(),{bool:d,setTrue:b}=Be(!1),f=P(),{bool:o,setTrue:g}=Be(!1),{columnChecks:B,columns:$,data:N,getData:T,loading:ne,mobilePagination:L,searchParams:n,resetSearchParams:me}=Ra({apiFn:Ua,apiParams:{page:1,size:10,groupName:null,jobName:null,jobStatus:null,ownerId:null,executorInfo:null},columns:()=>[{type:"selection",align:"center",width:48},{key:"id",title:t("common.index"),align:"center",width:48},{key:"jobName",title:t("page.jobTask.jobName"),align:"center",width:140,fixed:"left",render:i=>{async function p(){c.value=i,b()}return e(le,{text:!0,tag:"a",type:"primary",onClick:p,class:"ws-normal"},{default:()=>[`${i.jobName}`]})}},{key:"groupName",title:t("page.jobTask.groupName"),align:"left",width:150},{key:"executorInfo",title:t("page.jobTask.executorInfo"),align:"left",width:120},{key:"ownerName",title:t("page.jobTask.ownerName"),align:"left",width:120},{key:"nextTriggerAt",title:t("page.jobTask.nextTriggerAt"),align:"center",width:120},{key:"jobStatus",title:t("page.jobTask.jobStatus"),align:"center",width:60,render:i=>{const p=async(j,M)=>{var V;const{error:H}=await Oa({id:i.id,jobStatus:j});H||(i.jobStatus=j,(V=window.$message)==null||V.success(t("common.updateSuccess"))),M(!H)};return e(Ja,{value:i.jobStatus,"onUpdate:value":j=>i.jobStatus=j,onSubmitted:p},null)}},{key:"taskType",title:t("page.jobTask.taskType"),align:"center",width:120,render:i=>{if(i.taskType===null)return null;const p={1:"info",2:"success",3:"error",4:"primary",5:"warning"},j=t(aa[i.taskType]);return e(De,{type:p[i.taskType]},Te(j)?j:{default:()=>[j]})}},{key:"triggerType",title:t("page.jobTask.triggerType"),align:"center",width:120,render:i=>{if(i.triggerType===null)return null;const p={2:"info",3:"success",99:"error"},j=t(la[i.triggerType]);return e(De,{type:p[i.triggerType]},Te(j)?j:{default:()=>[j]})}},{key:"triggerInterval",title:t("page.jobTask.triggerInterval"),align:"center",width:80},{key:"blockStrategy",title:t("page.jobTask.blockStrategy"),align:"center",width:80,render:i=>{if(i.blockStrategy===null)return null;const p={1:"info",2:"success",3:"error",4:"warning"},j=t(ta[i.blockStrategy]);return e(De,{type:p[i.blockStrategy]},Te(j)?j:{default:()=>[j]})}},{key:"executorTimeout",title:t("page.jobTask.executorTimeout"),align:"center",width:80},{key:"updateDt",title:t("page.jobTask.updateDt"),align:"center",width:120},{key:"operate",title:t("common.operate"),align:"center",width:120,fixed:"right",render:i=>{let p,j;const M=[{label:t("common.copy"),key:"copy",click:()=>X(i.id)},{type:"divider",key:"d2"},{label:t("common.batchList"),key:"batchList",click:()=>W(i.id)},{type:"divider",key:"d2"},{type:"render",key:"delete",render:()=>e("div",{class:"flex-center"},[e(Ae,{onPositiveClick:()=>m(i.id)},{default:()=>t("common.confirmDelete"),trigger:()=>{let V;return e(le,{quaternary:!0,size:"small"},Te(V=t("common.delete"))?V:{default:()=>[V]})}})])}],H=V=>{const A=M.filter(y=>y.key===V)[0].click;A&&A()};return e("div",{class:"flex-center gap-8px"},[e(le,{text:!0,type:"warning",ghost:!0,size:"small",onClick:()=>J(i.id)},Te(p=t("common.edit"))?p:{default:()=>[p]}),e(Le,{vertical:!0},null),e(le,{type:"error",text:!0,ghost:!0,size:"small",onClick:()=>ee(i)},Te(j=t("common.execute"))?j:{default:()=>[j]}),e(Le,{vertical:!0},null),e(wa,{trigger:"click","show-arrow":!1,options:M,size:"small","on-select":H},{default:()=>e(le,{text:!0,type:"primary",ghost:!0,size:"small"},{default:()=>[w("更多")]})})])}}]}),{drawerVisible:Z,operateType:E,editingData:O,handleAdd:ce,handleEdit:ge,handleCopy:K,checkedRowKeys:C,onDeleted:he,onBatchDeleted:_}=Va(N,T);async function m(i){const{error:p}=await Ke([i]);p||he()}async function R(){const{error:i}=await Ke(C.value);i||_()}function z(){O.value=null,ce()}function J(i){ge(i)}function X(i){K(i)}async function ee(i){f.value=i,g()}function W(i){const p=N.value.find(j=>j.id===i);v("job_batch",{state:{jobId:i,jobName:p.jobName}})}function h(){return{jobIds:C.value,groupName:n.groupName,jobName:n.jobName,jobStatus:n.jobStatus,ownerId:n.ownerId}}function r(){pa("/job/export",h(),t("page.jobTask.title"))}return(i,p)=>{const j=ma,M=ia,H=da,V=ua,A=Ha,y=Pe;return k(),de("div",ul,[e(nl,{model:a(n),"onUpdate:model":p[0]||(p[0]=S=>_e(n)?n.value=S:null),onReset:a(me),onSearch:a(T)},null,8,["model","onReset","onSearch"]),e(j),e(y,{title:a(t)("page.jobTask.title"),bordered:!1,size:"small",class:"sm:flex-1-hidden card-wrapper","header-class":"view-card-header"},{"header-extra":l(()=>[e(V,{columns:a(B),"onUpdate:columns":p[1]||(p[1]=S=>_e(B)?B.value=S:null),loading:a(ne),"disabled-delete":a(C).length===0,"show-delete":a(x)("R_ADMIN"),onAdd:z,onDelete:R,onRefresh:a(T)},{addAfter:l(()=>[e(M,{action:"/job/import",accept:"application/json",onRefresh:a(T)},null,8,["onRefresh"]),e(a(Ae),{onPositiveClick:r},{trigger:l(()=>[e(a(le),{size:"small",ghost:"",type:"primary",disabled:a(C).length===0&&a(x)("R_USER")},{icon:l(()=>[e(H,{class:"text-icon"})]),default:l(()=>[w(" "+D(a(t)("common.export")),1)]),_:1},8,["disabled"])]),default:l(()=>[w(D(a(C).length===0?a(t)("common.exportAll"):a(t)("common.exportPar",{num:a(C).length})),1)]),_:1})]),_:1},8,["columns","loading","disabled-delete","show-delete","onRefresh"])]),default:l(()=>[e(A,{"checked-row-keys":a(C),"onUpdate:checkedRowKeys":p[2]||(p[2]=S=>_e(C)?C.value=S:null),columns:a($),data:a(N),"flex-height":!a(u).isMobile,"scroll-x":2e3,loading:a(ne),remote:"","row-key":S=>S.id,pagination:a(L),class:"sm:h-full"},null,8,["checked-row-keys","columns","data","flex-height","loading","row-key","pagination"])]),_:1},8,["title"]),e(ll,{visible:a(Z),"onUpdate:visible":p[3]||(p[3]=S=>_e(Z)?Z.value=S:null),"operate-type":a(E),"row-data":a(O),onSubmitted:a(T)},null,8,["visible","operate-type","row-data","onSubmitted"]),e(sl,{visible:a(d),"onUpdate:visible":p[4]||(p[4]=S=>_e(d)?d.value=S:null),"row-data":c.value},null,8,["visible","row-data"]),e(rl,{visible:a(o),"onUpdate:visible":p[5]||(p[5]=S=>_e(o)?o.value=S:null),"row-data":f.value},null,8,["visible","row-data"])])}}});export{Il as default};
