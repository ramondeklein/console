"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[6065],{76065:(e,t,s)=>{s.r(t),s.d(t,{default:()=>S});var c=s(65043),n=s(22166),i=s(73216),a=s(89923),o=s(56629),r=s(53518),l=s(99161),d=s(77938),u=s(64159),m=s(39947),_=s(20554),h=s(70579);const S=()=>{const e=(0,_.jL)(),t=(0,i.Zp)(),s=(0,i.g)(),S=(0,n.d4)(m.Nx),[I,b]=(0,c.useState)("simple-tab-0"),[p,O]=(0,c.useState)(!0),[U,k]=(0,c.useState)([]),[A,E]=(0,c.useState)(!0),[C,L]=(0,c.useState)([]),N=s.bucketName||"",P=(0,d._)(N,[l.OV.ADMIN_LIST_USER_POLICIES]),x=(0,d._)(N,[l.OV.ADMIN_GET_POLICY,l.OV.ADMIN_LIST_USERS,l.OV.ADMIN_LIST_GROUPS],!0),f=(0,d._)(l.Ms,[l.OV.ADMIN_GET_USER]),g=(0,d._)(l.Ms,[l.OV.ADMIN_GET_POLICY,l.OV.ADMIN_LIST_USERS,l.OV.ADMIN_LIST_GROUPS]);(0,c.useEffect)((()=>{S&&(E(!0),O(!0))}),[S,E,O]);const M=[{type:"view",disableButtonFunction:()=>!g,onClick:e=>{t("".concat(l.zZ.POLICIES,"/").concat(encodeURIComponent(e.name)))}}],T=[{type:"view",disableButtonFunction:()=>!f,onClick:e=>{t("".concat(l.zZ.USERS,"/").concat(encodeURIComponent(e)))}}];return(0,c.useEffect)((()=>{A&&(x?o.F.bucketUsers.listUsersWithAccessToBucket(N).then((e=>{L(e.data),E(!1)})).catch((t=>{e((0,u.C9)((0,r.S)(t))),E(!1)})):E(!1))}),[A,e,N,x]),(0,c.useEffect)((()=>{e((0,u.ph)("bucket_detail_access"))}),[]),(0,c.useEffect)((()=>{p&&(P?o.F.bucketPolicy.listPoliciesWithBucket(N).then((e=>{k(e.data.policies),O(!1)})).catch((t=>{e((0,u.C9)((0,r.S)(t))),O(!1)})):O(!1))}),[p,e,N,P]),(0,h.jsxs)(c.Fragment,{children:[(0,h.jsx)(a._xt,{separator:!0,children:(0,h.jsx)(a.V7x,{content:(0,h.jsxs)(c.Fragment,{children:["Understand which"," ",(0,h.jsx)("a",{target:"blank",href:"https://min.io/docs/minio/linux/administration/identity-access-management/policy-based-access-control.html#",children:"Policies"})," ","and"," ",(0,h.jsx)("a",{target:"blank",href:"https://min.io/docs/minio/linux/administration/identity-access-management/minio-user-management.html",children:"Users"})," ","are authorized to access this Bucket."]}),placement:"right",children:"Access Audit"})}),(0,h.jsx)(a.tUM,{currentTabOrPath:I,onTabClick:e=>{b(e)},horizontal:!0,options:[{tabConfig:{label:"Policies",id:"simple-tab-0"},content:(0,h.jsx)(d.R,{scopes:[l.OV.ADMIN_LIST_USER_POLICIES],resource:N,errorProps:{disabled:!0},children:U&&(0,h.jsx)(a.bQt,{noBackground:!0,itemActions:M,columns:[{label:"Name",elementKey:"name"}],isLoading:p,records:U,entityName:"Policies",idField:"name"})})},{tabConfig:{label:"Users",id:"simple-tab-1"},content:(0,h.jsx)(d.R,{scopes:[l.OV.ADMIN_GET_POLICY,l.OV.ADMIN_LIST_USERS,l.OV.ADMIN_LIST_GROUPS],resource:N,matchAll:!0,errorProps:{disabled:!0},children:(0,h.jsx)(a.bQt,{noBackground:!0,itemActions:T,columns:[{label:"User",elementKey:"accessKey"}],isLoading:A,records:C,entityName:"Users",idField:"accessKey"})})}]})]})}}}]);
//# sourceMappingURL=6065.e12fd403.chunk.js.map