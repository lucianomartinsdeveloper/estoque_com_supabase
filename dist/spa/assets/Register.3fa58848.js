import{_ as f,d as p,I as c,J as g,j as y,o as h,c as w,w as u,a as r,K as t,Q as s,L as i,M as V}from"./index.6afd58bc.js";import{Q as b}from"./QForm.04b98c4b.js";import{Q as q}from"./QPage.2ddfe1fb.js";import{u as Q}from"./UseNotify.bc238985.js";import"./use-quasar.64616f94.js";const v=p({name:"PageRegister",setup(){const a=c(),{register:o}=g(),{notifyError:n,notifySuccess:m}=Q(),l=y({name:"",email:"",password:""});return{form:l,handleRegister:async()=>{try{await o(l.value),m(),await a.push({name:"email-confirmation",query:{email:l.value.email}})}catch(e){n(e.message)}}}}}),R=t("p",{class:"col-12 text-h4 text-center"},"Cadastrar",-1),N={class:"col-md-4 col-sm-6 col-xs-10 q-gutter-y-md"},S={class:"full-width q-pt-md q-gutter-y-sm"};function B(a,o,n,m,l,d){return h(),w(q,{padding:""},{default:u(()=>[r(b,{class:"row justify-center",onSubmit:V(a.handleRegister,["prevent"])},{default:u(()=>[R,t("div",N,[r(s,{label:"Nome",modelValue:a.form.name,"onUpdate:modelValue":o[0]||(o[0]=e=>a.form.name=e),"lazy-rules":"",rules:[e=>e.length>0||"Nome \xE9 requerido"]},null,8,["modelValue","rules"]),r(s,{label:"Email",modelValue:a.form.email,"onUpdate:modelValue":o[1]||(o[1]=e=>a.form.email=e),"lazy-rules":"",rules:[e=>e.length>0||"Email \xE9 requerido"],type:"email"},null,8,["modelValue","rules"]),r(s,{label:"Senha",modelValue:a.form.password,"onUpdate:modelValue":o[2]||(o[2]=e=>a.form.password=e),type:"password","lazy-rules":"",rules:[e=>e.length>=6||"Senha \xE9 requerida e o m\xEDnimo de 6 letras/n\xFAmeros"]},null,8,["modelValue","rules"]),t("div",S,[r(i,{label:"Confirmar",color:"primary",class:"full-width",outline:"",rounded:"",type:"submit"}),r(i,{label:"Voltar",color:"dark",class:"full-width",flat:"",rounded:"",to:{name:"login"}})])])]),_:1},8,["onSubmit"])]),_:1})}var z=f(v,[["render",B]]);export{z as default};
