(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[804],{2551:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cases/[id]",function(){return n(5718)}])},4466:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var s=n(5893),r=n(8420),i=n(4900);function a(e){let{dateString:t}=e,n=(0,r.Z)(t);return(0,s.jsx)("time",{dateTime:t,children:(0,i.Z)(n,"LLLL d, yyyy")})}},5591:function(e,t,n){"use strict";var s=n(7294);t.Z=()=>{let[e,t]=(0,s.useState)("");return(0,s.useEffect)(()=>{let e;let n=()=>{let e=window.innerWidth;e<768?t("mobile"):e>=768&&e<1400?t("tablet"):t("desktop")},s=function(){for(var t=arguments.length,s=Array(t),r=0;r<t;r++)s[r]=arguments[r];clearTimeout(e),e=setTimeout(()=>{e=null,n.apply(this,s)},200)};return n(),window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}},[]),e}},7212:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var s=n(7294);function r(){let[e,t]=(0,s.useState)(!1),[n,r]=(0,s.useState)(!1),i=(0,s.useRef)(0),a=(0,s.useCallback)(e=>{i.current=e.clientX,t(!0)},[]),o=(0,s.useCallback)(()=>window.requestAnimationFrame(()=>{r(!1),t(!1)}),[]);return{dragStart:a,dragStop:o,dragMove:(t,s)=>{let a=i.current-t.clientX,o=Math.abs(a)>5;e&&o&&r(!0),n&&o&&(i.current=t.clientX,s(a))},dragging:n,position:i,setDragging:r}}},1927:function(e,t,n){"use strict";var s=n(7294);let r=e=>{e.preventDefault&&e.preventDefault(),e.returnValue=!1},i=()=>{document&&document.removeEventListener("wheel",r,!1)},a=()=>{document&&document.addEventListener("wheel",r,{passive:!1})};t.Z=function(){let[e,t]=(0,s.useState)(!1);(0,s.useEffect)(()=>(e?a():i(),i),[e]);let n=(0,s.useCallback)(()=>t(!0),[]),r=(0,s.useCallback)(()=>t(!1),[]);return{disableScroll:n,enableScroll:r}}},5558:function(e,t,n){"use strict";var s=n(7294);t.Z=()=>{let[e,t]=(0,s.useState)(null),[n,r]=(0,s.useState)(null);return{onTouchStart:()=>e=>{r(null),t(e.targetTouches[0].clientX)},onTouchEnd:t=>()=>{if(!e||!n)return!1;let s=e-n,r=Math.abs(s)>50,i=s<50;console.log({isSwipe:r,isLeftSwipe:i}),r&&(i?t.scrollPrev():t.scrollNext())},onTouchMove:()=>e=>{r(e.targetTouches[0].clientX)}}}},5718:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return A},default:function(){return Z}});var s=n(5893),r=n(7294),i=n(9008),a=n.n(i),o=n(5675),c=n.n(o),l=n(4466),u=n(2218);n(8229),n(1781);var d=n(1927),h=n(5558),_=n(7212),f=n(8817),m=n.n(f),p=n(4470),v=n.n(p),x=n(1664),g=n.n(x);function w(e){let{children:t,disabled:n,onClick:r,style:i,isAnimationComplete:a}=e;return(0,s.jsx)("div",{disabled:n,onClick:r,className:a?"".concat(v().fadeIn," ").concat(m().arrow):v().fadeOut,style:i,children:t})}function j(e){let{prevCase:t,isAnimationComplete:n}=e,{isFirstItemVisible:i,scrollToItem:a,getPrevElement:o}=(0,r.useContext)(u.VisibilityContext),c=i&&t.id;return(0,s.jsx)(w,{disabled:!1,style:{justifyContent:"center",alignItems:"center",position:"absolute",fontSize:"1em",left:"2%",width:"36px",padding:"22px",backdropFilter:"blur(44px)"},isAnimationComplete:n,onClick:e=>{e.preventDefault(),i||a(o(),"smooth","start")},children:i?(0,s.jsx)(g(),{href:"/cases/".concat(c),children:"Prev Case"}):"Prev ←"})}function y(e){let{nextCase:t,isAnimationComplete:n}=e,{getNextElement:i,isLastItemVisible:a,scrollToItem:o}=(0,r.useContext)(u.VisibilityContext),c=a&&t.id;return(0,s.jsx)(w,{disabled:!1,style:{justifyContent:"center",alignItems:"center",position:"absolute",fontSize:"1em",right:"2%",width:"36px",padding:"22px"},isAnimationComplete:n,onClick:e=>{e.preventDefault(),a||o(i(),"smooth","end")},children:a?(0,s.jsx)(g(),{href:"/cases/".concat(c),children:"Next Case"}):"Next →"})}var b=n(7566);function C(e){let{children:t,prevCase:n,nextCase:i,totalCases:a,currentNum:o}=e,{disableScroll:c,enableScroll:l}=(0,d.Z)(),{onTouchEnd:f,onTouchMove:m,onTouchStart:p}=(0,h.Z)(),{dragStart:x,dragStop:g,dragMove:w,dragging:C}=(0,_.Z)(),[S,k]=(0,r.useState)(""),{isLoading:E,isAnimationComplete:T,currentContentRef:L}=(0,r.useContext)(b.Z);return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{ref:L,className:E?v().hidden:"",onMouseEnter:c,onMouseLeave:l,children:(0,s.jsx)(u.ScrollMenu,{Header:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"0.9rem",marginTop:"46px"}}),Footer:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"0.9rem",marginTop:"46px"},children:(0,s.jsx)("h3",{className:"".concat(T?v().fadeIn:v().fadeOut),children:"".concat(o,"/").concat(a)})}),onWheel:N,alignCenter:!0,onTouchEnd:f,onTouchMove:m,onTouchStart:p,LeftArrow:(0,s.jsx)(j,{prevCase:n,isAnimationComplete:T}),RightArrow:(0,s.jsx)(y,{nextCase:i,isAnimationComplete:T}),onMouseDown:()=>x,onMouseUp:()=>g,onMouseMove:e=>{let{scrollContainer:t}=e;return e=>w(e,e=>{t.current&&(t.current.scrollLeft+=e)})},options:{throttle:0},children:t})})})}function N(e,t){let{scrollNext:n,scrollPrev:s}=e,r=0!==Math.abs(t.deltaX)||15>Math.abs(t.deltaY);if(r){t.stopPropagation();return}t.deltaY<0?n(void 0,void 0,void 0,{duration:2e3}):t.deltaY>0&&s(void 0,void 0,void 0,{duration:2e3})}var S=n(5591),k=e=>{let[t,n]=(0,r.useState)([]);return(0,r.useEffect)(()=>{let t=new DOMParser,s=t.parseFromString(e,"text/html"),r=s.body.querySelectorAll(":scope > figure, \n       :scope > blockquote, \n       :scope > video, \n       :scope > p, \n       :scope > h1, \n       :scope > h2, \n       :scope > ul"),i=Array.from(r).map(e=>e.outerHTML);n(i)},[e]),t},E=n(925),T=n.n(E),L=n(1163),M=n(3506),A=!0;function Z(e){let{caseData:t}=e,n=(0,L.useRouter)(),i=(0,S.Z)(),{prevCase:o,nextCase:u,cover:d,title:h,date:_,country:f,team:m,tags:p,description:v,contentHtml:x,currentNum:g,totalCases:w}=t,j=k(x),y=(0,r.useRef)(),[b,N]=(0,r.useState)(0),[E,A]=(0,r.useState)(!1),Z=.7*b,z="".concat((b-Z)/2,"px");return(0,r.useEffect)(()=>{function e(){"desktop"!==i&&n.reload()}return window.history.scrollRestoration="manual",window.scrollTo(0,0),A(/Safari/.test(window.navigator.userAgent)),window.addEventListener("resize",e),y.current&&!b&&N(y.current.clientWidth),()=>{window.removeEventListener("resize",e)}},[y,b,i,n]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a(),{children:(0,s.jsx)("title",{children:h})}),(0,s.jsx)("div",{className:T().content,ref:y,children:(0,s.jsxs)(C,{prevCase:o,nextCase:u,currentNum:g,totalCases:w,children:[(0,s.jsxs)("section",{className:T().full,tabIndex:0,style:"desktop"!==i?{width:Z,marginLeft:z,marginRight:z}:{},children:[!E&&(0,s.jsx)("div",{className:T()["img-wrapper"],children:(0,s.jsx)(c(),{src:d,alt:v,fill:!0,lazy:"true",quality:10,sizes:"100vw, 100vh",style:{objectFit:"cover"}})}),(0,s.jsxs)("div",{className:T()["centred-container"],children:[(0,s.jsx)("div",{className:T().tags,children:p.map(e=>(0,s.jsx)("span",{children:e},e))}),f&&(0,s.jsxs)("div",{className:T().footer,children:[(0,s.jsx)(c(),{className:T().country,src:"".concat(M.cR?M.GL:"","/images/").concat(f,".webp"),alt:"Country flag",height:18,width:18}),m&&"mobile"!==i?(0,s.jsxs)("div",{className:T().team,children:["With",(0,s.jsx)("span",{className:T().highlight,children:m}),"team"]}):(0,s.jsx)("div",{className:T().team,children:f})]})]}),(0,s.jsx)("div",{className:T()["overlay-container"],children:(0,s.jsxs)("div",{className:T().main,children:[(0,s.jsx)(l.Z,{dateString:_}),(0,s.jsx)("h1",{children:h}),v]})})]}),j.map((e,t)=>(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:e},style:"desktop"!==i?{width:Z,marginLeft:z,marginRight:z}:{}},t))]})})]})}},8817:function(e){e.exports={arrow:"Arrows_arrow__5X3Uv"}},925:function(e){e.exports={case:"cases_case__JCsmz",selected:"cases_selected__SH9WI",unavailable:"cases_unavailable__D_fN_",disabled:"cases_disabled__YjjS_",full:"cases_full__H22O5","overlay-container":"cases_overlay-container__Q_OB0","centred-container":"cases_centred-container__c7Dus",tags:"cases_tags__0BAQP","img-wrapper":"cases_img-wrapper__tjBCF",main:"cases_main__crozh",footer:"cases_footer__g8dBl",team:"cases_team__f9e_w",country:"cases_country__tANMP",highlight:"cases_highlight__G4Q3i",backgraund:"cases_backgraund__sJ0TH",content:"cases_content__VW6Kn",spin:"cases_spin__DGtu_","slide-in":"cases_slide-in__eOnBQ","slide-out":"cases_slide-out__2VVmO",gradient:"cases_gradient__fJUrE"}}},function(e){e.O(0,[511,774,888,179],function(){return e(e.s=2551)}),_N_E=e.O()}]);