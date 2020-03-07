(this["webpackJsonpassemble-app"]=this["webpackJsonpassemble-app"]||[]).push([[0],{25:function(e,t,a){e.exports=a(42)},30:function(e,t,a){},31:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),i=a.n(c),l=(a(30),a(22)),u=a(2),s=a(3),o=a(5),h=a(4),m=a(7),d=a(6),p=a(12),C=(a(31),a(9)),b=function(e){function t(){return Object(u.a)(this,t),Object(o.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"404 Page Not Found"),r.a.createElement(C.b,{to:"/"},"Home"))}}]),t}(n.Component),E=(a(37),a(38),function(e){function t(){return Object(u.a)(this,t),Object(o.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"headerComponentContainer"},r.a.createElement("div",{className:"title"},"Assemble Store"),r.a.createElement("div",{className:"cartIcon"},r.a.createElement("div",{className:"cartSize"},this.props.cart.reduce((function(e,t){return e+t.quantity}),0))))}}]),t}(n.Component)),v=(a(39),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).handleQuantityChange=a.handleQuantityChange.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"handleQuantityChange",value:function(e){"minus"===e?this.props.handleQuantityChange({sku:this.props.item.sku,newQuantity:this.props.item.quantity>0?this.props.item.quantity-1:0}):this.props.handleQuantityChange({sku:this.props.item.sku,newQuantity:this.props.item.quantity+1})}},{key:"render",value:function(){var e=this,t=this.props.item.quantity*this.props.item.unitPrice;return r.a.createElement("div",{className:"cartItemContainer"},r.a.createElement("div",{className:"picture pic-"+this.props.item.sku}),r.a.createElement("div",{className:"desc"},r.a.createElement("div",{className:"name"},this.props.item.name),r.a.createElement("div",{className:"sku"},"SKU# ",this.props.item.sku)),r.a.createElement("div",{className:"quantity"},r.a.createElement("div",{className:"stepper"},r.a.createElement("div",{className:"minus",onClick:function(){e.handleQuantityChange("minus")}}),r.a.createElement("div",{className:"value"},this.props.item.quantity),r.a.createElement("div",{className:"plus",onClick:function(){e.handleQuantityChange("plus")}}))),r.a.createElement("div",{className:"price"},t))}}]),t}(n.Component)),f=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).calculateSubtotal=a.calculateSubtotal.bind(Object(m.a)(a)),a.handleQuantityChange=a.handleQuantityChange.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"renderCartItems",value:function(e){var t=this;return e.map((function(e,a){return r.a.createElement(v,{item:e,key:a,handleQuantityChange:t.handleQuantityChange})}))}},{key:"handleQuantityChange",value:function(e){this.props.handleCartChange(e)}},{key:"calculateSubtotal",value:function(e){return e.map((function(e){return e.unitPrice*e.quantity})).reduce((function(e,t){return e+t}),0)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{cart:this.props.cart}),r.a.createElement("div",{className:"reviewCartContainer"},r.a.createElement("div",{className:"content"},this.renderCartItems(this.props.cart)),r.a.createElement("div",{className:"subTotal"},"SUBTOTAL: ",this.calculateSubtotal(this.props.cart)),r.a.createElement(C.b,{to:"/check-out"},"CHECK OUT")))}}]),t}(n.Component),y=a(15),O=(a(40),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).state={},a.handleCheckOutSubmit=a.handleCheckOutSubmit.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"handleInputChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(y.a)({},n,a))}},{key:"handleCheckOutSubmit",value:function(e){this.props.handleClearCart(),this.props.handleCheckOut(e)}},{key:"calculateSubtotal",value:function(e){return e.map((function(e){return e.unitPrice*e.quantity})).reduce((function(e,t){return e+t}),0)}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{cart:this.props.cart}),r.a.createElement("div",{className:"checkoutContainer"},r.a.createElement("div",{className:"paymentInformationContainer"},r.a.createElement("h2",null,"Payment Information"),r.a.createElement("label",{htmlFor:"nameOnCard"},"Name on Card:"),r.a.createElement("input",{id:"nameOnCard",name:"nameOnCard",value:this.state.nameOnCard?this.state.nameOnCard:"",placeholder:"Name on Card",onChange:function(t){return e.handleInputChange(t)}}),r.a.createElement("label",{htmlFor:"cardNumber"},"Card Number:"),r.a.createElement("input",{id:"cardNumber",name:"cardNumber",value:this.state.cardNumber?this.state.cardNumber:"",placeholder:"Card Number",onChange:function(t){return e.handleInputChange(t)}}),r.a.createElement("label",{htmlFor:"expiration"},"Expiration Date:"),r.a.createElement("input",{id:"expiration",name:"expiration",value:this.state.expiration?this.state.expiration:"",placeholder:"Expiration Date",onChange:function(t){return e.handleInputChange(t)}}),r.a.createElement("label",{htmlFor:"expiration"},"CVV:"),r.a.createElement("input",{id:"cvv",name:"cvv",value:this.state.cvv?this.state.cvv:"",placeholder:"CVV",onChange:function(t){return e.handleInputChange(t)}})),r.a.createElement("div",{className:"billingAddressContainer"},r.a.createElement("h2",null,"Billing Address"),r.a.createElement("label",{htmlFor:"fullname"},"Name:"),r.a.createElement("input",{id:"fullname",name:"fullname",value:this.state.fullname?this.state.fullname:"",placeholder:"Full Name",onChange:function(t){return e.handleInputChange(t)}}),r.a.createElement("label",{htmlFor:"address"},"Address:"),r.a.createElement("input",{id:"address",name:"address",value:this.state.address?this.state.address:"",placeholder:"Address",onChange:function(t){return e.handleInputChange(t)}}),r.a.createElement("label",{htmlFor:"address2"},"Apt/suite/etc:"),r.a.createElement("input",{id:"address2",name:"address2",value:this.state.address2?this.state.address2:"",placeholder:"Apt/suite/etc",onChange:function(t){return e.handleInputChange(t)}}),r.a.createElement("label",{htmlFor:"city"},"City:"),r.a.createElement("input",{id:"city",name:"city",value:this.state.city?this.state.city:"",placeholder:"City",onChange:function(t){return e.handleInputChange(t)}}),r.a.createElement("label",{htmlFor:"country"},"Country:"),r.a.createElement("input",{id:"country",name:"country",value:this.state.country?this.state.country:"",placeholder:"Country",onChange:function(t){return e.handleInputChange(t)}}),r.a.createElement("label",{htmlFor:"state"},"State:"),r.a.createElement("input",{id:"state",name:"state",value:this.state.state?this.state.state:"",placeholder:"State",onChange:function(t){return e.handleInputChange(t)}}),r.a.createElement("label",{htmlFor:"zip"},"ZIP Code:"),r.a.createElement("input",{id:"zip",name:"zip",value:this.state.zip?this.state.zip:"",placeholder:"ZIP Code",onChange:function(t){return e.handleInputChange(t)}})),r.a.createElement("div",{className:"totalPriceContainer "},"SUBTOTAL: ",this.calculateSubtotal(this.props.cart)),r.a.createElement("div",{className:"navigation"},r.a.createElement(C.b,{to:"/"},"CONTINUE SHOPPING"),r.a.createElement(C.b,{to:"/order-complete",onClick:function(){e.handleCheckOutSubmit({userData:e.state,cart:e.props.cart})}},"PLACE ORDER"))))}}]),t}(n.Component)),g=(a(41),function(e){function t(){return Object(u.a)(this,t),Object(o.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{cart:this.props.cart}),r.a.createElement("div",{className:"orderCompleteContainer"},r.a.createElement("h1",null,"Order Completed"),r.a.createElement(C.b,{to:"/"},"HOME")))}}]),t}(n.Component)),k=function(e){function t(e){var a;Object(u.a)(this,t);return(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).state={cart:[{sku:38094374,unitPrice:24,name:"Red Shirt",quantity:2},{sku:38094375,unitPrice:24,name:"Blue Shirt",quantity:1},{sku:38094321,unitPrice:12,name:"Blue socks",quantity:4}],checkoutDetails:null},a.onQuantityChange=a.onQuantityChange.bind(Object(m.a)(a)),a.onCheckOutSubmit=a.onCheckOutSubmit.bind(Object(m.a)(a)),a.clearCart=a.clearCart.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"onQuantityChange",value:function(e){this.state.cart.find((function(t){return t.sku===e.sku})).quantity=e.newQuantity,this.setState({cart:this.state.cart})}},{key:"onCheckOutSubmit",value:function(e){console.log("ORDER PLACED:",e),this.setState({checkoutDetails:e})}},{key:"clearCart",value:function(){this.setState({cart:this.state.cart.map((function(e){return Object(l.a)({},e,{quantity:0})}))})}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"mainContainer"},r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/",exact:!0,render:function(t){return r.a.createElement(f,Object.assign({},t,{cart:e.state.cart,handleCartChange:e.onQuantityChange}))}}),r.a.createElement(p.a,{path:"/check-out",render:function(t){return r.a.createElement(O,Object.assign({},t,{cart:e.state.cart,handleCheckOut:e.onCheckOutSubmit,handleClearCart:e.clearCart}))}}),r.a.createElement(p.a,{path:"/order-complete",render:function(t){return r.a.createElement(g,Object.assign({},t,{cart:e.state.cart,orderInfo:e.state.checkoutDetails}))}}),r.a.createElement(p.a,{component:b}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(C.a,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.a131a3ed.chunk.js.map