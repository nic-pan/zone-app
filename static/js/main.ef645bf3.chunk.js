(this["webpackJsonpthe-zone-app"]=this["webpackJsonpthe-zone-app"]||[]).push([[0],{80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var c,n=a(0),s=a(15),r=a.n(s),i=(a(80),a(18)),l=a(19),j=a(7),o=a(8),b=a(10),u=a(9),m=(a(81),a(82),a(83),a(42)),h=a(2),d=function(e){return Object(h.jsx)(m.b,{exact:!0,activeClassName:"text-primary bg-light rounded-2xl",className:"text-white p-3","aria-label":e.altLabel,to:e.url,children:e.icon})},p=a(59),x=a.n(p),O=a(63),f=a.n(O),g=a(64),y=a.n(g),v=function(e){var t,a=Object(n.useState)({}),c=Object(i.a)(a,2),s=(c[0],c[1],[]),r=Object(l.a)(e.links.entries());try{for(r.s();!(t=r.n()).done;){var j=Object(i.a)(t.value,2),o=j[0],b=j[1];s.push(Object(h.jsx)("li",{children:Object(h.jsx)(d,{url:b.url,icon:b.icon,altLabel:b.altLabel})},o))}}catch(u){r.e(u)}finally{r.f()}return Object(h.jsx)("nav",{className:"min-w-max max-w-max bg-primary rounded-3xl p-10 ",children:Object(h.jsxs)("div",{className:"flex flex-col space-y-40 items-center",children:[Object(h.jsx)("div",{className:"p-5 bg-light rounded-full",children:Object(h.jsx)(x.a,{fontSize:"large",className:"text-white"})}),Object(h.jsx)("div",{children:Object(h.jsx)("ul",{className:"space-y-10",children:s})}),Object(h.jsxs)("div",{className:"flex flex-col space-y-10",children:[Object(h.jsx)("a",{target:"_blank",href:"https://github.com/Nickelfront/zone-app",children:Object(h.jsx)(f.a,{className:"text-light"})}),Object(h.jsx)("a",{href:"",children:Object(h.jsx)(y.a,{className:"text-light"})})]})]})})},N=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"flex justify-between bg-white rounded-3xl p-10",children:[Object(h.jsx)("h4",{className:"text-dark text-xl self-center w-8/12",children:this.props.text}),Object(h.jsx)("img",{className:"object-right object-contain w-20",src:this.props.imgSrc})]})}}]),a}(n.Component),w=a(126),k=a(127),T=a(65),C=a.n(T),S=function(e){return Object(h.jsx)("div",{children:Object(h.jsx)(w.a,{className:"bg-gray-200 rounded-full",placeholder:"Search for your favorite food",InputProps:{style:{paddingTop:20,paddingBottom:20,paddingRight:50,paddingLeft:50,width:500},disableUnderline:!0,startAdornment:Object(h.jsx)(k.a,{position:"start",children:Object(h.jsx)(C.a,{})})}})})},A=function(e){var t=new Date,a="".concat(t.getDate()," ").concat(["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]," ").concat(t.getFullYear()),c=Object(n.useState)(a),s=Object(i.a)(c,2),r=s[0];s[1];return Object(h.jsx)("div",{className:"flex items-stretch",children:Object(h.jsx)("h5",{className:"self-center",children:r})})},F=a(46),P=a.n(F),D=a(66),M=a.n(D),R=a(67),z=a.n(R),L=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){for(var e=[],t=0;t<Math.floor(this.props.rating);t++)e.push(Object(h.jsx)(P.a,{className:"text-yellow-500"},e.length));if(this.props.rating%1!=0&&e.push(Object(h.jsx)(M.a,{className:"text-yellow-500"},e.length)),e.length<5)for(;e.length<5;)e.push(Object(h.jsx)(z.a,{className:"text-yellow-500"},e.length));return Object(h.jsxs)("div",{className:"bg-white rounded-xl w-80 px-10 py-5 flex",children:[Object(h.jsx)("div",{className:"pr-5",children:Object(h.jsx)("img",{className:"shadow rounded-full max-w-full h-20 align-middle border-none",src:this.props.imgSrc})}),Object(h.jsxs)("div",{className:"flex flex-col align-middle",children:[Object(h.jsx)("span",{children:this.props.name}),Object(h.jsx)("span",{className:"text-gray-400 text-sm",children:this.props.mealType}),Object(h.jsx)("div",{children:e})]})]})}}]),a}(n.Component),B=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e,t=[],a=Object(l.a)(this.props.favorites.entries());try{for(a.s();!(e=a.n()).done;){var c=Object(i.a)(e.value,2),n=c[0],s=c[1];t.push(Object(h.jsx)("li",{children:Object(h.jsx)(L,{name:s.name,mealType:s.mealType,rating:s.rating,imgSrc:s.imgSrc})},n))}}catch(r){a.e(r)}finally{a.f()}return Object(h.jsxs)("section",{children:[Object(h.jsxs)("h2",{className:"text-dark text-xl",children:["Your ",Object(h.jsx)("strong",{children:"Favorites"})]}),Object(h.jsx)("div",{className:"mt-5",children:Object(h.jsx)("ul",{className:"flex flex-row space-x-10",children:t})})]})}}]),a}(n.Component);!function(e){e.CARB="Carb",e.PROTEIN="Protein",e.FAT="Fat"}(c||(c={}));var E,I,J=a.p+"static/media/dish.51df67fe.png",Y=a.p+"static/media/food.0e923c1d.jpg",H=a.p+"static/media/arabica-149.302f3def.png";!function(e){e.CARB="carbs",e.PROTEIN="proteins",e.FAT="fats"}(E||(E={})),function(e){e.gram="g",e.oz="oz",e.count=""}(I||(I={}));var V=[{name:"Zucchini boats",blocks:4,img:J,rating:4.2,prepTime:60},{name:"Meat and cheese",blocks:3,img:J,rating:4.6,prepTime:120},{name:"Egg Salad",blocks:5,img:J,rating:4.9,prepTime:30},{name:"Avocado",blocks:3,img:J,rating:5,prepTime:40}],Z=[{name:"Kiwi",mealType:c.CARB,imgSrc:Y,rating:3.6},{name:"Eggs",mealType:c.PROTEIN,imgSrc:Y,rating:4.2},{name:"Pancakes",mealType:c.FAT,imgSrc:Y,rating:5}],q=[{name:"Tomato",macronutrients:[{type:E.CARB,weight:300,unit:I.gram}],img:Y},{name:"Cucumber",macronutrients:[{type:E.CARB,weight:600,unit:I.gram}],img:Y},{name:"Fish",macronutrients:[{type:E.PROTEIN,weight:600,unit:I.count}],img:Y},{name:"Nuts",macronutrients:[{type:E.FAT,weight:600,unit:I.count}],img:Y},{name:"Banana",macronutrients:[{type:E.CARB,weight:600,unit:I.count}],img:Y},{name:"Nuts",macronutrients:[{type:E.FAT,weight:600,unit:I.count}],img:Y}],G=H,K=a(68),U=a.n(K),W=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(j.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){var e="";return this.props.filled?e+="bg-primary text-white ":this.props.bordered&&(e+="bg-white border border-primary text-primary "),"sm"==this.props.size?e+=" py-1 ":"lg"==this.props.size?e+=" py-10 ":e+=" py-5 ",Object(h.jsx)("button",{className:e+" text-lg justify-self-stretch rounded-full "+this.props.classStyles,children:this.props.label})}}]),a}(n.Component),_=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(j.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"rounded-3xl mt-20 p-10 top-70 min-h-100 w-70 ".concat(this.props.isEven?"bg-complementary":"bg-white"),children:[Object(h.jsx)("div",{className:"block mb-3",children:Object(h.jsx)("div",{className:"-mt-28",children:Object(h.jsx)("img",{src:this.props.img,className:"w-40 justify-self-center"})})}),Object(h.jsxs)("div",{className:"block flex",children:[Object(h.jsxs)("div",{className:"flex-grow",children:[Object(h.jsx)(P.a,{className:"text-primary"})," ",Object(h.jsx)("span",{className:"text-sm",children:this.props.rating}),Object(h.jsx)("h3",{children:this.props.name}),Object(h.jsxs)("h4",{className:"text-gray-500",children:[Object(h.jsx)("strong",{children:this.props.blocks})," blocks"]})]}),Object(h.jsxs)("div",{className:"ml-5 rounded-full bg-primary h-14 w-14 flex flex-col items-center justify-center",children:[Object(h.jsx)("span",{className:"text-white text-sm",children:this.props.prepTime}),Object(h.jsx)("span",{className:"text-white text-xs",children:"min"})]})]}),Object(h.jsx)("div",{className:"flex justify-self-right",children:Object(h.jsx)(W,{filled:!0,classStyles:"flex-1 mt-10 px-5",label:"View Recipe",icon:Object(h.jsx)(U.a,{})})})]})}}]),a}(n.Component),Q=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(j.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){var e,t=[],a=Object(l.a)(this.props.meals.entries());try{for(a.s();!(e=a.n()).done;){var c=Object(i.a)(e.value,2),n=c[0],s=c[1];t.push(Object(h.jsx)("li",{children:Object(h.jsx)(_,{prepTime:s.prepTime,rating:s.rating,name:s.name,blocks:s.blocks,img:s.img,isEven:n%2==0})},n))}}catch(r){a.e(r)}finally{a.f()}return Object(h.jsxs)("section",{children:[Object(h.jsxs)("h2",{className:"text-dark text-xl",children:[Object(h.jsx)("strong",{children:"Suggested"})," for you"]}),Object(h.jsx)("div",{className:"mt-5",children:Object(h.jsx)("ul",{className:"flex flex-row space-x-10",children:t})})]})}}]),a}(n.Component),X=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("section",{className:"space-y-5",children:[Object(h.jsxs)("div",{className:"flex justify-between",children:[Object(h.jsx)(S,{className:"max-w-lg"}),Object(h.jsx)(A,{})]}),Object(h.jsx)(N,{text:"Good news, you've stayed in The Zone for 2 months! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus, nulla vitae lacinia suscipit, ante neque sollicitudin erat.",imgSrc:G}),Object(h.jsx)(Q,{meals:V}),Object(h.jsx)(B,{favorites:Z})]})}}]),a}(n.Component),$=a.p+"static/media/meal.ba4105cd.jpg",ee=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e,t=[],a=Object(l.a)(this.props.mealProps.macronutrients.entries());try{for(a.s();!(e=a.n()).done;){var c=Object(i.a)(e.value,2),n=c[0],s=c[1];t.push(Object(h.jsxs)("p",{className:"text-gray",children:[s.type,": ",s.weight,s.unit," per block"]},n))}}catch(r){a.e(r)}finally{a.f()}return Object(h.jsxs)("div",{className:"w-96",children:[Object(h.jsx)("img",{src:$}),Object(h.jsxs)("div",{className:"px-5 py-10 rounded-b-3xl bg-white align-middle",children:[Object(h.jsxs)("div",{className:"flex-1",children:[Object(h.jsx)("h1",{className:"text-xl",children:Object(h.jsx)("strong",{children:this.props.mealProps.name})}),t]}),Object(h.jsxs)("div",{className:"space-x-5 pt-5 container justify-center",children:[Object(h.jsx)(W,{size:"sm",filled:!0,label:"View",classStyles:"w-40 px-5"}),Object(h.jsx)(W,{size:"sm",bordered:!0,label:"Add to Meals",classStyles:"w-40 px-5"})]})]})]})}}]),a}(n.Component),te=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e,t=[],a=Object(l.a)(q.entries());try{for(a.s();!(e=a.n()).done;){var c=Object(i.a)(e.value,2),n=c[0],s=c[1];t.push(Object(h.jsx)("li",{children:Object(h.jsx)(ee,{mealProps:s})},n))}}catch(r){a.e(r)}finally{a.f()}return Object(h.jsxs)("section",{className:"space-y-5",children:[Object(h.jsxs)("div",{className:"flex justify-between",children:[Object(h.jsx)(S,{className:"max-w-lg"}),Object(h.jsx)(A,{})]}),Object(h.jsx)("div",{children:Object(h.jsx)("ul",{className:"grid gap-4 grid-cols-4",children:t})})]})}}]),a}(n.Component),ae=["January","February","March","April","May","June","July","August","September","October","November","December"],ce=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ne=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e,t=[],a=Object(l.a)(this.props.nutritionItems.entries());try{for(a.s();!(e=a.n()).done;){var c=Object(i.a)(e.value,2),n=c[0],s=c[1];t.push(Object(h.jsx)("li",{children:Object(h.jsx)(ee,{mealProps:s})},n))}}catch(r){a.e(r)}finally{a.f()}return Object(h.jsxs)("section",{className:"space-y-5",children:[Object(h.jsx)("h3",{className:"text-xl",children:this.props.day}),Object(h.jsx)("ul",{className:"flex space-x-10",children:t})]})}}]),a}(n.Component),se=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(j.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"getTenDaysAgo",value:function(){for(var e=1,t=[];e<10;){var a=new Date;a.setDate(a.getDate()-e);var c="".concat(ce[a.getDay()],", ").concat(a.getDate()," ").concat(ae[a.getMonth()]," ").concat(a.getFullYear());t.push(Object(h.jsx)("li",{children:Object(h.jsx)(ne,{day:c,nutritionItems:q})},e)),e++}return t}},{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)("ul",{className:"space-y-10",children:this.getTenDaysAgo()})})}}]),a}(n.Component),re=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)("section",{})})}}]),a}(n.Component),ie=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"flex",children:Object(h.jsx)("h1",{className:"text-3xl align-center",children:"404 - Page Not Found"})})}}]),a}(n.Component),le=a(12),je=a(69),oe=a.n(je),be=a(70),ue=a.n(be),me=a(71),he=a.n(me),de=a(72),pe=a.n(de),xe=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e,t=[{url:"/",altLabel:"Home",component:X,icon:Object(h.jsx)(oe.a,{})},{url:"/meals",altLabel:"Meals",component:te,icon:Object(h.jsx)(ue.a,{})},{url:"/history",altLabel:"History",component:se,icon:Object(h.jsx)(he.a,{})},{url:"/settings",altLabel:"Settings",component:re,icon:Object(h.jsx)(pe.a,{})}],a=[],c=Object(l.a)(t.entries());try{for(c.s();!(e=c.n()).done;){var n=Object(i.a)(e.value,2),s=n[0],r=n[1];a.push(Object(h.jsx)(le.a,{exact:!0,path:r.url,component:r.component},s))}}catch(j){c.e(j)}finally{c.f()}return Object(h.jsxs)("main",{className:"max-h-screen min-h-screen p-10 flex space-x-10",children:[Object(h.jsx)(v,{links:t}),Object(h.jsx)("section",{className:"hide-scrollbar overflow-auto max-h-screen",children:Object(h.jsxs)(le.c,{children:[a,Object(h.jsx)(le.a,{component:ie})]})})]})}}]),a}(n.Component),Oe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,129)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(h.jsx)(m.a,{basename:"/zone-app",children:Object(h.jsx)(xe,{})}),document.getElementById("root")),Oe()}},[[92,1,2]]]);
//# sourceMappingURL=main.ef645bf3.chunk.js.map