import{aT as o,d5 as r}from"./index-Dlhm-fK8.js";function n(t){return o({url:"/workflow/page/list",method:"get",params:t})}function l(t){return o({url:"/workflow/trigger",method:"post",data:t})}function u(t){return o({url:"/workflow/workflow-name/list",method:"get",params:t})}function c(t){return o({url:"/workflow/batch/page/list",method:"get",params:t})}function h(t){return o({url:`/workflow/update/status/${t}`,method:"put"})}function a(t){return o({url:"/workflow/ids",method:"delete",data:t})}function w(t){return o({url:`/workflow/batch/stop/${t}`,method:"post"})}function s(t,e){return o({url:`/workflow/node/retry/${e}/${t}`,method:"post"})}function d(t){return o({url:"/workflow/check-node-expression",method:"post",data:{...t,checkContent:JSON.stringify(r(t.checkContents))}})}function k(t){return o({url:"/workflow",method:"post",data:t})}function i(t){return o({url:"/workflow",method:"put",data:t})}function m(t){return o({url:`/workflow/${t}`,method:"get"})}function p(t){return o({url:`/workflow/batch/${t}`,method:"get"})}function g(t,e){return o({url:`/workflow/node/retry/${t}/${e}`,method:"post"})}function W(t,e){return o({url:`/workflow/node/stop/${t}/${e}`,method:"post"})}function $(t){return o({url:"/workflow/batch/ids",method:"delete",data:[t]})}function B(t){return o({url:"/workflow/batch/ids",method:"delete",data:t})}export{c as a,$ as b,w as c,B as d,k as e,u as f,p as g,m as h,i,s as j,g as k,W as l,d as m,l as n,n as o,a as p,h as q};
