"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[5941],{65941:(e,s,t)=>{t.r(s),t.d(s,{default:()=>p});var n=t(65043),o=t(25448),r=t(58661),i=t(89923),l=t(64159),c=t(20554),a=t(77938),d=t(99161),u=t(22166),b=t(56629),h=t(56483),v=t(70579);const p=e=>{let{closeDeleteModalAndRefresh:s,deleteOpen:t,selectedBucket:p,selectedObjects:j,versioning:g}=e;const x=(0,c.jL)(),f=()=>s(!0),[m,C]=(0,o.A)(f,(e=>x((0,l.C9)(e)))),[y,O]=(0,n.useState)(!1),[_,k]=(0,n.useState)(!1),w=(0,u.d4)((e=>e.objectBrowser.retentionConfig)),T=(0,a._)([p],[d.OV.S3_BYPASS_GOVERNANCE_RETENTION])&&"governance"===(null===w||void 0===w?void 0:w.mode);if(!j)return null;const A="Enabled"===(null===g||void 0===g?void 0:g.status)||"Suspended"===(null===g||void 0===g?void 0:g.status);return(0,v.jsx)(r.A,{title:"Delete Objects",confirmText:"Delete",isOpen:t,titleIcon:(0,v.jsx)(i.xWY,{}),isLoading:m,onConfirm:()=>{let e=[];for(let s=0;s<j.length;s++)j[s].endsWith("/")?e.push({path:j[s],versionID:"",recursive:!0}):e.push({path:j[s],versionID:"",recursive:!1});if(e)if(1===j.length){const e=j[0];b.F.buckets.deleteObject(p,{prefix:(0,h.nf)(e),all_versions:y,bypass:_,recursive:e.endsWith("/")}).then(f).catch((e=>{x((0,l.C9)({errorMessage:"Could not delete object. ".concat(e.statusText,". ").concat(w?"Please check retention mode and if object is WORM protected.":""),detailedError:""}))}))}else C("POST","/api/v1/buckets/".concat(p,"/delete-objects?all_versions=").concat(y).concat(_?"&bypass=true":""),e)},onClose:()=>s(!1),confirmationContent:(0,v.jsxs)(n.Fragment,{children:["Are you sure you want to delete the selected ",j.length," ","objects?"," ",A&&(0,v.jsxs)(n.Fragment,{children:[(0,v.jsx)("br",{}),(0,v.jsx)("br",{}),(0,v.jsx)(i.dOG,{label:"Delete All Versions",indicatorLabels:["Yes","No"],checked:y,value:"delete_versions",id:"delete-versions",name:"delete-versions",onChange:e=>{O(!y)},description:""}),T&&y&&(0,v.jsx)(n.Fragment,{children:(0,v.jsx)("div",{style:{marginTop:10},children:(0,v.jsx)(i.dOG,{label:"Bypass Governance Mode",indicatorLabels:["Yes","No"],checked:_,value:"bypass_governance",id:"bypass_governance",name:"bypass_governance",onChange:e=>{k(!_)},description:""})})}),y&&(0,v.jsxs)(n.Fragment,{children:[(0,v.jsxs)("div",{style:{marginTop:10,border:"#c83b51 1px solid",borderRadius:3,padding:5,backgroundColor:"#c83b5120",color:"#c83b51"},children:["This will remove the objects as well as all of their versions, ",(0,v.jsx)("br",{}),"This action is irreversible."]}),(0,v.jsx)("br",{}),"Are you sure you want to continue?"]})]})]})})}}}]);
//# sourceMappingURL=5941.4df5a08b.chunk.js.map