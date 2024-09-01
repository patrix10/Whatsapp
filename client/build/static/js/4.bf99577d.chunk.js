(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[4],{179:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a(23),n=a(190),o=a(195),i=a(196),r=a(36),l=a(186),d=a(37),j=a(170),b=a(169),p=a(185),x=a(182),h=a(39);var g=a(191),u=a(187),O=a(168),f=a(3);const m=Object(s.a)(n.a)`
    display: flex;
    justify-content: center;
`,w=Object(s.a)("img")({width:200,height:200,borderRadius:"50%",padding:"25px 0"}),v=Object(s.a)(n.a)`
    background: #FFFFFF;
    padding: 12px 30px 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    & :first-child {
        font-size: 13px;
        color: #009688;
        font-weight: 200;
    };
    & :last-child {
        margin: 14px 0;
        color: #4A4A4A;
    }
`,y=Object(s.a)(n.a)`
    padding: 15px 20px 28px 30px;
    & > p {
        color: #8696a0;
        font-size: 13px;
    }
`;var k=()=>{const{account:e}=Object(c.useContext)(r.a);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(m,{children:Object(f.jsx)(w,{src:e.picture,alt:"displaypicture"})}),Object(f.jsxs)(v,{children:[Object(f.jsx)(g.a,{children:"Your name"}),Object(f.jsx)(g.a,{children:e.name})]}),Object(f.jsx)(y,{children:Object(f.jsx)(g.a,{children:"This is not your username or pin. This name will be visible to your WhatsApp contacts."})}),Object(f.jsxs)(v,{children:[Object(f.jsx)(g.a,{children:"About"}),Object(f.jsx)(g.a,{children:"Eat! Sleep! Code! Repeat"})]})]})};const F=Object(s.a)(n.a)`
  background: #008069;
  height: 107px;
  color: #FFFFFF;
  display: flex;
  & > svg, & > p {
    margin-top: auto;
    padding: 15px;
    font-weight: 600;
`,C=Object(s.a)(n.a)`
  background: #ededed;
  height: 85%;
`,A=Object(s.a)(g.a)`
    font-size: 18px;
`,I={left:20,top:17,height:"95%",width:"30%",boxShadow:"none"};var S=e=>{let{open:t,setOpen:a,profile:c}=e;return Object(f.jsxs)(u.a,{open:t,onClose:()=>{a(!1)},PaperProps:{sx:I},style:{zIndex:1500},children:[Object(f.jsxs)(F,{children:[Object(f.jsx)(O.a,{onClick:()=>a(!1)}),Object(f.jsx)(A,{children:"Profile"})]}),Object(f.jsx)(C,{children:c&&Object(f.jsx)(k,{})})]})};const z=Object(s.a)(p.a)`
    font-size: 14px
    padding: 15px 60px 5px 24px;
    color: #4A4A4A;
`;Object(s.a)(h.c)`
    border: none;
    box-shadow: none;
`;var P=()=>{const[e,t]=Object(c.useState)(!1),[a,s]=Object(c.useState)(!1),{setAccount:n,setShowloginButton:o,showlogoutButton:i,setShowlogoutButton:l}=Object(c.useContext)(r.a),{setPerson:j}=Object(c.useContext)(d.a),p=()=>{t(null)};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(b.a,{onClick:e=>{t(e.currentTarget)}}),Object(f.jsxs)(x.a,{anchorEl:e,keepMounted:!0,open:e,onClose:p,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"right"},children:[Object(f.jsx)(z,{onClick:()=>{p(),s(!0)},children:"Profile"}),Object(f.jsx)(z,{onClick:()=>{p()}})]}),Object(f.jsx)(S,{open:a,setOpen:s,profile:!0})]})};const E=Object(s.a)(n.a)`
    height: 44px;
    background: #ededed;
    display: flex;
    padding: 8px 16px;
    align-items: center;
`,_=Object(s.a)(n.a)`
    margin-left: auto;
    & > * {
        margin-left: 2px;
        padding: 8px;
        color: #000;
    };
    & :first-child {
        font-size: 22px;
        margin-right: 8px;
        margin-top: 3px;
    }
`,R=Object(s.a)("img")({height:40,width:40,borderRadius:"50%"});var T=()=>{const[e,t]=Object(c.useState)(!1),{account:a}=Object(c.useContext)(r.a);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(E,{children:[Object(f.jsx)(R,{src:a.picture,onClick:()=>{t(!0)}}),Object(f.jsxs)(_,{children:[Object(f.jsx)(j.a,{}),Object(f.jsx)(P,{})]})]}),Object(f.jsx)(S,{open:e,setOpen:t,profile:!0})]})},U=a(183),W=a(172);const M=Object(s.a)(n.a)`
    background: #fff;
    height: 45px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #F2F2F2;
`,B=Object(s.a)(n.a)`
    position: relative;
    border-radius: 10px;
    background-color: #f0f2f5;
    margin: 0 13px;
    width: 100%;
`,D=Object(s.a)(n.a)`
    color: #919191;
    padding: 8px;
    height: 100%;
    position: absolute;
`,L=Object(s.a)(U.a)`
    width: 100%;
    padding: 16px;
    padding-left: 65px;
    font-size: 14px;
    height: 15px;
    width: 100%;
`;var H=e=>{let{setText:t}=e;return Object(f.jsx)(M,{children:Object(f.jsxs)(B,{children:[Object(f.jsx)(D,{children:Object(f.jsx)(W.a,{fontSize:"small"})}),Object(f.jsx)(L,{placeholder:"Search or start new chat",inputProps:{"aria-label":"search"},onChange:e=>t(e.target.value)})]})})},$=a(173),N=a(119),V=a.n(N);const q=async e=>{try{return(await V.a.post("/conversation/get",e)).data}catch(t){console.log("Error while calling getConversation API ",t)}},J=e=>{const t=new Date(e).getHours(),a=new Date(e).getMinutes();return`${t<10?"0"+t:t}:${a<10?"0"+a:a}`},Y=Object(s.a)(n.a)`
    height: 45px;
    display: flex;
    padding: 13px 0;
    cursor: pointer;
`,G=Object(s.a)("img")({width:50,height:50,objectFit:"cover",borderRadius:"50%",padding:"0 14px"}),K=Object(s.a)(n.a)`
    display: flex;
`,Q=Object(s.a)(g.a)`
    font-size: 12px;
    margin-left: auto;
    color: #00000099;
    margin-right: 20px;
`,X=Object(s.a)(g.a)`
    display: block;
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
`;var Z=e=>{var t;let{user:a}=e;const s=a.picture||"https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png",{setPerson:o}=Object(c.useContext)(d.a),{account:i,newMessageFlag:l}=Object(c.useContext)(r.a),[j,b]=Object(c.useState)({});Object(c.useEffect)((()=>{(async()=>{const e=await q({senderId:i.sub,receiverId:a.sub});b({text:null===e||void 0===e?void 0:e.message,timestamp:null===e||void 0===e?void 0:e.updatedAt})})()}),[l]);const p=async()=>{o(a),await(async e=>{try{await V.a.post("/conversation/add",e)}catch(t){console.log("Error while calling setConversation API ",t)}})({senderId:i.sub,receiverId:a.sub})};return Object(f.jsxs)(Y,{onClick:()=>p(),children:[Object(f.jsx)(n.a,{children:Object(f.jsx)(G,{src:s,alt:"display picture"})}),Object(f.jsxs)(n.a,{style:{width:"100%"},children:[Object(f.jsxs)(K,{children:[Object(f.jsx)(g.a,{children:a.name}),(null===j||void 0===j?void 0:j.text)&&Object(f.jsx)(Q,{children:J(null===j||void 0===j?void 0:j.timestamp)})]}),Object(f.jsx)(n.a,{children:Object(f.jsx)(X,{children:(null===j||void 0===j||null===(t=j.text)||void 0===t?void 0:t.includes("localhost"))?"media":j.text})})]})]})};const ee=Object(s.a)(n.a)`
    overflow: overlay;
    height: 81vh;
`,te=Object(s.a)($.a)`
    margin: 0 0 0 70px;
    background-color: #e9edef;
    opacity: .6;
`;var ae=e=>{let{text:t}=e;const[a,s]=Object(c.useState)([]),{account:n,socket:o,setActiveUsers:i}=Object(c.useContext)(r.a);return Object(c.useEffect)((()=>{(async()=>{let e=(await(async()=>{try{return(await V.a.get("/users")).data}catch(e){console.log("Error while calling getUsers API ",e)}})()).filter((e=>e.name.toLowerCase().includes(t.toLowerCase())));s(e)})()}),[t]),Object(c.useEffect)((()=>{o.current.emit("addUser",n),o.current.on("getUsers",(e=>{i(e)}))}),[n]),Object(f.jsx)(ee,{children:a&&a.map(((e,t)=>e.sub!==n.sub&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(Z,{user:e}),a.length!==t+1&&Object(f.jsx)(te,{})]})))})};var ce=()=>{const[e,t]=Object(c.useState)("");return Object(f.jsxs)(n.a,{children:[Object(f.jsx)(T,{}),Object(f.jsx)(H,{setText:t}),Object(f.jsx)(ae,{text:e})]})};const se=Object(s.a)(n.a)`
    height: 44px;
    background: #ededed;
    display: flex;
    padding: 8px 16px;
    align-items: center;
`,ne=Object(s.a)("img")({width:40,height:40,objectFit:"cover",borderRadius:"50%"}),oe=Object(s.a)(g.a)`
    margin-left: 12px !important;
`,ie=Object(s.a)(n.a)`
    margin-left: auto;
    & > svg {
        padding: 8px;
        font-size: 22px;
        color: #000;
    }
`,re=Object(s.a)(g.a)`
    font-size: 12px !important;
    color: rgb(0, 0, 0, 0.6);
    margin-left: 12px !important;
`;var le=e=>{let{person:t}=e;const a=t.picture||"https://static.straitstimes.com.sg/s3fs-public/articles/2020/12/01/af_moneyheist_011220.jpg",{activeUsers:s}=Object(c.useContext)(r.a);return Object(f.jsxs)(se,{children:[Object(f.jsx)(ne,{src:a,alt:"display picture"}),Object(f.jsxs)(n.a,{children:[Object(f.jsx)(oe,{children:t.name}),Object(f.jsx)(re,{children:(null===s||void 0===s?void 0:s.find((e=>e.sub===t.sub)))?"Online":"Offline"})]}),Object(f.jsxs)(ie,{children:[Object(f.jsx)(W.a,{}),Object(f.jsx)(b.a,{})]})]})},de=(a(41),a(174));const je=Object(s.a)(n.a)`
    background: #FFFFFF;
    padding: 5px;
    max-width: 60%;
    width: fit-content;
    display: flex;
    border-radius: 10px;
    word-break: break-word;
`,be=Object(s.a)(n.a)`
    background: #dcf8c6;
    padding: 5px;
    max-width: 60%;
    width: fit-content;
    margin-left: auto;
    display: flex;
    border-radius: 10px;
    word-break: break-word;
`,pe=Object(s.a)(g.a)`
    font-size: 14px;
    padding: 0 25px 0 5px;
`,xe=Object(s.a)(g.a)`
    font-size: 10px;
    color: #919191;
    margin-top: 6px;
    word-break: keep-all;
    margin-top: auto;
`,he=e=>{let{message:t}=e;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(pe,{children:t.text}),Object(f.jsx)(xe,{children:J(t.createdAt)})]})},ge=e=>{var t;let{message:a}=e;return Object(f.jsxs)("div",{style:{position:"relative"},children:[(null===a||void 0===a||null===(t=a.text)||void 0===t?void 0:t.includes(".pdf"))?Object(f.jsxs)("div",{style:{display:"flex"},children:[Object(f.jsx)("img",{src:"https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/27_Pdf_File_Type_Adobe_logo_logos-512.png",alt:"pdf-icon",style:{width:80}}),Object(f.jsx)(g.a,{style:{fontSize:14},children:a.text.split("/").pop()})]}):Object(f.jsx)("img",{style:{width:300,height:"100%",objectFit:"cover"},src:a.text,alt:a.text}),Object(f.jsxs)(xe,{style:{position:"absolute",bottom:0,right:0},children:[Object(f.jsx)(de.a,{onClick:e=>(async(e,t)=>{e.preventDefault();try{fetch(t).then((e=>e.blob())).then((e=>{const a=window.URL.createObjectURL(e),c=document.createElement("a");c.style.display="none",c.href=a;const s=t.split("/").pop();c.download=""+s,document.body.appendChild(c),c.click(),window.URL.revokeObjectURL(a)})).catch((e=>console.log("Error while downloading the image ",e)))}catch(a){console.log("Error while downloading the image ",a)}})(e,a.text),fontSize:"small",style:{marginRight:10,border:"1px solid grey",borderRadius:"50%"}}),J(a.createdAt)]})]})};var ue=e=>{let{message:t}=e;const{account:a}=Object(c.useContext)(r.a);return Object(f.jsx)(f.Fragment,{children:a.sub===t.senderId?Object(f.jsx)(be,{children:"file"===t.type?Object(f.jsx)(ge,{message:t}):Object(f.jsx)(he,{message:t})}):Object(f.jsx)(je,{children:"file"===t.type?Object(f.jsx)(ge,{message:t}):Object(f.jsx)(he,{message:t})})})},Oe=a(175),fe=a(176),me=a(177);const we=Object(s.a)(n.a)`
    height: 55px;
    background: #ededed;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 15px;
    &  > * {
        margin: 5px;
        color: #919191;
    }
`,ve=Object(s.a)(n.a)`
    border-radius: 18px;
    background-color: #FFFFFF;
    width: calc(94% - 100px);
`,ye=Object(s.a)(U.a)`
    width: 100%;
    padding: 20px;
    padding-left: 25px;
    font-size: 14px;
    height: 20px;
    width: 100%;
`,ke=Object(s.a)(Oe.a)`
    transform: 'rotate(40deg)'
`;var Fe=e=>{let{sendText:t,value:a,setValue:s,setFile:n,file:o,setImage:i}=e;Object(c.useEffect)((()=>{(async()=>{if(o){const e=new FormData;e.append("name",o.name),e.append("file",o);const t=await(async e=>{try{return await V.a.post("/file/upload",e)}catch(t){console.log("Error while calling newConversations API ",t)}})(e);i(t.data)}})()}),[o]);return Object(f.jsxs)(we,{children:[Object(f.jsx)(fe.a,{}),Object(f.jsx)("label",{htmlFor:"fileInput",children:Object(f.jsx)(ke,{})}),Object(f.jsx)("input",{type:"file",id:"fileInput",style:{display:"none"},onChange:e=>(e=>{s(e.target.files[0].name),n(e.target.files[0])})(e)}),Object(f.jsx)(ve,{children:Object(f.jsx)(ye,{placeholder:"Type a message",inputProps:{"aria-label":"search"},onChange:e=>s(e.target.value),onKeyPress:e=>t(e),value:a})}),Object(f.jsx)(me.a,{})]})};const Ce=Object(s.a)(n.a)`
    background-image: url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"});
    background-size: 50%;
`,Ae=(Object(s.a)(n.a)`
    height: 55px;
    background: #ededed;
    // position: absolute;
    width: 100%;
    // bottom: 0
`,Object(s.a)(n.a)`
    height: 80vh;
    overflow-y: scroll;
`),Ie=Object(s.a)(n.a)`
    padding: 1px 80px;
`;var Se=e=>{var t;let{person:a,conversation:s}=e;const[n,o]=Object(c.useState)([]),[i,l]=Object(c.useState)(null),[d,j]=Object(c.useState)(),[b,p]=Object(c.useState)(),[x,h]=Object(c.useState)(),g=Object(c.useRef)(),{account:u,socket:O,newMessageFlag:m,setNewMessageFlag:w}=Object(c.useContext)(r.a);Object(c.useEffect)((()=>{O.current.on("getMessage",(e=>{l({...e,createdAt:Date.now()})}))}),[]),Object(c.useEffect)((()=>{(async()=>{let e=await(async e=>{try{return(await V.a.get(`/message/get/${e}`)).data}catch(t){console.log("Error while calling getMessages API ",t)}})(null===s||void 0===s?void 0:s._id);o(e)})()}),[null===s||void 0===s?void 0:s._id,a._id,m]),Object(c.useEffect)((()=>{var e;null===(e=g.current)||void 0===e||e.scrollIntoView({transition:"smooth"})}),[n]),Object(c.useEffect)((()=>{var e;i&&(null===s||void 0===s||null===(e=s.members)||void 0===e?void 0:e.includes(i.senderId))&&o((e=>[...e,i]))}),[i,s]);const v=null===s||void 0===s||null===(t=s.members)||void 0===t?void 0:t.find((e=>e!==u.sub));return Object(f.jsxs)(Ce,{children:[Object(f.jsx)(Ae,{children:n&&n.map((e=>Object(f.jsx)(Ie,{ref:g,children:Object(f.jsx)(ue,{message:e})})))}),Object(f.jsx)(Fe,{sendText:async e=>{let t=e.keyCode||e.which;if(d&&13===t){let e={};e=b?{senderId:u.sub,conversationId:s._id,receiverId:v,type:"file",text:x}:{senderId:u.sub,receiverId:v,conversationId:s._id,type:"text",text:d},O.current.emit("sendMessage",e),await(async e=>{try{return await V.a.post("/message/add",e)}catch(t){console.log("Error while calling newConversations API ",t)}})(e),j(""),p(),h(""),w((e=>!e))}},value:d,setValue:j,setFile:p,file:b,setImage:h})]})};var ze=()=>{const{person:e}=Object(c.useContext)(d.a),{account:t}=Object(c.useContext)(r.a),[a,s]=Object(c.useState)({});return Object(c.useEffect)((()=>{(async()=>{let a=await q({senderId:t.sub,receiverId:e.sub});s(a)})()}),[e.sub]),Object(f.jsxs)(n.a,{style:{height:"75%"},children:[Object(f.jsx)(le,{person:e}),Object(f.jsx)(Se,{person:e,conversation:a})]})};const Pe=Object(s.a)(n.a)`
    background: #f8f9fa;
    padding: 30px 0;
    text-align: center;
    height: 100%;
`,Ee=Object(s.a)(n.a)`
    padding: 0 200px;
`,_e=Object(s.a)("img")({marginTop:100,width:400}),Re=Object(s.a)(g.a)`
    font-size: 32px;
    font-family: inherit;
    font-weight: 300;
    color: #41525d;
    margin-top: 25px 0 10px 0;
`,Te=Object(s.a)(g.a)`
    font-size: 14px;
    color: #667781;
    font-weight: 400;
    font-family: inherit;
`,Ue=Object(s.a)($.a)`
    margin: 40px 0;
    opacity: 0.4;
`;var We=()=>Object(f.jsx)(Pe,{children:Object(f.jsxs)(Ee,{children:[Object(f.jsx)(_e,{src:"https://i.gadgets360cdn.com/large/whatsapp_multi_device_support_update_image_1636207150180.jpg",alt:"empty"}),Object(f.jsx)(Re,{children:"WhatsApp Web"}),Object(f.jsx)(Te,{children:"Now send and receive messages without keeping your phone online."}),Object(f.jsx)(Te,{children:"Use WhatsApp on up to 4 linked devices and 1 phone at the same time. "}),Object(f.jsx)(Ue,{})]})});const Me=Object(s.a)(n.a)`
    display: flex;
`,Be=Object(s.a)(n.a)`
    min-width: 450px;
`,De=Object(s.a)(n.a)`
    width: 73%;
    min-width: 300px;
    height: 100%;
    border-left: 1px solid rgba(0, 0, 0, 0.14);
`,Le={height:"95%",width:"100%",margin:"20px",maxWidth:"100%",maxHeight:"100%",borderRadius:0,boxShadow:"none",overflow:"hidden"};var He=()=>{const{person:e}=Object(c.useContext)(d.a);return Object(f.jsx)(l.a,{open:!0,BackdropProps:{style:{backgroundColor:"unset"}},PaperProps:{sx:Le},maxWidth:"md",children:Object(f.jsxs)(Me,{children:[Object(f.jsx)(Be,{children:Object(f.jsx)(ce,{})}),Object(f.jsx)(De,{children:Object.keys(e).length?Object(f.jsx)(ze,{}):Object(f.jsx)(We,{})})]})})},$e=a(194),Ne=a(184),Ve=a(139);const qe=Object(s.a)(n.a)`
    display: flex; 
`,Je=Object(s.a)(n.a)`
    padding: 56px 0 56px 56px;
`,Ye=Object(s.a)("img")({margin:"50px 0 0 50px",height:264,width:264}),Ge=Object(s.a)(g.a)`
    font-size: 26px;
    margin-bottom: 25px;
    color: #525252;
    font-family: Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif;
    font-weight: 300;
`,Ke=Object(s.a)($e.a)`
    &  > li {
        padding: 0;
        margin-top: 15px;
        font-size: 18px;
        line-height: 28px;
        color: #4a4a4a;
    }
`,Qe={marginTop:"12%",height:"95%",width:"60%",maxWidth:"100",maxHeight:"100%",borderRadius:0,boxShadow:"none",overflow:"hidden"};var Xe=()=>{const{setAccount:e,showloginButton:t,setShowloginButton:a,setShowlogoutButton:s}=Object(c.useContext)(r.a);return Object(f.jsx)(l.a,{open:!0,BackdropProps:{style:{backgroundColor:"unset"}},maxWidth:"md",PaperProps:{sx:Qe},children:Object(f.jsxs)(qe,{children:[Object(f.jsxs)(Je,{children:[Object(f.jsx)(Ge,{children:"To use WhatsApp on your computer:"}),Object(f.jsxs)(Ke,{children:[Object(f.jsx)(Ne.a,{children:"1. Open WhatsApp on your phone"}),Object(f.jsx)(Ne.a,{children:"2. Tap Menu Settings and select WhatsApp Web"}),Object(f.jsx)(Ne.a,{children:"3. Point your phone to this screen to capture the code"})]})]}),Object(f.jsxs)(n.a,{style:{position:"relative"},children:[Object(f.jsx)(Ye,{src:"https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg",alt:"QR Code"}),Object(f.jsx)(n.a,{style:{position:"absolute",top:"50%",transform:"translateX(25%) translateY(-25%)"},children:t?Object(f.jsx)(h.a,{buttonText:"",onSuccess:async t=>{let c=Object(Ve.a)(t.credential);e(c),a(!1),s(!0),await(async e=>{try{return(await V.a.post("/add",e)).data}catch(t){console.log("Error while calling addUser API ",t)}})(c)},onError:e=>{console.log("Login Failed:",e)}}):null})]})]})})};const Ze=Object(s.a)(n.a)`
    height: 100vh;
    background: #DCDCDC;
`,et=Object(s.a)(o.a)`
    background-color: #00A884;
    height: 125px;
    box-shadow: none;
`,tt=Object(s.a)(o.a)`
    background: #00bfa5;
    height: 200px;
    box-shadow: none;
`;t.default=()=>{const{account:e}=Object(c.useContext)(r.a);return Object(f.jsx)(Ze,{children:e?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(et,{children:Object(f.jsx)(i.a,{})}),Object(f.jsx)(He,{})]}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(tt,{children:Object(f.jsx)(i.a,{})}),Object(f.jsx)(Xe,{})]})})}}}]);
//# sourceMappingURL=4.bf99577d.chunk.js.map