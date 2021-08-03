(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{20:function(e,t,n){"use strict";n.r(t);var a,c,o,r=n(0),i=n.n(r),s=n(8),b=n.n(s),u=n(10),d=n(4),l=n(22),j=n(2),f=n(3),h=f.a.form(a||(a=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 400px;\n  padding: 20px;\n  border: 3px solid #212121;\n"]))),p=f.a.label(c||(c=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n  margin-bottom: 30px;\n  font-size: 20px;\n  font-weight: 800;\n"]))),x=f.a.button(o||(o=Object(j.a)(["\n  width: 100px;\n  padding: 5px;\n  font-weight: 600;\n  background-color: #5d5dff;\n  border-radius: 5px;\n"]))),O=n(1);var m,g,v,w,y,k,C=function(e){var t=e.submit,n=Object(r.useState)(""),a=Object(d.a)(n,2),c=a[0],o=a[1],i=Object(r.useState)(""),s=Object(d.a)(i,2),b=s[0],u=s[1];function l(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":o(a);break;case"number":u(a);break;default:return}}return Object(O.jsxs)(h,{onSubmit:function(e){e.preventDefault(),t(c,b),o(""),u("")},children:[Object(O.jsxs)(p,{children:["Name",Object(O.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:l,value:c})]}),Object(O.jsxs)(p,{children:["Number",Object(O.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:b,onChange:l})]}),Object(O.jsx)(x,{type:"submit",children:"Add contact"})]})},S=f.a.button(m||(m=Object(j.a)(["\n  padding: 3px;\n  font-weight: 600;\n  background-color: #5d5dff;\n  border-radius: 5px;\n"]))),z=f.a.span(g||(g=Object(j.a)(["\n  margin-right: 30px;\n"]))),A=f.a.li(v||(v=Object(j.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  width: 350px;\n  font-size: 18px;\n"]))),E=function(e){var t=e.contacts,n=e.visibleContacts,a=e.getElement;return t&&Object(O.jsx)("ul",{children:n.map((function(e,t){var n=e.id,c=e.name,o=e.number;return Object(O.jsxs)(A,{children:[Object(O.jsxs)(z,{children:["".concat(t+1,")    "),c,": ",o]}),Object(O.jsx)(S,{type:"button",onClick:function(){return a(n)},children:"Delete"})]},n)}))})},J=f.a.label(w||(w=Object(j.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 380px;\n  font-size: 18px;\n  font-weight: 600;\n"]))),N=f.a.span(y||(y=Object(j.a)(["\n  font-size: 18px;\n  font-weight: 400;\n  font-style: italic;\n"]))),P=function(e){var t=e.change,n=e.filter;return 0!==e.contacts.length?Object(O.jsxs)(J,{children:["Find contacts by Name",Object(O.jsx)("input",{type:"text",name:"filter",value:n,onChange:function(e){var n=e.currentTarget.value;t(n)}})]}):Object(O.jsx)(N,{children:"Your Phonebook don`t have contacts"})},I=f.a.div(k||(k=Object(j.a)(["\n  padding: 20px;\n"])));var Z=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),o=Object(d.a)(c,2),i=o[0],s=o[1];Object(r.useEffect)((function(){var e;(null===(e=localStorage.getItem("myPhonebook"))||void 0===e?void 0:e.length)>0&&a(JSON.parse(localStorage.getItem("myPhonebook")))}),[]),Object(r.useEffect)((function(){localStorage.setItem("myPhonebook",JSON.stringify(n))}),[n]);var b=i.toLowerCase(),j=n.filter((function(e){return e.name.toLowerCase().includes(b)}));return Object(O.jsxs)(I,{children:[Object(O.jsx)("h1",{children:"Phonebook"}),Object(O.jsx)(C,{submit:function(e,t){var c=n.find((function(t){return t.name===e}));c?alert("".concat(c.name," is already in contacts")):a((function(n){return[].concat(Object(u.a)(n),[{id:Object(l.a)(),name:e,number:t}])}))}}),Object(O.jsx)("h2",{children:"Contacts"}),Object(O.jsx)(P,{change:function(e){s(e)},filter:i,contacts:n}),Object(O.jsx)(E,{contacts:n,visibleContacts:j,getElement:function(e){a(n.filter((function(t){return t.id!==e})))}})]})};b.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(Z,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.a871161a.chunk.js.map