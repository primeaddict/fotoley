(this.webpackJsonpfotoley=this.webpackJsonpfotoley||[]).push([[0],{124:function(e,n,t){"use strict";t.r(n);var a,c,i,r,s,d,o,l,j,p,x,h,b,u,O,f,g,m,v,y,w,_,D,k,S,C,E,z,A,L,R,I,M,q,U=t(0),F=t(16),T=t.n(F),B=(t(93),t(6)),J=t(11),K=t(125),N=t(147),P=t(148),G=t(149),H=t(146),Q=t(72),V=t(28),W=t(7),X=Object(U.createContext)(),Y=t(2),Z=W.a.div(a||(a=Object(B.a)(["\n    display: flex;\n    justify-content: center;\n    align-items:center;\n    height: 100vh;\n    overflow: hidden;\n"]))),$=Object(W.a)(Q.DebounceInput)(c||(c=Object(B.a)(["\nflex:8;\nwidth:inherit;\nborder:none;\noutline: none;\nheight: 30px;\n"]))),ee=Object(W.a)(H.a)(i||(i=Object(B.a)(["\nflex:1;\ncolor:#707070;  \npadding:2px;\nmargin:2px;\nheight: 30px;\n"]))),ne=W.a.div(r||(r=Object(B.a)(["\ndisplay: flex;\nborder: 1px solid #7070704A;\nborder-radius: 20px;\nfont-size: 20px;\nwidth: 100%;\nmax-width: 280px;\npadding : 2px; \nposition: absolute;\ntop: 40%;\nflex-direction: column;\n"]))),te=function(e){var n=e.history,t=Object(U.useContext)(X),a=t.searchUser,c=t.searchData,i=Object(U.useState)(""),r=Object(J.a)(i,2),s=r[0],d=r[1],o=Object(U.useState)({cursor:0,result:[]}),l=Object(J.a)(o,2),j=l[0],p=l[1];Object(U.useEffect)((function(){document.getElementById("id").focus()}),[]),Object(U.useEffect)((function(){a(s),p((function(e){return{result:c}}))}),[s]);return Object(Y.jsxs)(Z,{children:[Object(Y.jsx)(V.a,{children:Object(Y.jsx)("title",{children:"Search"})}),Object(Y.jsxs)(ne,{children:[Object(Y.jsxs)("div",{style:{width:"100%",display:"flex",padding:"2px 10px"},children:[Object(Y.jsx)($,{id:"id",placeholder:"Search artists and topics here\u2026",minLength:2,value:s,debounceTimeout:800,onChange:function(e){return d(e.target.value)},onKeyDown:function(e){var n=j.cursor,t=j.result;38===e.keyCode&&n>0?p((function(e){return{cursor:e.cursor-1}})):40===e.keyCode&&n<t.length-1&&p((function(e){return{cursor:e.cursor+1}}))}}),Object(Y.jsx)(ee,{children:Object(Y.jsx)(K.a,{style:{padding:"0px"},children:Object(Y.jsx)(H.a,{scale:2})})})]}),c.length>0&&Object(Y.jsx)("div",{children:Object(Y.jsx)(N.a,{component:"nav","aria-label":"secondary mailbox folders",children:c.map((function(e,t){var a=e.artist_type,c=e.vendor_city,i=e.vendor_name,r=e.vendor_page_url,s="/profile/".concat(a,"/").concat(c,"/").concat(r);return Object(Y.jsx)(P.a,{value:s,onClick:function(){return n.replace(s)},children:Object(Y.jsx)(G.a,{primary:i})},r)}))})})]})]})},ae=t(18),ce=t(152),ie=t(150),re=t(50),se=t(151),de=t(153),oe=t(81),le=t.n(oe),je=t(154),pe=t(78),xe=W.a.div(s||(s=Object(B.a)(["\ndisplay:flex;\npadding:10px 0px;\n\n"]))),he=W.a.div(d||(d=Object(B.a)(["\nalign-items: center;\nflex:1;\n"]))),be=W.a.div(o||(o=Object(B.a)(["\nflex:9;\ndisplay:flex;\nflex-direction:column;\njustify-content:space-between;\npadding:10px;\n"]))),ue=W.a.div(l||(l=Object(B.a)(["\ndisplay: flex;\nflex-direction: revert;\njustify-content: space-between;\n"]))),Oe=W.a.div(j||(j=Object(B.a)(["\nheight:100%;\npadding:10px 0;\n"]))),fe=function(e){var n=e.customer_name,t=e.vendor_rating,a=e.review_comments,c=e.rated_date;return Object(Y.jsxs)(xe,{children:[Object(Y.jsx)(he,{children:Object(Y.jsx)(de.a,{})}),Object(Y.jsxs)(be,{children:[Object(Y.jsxs)(ue,{children:[Object(Y.jsx)("span",{style:{fontSize:"16px",whiteSpace:"nowrap"},children:n}),Object(Y.jsx)(je.a,{readOnly:!0,value:t,precision:.5})]}),Object(Y.jsx)(Oe,{children:Object(Y.jsx)("span",{style:{fontSize:"14px"},children:a})}),Object(Y.jsx)("span",{style:{color:"#CDCED2",fontSize:"12px"},children:c})]})]})},ge=t(82),me=t.n(ge),ve={width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignCtems:"center",margin:"0px",padding:"0px",overflow:"hidden",alignItems:"center"},ye=function(){return Object(Y.jsxs)("div",{style:ve,children:[Object(Y.jsx)(V.a,{children:Object(Y.jsx)("title",{children:"Loading"})}),Object(Y.jsx)("span",{children:"Loading..."})]})},we=t.p+"static/media/bg.0694e674.jpg",_e="375px",De="425px",ke="768px",Se="1024px",Ce="1440px",Ee="2560px",ze={mobileS:"(max-width: ".concat("320px",")"),mobileM:"(max-width: ".concat(_e,")"),mobileL:"(max-width: ".concat(De,")"),tablet:"(max-width: ".concat(ke,")"),laptop:"(max-width: ".concat(Se,")"),laptopL:"(max-width: ".concat(Ce,")"),desktop:"(max-width: ".concat(Ee,")"),desktopL:"(max-width: ".concat(Ee,")")},Ae=W.a.div(p||(p=Object(B.a)(["\n    position: fixed;\n    top: 0px;\n    left: 0px;\n    margin: 8px;\n    height: 5vh;\n    width: 5vh;\n    cursor: pointer;\n    z-index:1;\n"]))),Le=W.a.div(x||(x=Object(B.a)(["\ndisplay:flex;\njustify-content: center;\nflex-direction:column;\nflex:8;\n"]))),Re=W.a.img(h||(h=Object(B.a)(["\nwidth: 100%;\nheight:100%;\nmax-height: 200px;\nheight: inherit;\nobject-fit: cover;\nborder-radius:25px;\n"]))),Ie=W.a.div(b||(b=Object(B.a)(["\nflex:2;\nmargin:10px;"]))),Me=W.a.div(u||(u=Object(B.a)(["\nflex:8;\ndisplay:flex;\nflex-direction: row;\n\n@media "," { \nflex-direction: column-reverse;\n}\n\n"])),ze.tablet),qe=W.a.div(O||(O=Object(B.a)(["\nflex:6;\nwidth :100%;\norder:1;\n"]))),Ue=W.a.div(f||(f=Object(B.a)(["\nflex:4;\nwidth :100%; \npadding:20px;\norder:2;\n\n@media "," { \npadding: 0px;\n}\n"])),ze.tablet),Fe=W.a.div(g||(g=Object(B.a)(["\ndisplay:flex;\nflex-direction:column;\npadding:10px;"]))),Te=W.a.div(m||(m=Object(B.a)([""]))),Be=W.a.div(v||(v=Object(B.a)(["\nwidth: 100%;\nposition: fixed;\nbackground-color: whitesmoke;\ntext-align: center;\ndisplay: none;\njustify-content: center;\nalign-items: center;\nheight: 50px;\nz-index: 0;\nbox-shadow: 1px 1px 2px whitesmoke;    \n\n@media "," { \ndisplay:fixed;\n}\n"])),ze.tablet),Je=Object(W.a)(de.a)(y||(y=Object(B.a)(["flex:3;"]))),Ke=Object(W.a)(je.a)(w||(w=Object(B.a)([""]))),Ne=W.a.div(_||(_=Object(B.a)(["\npadding:20px;\n"]))),Pe=W.a.span(D||(D=Object(B.a)(["\nfont-size:30px;\nwhite-space: nowrap;"]))),Ge=W.a.span(k||(k=Object(B.a)(["\nfont-size:14px;\nwhite-space: nowrap;\n"]))),He=W.a.span(S||(S=Object(B.a)(["\nfont-size:14px;\nwhite-space: nowrap;"]))),Qe=W.a.div(C||(C=Object(B.a)(["\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\nflex:8;\nwidth: 100%;\npadding:20px;\n"]))),Ve=W.a.div(E||(E=Object(B.a)(["\ndisplay: flex;\nflex-direction: column;\npadding: 5px;"]))),We=W.a.div(z||(z=Object(B.a)(["\ndisplay:flex;\njustify-content: center;\nflex-direction:column;\nalign-items:center;\nflex:2;\nheight:calc(100vh - 4rem);\nposition:sticky;\ntop: 0;\npadding: 2rem;\n@media "," { \npadding: 5px;\ndisplay:none;\n}\n"])),ze.tablet),Xe=W.a.div(A||(A=Object(B.a)(["\ndisplay:flex;\nflex-direction:row;\nwidth: 95%;\npadding:0;\nmargin:0;\n\n@media "," { \n    width: 100%;\n}\n"])),ze.tablet),Ye=W.a.div(L||(L=Object(B.a)(["\nwidth: 100%;\ndisplay:flex;\njustify-content: center;\npadding:0;\nmargin:0;\n"]))),Ze=W.a.div(R||(R=Object(B.a)(["\ndisplay: flex;\nflex-direction: column;\n"]))),$e=W.a.span(I||(I=Object(B.a)(["\nfont-size:18px;\nfont-weight:bold;\n"]))),en=W.a.span(M||(M=Object(B.a)(["\nfont-size:8px;\n"]))),nn=W.a.div(q||(q=Object(B.a)(["\nwidth: 100%;\npadding-top:20px;\ndisplay:flex;\nflex-direction:row;\njustify-content:space-evenly;   \n"]))),tn=function(e){var n=e.match.params,t=n.artist_type_url,a=n.city_url,c=n.vendor_page_url,i=Object(U.useContext)(X),r=i.userData,s=i.getUser,d=i.loading,o=Object(U.useState)([]),l=Object(J.a)(o,2),j=l[0],p=l[1],x=Object(U.useState)(r),h=Object(J.a)(x,2),b=h[0],u=h[1],O=b.vendor_name,f=b.vendor_avatar,g=b.vendor_timeline_pic,m=b.artist_type,v=b.city_name,y=b.country_code,w=b.vendor_reviews,_=b.vendor_about;b.post_count,b.vendor_media;Object(U.useEffect)((function(){s({artist_type_url:t,city_url:a,vendor_page_url:c},(function(n){n||e.history.push("/")})),u(r)}),[]),Object(U.useEffect)((function(){u(r),E(r.vendor_media)}),[r]);var D=Object(U.useState)(Math.floor(6*Math.random())+0),k=Object(J.a)(D,1)[0],S=[{data:"52",name:"Collections"},{data:"1321",name:"Followers"},{data:"20K",name:"Following"}],C=function(){return S.map((function(e,n){return Object(Y.jsxs)(Ze,{children:[Object(Y.jsx)($e,{children:e.data}),Object(Y.jsx)(en,{children:e.name})]},n)}))},E=function(e){var n=[{height:2,width:3},{height:2,width:1},{height:3,width:4},{height:4,width:3},{height:5,width:4}];if(e){var t=e.filter((function(e){return 1===e.media_type})),a=(t=t.map((function(e){var t=n[Math.floor(Math.random()*n.length)];return Object(ae.a)({src:e.media_url},t)}))).sort((function(){return.5-Math.random()}));p(a.slice(0,6))}},z=function(){return void 0===w||0===w.length?Object(Y.jsx)(Y.Fragment,{}):Object(Y.jsxs)(ce.a,{children:[Object(Y.jsx)(ie.a,{expandIcon:Object(Y.jsx)(le.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(Y.jsx)(re.a,{children:Object(Y.jsx)("b",{children:"See Reviews"})})}),Object(Y.jsx)(se.a,{style:{display:"flex",flexDirection:"column"},children:null===w||void 0===w?void 0:w.map((function(e,n){return Object(Y.jsx)(fe,Object(ae.a)({},e),n)}))})]})};return Object(Y.jsx)(Ye,{children:!0===d?Object(Y.jsx)(ye,{}):Object(Y.jsxs)(Xe,{children:[Object(Y.jsx)(V.a,{children:Object(Y.jsx)("title",{children:"".concat(O," | ").concat(m," | ").concat(y)})}),Object(Y.jsx)(Ae,{onClick:function(){e.history.push("/")},children:Object(Y.jsx)(K.a,{style:{boxShadow:"2px 3px 5px whitesmoke",padding:"0px",margin:"5px"},children:Object(Y.jsx)(me.a,{})})}),Object(Y.jsx)(Be,{children:Object(Y.jsx)(Pe,{children:O})}),Object(Y.jsxs)(We,{children:[Object(Y.jsxs)(Ne,{children:[Object(Y.jsx)(Je,{src:f,style:{height:"120px",width:"120px"}}),Object(Y.jsx)(Ke,{name:"rating",precision:.5,value:k,readOnly:!0})]}),Object(Y.jsxs)(Qe,{children:[Object(Y.jsxs)(Ve,{children:[Object(Y.jsx)(Pe,{children:O}),Object(Y.jsx)(Ge,{children:m}),Object(Y.jsxs)(He,{children:[v," - ",y]})]}),Object(Y.jsx)(nn,{children:Object(Y.jsx)(C,{})})]})]}),Object(Y.jsxs)(Le,{children:[Object(Y.jsx)(Ie,{children:Object(Y.jsx)(Re,{src:g,alt:"loading...",onError:function(e){return e.target.src=we}})}),Object(Y.jsxs)(Me,{children:[Object(Y.jsx)(qe,{children:void 0!==j&&j.length>0&&Object(Y.jsx)(pe.a,{margin:10,photos:j,direction:"column"})}),Object(Y.jsxs)(Ue,{children:[Object(Y.jsxs)(Fe,{children:[Object(Y.jsx)("span",{style:{padding:"10px 0px 10px 0px",whiteSpace:"nowrap",textTransform:"uppercase",color:"#404040"},children:"Biography"}),Object(Y.jsx)("span",{style:{color:"#404040"},children:_})]}),Object(Y.jsx)(Te,{children:Object(Y.jsx)(z,{})})]})]})]})]})})},an=t(83),cn=t(9);var rn=function(){return Object(Y.jsx)(an.a,{children:Object(Y.jsxs)(cn.c,{children:[Object(Y.jsx)(cn.a,{exact:!0,path:"/profile/:artist_type_url/:city_url/:vendor_page_url",component:tn}),Object(Y.jsx)(cn.a,{exact:!0,path:"",component:te}),Object(Y.jsx)(cn.a,{render:function(){return Object(Y.jsx)("div",{children:"404 | Page Not Found"})}})]})})},sn=t(37),dn=t.n(sn),on=t(53),ln="LOADING",jn="SEARCH_DATA",pn="USER_DATA",xn="ERROR",hn="https://fotoley.herokuapp.com/api/",bn=function(e,n){switch(n.type){case jn:return Object(ae.a)(Object(ae.a)({},e),{},{loading:!1,searchData:n.payload});case pn:return Object(ae.a)(Object(ae.a)({},e),{},{loading:!1,userData:n.payload});case xn:return Object(ae.a)(Object(ae.a)({},e),{},{loading:!1,error:n.payload});case ln:return Object(ae.a)(Object(ae.a)({},e),{},{loading:!0});default:return e}},un=t(54),On=t.n(un),fn=function(e){var n=Object(U.useReducer)(bn,{loading:!1,error:null,searchData:[],userData:{}}),t=Object(J.a)(n,2),a=t[0],c=t[1],i=function(){var e=Object(on.a)(dn.a.mark((function e(n){var t,a;return dn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(),e.next=4,On.a.post(hn+"searchArtist",{query:n});case 4:t=e.sent,c({type:jn,payload:t.data}),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),a="",a=e.t0.response?e.t0.response.data:e.t0.request?e.t0.request:e.t0.message,d(a);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),r=function(){var e=Object(on.a)(dn.a.mark((function e(n,t){var a,i;return dn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(),e.next=4,On.a.post(hn+"getArtistDetails",n);case 4:a=e.sent,c({type:pn,payload:a.data}),t(!0),e.next=15;break;case 9:e.prev=9,e.t0=e.catch(0),i="",i=e.t0.response?e.t0.response.data:e.t0.request?e.t0.request:e.t0.message,d(i),t(!1);case 15:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n,t){return e.apply(this,arguments)}}(),s=function(){return c({type:ln})},d=function(e){return c({type:xn,dispatch:e})};return Object(Y.jsx)(X.Provider,{value:{loading:a.loading,error:a.error,searchData:a.searchData,userData:a.userData,searchUser:i,getUser:r,setError:d},children:e.children})};T.a.render(Object(Y.jsx)(fn,{children:Object(Y.jsx)(rn,{})}),document.getElementById("root"))},93:function(e,n,t){}},[[124,1,2]]]);
//# sourceMappingURL=main.74c1753e.chunk.js.map