(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,a){e.exports={form:"CheckOut_form__GWrke",control:"CheckOut_control__2OrJk",actions:"CheckOut_actions__fwxev",submit:"CheckOut_submit__15C6q",invalid:"CheckOut_invalid__2tmqb"}},,,function(e,t,a){e.exports={"cart-item":"CartIteam_cart-item__Ms7-h",summary:"CartIteam_summary__2T5A5",price:"CartIteam_price__1oKYO",amount:"CartIteam_amount__3FoqX",actions:"CartIteam_actions__1f59U"}},function(e,t,a){e.exports={"cart-items":"Cart_cart-items__14oQj",total:"Cart_total__23wQN",actions:"Cart_actions__Yjrr8","button--alt":"Cart_button--alt__3N1iM",button:"Cart_button__1pECw"}},,,,,function(e,t,a){e.exports={backdrop:"Model_backdrop__1j4wb",modal:"Model_modal__1kkOZ","slide-down":"Model_slide-down__1JPQR"}},function(e,t,a){e.exports={button:"HeaderCartButton_button__3uDJJ",icon:"HeaderCartButton_icon__38KVy",badge:"HeaderCartButton_badge__1SoG8",bump:"HeaderCartButton_bump__25o_V"}},function(e,t,a){e.exports={meals:"AvailableMeal_meals__6cmvq","meals-appear":"AvailableMeal_meals-appear__3BRUz",mealLoading:"AvailableMeal_mealLoading__2f4zq"}},function(e,t,a){e.exports={meal:"MealIteam_meal__3f0u6",description:"MealIteam_description__1sak7",price:"MealIteam_price__-9oYB"}},,function(e,t,a){e.exports={header:"Header_header__12NjY","main-image":"Header_main-image__381ne"}},,function(e,t,a){e.exports={card:"Card_card__1GysW"}},function(e,t,a){},function(e,t,a){e.exports={form:"MealIteamForm_form__1SXNc"}},function(e,t,a){e.exports={summary:"MealSummary_summary__3SmAX"}},,,,,function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(8),c=a.n(n),r=(a(27),a(2)),i=a(1),s=a.n(i),o=a(5),l=a.n(o),d=a(11),u=a(4),j=s.a.createContext({iteams:[],totalAmount:0,addIteam:function(e){},removeIteam:function(e){},clearCart:function(){}}),m=a(12),b=a.n(m),O=a(0),h=function(e){return Object(O.jsx)("div",{className:b.a.backdrop,onClick:e.hideCart})},x=function(e){return Object(O.jsx)("div",{className:b.a.modal,children:Object(O.jsx)("div",{className:b.a.content,children:e.children})})},f=document.getElementById("overlays"),p=function(e){return Object(O.jsxs)(i.Fragment,{children:[c.a.createPortal(Object(O.jsx)(h,{hideCart:e.hideCart}),f),c.a.createPortal(Object(O.jsx)(x,{children:e.children}),f)]})},_=a(6),v=a.n(_),C=function(e){var t="$".concat(e.price.toFixed(2));return Object(O.jsxs)("li",{className:v.a["cart-item"],children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:e.name}),Object(O.jsxs)("div",{className:v.a.summary,children:[Object(O.jsx)("span",{className:v.a.price,children:t}),Object(O.jsxs)("span",{className:v.a.amount,children:["x ",e.amount]})]})]}),Object(O.jsxs)("div",{className:v.a.actions,children:[Object(O.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(O.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},y=a(7),N=a.n(y),g=a(3),A=a.n(g),k=function(e){var t=Object(i.useState)({name:!0,street:!0,postalCode:!0,city:!0}),a=Object(r.a)(t,2),n=a[0],c=a[1],s=Object(i.useRef)(),o=Object(i.useRef)(),l=Object(i.useRef)(),d=Object(i.useRef)(),u=function(e){return""===e.trim()},j="".concat(A.a.control," ").concat(n.name?"":A.a.invalid),m="".concat(A.a.control," ").concat(n.street?"":A.a.invalid),b="".concat(A.a.control," ").concat(n.postalCode?"":A.a.invalid),h="".concat(A.a.control," ").concat(n.city?"":A.a.invalid);return Object(O.jsxs)("form",{className:A.a.form,onSubmit:function(t){t.preventDefault();var a=s.current.value,n=o.current.value,r=l.current.value,i=d.current.value,j=!u(a),m=!u(n),b=5===r.length,O=!u(i);c({name:j,street:m,postalCode:b,city:O}),j&&m&&b&&O&&e.onData({name:a,street:n,postalCode:r,city:i})},children:[Object(O.jsxs)("div",{className:j,children:[Object(O.jsx)("label",{htmlFor:"text",children:"Your Name"}),Object(O.jsx)("input",{type:"text",id:"text",ref:s}),!n.name&&Object(O.jsx)("p",{children:"Please enter a valid name"})]}),Object(O.jsxs)("div",{className:m,children:[Object(O.jsx)("label",{htmlFor:"street",children:"Street"}),Object(O.jsx)("input",{type:"text",id:"street",ref:o}),!n.street&&Object(O.jsx)("p",{children:"Please enter a valid street"})]}),Object(O.jsxs)("div",{className:b,children:[Object(O.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(O.jsx)("input",{type:"text",id:"postal",ref:l}),!n.postalCode&&Object(O.jsx)("p",{children:"Please enter a valid postal code"})]}),Object(O.jsxs)("div",{className:h,children:[Object(O.jsx)("label",{htmlFor:"city",children:"City"}),Object(O.jsx)("input",{type:"text",id:"city",ref:d}),!n.city&&Object(O.jsx)("p",{children:"Please enter a valid city"})]}),Object(O.jsxs)("div",{className:A.a.actions,children:[Object(O.jsx)("button",{onClick:e.onCancel,children:"Cancel"}),Object(O.jsx)("button",{className:A.a.submit,onSubmit:e.onData,children:"Confirm "})]})]})},w=function(e){var t=Object(i.useState)(!1),a=Object(r.a)(t,2),n=a[0],c=a[1],o=Object(i.useState)(!1),m=Object(r.a)(o,2),b=m[0],h=m[1],x=Object(i.useState)(!1),f=Object(r.a)(x,2),_=f[0],v=f[1],y=Object(i.useContext)(j),g="$".concat(y.totalAmount.toFixed(2)),A=y.iteams.length>0,w=function(e){y.removeIteam(e)},I=function(e){y.addIteam(Object(u.a)(Object(u.a)({},e),{},{amount:1}))},S=Object(O.jsx)("ul",{className:N.a["cart-items"],children:y.iteams.map((function(e){return Object(O.jsx)(C,{name:e.name,price:e.price,amount:e.amount,onRemove:w.bind(null,e.id),onAdd:I.bind(null,e)},e.price)}))}),M=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),h(!0),e.next=4,fetch("https://react-http-54965-default-rtdb.firebaseio.com/order.json",{method:"POST",body:JSON.stringify({user:t,orderIteams:y.iteams})});case 4:h(!1),v(!0),y.clearCart();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=Object(O.jsxs)("div",{className:N.a.actions,children:[Object(O.jsx)("button",{className:N.a["button--alt"],onClick:e.hideCart,children:"Close"}),A&&Object(O.jsx)("button",{className:N.a.button,onClick:function(){c(!0)},children:"Order"})]}),F=Object(O.jsxs)(s.a.Fragment,{children:[S,Object(O.jsxs)("div",{className:N.a.total,children:[Object(O.jsx)("span",{children:"Total Amount"}),Object(O.jsx)("span",{children:g})]}),n&&Object(O.jsx)(k,{onData:M,onCancel:e.hideCart}),!n&&R]}),D=Object(O.jsx)("p",{children:"Your order is under poroces "}),E=Object(O.jsx)("p",{children:"Your order submited Successfully"});return Object(O.jsxs)(p,{hideCart:e.hideCart,children:[!b&&!_&&F,b&&D,_&&!b&&E]})},I=a(17),S=a.n(I),M=a.p+"static/media/meals.2971f633.jpg",R=function(){return Object(O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(O.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},F=a(13),D=a.n(F),E=function(e){var t=Object(i.useContext)(j).iteams.reduce((function(e,t){return e+t.amount}),0);return Object(O.jsxs)("button",{className:D.a.button,onClick:e.showCart,children:[Object(O.jsx)("span",{className:D.a.icon,children:Object(O.jsx)(R,{})}),Object(O.jsx)("span",{children:"Your Cart"}),Object(O.jsx)("span",{className:D.a.badge,children:t})]})},H=function(e){return Object(O.jsxs)(i.Fragment,{children:[Object(O.jsxs)("header",{className:S.a.header,children:[Object(O.jsx)("h1",{children:"ReactMeals"}),Object(O.jsx)(E,{showCart:e.showCart})]}),Object(O.jsx)("div",{className:S.a["main-image"],children:Object(O.jsx)("img",{src:M,alt:"A table full of delicious food!"})})]})},P=a(19),B=a.n(P),Y=function(e){return Object(O.jsx)("div",{className:B.a.card,children:e.children})},J=a(14),q=a.n(J),L=a(15),T=a.n(L),z=a(20),V=a.n(z),G=s.a.forwardRef((function(e,t){return Object(O.jsxs)("div",{classes:V.a.input,children:[Object(O.jsxs)("label",{htmlFor:e.input.id,children:[e.label," "]}),Object(O.jsx)("input",Object(u.a)({ref:t},e.input))]})})),Q=a(21),X=a.n(Q),$=function(e){var t=Object(i.useRef)(),a=Object(i.useState)(!0),n=Object(r.a)(a,2),c=n[0],s=n[1];return Object(O.jsxs)("form",{className:X.a.form,onSubmit:function(a){a.preventDefault();var n=t.current.value,c=+n;0===n.trim().length||c<1||c>5?s(!1):e.onAddToCart(c)},children:[Object(O.jsx)(G,{ref:t,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(O.jsx)("button",{children:"+Add"}),!c&&Object(O.jsx)("p",{children:"Please Enter a valid amount(1-5)"})]})},K=function(e){var t=Object(i.useContext)(j),a="$".concat(e.price);return Object(O.jsxs)("li",{className:T.a.meal,children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:e.name}),Object(O.jsx)("div",{className:T.a.description,children:e.description}),Object(O.jsx)("div",{className:T.a.price,children:a})]}),Object(O.jsx)("div",{children:Object(O.jsx)($,{id:e.id,onAddToCart:function(a){t.addIteam({id:e.id,name:e.name,amount:a,price:e.price})}})})]})},U=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),a=t[0],n=t[1],c=Object(i.useState)(!0),s=Object(r.a)(c,2),o=s[0],u=s[1],j=Object(i.useState)(!1),m=Object(r.a)(j,2),b=m[0],h=m[1];if(Object(i.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){var t,a,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://react-http-54965-default-rtdb.firebaseio.com/meals.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Something is wrong");case 5:return e.next=7,t.json();case 7:for(r in a=e.sent,c=[],a)c.push({id:r,name:a[r].name,description:a[r].description,price:a[r].price});n(c),u(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().catch((function(e){u(!1),h(e.message)}))}),[]),o)return Object(O.jsx)("section",{className:q.a.mealLoading,children:Object(O.jsx)("h3",{children:"Loading..."})});if(b)return Object(O.jsx)("section",{className:q.a.mealLoading,children:Object(O.jsx)("h6",{children:b})});var x=a.map((function(e){return Object(O.jsx)(K,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(O.jsx)("section",{className:q.a.meals,children:Object(O.jsx)(Y,{children:Object(O.jsx)("ul",{children:x})})})},W=a(22),Z=a.n(W),ee=function(){return Object(O.jsxs)("section",{className:Z.a.summary,children:[Object(O.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(O.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(O.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},te=function(){return Object(O.jsxs)(i.Fragment,{children:[Object(O.jsx)(ee,{}),Object(O.jsx)(U,{})]})},ae=a(18),ne={iteams:[],totalAmount:0},ce=function(e,t){if("ADD"===t.type){var a,n=e.iteams.findIndex((function(e){return e.id===t.iteams.id})),c=e.iteams[n];if(c){var r=Object(u.a)(Object(u.a)({},c),{},{amount:c.amount+t.iteams.amount});(a=Object(ae.a)(e.iteams))[n]=r}else a=Object(u.a)({},t.iteams),a=e.iteams.concat(t.iteams);return{iteams:a,totalAmount:e.totalAmount+t.iteams.price*t.iteams.amount}}if("REMOVE"===t.type){var i,s=e.iteams.findIndex((function(e){return e.id===t.id})),o=e.iteams[s],l=e.totalAmount-o.price;if(1===o.amount)i=e.iteams.filter((function(e){return e.id!==t.id}));else{var d=Object(u.a)(Object(u.a)({},o),{},{amount:o.amount-1});(i=Object(ae.a)(e.iteams))[s]=d}return{iteams:i,totalAmount:l}}return t.type,ne},re=function(e){var t=Object(i.useReducer)(ce,ne),a=Object(r.a)(t,2),n=a[0],c=a[1],s={iteams:n.iteams,totalAmount:n.totalAmount,addIteam:function(e){c({type:"ADD",iteams:e})},removeIteam:function(e){c({type:"REMOVE",id:e})},clearCart:function(){c({type:"CLEAR"})}};return Object(O.jsx)(j.Provider,{value:s,children:e.children})};var ie=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(O.jsxs)(re,{children:[a&&Object(O.jsx)(w,{hideCart:function(){n(!1)}}),Object(O.jsx)(H,{showCart:function(){n(!0)}}),Object(O.jsx)(te,{})]})};c.a.render(Object(O.jsx)(ie,{}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.9bbcf59a.chunk.js.map