import{a as L,o as y,f as V,g as s,a8 as Y,n as Z,C as M,A as D,r as b,v as f,at as F,K as x,I as P,J as o,t,j as e,h as S,L as u,N as G,s as j,O as T,e as ee,F as I,B as U,$ as W,k as q}from"./app-CsfJRy1X.js";import{E as J}from"./index-DJrvLrA_.js";import{E as oe,a as te}from"./index-BvFZlPHl.js";import{E as ne}from"./index-CFkyrkQx.js";import"./index-Mol43tTP.js";import"./index-DnpkziWr.js";import"./isEqual-D5tWelSt.js";import"./index-CiRCcsf_.js";import"./_baseFindIndex-D7XfJLKM.js";import"./_baseIteratee-B1xu3wc6.js";import"./castArray-lI4ar-YN.js";const se={class:"card"},le=L({__name:"Card",props:{full:Boolean},setup(O){return(r,d)=>(y(),V("div",{class:Z(["card-container",{"card-container-full":O.full}])},[s("div",se,[Y(r.$slots,"default",{},void 0,!0)])],2))}}),Q=M(le,[["__scopeId","data-v-798fd364"]]),ie={style:{"min-width":"300px"}},ae={style:{"font-size":"16px","font-weight":"700","padding-bottom":"0","padding-top":"8px"}},re={class:"mt-4 mb-2"},ce={class:"mr-2"},ue={class:"mt-4 mb-2"},de={class:"mr-2"},pe={class:"text-right mt-2"},me={class:"mt-4 mb-2"},ve={class:"mr-2"},fe={class:"text-right mt-2"},ge=L({__name:"ConnectionConfig",setup(O){const r=D(),d=b(!1),p=b(!1);f.on("importConfirm",()=>{d.value=!0}).on("importWorkspaceConfirm",()=>{p.value=!0}).on("importResult",({success:l,message:n,cancel:w})=>{if(d.value=!1,p.value=!1,w)return;F({duration:l?1e3:2e3,message:n,type:l?"success":"error"})});const $=l=>{f.emit("editConfig",l)},c=l=>{f.emit("exportConfig",{workspace:l===!0,withQueryFiles:r.uiState.consoleOption.exportWithQueryFiles})},v=(l={})=>{f.emit("importConfig",l)};return(l,n)=>{const w=x("vsc-switch"),m=x("vsc-button"),E=J,z=x("pay-badge");return y(),P(Q,{class:"!mb-3"},{default:o(()=>[s("div",ie,[s("div",ae,t(l.$t("console.configuration")),1),s("section",re,[s("span",ce,t(l.$t("console.exportWithQueryFiles"))+":",1),e(w,{modelValue:S(r).uiState.consoleOption.exportWithQueryFiles,"onUpdate:modelValue":n[0]||(n[0]=g=>S(r).uiState.consoleOption.exportWithQueryFiles=g),onChange:n[1]||(n[1]=g=>S(r).upState("consoleOption"))},null,8,["modelValue"])]),s("section",ue,[e(z,{left:0},{default:o(()=>[s("span",de,t(l.$t("connect.current"))+":",1),e(m,{type:"secondary",icon:"codicon-edit",disabled:!S(r).isPay,size:"mini",onClick:n[2]||(n[2]=g=>$(!0))},null,8,["disabled"]),e(m,{icon:"codicon-arrow-down",disabled:!S(r).isPay,size:"mini",onClick:n[3]||(n[3]=g=>c(!0))},null,8,["disabled"]),e(E,{placement:"top",visible:p.value,trigger:"manual",class:"ml-7px"},{reference:o(()=>[e(m,{icon:"codicon-arrow-up",disabled:!S(r).isPay,size:"mini",onClick:n[7]||(n[7]=g=>v({workspace:!0}))},null,8,["disabled"])]),default:o(()=>[s("p",null,t(l.$t("console.mergeConfirm")),1),s("div",pe,[e(m,{type:"secondary",size:"mini",onClick:n[4]||(n[4]=g=>p.value=!1)},{default:o(()=>[u(t(l.$t("common.cancel")),1)]),_:1}),e(m,{onClick:n[5]||(n[5]=g=>v({type:"merge",workspace:!0}))},{default:o(()=>[u(t(l.$t("console.merge")),1)]),_:1}),e(m,{onClick:n[6]||(n[6]=g=>v({type:"overwrite",workspace:!0}))},{default:o(()=>[u(t(l.$t("console.overwrite")),1)]),_:1})])]),_:1},8,["visible"])]),_:1})]),s("section",me,[s("span",ve,t(l.$t("connect.global"))+":",1),e(m,{type:"secondary",icon:"codicon-edit",size:"mini",onClick:$},{default:o(()=>[u(t(l.$t("console.edit")),1)]),_:1}),e(m,{icon:"codicon-arrow-down",size:"mini",onClick:c},{default:o(()=>[u(t(l.$t("console.export")),1)]),_:1}),e(E,{placement:"top",visible:d.value,trigger:"manual",class:"ml-7px"},{reference:o(()=>[e(m,{icon:"codicon-arrow-up",size:"mini",onClick:n[11]||(n[11]=g=>v())},{default:o(()=>[u(t(l.$t("console.import")),1)]),_:1})]),default:o(()=>[s("p",null,t(l.$t("console.mergeConfirm")),1),s("div",fe,[e(m,{type:"secondary",onClick:n[8]||(n[8]=g=>d.value=!1)},{default:o(()=>[u(t(l.$t("common.cancel")),1)]),_:1}),e(m,{onClick:n[9]||(n[9]=g=>v({type:"merge"}))},{default:o(()=>[u(t(l.$t("console.merge")),1)]),_:1}),e(m,{onClick:n[10]||(n[10]=g=>v({type:"overwrite"}))},{default:o(()=>[u(t(l.$t("console.overwrite")),1)]),_:1})])]),_:1},8,["visible"])])])]),_:1})}}}),_e={style:{"font-size":"16px","font-weight":"700","padding-bottom":"0","padding-top":"8px"}},ye=s("i",{class:"el-icon-document"},null,-1),Ce={class:"my-2"},$e={class:"mr-2"},be={style:{"margin-top":"5px","margin-bottom":"10px"}},ke={style:{"text-align":"right",margin:"0"}},he={style:{"margin-top":"5px","margin-bottom":"10px"}},we={style:{"text-align":"right",margin:"0"}},Se={style:{"margin-top":"5px","margin-bottom":"10px"}},ze={style:{"text-align":"right",margin:"0"}},Oe={style:{"margin-top":"20px"}},Ve=L({__name:"CloudSync",setup(O){const r=D(),d=b(!1),p=b(!1),$=b(!1),c=b(!1),v=b(null),l=b(!1),n=b(!1),w=b(!1),m=b(!1);G(()=>{d.value=r.config.autoSync,f.on("downloadConfirm",()=>{w.value=!1,c.value=!0}).on("downloadResult",({success:i,message:a})=>{w.value=!1,F({duration:i?1e3:3e3,message:a,type:i?"success":"error"})}).on("uploadRes",({success:i,message:a})=>{l.value=!1,F({duration:i?1e3:3e3,message:a,type:i?"success":"error"})}).on("removeRes",({success:i,message:a})=>{n.value=!1,F({duration:i?1e3:3e3,message:a,type:i?"success":"error"})}).on("syncKey",i=>{(!v.value||m.value)&&(v.value=i,m.value=!1)})});const E=()=>{f.emit("updateOption",{name:"autoSync",value:d.value})},z=()=>{f.emit("open","https://github.com/cweijan/vscode-database-client/wiki/About-Cloud-Sync")},g=()=>{m.value=!0,f.emit("chooseSyncKey")},C=()=>{if(!r.isPay){j("Free account not support upload configuration!");return}p.value=!1,l.value=!0,f.emit("uploadConfig",v.value)},K=()=>{$.value=!1,n.value=!0,f.emit("removeConfig")},k=i=>{if(!r.isPay){j("Free account not support sync data!");return}c.value=!1,w.value=!0,f.emit("downloadConfig",{keyPath:v.value,type:i})},H=i=>{if(!r.user){j("Please log in to your account first."),i.stopPropagation();return}};return(i,a)=>{const _=x("vsc-button"),A=x("vsc-switch"),N=J,X=T;return y(),P(Q,{class:"!mb-3"},{default:o(()=>[s("div",null,[s("div",_e,[u(t(i.$t("console.sync"))+" ",1),e(_,{type:"icon",onClick:z},{default:o(()=>[ye]),_:1})]),s("div",Ce,[s("label",$e,t(i.$t("console.autoSync")),1),e(A,{modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=h=>d.value=h),onChange:E},null,8,["modelValue"])]),s("div",{onClickCapture:H},[e(N,{placement:"top",visible:$.value,trigger:"manual"},{reference:o(()=>[e(_,{type:"secondary",size:"mini",icon:"codicon-trash",loading:n.value,onClick:a[2]||(a[2]=h=>$.value=!0)},{default:o(()=>[u(t(i.$t("console.remove")),1)]),_:1},8,["loading"])]),default:o(()=>[s("p",be,t(i.$t("console.removeConfirm")),1),s("div",ke,[e(_,{type:"secondary",size:"mini",onClick:a[1]||(a[1]=h=>$.value=!1)},{default:o(()=>[u(t(i.$t("common.cancel")),1)]),_:1}),e(_,{size:"mini",onClick:K},{default:o(()=>[u(t(i.$t("result.confirm")),1)]),_:1})])]),_:1},8,["visible"]),e(N,{placement:"top",visible:p.value,trigger:"manual",class:"ml-7px"},{reference:o(()=>[e(_,{icon:"codicon-cloud-upload",size:"mini",loading:l.value,onClick:a[4]||(a[4]=h=>p.value=!0)},{default:o(()=>[u(t(i.$t("console.upload")),1)]),_:1},8,["loading"])]),default:o(()=>[s("p",he,t(i.$t("console.uploadConfirm")),1),s("div",we,[e(_,{type:"secondary",onClick:a[3]||(a[3]=h=>p.value=!1)},{default:o(()=>[u(t(i.$t("common.cancel")),1)]),_:1}),e(_,{onClick:C},{default:o(()=>[u(t(i.$t("result.confirm")),1)]),_:1})])]),_:1},8,["visible"]),e(N,{placement:"top",visible:c.value,trigger:"manual",class:"ml-7px"},{reference:o(()=>[e(_,{icon:"codicon-cloud-download",size:"mini",loading:w.value,onClick:a[8]||(a[8]=h=>k())},{default:o(()=>[u(t(i.$t("console.download")),1)]),_:1},8,["loading"])]),default:o(()=>[s("p",Se,t(i.$t("console.mergeConfirm")),1),s("div",ze,[e(_,{type:"secondary",onClick:a[5]||(a[5]=h=>c.value=!1)},{default:o(()=>[u(t(i.$t("common.cancel")),1)]),_:1}),e(_,{onClick:a[6]||(a[6]=h=>k("merge"))},{default:o(()=>[u(t(i.$t("console.merge")),1)]),_:1}),e(_,{onClick:a[7]||(a[7]=h=>k("overwrite"))},{default:o(()=>[u(t(i.$t("console.overwrite")),1)]),_:1})])]),_:1},8,["visible"]),s("div",Oe,[e(X,{modelValue:v.value,"onUpdate:modelValue":a[9]||(a[9]=h=>v.value=h),size:"small",class:"!w-56",placeholder:"Sync Encryption Key(Optional)"},null,8,["modelValue"]),e(_,{icon:"codicon-file",size:"mini",class:"!ml-1 relative",style:{top:"3px"},onClick:g})])],32)])]),_:1})}}}),xe={style:{"font-size":"16px","font-weight":"700","padding-bottom":"0","padding-top":"8px"}},Ee={class:"mt-3 mb-1"},Pe=L({__name:"OtherOptions",setup(O){b(!1);const r=()=>{f.emit("clearCache")},d=()=>{f.emit("open","https://github.com/cweijan/vscode-database-client/issues")};return(p,$)=>{const c=x("vsc-button");return y(),P(Q,null,{default:o(()=>[s("div",null,[s("div",xe,t(p.$t("console.other")),1),s("div",Ee,[e(c,{icon:"codicon-github-inverted",size:"mini",onClick:d},{default:o(()=>[u(t(p.$t("toolbar.reportIssue")),1)]),_:1}),e(c,{icon:"codicon-clear-all",size:"mini",onClick:r},{default:o(()=>[u(t(p.$t("toolbar.clearCache")),1)]),_:1})])])]),_:1})}}}),Fe=L({__name:"ConsoleSide",setup(O){return(r,d)=>(y(),V("div",null,[e(ge),e(Ve),e(Pe)]))}}),Le={editor:["enableSQLVariable","enableEditorCodeLens","highlightSQLBlock","bindConnectionByActiveMark"],result:["openResultsAsVertically","splitEditorWhenQuery","autoGetTableCount"],treeView:["showUser","saveConnectionExpandedState"],sql:["escapedAllObjectName","capitalizeKeywordsWhenFormatting","autoPagingSQL","queryWithSchema"]};function B(O,r){const d=Le[O];return r.filter(p=>d.includes(p.name)).sort((p,$)=>d.indexOf(p.name)-d.indexOf($.name))}const R={escapedAllObjectName:[{value:"auto",label:"Auto"},{value:"never",label:"Never"},{value:"always",label:"Always"}]},We={class:"flex flex-wrap justify-center console-container"},Ae={class:"option-container"},Be={class:"option-title"},Qe={class:"option-list"},Ke={key:0},Ne=L({__name:"console",setup(O){const r=b([]),d=ee(()=>[{title:W("console.editorOptions"),options:B("editor",r.value),tag:"dbclient-editor"},{title:W("console.sqlOptions"),options:B("sql",r.value),tag:"dbclient-sql-parser"},{title:W("console.treeOptions"),options:B("treeView",r.value)},{title:W("console.resultOptions"),options:B("result",r.value)}]);G(async()=>{f.emit("options").on("options",({options:c})=>{r.value=c}).on("configSuccess",c=>{F({message:c,type:"success"})}).on("resetSuccess",c=>{F({message:c,type:"success"}),f.emit("options")}).init()});const p=c=>{f.emit("resetOption",c)},$=c=>{let v=c.value;c.type=="boolean"&&(v=!c.value,c.value=v),f.emit("updateOption",{...c,value:v})};return(c,v)=>{const l=x("vsc-button"),n=x("vsc-tooltip"),w=oe,m=te,E=ne;return y(),V("div",We,[e(Fe),s("div",Ae,[(y(!0),V(I,null,U(d.value,(z,g)=>(y(),P(Q,{key:g,style:{"max-width":"350px","min-width":"300px"}},{default:o(()=>[s("div",Be,t(z.title),1),e(n,{title:S(W)("console.resetConfig")},{default:o(()=>[e(l,{icon:"codicon-discard",size:"micro",onClick:C=>p(z.options)},null,8,["onClick"])]),_:2},1032,["title"]),z.tag?(y(),P(n,{key:0,title:"Show More Settings"},{default:o(()=>[e(l,{icon:"codicon-ellipsis",size:"micro",onClick:C=>S(f).emit("openMoreSettings",z.tag)},null,8,["onClick"])]),_:2},1024)):q("",!0),s("div",Qe,[(y(!0),V(I,null,U(z.options,(C,K)=>(y(),V("div",{key:K,class:"option-item"},[S(R)[C.name]?(y(),V("div",Ke,[u(t(C.description)+" ",1),e(m,{modelValue:C.value,"onUpdate:modelValue":k=>C.value=k,class:"w-28",size:"small",onChange:k=>$(C)},{default:o(()=>[(y(!0),V(I,null,U(S(R)[C.name],k=>(y(),P(w,{key:k.value,value:k.value,label:k.label},null,8,["value","label"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])])):C.type=="boolean"?(y(),P(E,{key:1,"model-value":C.value,onChange:k=>$(C)},{default:o(()=>[u(t(C.description),1)]),_:2},1032,["model-value","onChange"])):q("",!0)]))),128))])]),_:2},1024))),128))])])}}}),Ye=M(Ne,[["__scopeId","data-v-286d178f"]]);export{Ye as default};