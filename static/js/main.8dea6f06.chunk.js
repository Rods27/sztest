(this["webpackJsonphotel-app"]=this["webpackJsonphotel-app"]||[]).push([[0],{12:function(e){e.exports=JSON.parse('[{"name":"Casa c/ Vista Praia Mole. Cond. Fechado no Para\xedso","district":"Praia Mole","state":"Santa Catarina","country":"Brasil","adress":"Praia Mole, Santa Catarina - SC, Brasil","rooms":{"rooms":3,"beds":5,"bathrooms":3},"beds":[{"queen":1},{"double":1},{"single":3}],"maxGuests":7,"cleaningfee":300,"daily":290,"rules":{"kids":true,"babies":true,"smoking":true,"events":false,"silence":[22,9],"animals":false},"convenience":{"parking":true,"tv":true,"airConditioning":true,"wifi":true,"workingSpace":true,"concierge":true},"link":"https://www.airbnb.pt/rooms/32896214?federated_search_id=45c5508a-7151-4c0c-89be-f9ef2a81cef7","tag":"praiamole","active":true},{"name":"Afras Maresias! O melhor 2 dorms - 400m da praia!","district":"Maresias","state":"S\xe3o Paulo","adress":"Maresias, S\xe3o Paulo - SP, Brasil","rooms":{"rooms":2,"beds":3,"bathrooms":2},"beds":[{"double":1},{"double":1},{"sofabed":1}],"maxGuests":5,"cleaningfee":200,"daily":180,"rules":{"kids":true,"babies":true,"smoking":false,"events":false,"animals":true},"convenience":{"pool":true,"parking":true,"wifi":true,"concierge":true,"tv":true,"airConditioning":true,"workingSpace":true},"link":"https://www.airbnb.pt/rooms/48066092?federated_search_id=e4d0deec-5d53-4a00-aa2a-2ee849911566","tag":"maresias","active":true},{"name":"Flat Luxo Completo Beira-Mar 01 - MANAIRA PALACE","district":"Jo\xe3o Pessoa","state":"Paraiba","country":"Brasil","adress":"Jo\xe3o Pessoa, Paraiba - PB, Brasil","rooms":{"rooms":1,"beds":3,"bathrooms":1},"beds":[{"double":1,"single":1},{"sofabed":1}],"maxGuests":4,"cleaningfee":20,"daily":170,"rules":{"kids":true,"babies":true,"smoking":true,"events":false,"animals":false,"silence":[22,9]},"convenience":{"parking":true,"tv":true,"airConditioning":true,"wifi":true,"workingSpace":true,"concierge":true,"elevator":true,"pool":true},"link":"https://www.airbnb.pt/rooms/21749865","tag":"joaopessoa","active":false},{"name":"casa maravilhosa em frente ao mar","district":"","state":"Rio de Janeiro","country":"Brasil","adress":"Rio de Janeiro - RJ, Brasil","rooms":{"rooms":1,"beds":2,"bathrooms":1},"beds":[{"queen":1},{"queen":1}],"maxGuests":2,"cleaningfee":100,"daily":150,"rules":{"kids":false,"babies":false,"smoking":false,"events":false,"animals":false,"silence":[22,9]},"convenience":{"parking":true,"tv":true,"airConditioning":true,"wifi":true,"elevator":true},"link":"https://www.airbnb.pt/rooms/494903","tag":"rj01","active":true},{"name":"Space Valley flat","district":"Jardim S\xe3o Dimas","state":"S\xe3o Paulo","country":"Brasil","adress":"Jardim S\xe3o Dimas - SP, Brasil","rooms":{"rooms":1,"beds":1,"bathrooms":1},"beds":[{"queen":1}],"maxGuests":2,"cleaningfee":67,"daily":120,"rules":{"kids":false,"babies":false,"smoking":false,"events":false,"animals":false,"silence":[22,9]},"convenience":{"parking":true,"tv":true,"airConditioning":true,"wifi":true,"gym":true,"elevator":true,"pool":true},"link":"https://www.airbnb.pt/rooms/28310939","tag":"saodimas","active":true},{"name":"Casa completa pr\xf3xima a Ouro Preto!","district":"Ouro Preto","state":"Minas Gerais","country":"Brasil","adress":"Ouro Preto - MG, Brasil","rooms":{"rooms":2,"beds":2,"bathrooms":2},"beds":[{"queen":1},{"double":1}],"maxGuests":4,"cleaningfee":80,"daily":140,"rules":{"kids":true,"babies":true,"smoking":true,"events":true,"animals":true,"silence":[22,9]},"convenience":{"parking":true,"tv":true,"wifi":true},"link":"https://www.airbnb.pt/rooms/20213736","tag":"ouropreto","active":true}]')},27:function(e,t,s){},36:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),i=s(20),n=s.n(i),r=s(2),o=s(4),l=s(5),j=s(7),d=s(6),b=s(12),h=s(0),u=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(o.a)(this,s),(e=t.call(this)).state={},e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){this.props.history.push({pathname:"/properties",state:b})}},{key:"render",value:function(){return Object(h.jsx)("div",{})}}]),s}(c.a.Component),m=s(14),x=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(o.a)(this,s),(e=t.call(this)).state={},e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){"properties"===this.props.history.location.pathname.split("/")[1]&&(document.querySelector("#left").childNodes[4].style.backgroundColor="#333",document.querySelector("#left").childNodes[4].style.boxShadow="inset 0 -17px 0px -14px #FFFFFF")}},{key:"render",value:function(){var e=this.props.history;return Object(h.jsxs)("div",{className:"header-container",children:[Object(h.jsxs)("li",{id:"left",children:[Object(h.jsx)("i",{className:"fab fa-css3-alt",onClick:function(){return e.push("/")}}),Object(h.jsx)("td",{onClick:function(){return e.push("/calendar")},children:Object(h.jsx)("h4",{children:"Calend\xe1rio"})}),Object(h.jsx)("td",{onClick:function(){return e.push("/clients")},children:Object(h.jsx)("h4",{children:"Clientes"})}),Object(h.jsx)("td",{onClick:function(){return e.push("/budgets")},children:Object(h.jsx)("h4",{children:"Or\xe7amentos"})}),Object(h.jsx)("td",{onClick:function(){return e.push("/properties")},children:Object(h.jsx)("h4",{children:"Propriedades"})}),Object(h.jsx)("td",{onClick:function(){return e.push("/control")},children:Object(h.jsx)("h4",{children:"Controle"})})]}),Object(h.jsx)("div",{id:"right",children:Object(h.jsx)("i",{className:"fas fa-user-circle"})})]})}}]),s}(c.a.Component),O=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(o.a)(this,s),(e=t.call(this)).state={},e}return Object(l.a)(s,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"filter-container",children:[Object(h.jsxs)("label",{htmlFor:"states",children:["Localiza\xe7\xe3o",Object(h.jsxs)("select",{name:"states",children:[Object(h.jsx)("option",{children:"Selecione"}),Object(h.jsx)("option",{value:"Santa Catarina",children:"Santa Catarina"}),Object(h.jsx)("option",{value:"S\xe3o Paulo",children:"S\xe3o Paulo"})]})]}),Object(h.jsxs)("label",{htmlFor:"price",children:["Pre\xe7o",Object(h.jsxs)("select",{name:"price",children:[Object(h.jsx)("option",{children:"Selecione"}),Object(h.jsx)("option",{value:"100-200",children:"100-200"}),Object(h.jsx)("option",{value:"300-500",children:"300-500"})]})]}),Object(h.jsxs)("label",{htmlFor:"check-in",children:["Check-in",Object(h.jsx)("select",{name:"check-in",children:Object(h.jsx)("option",{children:" 19/04/2021"})})]}),Object(h.jsxs)("label",{htmlFor:"check-out",children:["Check-out",Object(h.jsx)("select",{name:"check-out",children:Object(h.jsx)("option",{children:" 25/04/2021"})})]}),Object(h.jsxs)("label",{htmlFor:"guests",children:["N\xba de h\xf3spedes",Object(h.jsx)("input",{name:"guests",type:"number",min:"0",max:"8"})]}),Object(h.jsx)("button",{className:"search",type:"button",children:"Buscar"})]})}}]),s}(c.a.Component),f=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(o.a)(this,s),(e=t.call(this)).state={x:0},e.goLeft=e.goLeft.bind(Object(m.a)(e)),e.goRight=e.goRight.bind(Object(m.a)(e)),e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=this.props.history.location.state,t=document.querySelector(".active");e&&!0===e.active?t.style.color="#4bb543":t.style.color="crimson"}},{key:"goLeft",value:function(){var e=this.state.x;0===e?this.setState({x:e-600}):this.setState({x:e+100})}},{key:"goRight",value:function(){var e=this.state.x;-600===e?this.setState({x:e+600}):this.setState({x:e-100})}},{key:"render",value:function(){var e=this.props.history.location.state,t=this.props.history,s=this.state.x;return Object(h.jsxs)("div",{className:"details-container",children:[Object(h.jsx)(x,{history:t}),Object(h.jsx)(O,{}),Object(h.jsx)("hr",{className:"hr"}),Object(h.jsxs)("div",{className:"details-middle",children:[Object(h.jsxs)("div",{className:"details-left-content",children:[e&&e.tag?Object(h.jsxs)("div",{className:"slider",children:[Object(h.jsx)("i",{className:"fas fa-angle-left",id:"left",onClick:this.goLeft}),Object(h.jsx)("img",{src:window.location.origin+"/sztest/".concat(e.tag,"/1.jpg"),alt:"".concat(e.tag,"-1"),style:{transform:"translateX(".concat(s,"%)")}}),Object(h.jsx)("img",{src:window.location.origin+"/sztest/".concat(e.tag,"/2.jpg"),alt:"".concat(e.tag,"-2"),style:{transform:"translateX(".concat(s,"%)")}}),Object(h.jsx)("img",{src:window.location.origin+"/sztest/".concat(e.tag,"/3.jpg"),alt:"".concat(e.tag,"-3"),style:{transform:"translateX(".concat(s,"%)")}}),Object(h.jsx)("img",{src:window.location.origin+"/sztest/".concat(e.tag,"/4.jpg"),alt:"".concat(e.tag,"-4"),style:{transform:"translateX(".concat(s,"%)")}}),Object(h.jsx)("img",{src:window.location.origin+"/sztest/".concat(e.tag,"/5.jpg"),alt:"".concat(e.tag,"-5"),style:{transform:"translateX(".concat(s,"%)")}}),Object(h.jsx)("img",{src:window.location.origin+"/sztest/".concat(e.tag,"/6.jpg"),alt:"".concat(e.tag,"-6"),style:{transform:"translateX(".concat(s,"%)")}}),Object(h.jsx)("img",{src:window.location.origin+"/sztest/".concat(e.tag,"/7.jpg"),alt:"".concat(e.tag,"-7"),style:{transform:"translateX(".concat(s,"%)")}}),Object(h.jsx)("i",{className:"fas fa-angle-right",id:"right",onClick:this.goRight})]}):null,Object(h.jsxs)("div",{children:[Object(h.jsx)("h4",{children:"Localiza\xe7\xe3o"}),Object(h.jsx)("p",{children:e?"".concat(e.adress):null})]})]}),Object(h.jsxs)("div",{className:"details-right-content",children:[Object(h.jsxs)("div",{className:"details-title-div",children:[Object(h.jsx)("h1",{children:e.name}),Object(h.jsxs)("span",{children:[e.district,", ",e.state]}),Object(h.jsxs)("div",{className:"active-info",children:[Object(h.jsxs)("h4",{children:["".concat(e.rooms.rooms," quartos - "),"".concat(e.rooms.beds," camas - "),"".concat(e.rooms.bathrooms," banheiros")]}),Object(h.jsxs)("div",{className:"active",children:[Object(h.jsx)("i",{class:"fas fa-map-marker",style:{fontSize:"20px",paddingRight:"5px"}}),e.active?"Ativo":"Inativo"]})]})]}),Object(h.jsx)("hr",{style:{width:"750px"}}),Object(h.jsxs)("div",{className:"taxes",children:[Object(h.jsxs)("div",{className:"taxes-child",children:[Object(h.jsx)("span",{children:"M\xe1x. de H\xf3spedes"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("i",{className:"fas fa-users"}),e.maxGuests]})]}),Object(h.jsxs)("div",{className:"taxes-child",children:[Object(h.jsx)("span",{children:"Taxa de Limpeza"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("i",{className:"fas fa-soap"}),"R$ ".concat(e.cleaningfee,",00")]})]}),Object(h.jsxs)("div",{className:"taxes-child",children:[Object(h.jsx)("span",{children:"Cau\xe7\xe3o"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("i",{className:"fas fa-money-bill-wave"}),"R$ ".concat(5*e.daily*.5)]})]})]}),Object(h.jsxs)("div",{className:"rules",children:[Object(h.jsx)("h3",{style:{fontSize:"20px"},children:"Regras"}),Object(h.jsx)("hr",{style:{width:"750px"}}),e.rules.kids?Object(h.jsxs)("div",{children:["Crian\xe7as at\xe9 12 anos",Object(h.jsx)("i",{className:"fas fa-check-circle sucess"})]}):Object(h.jsxs)("div",{children:["Crian\xe7as at\xe9 12 anos",Object(h.jsx)("i",{className:"fas fa-times-circle fail"})]}),e.rules.babies?Object(h.jsxs)("div",{children:["Beb\xeas at\xe9 2 anos",Object(h.jsx)("i",{className:"fas fa-check-circle sucess"})]}):Object(h.jsxs)("div",{children:["Beb\xeas at\xe9 2 anos",Object(h.jsx)("i",{className:"fas fa-times-circle fail"})]}),e.rules.smoking?Object(h.jsxs)("div",{children:["Permitido fumar",Object(h.jsx)("i",{className:"fas fa-check-circle sucess"})]}):Object(h.jsxs)("div",{children:["Permitido fumar",Object(h.jsx)("i",{className:"fas fa-times-circle fail"})]}),e.rules.events?Object(h.jsxs)("div",{children:["Permitido festas e eventos",Object(h.jsx)("i",{className:"fas fa-check-circle sucess"})]}):Object(h.jsxs)("div",{children:["Permitido festas e eventos",Object(h.jsx)("i",{className:"fas fa-times-circle fail"})]}),e.rules.animals?Object(h.jsxs)("div",{children:["Permitido animais",Object(h.jsx)("i",{className:"fas fa-check-circle sucess"})]}):Object(h.jsxs)("div",{children:["Permitido animais",Object(h.jsx)("i",{className:"fas fa-times-circle fail"})]})]}),Object(h.jsxs)("div",{className:"convenience",children:[Object(h.jsx)("h3",{style:{fontSize:"20px"},children:"Comodidades"}),Object(h.jsx)("hr",{style:{width:"750px"}}),e.convenience.parking&&Object(h.jsxs)("div",{children:[Object(h.jsx)("i",{className:"fas fa-parking"})," Estacionamento gratuito"]}),e.convenience.tv&&Object(h.jsxs)("div",{children:[Object(h.jsx)("i",{class:"fas fa-tv"})," TV com cabo"]}),e.convenience.airConditioning&&Object(h.jsxs)("div",{children:[Object(h.jsx)("i",{class:"fas fa-wind"})," Ar Condicionado"]}),e.convenience.wifi&&Object(h.jsxs)("div",{children:[Object(h.jsx)("i",{class:"fas fa-wifi"})," Wi-fi"]}),e.convenience.workingSpace&&Object(h.jsxs)("div",{children:[Object(h.jsx)("i",{class:"fas fa-briefcase"})," Espa\xe7o para trabalho"]}),e.convenience.concierge&&Object(h.jsxs)("div",{children:[Object(h.jsx)("i",{class:"fas fa-concierge-bell"})," Recep\xe7\xe3o"]}),e.convenience.pool&&Object(h.jsxs)("div",{children:[Object(h.jsx)("i",{class:"fas fa-swimming-pool"})," Piscina"]}),e.convenience.gym&&Object(h.jsxs)("div",{children:[Object(h.jsx)("i",{class:"fas fa-dumbbell"})," Academia"]})]})]})]})]})}}]),s}(c.a.Component),p=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(o.a)(this,s),(e=t.call(this)).state={},e}return Object(l.a)(s,[{key:"render",value:function(){return Object(h.jsx)("div",{})}}]),s}(c.a.Component),v=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(o.a)(this,s),(e=t.call(this)).state={},e}return Object(l.a)(s,[{key:"render",value:function(){return Object(h.jsx)("div",{})}}]),s}(c.a.Component),g=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(o.a)(this,s),(e=t.call(this)).state={},e}return Object(l.a)(s,[{key:"render",value:function(){return Object(h.jsx)("div",{})}}]),s}(c.a.Component),y=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(o.a)(this,s),(e=t.call(this)).state={},e}return Object(l.a)(s,[{key:"render",value:function(){return Object(h.jsx)("div",{})}}]),s}(c.a.Component),k=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(o.a)(this,s),(e=t.call(this)).state={},e}return Object(l.a)(s,[{key:"hotelDetails",value:function(e,t){e&&!e.className.includes("fab")&&this.props.history.push({pathname:"/properties/".concat(t+1),state:b[t]})}},{key:"render",value:function(){var e=this,t=this.props.history;return Object(h.jsxs)("div",{className:"properties-container",children:[Object(h.jsx)(x,{history:t}),Object(h.jsx)(O,{}),Object(h.jsx)("hr",{}),Object(h.jsx)("div",{className:"hotel-container",children:b.map((function(t,s){return Object(h.jsxs)("div",{className:"hotel",children:[Object(h.jsx)("div",{style:{backgroundImage:"url(".concat(window.location.origin+"/sztest/".concat(b[s].tag,"/1.jpg"),")")},className:"background",onClick:function(t){return e.hotelDetails(t.target,s)},children:Object(h.jsx)("a",{href:t.link,target:"blank",children:Object(h.jsx)("i",{className:"fab fa-airbnb"})})}),Object(h.jsx)("h3",{children:t.name}),Object(h.jsx)("span",{id:"minorInfo",children:"".concat(t.district," - ").concat(t.maxGuests," h\xf3spedes - ").concat(t.rooms.rooms," quartos")}),Object(h.jsxs)("div",{className:"hotel-info",children:[Object(h.jsxs)("div",{children:["Valor di\xe1ria",Object(h.jsx)("p",{children:"R$".concat(t.daily," / noite")})]}),Object(h.jsx)("hr",{className:"dashed-hr"}),Object(h.jsxs)("div",{children:["Total 5 di\xe1rias",Object(h.jsx)("p",{children:"R$".concat(5*t.daily)})]}),Object(h.jsx)("hr",{className:"dashed-hr"}),Object(h.jsxs)("div",{children:["Taxa de Limpeza",Object(h.jsx)("p",{children:"R$".concat(t.cleaningfee)})]}),Object(h.jsx)("hr",{className:"dashed-hr"}),Object(h.jsxs)("div",{children:["Cau\xe7\xe3o",Object(h.jsx)("p",{children:"R$".concat(5*t.daily*.5)})]}),Object(h.jsx)("hr",{className:"dashed-hr"}),Object(h.jsxs)("div",{style:{display:"flex",alignItems:"baseline"},children:[Object(h.jsx)("p",{style:{fontWeight:"bolder"},children:"Total:"}),Object(h.jsxs)("div",{style:{display:"flex",alignItems:"baseline"},children:[Object(h.jsx)("p",{children:"R$ ".concat(5*t.daily+t.cleaningfee)}),Object(h.jsx)("span",{children:"|"}),Object(h.jsxs)("div",{className:"final-price",children:[Object(h.jsx)("p",{style:{margin:"5px 0 0 8px"},children:"R$".concat(.95*(5*t.daily+t.cleaningfee))}),Object(h.jsx)("span",{children:"\xe0 vista"})]})]})]})]})]},s)}))})]})}}]),s}(c.a.Component);s(27);var w=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(r.c,{children:[Object(h.jsx)(r.a,{exact:!0,path:"/",component:u}),Object(h.jsx)(r.a,{exact:!0,path:"/calendar",component:p}),Object(h.jsx)(r.a,{exact:!0,path:"/clients",component:v}),Object(h.jsx)(r.a,{exact:!0,path:"/budgets",component:g}),Object(h.jsx)(r.a,{exact:!0,path:"/properties",component:k}),Object(h.jsx)(r.a,{exact:!0,path:"/properties/:id",component:f}),Object(h.jsx)(r.a,{exact:!0,path:"/control",component:y})]})})},N=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,37)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,n=t.getTTFB;s(e),a(e),c(e),i(e),n(e)}))},C=s(17),S=s(8);n.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(C.a,{history:Object(S.a)(),basename:"/sztest",children:Object(h.jsx)(w,{})})}),document.getElementById("root")),N()}},[[36,1,2]]]);
//# sourceMappingURL=main.8dea6f06.chunk.js.map