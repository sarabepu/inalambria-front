(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d2dfc1c8"],{"1dde":function(t,e,n){var r=n("d039"),i=n("b622"),o=n("2d00"),a=i("species");t.exports=function(t){return o>=51||!r((function(){var e=[],n=e.constructor={};return n[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"65f0":function(t,e,n){var r=n("861d"),i=n("e8b5"),o=n("b622"),a=o("species");t.exports=function(t,e){var n;return i(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?r(n)&&(n=n[a],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},ae40:function(t,e,n){var r=n("83ab"),i=n("d039"),o=n("5135"),a=Object.defineProperty,s={},c=function(t){throw t};t.exports=function(t,e){if(o(s,t))return s[t];e||(e={});var n=[][t],l=!!o(e,"ACCESSORS")&&e.ACCESSORS,d=o(e,0)?e[0]:c,u=o(e,1)?e[1]:void 0;return s[t]=!!n&&!i((function(){if(l&&!r)return!0;var t={length:-1};l?a(t,1,{enumerable:!0,get:c}):t[1]=1,n.call(t,d,u)}))}},b727:function(t,e,n){var r=n("0366"),i=n("44ad"),o=n("7b0b"),a=n("50c4"),s=n("65f0"),c=[].push,l=function(t){var e=1==t,n=2==t,l=3==t,d=4==t,u=6==t,f=5==t||u;return function(p,h,m,y){for(var b,v,k=o(p),g=i(k),S=r(h,m,3),A=a(g.length),w=0,C=y||s,L=e?C(p,A):n?C(p,0):void 0;A>w;w++)if((f||w in g)&&(b=g[w],v=S(b,w,k),t))if(e)L[w]=v;else if(v)switch(t){case 3:return!0;case 5:return b;case 6:return w;case 2:c.call(L,b)}else if(d)return!1;return u?-1:l||d?d:L}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},cc0f:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h3",[t._v("Tracks List")]),n("br"),n("b-form-input",{attrs:{placeholder:"Search by artist, track name"}}),n("b-table",{attrs:{borderless:"",hover:"","head-variant":"",items:t.items,fields:t.fields},scopedSlots:t._u([{key:"cell(Action)",fn:function(e){return[n("b-icon",{attrs:{icon:"play"},on:{click:function(n){return t.playClick(e.item)}}})]}},{key:"cell(Add)",fn:function(e){return[n("AddPlaylist",{attrs:{trackId:e.item._id,playlist:t.parsedLists}})]}}])}),t.isLoading?n("div",{staticClass:"spinner-border",staticStyle:{width:"3rem",height:"3rem"},attrs:{role:"status"}},[n("span",{staticClass:"sr-only"},[t._v("Loading...")])]):t._e(),n("br"),n("br")],1)},i=[],o=(n("d81d"),n("b0c0"),n("d3b7"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-icon",{attrs:{icon:"plus",id:"show-btn"},on:{click:t.showModal}}),n("b-modal",{ref:"my-modal",attrs:{"hide-footer":"",title:"Using Component Methods"}},[n("div",{staticClass:"d-block text-center"},[n("h3",[t._v("Select the playlist to add the track")]),n("b-form-select",{attrs:{options:t.playlist},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),n("b-button",{staticClass:"mt-3",attrs:{variant:"outline-danger",block:""},on:{click:t.hideModal}},[t._v("Add")])],1)],1)}),a=[],s={props:{playlist:Array,trackId:String},data:function(){return{selected:null}},methods:{showModal:function(){this.$refs["my-modal"].show()},hideModal:function(){var t=this;this.selected&&fetch("https://inalambria.herokuapp.com/addToList",{method:"POST",credentials:"include",mode:"cors",body:JSON.stringify({playlist:this.selected,trackId:this.trackId}),headers:{"Content-Type":"application/json"}}).then((function(){return t.$refs["my-modal"].hide()}))}}},c=s,l=n("2877"),d=Object(l["a"])(c,o,a,!1,null,null,null),u=d.exports,f={methods:{playClick:function(t){this.$emit("eventname",t)}},data:function(){return{fields:["Action","name","artist","username","Add"],actual:"",items:[],isLoading:!0,playList:[]}},computed:{parsedLists:function(){return this.playList.map((function(t){var e={};return e.value=t._id,e.text=t.name,e}))}},mounted:function(){var t=this;fetch("https://inalambria.herokuapp.com/getData",{method:"POST",credentials:"include",mode:"cors",body:JSON.stringify({collection:"tracks",query:{}}),headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(e){t.items=e,fetch("https://inalambria.herokuapp.com/getData",{method:"POST",credentials:"include",mode:"cors",body:JSON.stringify({collection:"playList",query:{owner:localStorage.getItem("isAuth")}}),headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(e){console.log(e),t.playList=e,t.isLoading=!1}))}))},components:{AddPlaylist:u}},p=f,h=Object(l["a"])(p,r,i,!1,null,null,null);e["default"]=h.exports},d81d:function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").map,o=n("1dde"),a=n("ae40"),s=o("map"),c=a("map");r({target:"Array",proto:!0,forced:!s||!c},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}}}]);
//# sourceMappingURL=chunk-d2dfc1c8.70a823d0.js.map