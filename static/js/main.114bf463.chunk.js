(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Checkout_form__1d_TS",control:"Checkout_control__2UQFw",actions:"Checkout_actions__26oYI",submit:"Checkout_submit__M18I4",invalid:"Checkout_invalid__Px59i",error:"Checkout_error__2ycAt"}},,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__1dmpL",total:"Cart_total__13ZJa",actions:"Cart_actions__1xZCN","button--alt":"Cart_button--alt__1dAdn",button:"Cart_button__3ST3Z"}},,function(e,t,n){e.exports={button:"headerCart_button__3Y8jd",icon:"headerCart_icon__3OMaX",badge:"headerCart_badge__1f_Hj",bump:"headerCart_bump__1Kuuy","button-bump":"headerCart_button-bump__1QrTv"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1MlcA",summary:"CartItem_summary__19V2A",price:"CartItem_price__jxp9m",amount:"CartItem_amount__1viqj",actions:"CartItem_actions__4Ed3D"}},,,function(e,t,n){e.exports={meals:"AvailableMeals_meals__3xVOW","meals-appear":"AvailableMeals_meals-appear__2yoUj",loading:"AvailableMeals_loading__1zdn5",error:"AvailableMeals_error__1qU5T"}},function(e,t,n){e.exports={meal:"MealItem_meal__jdaZF",description:"MealItem_description__pDGYC",price:"MealItem_price__14Y_p"}},,function(e,t,n){e.exports={header:"header_header__2sQ_B","main-image":"header_main-image__7BjCI"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__1v_BG",modal:"Modal_modal__2gJ4O","slide-down":"Modal_slide-down__XRkLm"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__COY49"}},function(e,t,n){e.exports={card:"Card_card__af7zT"}},function(e,t,n){e.exports={form:"MealItemForm_form__2lWPI"}},function(e,t,n){e.exports={input:"Input_input__1ya4h"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(9),c=n.n(a),r=(n(24),n(2)),i=n(1),o=n.n(i),s=n(0),l=function(){return Object(s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(s.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},u=n(7),d=n.n(u),j=o.a.createContext({items:[],totalAmount:0,addItem:function(){},removeItem:function(){}}),m=function(e){var t=Object(i.useContext)(j),n=Object(i.useState)(!1),a=Object(r.a)(n,2),c=a[0],o=a[1],u=t.items.reduce((function(e,t){return e+t.amount}),0),m="".concat(d.a.badge," ").concat(c&&d.a.bump),b="".concat(d.a.button," ").concat(c&&d.a["button-bump"]);return Object(i.useEffect)((function(){if(0!==t.items.length)return o(!0),setTimeout((function(){o(!1)}),300),function(){o(!1)}}),[t.items,t.totalAmount]),Object(s.jsxs)("button",{className:b,onClick:e.onOpenCart,children:[Object(s.jsx)("span",{className:d.a.icon,children:Object(s.jsx)(l,{})}),Object(s.jsx)("span",{children:"Cart"}),Object(s.jsx)("span",{className:m,children:u})]})},b=n.p+"static/media/meals.13bcd8f3.jpg",O=n(14),h=n.n(O),p=function(e){return Object(s.jsxs)(o.a.Fragment,{children:[Object(s.jsxs)("header",{className:h.a.header,children:[Object(s.jsx)("h2",{children:"Delicious React"}),Object(s.jsx)(m,{onOpenCart:e.onOpenCart})]}),Object(s.jsx)("div",{className:h.a["main-image"],children:Object(s.jsx)("img",{src:b,alt:"Delicious food."})})]})},x=n(16),f=n.n(x),_=function(){return Object(s.jsxs)("section",{className:f.a.summary,children:[Object(s.jsx)("h2",{children:"Delicious Food ,Only For You."}),Object(s.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(s.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},C=n(6),v=n.n(C),g=n(10),N=n(11),y=n.n(N),A=n(17),k=n.n(A),I=function(e){return Object(s.jsx)("div",{className:k.a.card,children:e.children})},S=n(12),M=n.n(S),w=n(18),F=n.n(w),H=n(4),E=n(19),B=n.n(E),D=o.a.forwardRef((function(e,t){return Object(s.jsxs)("div",{className:B.a.input,children:[Object(s.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(s.jsx)("input",Object(H.a)(Object(H.a)({},e.input),{},{ref:t}))]})})),R=function(e){var t=Object(i.useState)(!0),n=Object(r.a)(t,2),a=n[0],c=n[1],o=Object(i.useRef)();return Object(s.jsxs)("form",{className:F.a.form,onSubmit:function(t){t.preventDefault();var n=+o.current.value;n<1||n>5||null===n?c(!1):e.onAddToCart(n)},children:[Object(s.jsx)(D,{label:"Amount",ref:o,input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(s.jsx)("button",{children:" Add "}),!a&&Object(s.jsx)("p",{children:"Please enter a valid amount."})]})},T=function(e){var t=Object(i.useContext)(j),n="$".concat(e.price.toFixed(2));return Object(s.jsxs)("li",{className:M.a.meal,children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:e.name}),Object(s.jsx)("div",{className:M.a.description,children:e.description}),Object(s.jsx)("div",{className:M.a.price,children:n})]}),Object(s.jsx)("div",{children:Object(s.jsx)(R,{id:e.id,onAddToCart:function(n){t.addItem({id:e.id,name:e.name,price:e.price,amount:n})}})})]})},V=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(!0),o=Object(r.a)(c,2),l=o[0],u=o[1],d=Object(i.useState)(),j=Object(r.a)(d,2),m=j[0],b=j[1];if(Object(i.useEffect)((function(){var e=function(){var e=Object(g.a)(v.a.mark((function e(){var t,n,c,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://delicious-react-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json");case 2:if((t=e.sent).ok){e.next=6;break}throw u(!1),new Error("Something Went Wrong :(");case 6:return e.next=8,t.json();case 8:for(r in n=e.sent,c=[],n)c.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});a(c),u(!1);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){b(e.message)}))}),[]),l)return Object(s.jsx)("section",{className:y.a.loading,children:Object(s.jsx)("p",{children:"Loading..."})});if(m)return Object(s.jsx)("section",{className:y.a.error,children:Object(s.jsx)("p",{children:m})});var O=n.map((function(e){return Object(s.jsx)(T,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(s.jsx)("section",{className:y.a.meals,children:Object(s.jsx)(I,{children:Object(s.jsx)("ul",{children:O})})})},P=function(){return Object(s.jsxs)(o.a.Fragment,{children:[Object(s.jsx)(_,{}),Object(s.jsx)(V,{})]})},Y=n(15),q=n.n(Y),z=function(e){return Object(s.jsx)("div",{className:q.a.backdrop,onClick:e.onCloseCart})},J=function(e){return Object(s.jsx)("div",{className:q.a.modal,children:Object(s.jsx)("div",{children:e.children})})},L=document.querySelector("#modal"),W=function(e){return Object(s.jsxs)(o.a.Fragment,{children:[c.a.createPortal(Object(s.jsx)(z,{onCloseCart:e.onCloseCart}),L),c.a.createPortal(Object(s.jsx)(J,{children:e.children}),L)]})},Z=n(5),Q=n.n(Z),U=n(8),$=n.n(U),G=function(e){var t="$".concat(e.price.toFixed(2));return Object(s.jsxs)("li",{className:$.a["cart-item"],children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:e.name}),Object(s.jsxs)("div",{className:$.a.summary,children:[Object(s.jsx)("span",{className:$.a.price,children:t}),Object(s.jsxs)("span",{className:$.a.amount,children:["x ",e.amount]})]})]}),Object(s.jsxs)("div",{className:$.a.actions,children:[Object(s.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(s.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},X=n(3),K=n.n(X),ee=function(e){var t=Object(i.useState)(""),n=Object(r.a)(t,2),a=n[0],c=n[1],o=Object(i.useState)(!1),s=Object(r.a)(o,2),l=s[0],u=s[1],d=e(a);return{value:a,isValid:d,hasError:!d&&l,valueChangeHandler:function(e){c(e.target.value)},inputBlurHandler:function(e){u(!0)}}},te=function(e){var t=!1,n=ee((function(e){return""!==e.trim()})),a=n.value,c=n.isValid,r=n.hasError,i=n.valueChangeHandler,o=n.inputBlurHandler,l=ee((function(e){return""!==e.trim()})),u=l.value,d=l.isValid,j=l.hasError,m=l.valueChangeHandler,b=l.inputBlurHandler,O=ee((function(e){return 6===e.trim().length})),h=O.value,p=O.isValid,x=O.hasError,f=O.valueChangeHandler,_=O.inputBlurHandler,C=ee((function(e){return""!==e.trim()})),v=C.value,g=C.isValid,N=C.hasError,y=C.valueChangeHandler,A=C.inputBlurHandler;g&&c&&p&&d&&(t=!0);var k="".concat(K.a.control," ").concat(r?K.a.invalid:""),I="".concat(K.a.control," ").concat(j?K.a.invalid:""),S="".concat(K.a.control," ").concat(x?K.a.invalid:""),M="".concat(K.a.control," ").concat(N?K.a.invalid:"");return Object(s.jsxs)("form",{className:K.a.form,onSubmit:function(n){n.preventDefault(),t&&e.onConfirm({name:a,street:u,postalCode:h,city:v})},autoComplete:"off",children:[Object(s.jsxs)("div",{className:k,children:[Object(s.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(s.jsx)("input",{type:"text",id:"name",onChange:i,onBlur:o,value:a,autoComplete:"off"})]}),Object(s.jsxs)("div",{className:I,children:[Object(s.jsx)("label",{htmlFor:"street",children:"Street"}),Object(s.jsx)("input",{type:"text",id:"street",onChange:m,onBlur:b,value:u,autoComplete:"off"})]}),Object(s.jsxs)("div",{className:S,children:[Object(s.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(s.jsx)("input",{type:"text",id:"postal",value:h,onChange:f,onBlur:_})]}),Object(s.jsxs)("div",{className:M,children:[Object(s.jsx)("label",{htmlFor:"city",children:"City"}),Object(s.jsx)("input",{type:"text",id:"city",value:v,onChange:y,onBlur:A})]}),Object(s.jsxs)("div",{className:K.a.actions,children:[Object(s.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(s.jsx)("button",{className:K.a.submit,disabled:!t,children:"Confirm"})]})]})},ne=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],l=Object(i.useState)(!1),u=Object(r.a)(l,2),d=u[0],m=u[1],b=Object(i.useState)(!1),O=Object(r.a)(b,2),h=O[0],p=O[1],x=Object(i.useContext)(j),f=x.items.length>0,_=function(e){x.addItem(Object(H.a)(Object(H.a)({},e),{},{amount:1}))},C=function(e){x.removeItem(e)},N=Object(s.jsx)("ul",{className:Q.a["cart-items"],children:x.items.map((function(e){return Object(s.jsx)(G,{name:e.name,price:e.price,amount:e.amount,onAdd:_.bind(null,e),onRemove:C.bind(null,e.id)},e.id)}))}),y="$".concat(x.totalAmount.toFixed(2)),A=function(){var e=Object(g.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,fetch("https://delicious-react-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",{method:"POST",body:JSON.stringify({user:t,items:x.items,total:y})});case 3:m(!1),p(!0),x.clearCart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=Object(s.jsxs)(o.a.Fragment,{children:[N,Object(s.jsxs)("div",{className:Q.a.total,children:[Object(s.jsx)("span",{children:"Total Amount"}),Object(s.jsx)("span",{children:y})]}),!a&&Object(s.jsxs)("div",{className:Q.a.actions,children:[Object(s.jsx)("button",{className:Q.a["button--alt"],onClick:e.onCloseCart,children:"Close"}),f&&Object(s.jsx)("button",{className:Q.a.button,onClick:function(){c(!0)},children:"Order"})]}),a&&Object(s.jsx)(te,{onConfirm:A,onCancel:e.onCloseCart})]}),I=Object(s.jsx)("p",{children:"Sending Order Request..."}),S=Object(s.jsxs)(o.a.Fragment,{children:[Object(s.jsx)("p",{children:"Order Successful"}),Object(s.jsx)("div",{className:Q.a.actions,children:Object(s.jsx)("button",{className:Q.a["button--alt"],onClick:e.onCloseCart,children:"Close"})})]});return Object(s.jsxs)(W,{onCloseCart:e.onCloseCart,children:[!d&&!h&&k,d&&I,h&&S]})},ae={items:[],totalAmount:0},ce=function(e,t){if("ADD"===t.type){var n=e.totalAmount+t.item.amount*t.item.price,a=e.items,c=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[c];if(r){var i=Object(H.a)(Object(H.a)({},r),{},{amount:r.amount+t.item.amount});a[c]=i}else a=e.items.concat(t.item);return{items:a,totalAmount:n}}if("REMOVE"===t.type){var o,s=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[s],u=e.totalAmount-l.price;if(1===l.amount)return{items:o=e.items.filter((function(e){return e.id!==l.id})),totalAmount:u};var d=Object(H.a)(Object(H.a)({},l),{},{amount:l.amount-1});return(o=e.items)[s]=d,{items:o,totalAmount:u}}return t.type,ae},re=function(e){var t=Object(i.useReducer)(ce,ae),n=Object(r.a)(t,2),a=n[0],c=n[1],o={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})},clearCart:function(){c({type:"CLEAR"})}};return Object(s.jsx)(j.Provider,{value:o,children:e.children})};var ie=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(s.jsxs)(re,{children:[n&&Object(s.jsx)(ne,{onCloseCart:function(){a(!1)}}),Object(s.jsx)(p,{onOpenCart:function(){a(!0)}}),Object(s.jsx)("main",{children:Object(s.jsx)(P,{})})]})};c.a.render(Object(s.jsx)(ie,{}),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.114bf463.chunk.js.map