"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[4874],{23804:function(e,n,t){t(72791);var i=t(11135),o=t(25787),r=t(61889),a=t(80184);n.Z=(0,o.Z)((function(e){return(0,i.Z)({root:{border:"1px solid #E2E2E2",borderRadius:2,backgroundColor:"#FBFAFA",paddingLeft:25,paddingTop:31,paddingBottom:21,paddingRight:30},leftItems:{fontSize:16,fontWeight:"bold",marginBottom:15,display:"flex",alignItems:"center","& .min-icon":{marginRight:15,height:28,width:38}},helpText:{fontSize:16,paddingLeft:5}})}))((function(e){var n=e.classes,t=e.iconComponent,i=e.title,o=e.help;return(0,a.jsx)("div",{className:n.root,children:(0,a.jsxs)(r.ZP,{container:!0,children:[(0,a.jsxs)(r.ZP,{item:!0,xs:12,className:n.leftItems,children:[t,i]}),(0,a.jsx)(r.ZP,{item:!0,xs:12,className:n.helpText,children:o})]})})}))},40603:function(e,n,t){var i=t(1413),o=t(45987),r=(t(72791),t(85531)),a=t(72455),s=t(80184),l=["onClick","text","disabled","tooltip","icon","className"],c=(0,a.Z)((function(e){return{root:{padding:"7px",color:function(n){return function(n){var t=n.variant,i=n.color,o=e.palette.primary.main;return"primary"===i&&"contained"===t?o=e.palette.primary.contrastText:"primary"===i&&"outlined"===t?o=e.palette.primary.main:"secondary"===i&&(o=e.palette.secondary.main),o}(n)},borderColor:function(n){return"secondary"===n.color?e.palette.secondary.main:e.palette.primary.main},"& svg.min-icon":{width:12,marginLeft:function(e){return e.text?"5px":"0px"},"@media (max-width: 900px)":{width:16,marginLeft:"0px !important"}}}}}));n.Z=function(e){var n=c(e),t=e.onClick,a=e.text,d=void 0===a?"":a,u=e.disabled,m=void 0!==u&&u,p=e.tooltip,h=e.icon,f=void 0===h?null:h,x=e.className,g=void 0===x?"":x,Z=(0,o.Z)(e,l);return(0,s.jsxs)(r.Z,(0,i.Z)((0,i.Z)({className:g,classes:n,tooltip:p||d,variant:"outlined",onClick:t,disabled:m,color:"secondary",size:"medium",sx:{border:"1px solid #f44336","& span":{fontSize:14,"@media (max-width: 900px)":{display:"none"}}}},Z),{},{children:[(0,s.jsx)("span",{children:d})," ",f]}))}},85531:function(e,n,t){var i=t(1413),o=t(4942),r=t(45987),a=(t(72791),t(11135)),s=t(25787),l=t(13400),c=t(20068),d=t(28182),u=t(80184),m=["classes","children","variant","tooltip"];n.Z=(0,s.Z)((function(e){return(0,a.Z)({root:{padding:8,marginLeft:8,borderWidth:1,borderColor:"#696969",color:"#696969",borderStyle:"solid",borderRadius:3,"& .min-icon":{width:20},"& .MuiTouchRipple-root span":{backgroundColor:e.palette.primary.main,borderRadius:3,opacity:.3},"&:disabled":{color:"#EBEBEB",borderColor:"#EBEBEB"}},contained:{borderColor:e.palette.primary.main,background:e.palette.primary.main,color:"white","& .MuiTouchRipple-root span":{backgroundColor:e.palette.primary.dark,borderRadius:3,opacity:.3},"&:hover":{backgroundColor:e.palette.primary.light,color:"#FFF"}}})}))((function(e){var n=e.classes,t=e.children,a=e.variant,s=void 0===a?"outlined":a,p=e.tooltip,h=(0,r.Z)(e,m),f=(0,u.jsx)(l.Z,(0,i.Z)((0,i.Z)({},h),{},{className:(0,d.Z)(n.root,(0,o.Z)({},n.contained,"contained"===s)),children:t}));return p&&""!==p?(0,u.jsx)(c.Z,{title:p,children:(0,u.jsx)("span",{children:f})}):f}))},32291:function(e,n,t){var i=t(72791),o=t(60364),r=t(61889),a=t(11135),s=t(25787),l=t(20890),c=t(13400),d=t(95466),u=t(84683),m=t(3925),p=t(93656),h=t(80184),f={toggleList:m.kQ},x=(0,o.$j)((function(e){return{sidebarOpen:e.system.sidebarOpen,operatorMode:e.system.operatorMode,managerObjects:e.objectBrowser.objectManager.objectsToManage,features:e.console.session.features}}),f);n.Z=x((0,s.Z)((function(e){return(0,a.Z)({headerContainer:{width:"100%",minHeight:79,display:"flex",backgroundColor:"#fff",left:0,boxShadow:"rgba(0,0,0,.08) 0 3px 10px"},label:{display:"flex",justifyContent:"flex-start",alignItems:"center"},labelStyle:{color:"#000",fontSize:18,fontWeight:700,marginLeft:21,marginTop:8},rightMenu:{textAlign:"right"},logo:{marginLeft:34,fill:e.palette.primary.main,"& .min-icon":{width:120}},middleComponent:{display:"flex",justifyContent:"center",alignItems:"center"}})}))((function(e){var n=e.classes,t=e.label,o=e.actions,a=e.sidebarOpen,s=e.operatorMode,m=e.managerObjects,f=e.toggleList,x=e.middleComponent;return e.features.includes("hide-menu")?(0,h.jsx)(i.Fragment,{}):(0,h.jsxs)(r.ZP,{container:!0,className:"".concat(n.headerContainer," page-header"),direction:"row",alignItems:"center",children:[(0,h.jsxs)(r.ZP,{item:!0,xs:12,sm:12,md:x?3:6,className:n.label,sx:{paddingTop:["15px","15px","0","0"]},children:[!a&&(0,h.jsx)("div",{className:n.logo,children:s?(0,h.jsx)(d.Z,{}):(0,h.jsx)(u.Z,{})}),(0,h.jsx)(l.Z,{variant:"h4",className:n.labelStyle,children:t})]}),x&&(0,h.jsx)(r.ZP,{item:!0,xs:12,sm:12,md:6,className:n.middleComponent,sx:{marginTop:["10px","10px","0","0"]},children:x}),(0,h.jsxs)(r.ZP,{item:!0,xs:12,sm:12,md:x?3:6,className:n.rightMenu,children:[o&&o,m&&m.length>0&&(0,h.jsx)(c.Z,{color:"primary","aria-label":"Refresh List",component:"span",onClick:function(){f()},id:"object-manager-toggle",size:"large",children:(0,h.jsx)(p.gx,{})})]})]})})))},59114:function(e,n,t){var i=t(4942),o=t(1413),r=(t(72791),t(63466)),a=t(74900),s=t(27391),l=t(25787),c=t(11135),d=t(23814),u=t(80184);n.Z=(0,l.Z)((function(e){return(0,c.Z)({searchField:(0,o.Z)({},d.qg.searchField),adornment:{}})}))((function(e){var n=e.placeholder,t=void 0===n?"":n,o=e.classes,l=e.onChange,c=e.adornmentPosition,d=void 0===c?"end":c,m=e.overrideClass,p=e.value,h=(0,i.Z)({disableUnderline:!0},"".concat(d,"Adornment"),(0,u.jsx)(r.Z,{position:d,className:o.adornment,children:(0,u.jsx)(a.Z,{})}));return(0,u.jsx)(s.Z,{placeholder:t,className:m||o.searchField,id:"search-resource",label:"",InputProps:h,onChange:function(e){l(e.target.value)},variant:"standard",value:p})}))},94874:function(e,n,t){t.r(n);var i=t(29439),o=t(1413),r=t(72791),a=t(60364),s=t(26181),l=t.n(s),c=t(11135),d=t(25787),u=t(61889),m=t(93656),p=t(42649),h=t(23814),f=t(92983),x=t(32291),g=t(81207),Z=t(62666),b=t(23804),j=t(74794),y=t(56087),C=t(38442),v=t(59114),I=t(75578),P=t(40603),E=t(80184),S=(0,I.Z)(r.lazy((function(){return Promise.all([t.e(3772),t.e(5609),t.e(3320)]).then(t.bind(t,31014))}))),k=(0,I.Z)(r.lazy((function(){return Promise.all([t.e(3772),t.e(2442),t.e(312)]).then(t.bind(t,312))}))),M={setErrorSnackMessage:p.Ih},F=(0,a.$j)(null,M);n.default=(0,d.Z)((function(e){return(0,c.Z)((0,o.Z)((0,o.Z)((0,o.Z)({},h.OR),h.qg),{},{searchField:(0,o.Z)((0,o.Z)({},h.qg.searchField),{},{maxWidth:380}),tableBlock:(0,o.Z)((0,o.Z)({},h.VX.tableBlock),{},{marginTop:15})},(0,h.Bz)(e.spacing(4))))}))(F((function(e){var n=e.classes,t=e.setErrorSnackMessage,o=(0,r.useState)([]),a=(0,i.Z)(o,2),s=a[0],c=a[1],d=(0,r.useState)(!1),p=(0,i.Z)(d,2),h=p[0],I=p[1],M=(0,r.useState)(!1),F=(0,i.Z)(M,2),A=F[0],N=F[1],L=(0,r.useState)(!1),B=(0,i.Z)(L,2),T=B[0],O=B[1],w=(0,r.useState)(""),R=(0,i.Z)(w,2),_=R[0],z=R[1],D=(0,r.useState)(""),W=(0,i.Z)(D,2),Y=W[0],q=W[1],U=(0,r.useState)(null),G=(0,i.Z)(U,2),$=G[0],H=G[1],K=(0,C.F)(y.C3,[y.Ft.ADMIN_GET_POLICY]),Q=(0,C.F)(y.C3,[y.Ft.ADMIN_DELETE_POLICY]),V=(0,C.F)(y.C3,[y.Ft.ADMIN_LIST_USER_POLICIES]);(0,r.useEffect)((function(){X()}),[]),(0,r.useEffect)((function(){h&&(V?g.Z.invoke("GET","/api/v1/policies").then((function(e){var n=l()(e,"policies",[]);n.sort((function(e,n){return e.name>n.name?1:e.name<n.name?-1:0})),I(!1),c(n)})).catch((function(e){I(!1),t(e)})):I(!1))}),[h,I,c,t,V]);var X=function(){I(!0)},J=[{type:"view",onClick:function(e){Z.Z.push("".concat(y.gA.POLICIES,"/").concat(e.name))},disableButtonFunction:function(){return!K}},{type:"delete",onClick:function(e){O(!0),z(e)},sendOnlyId:!0,disableButtonFunction:function(){return!Q}}],ee=s.filter((function(e){return e.name.includes(Y)}));return(0,E.jsxs)(r.Fragment,{children:[A&&(0,E.jsx)(S,{open:A,closeModalAndRefresh:function(e){N(!1),e&&X()},policyEdit:$}),T&&(0,E.jsx)(k,{deleteOpen:T,selectedPolicy:_,closeDeleteModalAndRefresh:function(e){O(!1),e&&X()}}),(0,E.jsx)(x.Z,{label:"IAM Policies"}),(0,E.jsxs)(j.Z,{className:n.pageContainer,children:[(0,E.jsxs)(u.ZP,{item:!0,xs:12,className:n.actionsTray,children:[(0,E.jsx)(v.Z,{onChange:q,placeholder:"Search Policies",overrideClass:n.searchField,value:Y}),(0,E.jsx)(C.s,{scopes:[y.Ft.ADMIN_CREATE_POLICY],resource:y.C3,errorProps:{disabled:!0},children:(0,E.jsx)(P.Z,{tooltip:"Create Policy",text:"Create Policy",variant:"contained",color:"primary",icon:(0,E.jsx)(m.dt,{}),onClick:function(){N(!0),H(null)}})})]}),(0,E.jsx)(u.ZP,{item:!0,xs:12,className:n.tableBlock,children:(0,E.jsx)(C.s,{scopes:[y.Ft.ADMIN_LIST_USER_POLICIES],resource:y.C3,errorProps:{disabled:!0},children:(0,E.jsx)(f.Z,{itemActions:J,columns:[{label:"Name",elementKey:"name"}],isLoading:h,records:ee,entityName:"Policies",idField:"name"})})}),(0,E.jsx)(u.ZP,{item:!0,xs:12,children:(0,E.jsx)(b.Z,{title:"Learn more about IAM POLICIES",iconComponent:(0,E.jsx)(m.v4,{}),help:(0,E.jsxs)(r.Fragment,{children:["MinIO uses Policy-Based Access Control (PBAC) to define the authorized actions and resources to which an authenticated user has access. Each policy describes one or more actions and conditions that outline the permissions of a user or group of users.",(0,E.jsx)("br",{}),(0,E.jsx)("br",{}),"MinIO PBAC is built for compatibility with AWS IAM policy syntax, structure, and behavior. The MinIO documentation makes a best-effort to cover IAM-specific behavior and functionality. Consider deferring to the IAM documentation for more complete documentation on AWS IAM-specific topics.",(0,E.jsx)("br",{}),(0,E.jsx)("br",{}),"You can learn more at our"," ",(0,E.jsx)("a",{href:"https://docs.min.io/minio/baremetal/security/minio-identity-management/policy-based-access-control.html?ref=con",target:"_blank",rel:"noreferrer",children:"documentation"}),"."]})})})]})]})})))}}]);
//# sourceMappingURL=4874.80bf31e6.chunk.js.map