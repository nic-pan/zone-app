(this["webpackJsonpthe-zone-app"]=this["webpackJsonpthe-zone-app"]||[]).push([[0],{76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var c,a=n(0),s=n(15),r=n.n(s),i=(n(76),n(24)),l=n(33),j=n(9),o=n(10),u=n(12),b=n(11),p=(n(77),n(78),n(79),n(42)),h=n(2),d=function(e){return Object(h.jsx)(p.b,{exact:!0,activeClassName:"text-purple bg-purple-light rounded-2xl",className:"text-purple-light p-3","aria-label":e.altLabel,to:e.url,children:e.icon})},O=function(e){var t,n=Object(a.useState)({}),c=Object(i.a)(n,2),s=(c[0],c[1],[]),r=Object(l.a)(e.links.entries());try{for(r.s();!(t=r.n()).done;){var j=Object(i.a)(t.value,2),o=j[0],u=j[1];s.push(Object(h.jsx)("li",{children:Object(h.jsx)(d,{url:u.url,icon:u.icon,altLabel:u.altLabel})},o))}}catch(b){r.e(b)}finally{r.f()}return Object(h.jsx)("nav",{className:"max-h-screen min-h-screen bg-purple-dark justify-center flex rounded-3xl p-10",children:Object(h.jsx)("ul",{className:"space-y-10",children:s})})},x=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"flex justify-between bg-white rounded-3xl p-10",children:[Object(h.jsx)("h4",{className:"text-purple-dark text-xl self-center w-8/12",children:this.props.text}),Object(h.jsx)("img",{className:"object-right object-contain w-20",src:this.props.imgSrc})]})}}]),n}(a.Component),m=n(122),f=n(123),g=n(62),v=n.n(g),y=function(e){return Object(h.jsx)("div",{children:Object(h.jsx)(m.a,{className:"bg-gray-300 rounded-full",placeholder:"Search for your favorite food",InputProps:{style:{paddingTop:20,paddingBottom:20,paddingRight:50,paddingLeft:50,width:500},disableUnderline:!0,startAdornment:Object(h.jsx)(f.a,{position:"start",children:Object(h.jsx)(v.a,{})})}})})},N=n.p+"static/media/arabica-149.302f3def.png",w=function(e){var t=new Date,n="".concat(t.getDate()," ").concat(["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]," ").concat(t.getFullYear()),c=Object(a.useState)(n),s=Object(i.a)(c,2),r=s[0];s[1];return Object(h.jsx)("div",{className:"flex items-stretch",children:Object(h.jsx)("h5",{className:"self-center",children:r})})};!function(e){e.CARB="Carb",e.PROTEIN="Protein",e.FAT="Fat"}(c||(c={}));var k=n(46),C=n.n(k),T=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(e){return Object(j.a)(this,n),t.call(this,e)}return Object(o.a)(n,[{key:"render",value:function(){switch(this.props.type){case c.CARB:case c.PROTEIN:case c.FAT:}return Object(h.jsxs)("div",{className:"rounded-3xl mt-20 p-10 top-70 h-100 w-60 ".concat(this.props.isEven?"bg-red-200":"bg-white"),children:[Object(h.jsx)("div",{className:"block mb-3",children:Object(h.jsx)("div",{className:"-mt-28",children:Object(h.jsx)("img",{src:this.props.img,className:"w-40 justify-self-center"})})}),Object(h.jsxs)("div",{className:"block flex",children:[Object(h.jsxs)("div",{className:"flex-grow",children:[Object(h.jsx)(C.a,{className:"text-purple"})," ",Object(h.jsx)("span",{className:"text-sm",children:this.props.rating}),Object(h.jsx)("h3",{children:this.props.name})]}),Object(h.jsxs)("div",{className:"rounded-full bg-purple-dark h-14 w-14 flex flex-col items-center justify-center",children:[Object(h.jsx)("span",{className:"text-purple-light text-sm",children:this.props.prepTime}),Object(h.jsx)("span",{className:"text-purple-light text-xs",children:"min"})]})]})]})}}]),n}(a.Component),A=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(e){return Object(j.a)(this,n),t.call(this,e)}return Object(o.a)(n,[{key:"render",value:function(){var e,t=[],n=Object(l.a)(this.props.meals.entries());try{for(n.s();!(e=n.n()).done;){var c=Object(i.a)(e.value,2),a=c[0],s=c[1];t.push(Object(h.jsx)("li",{children:Object(h.jsx)(T,{prepTime:s.prepTime,rating:s.rating,name:s.name,type:s.type,img:s.img,isEven:a%2==0})},a))}}catch(r){n.e(r)}finally{n.f()}return Object(h.jsxs)("section",{className:"",children:[Object(h.jsxs)("h2",{className:"text-purple-dark text-xl",children:[Object(h.jsx)("strong",{children:"Suggested"})," for you"]}),Object(h.jsx)("div",{children:Object(h.jsx)("ul",{className:"flex flex-row space-x-10",children:t})})]})}}]),n}(a.Component),F=n.p+"static/media/dish.51df67fe.png",L=n(63),S=n.n(L),R=n(64),E=n.n(R),M=n.p+"static/media/food.0e923c1d.jpg",P=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){for(var e=[],t=0;t<Math.floor(this.props.rating);t++)e.push(Object(h.jsx)(C.a,{className:"text-yellow-500"},e.length));if(this.props.rating%1!=0&&e.push(Object(h.jsx)(S.a,{className:"text-yellow-500"},e.length)),e.length<5)for(;e.length<5;)e.push(Object(h.jsx)(E.a,{className:"text-yellow-500"},e.length));return Object(h.jsxs)("div",{className:"bg-white rounded-xl w-80 px-10 py-5 flex",children:[Object(h.jsx)("div",{className:"pr-5",children:Object(h.jsx)("img",{className:"shadow rounded-full max-w-full h-20 align-middle border-none",src:M})}),Object(h.jsxs)("div",{className:"flex flex-col align-middle",children:[Object(h.jsx)("span",{children:this.props.name}),Object(h.jsx)("span",{className:"text-gray-400 text-sm",children:this.props.mealType}),Object(h.jsx)("div",{children:e})]})]})}}]),n}(a.Component),B=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("section",{children:[Object(h.jsxs)("h2",{className:"text-purple-dark text-xl",children:["Your ",Object(h.jsx)("strong",{children:"Favorites"})]}),Object(h.jsx)(P,{name:"Kiwi",mealType:c.CARB,rating:3.5})]})}}]),n}(a.Component),I=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=F,t=[{name:"Tomato",type:c.CARB,img:e,rating:4.2,prepTime:60},{name:"Meat",type:c.PROTEIN,img:e,rating:4.6,prepTime:120},{name:"Eggs",type:c.PROTEIN,img:e,rating:4.9,prepTime:30},{name:"Avocado",type:c.FAT,img:e,rating:5,prepTime:40}];return Object(h.jsxs)("section",{className:"space-y-5",children:[Object(h.jsxs)("div",{className:"flex justify-between",children:[Object(h.jsx)(y,{className:"max-w-lg"}),Object(h.jsx)(w,{})]}),Object(h.jsx)(x,{text:"Good news, you've stayed in the zone for 2 months! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus, nulla vitae lacinia suscipit, ante neque sollicitudin erat.",imgSrc:N}),Object(h.jsx)(A,{meals:t}),Object(h.jsx)(B,{})]})}}]),n}(a.Component),J=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"Meals here"})})}}]),n}(a.Component),z=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"History here"})})}}]),n}(a.Component),D=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"Settings"})})}}]),n}(a.Component),H=n(8),Y=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"Something went wrong."})})}}]),n}(a.Component),q=n(65),G=n.n(q),K=n(66),U=n.n(K),Q=n(67),V=n.n(Q),W=n(68),X=n.n(W),Z=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e,t=[{url:"/",altLabel:"Home",component:I,icon:Object(h.jsx)(G.a,{})},{url:"/meals",altLabel:"Meals",component:J,icon:Object(h.jsx)(U.a,{})},{url:"/history",altLabel:"History",component:z,icon:Object(h.jsx)(V.a,{})},{url:"/settings",altLabel:"Settings",component:D,icon:Object(h.jsx)(X.a,{})}],n=[],c=Object(l.a)(t.entries());try{for(c.s();!(e=c.n()).done;){var a=Object(i.a)(e.value,2),s=a[0],r=a[1];n.push(Object(h.jsx)(H.a,{exact:!0,path:r.url,component:r.component},s))}}catch(j){c.e(j)}finally{c.f()}return Object(h.jsxs)("main",{className:"m-10 flex space-x-10",children:[Object(h.jsx)(O,{links:t}),Object(h.jsx)("section",{className:"hide-scrollbar overflow-auto max-h-screen",children:Object(h.jsxs)(H.c,{children:[n,Object(h.jsx)(H.a,{component:Y})]})})]})}}]),n}(a.Component),$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,125)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(h.jsx)(p.a,{basename:"/zone-app",children:Object(h.jsx)(Z,{})}),document.getElementById("root")),$()}},[[88,1,2]]]);
//# sourceMappingURL=main.1be3f6c5.chunk.js.map