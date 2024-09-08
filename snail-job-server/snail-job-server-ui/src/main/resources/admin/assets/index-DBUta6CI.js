import{d as E,L as v,a as I,r as T,K as h,o as k,c as V,w as s,f as o,e as n,h as e,$ as t,t as a,g as c,F as S,Y as O,H as j}from"./index-FUIa4-vU.js";import{_ as y,a as R}from"./DescriptionsItem-C7R9mygj.js";const C="snail-job",N="module",w="1.2.0",D="A flexible, reliable, and fast platform for distributed task retry and distributed task scheduling.",L="Apache-2.0",A="https://gitee.com/aizuda/snail-job",P={githubUrl:"https://github.com/aizuda/snail-job.git",giteeUrl:"https://gitee.com/aizuda/snail-job.git"},U={url:"https://gitee.com/aizuda/snail-job/issues"},x=["Job","Retry","Snail Job","Vue3 admin ","vue-admin-template","Vite5","TypeScript","naive-ui","naive-ui-admin","ant-design-vue v4","UnoCSS"],z={node:">=18.12.0",pnpm:">=8.7.0"},M={build:"vite build --mode prod","build:test":"vite build --mode test",cleanup:"sa cleanup",commit:"sa git-commit","commit:zh":"sa git-commit -l=zh-cn",dev:"vite --mode test","dev:prod":"vite --mode prod","gen-route":"sa gen-route",lint:"eslint . --fix",prepare:"simple-git-hooks",preview:"vite preview",release:"sa release",typecheck:"vue-tsc --noEmit --skipLibCheck","update-pkg":"sa update-pkg"},B={"@better-scroll/core":"2.5.1","@codemirror/lang-javascript":"^6.2.2","@codemirror/lang-json":"^6.0.1","@codemirror/theme-one-dark":"^6.1.2","@iconify/vue":"4.1.2","@sa/axios":"workspace:*","@sa/color":"workspace:*","@sa/cron-input":"workspace:*","@sa/hooks":"workspace:*","@sa/materials":"workspace:*","@sa/utils":"workspace:*","@vueuse/core":"11.0.1",clipboard:"2.0.11",dayjs:"1.11.12",echarts:"5.5.1","highlight.js":"^11.10.0","naive-ui":"2.39.0",nprogress:"0.2.0",pinia:"2.2.2","tailwind-merge":"2.5.2","ts-md5":"1.3.1",vue:"3.4.38","vue-codemirror6":"^1.3.4","vue-drag-resize":"^1.5.4","vue-draggable-plus":"0.5.3","vue-i18n":"9.14.0","vue-router":"4.4.3","vue3-puzzle-vcode":"^1.1.7"},F={"@elegant-router/vue":"0.3.8","@iconify/json":"2.2.238","@sa/scripts":"workspace:*","@sa/uno-preset":"workspace:*","@soybeanjs/eslint-config":"1.4.0","@types/node":"22.4.1","@types/nprogress":"0.2.3","@unocss/eslint-config":"0.62.2","@unocss/preset-icons":"0.62.2","@unocss/preset-uno":"0.62.2","@unocss/transformer-directives":"0.62.2","@unocss/transformer-variant-group":"0.62.2","@unocss/vite":"0.62.2","@vitejs/plugin-vue":"5.1.2","@vitejs/plugin-vue-jsx":"4.0.1",eslint:"9.9.0","eslint-plugin-vue":"9.27.0",json5:"2.2.3","lint-staged":"15.2.9",sass:"1.77.8","simple-git-hooks":"2.11.1",tsx:"4.17.0",typescript:"5.5.4","unplugin-icons":"0.19.2","unplugin-vue-components":"0.27.4",vite:"5.4.1","vite-plugin-progress":"0.0.7","vite-plugin-svg-icons":"2.0.1","vite-plugin-vue-devtools":"7.3.8","vue-eslint-parser":"9.4.3","vue-tsc":"2.0.29"},H="https://snailjob.opensnail.com",W="https://snailjob.opensnail.com/docs/preview.html",r={name:C,type:N,version:w,description:D,license:L,homepage:A,repository:P,bugs:U,keywords:x,engines:z,scripts:M,dependencies:B,devDependencies:F,"simple-git-hooks":{"commit-msg":"pnpm sa git-commit-verify","pre-commit":"pnpm typecheck && pnpm lint-staged"},"lint-staged":{"*":"eslint --fix"},officialWebsite:H,website:W},Y={BASE_URL:"/snail-job",DEV:!1,MODE:"prod",PROD:!0,SSR:!1,VITE_APP_DEFAULT_TOKEN:"SJ_Wyz3dmsdbDOkDujOTSSoBjGQP1BMsVnj",VITE_APP_DESC:"A flexible, reliable, and fast platform for distributed task retry and distributed task scheduling.",VITE_APP_TITLE:"Snail Job",VITE_APP_VERSION:"1.2.0-beta1",VITE_AUTH_ROUTE_MODE:"static",VITE_BASE_URL:"/snail-job",VITE_HTTP_PROXY:"Y",VITE_ICONIFY_URL:"/snail-job/iconify",VITE_ICON_LOCAL_PREFIX:"icon-local",VITE_ICON_PREFIX:"icon",VITE_LOGIN_CODE:"N",VITE_MENU_ICON:"mdi:menu",VITE_ROUTER_HISTORY_MODE:"hash",VITE_ROUTE_HOME:"home",VITE_SERVICE_BASE_URL:"/snail-job",VITE_SERVICE_EXPIRED_TOKEN_CODES:"9999,9998",VITE_SERVICE_LOGOUT_CODES:"8888,8889",VITE_SERVICE_MODAL_LOGOUT_CODES:"5001",VITE_SERVICE_SUCCESS_CODE:"1",VITE_SOURCE_MAP:"N",VITE_STATIC_SUPER_ROLE:"R_ADMIN",VITE_STORAGE_PREFIX:"",VITE_UPDATE_NOTIFY:"N"},G=["innerHTML"],X=["href"],J=["href"],K=["href"],$=["href"],se=E({name:"about",__name:"index",setup(Q){const u=v(),_=I(()=>u.isMobile?1:2),{VITE_APP_VERSION:d}=Y,m=T(`${h.get("version")||d}`),g="2024-09-08 08:51:28";return(q,Z)=>{const l=S,i=y,p=O,b=R,f=j;return k(),V(f,{vertical:"",size:16},{default:s(()=>[o(l,{title:e(t)("page.about.title"),bordered:!1,size:"small",segmented:"",class:"card-wrapper"},{default:s(()=>[n("p",{innerHTML:e(t)("page.about.introduction")},null,8,G)]),_:1},8,["title"]),o(l,{title:e(t)("page.about.projectInfo.title"),bordered:!1,size:"small",segmented:"",class:"card-wrapper"},{default:s(()=>[o(b,{"label-placement":"left",bordered:"",size:"small",column:_.value},{default:s(()=>[o(i,{label:e(t)("page.about.projectInfo.officialWebsite")},{default:s(()=>[n("a",{class:"text-primary",href:e(r).officialWebsite,target:"_blank",rel:"noopener noreferrer"},a(e(t)("page.about.projectInfo.officialWebsite")),9,X)]),_:1},8,["label"]),o(i,{label:e(t)("page.about.projectInfo.version")},{default:s(()=>[o(p,{type:"primary"},{default:s(()=>[c(a(m.value),1)]),_:1})]),_:1},8,["label"]),o(i,{label:e(t)("page.about.projectInfo.githubLink")},{default:s(()=>[n("a",{class:"text-primary",href:e(r).repository.githubUrl,target:"_blank",rel:"noopener noreferrer"},a(e(t)("page.about.projectInfo.githubLink")),9,J)]),_:1},8,["label"]),o(i,{label:e(t)("page.about.projectInfo.giteeLink")},{default:s(()=>[n("a",{class:"text-primary",href:e(r).repository.giteeUrl,target:"_blank",rel:"noopener noreferrer"},a(e(t)("page.about.projectInfo.giteeLink")),9,K)]),_:1},8,["label"]),o(i,{label:e(t)("page.about.projectInfo.previewLink")},{default:s(()=>[n("a",{class:"text-primary",href:e(r).website,target:"_blank",rel:"noopener noreferrer"},a(e(t)("page.about.projectInfo.previewLink")),9,$)]),_:1},8,["label"]),o(i,{label:e(t)("page.about.projectInfo.latestBuildTime")},{default:s(()=>[o(p,{type:"primary"},{default:s(()=>[c(a(e(g)),1)]),_:1})]),_:1},8,["label"])]),_:1},8,["column"])]),_:1},8,["title"])]),_:1})}}});export{se as default};
