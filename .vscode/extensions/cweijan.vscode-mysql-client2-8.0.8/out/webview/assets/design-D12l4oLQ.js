import{q as Et,a as ce,r as P,D as Re,G as ae,e as H,N as me,v as w,K as k,o as _,f as g,g as M,j as s,J as u,h as E,I as f,k as h,$ as T,a9 as W,L as y,t as U,ab as ne,F as Z,B as oe,w as De,S as it,au as Ke,O as Le,U as Oe,s as we,P as ut,Q as ct,C as je,R as Qe,n as Ye}from"./app-CsfJRy1X.js";import"./constants-DgoLmzql.js";import{D as R,a as mt}from"./DatabaseType-C0wmHgR0.js";import{b as Be}from"./viewUtil-DCbZMcCo.js";import{c as Ce}from"./codemirror-C4el0T79.js";import{E as be,a as Me}from"./index-IXPW6-XP.js";import{E as Xe}from"./index-CFkyrkQx.js";import{E as ve,a as Fe}from"./index-BvFZlPHl.js";import{E as Ie,a as $e}from"./index-C2YL1HbR.js";import{E as he}from"./index-uNi-6DtK.js";import{v as Se}from"./directive-CbjjNe4r.js";import{A as We}from"./arrayUtil-CzswX_vs.js";import{E as Tt}from"./index-DJrvLrA_.js";import{S as Y}from"./stringBuilder-DUZQE8vS.js";import{g as le,c as Q,a as _t,i as dt,b as ue,E as At}from"./wrapper-D1SE_yvb.js";import{l as Nt}from"./common_view_utils-D33m4OG4.js";import"./index-Mol43tTP.js";import"./_baseIteratee-B1xu3wc6.js";import"./isEqual-D5tWelSt.js";import"./merge-XvLx2pLN.js";import"./_initCloneObject-C9-7aIdS.js";import"./isArrayLikeObject-TyuahpZ8.js";import"./index-DnpkziWr.js";import"./index-CiRCcsf_.js";import"./_baseFindIndex-D7XfJLKM.js";import"./castArray-lI4ar-YN.js";import"./clone-03YpQdki.js";import"./_baseClone-DbkstWix.js";import"./objectUtil-Z6JRxuBJ.js";const Te=Et("design",{state:()=>({schema:"",table:"",columns:[],tableMeta:{},dbType:R.MYSQL,dialect:null,remainHeight:0,activePanel:"column"}),getters:{canAlterTable(c){return![R.SQLITE].includes(c.dbType)},supportForeignKey(c){return![R.CLICKHOUSE].includes(c.dbType)&&(!c.tableMeta.engine||c.tableMeta.engine!="MyISAM")},supportCheck(c){return![R.SQLITE,R.DUCK_DB,R.CLICKHOUSE,R.SNOWFLAKE].includes(c.dbType)},supportTrigger(c){return!mt(c.dbType)},supportIndex(c){return![R.SNOWFLAKE].includes(c.dbType)}},actions:{updateDBType(c){this.dbType=c},updateFullInfo(c){for(const e in c)this[e]=c[e]}}}),Rt={class:"design-toolbar"},Ct={class:"text-center"},St=M("br",null,null,-1),pt=M("br",null,null,-1),Ot=ce({__name:"IndexPanel",setup(c){const e=P([]),t=P([]),n=P(!0),l=Te(),{dbType:a,dialect:r,remainHeight:o,activePanel:i}=Re(l),m=ae({visible:!1,loading:!1,column:null,columns:null,type:null}),O=H(()=>{var I;return((I=m.columns)==null?void 0:I.length)>0?r.value.newIndex({...m}):""});me(()=>{w.on("designMetaNext",()=>{m.visible=!1,t.value=r.value.indexTypes(),p()}).on("indexes",I=>{e.value=I,n.value=!1}).on("success",I=>{I=="index"&&(m.loading=!1,m.visible=!1,p())}).on("error",()=>{m.loading=!1})});const p=()=>{w.emit("indexes"),n.value=!0},N=()=>{m.visible=!0,m.loading=!1,m.columns=null,m.type="INDEX"},B=I=>r.value.formatIndexType(I),A=()=>{m.loading=!0,w.emit("execute",{type:"index",sql:O.value})},C=I=>{De(T("design.deleteIndexConfirm")).then(()=>{w.emit("execute",{type:"index",sql:r.value.dropIndex(I.index_name)})})};return(I,F)=>{const K=k("vsc-button"),D=k("vsc-tooltip"),$=be,G=Xe,j=Me,q=k("RedMark"),re=ve,x=Fe,X=Ie,V=$e,ee=he,Ae=Se;return _(),g("div",null,[M("div",Rt,[s(D,{title:E(T)("common.new")},{default:u(()=>[["ClickHouse"].includes(E(a))?h("",!0):(_(),f(K,{key:0,type:"icon",icon:"codicon-add text-base",onClick:N}))]),_:1},8,["title"]),s(D,{title:E(T)("common.refresh")},{default:u(()=>[s(K,{type:"icon",icon:"codicon-refresh text-base",onClick:p})]),_:1},8,["title"])]),E(i)=="index"?W((_(),f(j,{key:0,data:e.value,height:E(o),border:""},{default:u(()=>[s($,{resizable:!0,align:"center",prop:"index_name",label:E(T)("design.indexName"),width:"200"},null,8,["label"]),s($,{resizable:!0,align:"center",prop:"column_name",label:E(T)("design.column"),width:"200"},null,8,["label"]),s($,{align:"center",prop:"isUnique",label:E(T)("design.unique"),width:"200"},{default:u(({row:v})=>[s(G,{disabled:"","model-value":E(Be)(v.isUnique)},null,8,["model-value"])]),_:1},8,["label"]),s($,{resizable:!0,align:"center",prop:"index_type",label:E(T)("common.type"),width:"200"},{default:u(({row:v})=>[y(U(B(v)),1)]),_:1},8,["label"]),["PostgreSQL"].includes(E(a))?(_(),f($,{key:0,resizable:!0,align:"center",prop:"index_method",label:E(T)("design.indexMethod"),width:"200"},null,8,["label"])):h("",!0),["ClickHouse"].includes(E(a))?h("",!0):(_(),f($,{key:1,label:E(T)("design.operation"),width:"120"},{default:u(({row:v})=>[M("div",Ct,[s(K,{type:"icon",icon:"el-icon-delete",style:{color:"#f56c6c"},title:"delete",onClick:de=>C(v)},null,8,["onClick"])])]),_:1},8,["label"]))]),_:1},8,["data","height"])),[[Ae,n.value]]):h("",!0),s(ee,{modelValue:m.visible,"onUpdate:modelValue":F[3]||(F[3]=v=>m.visible=v),"show-close":!1,title:E(T)("design.newIndex"),width:"520px",closeOnClickModal:!1,center:""},{footer:u(()=>[s(K,{type:"secondary",onClick:F[2]||(F[2]=v=>m.visible=!1)},{default:u(()=>[y(U(E(T)("common.cancel")),1)]),_:1}),s(K,{type:"primary",loading:m.loading,onClick:A},{default:u(()=>[y(U(E(T)("common.ok")),1)]),_:1},8,["loading"]),St,y(),pt,W(s(Ce,{ref:"cmEditor",value:O.value,readonly:!0},null,8,["value"]),[[ne,O.value]])]),default:u(()=>[s(V,{inline:!0,"label-width":"75px",size:"small"},{default:u(()=>[s(X,null,{label:u(()=>[s(q),y(U(E(T)("design.column")),1)]),default:u(()=>[s(x,{modelValue:m.columns,"onUpdate:modelValue":F[0]||(F[0]=v=>m.columns=v),size:"small",filterable:"",multiple:"",class:"!w-[150px]"},{default:u(()=>[(_(!0),g(Z,null,oe(E(l).columns,v=>(_(),f(re,{key:v.name,label:v.name,value:v.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),s(X,null,{label:u(()=>[s(q),y(U(E(T)("common.type")),1)]),default:u(()=>[s(x,{modelValue:m.type,"onUpdate:modelValue":F[1]||(F[1]=v=>m.type=v),size:"small",class:"!w-[110px]"},{default:u(()=>[(_(!0),g(Z,null,oe(t.value,(v,de)=>(_(),f(re,{key:de,label:v.label,value:v.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue","title"])])}}}),Lt={ref:"infoPanel",class:"design-toolbar"},bt=ce({__name:"DDL",setup(c){const e=Te(),t=P(!1),n=P("");me(()=>{w.on("designMetaNext",()=>{w.emit("ddl")}).on("ddl",({ddl:a})=>{t.value=!1,n.value=a})});const l=()=>{navigator.clipboard.writeText(n.value),Ke("Copy DDL success!")};return(a,r)=>{const o=k("vsc-button"),i=k("vsc-tooltip"),m=Se;return W((_(),g("div",null,[M("div",Lt,[s(i,{title:"Copy DDL"},{default:u(()=>[s(o,{type:"icon",icon:"el-icon-document-copy text-base",onClick:l})]),_:1}),s(i,{title:a.$t("common.refresh")},{default:u(()=>[s(o,{type:"icon",icon:"codicon-refresh text-base",onClick:r[0]||(r[0]=O=>E(w).emit("ddl"))})]),_:1},8,["title"])],512),E(e).activePanel=="ddl"?(_(),f(Ce,{key:0,dbType:E(e).dbType,value:n.value,readonly:!0,style:it({maxHeight:E(e).remainHeight+"px",overflow:"auto"}),class:"large"},null,8,["dbType","value","style"])):h("",!0)])),[[m,t.value]])}}}),Mt={key:0,class:"design-toolbar"},It={class:"text-center"},$t=M("br",null,null,-1),ht=M("br",null,null,-1),ft=M("br",null,null,-1),wt=ce({__name:"ForeignKey",setup(c){const e=Te(),{dialect:t,canAlterTable:n,remainHeight:l,activePanel:a}=Re(e),r=P([]),o=P([]),i=P([]),m=P([]),O=P(!0),p=ae({visible:!1,loading:!1}),N=ae({column:null,refTable:null,refColumn:null,foreignKeyName:null,onUpdate:"NO ACTION",onDelete:"NO ACTION"}),B=H(()=>{const{column:D,refTable:$,refColumn:G}=N;return D||$||G?t.value.newForeignKey(N):""});me(()=>{w.on("designMetaNext",()=>{p.visible=!1,m.value=t.value.strategies(),C(),w.emit("tables")}).on("foreignKeys",D=>{O.value=!1,r.value=D}).on("columnsById",D=>{N.refColumn="",i.value=D}).on("success",D=>{D=="fk"&&(p.loading=!1,p.visible=!1,C())}).on("error",()=>{p.loading=!1}).on("tables",D=>{o.value=D})});const A=D=>{w.emit("columnsById",D)},C=()=>{const D=t.value.showForeignKeys();D&&(O.value=!0,w.emit("foreignKeys",D))},I=()=>{p.visible=!0,p.loading=!1,N.column=null,N.refTable=null,N.refColumn=null,N.onUpdate="NO ACTION",N.onDelete="NO ACTION"},F=()=>{p.loading=!0,w.emit("execute",{type:"fk",sql:B.value})},K=D=>{De(T("design.deleteFkConfirm")).then(()=>{w.emit("execute",{type:"fk",sql:t.value.dropForeignKey(D.constraint_name)})})};return(D,$)=>{const G=k("vsc-button"),j=k("vsc-tooltip"),q=be,re=Me,x=k("RedMark"),X=ve,V=Fe,ee=Ie,Ae=Le,v=$e,de=he,ye=Se;return _(),g("div",null,[E(n)?(_(),g("div",Mt,[s(j,{title:E(T)("common.new")},{default:u(()=>[s(G,{type:"icon",icon:"codicon-add text-base",onClick:I})]),_:1},8,["title"]),s(j,{title:E(T)("common.refresh")},{default:u(()=>[s(G,{type:"icon",icon:"codicon-refresh text-base",onClick:C})]),_:1},8,["title"])])):h("",!0),E(a)=="foreignKey"?W((_(),f(re,{key:1,data:r.value,style:{width:"100%"},height:E(l),border:""},{default:u(()=>[E(n)?(_(),f(q,{key:0,resizable:!0,align:"center",prop:"constraint_name",label:E(T)("design.constraintName"),width:"150"},null,8,["label"])):h("",!0),s(q,{resizable:!0,align:"center",prop:"column_name",label:E(T)("design.column"),width:"150"},null,8,["label"]),s(q,{resizable:!0,align:"center",prop:"referenced_table",label:E(T)("design.referencedTable"),width:"150"},null,8,["label"]),s(q,{resizable:!0,align:"center",prop:"referenced_column",label:E(T)("design.referencedColumn"),width:"155"},null,8,["label"]),s(q,{align:"center",prop:"updateRule",label:E(T)("design.updateRule"),width:"150"},null,8,["label"]),s(q,{align:"center",prop:"deleteRule",label:E(T)("design.deleteRule"),width:"150"},null,8,["label"]),E(n)?(_(),f(q,{key:1,label:E(T)("design.operation"),width:"120"},{default:u(({row:b})=>[M("div",It,[s(G,{type:"icon",icon:"el-icon-delete",style:{color:"#f56c6c"},title:"delete",onClick:S=>K(b)},null,8,["onClick"])])]),_:1},8,["label"])):h("",!0)]),_:1},8,["data","height"])),[[ye,O.value]]):h("",!0),s(de,{modelValue:p.visible,"onUpdate:modelValue":$[7]||($[7]=b=>p.visible=b),"show-close":!1,title:E(T)("design.newForeignKey"),width:"780px",closeOnClickModal:!1,"close-on-press-escape":!1,center:""},{footer:u(()=>[s(G,{type:"secondary",onClick:$[6]||($[6]=b=>p.visible=!1)},{default:u(()=>[y(U(E(T)("common.cancel")),1)]),_:1}),s(G,{type:"primary",loading:p.loading,onClick:F},{default:u(()=>[y(U(E(T)("common.ok")),1)]),_:1},8,["loading"]),ht,y(),ft,W(s(Ce,{ref:"cmEditor",value:B.value,readonly:!0},null,8,["value"]),[[ne,B.value]])]),default:u(()=>[s(v,{inline:!0,"label-width":"150px","label-position":"left",size:"small"},{default:u(()=>[s(ee,null,{label:u(()=>[s(x),y(U(E(T)("design.column")),1)]),default:u(()=>[s(V,{modelValue:N.column,"onUpdate:modelValue":$[0]||($[0]=b=>N.column=b),size:"small",filterable:"",class:"!w-[170px] mr-4"},{default:u(()=>[(_(!0),g(Z,null,oe(E(e).columns,b=>(_(),f(X,{key:b.name,label:b.name,value:b.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),s(ee,null,{label:u(()=>[y(U(E(T)("design.constraintName")),1)]),default:u(()=>[s(Ae,{modelValue:N.foreignKeyName,"onUpdate:modelValue":$[1]||($[1]=b=>N.foreignKeyName=b),class:"!w-[170px]"},null,8,["modelValue"])]),_:1}),$t,s(ee,null,{label:u(()=>[s(x),y(U(E(T)("design.referencedTable")),1)]),default:u(()=>[s(V,{modelValue:N.refTable,"onUpdate:modelValue":$[2]||($[2]=b=>N.refTable=b),size:"small",filterable:"",class:"!w-[170px] mr-4"},{default:u(()=>[(_(!0),g(Z,null,oe(o.value,b=>(_(),f(X,{key:b.name,label:b.name,value:b.name,onClick:S=>A(b.id)},null,8,["label","value","onClick"]))),128))]),_:1},8,["modelValue"])]),_:1}),s(ee,null,{label:u(()=>[s(x),y(U(E(T)("design.referencedColumn")),1)]),default:u(()=>[s(V,{modelValue:N.refColumn,"onUpdate:modelValue":$[3]||($[3]=b=>N.refColumn=b),size:"small",filterable:"",class:"!w-[170px]"},{default:u(()=>[(_(!0),g(Z,null,oe(i.value,b=>(_(),f(X,{key:b.name,label:b.name,value:b.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),s(ee,{label:"On Update"},{default:u(()=>[s(V,{modelValue:N.onUpdate,"onUpdate:modelValue":$[4]||($[4]=b=>N.onUpdate=b),size:"small",filterable:"",class:"!w-[170px] mr-4"},{default:u(()=>[(_(!0),g(Z,null,oe(m.value,b=>(_(),f(X,{key:b,label:b,value:b},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),s(ee,{label:"On Delete"},{default:u(()=>[s(V,{modelValue:N.onDelete,"onUpdate:modelValue":$[5]||($[5]=b=>N.onDelete=b),size:"small",filterable:"",class:"!w-[170px]"},{default:u(()=>[(_(!0),g(Z,null,oe(m.value,b=>(_(),f(X,{key:b,label:b,value:b},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue","title"])])}}}),He=c=>(ut("data-v-93ed50bc"),c=c(),ct(),c),Dt={key:0,ref:"infoPanel",class:"design-toolbar"},gt=["title"],Ut={class:"text-center"},yt=He(()=>M("br",null,null,-1)),Bt={class:"max-h-[300px] overflow-y-auto"},vt=["onClick"],Ft=He(()=>M("br",null,null,-1)),Ht=He(()=>M("br",null,null,-1)),Pt=ce({__name:"ColumnPanel",setup(c){const e=Te(),{dbType:t,columns:n,dialect:l,canAlterTable:a,remainHeight:r,activePanel:o}=Re(e),i=ae({visible:!1,inputting:!1}),m=H(()=>l.value.columnTypes()),O=P([]),p=P(!1),N=P(!0),B=P([]),A=ae({name:"",type:"",unsigned:null,zerofill:null,comment:null,isNotNull:null,defaultValue:null,useCurrentTimestamp:null}),C=ae({isNew:!0,editDisable:!1,editVisible:!1,editLoading:!1}),I=H(()=>{var S,L;return D.value&&((L=(S=A.type)==null?void 0:S.match)==null?void 0:L.call(S,/(\bint|decimal|float|double)/i))}),F=H(()=>{var S,L;return D.value&&((L=(S=A.type)==null?void 0:S.match)==null?void 0:L.call(S,/timestamp/i))}),K=H(()=>window.innerWidth<=1200),D=H(()=>["MySQL","Doris","MariaDB"].includes(t.value)),$=H(()=>{const S=C.isNew?"design.newColumn":"design.updateColumn";return T(S)}),G=H(()=>i.inputting&&A.type?m.value.filter(S=>(S.label||S).match(new RegExp(A.type,"i"))):m.value),j=H(()=>{if(C.isNew){const{name:S,type:L}=A;return S&&L?l.value.newColumn(A):""}I.value||(A.zerofill=!1,A.unsigned=!1),F.value||(A.useCurrentTimestamp=!1);try{return l.value.updateColumn({newColumnName:A.name,columnType:A.type,nullable:!A.isNotNull,...A})}catch(S){return C.editDisable=!0,S}}),q=H(()=>[R.MYSQL,R.MARIA_DB,R.PG,R.DB2].includes(t.value));me(()=>{w.on("designMetaNext",S=>{B.value=We.clone(S.columns),C.editVisible=!1,N.value=!1}).on("columns",S=>{B.value=We.clone(S),N.value=!1}).on("indexes",S=>{p.value=!0,O.value=S.filter(L=>Be(L.isUnique)).map(L=>L.column_name)}).on("success",S=>{S=="column"&&(C.editLoading=!1,C.editVisible=!1,V())}).on("error",()=>{C.editLoading=!1,V()})});const re=(...S)=>!S.includes(t.value),x=S=>{S&&(A.defaultValue="CURRENT_TIMESTAMP")},X=()=>{const S=G.value[0];S&&(A.type=S.value||S,i.visible=!1)},V=()=>{w.emit("columns"),N.value=!0},ee=()=>{A.name="",A.type="",C.isNew=!0,C.editVisible=!0},Ae=S=>{Object.assign(A,{...S,columnName:S.name,oldRow:S}),C.isNew=!1,C.editVisible=!0,C.editDisable=!1,C.editLoading=!1},v=(S,L)=>{C.isNew=!1,Object.assign(A,{...S,columnName:S.name,oldRow:B.value[L]}),de()},de=()=>{if(!j.value)return we("No any change!");if(C.editLoading=!0,C.isNew)return ye();try{w.emit("execute",{type:"column",sql:j.value})}catch(S){we(S.message),C.editLoading=!1}},ye=()=>{w.emit("execute",{type:"column",sql:j.value})},b=S=>{De(T("design.deleteColumnConfirm")).then(()=>{w.emit("execute",{type:"column",sql:l.value.dropColumn(S.name)})})};return(S,L)=>{const Ne=k("vsc-button"),Ve=k("vsc-tooltip"),J=be,se=Xe,at=Me,ke=k("RedMark"),fe=Le,ie=Ie,lt=Tt,rt=$e,st=he,ot=Se;return _(),g("div",null,[E(a)?(_(),g("div",Dt,[s(Ve,{title:E(T)("common.new")},{default:u(()=>[s(Ne,{type:"icon",icon:"codicon-add text-base",onClick:ee})]),_:1},8,["title"]),s(Ve,{title:E(T)("common.refresh")},{default:u(()=>[s(Ne,{type:"icon",icon:"codicon-refresh text-base",onClick:V})]),_:1},8,["title"])],512)):h("",!0),E(o)=="column"?W((_(),f(at,{key:1,data:E(n),height:E(r),border:"",onRowDblclick:Ae},{default:u(()=>[s(J,{resizable:!0,align:"center",prop:"name",label:E(T)("common.name"),width:"180"},null,8,["label"]),s(J,{resizable:!0,align:"center",prop:"type",label:E(T)("common.type"),width:K.value?100:130},null,8,["label","width"]),s(J,{resizable:!0,align:"center",prop:"maximum_length",width:80,label:E(T)("design.length")},null,8,["label"]),["DuckDB"].includes(E(t))?h("",!0):(_(),f(J,{key:0,resizable:!0,align:"center",prop:"comment",label:E(T)("common.comment"),width:"100"},{default:u(({row:d})=>[M("span",{title:d==null?void 0:d.comment},U(d==null?void 0:d.comment),9,gt)]),_:1},8,["label"])),s(J,{resizable:!0,align:"center",prop:"defaultValue",width:K.value?75:110,label:E(T)("common.default")},null,8,["width","label"]),s(J,{align:"center",label:"Not Null",width:80},{default:u(({row:d,rowIndex:te})=>[s(se,{modelValue:d.isNotNull,"onUpdate:modelValue":z=>d.isNotNull=z,onChange:z=>v(d,te)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),s(J,{align:"center",label:E(T)("design.isPrimary"),width:110},{default:u(({row:d})=>[s(se,{disabled:"","model-value":d.isPrimary},null,8,["model-value"])]),_:1},8,["label"]),p.value||["MySQL","MariaDB","Doris"].includes(E(t))?(_(),f(J,{key:1,align:"center",label:E(T)("design.isUnique"),width:80},{default:u(({row:d})=>[s(se,{disabled:"","model-value":d.isUnique||O.value.includes(d.name)},null,8,["model-value"])]),_:1},8,["label"])):h("",!0),["DuckDB"].includes(E(t))?h("",!0):(_(),f(J,{key:2,align:"center",label:E(T)("design.isAutoIncrement"),width:"130"},{default:u(({row:d,rowIndex:te})=>[s(se,{modelValue:d.isAutoIncrement,"onUpdate:modelValue":z=>d.isAutoIncrement=z,disabled:!d.isPrimary||!q.value,onChange:z=>v(d,te)},null,8,["modelValue","onUpdate:modelValue","disabled","onChange"])]),_:1},8,["label"])),["SQLite"].includes(E(t))?h("",!0):(_(),f(J,{key:3,label:E(T)("design.operation"),width:"100"},{default:u(({row:d})=>[M("div",Ut,[s(Ne,{type:"icon",icon:"codicon-edit",title:"edit",onClick:te=>Ae(d)},null,8,["onClick"]),s(Ne,{type:"icon",icon:"el-icon-delete",style:{color:"#f56c6c"},title:"delete",onClick:te=>b(d)},null,8,["onClick"])])]),_:1},8,["label"])),D.value?(_(),g(Z,{key:4},[s(J,{align:"center",label:"UNSIGNED",width:"100"},{default:u(({row:d,rowIndex:te})=>[s(se,{modelValue:d.unsigned,"onUpdate:modelValue":z=>d.unsigned=z,"true-value":"1","false-value":"0",onChange:z=>v(d,te)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),s(J,{align:"center",label:"Zerofill",width:"80"},{default:u(({row:d,rowIndex:te})=>[s(se,{modelValue:d.zerofill,"onUpdate:modelValue":z=>d.zerofill=z,"true-value":"1","false-value":"0",onChange:z=>v(d,te)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1})],64)):h("",!0)]),_:1},8,["data","height"])),[[ot,N.value]]):h("",!0),s(st,{modelValue:C.editVisible,"onUpdate:modelValue":L[12]||(L[12]=d=>C.editVisible=d),"show-close":!1,title:$.value,width:"680px",closeOnClickModal:!1,"close-on-press-escape":!1,center:""},{footer:u(()=>[s(Ne,{type:"secondary",onClick:L[11]||(L[11]=d=>C.editVisible=!1)},{default:u(()=>[y(U(E(T)("common.cancel")),1)]),_:1}),s(Ne,{type:"primary",loading:C.editLoading,disabled:C.editDisable,onClick:de},{default:u(()=>[y(U(E(T)("common.ok")),1)]),_:1},8,["loading","disabled"]),Ft,y(),Ht,W(s(Ce,{ref:"cmEditor",value:j.value,readonly:!0},null,8,["value"]),[[ne,j.value]])]),default:u(()=>[s(rt,{inline:!0,"label-width":"90px",size:"small"},{default:u(()=>[s(ie,null,{label:u(()=>[s(ke),y(U(E(T)("common.name")),1)]),default:u(()=>[s(fe,{modelValue:A.name,"onUpdate:modelValue":L[0]||(L[0]=d=>A.name=d),size:"small",fixed:""},null,8,["modelValue"])]),_:1}),I.value?(_(),f(ie,{key:0,label:"ZEROFILL"},{default:u(()=>[s(se,{modelValue:A.zerofill,"onUpdate:modelValue":L[1]||(L[1]=d=>A.zerofill=d),"true-value":"1","false-value":"0"},null,8,["modelValue"])]),_:1})):h("",!0),F.value?(_(),f(ie,{key:1,label:"CURRENT_TIMESTAMP","label-width":"160px"},{default:u(()=>[s(se,{modelValue:A.useCurrentTimestamp,"onUpdate:modelValue":L[2]||(L[2]=d=>A.useCurrentTimestamp=d),onChange:x},null,8,["modelValue"])]),_:1})):h("",!0),yt,s(ie,null,{label:u(()=>[s(ke),y(U(E(T)("common.type")),1)]),default:u(()=>[s(lt,{visible:i.visible,"onUpdate:visible":L[6]||(L[6]=d=>i.visible=d),placement:"bottom-start","popper-class":"!p-0",trigger:"click",tabindex:null},{reference:u(()=>[s(fe,{modelValue:A.type,"onUpdate:modelValue":L[3]||(L[3]=d=>A.type=d),size:"small",fixed:"",onKeyup:Oe(X,["enter"]),onInput:L[4]||(L[4]=d=>{i.inputting=!0,i.visible=!0}),onClick:L[5]||(L[5]=d=>i.inputting=!1)},null,8,["modelValue"])]),default:u(()=>[M("div",Bt,[(_(!0),g(Z,null,oe(G.value,(d,te)=>(_(),g(Z,null,[d=="hr"?(_(),g("div",{key:te,class:"w-full type-hr bg-bg"})):(_(),g("div",{key:1,class:"el-select-dropdown__item !h-6 min-w-[190px] bg-[var(--vscode-dropdown-background)]",onClick:z=>{A.type=d.value||d,i.visible=!1}},U(d.label||d),9,vt))],64))),256))])]),_:1},8,["visible"])]),_:1}),re("ClickHouse")?(_(),f(ie,{key:2,label:E(T)("design.isNotNull")},{default:u(()=>[s(se,{modelValue:A.isNotNull,"onUpdate:modelValue":L[7]||(L[7]=d=>A.isNotNull=d)},null,8,["modelValue"])]),_:1},8,["label"])):h("",!0),I.value?(_(),f(ie,{key:3,label:"UNSIGNED"},{default:u(()=>[s(se,{modelValue:A.unsigned,"onUpdate:modelValue":L[8]||(L[8]=d=>A.unsigned=d),"true-value":"1","false-value":"0"},null,8,["modelValue"])]),_:1})):h("",!0),!["SqlServer","Snowflake"].includes(E(t))||C.isNew?(_(),f(ie,{key:4,label:E(T)("common.default")},{default:u(()=>[s(fe,{modelValue:A.defaultValue,"onUpdate:modelValue":L[9]||(L[9]=d=>A.defaultValue=d),size:"small",fixed:""},null,8,["modelValue"])]),_:1},8,["label"])):h("",!0),["DuckDB"].includes(E(t))?h("",!0):(_(),f(ie,{key:5,label:E(T)("common.comment")},{default:u(()=>[s(fe,{modelValue:A.comment,"onUpdate:modelValue":L[10]||(L[10]=d=>A.comment=d),size:"small",fixed:""},null,8,["modelValue"])]),_:1},8,["label"]))]),_:1})]),_:1},8,["modelValue","title"])])}}}),xt=je(Pt,[["__scopeId","data-v-93ed50bc"]]),Vt={class:"ml-4"},kt={class:"flex flex-col gap-y-2"},Yt={class:"flex-wrap"},Wt={class:"inline-block mr-5"},Gt={class:"font-bold mr-5 inline-block"},qt={class:"inline-block mr-5"},Kt={class:"font-bold mr-5 inline-block"},jt={class:"flex-wrap"},Qt={key:0,class:"inline-block mr-5"},Xt={class:"font-bold mr-5 inline-block"},Jt={key:1,class:"inline-block mr-5"},zt={class:"font-bold mr-5 inline-block"},Zt={class:"inline-block pt-1"},en=ce({__name:"InfoPanel",setup(c){const e=Te(),{dialect:t}=Re(e),n=P([]),l=ae({name:null,schema:null,newTableName:null,comment:null,newComment:null,collation:null,newCollation:null});me(()=>{w.on("designMetaNext",r=>{l.name=r.table,l.schema=r.schema,l.newTableName=r.table,l.comment=r.comment,l.newComment=r.comment,l.collation=r.collation,l.newCollation=r.collation}).on("collations",r=>{n.value=r})});const a=()=>{const r={...l,table:l.name};w.emit("updateTable",r);const o=t.value.updateTable(r);o?w.emit("execute",{type:"table",sql:o}):we("No any change!")};return(r,o)=>{const i=Le,m=ve,O=Fe,p=k("vsc-button");return _(),g("div",Vt,[M("div",kt,[M("div",Yt,[M("div",Wt,[M("label",Gt,U(r.$t("design.table")),1),s(i,{modelValue:l.newTableName,"onUpdate:modelValue":o[0]||(o[0]=N=>l.newTableName=N),class:"!w-48",required:"",onKeyup:Oe(a,["enter"])},null,8,["modelValue"])]),M("div",qt,[M("label",Kt,U(r.$t("common.comment")),1),s(i,{modelValue:l.newComment,"onUpdate:modelValue":o[1]||(o[1]=N=>l.newComment=N),class:"!w-48",onKeyup:Oe(a,["enter"])},null,8,["modelValue"])])]),M("div",jt,[E(e).tableMeta.engine?(_(),g("div",Qt,[M("label",Xt,U(r.$t("design.engine")),1),s(i,{value:E(e).tableMeta.engine,class:"!w-24",disabled:""},null,8,["value"])])):h("",!0),l.collation&&n.value.length>0?(_(),g("div",Jt,[M("label",zt,U(r.$t("design.collate")),1),s(O,{modelValue:l.newCollation,"onUpdate:modelValue":o[2]||(o[2]=N=>l.newCollation=N),size:"small",filterable:""},{default:u(()=>[(_(!0),g(Z,null,oe(n.value,N=>(_(),f(m,{key:N.name,label:N.name,value:N.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])):h("",!0),M("div",Zt,[s(p,{type:"success",onClick:a},{default:u(()=>[y(U(r.$t("common.update")),1)]),_:1})])])])])}}}),tn={key:0,class:"design-toolbar"},nn={class:"text-center"},an=M("br",null,null,-1),ln=M("br",null,null,-1),rn=ce({__name:"Check",setup(c){const e=Te(),{dialect:t,canAlterTable:n,remainHeight:l,activePanel:a}=Re(e),r=P([]),o=P(!0),i=ae({visible:!1,loading:!1}),m=ae({clause:null}),O=H(()=>m.clause?t.value.newCheck(m.clause):"");me(()=>{w.on("designMetaNext",()=>{p(),i.visible=!1}).on("checks",C=>{o.value=!1,r.value=C}).on("success",C=>{C=="check"&&(p(),i.visible=!1,i.loading=!1)}).on("error",()=>{i.loading=!1})});const p=()=>{const C=t.value.showChecks();if(!C){console.log("This database type does not currently support check."),o.value=!1;return}o.value=!0,w.emit("checks",C)},N=()=>{i.visible=!0,i.loading=!1,m.clause=null},B=()=>{i.loading=!0,w.emit("execute",{type:"check",sql:O.value})},A=C=>{De(T("design.deleteCheckConfirm")).then(()=>{w.emit("execute",{type:"check",sql:t.value.dropCheck(C.name)})})};return(C,I)=>{const F=k("vsc-button"),K=k("vsc-tooltip"),D=be,$=Me,G=k("RedMark"),j=Le,q=Ie,re=$e,x=he,X=Se;return _(),g("div",null,[E(n)?(_(),g("div",tn,[s(K,{title:E(T)("common.new")},{default:u(()=>[s(F,{type:"icon",icon:"codicon-add text-base",onClick:N})]),_:1},8,["title"]),s(K,{title:E(T)("common.refresh")},{default:u(()=>[s(F,{type:"icon",icon:"codicon-refresh text-base",onClick:p})]),_:1},8,["title"])])):h("",!0),E(a)=="check"?W((_(),f($,{key:1,data:r.value,height:E(l),border:""},{default:u(()=>[E(n)?(_(),f(D,{key:0,resizable:!0,align:"center",prop:"name",label:E(T)("design.constraintName"),width:"200"},null,8,["label"])):h("",!0),s(D,{resizable:!0,align:"center",prop:"clause",label:E(T)("design.clause"),width:"200"},null,8,["label"]),E(n)?(_(),f(D,{key:1,label:E(T)("design.operation"),width:"100"},{default:u(({row:V})=>[M("div",nn,[s(F,{type:"icon",icon:"el-icon-delete",style:{color:"#f56c6c"},title:"delete",onClick:ee=>A(V)},null,8,["onClick"])])]),_:1},8,["label"])):h("",!0)]),_:1},8,["data","height"])),[[X,o.value]]):h("",!0),s(x,{modelValue:i.visible,"onUpdate:modelValue":I[3]||(I[3]=V=>i.visible=V),"show-close":!1,title:E(T)("design.newCheck"),width:"430px",closeOnClickModal:!1,"close-on-press-escape":!1,center:""},{footer:u(()=>[s(F,{type:"secondary",onClick:I[2]||(I[2]=V=>i.visible=!1)},{default:u(()=>[y(U(E(T)("common.cancel")),1)]),_:1}),s(F,{type:"primary",loading:i.loading,onClick:B},{default:u(()=>[y(U(E(T)("common.ok")),1)]),_:1},8,["loading"]),an,y(),ln,W(s(Ce,{ref:"cmEditor",value:O.value,readonly:!0},null,8,["value"]),[[ne,O.value]])]),default:u(()=>[s(re,{inline:!0,"label-width":"80px","label-position":"left",onSubmit:I[1]||(I[1]=Qe(()=>{},["prevent"])),onKeyup:Oe(B,["enter"])},{default:u(()=>[s(q,null,{label:u(()=>[s(G),y(U(E(T)("design.clause")),1)]),default:u(()=>[s(j,{modelValue:m.clause,"onUpdate:modelValue":I[0]||(I[0]=V=>m.clause=V),class:"!w-[290px]",size:"small",placeholder:"e.g. id >20 and name!='admin'"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue","title"])])}}}),sn={key:0,class:"design-toolbar"},on=M("br",null,null,-1),En=M("br",null,null,-1),un=ce({__name:"Trigger",setup(c){const e=Te(),{dialect:t,canAlterTable:n,remainHeight:l,activePanel:a}=Re(e),r=P([]),o=P(!0),i=ae({visible:!1,loading:!1}),m=ae({clause:null}),O=H(()=>"");me(()=>{w.on("designMetaNext",()=>{p(),i.visible=!1}).on("triggers",B=>{o.value=!1,r.value=B}).on("success",B=>{B=="trigger"&&(p(),i.visible=!1,i.loading=!1)}).on("error",()=>{i.loading=!1})});const p=()=>{o.value=!0,w.emit("triggers")},N=()=>{i.loading=!0,w.emit("execute",{type:"trigger",sql:O.value})};return(B,A)=>{const C=k("vsc-button"),I=k("vsc-tooltip"),F=be,K=Me,D=k("RedMark"),$=Le,G=Ie,j=$e,q=he,re=Se;return _(),g("div",null,[E(n)?(_(),g("div",sn,[s(I,{title:E(T)("common.refresh")},{default:u(()=>[s(C,{type:"icon",icon:"codicon-refresh text-base",onClick:p})]),_:1},8,["title"])])):h("",!0),E(a)=="trigger"?W((_(),f(K,{key:1,data:r.value,height:E(l),border:""},{default:u(()=>[s(F,{resizable:!0,align:"center",prop:"trigger_name",label:E(T)("design.triggerName"),width:"200"},null,8,["label"]),s(F,{resizable:!0,align:"center",prop:"timing",label:E(T)("design.timing"),width:"200"},null,8,["label"]),s(F,{resizable:!0,align:"center",prop:"manipulation",label:E(T)("design.manipulation"),width:"200"},null,8,["label"]),s(F,{resizable:!0,align:"center",prop:"orientation",label:E(T)("design.orientation"),width:"200"},null,8,["label"]),s(F,{resizable:!0,align:"center",prop:"statement",label:E(T)("design.statement"),width:"200"},{default:u(x=>[y(U(x.row.source||x.row.statement),1)]),_:1},8,["label"])]),_:1},8,["data","height"])),[[re,o.value]]):h("",!0),s(q,{modelValue:i.visible,"onUpdate:modelValue":A[3]||(A[3]=x=>i.visible=x),"show-close":!1,title:E(T)("design.newTrigger"),width:"430px",closeOnClickModal:!1,"close-on-press-escape":!1,center:""},{footer:u(()=>[s(C,{type:"secondary",onClick:A[2]||(A[2]=x=>i.visible=!1)},{default:u(()=>[y(U(E(T)("common.cancel")),1)]),_:1}),s(C,{type:"primary",loading:i.loading,onClick:N},{default:u(()=>[y(U(E(T)("common.ok")),1)]),_:1},8,["loading"]),on,y(),En,W(s(Ce,{ref:"cmEditor",value:O.value,readonly:!0},null,8,["value"]),[[ne,O.value]])]),default:u(()=>[s(j,{inline:!0,"label-width":"80px","label-position":"left",onSubmit:A[1]||(A[1]=Qe(()=>{},["prevent"])),onKeyup:Oe(N,["enter"])},{default:u(()=>[s(G,null,{label:u(()=>[s(D),y(U(E(T)("design.clause")),1)]),default:u(()=>[s($,{modelValue:m.clause,"onUpdate:modelValue":A[0]||(A[0]=x=>m.clause=x),class:"!w-[290px]",size:"small",placeholder:"e.g. AFTER INSERT ON table_name FOR EACH ROW"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue","title"])])}}});class Ee{showAllComments(){return null}showAllForeignKeys(){return null}showAllConstraints(){return null}dropIndex(e,t){throw new Error("Method not implemented.")}showVersion(){return null}showIndex(e,t){return null}createIndex(e){return null}showDatabases(){return null}updateUser(e){return null}showCollations(){return null}showPackages(e){return null}showChecks(e,t){return null}showPartitions(e,t){return null}showActualPartitions(e,t){return null}showForeignKeys(e,t){return null}updateColumnSql(e){throw new Error("Method not implemented.")}showMaterialViews(e,t){return""}showTriggers(e,t){return null}showSequences(e){return null}showCustomTypes(e){return null}showExternalTables(e){return`select foreign_table_name "name",foreign_server_name "server",foreign_server_catalog "server_db" from information_schema.foreign_tables where foreign_table_schema='${e}';`}showEvents(e){return`SELECT EVENT_NAME "name" FROM information_schema.EVENTS where EVENT_SCHEMA='${e}' ORDER BY EVENT_NAME;`}dropEventTemplate(e){return`DROP EVENT IF EXISTS ${e};`}showTableSource(e,t){return null}materializedViewTemplate(){return this.viewTemplate(!0)}triggerTemplate(e){return`CREATE TRIGGER trigger_name$1
[BEFORE/AFTER] INSERT ON ${e??"[table_name]$2"}
FOR EACH ROW BEGIN
    $3
END;`}eventTemplate(){return`CREATE EVENT event_name$1
ON SCHEDULE AT CURRENT_TIMESTAMP + INTERVAL 1 HOUR
DO
BEGIN
    SELECT now()$2;
END;`}kill(e){return null}pingDataBase(e,t){return null}dropTriggerTemplate(e,t){return`DROP TRIGGER ${e}`}}class cn extends Ee{showVersion(){return"select version() server_version"}createIndex(e){const t=e.indexType||"btree";return`CREATE INDEX ${e.column}_${new Date().getTime()}_index ON ${e.table} USING ${t} (${e.column})`}dropIndex(e,t){return`DROP INDEX ${t}`}showIndex(e,t){return`select name index_name,is_in_sorting_key indexdef  FROM system.columns WHERE database = '${e}' and table ='${t}' and indexdef=1`}variableList(){return"select name , value as setting,description from system.settings s "}statusList(){return"select name as db , engine as status from system.databases d "}kill(e){return`KILL QUERY WHERE query_id='${e.ID}'`}processList(){return`
    SELECT query_id AS "ID", user AS "User",
    current_database AS "DB",os_user AS "State",
    addSeconds(now(), elapsed) AS "Time",
    query AS "SQL"
    FROM system.processes p 
    ORDER BY elapsed desc`}addColumn(e,t){return`ALTER TABLE ${e} 
    ADD COLUMN [column] [type]`}createUser(){return"CREATE USER [name] WITH PASSWORD 'password'"}updateColumn(e,t){const{name:n,type:l,comment:a,nullable:r,defaultValue:o}=t;return`-- change column type
ALTER TABLE ${e} 
    ALTER COLUMN ${n} TYPE ${l};
-- change column name
ALTER TABLE ${e}  
    RENAME COLUMN ${n} TO [newColumnName]`}updateColumnSql(e){const{columnName:t,columnType:n,newColumnName:l,comment:a,table:r,defaultValue:o,oldRow:i}=e;return console.log(n,i),new Y("",`
`).if(n!=i.type,`ALTER TABLE ${r} ALTER COLUMN ${t} TYPE ${n};`).if(o&&o!=i.defaultValue,`ALTER TABLE ${r} MODIFY COLUMN ${t} DEFAULT ${le(o,n)};`).if(a&&a!=i.comment,`ALTER TABLE ${r} MODIFY COLUMN ${t} COMMENT '${a}';`).if(t!=l,`ALTER TABLE ${r} RENAME COLUMN ${t} TO ${l};`).toString()}showUsers(){return"SELECT * FROM system.users"}updateTable(e){const{table:t,newTableName:n,comment:l,newComment:a}=e;let r="";return a&&a!=l&&(r=`ALTER TABLE ${t} MODIFY COMMENT '${a}';`),n&&t!=n&&(r+=`ALTER TABLE ${t} RENAME TO ${n};`),r}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE "',TABLE_NAME, '";') trun FROM INFORMATION_SCHEMA.TABLES WHERE  table_schema ='${e}' AND table_type='BASE TABLE';`}createDatabase(e){return"CREATE DATABASE $1"}showTableSource(e,t){return`SELECT create_table_query as "Create Table",name as table_name,'definition' as view_definition from system.tables WHERE database='${e}' and name='${t}'`}showViewSource(e,t){return`SELECT create_table_query as "Create View",name as table_name,'definition' as view_definition from system.tables WHERE database='${e}' and name='${t}'`}showProcedureSource(e,t){return"select number from system.numbers where 1=0"}showFunctionSource(e,t){return"select number from system.numbers where 1=0"}showTriggerSource(e,t){return"select number from system.numbers where 1=0"}showColumns(e,t){return`select name,type, null as maximum_length,default_expression as defaultValue,is_in_primary_key as key from system.columns c where database='${e}' and table='${t}' `}showProcedures(e){return"select number from system.numbers where 1=0"}showFunctions(e){return`select name as "ROUTINE_NAME" from system.functions  where origin !='System'`}showViews(e){return`select name ,engine as type from system.tables where database='${e}' and engine = 'View' ORDER BY name`}buildPageSql(e,t,n){return`SELECT * FROM ${t} LIMIT ${n}`}showTables(e){return`select name, engine as type from system.tables where database='${e}' and engine <> 'View' ORDER BY name`}showDatabases(){return"SELECT name as Database FROM system.databases where name not in ('information_schema','INFORMATION_SCHEMA') order by name ASC"}showSchemas(){return this.showDatabases()}tableTemplate(){return`CREATE TABLE table_name$1(  
    id UUID,
    create_time DATETIME,
    name$2 String
)
ENGINE = MergeTree()
ORDER BY (id)
PRIMARY KEY(id);`}viewTemplate(){return`CREATE VIEW $1
AS
SELECT * FROM $2`}procedureTemplate(){return"select number from system.numbers where 1=0"}functionTemplate(){return"CREATE FUNCTION [func_name] AS (a, b, c) -> a * b * c;"}}class ge{constructor(e){this.param=e,this.afterTablePrefix=`ALTER TABLE "${e.table}"`,this.afterColumnPrefix=`${this.afterTablePrefix} ALTER COLUMN "${e.columnName}"`}genAlterSQL(){const{columnName:e,newColumnName:t}=this.param;return new Y("",`
`).append(this.changeTypePart()).append(this.notNullPart()).append(this.defaultPart()).append(this.otherPart()).append(this.commentPart()).if(e!=t,`${this.afterTablePrefix} RENAME COLUMN "${e}" TO "${t}";`).toString()}changeTypePart(){const{oldRow:e,columnType:t}=this.param;return e.type==t?"":`${this.afterColumnPrefix} TYPE ${t};`}notNullPart(){const{oldRow:e,isNotNull:t}=this.param;return e.isNotNull==t?"":`${this.afterColumnPrefix} ${t?"SET NOT NULL":"DROP NOT NULL"};`}otherPart(){return null}defaultPart(){const{oldRow:e,defaultValue:t,columnType:n}=this.param;return e.defaultValue==t?"":`${this.afterColumnPrefix} ${Q(t)?"DROP DEFAULT":`SET DEFAULT ${le(t,n)}`};`}commentPart(){return""}}class pe extends Ee{showVersion(){return""}createIndex(e){return`ALTER TABLE ${e.table} ADD ${e.type||"key"} ("${e.column||"[column]"}")`}dropIndex(e,t){return`DROP INDEX "${t}"`}showIndex(e,t){return null}variableList(){return null}statusList(){return null}processList(){return null}addColumn(e,t){const n=t?` AFTER "${t}"`:"";return`ALTER TABLE ${e}
    ADD COLUMN [column] [type] COMMENT ''${n};`}createUser(){return`CREATE USER 'username'@'%' IDENTIFIED BY 'password';
-- Grant select privilege to all databases;
GRANT SELECT ON *.* TO 'username'@'%' WITH GRANT OPTION;
-- Grant all privileges to all databases;
GRANT ALL PRIVILEGES ON *.* TO 'username'@'%' WITH GRANT OPTION;`}updateUser(e){return`update mysql.user set
    password = PASSWORD("newPassword")
    where User = '${e}';
FLUSH PRIVILEGES;
-- since mysql version 5.7, password column need change to authentication_string=PASSWORD("newPassword")`}updateColumn(e,t){var p;const{name:n,type:l,comment:a,nullable:r,defaultValue:o,extra:i,character_set_name:m,collation_name:O}=t;return new Y(`ALTER TABLE ${e}`).append(`
	CHANGE ${n} ${n} ${l}`).if(m,`CHARACTER SET ${m}`).if(O,`COLLATE ${O}`).if(r!="YES","NOT NULL").if((p=i==null?void 0:i.toLowerCase())==null?void 0:p.includes("auto_increment"),"AUTO_INCREMENT").if(a,`COMMENT '${a}'`).if(o,`DEFAULT ${o=="CURRENT_TIMESTAMP"?o:`'${o}'`}`).toString()}updateColumnSql(e){return new ge(e).genAlterSQL()}showUsers(){return"SELECT concat(user,'@',host) user FROM mysql.user;"}updateTable(e){const{table:t,newTableName:n,comment:l,newComment:a}=e;let r="";return a&&a!=l&&(r=`COMMENT ON TABLE "${t}" IS '${a}';`),n&&t!=n&&(r+=`RENAME TABLE "${t}" TO "${n}";`),r}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE "',table_schema,'"."',TABLE_NAME, '";') trun FROM INFORMATION_SCHEMA.TABLES where  table_schema ='${e}' and TABLE_TYPE<>'VIEW';`}createDatabase(e){return"CREATE DATABASE $1;"}showTableSource(e,t){return`SHOW CREATE TABLE ${e}.${t};`}showViewSource(e,t,n){return`SHOW CREATE VIEW database.${t};`}showProcedureSource(e,t){return`SHOW CREATE PROCEDURE database.${t};`}showFunctionSource(e,t,n){return`SHOW CREATE FUNCTION database.${t};`}showTriggerSource(e,t){return`SHOW CREATE TRIGGER database.${t};`}showColumns(e,t){return`SELECT COLUMN_NAME name,DATA_TYPE type, IS_NULLABLE nullable
            FROM information_schema.columns WHERE table_schema = '${e}' AND table_name = '${t}' ORDER BY ORDINAL_POSITION;`}showTriggers(e,t){return""}showProcedures(e){return""}showFunctions(e){return""}buildPageSql(e,t,n){return`SELECT * FROM ${t} LIMIT ${n};`}showTables(e,t=e){return`SELECT TABLE_NAME "name" FROM information_schema.TABLES  WHERE TABLE_SCHEMA = '${t}' and TABLE_TYPE<>'VIEW' ORDER BY TABLE_NAME;`}showViews(e,t=e){return`SELECT TABLE_NAME name FROM information_schema.VIEWS  WHERE TABLE_SCHEMA = '${t}' ORDER BY TABLE_NAME`}showDatabases(){return'SELECT SCHEMA_NAME "Database" FROM information_schema.schemata ORDER BY "Database";'}showSchemas(e){return'SELECT SCHEMA_NAME "schema" FROM information_schema.schemata ORDER BY "schema";'}tableTemplate(e){return`CREATE TABLE table_name$1(
    id int,
    create_time DATE,
    update_time DATE,
    content VARCHAR(255)
);`}viewTemplate(){return`CREATE VIEW view_name$1
AS
SELECT * FROM `}procedureTemplate(){return`CREATE PROCEDURE procedure_name$1()
BEGIN
    $2
END;`}functionTemplate(){return`CREATE FUNCTION function_name$1() RETURNS int
BEGIN
    $2
    return 0;
END;`}}class Pe extends Ee{updateColumn(e,t){return null}showSchemas(e){return null}showTables(e,t){return null}addColumn(e,t){return null}showColumns(e,t,n){return null}showViews(e,t){return null}showUsers(){return null}createUser(){return null}showTriggers(e,t){return null}showProcedures(e){return null}showFunctions(e){return null}buildPageSql(e,t,n){return null}createDatabase(e){return null}truncateDatabase(e){return null}updateTable(e){return null}showViewSource(e,t,n){return null}showProcedureSource(e,t){return null}showFunctionSource(e,t,n){return null}showTriggerSource(e,t){return null}tableTemplate(e){return null}viewTemplate(e){return null}procedureTemplate(){return null}functionTemplate(){return null}processList(){return null}variableList(){return null}statusList(){return null}}class Je extends Ee{showVersion(){return`select RTRIM(SUBSTR(REPLACE(banner,'Oracle Database ',''),1,3)) "server_version" from v$version where rownum=1`}showAllForeignKeys(){return`SELECT 
    a.constraint_name AS "constraint_name",
    a.owner AS "table_schema",
    a.table_name AS "table_name",
    a.column_name AS "column_name",
    c.owner AS "referenced_schema",
    c.table_name AS "referenced_table",
    c.column_name AS "referenced_column"
FROM 
    ALL_CONS_COLUMNS a 
JOIN 
    ALL_CONSTRAINTS b ON a.owner = b.owner AND a.constraint_name = b.constraint_name
JOIN 
    ALL_CONS_COLUMNS c ON b.r_owner = c.owner AND b.r_constraint_name = c.constraint_name
WHERE 
    b.constraint_type = 'R'
    and a.owner not in ('SYS','APEX_040200')`}showAllConstraints(){return`SELECT 
        b.CONSTRAINT_NAME "constraint_name",
        c.CONSTRAINT_TYPE "constraint_type",
        b.owner "table_schema",
        b.table_name "table_name",
        b.COLUMN_NAME "column_name"
         FROM ALL_CONS_COLUMNS b 
          join ALL_CONSTRAINTS c on b.CONSTRAINT_NAME=c.CONSTRAINT_NAME 
          WHERE CONSTRAINT_TYPE='P'
          and b.owner not in ('SYS','APEX_040200')`}showAllComments(){return`SELECT 
        owner "table_schema",
        table_name "table_name",
        COLUMN_NAME "column_name",
        COMMENTS "comment"
         FROM all_col_comments WHERE COMMENTS is not null
         and owner not in ('SYS','APEX_040200')`}createIndex(e){const{table:t,column:n}=e;return`CREATE INDEX ${`${t}_${n}`} ON ${t}(${n})`}dropIndex(e,t){return`DROP INDEX ${t}`}showIndex(e,t){return`SELECT 
col.COLUMN_NAME "column_name",col.INDEX_NAME "index_name",idx.UNIQUENESS='UNIQUE' "isUnique"
from ALL_IND_COLUMNS col
join ALL_INDEXES idx on col.index_name = idx.index_name
WHERE col.TABLE_OWNER='${e}'
     and col.TABLE_NAME='${t}';`}variableList(){return"show global VARIABLES"}statusList(){return"show global status"}kill(e){const{SID:t,SERIAL:n}=e;return`ALTER SYSTEM KILL SESSION '${t},${n}' IMMEDIATE;`}processList(){return`SELECT 
        SID, SERIAL# as SERIAL,
        s.username "User", s.schemaname "Schema", 
        s.status "Status", 
        sql.sql_text SQL
        FROM v$session s,
             v$sql     sql
       WHERE sql.sql_id(+) = s.sql_id
         AND s.type     = 'USER'`}addColumn(e,t){return`ALTER TABLE ${e} 
    ADD [column] [type];
COMMENT ON COLUMN ${e}.[column] IS 'comment'`}createUser(){return`CREATE USER $1 IDENTIFIED BY [password$2];
GRANT CONNECT TO $1;
ALTER USER $1 quota unlimited on USERS;
        `}updateUser(e){return`ALTER USER ${e} IDENTIFIED BY [new_password]`}updateColumn(e,t){const{name:n,type:l,comment:a,nullable:r,defaultValue:o}=t;return`-- change column type
ALTER TABLE ${e} MODIFY ${n} ${l};
-- change column name
ALTER TABLE ${e} RENAME COLUMN ${n} TO [newColumnName];
COMMENT ON COLUMN ${e}.${n} IS '${a||""}'`}updateColumnSql(e){const{columnName:t,columnType:n,newColumnName:l,comment:a,defaultValue:r,table:o,isNotNull:i,oldRow:m}=e;return new Y("","").if(n!=m.type,`ALTER TABLE "${o}" MODIFY "${t}" ${n};`).if(i!=m.isNotNull,`
ALTER TABLE "${o}" MODIFY "${t}"${i?"NOT NULL":"NULL"};`).if(r!=null&&r!=m.defaultValue,`
ALTER TABLE "${o}" MODIFY "${t}" DEFAULT ${r!=null&&r.match(/(:|nextval)/i)?r:`'${r==null?void 0:r.replace(/(^'|'$)/g,"")}'`};`).if(a&&a!=m.comment,`
COMMENT ON COLUMN "${o}"."${t}" is '${a}';`).if(t!=l,`
ALTER TABLE "${o}" RENAME COLUMN "${t}" TO "${l}";`).toString()}showUsers(){return'SELECT username "user" FROM all_users'}pingDataBase(e){return e?`ALTER SESSION SET current_schema = "${e}"`:null}updateTable(e){const{table:t,newTableName:n,comment:l,newComment:a}=e;let r="";return a&&a!=l&&(r=`COMMENT ON TABLE "${t}" IS '${a}';`),n&&t!=n&&(r+=`ALTER TABLE "${t}" RENAME TO "${n}"`),r}truncateDatabase(e){return`SELECT 'TRUNCATE TABLE "' || owner || '"."' || object_name || '";' trun FROM all_objects where  owner ='${e}' and object_type ='TABLE'`}createDatabase(e){return"CREATE USER $1 IDENTIFIED BY password$2;"}showViewSource(e,t,n){return n?`select QUERY "Create View" from ALL_MVIEWS where OWNER='${e}' and mview_name='${t}'`:`SELECT DBMS_METADATA.GET_DDL('VIEW', '${t}', '${e}') AS VIEW_DDL FROM DUAL;`}showProcedureSource(e,t){return`SELECT text "Create Procedure"
        FROM all_source
       WHERE owner = '${e}'
         AND name  = '${t}'
       ORDER BY line`}showFunctionSource(e,t){return`SELECT 'CREATE ' || LISTAGG(text) within group( order by line ) "source"
        FROM all_source
       WHERE owner = '${e}'
         AND name  = '${t}'
       ORDER BY line`}showTriggerSource(e,t){return`SELECT text
        FROM all_source
       WHERE owner = '${e}'
         AND name  = '${t}'
       ORDER BY line`}showColumns(e,t){return e?`select
        a.COLUMN_NAME "name",
        a.DATA_DEFAULT "defaultValue",
        a.DATA_PRECISION "precision",
        a.DATA_SCALE "scale",
        a.DATA_TYPE "type",
        COALESCE(a.DATA_PRECISION, a.data_length) "maximum_length",
        a.NULLABLE "nullable"
      from
        all_tab_columns a
      where
        a.owner = '${e}'
        and a.table_name = '${t}'`:`select
a.COLUMN_NAME "name",
a.DATA_DEFAULT "defaultValue",
a.DATA_PRECISION "precision",
a.DATA_SCALE "scale",
a.DATA_TYPE "type",
COALESCE(a.DATA_PRECISION, a.data_length) "maximum_length",
a.NULLABLE "nullable"
from
    user_tab_columns a
where
a.table_name = '${t}'`}showChecks(e,t){return`SELECT
        c.constraint_name "name",
        c.search_condition "clause"
    FROM
        all_constraints c
    WHERE
        c.owner = '${e}' and
        c.table_name = '${t}'
        AND c.constraint_type = 'C';`}showForeignKeys(e,t){let n=`select
        b.CONSTRAINT_NAME "constraint_name",
        b.COLUMN_NAME "column_name",
        c_pk.table_name "referenced_table",
        b_pk.COLUMN_NAME "referenced_column"
    from ALL_CONS_COLUMNS b
        join ALL_CONSTRAINTS c on b.owner=c.owner and b.CONSTRAINT_NAME = c.CONSTRAINT_NAME
        JOIN all_constraints c_pk ON c.r_owner = c_pk.owner AND c.r_constraint_name = c_pk.constraint_name
        join ALL_CONS_COLUMNS b_pk on b_pk.CONSTRAINT_NAME = c_pk.CONSTRAINT_NAME
    where
        b.owner = '${e}' and
        b.table_name = '${t}'
        and c.CONSTRAINT_TYPE = 'R';`;return e||(n=n.replace(/all_/ig,"USER_").replace("b.owner = 'undefined' and","")),n}showTriggers(e,t){const n=t?` AND TABLE_NAME='${t}'`:"";return`SELECT TRIGGER_NAME "trigger_name",TABLE_NAME "table_name",TRIGGERING_EVENT "event" FROM all_triggers WHERE TABLE_OWNER='${e}' ${n} ORDER BY TRIGGER_NAME`}showPackages(e){return`SELECT 
                    object_name "name" ,
                    status "status"
                FROM 
                    ALL_OBJECTS 
                WHERE 
                    OBJECT_TYPE IN ('PACKAGE') 
                    AND owner='${e}' 
                ORDER BY 
                    "name"`}showProcedures(e){return`SELECT 
                    object_name "ROUTINE_NAME" ,
                    status "status"
                FROM 
                    all_objects 
                WHERE 
                    object_type = 'PROCEDURE' 
                    AND owner = '${e}' 
                ORDER BY 
                    "ROUTINE_NAME"`}showFunctions(e){return`SELECT 
                    object_name "ROUTINE_NAME" ,
                    status "status"
                FROM 
                    all_objects 
                WHERE 
                    object_type = 'FUNCTION' 
                    AND owner='${e}' 
                ORDER BY 
                    "ROUTINE_NAME"`}showViews(e,t){return`select object_type "type",object_name "name" from all_objects where object_type = 'VIEW' and owner='${t}' ORDER BY "type","name"`}showMaterialViews(e,t){return`select object_type "type",object_name "name" from all_objects where object_type = 'MATERIALIZED VIEW' and owner='${t}' ORDER BY "type","name"`}buildPageSql(e,t,n){return`SELECT * FROM ${t} WHERE ROWNUM <= ${n}`}showTables(e,t){return`select o.object_name "name", nvl(t.num_rows, -1) "table_rows", c.comments "comment" from all_objects o
        LEFT JOIN all_tables t on o.owner = t.owner and o.object_name = t.table_name
        LEFT JOIN all_tab_comments c on o.owner = c.owner and o.object_name = c.table_name
        where o.owner = '${t}' and o.object_type = 'TABLE' ORDER BY "name"`}showDatabases(){return'select username as "Database" from sys.all_users order by username'}showSchemas(){return'select username as "Database" from sys.all_users order by username'}tableTemplate(){return`CREATE TABLE table_name$1(  
    id NUMBER GENERATED AS IDENTITY PRIMARY KEY,
    create_time DATE,
    name$2 VARCHAR2(255)
);
COMMENT ON TABLE table_name$1 IS '$3';
COMMENT ON COLUMN table_name$1.$2 IS '$4'`}viewTemplate(e){return`CREATE ${e?"MATERIALIZED ":""}VIEW view_name$1
AS
SELECT * FROM $2`}procedureTemplate(){return`CREATE PROCEDURE proc_name$1(x IN OUT NUMBER, y OUT NUMBER)
IS
BEGIN
   $2
   y:=4 * x;
END;`}functionTemplate(){return`CREATE FUNCTION fun_name$1(x IN NUMBER) 
RETURN NUMBER 
BEGIN 
    $2
    RETURN x*2;
END;`}}class mn extends Je{showVersion(){return`SELECT REPLACE(banner,'DM Database Server 64 ','') "server_version"  FROM v$version where rownum=1;`}createIndex(e){const{table:t,column:n="$2"}=e;return`CREATE INDEX ${`${t}_${n}`} ON ${t}(${n});`}dropIndex(e,t){return`DROP INDEX ${t};`}showIndex(e,t){return`SELECT COLUMN_NAME "column_name",INDEX_NAME "index_name" from all_IND_COLUMNS WHERE TABLE_OWNER='${e}' and TABLE_NAME='${t}';`}variableList(){return"show global VARIABLES"}statusList(){return"show global status"}processList(){return"SELECT SESS_ID,STATE,SQL_TEXT FROM v$sessions"}addColumn(e,t){return`ALTER TABLE ${e} 
    ADD COLUMN $1 $2;
COMMENT ON COLUMN ${e}.$3 IS 'comment$4';`}createUser(){return"CREATE USER $1 IDENTIFIED BY [password]$2;"}updateUser(e){return`ALTER USER ${e} IDENTIFIED BY [new_password];`}updateColumn(e,t){const{name:n,type:l,comment:a,nullable:r,defaultValue:o}=t;return`-- change column type
ALTER TABLE ${e} MODIFY ${n} ${l};
-- change column name
ALTER TABLE ${e} RENAME COLUMN ${n} TO [newColumnName];
COMMENT ON COLUMN ${e}.${n} IS '${a||""}';`}updateColumnSql(e){const{columnName:t,columnType:n,newColumnName:l,comment:a,defaultValue:r,table:o,isNotNull:i,oldRow:m}=e;return new Y("","").if(n!=m.type,`ALTER TABLE "${o}" MODIFY "${t}" ${n};`).if(i!=m.isNotNull,`
ALTER TABLE "${o}" MODIFY "${t}"${i?"NOT NULL":"NULL"};`).if(r!=null&&r!=m.defaultValue,`
ALTER TABLE "${o}" MODIFY "${t}" DEFAULT ${r!=null&&r.match(/(:|nextval)/i)?r:`'${r==null?void 0:r.replace(/(^'|'$)/g,"")}'`};`).if(a&&a!=m.comment,`
COMMENT ON COLUMN "${o}"."${t}" is '${a}';`).if(t!=l,`
ALTER TABLE "${o}" RENAME COLUMN "${t}" TO "${l}";`).toString()}showUsers(){return'SELECT username "user" FROM all_users'}pingDataBase(e){return e?`set SCHEMA ${e}`:null}updateTable(e){const{table:t,newTableName:n,comment:l,newComment:a}=e;let r="";return a&&a!=l&&(r=`COMMENT ON TABLE "${t}" IS '${a}';`),n&&t!=n&&(r+=`ALTER TABLE "${t}" RENAME TO "${n}"`),r}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE \`',table_schema,'\`.\`',TABLE_NAME, '\`;') trun FROM INFORMATION_SCHEMA.TABLES where  table_schema ='${e}' and TABLE_TYPE<>'VIEW';`}createDatabase(e){return"CREATE USER [name] IDENTIFIED BY [password];"}showViewSource(e,t){return`CALL SP_VIEWDEF('${e}', '${t}');`}showProcedureSource(e,t){return`SELECT LISTAGG(text) within group(order by line) "Create Procedure"
        FROM all_source
       WHERE owner = '${e}'
         AND name  = '${t}'
       ORDER BY line`}showFunctionSource(e,t){return`select DBMS_METADATA.GET_DDL('FUNCTION', '${t}','${e}') "Create Function";`}showColumns(e,t){return`select
        a.COLUMN_NAME "name",
        a.DATA_DEFAULT "defaultValue",
        a.DATA_TYPE "type",
        a.DATA_PRECISION "precision",
        a.DATA_SCALE "scale",
        a.data_length "maximum_length",
        a.NULLABLE "nullable",
        c.CONSTRAINT_TYPE "key",
        cc.COMMENTS "comment",
        sc."INFO2" "extra"
      from
        all_tab_columns a
        left join all_col_comments cc on a.COLUMN_NAME=cc.COLUMN_NAME and a.OWNER=cc.SCHEMA_NAME and a.table_name=cc.table_name
        left join ALL_CONS_COLUMNS b on a.COLUMN_NAME=b.COLUMN_NAME and a.OWNER=b.OWNER and a.table_name=b.table_name
        left join all_CONSTRAINTS c on b.CONSTRAINT_NAME=c.CONSTRAINT_NAME
        left join sys.syscolumns sc on sc.id = (
            SELECT OBJECT_ID
                FROM all_objects t
                WHERE t.owner =a.OWNER
                AND t.object_name = a.table_name
                AND t.OBJECT_TYPE='TABLE'
        ) and sc."NAME"=a.COLUMN_NAME
      where
        a.owner = '${e}'
        and a.table_name = '${t}';`}showProcedures(e){return`select object_name "ROUTINE_NAME" from all_objects where object_type = 'PROCEDURE' and owner='${e}' ORDER BY "ROUTINE_NAME";`}showFunctions(e){return`select object_name "ROUTINE_NAME" from all_objects where object_type = 'FUNCTION' and owner='${e}' ORDER BY "ROUTINE_NAME";`}showViews(e){return`select object_name "name" from all_objects where object_type = 'VIEW' and owner='${e}';`}buildPageSql(e,t,n){return`SELECT * FROM ${t} LIMIT ${n};`}showTables(e,t){return`SELECT a.object_name "name",b.COMMENTS "comment" from all_objects a
join ALL_TAB_COMMENTS b on a.OWNER=b.OWNER and a.object_name=b.TABLE_NAME
where a.object_type = 'TABLE' and a.owner='${t}' and a.TEMPORARY<>'Y';`}showDatabases(){return`select object_name "Database" from all_objects where object_type = 'SCH';`}showSchemas(){return`select object_name "Database" from all_objects where object_type = 'SCH';`}tableTemplate(){return`CREATE TABLE table_name$1(  
    id int NOT NULL PRIMARY KEY IDENTITY(1,1),
    create_time DATETIME,
    name$2 VARCHAR(255)
);
COMMENT ON TABLE $1 IS '$3';
COMMENT ON COLUMN $1.$2 IS '$4';`}viewTemplate(){return`CREATE VIEW view_name$1
AS
SELECT * FROM $2`}procedureTemplate(){return`CREATE PROCEDURE proc_name$1(x IN OUT NUMBER, y OUT NUMBER)
IS
BEGIN
   $2
   y:=4 * x;
END;`}functionTemplate(){return`CREATE FUNCTION fun_name$1(x IN int) RETURN int$2
AS
BEGIN
    $3
    return x*2;
END;`}}class Ue extends Ee{showVersion(){return"select @@version server_version;"}showAllForeignKeys(){return`SELECT 
        CONSTRAINT_NAME constraint_name,
        TABLE_SCHEMA table_schema,
        TABLE_NAME table_name,
        COLUMN_NAME column_name,
        REFERENCED_TABLE_SCHEMA referenced_schema,
        REFERENCED_TABLE_NAME referenced_table,
        REFERENCED_COLUMN_NAME referenced_column
         FROM information_schema.KEY_COLUMN_USAGE 
         WHERE REFERENCED_TABLE_NAME is not null`}createIndex(e){let t=`${e.type||"key"}`;return t.match(/BTREE/i)&&(t="key"),`ALTER TABLE ${e.table} ADD ${t} (\`${e.column||"$1"}\`)`}dropIndex(e,t){return`ALTER TABLE ${e} DROP INDEX \`${t}\``}showIndex(e,t){return`SELECT column_name "column_name",index_name "index_name",index_type "index_type",non_unique=0 "isUnique" FROM INFORMATION_SCHEMA.STATISTICS WHERE table_schema='${e}' and table_name='${t}';`}variableList(){return"show global VARIABLES"}statusList(){return"show global status"}kill(e){return`KILL ${e==null?void 0:e.ID};`}processList(){return"SELECT ID, USER User, DB, COMMAND Command, STATE State, TIME Time, INFO `SQL`\nFROM information_schema.PROCESSLIST;"}addColumn(e,t){const n=t?` AFTER \`${t}\``:"";return`ALTER TABLE ${e} 
    ADD COLUMN $1 [type]$2 COMMENT '$3'${n};`}createUser(){return`CREATE USER '$1'@'%' IDENTIFIED BY 'password$2';
-- Grant select privilege to all databases;
GRANT SELECT ON *.* TO '$1'@'%' WITH GRANT OPTION;
-- Grant all privileges to all databases;
GRANT ALL PRIVILEGES ON *.* TO '$1'@'%' WITH GRANT OPTION;`}updateUser(e){return`update mysql.user set 
    password = PASSWORD("newPassword")
    where User = '${e}';
FLUSH PRIVILEGES;
-- since mysql version 5.7, password column need change to authentication_string=PASSWORD("newPassword")`}updateColumn(e,t){var a,r;const{nullable:n,extra:l}=t;return this.updateColumnSql({table:e,...t,isNotNull:n!="YES",isAutoIncrement:(r=(a=l==null?void 0:l.toLowerCase())==null?void 0:a.includes)==null?void 0:r.call(a,"auto_increment")})}updateColumnSql(e){const{table:t,tableMeta:n,name:l,columnName:a=l,type:r,unsigned:o,zerofill:i,useCurrentTimestamp:m,isNotNull:O,isAutoIncrement:p,comment:N,defaultValue:B,character_set_name:A,collation_name:C}=e,I=r.match(/char|text|set|enum|blob|binary/i)&&(n==null?void 0:n.collation)!=C;return new Y(`ALTER TABLE \`${t}\``).append(`
	CHANGE \`${a}\` \`${l}\` ${r}`).if(o=="1","UNSIGNED").if(i=="1","ZEROFILL").if(m,"ON UPDATE CURRENT_TIMESTAMP").if(I&&A,`CHARACTER SET ${A}`).if(I&&C,`COLLATE ${C}`).if(O,"NOT NULL").if(p,"AUTO_INCREMENT").if(N,`COMMENT '${N}'`).if(Q(B)&&!O,"DEFAULT NULL").if(!Q(B),`DEFAULT ${B=="CURRENT_TIMESTAMP"?B:`${le(B,r)}`}`).append(";").toString()}showCollations(){return'select DEFAULT_COLLATE_NAME "name",CHARACTER_SET_NAME "charset",DESCRIPTION "description" from information_schema.CHARACTER_SETS ORDER BY name;'}showChecks(e,t){return`SELECT
        tc.CONSTRAINT_NAME "name",
        cc.CHECK_CLAUSE "clause"
    FROM
        information_schema.CHECK_CONSTRAINTS AS cc,
        information_schema.TABLE_CONSTRAINTS AS tc
    WHERE
        tc.CONSTRAINT_SCHEMA = '${e}'
        AND tc.TABLE_NAME = '${t}'
        AND tc.CONSTRAINT_TYPE = 'CHECK'
        AND tc.CONSTRAINT_SCHEMA = cc.CONSTRAINT_SCHEMA
        AND tc.CONSTRAINT_NAME = cc.CONSTRAINT_NAME;`}showUsers(){return"SELECT user user,host host FROM mysql.user;"}pingDataBase(e){return e?`use \`${e}\``:null}updateTable(e){const{table:t,newTableName:n,comment:l,newComment:a,collation:r,newCollation:o}=e;let i="";return a&&a!=l&&(i=`ALTER TABLE \`${t}\` COMMENT = '${a}';`),o&&o!=r&&(i+=`ALTER TABLE \`${t}\` collate = '${o}';`),n&&t!=n&&(i+=`ALTER TABLE \`${t}\` RENAME TO \`${n}\`;`),i}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE \`',table_schema,'\`.\`',TABLE_NAME, '\`;') trun FROM INFORMATION_SCHEMA.TABLES where  table_schema ='${e}' and TABLE_TYPE<>'VIEW';`}createDatabase(e){return`CREATE DATABASE $1
    DEFAULT CHARACTER SET = 'utf8mb4';`}showTableSource(e,t){return`SHOW CREATE TABLE \`${e}\`.\`${t}\`;`}showPartitions(e,t){return`SELECT 
PARTITION_NAME "name",PARTITION_METHOD "strategy",PARTITION_EXPRESSION "columnName",
PARTITION_DESCRIPTION "value",TABLE_ROWS "rows",DATA_LENGTH "length"
        FROM information_schema.partitions WHERE TABLE_SCHEMA='${e}' AND TABLE_NAME = '${t}' AND PARTITION_NAME IS NOT NULL`}showViewSource(e,t){return`SHOW CREATE VIEW  \`${e}\`.\`${t}\`;`}showProcedureSource(e,t){return`SHOW CREATE PROCEDURE \`${e}\`.\`${t}\`;`}showFunctionSource(e,t){return`SHOW CREATE FUNCTION \`${e}\`.\`${t}\`;`}showTriggerSource(e,t){return`SHOW CREATE TRIGGER \`${e}\`.\`${t}\`;`}showColumns(e,t){return`SELECT 
        c.COLUMN_NAME name,
        COLUMN_TYPE type,
        COLUMN_COMMENT comment,COLUMN_KEY \`key\`,IS_NULLABLE nullable,
        CHARACTER_MAXIMUM_LENGTH maximum_length,
        COLUMN_DEFAULT defaultValue,
        INSTR(COLUMN_TYPE,'zerofill')>0 "zerofill",
        INSTR(COLUMN_TYPE,'unsigned')>0 "unsigned",
        EXTRA extra,
        COLLATION_NAME collation_name,
        CHARACTER_SET_NAME character_set_name 
        FROM information_schema.columns c
        WHERE c.table_schema = '${e}' AND c.table_name = '${t}' 
        ORDER BY c.ORDINAL_POSITION;`}showForeignKeys(e,t){return`SELECT
        c.COLUMN_NAME column_name, ik.CONSTRAINT_NAME constraint_name,
        ik.REFERENCED_TABLE_NAME referenced_table, ik.REFERENCED_COLUMN_NAME referenced_column,
        UPDATE_RULE "updateRule",
        DELETE_RULE "deleteRule"
        FROM
        information_schema.columns c join information_schema.KEY_COLUMN_USAGE ik on c.table_schema = ik.TABLE_SCHEMA
        and c.table_name = ik.TABLE_NAME and c.COLUMN_NAME = ik.COLUMN_NAME
        JOIN information_schema.REFERENTIAL_CONSTRAINTS ir on ik.CONSTRAINT_NAME=ir.CONSTRAINT_NAME
        WHERE c.table_schema = '${e}' and c.table_name = '${t}' ORDER BY ik.CONSTRAINT_NAME;`}showTriggers(e,t){const n=t?` AND EVENT_OBJECT_TABLE='${t}'`:"";return`SELECT 
                    EVENT_OBJECT_TABLE table_name,
                    TRIGGER_NAME "trigger_name",
                    ACTION_TIMING timing,
                    EVENT_MANIPULATION event,
                    EVENT_MANIPULATION manipulation,
                    ACTION_ORIENTATION orientation,
                    ACTION_STATEMENT statement
                FROM 
                    information_schema.TRIGGERS 
                WHERE 
                    TRIGGER_SCHEMA = '${e}' 
                    ${n} 
                ORDER BY 
                    TRIGGER_NAME;`}showProcedures(e){return`SELECT 
    r.ROUTINE_NAME "name",
    p.PARAMETER_NAME "param_name",
    p.DATA_TYPE "param_type",
    p.PARAMETER_MODE "param_mode"
FROM 
    information_schema.routines r
LEFT JOIN 
    information_schema.parameters p 
ON 
    r.SPECIFIC_NAME = p.SPECIFIC_NAME
WHERE
    r.ROUTINE_SCHEMA = '${e}'
    AND r.ROUTINE_TYPE = 'PROCEDURE'
ORDER BY 
    r.ROUTINE_NAME, p.ORDINAL_POSITION;`}showFunctions(e){return`SELECT 
        ROUTINE_NAME "name",
        p.PARAMETER_NAME "param_name",
        p.DATA_TYPE "param_type",
        p.PARAMETER_MODE "param_mode"
    FROM 
        information_schema.routines  r
    LEFT JOIN 
        information_schema.parameters p 
    ON 
        r.SPECIFIC_NAME = p.SPECIFIC_NAME
    WHERE 
        r.ROUTINE_SCHEMA = '${e}' 
        AND r.ROUTINE_TYPE = 'FUNCTION' 
    ORDER BY 
        r.ROUTINE_NAME;`}showViews(e){return`SELECT TABLE_NAME name,SECURITY_TYPE "view_group" FROM information_schema.VIEWS  WHERE TABLE_SCHEMA = '${e}' ORDER BY TABLE_NAME`}buildPageSql(e,t,n){return`SELECT * FROM ${t} LIMIT ${n};`}showTables(e){return`SELECT TABLE_COMMENT "comment",TABLE_NAME "name",TABLE_ROWS "table_rows",\`AUTO_INCREMENT\` "auto_increment",
        row_format "row_format",DATA_LENGTH "data_length",INDEX_LENGTH "index_length",TABLE_COLLATION "collation",
        TABLE_TYPE "view_group",\`ENGINE\` engine
        FROM information_schema.TABLES  WHERE TABLE_SCHEMA = '${e}' and TABLE_TYPE<>'VIEW' ORDER BY TABLE_NAME;`}showDatabases(){return"show DATABASES"}showSchemas(){return this.showDatabases()}tableTemplate(){return`CREATE TABLE table_name$1(  
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    create_time DATETIME COMMENT 'Create Time',
    name$2 VARCHAR(255)
) COMMENT '$4';`}viewTemplate(){return`CREATE VIEW view_name$1
AS
SELECT * FROM $2`}procedureTemplate(){return`CREATE PROCEDURE proc_name$1()
BEGIN
$2
END;`}functionTemplate(){return`CREATE FUNCTION fun_name$1() RETURNS int$2
READS SQL DATA
BEGIN
    $3
    return 0;
END;`}}class Tn extends Ue{showVersion(){return"select replace(@@version,'-MariaDB','') server_version;"}}class _n extends Pe{showVersion(){return"show version"}showDatabases(){return"show dbs"}buildPageSql(e,t,n){return`db('${e}').collection('${t}').find({}).limit(${n}).toArray()`}showIndex(e,t){return`db('${e}').collection('${t}').indexes();`}createIndex(e){const{database:t,table:n,column:l}=e;return`db('${t}').collection('${n}').createIndex({ ${l||"column_name"}: 1 });`}createDatabase(e){return'db("db_name").createCollection("collection")'}}class dn extends Ee{showVersion(){return"SELECT CAST(SERVERPROPERTY('ProductVersion') AS SYSNAME)+' '+CAST(SERVERPROPERTY('Edition') AS SYSNAME) AS server_version"}showAllForeignKeys(){return`SELECT 
    OBJECT_SCHEMA_NAME(fk.parent_object_id) AS table_schema,
    OBJECT_NAME(fk.parent_object_id) AS table_name,
    COL_NAME(fc.parent_object_id, fc.parent_column_id) AS column_name,
    OBJECT_SCHEMA_NAME(fk.referenced_object_id) AS referenced_schema,
    OBJECT_NAME(fk.referenced_object_id) AS referenced_table,
    COL_NAME(fc.referenced_object_id, fc.referenced_column_id) AS referenced_column
FROM 
    sys.foreign_keys fk
JOIN 
    sys.foreign_key_columns fc ON fk.object_id = fc.constraint_object_id`}showAllComments(){return`SELECT 
        s.name table_schema,
        t.name AS table_name,
        c2.name AS column_name,
        prop.value AS comment
        FROM 
           sys.columns c2 
                join sys.tables t on c2.object_id=t.object_id
                join sys.schemas s on t.schema_id=s.schema_id 
                join sys.extended_properties prop ON prop.major_id = c2.object_id AND prop.minor_id = c2.column_id`}createIndex(e){return`ALTER TABLE ${e.table} ADD ${e.type} (${e.column})`}dropIndex(e,t){return`DROP INDEX ${e}.${t}`}showIndex(e,t){return`SELECT
        index_name = ind.name,
        column_name = col.name,
        ind.is_primary_key "isPrimary",
        ind.is_unique "isUnique",
        ind.is_unique_constraint,
        CASE 
            WHEN ind.is_primary_key=1 THEN 'PRIMARY'
            WHEN ind.is_unique=1 THEN 'UNIQUE'
            WHEN ind.is_unique_constraint=1 THEN 'UNIQUE'
        ELSE 'INDEX' END index_type
      FROM
        sys.indexes ind
        INNER JOIN sys.index_columns ic ON ind.object_id = ic.object_id
        and ind.index_id = ic.index_id
        INNER JOIN sys.columns col ON ic.object_id = col.object_id
        and ic.column_id = col.column_id
        INNER JOIN sys.tables t ON ind.object_id = t.object_id
      WHERE
        t.name = '${t}';`}variableList(){throw new Error("Method not implemented.")}statusList(){throw new Error("Method not implemented.")}kill(e){return`kill ${e.ID};`}processList(){return`SELECT
    s.session_id "ID",
    s.login_name "User",
    s.program_name "Client",
    r.status "Status",
    r.wait_time "Wait Time",
    d.text "SQL"
FROM sys.dm_exec_sessions s
LEFT JOIN sys.dm_exec_requests r ON s.session_id = r.session_id
Outer APPLY sys.dm_exec_sql_text(sql_handle) d
WHERE s.is_user_process = 1;`}addColumn(e,t){return`ALTER TABLE ${e} 
    ADD $1 [type]$2;`}createUser(){return`CREATE LOGIN loginName$1 WITH PASSWORD = 'password$2';
-- user master[YourDatabaseName]
CREATE USER userName$3 FOR LOGIN loginName$1;
ALTER ROLE db_datareader ADD MEMBER userName$3;
ALTER ROLE db_datawriter ADD MEMBER userName$3;
-- ALTER ROLE db_ddladmin ADD MEMBER userName$3;`}updateColumn(e,t){const{name:n,type:l,comment:a,nullable:r,defaultValue:o}=t,i=r=="YES"?"NULL":"NOT NULL";return`-- change column type
ALTER TABLE ${e} 
    ALTER COLUMN ${n} ${l} ${i};
-- change column name
EXEC sp_rename '${e}.${n}', '${n}', 'COLUMN';`}updateColumnSql(e){const{columnName:t,columnType:n,newColumnName:l,comment:a,oldRow:r,isNotNull:o,schema:i,table:m}=e,O=o?"NOT NULL":"NULL";return new Y(`ALTER TABLE "${i}"."${m}" ALTER COLUMN ${t} ${n} ${O};`,`
`).if(t!=l,()=>`EXEC sp_rename '${i}.${m}.${t}' , '${l}', 'COLUMN';`).if(a!=r.comment,()=>`EXEC ${r.comment?"sp_updateextendedproperty":"sp_addextendedproperty"} 
@level0type = N'Schema', @level0name = '${i}',
@level1type = N'Table', @level1name = '${m}', 
@level2type = N'Column', @level2name = '${l}',
@name = N'MS_Description', @value = N'${a}';`).toString()}showUsers(){return"SELECT name [user] from sys.database_principals where type='S'"}updateTable(e){const{schema:t,table:n,newTableName:l,comment:a,newComment:r}=e;let o="";return r&&r!=a&&(o=`EXEC ${a?"sp_updateextendedproperty":"sp_addextendedproperty"} 
@level0type = N'Schema', @level0name = '${t}',
@level1type = N'Table', @level1name = '${n}', 
@name = N'MS_Description', @value = N'${r}';`),l&&n!=l&&(o+=`sp_rename '${n}', '${l}';`),o}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE [',table_schema,'].[',TABLE_NAME, '];') trun FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE'  AND TABLE_SCHEMA='${e}'`}createDatabase(e){return`create database ${e||"[name]"}`}showViewSource(e,t){return`SELECT definition 'Create View' FROM sys.sql_modules WHERE object_id = OBJECT_ID('${e}.${t}');`}showProcedureSource(e,t){return`SELECT definition 'Create Procedure','${e}.${t}' "Procedure" FROM sys.sql_modules WHERE object_id = OBJECT_ID('${e}.${t}');`}showFunctionSource(e,t){return`SELECT definition 'Create Function','${e}.${t}' "Function" FROM sys.sql_modules WHERE object_id = OBJECT_ID('${e}.${t}');`}showTriggerSource(e,t){return`SELECT definition 'SQL Original Statement','${e}.${t}' "Trigger" FROM sys.sql_modules WHERE object_id = OBJECT_ID('${e}.${t}');`}showColumns(e,t){return["information_schema","sys"].includes(e==null?void 0:e.toLowerCase())?`SELECT
            name,
            type_name(system_type_id) "type",
            is_nullable nullable,
            max_length "maximum_length"
        FROM
            sys.all_columns
        WHERE
            object_id = OBJECT_ID('${e}.${t}') ;`:`SELECT 
               c.COLUMN_NAME "name",
               DATA_TYPE "type",
               numeric_precision "precision",
               numeric_scale "scale",
               IS_NULLABLE nullable, CHARACTER_MAXIMUM_LENGTH "maximum_length", COLUMN_DEFAULT "defaultValue", '' "comment", tc.constraint_type "key",
               COLUMNPROPERTY(object_id('${e}.${t}'), c.COLUMN_NAME, 'IsIdentity') extra
               FROM
               INFORMATION_SCHEMA.COLUMNS c
               left join  INFORMATION_SCHEMA.CONSTRAINT_COLUMN_USAGE ccu
               on c.COLUMN_NAME=ccu.column_name and c.table_name=ccu.table_name and ccu.TABLE_SCHEMA=c.TABLE_SCHEMA
               left join  INFORMATION_SCHEMA.TABLE_CONSTRAINTS tc
               on tc.constraint_name=ccu.constraint_name
               and tc.TABLE_SCHEMA=c.TABLE_SCHEMA and tc.table_name=c.table_name WHERE c.TABLE_SCHEMA = '${e}' AND c.table_name = '${t}' ORDER BY ORDINAL_POSITION`}showChecks(e,t){return`SELECT
        tc.CONSTRAINT_NAME "name",
        cc.CHECK_CLAUSE "clause"
    FROM
        "INFORMATION_SCHEMA"."CHECK_CONSTRAINTS" AS cc,
        "INFORMATION_SCHEMA"."TABLE_CONSTRAINTS" AS tc
    WHERE
        tc.CONSTRAINT_SCHEMA = '${e}'
        AND tc.TABLE_NAME = '${t}'
        AND tc.CONSTRAINT_TYPE = 'CHECK'
        AND tc.CONSTRAINT_SCHEMA = cc.CONSTRAINT_SCHEMA
        AND tc.CONSTRAINT_NAME = cc.CONSTRAINT_NAME;`}showForeignKeys(e,t){return`SELECT
        f.name AS "constraint_name",
        COL_NAME( fkc.parent_object_id, fkc.parent_column_id ) AS "column_name",
        OBJECT_NAME (fkc.referenced_object_id) AS "referenced_table",
        COL_NAME( fkc.referenced_object_id, fkc.referenced_column_id )  AS "referenced_column",
        update_referential_action_desc "updateRule",
        delete_referential_action_desc "deleteRule"
    FROM
        sys.foreign_key_columns fkc
        JOIN sys.foreign_keys f ON f.object_id = fkc.constraint_object_id
        JOIN sys.tables tab1 ON tab1.object_id = fkc.parent_object_id and tab1.name='${t}' and SCHEMA_NAME(tab1.schema_id)='${e}'
    ;`}showTriggers(e,t){const n=t?` AND tb.name='${t}'`:"";return`SELECT 
                tr.name AS trigger_name, 
                tb.name AS table_name,
                'Statement' AS orientation,
                OBJECT_DEFINITION(tr.object_id) AS source
            FROM 
                sys.triggers tr
                INNER JOIN sys.tables tb ON tr.parent_id = tb.object_id
                INNER JOIN sys.schemas sc ON tb.schema_id = sc.schema_id
            WHERE 
                tr.is_ms_shipped = 0
                AND sc.name = '${e}' ${n}`}showProcedures(e){return`SELECT ROUTINE_NAME FROM INFORMATION_SCHEMA.ROUTINES WHERE SPECIFIC_SCHEMA = '${e}' and ROUTINE_TYPE='PROCEDURE' ORDER BY ROUTINE_NAME`}showFunctions(e){return`SELECT ROUTINE_NAME FROM INFORMATION_SCHEMA.ROUTINES WHERE SPECIFIC_SCHEMA = '${e}' and ROUTINE_TYPE='FUNCTION' ORDER BY ROUTINE_NAME`}showViews(e,t){return`SELECT name FROM sys.all_views t where SCHEMA_NAME(t.schema_id)='${t}' order by name`}buildPageSql(e,t,n){return`SELECT TOP ${n} * FROM ${t};`}showTables(e,t,n){const{showRowCount:l}=n??{};return`SELECT t.name AS 'name', ep.value AS 'comment'
        ${l?", ds.row_count 'table_rows'":""}
FROM sys.tables t
    LEFT JOIN sys.extended_properties ep ON ep.major_id = t.object_id
    AND ep.minor_id = 0 AND ep.name = 'MS_Description'
    ${l?`LEFT JOIN sys.dm_db_partition_stats ds on ds.object_id = object_id('${t}.'+ t.name)
    and ds.index_id IN (0, 1)`:""}
WHERE
    t.schema_id = SCHEMA_ID('${t}') ORDER BY t.name;`}showDatabases(){return"SELECT name 'Database' FROM sys.databases"}showSchemas(){return"SELECT SCHEMA_NAME [schema] FROM INFORMATION_SCHEMA.SCHEMATA"}tableTemplate(e){return`CREATE TABLE ${(e=="dbo"?"":`${e}.`)+"table_name"}$1(  
    id int IDENTITY(1,1) primary key,
    create_time DATETIME,
    update_time DATETIME,
    content$2 NVARCHAR(255)
);
EXECUTE sp_addextendedproperty N'MS_Description', '[table_comment]', N'user', N'dbo', N'table', N'[table_name]', NULL, NULL;
EXECUTE sp_addextendedproperty N'MS_Description', '[column_comment]', N'user', N'dbo', N'table', N'[table_name]', N'column', N'[column_name]';
`}viewTemplate(){return`CREATE VIEW dbo.view_name$1
AS
SELECT * FROM 
GO`}procedureTemplate(){return`CREATE PROCEDURE dbo.procedure_name$1
AS
BEGIN
    $2
END;`}functionTemplate(){return`CREATE FUNCTION dbo.function_name$1() RETURNS [TYPE]
BEGIN
    $2
    return [value];
END;`}triggerTemplate(e){return`CREATE TRIGGER trigger_name$1
ON ${e??"[table_name]$2"}
[FOR/AFTER] INSERT
AS
BEGIN
    $3
END;`}}class An extends Pe{showVersion(){return"call dbms.components() yield name, versions, edition unwind versions as server_version return server_version;"}showDatabases(){return"SHOW DATABASES yield name AS Database"}showSchemas(){return this.showDatabases()}showTables(e){return"call db.labels() yield label as name RETURN name ORDER BY toLower(name)"}addColumn(e,t){return`MATCH (n:${e}) WHERE id(n) = 1 SET n.name = 'name' RETURN n`}showColumns(e,t){return`MATCH(n:\`${t}\`) UNWIND keys(n) AS name RETURN DISTINCT name`}showIndex(e,t){return`show indexes yield name as index_name, properties as column_name, type as index_type, labelsOrTypes where '${t}' in labelsOrTypes`}showViews(e){return"call db.relationshipTypes() yield relationshipType AS name RETURN name ORDER BY toLower(name)"}showUsers(){return"SHOW USERS"}createUser(){return`CREATE USER [name] IF NOT EXISTS 
    SET PASSWORD 'password';`}buildPageSql(e,t,n){return`MATCH (n${t=="*"?"":`:${t}`}) RETURN n LIMIT ${n}`}createDatabase(e){return"CREATE DATABASE $1"}tableTemplate(){return"CREATE (n:node {id:1}) return n;"}createIndex(e){return`CREATE INDEX FOR (n:${e.table}) ON (n.id)`}dropIndex(e,t){return`DROP INDEX \`${t}\``}viewTemplate(){return"MATCH (n1:node {id:1}), (n2:node {id:2}) CREATE (n1)-[r:TO]->(n2) RETURN type(r)"}}class ze extends ge{defaultPart(){var O,p;const{oldRow:e,isAutoIncrement:t,defaultValue:n,columnType:l}=this.param,a=(O=n==null?void 0:n.match)==null?void 0:O.call(n,/\bnextval\b/);if(t&&!e.isAutoIncrement&&!a)return`${this.afterColumnPrefix} ADD GENERATED ALWAYS AS IDENTITY;`;if(!t&&e.isAutoIncrement&&!a)return`${this.afterColumnPrefix} DROP IDENTITY;`;if(!t&&e.isAutoIncrement&&a)return`${this.afterColumnPrefix} DROP DEFAULT;`;if(e.defaultValue==n)return"";const m=(p=n==null?void 0:n.match)!=null&&p.call(n,/\bnextval\b/)?n:le(n,l);return`${this.afterColumnPrefix} ${Q(n)?"DROP DEFAULT":`SET DEFAULT ${m}`};`}commentPart(){const{oldRow:e,table:t,columnName:n,comment:l}=this.param;if(l!=e.comment)return`COMMENT ON COLUMN "${t}"."${n}" is '${l}';`}}class Ze extends Ee{showVersion(){return"SHOW server_version;"}createIndex(e){const t=e.name??`${e.column||"[column]"}`,n=e.indexType||"btree";return`CREATE INDEX ${t}_${new Date().getTime()}_index ON 
    ${e.table} USING ${n} ("${e.column||"[column]"}");`}dropIndex(e,t){return`DROP INDEX "${t}"`}showIndex(e,t){return`select
    t.relname as table_name,
    i.relname as index_name,
    a.attname as column_name,
    ix.indisprimary "isPrimary",
    ix.indisunique "isUnique",
    CASE ix.indisprimary
        WHEN true THEN 'PRIMARY'
    ELSE CASE ix.indisunique
        WHEN true THEN 'UNIQUE'
    ELSE 'KEY'
    END
    END AS index_type,
    am.amname index_method
  from
    pg_class t
    join pg_catalog.pg_namespace pgn ON pgn.oid=t.relnamespace and pgn.nspname='${e}'
    join pg_index ix on t.oid = ix.indrelid
    join pg_attribute a on t.oid = a.attrelid and a.attnum = ANY(string_to_array(textin(int2vectorout(ix.indkey)),' ')::int[])
    join pg_class i on ix.indexrelid = i.oid
    JOIN pg_am am ON am.oid=i.relam
  where
     t.relkind = 'r'
    and t.relname = '${t}'
  order by
    ix.indexrelid;`}variableList(){return"SHOW ALL"}statusList(){return`SELECT
        'db_numbackends' AS db,
        pg_stat_get_db_numbackends(datid) AS status
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_xact_commit',
        pg_stat_get_db_xact_commit(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_xact_rollback',
        pg_stat_get_db_xact_rollback(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_blocks_fetched',
        pg_stat_get_db_blocks_fetched(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_blocks_hit',
        pg_stat_get_db_blocks_hit(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()`}kill(e){return`SELECT pg_terminate_backend(${e.ID})`}processList(){return`SELECT
        a.pid AS "ID",
        query_start AS "Time",
        datname AS "db",
        CASE
        WHEN c.relname IS NOT NULL THEN c.relname
        ELSE l.virtualtransaction
        END AS "Target",
        l.mode AS "State",
        query AS "SQL"
      FROM
        pg_stat_activity a
        LEFT JOIN pg_locks l ON a.pid = l.pid
        LEFT JOIN pg_class c ON l.relation = c.oid
      ORDER BY
        a.pid ASC,
        c.relname ASC`}addColumn(e,t){return`ALTER TABLE ${e} 
  ADD COLUMN [column] [type];
COMMENT ON COLUMN ${e}.[column] IS 'comment';`}createUser(){return`CREATE USER $1 WITH PASSWORD 'password$2';
-- Grant select privilege;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO $1;
-- Grant all privileges;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO $1;`}updateUser(e){return`ALTER USER ${e} WITH PASSWORD 'new_password';`}updateColumn(e,t){const{name:n,type:l,comment:a,nullable:r,defaultValue:o}=t;return`-- change column type
ALTER TABLE ${e} 
    ALTER COLUMN ${n} TYPE ${l};
-- change column name
ALTER TABLE ${e} 
    RENAME COLUMN ${n} TO ${n};
-- Change column comment
COMMENT ON COLUMN ${e}.${n} IS '${a||"comment"}';`}updateColumnSql(e){return new ze(e).genAlterSQL()}showUsers(){return'SELECT usename "user" from pg_user '}showAllForeignKeys(){return`SELECT
      refc.constraint_name "constraint_name",
      refc.constraint_schema "table_schema",
      kcu.table_name "table_name",
      kcu.column_name AS "column_name",
      ccu.table_name AS "referenced_table",
      ccu.column_name AS "referenced_column"
  FROM
      information_schema.referential_constraints AS refc,
      information_schema.key_column_usage AS kcu,
      information_schema.constraint_column_usage AS ccu
  WHERE
      refc.constraint_name = kcu.constraint_name
      AND refc.constraint_schema = kcu.table_schema
      AND ccu.constraint_name = refc.constraint_name;`}showForeignKeys(e,t){return`SELECT
      refc.constraint_name constraint_name,
      kcu.column_name AS column_name,
      ccu.table_name AS referenced_table,
      ccu.column_name AS referenced_column,
      kcu.ordinal_position AS ord_position,
      refc.update_rule "updateRule",
      refc.delete_rule "deleteRule"
  FROM
      information_schema.referential_constraints AS refc,
      information_schema.key_column_usage AS kcu,
      information_schema.constraint_column_usage AS ccu
  WHERE
      refc.constraint_schema = '${e}'
      AND refc.constraint_name = kcu.constraint_name
      AND refc.constraint_schema = kcu.table_schema
      AND ccu.constraint_name = refc.constraint_name
      AND kcu.table_name = '${t}'
  ORDER BY ord_position;`}pingDataBase(e){return e?`set search_path to '${e}';`:null}updateTable(e){const{table:t,newTableName:n,comment:l,newComment:a}=e;let r="";return a&&a!=l&&(r=`COMMENT ON TABLE "${t}" IS '${a}';`),n&&t!=n&&(r+=`ALTER TABLE "${t}" RENAME TO "${n}";`),r}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE "',TABLE_NAME, '";') trun FROM INFORMATION_SCHEMA.TABLES WHERE  table_schema ='${e}' AND table_type='BASE TABLE';`}createDatabase(e){return"CREATE DATABASE $1"}showViewSource(e,t,n){return n?`SELECT CONCAT('CREATE MATERIALIZED VIEW ',matviewname,'
AS
(',regexp_replace(definition,';$',''),')') "Create View"
    ,matviewname "table_name",'definition' "view_definition" from pg_matviews
    WHERE schemaname='${e}' and matviewname='${t}';`:`SELECT CONCAT('CREATE VIEW ',table_name,'
AS
(',regexp_replace(view_definition,';$',''),')') "Create View"
    ,table_name,view_definition from information_schema.views 
    where table_schema='${e}' and table_name='${t}'`}showMaterialViewSource(e,t){return`SELECT CONCAT('CREATE MATERIALIZED VIEW ',matviewname,'
AS
(',regexp_replace(definition,';$',''),')') "Create View"
    ,matviewname "table_name",'definition' "view_definition" from pg_matviews
    WHERE schemaname='${e}' and matviewname='${t}';`}showProcedureSource(e,t){return`select pg_get_functiondef('${e}.${t}' :: regproc) "Create Procedure",'${t}' "Procedure";`}showTriggerSource(e,t){return`select pg_get_triggerdef(oid) "SQL Original Statement",'${e}.${t}' "Trigger" from pg_trigger where tgname = '${t}';`}showColumns(e,t,n){return`SELECT 
          ${n?"c.*,":""}
          c.COLUMN_NAME "name", 
          atttypid::regtype AS pg_reg_type,
          DATA_TYPE "type",
          IS_NULLABLE nullable, 
          numeric_precision "precision",
          numeric_scale "scale",
          CHARACTER_MAXIMUM_LENGTH "maximum_length", 
          COLUMN_DEFAULT "defaultValue", 
          pg_catalog.col_description(pgc.oid, c.ordinal_position::int) AS "comment",
          tc.constraint_type "key",
          tc.constraint_name "constraint_name",
          cc.table_name "referenced_table",
          cc.column_name "referenced_column",
          pa.*
        FROM information_schema.columns c
        JOIN pg_catalog.pg_class pgc ON c.table_name = pgc.relname 
        JOIN pg_catalog.pg_namespace pgn ON pgn.oid=pgc.relnamespace and pgn.nspname=c.table_schema
        JOIN pg_attribute pa on pa.attname =c.column_name and pa.attrelid =pgc.oid 
        LEFT JOIN information_schema.key_column_usage ccu on ccu.table_schema=c.table_schema
          and ccu.table_name=c.table_name and ccu.column_name=c.COLUMN_NAME
        LEFT JOIN information_schema.table_constraints tc on tc.table_schema=c.table_schema 
          and tc.table_name=c.table_name and tc.constraint_name=ccu.constraint_name
        LEFT JOIN information_schema.constraint_column_usage cc on cc.table_schema=c.table_schema 
          and cc.constraint_name=tc.constraint_name and  tc.constraint_type='FOREIGN KEY'
        WHERE c.TABLE_SCHEMA = '${e}' AND c.table_name = '${t}' 
        ORDER BY c.ORDINAL_POSITION;`}showChecks(e,t){return`SELECT
    tc.CONSTRAINT_NAME "name",
    cc.CHECK_CLAUSE "clause"
FROM
    "information_schema"."check_constraints" AS cc,
    "information_schema"."table_constraints" AS tc
WHERE
    tc.CONSTRAINT_SCHEMA = '${e}'
    AND tc.TABLE_NAME = '${t}'
    AND tc.CONSTRAINT_TYPE = 'CHECK'
    AND tc.CONSTRAINT_SCHEMA = cc.CONSTRAINT_SCHEMA
    AND tc.CONSTRAINT_NAME = cc.CONSTRAINT_NAME
    AND cc.CONSTRAINT_NAME NOT LIKE '%_not_null'`}showPartitions(e,t){return`select col.column_name "columnName", pt.partition_strategy "strategy" from (
      select
          partrelid, partnatts, case partstrat when 'h' then 'HASH' when 'l' then 'LIST' when 'r' then 'RANGE' end as partition_strategy, unnest(partattrs) column_index
      from
          pg_partitioned_table ) pt
      join pg_class pc on pc.oid = pt.partrelid
      join information_schema.columns col on col.table_schema = pc.relnamespace :: regnamespace :: text
        and col.table_name = pc.relname and col.ordinal_position = pt.column_index
      WHERE col.table_schema='${e}' and col.table_name='${t}';`}showTriggers(e,t){const n=t?` AND event_object_table='${t}'`:"";return`SELECT 
              event_object_table table_name,
              trigger_name "trigger_name",
              action_timing timing,
              event_manipulation manipulation ,
              action_orientation orientation,
              action_statement statement
            FROM 
              information_schema.TRIGGERS 
            WHERE trigger_schema = '${e}' ${n} 
            ORDER BY TRIGGER_NAME ASC`}showProcedures(e){return`SELECT p.proname "ROUTINE_NAME",
    pg_get_functiondef(p.oid) source,
    p.oid,
    pg_get_function_identity_arguments(p.oid) "argDefs"
from
    pg_proc p
    JOIN pg_namespace n ON p.pronamespace = n.oid
    and n.nspname = '${e}'
    and p.prokind = 'p'
order by p.proname`}showFunctions(e){return`SELECT DISTINCT
    r.ROUTINE_NAME AS "name",
    p.oid,
    pg_get_function_identity_arguments(p.oid) "argDefs"
FROM 
    information_schema.routines r
    JOIN pg_proc p ON r.ROUTINE_NAME = p.proname 
    JOIN pg_namespace n ON p.pronamespace = n.oid 
    AND n.nspname = '${e}'
WHERE 
    r.ROUTINE_SCHEMA = '${e}' 
    AND r.ROUTINE_TYPE = 'FUNCTION' 
ORDER BY 
    r.ROUTINE_NAME ASC`}showFunctionSource(e,t,n){return n?`select pg_get_functiondef('${n}') "Create Function",'${t}' "Function";`:`select pg_get_functiondef('${e}.${t}' :: regproc) "Create Function",'${t}' "Function";`}showViews(e,t){return`select table_name "name" from information_schema.tables where table_schema='${t}' and table_type='VIEW' order by "name";`}showMaterialViews(e,t){return`SELECT matviewname "name" from pg_matviews WHERE schemaname='${t}' order by "name" ASC`}buildPageSql(e,t,n){return`SELECT * FROM ${t} LIMIT ${n};`}showTables(e,t){return`SELECT t.table_name "name", pg_catalog.obj_description(pgc.oid, 'pg_class') "comment",pgc.reltuples "table_rows"
FROM information_schema.tables t
JOIN pg_catalog.pg_class pgc ON t.table_name = pgc.relname 
JOIN pg_catalog.pg_namespace pgn ON pgn.oid=pgc.relnamespace and pgn.nspname=t.table_schema
WHERE t.table_type='BASE TABLE'
AND t.table_schema='${t}' order by t.table_name;`}showDatabases(){return"SELECT datname FROM pg_database WHERE datistemplate = false order by datname ASC;"}showSchemas(){return'SELECT nspname "schema" from pg_catalog.pg_namespace order by nspname ASC;'}showSequences(e){return`select sequencename as name,last_value as sequence from pg_sequences WHERE schemaname='${e}' ORDER BY name;`}showCustomTypes(e){return`SELECT  t.typname as name,typtype as type,string_agg(pg_enum.enumlabel, ',') enum_values
    FROM        pg_type t 
    LEFT JOIN   pg_enum ON pg_enum.enumtypid = t.oid
    LEFT JOIN   pg_catalog.pg_namespace n ON n.oid = t.typnamespace 
    WHERE (t.typrelid = 0 OR (SELECT c.relkind = 'c' FROM pg_catalog.pg_class c WHERE c.oid = t.typrelid)) 
    AND     NOT EXISTS(SELECT 1 FROM pg_catalog.pg_type el WHERE el.oid = t.typelem AND el.typarray = t.oid)
    and n.nspname='${e}' GROUP BY name,type;`}tableTemplate(){return`CREATE TABLE table_name$1(  
    id int NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    create_time DATE,
    name$2 VARCHAR(255)
);
COMMENT ON TABLE table_name$1 IS '$3';
COMMENT ON COLUMN table_name$1.name$2 IS '$4';`}viewTemplate(e){return`CREATE ${e?"MATERIALIZED ":""}VIEW view_name$1
AS
SELECT * FROM $2`}procedureTemplate(){return`CREATE PROCEDURE proc_name$1()
LANGUAGE SQL
as $$
[$2]
$$;`}triggerTemplate(e){return`CREATE FUNCTION trigger_fun$1() RETURNS TRIGGER AS 
\\$body\\$
BEGIN
    $2
    RETURN [value];
END;
\\$body\\$ 
LANGUAGE plpgsql;

CREATE TRIGGER [name]$3
[BEFORE/AFTER] INSERT
ON ${e??"[table_name]$4"}
FOR EACH ROW
EXECUTE PROCEDURE [trigger_fun]();`}dropTriggerTemplate(e,t){return`DROP TRIGGER ${e} on ${t}`}functionTemplate(){return`CREATE FUNCTION fun_name$1() 
RETURNS int$2 AS $$
BEGIN
    $3
    return 0;
END;
$$ LANGUAGE plpgsql;`}}class Ge extends Ze{showVersion(){return"SELECT VERSION() as server_version"}createIndex(e){throw new Error("Redshift not support index!")}variableList(){return"SHOW ALL"}statusList(){return`SELECT
        'db_numbackends' AS db,
        pg_stat_get_db_numbackends(datid) AS status
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_xact_commit',
        pg_stat_get_db_xact_commit(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_xact_rollback',
        pg_stat_get_db_xact_rollback(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_blocks_fetched',
        pg_stat_get_db_blocks_fetched(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_blocks_hit',
        pg_stat_get_db_blocks_hit(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()`}processList(){return`SELECT
        a.pid AS "Id",
        a.usename AS "User",
        a.client_addr AS "Host",
        a.client_port AS "Port",
        datname AS "db",
        query AS "Command",
        l.mode AS "State",
        query_start AS "Time",
        CASE
          WHEN c.relname IS NOT NULL THEN 'Locked Object: ' || c.relname
          ELSE 'Locked Transaction: ' || l.virtualtransaction
        END AS "Info"
      FROM
        pg_stat_activity a
        LEFT JOIN pg_locks l ON a.pid = l.pid
        LEFT JOIN pg_class c ON l.relation = c.oid
      ORDER BY
        a.pid ASC,
        c.relname ASC`}addColumn(e,t){return`ALTER TABLE ${e}
  ADD COLUMN [column] [type];
COMMENT ON COLUMN ${e}.[column] IS 'comment';`}createUser(){return"CREATE USER [name] WITH PASSWORD 'password';"}updateUser(e){return`ALTER USER ${e} WITH PASSWORD 'new_password';`}updateColumn(e,t){const{name:n,type:l}=t;return`-- change column type
ALTER TABLE ${e}
    ALTER COLUMN ${n} TYPE ${l};
-- change column name
ALTER TABLE ${e}
    RENAME COLUMN ${n} TO ${n};`}updateColumnSql(e){return new ze(e).genAlterSQL()}showUsers(){return'SELECT usename "user" from pg_user '}updateTable(e){const{table:t,newTableName:n,comment:l,newComment:a}=e;let r="";return a&&a!=l&&(r=`COMMENT ON TABLE "${t}" IS '${a}';`),n&&t!=n&&(r+=`ALTER TABLE "${t}" RENAME TO "${n}";`),r}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE "',TABLE_NAME, '";') trun FROM INFORMATION_SCHEMA.TABLES WHERE  table_schema ='${e}' AND table_type='BASE TABLE';`}createDatabase(e){return"CREATE DATABASE $1"}showTableSource(e,t){return`SHOW TABLE "${e}"."${t}"`}showViewSource(e,t){return`SHOW VIEW "${e}"."${t}"`}showProcedureSource(e,t){return`select pg_get_functiondef('${e}.${t}' :: regproc) "Create Procedure",'${t}' "Procedure";`}showFunctionSource(e,t){return`select pg_get_functiondef('${e}.${t}' :: regproc) "Create Function",'${t}' "Function";`}showTriggerSource(e,t){return`select pg_get_triggerdef(oid) "SQL Original Statement",'${e}.${t}' "Trigger" from pg_trigger where tgname = '${t}';`}showPartitions(e,t){return""}showSequences(e){return`SELECT sequence_name name FROM information_schema.sequences WHERE sequence_schema = '${e}' ORDER BY sequence_name`}showTriggers(e,t){const n=t?` AND event_object_table='${t}'`:"";return`SELECT TRIGGER_NAME "trigger_name" FROM information_schema.TRIGGERS WHERE trigger_schema = '${e}' ${n} ORDER BY TRIGGER_NAME ASC`}showProcedures(e){return`SELECT ROUTINE_NAME "ROUTINE_NAME" FROM information_schema.routines WHERE ROUTINE_SCHEMA = '${e}' and ROUTINE_TYPE='PROCEDURE' ORDER BY ROUTINE_NAME ASC`}showFunctions(e){return`SELECT ROUTINE_NAME "ROUTINE_NAME" FROM information_schema.routines WHERE ROUTINE_SCHEMA = '${e}' and ROUTINE_TYPE='FUNCTION' ORDER BY ROUTINE_NAME ASC `}showTables(e,t){return`  SELECT t.table_name "name", pg_catalog.obj_description(pgc.oid, 'pg_class') "comment"
FROM information_schema.tables t
JOIN pg_catalog.pg_class pgc ON t.table_name = pgc.relname
JOIN pg_catalog.pg_namespace pgn ON pgn.oid=pgc.relnamespace and pgn.nspname=t.table_schema
WHERE t.table_type='BASE TABLE'
AND t.table_schema='${t}' order by t.table_name;`}showSchemas(){return'SELECT nspname "schema" from pg_catalog.pg_namespace order by nspname ASC;'}tableTemplate(){return`CREATE TABLE table_name$1(
    id INT identity(1, 1) NOT NULL PRIMARY KEY,
    create_time DATE,
    update_time DATE,
    content$2 VARCHAR(255)
);
COMMENT ON TABLE table_name IS 'table_comment';
COMMENT ON COLUMN table_name.content IS 'content';`}procedureTemplate(){return`CREATE PROCEDURE procedure_name()
as $$
begin
    SELECT 1;
END;
$$ LANGUAGE plpgsql;`}functionTemplate(){return`CREATE FUNCTION function_name()
RETURNS int STABLE
AS $$
    SELECT 1
$$ LANGUAGE sql;`}}class Nn extends Ee{showVersion(){return'select CURRENT_VERSION() as "server_version";'}createIndex(e){let t=`${e.type||"key"}`;return t.match(/BTREE/i)&&(t="key"),`ALTER TABLE ${e.table} ADD ${t} (\`${e.column||"$1"}\`)`}dropIndex(e,t){return`ALTER TABLE ${e} DROP INDEX \`${t}\``}showIndex(e,t){return""}variableList(){return"show global VARIABLES"}statusList(){return"show global status"}processList(){return"show processlist"}addColumn(e,t){const n=t?` AFTER \`${t}\``:"";return`ALTER TABLE ${e} 
    ADD COLUMN $1 [type]$2 COMMENT '$3'${n};`}createUser(){return`CREATE USER '$1'@'%' IDENTIFIED BY 'password$2';
-- Grant select privilege to all databases;
GRANT SELECT ON *.* TO '$1'@'%' WITH GRANT OPTION;
-- Grant all privileges to all databases;
GRANT ALL PRIVILEGES ON *.* TO '$1'@'%' WITH GRANT OPTION;`}updateUser(e){return`update mysql.user set 
    password = PASSWORD("newPassword")
    where User = '${e}';
FLUSH PRIVILEGES;
-- since mysql version 5.7, password column need change to authentication_string=PASSWORD("newPassword")`}updateColumn(e,t){var N;const{name:n,type:l,comment:a,nullable:r,defaultValue:o,extra:i,character_set_name:m,collation_name:O}=t,p=r!="YES";return new Y(`ALTER TABLE ${e}`).append(`
	CHANGE ${n} ${n} ${l}`).if(m,`CHARACTER SET ${m}`).if(O,`COLLATE ${O}`).if(p,"NOT NULL").if((N=i==null?void 0:i.toLowerCase())==null?void 0:N.includes("auto_increment"),"AUTO_INCREMENT").if(a,`COMMENT '${a}'`).if(Q(o)&&!p,"DEFAULT NULL").if(!Q(o),`DEFAULT ${o=="CURRENT_TIMESTAMP"?o:`'${_t(o)}'`}`).toString()}updateColumnSql(e){const{table:t,columnName:n,newColumnName:l,columnType:a,isNotNull:r,isAutoIncrement:o,comment:i,defaultValue:m,oldRow:O}=e,p=`ALTER TABLE "${t}"`,N=r?"SET NOT NULL":"DROP NOT NULL";return new Y(`${p} ALTER COLUMN "${n}" TYPE ${a};`,`
`).if(i&&i!=O.comment,`${p} ALTER COLUMN "${n}" COMMENT '${i}';`).if(r!=O.isNotNull,`${p} ALTER COLUMN "${n}" ${N};`).if(n!=l,`${p} RENAME COLUMN "${n}" TO "${l}";`).toString()}showCollations(){return""}showChecks(e,t){return""}showUsers(){return"SELECT user user,host host FROM mysql.user;"}pingDataBase(e,t){return e?`use "${t}"."${e}"`:"select 1"}updateTable(e){const{table:t,newTableName:n,comment:l,newComment:a,collation:r,newCollation:o}=e;let i="";return a&&a!=l&&(i=`ALTER TABLE \`${t}\` COMMENT = '${a}';`),o&&o!=r&&(i+=`ALTER TABLE \`${t}\` collate = '${o}';`),n&&t!=n&&(i+=`ALTER TABLE \`${t}\` RENAME TO \`${n}\`;`),i}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE \`',table_schema,'\`.\`',TABLE_NAME, '\`;') trun FROM INFORMATION_SCHEMA.TABLES where  table_schema ='${e}' and TABLE_TYPE<>'VIEW';`}createDatabase(e){return`CREATE DATABASE $1
    DEFAULT CHARACTER SET = 'utf8mb4';`}showTableSource(e,t){return`select get_ddl('table', '${e}.${t}') "Create Table";`}showViewSource(e,t){return`select get_ddl('view', '${e}.${t}') "Create View";`}showProcedureSource(e,t){return`select get_ddl('PROCEDURE', '${e}.${t}()') "Create Procedure";`}showFunctionSource(e,t){return`select get_ddl('FUNCTION', '${e}.${t}()') "Create Function";`}showTriggerSource(e,t){return`SHOW CREATE TRIGGER \`${e}\`.\`${t}\`;`}showColumns(e,t){return`SELECT 
        c.COLUMN_NAME "name",
        DATA_TYPE "type",
        CHARACTER_MAXIMUM_LENGTH "maximum_length",
        IS_IDENTITY "key",
        COMMENT "comment",
        IS_NULLABLE "nullable",
        COLUMN_DEFAULT "defaultValue",
        COLLATION_NAME "$"
        FROM information_schema.columns c
        WHERE c.table_schema = '${e}' AND c.table_name = '${t}' 
        ORDER BY c.ORDINAL_POSITION;`}showTriggers(e,t){const n=t?` AND EVENT_OBJECT_TABLE='${t}'`:"";return`SELECT TRIGGER_NAME FROM information_schema.TRIGGERS WHERE TRIGGER_SCHEMA = '${e}' ${n} ORDER BY TRIGGER_NAME;`}showProcedures(e){return`SELECT PROCEDURE_NAME ROUTINE_NAME FROM information_schema.PROCEDURES WHERE PROCEDURE_SCHEMA = '${e}' ORDER BY PROCEDURE_NAME`}showFunctions(e){return`SELECT FUNCTION_NAME ROUTINE_NAME FROM INFORMATION_SCHEMA.FUNCTIONS WHERE FUNCTION_SCHEMA='${e}' ORDER BY FUNCTION_NAME`}showViews(e,t){return`SELECT COMMENT "comment",TABLE_NAME "name",ROW_COUNT "table_rows"
        FROM information_schema.TABLES  WHERE TABLE_SCHEMA = '${t}' and TABLE_TYPE='VIEW' ORDER BY TABLE_NAME;`}buildPageSql(e,t,n){return`SELECT * FROM ${t} LIMIT ${n};`}showTables(e,t){return`SELECT COMMENT "comment",TABLE_NAME "name",ROW_COUNT "table_rows"
        FROM information_schema.TABLES  WHERE TABLE_SCHEMA = '${t}' and TABLE_TYPE<>'VIEW' ORDER BY TABLE_NAME;`}showDatabases(){return"show databases;"}showSchemas(){return'SELECT SCHEMA_NAME "schema" FROM INFORMATION_SCHEMA.SCHEMATA;'}tableTemplate(){return`CREATE TABLE table_name$1(  
    id int NOT NULL PRIMARY KEY AUTOINCREMENT,
    create_time DATE,
    name$2 VARCHAR(255)
);
COMMENT ON TABLE table_name$1 IS '$3';
COMMENT ON COLUMN table_name$1.name$2 IS '$4';`}viewTemplate(){return`CREATE VIEW view_name$1
AS
SELECT * FROM $2`}procedureTemplate(){return`create procedure proc_name$1() returns string
language javascript
as $$
    $2return 1+1;
$$;`}functionTemplate(){return`CREATE FUNCTION fun_name$1() RETURNS int
AS
$$
    $2return 1;
$$`}}class et extends Pe{showVersion(){return"select sqlite_version() as server_version"}updateColumn(e,t){throw new Error("SQLite not support update column.")}updateColumnSql(e){throw new Error("SQLite not support update column.")}createIndex(e){const{table:t,column:n="$2"}=e;return`CREATE INDEX ${`${t}_${n}`} ON ${t}(${n});`}showIndex(e,t){return`SELECT name index_name FROM sqlite_master WHERE type='index' and tbl_name='${t}' `}dropIndex(e,t){return`DROP INDEX ${t};`}showTables(e,t){return"SELECT name, type FROM sqlite_master WHERE type='table' ORDER BY type ASC, name ASC;"}addColumn(e,t){return`ALTER TABLE ${e} 
    ADD COLUMN $1 [type$2];`}showSequences(e){return"SELECT name,seq sequence FROM sqlite_sequence"}showColumns(e,t){return`SELECT t1.*,t1.pk "key",t1.dflt_value "defaultValue",t2."table" "referenced_table",t2."to" "referenced_column" FROM PRAGMA_TABLE_INFO('${t}') t1
        left join (
            SELECT * FROM  pragma_foreign_key_list('${t}')
        ) t2  on t1.name=t2.'from';`}showViews(e,t){return"SELECT name, type FROM sqlite_master WHERE type='view' AND name <> 'sqlite_sequence' AND name <> 'sqlite_stat1' ORDER BY type ASC, name ASC;"}showTriggers(e,t){return`SELECT name, tbl_name, sql FROM sqlite_master WHERE type='trigger' ${t?` AND tbl_name='${t}'`:""} ORDER BY name ASC;`}buildPageSql(e,t,n){return`SELECT * FROM ${t} LIMIT ${n};`}showTableSource(e,t){return`SELECT sql "Create Table" FROM sqlite_master where name='${t}' and type='table';`}showViewSource(e,t){return`SELECT sql "Create View" FROM sqlite_master where name='${t}' and type='view';`}showTriggerSource(e,t){return`SELECT sql FROM sqlite_master where name='${t}' and type='trigger';`}tableTemplate(){return`CREATE TABLE table_name$1(  
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    content TEXT
);`}viewTemplate(){return`CREATE VIEW view_name$1
AS
SELECT * FROM $2`}}class Rn extends et{showVersion(){return"SELECT library_version as server_version from pragma_version()"}pingDataBase(e,t){return e?`set schema '${e}';`:null}showDatabases(){return'SELECT DISTINCT catalog_name "Database" from information_schema.schemata ORDER BY catalog_name'}showSchemas(e){return`SELECT schema_name "schema" from information_schema.schemata WHERE catalog_name='${e}' ORDER BY schema_name`}showTables(e,t){return`SELECT table_name "name" FROM information_schema.tables
        WHERE table_type in ('BASE TABLE','LOCAL TEMPORARY') and table_catalog='${e}' and table_schema = '${t}' order by table_name`}showViews(e,t){return`
SELECT table_name "name",1 "view_group",null "source" FROM information_schema.tables
        WHERE table_type='VIEW' and table_catalog='${e}' and table_schema = '${t}'
        UNION all
SELECT viewname "name",2 "view_group",definition "source" FROM pg_catalog.pg_views
        WHERE schemaname = '${t}'
ORDER BY "view_group",name`}showSequences(e){return`SELECT sequence_name AS name, last_value AS sequence 
                FROM duckdb_sequences() 
                WHERE schema_name = '${e}'`}tableTemplate(){return`CREATE TABLE table_name$1(  
    id INTEGER NOT NULL PRIMARY KEY,
    content TEXT
);`}showColumns(e,t){return["system","temp"].includes(e)?`SELECT column_name "name", data_type "type",
        column_default "defaultValue", is_nullable "nullable"
        FROM information_schema.columns c
        WHERE c.table_schema = '${e}' AND c.table_name = '${t}' 
        ORDER BY c.ORDINAL_POSITION;`:`SELECT t1.*,t1.pk "key",t1.dflt_value "defaultValue" FROM PRAGMA_TABLE_INFO('${t}') t1;`}updateColumn(e,t){const{name:n,type:l}=t;return`-- change column type
ALTER TABLE ${e} 
    ALTER COLUMN ${n} TYPE ${l};
-- change column name
ALTER TABLE ${e} 
    RENAME COLUMN ${n} TO ${n};`}updateColumnSql(e){return new ge(e).genAlterSQL()}}class tt extends pe{showVersion(){return"select version() as server_version;"}showDatabases(){return"show databases"}showTables(e,t){return`show tables in ${e}`}showColumns(e,t){return`describe ${e}.${t};`}showViews(e,t){return`show views in ${e}`}}class Cn extends pe{showVersion(){return"SELECT node_version as server_version FROM system.runtime.nodes;"}pingDataBase(e){return e?`use ${e}`:null}showDatabases(){return"show catalogs"}}class Sn extends pe{showVersion(){return"SELECT cql_version as server_version FROM system.local;"}showUsers(){return'SELECT role as "user" FROM system_auth.roles;'}pingDataBase(e){return e?`use ${e}`:null}createDatabase(e){return`CREATE KEYSPACE $1
WITH REPLICATION = { 
    'class' : 'SimpleStrategy', 
    'replication_factor' : 1 
};`}showDatabases(){return'select keyspace_name as "database" from system_schema.keyspaces;'}showTables(e,t){return`select table_name as "name" from system_schema.tables where keyspace_name='${e}'`}showColumns(e,t){return`select column_name as "name", type, kind as "key" 
                from system_schema.columns 
                where keyspace_name='${e}' 
                and table_name='${t}'`}tableTemplate(){return`CREATE TABLE table_name$1(  
    id int PRIMARY key,
    create_time DATE,
    update_time DATE,
    content TEXT
);`}}class pn extends ge{otherPart(){const{oldRow:e,isAutoIncrement:t}=this.param;return!e.isAutoIncrement&&t?`${this.afterColumnPrefix} SET GENERATED ALWAYS as identity;`:e.isAutoIncrement&&!t?`${this.afterColumnPrefix} DROP GENERATED;`:null}commentPart(){const{oldRow:e,table:t,columnName:n,comment:l}=this.param;if(l!=e.comment)return`COMMENT ON COLUMN "${t}"."${n}" is '${l}';`}changeTypePart(){const{oldRow:e,columnType:t}=this.param;return e.type==t?"":`${this.afterColumnPrefix} SET DATA TYPE ${t};`}}class nt extends pe{showVersion(){return'SELECT SERVICE_LEVEL as "server_version" FROM SYSIBMADM.ENV_INST_INFO;'}showUsers(){return`SELECT GRANTEE "user" FROM syscat.dbauth WHERE GRANTEETYPE='U';`}pingDataBase(e){return e?`set SCHEMA ${e}`:null}showDatabases(){return'select schemaname "database" from syscat.schemata'}showTableSource(e,t){return null}showTables(e,t){return`select tabname "name", remarks "comment" from syscat.tables where tabschema='${t}' and TYPE='T' order by tabname`}showColumns(e,t){return`select COLUMN_NAME "name",
        DATA_TYPE "type",
        IS_NULLABLE "nullable",
        NUMERIC_PRECISION "precision",
        NUMERIC_SCALE "scale",
        CHARACTER_MAXIMUM_LENGTH "maximum_length",
        sc.length "number_length",
        COLUMN_DEFAULT "defaultValue",
        tc.TYPE "key",
        sc.remarks "comment",
        sc.IDENTITY "extra",
        r.REFTABNAME "referenced_table",
        trim(r.PK_COLNAMES) "referenced_column"
        from SYSIBM.columns c
        left join syscat.keycoluse kc
            on c.TABLE_SCHEMA=kc.TABSCHEMA and c.TABLE_NAME=kc.TABNAME  and c.COLUMN_NAME=kc.COLNAME
        left join SYSCAT.tabconst tc
            on c.TABLE_SCHEMA=tc.TABSCHEMA and c.TABLE_NAME=tc.TABNAME  and tc.CONSTNAME=kc.CONSTNAME
        left join sysibm.syscolumns sc
            on c.TABLE_SCHEMA=sc.TBCREATOR and c.TABLE_NAME=sc.TBNAME  and c.COLUMN_NAME=sc.NAME
        left join syscat.references r
            on c.TABLE_SCHEMA=r.TABSCHEMA and c.TABLE_NAME=r.TABNAME  and c.COLUMN_NAME=trim(r.FK_COLNAMES)
        where
            TABLE_SCHEMA = '${e}'
            and TABLE_NAME = '${t}'
        order by ORDINAL_POSITION;`}updateColumnSql(e){return new pn(e).genAlterSQL()}showAllForeignKeys(){return`SELECT 
        CONSTNAME "constraint_name",
        TABSCHEMA "table_schema",
        TABNAME "table_name",
        FK_COLNAMES "column_name",
    REFTABNAME "referenced_table",
    PK_COLNAMES "referenced_column"
     FROM syscat.references`}showForeignKeys(e,t){return`SELECT 
        FK_COLNAMES "column_name",
        CONSTNAME "constraint_name",
        REFTABNAME "referenced_table",
        PK_COLNAMES "referenced_column",
        UPDATERULE "updateRule",
        DELETERULE "deleteRule"
         FROM syscat.references WHERE 
        TABSCHEMA='${e}' and TABNAME='${t}'`}showIndex(e,t){return`SELECT 
        COLNAMES "column_name",
        INDNAME "index_name",
        UNIQUERULE='U' "isUnique"
         FROM SYSCAT.INDEXES WHERE TABNAME = '${t}' AND TABSCHEMA = '${e}'`}showViews(e,t){return`select VIEWNAME "name",TEXT "source" from SYSCAT.VIEWS where VIEWSCHEMA = '${t}';`}showProcedures(e){return`select PROCNAME "routine_name",TEXT "source" from SYSCAT.procedures where PROCSCHEMA = '${e}' order by PROCNAME;`}showChecks(e,t){return`SELECT CONSTNAME "name",TEXT "clause" FROM SYSCAT.CHECKS WHERE TABNAME = '${t}' AND TABSCHEMA = '${e}';`}showTriggers(e,t){let n=`SELECT TRIGNAME "trigger_name",TEXT "source",TABNAME "table_name",TRIGEVENT "event" FROM syscat.triggers WHERE TABSCHEMA = '${e}'`;return t&&(n+=`AND TABNAME = '${t}'`),n}showFunctions(e){return`select FUNCNAME "routine_name",BODY "source" from SYSCAT.FUNCTIONS where FUNCSCHEMA = '${e}' order by FUNCNAME;`}dropIndex(e,t){return`DROP INDEX "${t}"`}createDatabase(e){return`CREATE SCHEMA ${e}$1;`}tableTemplate(){return`CREATE TABLE table_name$1(  
    id INTEGER NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    create_time DATE,
    update_time DATE,
    content VARCHAR(255)
);`}processList(){return`SELECT session_auth_id,
        application_handle,
        elapsed_time_sec,
        activity_state,
        rows_read,
        stmt_text info
 FROM sysibmadm.mon_current_sql
 ORDER BY elapsed_time_sec DESC`}}class On extends Ue{tableTemplate(){return`CREATE TABLE table_name(  
    id int NOT NULL  COMMENT 'Primary Key',
    create_time DATETIME COMMENT 'Create Time',
    name VARCHAR(255)
) 
AGGREGATE KEY(id,create_time,name)
DISTRIBUTED BY HASH(id) BUCKETS 1
PROPERTIES (
    "replication_allocation" = "tag.location.default: 1"
);`}showColumns(e,t){return`SELECT 
        c.COLUMN_NAME name,
        COLUMN_TYPE type,
        COLUMN_COMMENT comment,COLUMN_KEY \`key\`,IS_NULLABLE nullable,
        CHARACTER_MAXIMUM_LENGTH maximum_length,
        COLUMN_DEFAULT defaultValue,
        INSTR(COLUMN_TYPE,'zerofill')>0 "zerofill",
        INSTR(COLUMN_TYPE,'unsigned')>0 "unsigned",
        EXTRA extra,
        COLLATION_NAME collation_name,
        CHARACTER_SET_NAME character_set_name 
        FROM information_schema.columns c
        WHERE c.table_schema = '${e}' AND c.table_name = '${t}' 
        ORDER BY c.ORDINAL_POSITION;`}}class Ln extends Ee{showVersion(){return"SELECT SERVER_VERSION();"}createIndex(e){let t=`${e.type||"key"}`;return t.match(/BTREE/i)&&(t="key"),`ALTER TABLE ${e.table} ADD ${t} (\`${e.column||"$1"}\`)`}dropIndex(e,t){return`ALTER TABLE ${e} DROP INDEX \`${t}\``}showIndex(e,t){return`SELECT column_name "column_name",index_name "index_name",index_type "index_type",non_unique=0 "isUnique" FROM INFORMATION_SCHEMA.STATISTICS WHERE table_schema='${e}' and table_name='${t}';`}variableList(){return"show global VARIABLES"}statusList(){return"show global status"}processList(){return"show processlist"}addColumn(e,t){const n=t?` AFTER \`${t}\``:"";return`ALTER TABLE ${e} 
    ADD COLUMN $1 [type]$2 COMMENT '$3'${n};`}createUser(){return`CREATE USER '$1'@'%' IDENTIFIED BY 'password$2';
-- Grant select privilege to all databases;
GRANT SELECT ON *.* TO '$1'@'%' WITH GRANT OPTION;
-- Grant all privileges to all databases;
GRANT ALL PRIVILEGES ON *.* TO '$1'@'%' WITH GRANT OPTION;`}updateUser(e){return`update mysql.user set 
    password = PASSWORD("newPassword")
    where User = '${e}';
FLUSH PRIVILEGES;
-- since mysql version 5.7, password column need change to authentication_string=PASSWORD("newPassword")`}updateColumn(e,t){var a,r;const{nullable:n,extra:l}=t;return this.updateColumnSql({table:e,...t,isNotNull:n!="YES",isAutoIncrement:(r=(a=l==null?void 0:l.toLowerCase())==null?void 0:a.includes)==null?void 0:r.call(a,"auto_increment")})}updateColumnSql(e){const{table:t,name:n,columnName:l=n,type:a,unsigned:r,zerofill:o,useCurrentTimestamp:i,isNotNull:m,isAutoIncrement:O,comment:p,defaultValue:N,character_set_name:B,collation_name:A}=e,C=!dt(a)&&!a.match(/json/i);return new Y(`ALTER TABLE \`${t}\``).append(`
	CHANGE \`${l}\` \`${n}\` ${a}`).if(r=="1","UNSIGNED").if(o=="1","ZEROFILL").if(i,"ON UPDATE CURRENT_TIMESTAMP").if(C&&B,`CHARACTER SET ${B}`).if(C&&A,`COLLATE ${A}`).if(m,"NOT NULL").if(O,"AUTO_INCREMENT").if(p,`COMMENT '${p}'`).if(Q(N)&&!m,"DEFAULT NULL").if(!Q(N),`DEFAULT ${N=="CURRENT_TIMESTAMP"?N:`${le(N,a)}`}`).append(";").toString()}showCollations(){return null}showChecks(e,t){return`SELECT
        tc.CONSTRAINT_NAME "name",
        cc.CHECK_CLAUSE "clause"
    FROM
        information_schema.CHECK_CONSTRAINTS AS cc,
        information_schema.TABLE_CONSTRAINTS AS tc
    WHERE
        tc.CONSTRAINT_SCHEMA = '${e}'
        AND tc.TABLE_NAME = '${t}'
        AND tc.CONSTRAINT_TYPE = 'CHECK'
        AND tc.CONSTRAINT_SCHEMA = cc.CONSTRAINT_SCHEMA
        AND tc.CONSTRAINT_NAME = cc.CONSTRAINT_NAME;`}showUsers(){return"SELECT user user,host host FROM mysql.user;"}pingDataBase(e){return e?`use \`${e}\``:null}updateTable(e){const{table:t,newTableName:n,comment:l,newComment:a,collation:r,newCollation:o}=e;let i="";return a&&a!=l&&(i=`ALTER TABLE \`${t}\` COMMENT = '${a}';`),o&&o!=r&&(i+=`ALTER TABLE \`${t}\` collate = '${o}';`),n&&t!=n&&(i+=`ALTER TABLE \`${t}\` RENAME TO \`${n}\`;`),i}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE \`',table_schema,'\`.\`',TABLE_NAME, '\`;') trun FROM INFORMATION_SCHEMA.TABLES where  table_schema ='${e}' and TABLE_TYPE<>'VIEW';`}createDatabase(e){return"CREATE DATABASE $1;"}showTableSource(e,t){return`SHOW CREATE TABLE \`${e}\`.\`${t}\`;`}showPartitions(e,t){return`SELECT 
PARTITION_NAME "name",PARTITION_METHOD "strategy",PARTITION_EXPRESSION "columnName",
PARTITION_DESCRIPTION "value",TABLE_ROWS "rows",DATA_LENGTH "length"
        FROM information_schema.partitions WHERE TABLE_SCHEMA='${e}' AND TABLE_NAME = '${t}' AND PARTITION_NAME IS NOT NULL`}showViewSource(e,t){return`SHOW CREATE VIEW  \`${e}\`.\`${t}\`;`}showProcedureSource(e,t){return`SHOW CREATE PROCEDURE \`${e}\`.\`${t}\`;`}showFunctionSource(e,t){return`SHOW CREATE FUNCTION \`${e}\`.\`${t}\`;`}showTriggerSource(e,t){return`SHOW CREATE TRIGGER \`${e}\`.\`${t}\`;`}showColumns(e,t){return`desc ${t}`}showForeignKeys(e,t){return`SELECT
        c.COLUMN_NAME column_name, ik.CONSTRAINT_NAME constraint_name,
        ik.REFERENCED_TABLE_NAME referenced_table, ik.REFERENCED_COLUMN_NAME referenced_column,
        UPDATE_RULE "updateRule",
        DELETE_RULE "deleteRule"
        FROM
        information_schema.columns c join information_schema.KEY_COLUMN_USAGE ik on c.table_schema = ik.TABLE_SCHEMA
        and c.table_name = ik.TABLE_NAME and c.COLUMN_NAME = ik.COLUMN_NAME
        JOIN information_schema.REFERENTIAL_CONSTRAINTS ir on ik.CONSTRAINT_NAME=ir.CONSTRAINT_NAME
        WHERE c.table_schema = '${e}' and c.table_name = '${t}' ORDER BY ik.CONSTRAINT_NAME;`}showProcedures(e){return`SELECT ROUTINE_NAME FROM information_schema.routines WHERE ROUTINE_SCHEMA = '${e}' and ROUTINE_TYPE='PROCEDURE' ORDER BY ROUTINE_NAME`}showFunctions(e){return`SELECT ROUTINE_NAME FROM information_schema.routines WHERE ROUTINE_SCHEMA = '${e}' and ROUTINE_TYPE='FUNCTION' ORDER BY ROUTINE_NAME`}showViews(e){return`SELECT TABLE_NAME name,SECURITY_TYPE "view_group" FROM information_schema.VIEWS  WHERE TABLE_SCHEMA = '${e}' ORDER BY TABLE_NAME`}buildPageSql(e,t,n){return`SELECT * FROM ${t} LIMIT ${n};`}showTables(e){return`show ${e}.tables;`}showDatabases(){return"show databases"}showSchemas(){return this.showDatabases()}tableTemplate(e){return`CREATE TABLE table_name$1(  
    create_time timestamp,
    name$2 NCHAR(255)
);`}viewTemplate(){return`CREATE VIEW view_name$1
AS
SELECT * FROM $2`}procedureTemplate(){return`CREATE PROCEDURE proc_name$1()
BEGIN
$2
END;`}functionTemplate(){return`CREATE FUNCTION fun_name$1() RETURNS int$2
READS SQL DATA
BEGIN
    $3
    return 0;
END;`}}class bn extends tt{showVersion(){return""}}class Mn extends pe{showDatabases(){return"SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA ORDER BY SCHEMA_NAME;"}showTables(e,t=e){return`SELECT table_name,ddl source FROM ${t}.INFORMATION_SCHEMA.TABLES  WHERE TABLE_SCHEMA = '${t}' and TABLE_TYPE<>'VIEW' ORDER BY TABLE_NAME;`}showTableSource(e,t){return`SELECT ddl source FROM ${e}.INFORMATION_SCHEMA.TABLES  WHERE TABLE_SCHEMA = '${e}' and table_name='${t}' ORDER BY TABLE_NAME;`}showColumns(e,t){return`SELECT COLUMN_NAME name,DATA_TYPE type, IS_NULLABLE nullable 
            FROM ${e}.INFORMATION_SCHEMA.COLUMNS WHERE table_schema = '${e}' AND table_name = '${t}' ORDER BY ORDINAL_POSITION;`}showViews(e,t=e){return`SELECT TABLE_NAME,view_definition source FROM ${t}.INFORMATION_SCHEMA.VIEWS  WHERE TABLE_SCHEMA = '${t}' ORDER BY TABLE_NAME`}tableTemplate(e){return`CREATE TABLE ${e}.table_name$1(  
    id INT64,
    create_time DATE,
    update_time DATE,
    content STRING
);`}viewTemplate(){return`CREATE VIEW view_name$1
AS
SELECT * FROM `}}class In extends nt{showVersion(){return"SELECT SYSTEM_VALUE_NAME, CURRENT_CHARACTER_VALUE FROM QSYS2.SYSTEM_VALUE_INFO WHERE SYSTEM_VALUE_NAME IN ('QSRLNBR', 'QMODEL');"}showUsers(){return`SELECT AUTHORIZATION_NAME AS "user" FROM QSYS2.USER_INFO WHERE STATUS = 'ENABLED';`}pingDataBase(e){return e?`SET SCHEMA ${e}`:null}showDatabases(){return'SELECT SCHEMA_NAME AS "database" FROM QSYS2.SYSSCHEMAS;'}showTables(e,t){return`SELECT TABLE_NAME AS "name", TABLE_TEXT AS "comment" FROM QSYS2.SYSTABLES WHERE TABLE_SCHEMA='${t}' AND TABLE_TYPE='T' ORDER BY TABLE_NAME;`}showColumns(e,t){return`SELECT COLUMN_NAME AS "name",
                       DATA_TYPE AS "type",
                       IS_NULLABLE AS "nullable",
                       NUMERIC_PRECISION AS "precision",
                       NUMERIC_SCALE AS "scale",
                       CHARACTER_MAXIMUM_LENGTH AS "maximum_length",
                       COLUMN_DEFAULT AS "defaultValue",
                       COLUMN_TEXT AS "comment",
                       IDENTITY AS "extra"
                FROM QSYS2.SYSCOLUMNS
                WHERE TABLE_SCHEMA = '${e}'
                  AND TABLE_NAME = '${t}'
                ORDER BY ORDINAL_POSITION;`}showAllForeignKeys(){return`SELECT 
                    CONSTRAINT_NAME AS "constraint_name",
                    TABLE_SCHEMA AS "table_schema",
                    TABLE_NAME AS "table_name",
                    CONSTRAINT_KEYS AS "column_name",
                    SYSTEM_TABLE_NAME AS "referenced_table",
                    SYSTEM_CONSTRAINT_SCHEMA AS "referenced_column"
                FROM QSYS2.SYSCST
                WHERE CONSTRAINT_TYPE = 'FOREIGN KEY';`}showForeignKeys(e,t){return`SELECT 
                    CONSTRAINT_KEYS AS "column_name",
                    CONSTRAINT_NAME AS "constraint_name",
                    SYSTEM_TABLE_NAME AS "referenced_table",
                    SYSTEM_CONSTRAINT_SCHEMA AS "referenced_column"
                FROM QSYS2.SYSCST
                WHERE TABLE_SCHEMA='${e}' AND TABLE_NAME='${t}' AND CONSTRAINT_TYPE='FOREIGN KEY';`}showIndex(e,t){return`SELECT 
                    INDEX_NAME AS "index_name",
                    COLUMN_NAME AS "column_name",
                    CASE WHEN NON_UNIQUE = 0 THEN 'YES' ELSE 'NO' END AS "isUnique"
                FROM QSYS2.SYSINDEXES
                WHERE TABLE_NAME = '${t}' AND TABLE_SCHEMA = '${e}';`}showViews(e,t){return`SELECT VIEW_NAME AS "name", VIEW_DEFINITION AS "source" FROM QSYS2.SYSVIEWS WHERE TABLE_SCHEMA = '${t}';`}showProcedures(e){return`SELECT SPECIFIC_NAME AS "routine_name", ROUTINE_DEFINITION AS "source" FROM QSYS2.SYSROUTINES WHERE ROUTINE_SCHEMA = '${e}' ORDER BY SPECIFIC_NAME;`}showChecks(e,t){return`SELECT CONSTRAINT_NAME AS "name", CHECK_CLAUSE AS "clause" FROM QSYS2.SYSCST WHERE TABLE_NAME = '${t}' AND TABLE_SCHEMA = '${e}' AND CONSTRAINT_TYPE = 'CHECK';`}showTriggers(e,t){return`SELECT TRIGGER_NAME AS "trigger_name", ACTION_STATEMENT AS "source", EVENT_OBJECT_TABLE AS "table_name", EVENT_MANIPULATION AS "event" FROM QSYS2.SYSTRIGGERS WHERE EVENT_OBJECT_SCHEMA = '${e}'${t?` AND EVENT_OBJECT_TABLE = '${t}'`:""};`}showFunctions(e){return`SELECT SPECIFIC_NAME AS "routine_name", ROUTINE_DEFINITION AS "source" FROM QSYS2.SYSFUNCS WHERE FUNCTION_SCHEMA = '${e}' ORDER BY SPECIFIC_NAME;`}dropIndex(e,t){return`DROP INDEX ${e}.${t};`}processList(){return`SELECT JOB_NAME, 
                       AUTHORIZATION_NAME, 
                       TOTAL_CPU_TIME, 
                       TOTAL_DISK_IO_COUNT, 
                       TOTAL_MEMORY_USAGE 
                FROM QSYS2.ACTIVE_JOB_INFO 
                ORDER BY TOTAL_CPU_TIME DESC;`}}class qe extends Ue{showDatabases(){return"show databases"}showTables(e){return`show tables from ${e}`}showColumns(e,t){return`show columns from ${t}`}showViews(e){return`show views from ${e}`}showIndexes(e,t){return`show indexes from ${t}`}showFunctions(e){return`show functions from ${e}`}showProcedures(e){return`show procedures from ${e}`}showTriggers(e,t){return`show triggers from ${t}`}}function $n(c,e){switch(c||(c=R.MYSQL),c){case R.MYSQL:return e?new qe:new Ue;case R.MARIA_DB:return new Tn;case R.DORIS:return new On;case R.MYSQL_COMPATIBLE:return new qe;case R.PG:case R.KINGBASE:case R.COCKROACH:return e?new Ge:new Ze;case R.REDSHIFT:return new Ge;case R.SQLServer:return new dn;case R.libSQL:case R.SQLITE:return new et;case R.DUCK_DB:return new Rn;case R.SNOWFLAKE:return new Nn;case R.CLICKHOUSE:return new cn;case R.DM:return new mn;case R.ORACLE:return new Je;case R.CASSANDRA:return new Sn;case R.BIG_QUERY:return new Mn;case R.PRESTO:case R.TRINO:return new Cn;case R.HIVE:return new tt;case R.ATHENA:return new bn;case R.DB2:return new nt;case R.AS400:return new In;case R.MONGO_DB:return new _n;case R.NEO4J:return new An;case R.TDengine:return new Ln}return new pe}class _e{constructor(e){this.meta=e,this.dialect=$n(e.dbType),this.wrappedTable=ue(this.meta.table,this.meta.dbType,At.Always)}updateTable(e){return this.dialect.updateTable(e)}columnTypes(){return["INTEGER",{label:"VARCHAR",value:"VARCHAR(255)"},{label:"CHAR",value:"CHAR(50)"},"hr","DATE","TIMESTAMP","hr","BOOLEAN","FLOAT","DOUBLE","hr","TEXT","JSON","BLOB"]}strategies(){return["RESTRICT","CASCADE","SET NULL","SET DEFAULT","NO ACTION"]}newColumn(e){const{name:t,type:n,isNotNull:l}=e,a=l?" NOT NULL":"";return`ALTER TABLE ${this.wrappedTable} ADD COLUMN ${ue(t,this.meta.dbType)} ${n}${a}`}updateColumn(e){return this.dialect.updateColumnSql({...e,table:this.meta.table,tableMeta:this.meta,schema:this.meta.schema})}dropColumn(e){return`ALTER TABLE ${this.wrappedTable} DROP COLUMN ${ue(e,this.meta.dbType)}`}formatIndexType(e){return e.index_type}indexTypes(){return[{label:"INDEX",value:"INDEX"},{label:"UNIQUE",value:"UNIQUE"}]}dropIndex(e){return this.dialect.dropIndex(this.wrappedTable,e)}dropTrigger(e){return this.dialect.dropTriggerTemplate(e,this.wrappedTable)}showChecks(){return this.dialect.showChecks(this.meta.schema,this.meta.table)}showForeignKeys(){return this.dialect.showForeignKeys(this.meta.schema,this.meta.table)}newForeignKey(e){const{column:t,foreignKeyName:n,refTable:l,refColumn:a,onUpdate:r,onDelete:o}=e,i=r=="NO ACTION"?"":` ON UPDATE ${r}`,m=o=="NO ACTION"?"":` ON DELETE ${o}`;return new Y(`ALTER TABLE "${this.meta.table}"`).if(n,()=>`ADD CONSTRAINT ${n}`).if(!n,"ADD").append(`FOREIGN KEY ("${t}") REFERENCES "${l}"("${a}")${i}${m};`).toString()}dropForeignKey(e){return`ALTER TABLE "${this.meta.table}" DROP CONSTRAINT ${e};`}newCheck(e){return`ALTER TABLE ${this.wrappedTable} ADD CHECK (${e});`}dropCheck(e){return`ALTER TABLE ${this.wrappedTable} DROP CONSTRAINT ${e};`}splitColumn(e,t='"'){return e.map(n=>t+n+t).join(",")}}class hn extends _e{columnTypes(){return["Int32","String","Float32","hr","Date","DateTime","hr","BOOLEAN","UUID",{label:"Array",value:"Array(String)"},"hr","JSON",{label:"Tuple",value:"Tuple(String)"},{label:"Map",value:"Map(String,String)"},"hr","Int8","Int16","Int64","Int128","Int256","UInt8","UInt16","UInt32","UInt64","UInt128","UInt256","hr","DateTime64","DateTime32","hr","Decimal32","Decimal64","Decimal128","Decimal256","hr","IPv4","IPv6","hr",{label:"Enum8",value:"Enum8('a'=1)"},{label:"Enum16",value:"Enum16('a'=1)"},"hr",{label:"FixedString",value:"FixedString(100)"}]}newColumn(e){const{name:t,type:n,defaultValue:l,comment:a}=e;return new Y(`ALTER TABLE ${this.wrappedTable} ADD COLUMN "${t}" ${n}`).if(!Q(l),`DEFAULT ${le(l,n)}`).if(a,`COMMENT '${a}'`).toString()}newIndex(e){const{columns:t}=e;return`ALTER TABLE "${this.meta.table}" ADD INDEX ${t.join("")}_${new Date().getTime()}_index expression TYPE type GRANULARITY value AFTER ${this.splitColumn(t)}`}showForeignKeys(){return null}showChecks(){return null}}class xe extends _e{newColumn(e){const{name:t,type:n,defaultValue:l,isNotNull:a}=e;return new Y(`ALTER TABLE "${this.meta.schema}".${ue(this.meta.table,this.meta.dbType)} ADD ${ue(t,this.meta.dbType)} ${n}`).if(a,"NOT NULL").if(!Q(l),`DEFAULT ${le(l,n)}`).toString()}dropColumn(e){return`ALTER TABLE "${this.meta.schema}".${this.wrappedTable} DROP COLUMN ${ue(e,this.meta.dbType)}`}newIndex(e){const{table:t=this.meta.table,columns:n,type:l}=e,a=`${t}_${n.join("_")}_${new Date().getTime()}`;return`CREATE ${l=="UNIQUE"?"UNIQUE":""} INDEX ${a} ON "${this.meta.schema}"."${t}"(${this.splitColumn(n)});`}newCheck(e){return`ALTER TABLE "${this.meta.schema}".${this.wrappedTable} ADD CHECK (${e});`}dropCheck(e){return`ALTER TABLE "${this.meta.schema}".${this.wrappedTable} DROP CONSTRAINT ${e};`}dropForeignKey(e){return`ALTER TABLE "${this.meta.schema}"."${this.meta.table}" DROP CONSTRAINT ${e};`}newForeignKey(e){return super.newForeignKey(e).replace(`"${this.meta.table}"`,`"${this.meta.schema}"."${this.meta.table}"`)}}class fn extends _e{indexTypes(){return[{label:"INDEX",value:"INDEX"},{label:"UNIQUE",value:"UNIQUE"},{label:"FULLTEXT",value:"FULLTEXT"}]}columnTypes(){return["INT",{label:"VARCHAR",value:"VARCHAR(255)"},{label:"CHAR",value:"CHAR(50)"},"hr","DATETIME","TIMESTAMP","DATE","hr","BIT","FLOAT","DOUBLE",{label:"DECIMAL",value:"DECIMAL(10,2)"},"BIGINT","hr","TEXT","JSON","BLOB","BINARY","hr",{label:"ENUM",value:"ENUM('item')"},{label:"SET",value:"SET('item')"},"hr","TINYINT","SMALLINT","MEDIUMINT","hr","TIME","YEAR","hr","VARBINARY","TINYBLOB","MEDIUMBLOB","LONGBLOB","TINYTEXT","MEDIUMTEXT","LONGTEXT","hr","GEOMETRY","POINT","LINESTRING","POLYGON","MULTIPOINT","MULTILINESTRING","MULTIPOLYGON","GEOMETRYCOLLECTION"]}newColumn(e){const{name:t,type:n,comment:l,defaultValue:a,isNotNull:r,unsigned:o,zerofill:i}=e;return console.log(e),new Y(`ALTER TABLE ${this.wrappedTable} ADD COLUMN \`${t}\` ${n}`).if(o&&o!=0,"UNSIGNED").if(i,"ZEROFILL").if(r,"NOT NULL").if(l,`COMMENT '${l}'`).if(!Q(a),`DEFAULT ${le(a,n)}`).toString()}formatIndexType(e){const t=e.index_type.toUpperCase();return t=="BTREE"?e.index_name=="PRIMARY"?"PRIMARY":Be(e.isUnique)?"UNIQUE":"KEY":t}newIndex(e){const{type:t="key",columns:n}=e;return`ALTER TABLE \`${this.meta.table}\` ADD ${t} (${this.splitColumn(n,"`")})`}newForeignKey(e){const{column:t,foreignKeyName:n,refTable:l,refColumn:a,onUpdate:r,onDelete:o}=e,i=r=="NO ACTION"?"":` ON UPDATE ${r}`,m=o=="NO ACTION"?"":` ON DELETE ${o}`;return new Y(`ALTER TABLE \`${this.meta.table}\``).if(n,()=>`ADD CONSTRAINT ${n}`).if(!n,"ADD").append(`FOREIGN KEY (\`${t}\`) REFERENCES \`${l}\`(\`${a}\`)${i}${m};`).toString()}dropForeignKey(e){return`ALTER TABLE \`${this.meta.table}\` DROP FOREIGN KEY ${e};`}}class wn extends _e{newIndex(e){const{table:t=this.meta.table,columns:n,type:l}=e,a=`${t}_${n.join("_")}_${new Date().getTime()}`;return`CREATE ${l=="UNIQUE"?"UNIQUE":""} INDEX ${a} ON "${t}"(${this.splitColumn(n)})`}newColumn(e){const{name:t,type:n,isNotNull:l,defaultValue:a,comment:r}=e;return new Y(`ALTER TABLE ${ue(this.meta.table,this.meta.dbType)} ADD ${t} ${n}`).if(!Q(a),`DEFAULT ${le(a,n)}`).if(l,"NOT NULL").if(r,`;
COMMENT ON COLUMN ${this.wrappedTable}."${t.toUpperCase()}" is '${r}';`).toString()}newForeignKey(e){const{column:t,foreignKeyName:n,refTable:l,refColumn:a,onUpdate:r,onDelete:o}=e,i=r=="NO ACTION"?"":` ON UPDATE ${r}`,m=o=="NO ACTION"?"":` ON DELETE ${o}`,O=n||`${t}_${l}_${a}_fk_${Math.floor(Math.random()*30)}`;return`ALTER TABLE "${this.meta.table}" ADD CONSTRAINT ${O} FOREIGN KEY ("${t}") REFERENCES ${l}(${a})${i}${m};`}showForeignKeys(){var t;let{schema:e}=this.meta;return(e==null?void 0:e.toLowerCase())==((t=this.meta.user)==null?void 0:t.toLowerCase())&&(e=void 0),this.dialect.showForeignKeys(e,this.meta.table)}columnTypes(){return["INTEGER",{label:"VARCHAR2",value:"VARCHAR2(255)"},{label:"CHAR",value:"CHAR(50)"},"hr","DATE","TIMESTAMP","hr","NUMBER","FLOAT","hr","CLOB","BLOB","hr","BINARY_FLOAT","BINARY_DOUBLE","hr","TIMESTAMP WITH TIME ZONE","TIMESTAMP WITH LOCAL TIME ZONE","hr","INTERVAL YEAR TO MONTH","INTERVAL DAY TO SECOND","hr","RAW","LONG RAW","LONG","hr","NCHAR","NVARCHAR2","NCLOB","hr","BFILE","ROWID","UROWID"]}}class Dn extends _e{newColumn(e){const{name:t,type:n,comment:l,defaultValue:a,isNotNull:r}=e,o=this.wrappedTable;return new Y(`ALTER TABLE ${o} ADD COLUMN "${t}" ${n}`).if(r,"NOT NULL").if(!Q(a),`DEFAULT ${le(a,n)}`).append(";").if(l,`
COMMENT ON COLUMN ${o}."${t}" is '${l}';`).toString()}columnTypes(){return["INTEGER",{label:"VARCHAR",value:"VARCHAR(255)"},{label:"CHAR",value:"CHAR(50)"},"TIMESTAMP","DATE","BOOLEAN","FLOAT","TEXT","JSON","BLOB","hr","SMALLINT","BIGINT","REAL","DOUBLE PRECISION","hr","BYTEA","XML","UUID","ARRAY","hr","NUMERIC","MONEY","INTERVAL","CIDR","INET","MACADDR"]}indexTypes(){return[{label:"INDEX",value:"INDEX"},{label:"UNIQUE",value:"UNIQUE"},{label:"HASH",value:"HASH"}]}newIndex(e){const{table:t=this.meta.table,columns:n,type:l}=e,a=l=="HASH"?"hash":"btree";return`CREATE ${l=="UNIQUE"?"UNIQUE":""} INDEX ${n.join("_")}_${new Date().getTime()}_index ON "${t}" USING ${a} (${this.splitColumn(n)});`}}class gn extends _e{newIndex(e){throw new Error("Method not implemented.")}dropForeignKey(e){return`ALTER TABLE "${this.meta.table}" DROP CONSTRAINT "${e}";`}showForeignKeys(){return`select
       rco.constraint_name "constraint_name",
       rco.UPDATE_RULE "updateRule",
       rco.DELETE_RULE "deleteRule",
       pk_tco.table_name "referenced_table"
from information_schema.referential_constraints rco
    join information_schema.table_constraints fk_tco on fk_tco.constraint_name = rco.constraint_name and fk_tco.constraint_schema = rco.constraint_schema
    join information_schema.table_constraints pk_tco on pk_tco.constraint_name = rco.unique_constraint_name and pk_tco.constraint_schema = rco.unique_constraint_schema
    WHERE fk_tco.TABLE_SCHEMA='${this.meta.schema}' and fk_tco.table_name='${this.meta.table}' 
    ORDER BY rco.CREATED`}}class Un extends _e{newIndex(e){const{table:t=this.meta.table,columns:n}=e;return`CREATE INDEX ${`${t}_${n.join("_")}_${new Date().getTime()}`} ON "${t}"(${this.splitColumn(n)});`}showForeignKeys(){return`SELECT "from" column_name, "table" referenced_table, "to" referenced_column,
        on_update, on_delete 
        FROM pragma_foreign_key_list('${this.meta.table}');`}showChecks(){return null}}class yn extends _e{newColumn(e){const{type:t,defaultValue:n}=e;return new Y(super.newColumn(e)).if(!Q(n),`DEFAULT ${le(n,t)}`).toString()}newIndex(e){const{table:t=this.meta.table,columns:n}=e;return`CREATE INDEX ${`${t}_${n.join("_")}_${new Date().getTime()}`} ON "${t}"(${this.splitColumn(n)});`}showForeignKeys(){return`SELECT constraint_column_names "column_name" FROM duckdb_constraints()
        WHERE constraint_type='FOREIGN KEY' and database_name not in ('system','temp') and schema_name='${this.meta.schema}' and table_name='${this.meta.table}'`}showChecks(){return null}}class Bn extends xe{columnTypes(){return["INTEGER",{label:"VARCHAR",value:"VARCHAR(255)"},{label:"CHAR",value:"CHAR(50)"},"hr","DATE","TIMESTAMP","TIME","hr","BOOLEAN","FLOAT","DOUBLE","hr","TEXT","BLOB","hr","SMALLINT","BIGINT","DECFLOAT","hr","TIMESTAMP WITH TIME ZONE","TIME WITH TIME ZONE","hr","XML","GRAPHIC","VARGRAPHIC","hr","DBCLOB","CLOB"]}}class vn extends xe{columnTypes(){return["INTEGER","TEXT","hr","DATE","TIMESTAMP","hr","BOOLEAN","FLOAT","DOUBLE","hr","BLOB","hr","BIGINT","SMALLINT","TINYINT","VARINT","hr","TIME","TIMEUUID","hr","DECIMAL","COUNTER","hr","UUID","INET","ASCII","DURATION"]}dropColumn(e){return`ALTER TABLE ${this.wrappedTable} DROP ${ue(e,this.meta.dbType)}`}}function Fn(c){switch(c.dbType){case R.PG:case R.REDSHIFT:return new Dn(c);case R.DM:case R.ORACLE:return new wn(c);case R.DB2:return new Bn(c);case R.CASSANDRA:return new vn(c);case R.SQLServer:return new xe(c);case R.SNOWFLAKE:return new gn(c);case R.CLICKHOUSE:return new hn(c);case R.DUCK_DB:return new yn(c);case R.SQLITE:return new Un(c);case R.MYSQL:case R.MARIA_DB:default:return new fn(c)}}const Hn={class:"mt-2 design-container"},Pn={id:"infoPanel"},xn={class:"tab"},Vn=["onClick"],kn={class:"design-data-container"},Yn=ce({__name:"design",setup(c){const e=Te(),t=H(()=>e.activePanel),n=H(()=>[{id:"ddl",i18n:"design.ddl",icon:"codicon-edit green"},{id:"column",i18n:"design.column",icon:"codicon-symbol-field blue"},{id:"foreignKey",i18n:"design.foreignKey",icon:"codicon-symbol-class yellow",hidden:H(()=>!e.supportForeignKey)},{id:"index",i18n:"design.index",icon:"codicon-github-action purple",hidden:H(()=>!e.supportIndex)},{id:"trigger",i18n:"design.trigger",icon:"codicon-github-action orange",hidden:H(()=>!e.supportTrigger)},{id:"check",i18n:"design.check",icon:"codicon-tools red",hidden:H(()=>!e.supportCheck)}].filter(a=>{var r;return((r=a==null?void 0:a.hidden)==null?void 0:r.value)!=!0}));me(()=>{w.on("dbType",a=>{e.updateDBType(a)}).on("designMeta",a=>{e.dialect=Fn(a),e.updateFullInfo(a),w.emitImmediately("designMetaNext",a)}).on("success",()=>{Ke(T("design.updateSuccess"))}).on("error",a=>{we(a)}).on("refresh_design",()=>{l()}),l(),Nt(55,["tableTab","infoPanel"],a=>{e.remainHeight=a})});const l=()=>{w.emit("init",{type:"design"})};return(a,r)=>(_(),g("div",Hn,[M("div",Pn,[s(en),M("ul",xn,[(_(!0),g(Z,null,oe(n.value,(o,i)=>(_(),g("li",{key:i,class:Ye(["tab__item",{"tab__item--active":t.value==o.id}]),onClick:m=>E(e).activePanel=o.id},[o.icon?(_(),g("i",{key:0,type:"icon",class:Ye(o.icon),style:{position:"relative",top:"3px"}},null,2)):h("",!0),y(" "+U(E(T)(o.i18n)),1)],10,Vn))),128))])]),M("div",kn,[W(s(bt,null,null,512),[[ne,t.value=="ddl"]]),W(s(xt,null,null,512),[[ne,t.value=="column"]]),W(s(wt,null,null,512),[[ne,t.value=="foreignKey"]]),W(s(Ot,null,null,512),[[ne,t.value=="index"]]),W(s(un,null,null,512),[[ne,t.value=="trigger"]]),W(s(rn,null,null,512),[[ne,t.value=="check"]])])]))}}),Ca=je(Yn,[["__scopeId","data-v-969d9d28"]]);export{Ca as default};
