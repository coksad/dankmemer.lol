(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{354:function(e,a,t){},374:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),i=t(6),r=t(12),o=t(3);t(354);a.default=Object(i.b)(e=>e.login)((function(e){const[a,t]=Object(l.useState)(null);Object(l.useEffect)(()=>{r("/api/feedback/categories").then(e=>{t(e.data)})},[]);let[i,c]=Object(l.useState)(""),[d,s]=Object(l.useState)(""),[b,p]=Object(l.useState)(""),[m,g]=Object(l.useState)(0),[u,h]=Object(l.useState)(null);return Object(l.useEffect)(()=>{if(0!==m){switch(m){case 200:window.location.replace("/feedback/p/"+u);break;case 401:o.b.update("feedbackState",{render:n.a.createElement("p",null,n.a.createElement("svg",{viewBox:"0 0 16 16",fill:"currentColor",style:{display:"inline-block",verticalAlign:"middle",width:"20px",height:"20px",boxSizing:"border-box",margin:"10px",color:"rgb(233, 76, 88)"}},n.a.createElement("path",{fillRule:"evenodd",d:"M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"})),n.a.createElement("span",{style:{display:"inline-block",verticalAlign:"middle"}},"You are not logged in."))});break;case 403:o.b.update("feedbackState",{render:n.a.createElement("p",null,n.a.createElement("svg",{viewBox:"0 0 16 16",fill:"currentColor",style:{display:"inline-block",verticalAlign:"middle",width:"20px",height:"20px",boxSizing:"border-box",margin:"10px",color:"rgb(233, 76, 88)"}},n.a.createElement("path",{fillRule:"evenodd",d:"M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"})),n.a.createElement("span",{style:{display:"inline-block",verticalAlign:"middle"}},"You are banned from posting feedback."))});break;case 406:o.b.update("feedbackState",{render:n.a.createElement("p",null,n.a.createElement("svg",{viewBox:"0 0 16 16",fill:"currentColor",style:{display:"inline-block",verticalAlign:"middle",width:"20px",height:"20px",boxSizing:"border-box",margin:"10px",color:"rgb(233, 76, 88)"}},n.a.createElement("path",{fillRule:"evenodd",d:"M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"})),n.a.createElement("span",{style:{display:"inline-block",verticalAlign:"middle"}},"Your account is too new to post feedback."))});break;case 429:o.b.update("feedbackState",{render:n.a.createElement("p",null,n.a.createElement("svg",{viewBox:"0 0 16 16",fill:"currentColor",style:{display:"inline-block",verticalAlign:"middle",width:"20px",height:"20px",boxSizing:"border-box",margin:"10px",color:"rgb(245, 170, 10)"}},n.a.createElement("path",{fillRule:"evenodd",d:"M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 5zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"})),n.a.createElement("span",null,"You're doing that too often!"))});break;default:o.b.update("feedbackState",{render:n.a.createElement("p",null,n.a.createElement("svg",{viewBox:"0 0 16 16",fill:"currentColor",style:{display:"inline-block",verticalAlign:"middle",width:"20px",height:"20px",boxSizing:"border-box",margin:"10px",color:"rgb(245, 170, 10)"}},n.a.createElement("path",{fillRule:"evenodd",d:"M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 5zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"})),n.a.createElement("span",{style:{display:"inline-block",verticalAlign:"middle"}},"An unknown error has occurred."))})}g(0)}},[m]),n.a.createElement("div",{id:"feedback-new"},n.a.createElement("div",{id:"feedback-new-header"},n.a.createElement("h1",{id:"feedback-new-header-title"},"Give us Feedback"),n.a.createElement("p",{id:"feedback-new-header-info"},"Do you have an opinion or suggestion about the bot? Fill out this form and we will look over them. Make sure that there isn't a feedback post on your topic by searching through the category feeds. Warning: This is NOT for support, your post will just be deleted.")),n.a.createElement("div",{id:"feedback-new-category"},n.a.createElement("h3",{id:"feedback-new-category-title"},"Select the category that best fits your feedback"),n.a.createElement("div",{id:"feedback-new-category-inputs"},a&&a.map(e=>n.a.createElement("div",{key:e,className:"feedback-category-input"},n.a.createElement("label",{htmlFor:"category-"+e,onClick:()=>p(e)},n.a.createElement("span",{className:e===b?"radioInput checked":"radioInput"}),e.replace(e[0],e[0].toUpperCase()).replaceAll("_"," ")))))),n.a.createElement("div",{className:"feedback-new-section"},n.a.createElement("h3",{className:"feedback-new-section-title"},"Post title"),n.a.createElement("input",{className:"feedback-new-section-input",maxLength:256,onChange:e=>s(e.target.value),placeholder:"Give me infinite money"})),n.a.createElement("div",{className:"feedback-new-section"},n.a.createElement("h3",{className:"feedback-new-section-title"},"Post content"),n.a.createElement("textarea",{className:"feedback-new-section-input ta",maxLength:1024,onChange:e=>c(e.target.value),placeholder:"This would benefit me and nobody else. It would allow a sole user to control the economy!"})),d.length>=3&&d.length<=100&&i.length>=20&&i.length<=2e3&&b.length>0?n.a.createElement("button",{className:"feedback-new-submit enabled",onClick:async()=>{if(!e.loggedIn)return o.b.dark(n.a.createElement("p",null,n.a.createElement("svg",{viewBox:"0 0 16 16",fill:"currentColor",style:{display:"inline-block",verticalAlign:"middle",width:"20px",height:"20px",boxSizing:"border-box",margin:"10px",color:"rgb(233, 76, 88)"}},n.a.createElement("path",{fillRule:"evenodd",d:"M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"})),n.a.createElement("span",{style:{display:"inline-block",verticalAlign:"middle"}},"You need to be logged in!")),{position:"top-right",autoClose:1e4,hideProgressBar:!0,pauseOnHover:!0,draggable:!0,progress:void 0,toastId:"feedbackState"});if(i.length<20||i.length>2e3)return;if(d.length<3||d.length>100)return;if(0==b.length)return;o.b.dark(n.a.createElement("p",null,n.a.createElement("svg",{viewBox:"5 5 40 40",fill:"currentColor",style:{display:"inline-block",verticalAlign:"middle",width:"20px",height:"20px",boxSizing:"border-box",margin:"10px",color:"rgb(65, 146, 255)"}},n.a.createElement("path",{d:"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"},n.a.createElement("animateTransform",{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 25 25",to:"360 25 25",dur:"0.5s",repeatCount:"indefinite"}))),n.a.createElement("span",{style:{display:"inline-block",verticalAlign:"middle"}},"Submitting your feedback.")),{position:"top-right",autoClose:1e4,hideProgressBar:!0,pauseOnHover:!0,draggable:!0,progress:void 0,toastId:"feedbackState"});const a=await fetch("/api/feedback/post",{credentials:"same-origin",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({description:i,title:d,category:b})});h((await a.json()).id),g(a.status)}},"Submit"):n.a.createElement("button",{className:"feedback-new-submit disabled"},"Submit"),n.a.createElement(o.a,null))}))}}]);