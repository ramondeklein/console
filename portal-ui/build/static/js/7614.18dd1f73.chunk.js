(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[7614],{81159:function(e,r,n){"use strict";var t=n(4942),i=n(1413),o=n(72791),a=n(11135),l=n(25787),s=n(9955),c=n(30829),d=n(20068),u=n(20890),p=n(61889),f=n(23814),h=n(29945),x=n(28182),m=n(80184),b=(0,l.Z)((function(e){return{root:{width:50,height:24,padding:0,margin:0},switchBase:{padding:1,"&$checked":{transform:"translateX(24px)",color:e.palette.common.white,"& + $track":{backgroundColor:"#4CCB92",boxShadow:"inset 0px 1px 4px rgba(0,0,0,0.1)",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"#4CCB92",border:"6px solid #fff"}},thumb:{width:22,height:22,backgroundColor:"#FAFAFA",border:"2px solid #FFFFFF",marginLeft:1},track:{borderRadius:12,backgroundColor:"#E2E2E2",boxShadow:"inset 0px 1px 4px rgba(0,0,0,0.1)",opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{},switchContainer:{display:"flex",alignItems:"center",justifyContent:"flex-end"}}}))(s.Z);r.Z=(0,l.Z)((function(e){return(0,a.Z)((0,i.Z)((0,i.Z)({indicatorLabelOn:{fontWeight:"bold",color:"#081C42 !important"},indicatorLabel:{fontSize:12,color:"#E2E2E2",margin:"0 8px 0 10px"},fieldDescription:{marginTop:4,color:"#999999"},tooltip:{fontSize:16}},f.OR),f.YI))}))((function(e){var r=e.label,n=void 0===r?"":r,a=e.onChange,l=e.value,s=e.id,f=e.name,g=e.checked,v=void 0!==g&&g,Z=e.disabled,y=void 0!==Z&&Z,j=e.switchOnly,C=void 0!==j&&j,D=e.tooltip,I=void 0===D?"":D,k=e.description,P=void 0===k?"":k,w=e.classes,_=e.indicatorLabels,N=e.extraInputProps,E=void 0===N?{}:N,L=(0,m.jsxs)(o.Fragment,{children:[!C&&(0,m.jsx)("span",{className:(0,x.Z)(w.indicatorLabel,(0,t.Z)({},w.indicatorLabelOn,!v)),children:_&&_.length>1?_[1]:"OFF"}),(0,m.jsx)(b,{checked:v,onChange:a,color:"primary",name:f,inputProps:(0,i.Z)({"aria-label":"primary checkbox"},E),disabled:y,disableRipple:!0,disableFocusRipple:!0,disableTouchRipple:!0,value:l,id:s}),!C&&(0,m.jsx)("span",{className:(0,x.Z)(w.indicatorLabel,(0,t.Z)({},w.indicatorLabelOn,v)),children:_?_[0]:"ON"})]});return C?L:(0,m.jsx)("div",{children:(0,m.jsxs)(p.ZP,{container:!0,alignItems:"center",children:[(0,m.jsx)(p.ZP,{item:!0,xs:12,sm:8,md:8,children:""!==n&&(0,m.jsxs)(c.Z,{htmlFor:s,className:w.inputLabel,children:[(0,m.jsx)("span",{children:n}),""!==I&&(0,m.jsx)("div",{className:w.tooltipContainer,children:(0,m.jsx)(d.Z,{title:I,placement:"top-start",children:(0,m.jsx)("div",{className:w.tooltip,children:(0,m.jsx)(h.byK,{})})})})]})}),(0,m.jsx)(p.ZP,{item:!0,xs:12,sm:""!==n?4:12,md:""!==n?4:12,textAlign:"right",justifyContent:"end",className:w.switchContainer,children:L}),""!==P&&(0,m.jsx)(p.ZP,{item:!0,xs:12,textAlign:"left",children:(0,m.jsx)(u.Z,{component:"p",className:w.fieldDescription,children:P})})]})})}))},21435:function(e,r,n){"use strict";var t=n(29439),i=n(1413),o=n(72791),a=n(27391),l=n(61889),s=n(30829),c=n(20068),d=n(13400),u=n(20165),p=n(3579),f=n(11135),h=n(72455),x=n(25787),m=n(23814),b=n(29945),g=n(28182),v=n(80184),Z=(0,h.Z)((function(e){return(0,f.Z)((0,i.Z)({},m.gM))}));function y(e){var r=Z();return(0,v.jsx)(a.Z,(0,i.Z)({InputProps:{classes:r}},e))}r.Z=(0,x.Z)((function(e){return(0,f.Z)((0,i.Z)((0,i.Z)((0,i.Z)({},m.YI),m.Hr),{},{textBoxContainer:{flexGrow:1,position:"relative"},overlayAction:{position:"absolute",right:5,top:6,"& svg":{maxWidth:15,maxHeight:15},"&.withLabel":{top:5}}}))}))((function(e){var r=e.label,n=e.onChange,a=e.value,f=e.id,h=e.name,x=e.type,m=void 0===x?"text":x,Z=e.autoComplete,j=void 0===Z?"off":Z,C=e.disabled,D=void 0!==C&&C,I=e.multiline,k=void 0!==I&&I,P=e.tooltip,w=void 0===P?"":P,_=e.index,N=void 0===_?0:_,E=e.error,L=void 0===E?"":E,S=e.required,O=void 0!==S&&S,q=e.placeholder,F=void 0===q?"":q,A=e.min,R=e.max,B=e.overlayId,M=e.overlayIcon,z=void 0===M?null:M,T=e.overlayObject,U=void 0===T?null:T,V=e.extraInputProps,W=void 0===V?{}:V,G=e.overlayAction,K=e.noLabelMinWidth,Y=void 0!==K&&K,$=e.pattern,H=void 0===$?"":$,X=e.autoFocus,J=void 0!==X&&X,Q=e.classes,ee=e.className,re=void 0===ee?"":ee,ne=e.onKeyPress,te=e.onFocus,ie=e.onPaste,oe=(0,i.Z)({"data-index":N},W),ae=(0,o.useState)(!1),le=(0,t.Z)(ae,2),se=le[0],ce=le[1];"number"===m&&A&&(oe.min=A),"number"===m&&R&&(oe.max=R),""!==H&&(oe.pattern=H);var de=z,ue=m;return"password"===m&&null===z&&(de=se?(0,v.jsx)(u.Z,{}):(0,v.jsx)(p.Z,{}),ue=se?"text":"password"),(0,v.jsx)(o.Fragment,{children:(0,v.jsxs)(l.ZP,{container:!0,className:(0,g.Z)(""!==re?re:"",""!==L?Q.errorInField:Q.inputBoxContainer),children:[""!==r&&(0,v.jsxs)(s.Z,{htmlFor:f,className:Y?Q.noMinWidthLabel:Q.inputLabel,children:[(0,v.jsxs)("span",{children:[r,O?"*":""]}),""!==w&&(0,v.jsx)("div",{className:Q.tooltipContainer,children:(0,v.jsx)(c.Z,{title:w,placement:"top-start",children:(0,v.jsx)("div",{className:Q.tooltip,children:(0,v.jsx)(b.byK,{})})})})]}),(0,v.jsxs)("div",{className:Q.textBoxContainer,children:[(0,v.jsx)(y,{id:f,name:h,fullWidth:!0,value:a,autoFocus:J,disabled:D,onChange:n,type:ue,multiline:k,autoComplete:j,inputProps:oe,error:""!==L,helperText:L,placeholder:F,className:Q.inputRebase,onKeyPress:ne,onFocus:te,onPaste:ie}),de&&(0,v.jsx)("div",{className:"".concat(Q.overlayAction," ").concat(""!==r?"withLabel":""),children:(0,v.jsx)(d.Z,{onClick:G?function(){G()}:function(){return ce(!se)},id:B,size:"small",disableFocusRipple:!1,disableRipple:!1,disableTouchRipple:!1,children:de})}),U&&(0,v.jsx)("div",{className:"".concat(Q.overlayAction," ").concat(""!==r?"withLabel":""),children:U})]})]})})}))},37099:function(e,r,n){"use strict";var t=n(72791),i=n(64554),o=n(29945),a=n(80184),l=function(e){var r=e.icon,n=e.description;return(0,a.jsxs)(i.Z,{sx:{display:"flex","& .min-icon":{marginRight:"10px",height:"23px",width:"23px",marginBottom:"10px"}},children:[r," ",(0,a.jsx)("div",{style:{fontSize:"14px",fontStyle:"italic",color:"#5E5E5E"},children:n})]})};r.Z=function(e){var r=e.helpText,n=e.docLink,s=e.docText,c=e.contents;return(0,a.jsxs)(i.Z,{sx:{flex:1,border:"1px solid #eaeaea",borderRadius:"2px",display:"flex",flexFlow:"column",padding:"20px"},children:[(0,a.jsxs)(i.Z,{sx:{fontSize:"16px",fontWeight:600,display:"flex",alignItems:"center",marginBottom:"16px",paddingBottom:"20px","& .min-icon":{height:"21px",width:"21px",marginRight:"15px"}},children:[(0,a.jsx)(o.M9A,{}),(0,a.jsx)("div",{children:r})]}),(0,a.jsxs)(i.Z,{sx:{fontSize:"14px",marginBottom:"15px"},children:[c.map((function(e,r){return(0,a.jsxs)(t.Fragment,{children:[e.icon&&(0,a.jsx)(i.Z,{sx:{paddingBottom:"20px"},children:(0,a.jsx)(l,{icon:e.icon,description:e.iconDescription})}),(0,a.jsx)(i.Z,{sx:{paddingBottom:"20px"},children:e.text})]},"feature-item-".concat(r))})),(0,a.jsx)(i.Z,{sx:{paddingBottom:"20px"},children:(0,a.jsx)("a",{href:n,target:"_blank",rel:"noopener",children:s})})]})]})}},47614:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return P}});var t=n(72791),i=n(56087),o=n(29945),a=n(4942),l=n(29439),s=n(1413),c=n(11135),d=n(25787),u=n(61889),p=n(64554),f=n(23814),h=n(21435),x=n(57689),m=n(81551),b=n(87995),g=n(9505),v=n(50896),Z=n(81159),y=n(47974),j=n(99670),C=n(80184),D=(0,d.Z)((function(e){return(0,c.Z)((0,s.Z)((0,s.Z)({},f.DF),f.oO))}))((function(e){var r=e.classes,n=e.icon,i=e.helpBox,c=e.header,d=e.backLink,f=e.title,D=e.formFields,I=e.endpoint,k=(0,s.Z)({name:{required:!0,hasError:function(e,r){return!e&&r?"Config Name is required":""},label:"Name",tooltip:"Name for identity provider configuration",placeholder:"Name",type:"text"}},D),P=(0,x.s0)(),w=(0,m.TL)(),_=(0,t.useState)({}),N=(0,l.Z)(_,2),E=N[0],L=N[1],S=(0,g.Z)((function(e){P(d),w((0,b.cN)(!0===e.restart))}),(function(e){return w((0,b.Ih)(e))})),O=(0,l.Z)(S,2),q=O[0],F=O[1],A=function(e,r){return"toggle"===r.type?(0,C.jsx)(Z.Z,{indicatorLabels:["Enabled","Disabled"],checked:"on"===E[e],value:"is-field-enabled",id:"is-field-enabled",name:"is-field-enabled",label:r.label,tooltip:r.tooltip,onChange:function(r){return L((0,s.Z)((0,s.Z)({},E),{},(0,a.Z)({},e,r.target.checked?"on":"off")))},description:""}):(0,C.jsx)(h.Z,{id:e,required:r.required,name:e,label:r.label,tooltip:r.tooltip,error:r.hasError(E[e],!0),value:E[e]?E[e]:"",onChange:function(r){return L((0,s.Z)((0,s.Z)({},E),{},(0,a.Z)({},e,r.target.value)))},placeholder:r.placeholder,type:r.type})};return(0,t.useEffect)((function(){w((0,b.Sc)("add_idp_config"))}),[]),(0,C.jsxs)(u.ZP,{item:!0,xs:12,children:[(0,C.jsx)(y.Z,{label:(0,C.jsx)(o.hbI,{onClick:function(){return P(d)},label:c}),actions:(0,C.jsx)(j.Z,{})}),(0,C.jsx)(o.Xgh,{children:(0,C.jsxs)(p.Z,{sx:{display:"grid",padding:"25px",gap:"25px",gridTemplateColumns:{md:"2fr 1.2fr",xs:"1fr"},border:"1px solid #eaeaea"},children:[(0,C.jsxs)(p.Z,{children:[(0,C.jsx)(v.Z,{icon:n,children:f}),(0,C.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){!function(e){e.preventDefault();for(var r=E.name,n="",t=0,i=Object.keys(D);t<i.length;t++){var o=i[t];E[o]&&(n+="".concat(o,"=").concat(E[o]," "))}F("POST",I,{name:r,input:n})}(e)},children:(0,C.jsx)(u.ZP,{container:!0,item:!0,spacing:"20",sx:{marginTop:1},children:(0,C.jsxs)(u.ZP,{xs:12,item:!0,children:[Object.entries(k).map((function(e){var n=(0,l.Z)(e,2),t=n[0],i=n[1];return(0,C.jsx)(u.ZP,{item:!0,xs:12,className:r.formFieldRow,children:A(t,i)},t)})),(0,C.jsx)(u.ZP,{item:!0,xs:12,textAlign:"right",children:(0,C.jsxs)(p.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-end",marginTop:"20px",gap:"15px"},children:[(0,C.jsx)(o.zxk,{id:"clear",type:"button",variant:"regular",onClick:function(){L({})},label:"Clear"}),(0,C.jsx)(o.zxk,{id:"save-key",type:"submit",variant:"callAction",color:"primary",disabled:q||!function(){for(var e=0,r=Object.entries(k);e<r.length;e++){var n=(0,l.Z)(r[e],2),t=n[0];if(n[1].required&&(void 0===E[t]||null===E[t]||""===E[t]))return!1}return!0}(),label:"Save"})]})})]})})})]}),i]})})]})})),I=n(79979),k=n(37099),P=function(){return(0,C.jsx)(D,{icon:(0,C.jsx)(o.mBM,{}),helpBox:(0,C.jsx)(k.Z,{helpText:"Learn more about OpenID Connect Configurations",contents:I.f4,docLink:"https://min.io/docs/minio/linux/operations/external-iam.html?ref=con#minio-external-iam-oidc",docText:"Learn more about OpenID Connect Configurations"}),header:"OpenID Configurations",backLink:i.gA.IDP_OPENID_CONFIGURATIONS,title:"Create OpenID Configuration",endpoint:"/api/v1/idp/openid/",formFields:I.DY})}},79979:function(e,r,n){"use strict";n.d(r,{DY:function(){return s},Si:function(){return a},f4:function(){return l},iR:function(){return c}});var t=n(50521),i=n(29945),o=n(80184),a=[{text:"MinIO supports using an Active Directory or LDAP (AD/LDAP) service for external management of user identities. Configuring an external IDentity Provider (IDP) enables Single-Sign On (SSO) workflows, where applications authenticate against the external IDP before accessing MinIO.",icon:(0,o.jsx)(t.Z,{}),iconDescription:"Create Configurations"},{text:"MinIO queries the configured Active Directory / LDAP server to verify the credentials specified by the application and optionally return a list of groups in which the user has membership. MinIO supports two modes (Lookup-Bind Mode and Username-Bind Mode) for performing these queries",icon:null,iconDescription:""},{text:"MinIO recommends using Lookup-Bind mode as the preferred method for verifying AD/LDAP credentials. Username-Bind mode is a legacy method retained for backwards compatibility only.",icon:null,iconDescription:""}],l=[{text:"MinIO supports using an OpenID Connect (OIDC) compatible IDentity Provider (IDP) such as Okta, KeyCloak, Dex, Google, or Facebook for external management of user identities.",icon:(0,o.jsx)(i.mBM,{}),iconDescription:"Create Configurations"},{text:"Configuring an external IDP enables Single-Sign On workflows, where applications authenticate against the external IDP before accessing MinIO.",icon:null,iconDescription:""}],s={config_url:{required:!0,hasError:function(e,r){return!e&&r?"Config URL is required":""},label:"Config URL",tooltip:"Config URL for identity provider configuration",placeholder:"https://identity-provider-url/.well-known/openid-configuration",type:"text"},client_id:{required:!0,hasError:function(e,r){return!e&&r?"Client ID is required":""},label:"Client ID",tooltip:"Identity provider Client ID",placeholder:"Enter Client ID",type:"text"},client_secret:{required:!0,hasError:function(e,r){return!e&&r?"Client Secret is required":""},label:"Client Secret",tooltip:"Identity provider Client Secret",placeholder:"Enter Client Secret",type:"password"},claim_name:{required:!1,label:"Claim Name",tooltip:"Claim from which MinIO will read the policy or role to use",placeholder:"Enter Claim Name",type:"text",hasError:function(e,r){return""}},display_name:{required:!1,label:"Display Name",tooltip:"",placeholder:"Enter Display Name",type:"text",hasError:function(e,r){return""}},claim_prefix:{required:!1,label:"Claim Prefix",tooltip:"",placeholder:"Enter Claim Prefix",type:"text",hasError:function(e,r){return""}},scopes:{required:!1,label:"Scopes",tooltip:"",placeholder:"openid,profile,email",type:"text",hasError:function(e,r){return""}},redirect_uri:{required:!1,label:"Redirect URI",tooltip:"",placeholder:"https://console-endpoint-url/oauth_callback",type:"text",hasError:function(e,r){return""}},role_policy:{required:!1,label:"Role Policy",tooltip:"",placeholder:"readonly",type:"text",hasError:function(e,r){return""}},claim_userinfo:{required:!1,label:"Claim User Info",tooltip:"",placeholder:"Claim User Info",type:"toggle",hasError:function(e,r){return""}},redirect_uri_dynamic:{required:!1,label:"Redirect URI Dynamic",tooltip:"",placeholder:"Redirect URI Dynamic",type:"toggle",hasError:function(e,r){return""}}},c={server_insecure:{required:!0,hasError:function(e,r){return!e&&r?"Server Address is required":""},label:"Server Insecure",tooltip:"Disable SSL certificate verification ",placeholder:"myldapserver.com:636",type:"toggle"},server_addr:{required:!0,hasError:function(e,r){return!e&&r?"Server Address is required":""},label:"Server Address",tooltip:'AD/LDAP server address e.g. "myldapserver.com:636"',placeholder:"myldapserver.com:636",type:"text"},lookup_bind_dn:{required:!0,hasError:function(e,r){return!e&&r?"Lookup Bind DN is required":""},label:"Lookup Bind DN",tooltip:"DN (Distinguished Name) for LDAP read-only service account used to perform DN and group lookups",placeholder:"cn=admin,dc=min,dc=io",type:"text"},lookup_bind_password:{required:!0,hasError:function(e,r){return!e&&r?"Lookup Bind Password is required":""},label:"Lookup Bind Password",tooltip:"Password for LDAP read-only service account used to perform DN and group lookups",placeholder:"admin",type:"password"},user_dn_search_base_dn:{required:!0,hasError:function(e,r){return!e&&r?"User DN Search Base DN is required":""},label:"User DN Search Base",tooltip:"",placeholder:"DC=example,DC=net",type:"text"},user_dn_search_filter:{required:!0,hasError:function(e,r){return!e&&r?"User DN Search Filter is required":""},label:"User DN Search Filter",tooltip:"",placeholder:"(sAMAcountName=%s)",type:"text"},group_search_base_dn:{required:!1,hasError:function(e,r){return""},label:"Group Search Base DN",tooltip:"",placeholder:"ou=swengg,dc=min,dc=io",type:"text"},group_search_filter:{required:!1,hasError:function(e,r){return""},label:"Group Search Filter",tooltip:"",placeholder:"(&(objectclass=groupofnames)(member=%d))",type:"text"}}},50521:function(e,r,n){"use strict";var t=n(64836);r.Z=void 0;var i=t(n(45649)),o=n(80184),a=(0,i.default)((0,o.jsx)("path",{d:"M11 7 9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z"}),"Login");r.Z=a},3579:function(e,r,n){"use strict";var t=n(64836);r.Z=void 0;var i=t(n(45649)),o=n(80184),a=(0,i.default)((0,o.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"RemoveRedEye");r.Z=a},20165:function(e,r,n){"use strict";var t=n(64836);r.Z=void 0;var i=t(n(45649)),o=n(80184),a=(0,i.default)((0,o.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");r.Z=a},45649:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=n(28610)},31260:function(e,r,n){"use strict";var t=n(78949);r.Z=t.Z},28610:function(e,r,n){"use strict";n.r(r),n.d(r,{capitalize:function(){return i.Z},createChainedFunction:function(){return o.Z},createSvgIcon:function(){return a.Z},debounce:function(){return l.Z},deprecatedPropType:function(){return s},isMuiElement:function(){return c.Z},ownerDocument:function(){return d.Z},ownerWindow:function(){return u.Z},requirePropFactory:function(){return p},setRef:function(){return f},unstable_ClassNameGenerator:function(){return y},unstable_useEnhancedEffect:function(){return h.Z},unstable_useId:function(){return x.Z},unsupportedProp:function(){return m},useControlled:function(){return b.Z},useEventCallback:function(){return g.Z},useForkRef:function(){return v.Z},useIsFocusVisible:function(){return Z.Z}});var t=n(55902),i=n(14036),o=n(31260),a=n(76189),l=n(83199);var s=function(e,r){return function(){return null}},c=n(19103),d=n(98301),u=n(17602);n(87462);var p=function(e,r){return function(){return null}},f=n(62971).Z,h=n(40162),x=n(67384);var m=function(e,r,n,t,i){return null},b=n(98278),g=n(89683),v=n(42071),Z=n(23031),y={configure:function(e){t.Z.configure(e)}}},19103:function(e,r,n){"use strict";n.d(r,{Z:function(){return i}});var t=n(72791);var i=function(e,r){return t.isValidElement(e)&&-1!==r.indexOf(e.type.muiName)}},78949:function(e,r,n){"use strict";function t(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return r.reduce((function(e,r){return null==r?e:function(){for(var n=arguments.length,t=new Array(n),i=0;i<n;i++)t[i]=arguments[i];e.apply(this,t),r.apply(this,t)}}),(function(){}))}n.d(r,{Z:function(){return t}})},64836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=7614.18dd1f73.chunk.js.map