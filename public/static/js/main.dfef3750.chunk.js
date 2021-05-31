(this.webpackJsonpfotoley=this.webpackJsonpfotoley||[]).push([[0],{120:function(e,n,t){"use strict";t.r(n);var a,c,r,i,s,o,d,l,j,p,u,x,b,h,O,f,v,g,y,m,w,_,D,S,k,C,E,z,A,R,q,I,M=t(0),U=t(16),F=t.n(U),T=(t(86),t(6)),B=t(11),J=t(121),K=t(143),L=t(144),N=t(145),P=t(142),G=t(68),H=t(7),Q=Object(M.createContext)(),V=t(2),W=H.a.div(a||(a=Object(T.a)(["\n    display: flex;\n    justify-content: center;\n    align-items:center;\n    height: 100vh;\n    overflow: hidden;\n"]))),X=Object(H.a)(G.DebounceInput)(c||(c=Object(T.a)(["\nflex:8;\nwidth:inherit;\nborder:none;\noutline: none;\nheight: 30px;\n"]))),Y=Object(H.a)(P.a)(r||(r=Object(T.a)(["\nflex:1;\ncolor:#707070;  \npadding:2px;\nmargin:2px;\nheight: 30px;\n"]))),Z=H.a.div(i||(i=Object(T.a)(["\ndisplay: flex;\nborder: 1px solid #7070704A;\nborder-radius: 20px;\nfont-size: 20px;\nwidth: 100%;\nmax-width: 350px;\npadding : 2px; \nposition: absolute;\ntop: 40%;\nflex-direction: column;\n"]))),$=function(e){var n=e.history;console.log("history",n);var t=Object(M.useContext)(Q),a=t.searchUser,c=t.searchData,r=Object(M.useState)(""),i=Object(B.a)(r,2),s=i[0],o=i[1],d=Object(M.useState)({cursor:0,result:[]}),l=Object(B.a)(d,2),j=l[0],p=l[1];Object(M.useEffect)((function(){document.getElementById("id").focus()}),[]),Object(M.useEffect)((function(){a(s),p((function(e){return{result:c}}))}),[s]);return Object(V.jsx)(W,{children:Object(V.jsxs)(Z,{children:[Object(V.jsxs)("div",{style:{width:"100%",display:"flex",padding:"2px 10px"},children:[Object(V.jsx)(X,{id:"id",placeholder:"Search artists and topics here\u2026",minLength:2,value:s,debounceTimeout:800,onChange:function(e){return o(e.target.value)},onKeyDown:function(e){var n=j.cursor,t=j.result;console.log("cursor",n),38===e.keyCode&&n>0?p((function(e){return{cursor:e.cursor-1}})):40===e.keyCode&&n<t.length-1&&p((function(e){return{cursor:e.cursor+1}}))}}),Object(V.jsx)(Y,{children:Object(V.jsx)(J.a,{style:{padding:"0px"},children:Object(V.jsx)(P.a,{scale:2})})})]}),c.length>0&&Object(V.jsx)("div",{children:Object(V.jsx)(K.a,{component:"nav","aria-label":"secondary mailbox folders",children:c.map((function(e,t){console.log("element",e);var a=e.artist_type,c=e.vendor_city,r=e.vendor_name,i=e.vendor_page_url,s="/profile/".concat(a,"/").concat(c,"/").concat(i);return Object(V.jsx)(L.a,{value:s,onClick:function(){return n.replace(s)},children:Object(V.jsx)(N.a,{primary:r})},i)}))})})]})})},ee=t(18),ne=t(148),te=t(146),ae=t(47),ce=t(147),re=t(149),ie=t(75),se=t.n(ie),oe=t(150),de=t(72),le=H.a.div(s||(s=Object(T.a)(["\ndisplay:flex;\npadding:10px 0px;\n\n"]))),je=H.a.div(o||(o=Object(T.a)(["\nalign-items: center;\nflex:1;\n"]))),pe=H.a.div(d||(d=Object(T.a)(["\nflex:9;\ndisplay:flex;\nflex-direction:column;\njustify-content:space-between;\npadding:10px;\n"]))),ue=H.a.div(l||(l=Object(T.a)(["\ndisplay: flex;\nflex-direction: revert;\njustify-content: space-between;\n"]))),xe=H.a.div(j||(j=Object(T.a)(["\nheight:100%;\npadding:10px 0;\n"]))),be=function(e){var n=e.customer_name,t=e.vendor_rating,a=e.review_comments,c=e.rated_date;return Object(V.jsxs)(le,{children:[Object(V.jsx)(je,{children:Object(V.jsx)(re.a,{})}),Object(V.jsxs)(pe,{children:[Object(V.jsxs)(ue,{children:[Object(V.jsx)("span",{style:{fontSize:"16px",whiteSpace:"nowrap"},children:n}),Object(V.jsx)(oe.a,{readOnly:!0,value:t,precision:.5})]}),Object(V.jsx)(xe,{children:Object(V.jsx)("span",{style:{fontSize:"14px"},children:a})}),Object(V.jsx)("span",{style:{color:"#CDCED2",fontSize:"12px"},children:c})]})]})},he=H.a.div(p||(p=Object(T.a)(["\ndisplay:flex;\njustify-content: center;\nflex-direction:column;\nflex:8;\n"]))),Oe=H.a.img(u||(u=Object(T.a)(["\nwidth: 100%;\nheight:100%;\nmax-height: 200px;\nheight: inherit;\nobject-fit: cover;\nborder-radius:25px;\n"]))),fe=H.a.div(x||(x=Object(T.a)(["\nflex:2;\nmargin:10px"]))),ve=H.a.div(b||(b=Object(T.a)(["\nflex:8;\ndisplay:flex;\nflex-direction: row;\n"]))),ge=H.a.div(h||(h=Object(T.a)(["\nflex:6;\nwidth :100%;"]))),ye=H.a.div(O||(O=Object(T.a)(["\nflex:4;\nwidth :100%; \npadding:20px;"]))),me=H.a.div(f||(f=Object(T.a)(["\ndisplay:flex;\nflex-direction:column;\npadding:10px"]))),we=H.a.div(v||(v=Object(T.a)([""]))),_e=Object(H.a)(re.a)(g||(g=Object(T.a)(["flex:3;"]))),De=Object(H.a)(oe.a)(y||(y=Object(T.a)([""]))),Se=H.a.div(m||(m=Object(T.a)(["\npadding:20px;\n"]))),ke=H.a.span(w||(w=Object(T.a)(["\nfont-size:30px;\nwhite-space: nowrap;"]))),Ce=H.a.span(_||(_=Object(T.a)(["\nfont-size:14px;\nwhite-space: nowrap;\n"]))),Ee=H.a.span(D||(D=Object(T.a)(["\nfont-size:14px;\nwhite-space: nowrap;"]))),ze=H.a.div(S||(S=Object(T.a)(["\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\nflex:8;\nwidth: 100%;\npadding:20px;\n"]))),Ae=H.a.div(k||(k=Object(T.a)(["\ndisplay: flex;\nflex-direction: column;\npadding: 5px;"]))),Re=H.a.div(C||(C=Object(T.a)(["\ndisplay:flex;\njustify-content: center;\nflex-direction:column;\nalign-items:center;\nflex:2;\nheight:calc(100vh - 4rem);\nposition:sticky;\ntop: 0;\npadding: 2rem;\n"]))),qe=H.a.div(E||(E=Object(T.a)(["\ndisplay:flex;\nflex-direction:row;\nwidth: 95%;\npadding:0;\nmargin:0;\n"]))),Ie=H.a.div(z||(z=Object(T.a)(["\nwidth: 100%;\ndisplay:flex;\njustify-content: center;\npadding:0;\nmargin:0;\n"]))),Me=H.a.div(A||(A=Object(T.a)(["\ndisplay: flex;\nflex-direction: column;\n"]))),Ue=H.a.span(R||(R=Object(T.a)(["\nfont-size:18px;\nfont-weight:bold;\n"]))),Fe=H.a.span(q||(q=Object(T.a)(["\nfont-size:8px;\n"]))),Te=H.a.div(I||(I=Object(T.a)(["\nwidth: 100%;\npadding-top:20px;\ndisplay:flex;\nflex-direction:row;\njustify-content:space-evenly;   \n"]))),Be=function(e){var n=e.match.params,t=n.artist_type_url,a=n.city_url,c=n.vendor_page_url,r=Object(M.useContext)(Q),i=r.userData,s=r.getUser,o=Object(M.useState)([]),d=Object(B.a)(o,2),l=d[0],j=d[1],p=Object(M.useState)(i),u=Object(B.a)(p,2),x=u[0],b=u[1],h=x.vendor_name,O=x.vendor_avatar,f=x.vendor_timeline_pic,v=x.artist_type,g=x.city_name,y=x.country_code,m=x.vendor_reviews,w=x.vendor_about;x.post_count,x.vendor_media;Object(M.useEffect)((function(){s({artist_type_url:t,city_url:a,vendor_page_url:c},(function(n){n||e.history.replace("/")})),b(i)}),[]),Object(M.useEffect)((function(){b(i),C(i.vendor_media)}),[i]);var _=Object(M.useState)(Math.floor(6*Math.random())+0),D=Object(B.a)(_,1)[0],S=[{data:"52",name:"Collections"},{data:"1321",name:"Followers"},{data:"20K",name:"Following"}],k=function(){return S.map((function(e,n){return Object(V.jsxs)(Me,{children:[Object(V.jsx)(Ue,{children:e.data}),Object(V.jsx)(Fe,{children:e.name})]},n)}))},C=function(e){var n=[{height:2,width:3},{height:2,width:1},{height:3,width:4},{height:4,width:3},{height:5,width:4}];if(e){var t=e.filter((function(e){return 1===e.media_type})),a=(t=t.map((function(e){var t=n[Math.floor(Math.random()*n.length)];return Object(ee.a)({src:e.media_url},t)}))).sort((function(){return.5-Math.random()}));j(a.slice(0,6))}},E=function(){return void 0===m||0===m.length?Object(V.jsx)(V.Fragment,{}):Object(V.jsxs)(ne.a,{children:[Object(V.jsx)(te.a,{expandIcon:Object(V.jsx)(se.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(V.jsx)(ae.a,{children:Object(V.jsx)("b",{children:"See Reviews"})})}),Object(V.jsx)(ce.a,{style:{display:"flex",flexDirection:"column"},children:null===m||void 0===m?void 0:m.map((function(e,n){return Object(V.jsx)(be,Object(ee.a)({},e),n)}))})]})};return Object(V.jsx)(Ie,{children:Object(V.jsxs)(qe,{children:[Object(V.jsxs)(Re,{children:[Object(V.jsxs)(Se,{children:[Object(V.jsx)(_e,{src:O,style:{height:"120px",width:"120px"}}),Object(V.jsx)(De,{name:"rating",precision:.5,value:D,readOnly:!0})]}),Object(V.jsxs)(ze,{children:[Object(V.jsxs)(Ae,{children:[Object(V.jsx)(ke,{children:h}),Object(V.jsx)(Ce,{children:v}),Object(V.jsxs)(Ee,{children:[g," - ",y]})]}),Object(V.jsx)(Te,{children:Object(V.jsx)(k,{})})]})]}),Object(V.jsxs)(he,{children:[Object(V.jsx)(fe,{children:Object(V.jsx)(Oe,{src:f,alt:"loading..."})}),Object(V.jsxs)(ve,{children:[Object(V.jsx)(ge,{children:void 0!==l&&l.length>0&&Object(V.jsx)(de.a,{margin:10,photos:l,direction:"column"})}),Object(V.jsxs)(ye,{children:[Object(V.jsxs)(me,{children:[Object(V.jsx)("span",{style:{padding:"10px 0px 10px 0px",whiteSpace:"nowrap",textTransform:"uppercase",color:"#404040"},children:"Biography"}),Object(V.jsx)("span",{style:{color:"#404040"},children:w})]}),Object(V.jsx)(we,{children:Object(V.jsx)(E,{})})]})]})]})]})})},Je=t(76),Ke=t(9);var Le=function(){return Object(V.jsx)(Je.a,{children:Object(V.jsxs)(Ke.c,{children:[Object(V.jsx)(Ke.a,{exact:!0,path:"/profile/:artist_type_url/:city_url/:vendor_page_url",component:Be}),Object(V.jsx)(Ke.a,{exact:!0,path:"",component:$}),Object(V.jsx)(Ke.a,{render:function(){return Object(V.jsx)("div",{children:"404 | Page Not Found"})}})]})})},Ne=t(35),Pe=t.n(Ne),Ge=t(52),He="LOADING",Qe="SEARCH_DATA",Ve="USER_DATA",We="ERROR",Xe="https://fotoley.herokuapp.com/api/",Ye=function(e,n){switch(n.type){case Qe:return Object(ee.a)(Object(ee.a)({},e),{},{loading:!1,searchData:n.payload});case Ve:return Object(ee.a)(Object(ee.a)({},e),{},{loading:!1,userData:n.payload});case We:return Object(ee.a)(Object(ee.a)({},e),{},{loading:!1,error:n.payload});case He:return Object(ee.a)(Object(ee.a)({},e),{},{loading:!0});default:return e}},Ze=t(53),$e=t.n(Ze),en=function(e){var n=Object(M.useReducer)(Ye,{loading:!1,error:null,searchData:[],userData:{}}),t=Object(B.a)(n,2),a=t[0],c=t[1],r=function(){var e=Object(Ge.a)(Pe.a.mark((function e(n){var t,a;return Pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(),e.next=4,$e.a.post(Xe+"searchArtist",{query:n});case 4:t=e.sent,c({type:Qe,payload:t.data}),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),a="",a=e.t0.response?e.t0.response.data:e.t0.request?e.t0.request:e.t0.message,o(a);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),i=function(){var e=Object(Ge.a)(Pe.a.mark((function e(n,t){var a,r;return Pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(),e.next=4,$e.a.post(Xe+"getArtistDetails",n);case 4:a=e.sent,c({type:Ve,payload:a.data}),t(!0),e.next=15;break;case 9:e.prev=9,e.t0=e.catch(0),r="",r=e.t0.response?e.t0.response.data:e.t0.request?e.t0.request:e.t0.message,o(r),t(!1);case 15:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n,t){return e.apply(this,arguments)}}(),s=function(){return c({type:He})},o=function(e){return c({type:We,dispatch:e})};return Object(V.jsx)(Q.Provider,{value:{loading:a.loading,error:a.error,searchData:a.searchData,userData:a.userData,searchUser:r,getUser:i,setError:o},children:e.children})};F.a.render(Object(V.jsx)(en,{children:Object(V.jsx)(Le,{})}),document.getElementById("root"))},86:function(e,n,t){}},[[120,1,2]]]);
//# sourceMappingURL=main.dfef3750.chunk.js.map