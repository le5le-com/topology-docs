(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["introduce"],{"739c":function(e,t,n){"use strict";n("cb4c")},cb4c:function(e,t,n){},fefd:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),r=Object(c["withScopeId"])("data-v-1452e9a2");Object(c["pushScopeId"])("data-v-1452e9a2");var o={class:"introduce"};Object(c["popScopeId"])();var d=r((function(e,t,n,r,d,a){var i=Object(c["resolveComponent"])("markdown-render");return Object(c["openBlock"])(),Object(c["createBlock"])("div",o,[Object(c["createVNode"])(i,{ref:"mdRender",mdCode:e.introduce,titleList:e.titleList},null,8,["mdCode","titleList"])])})),a=(n("96cf"),n("1da1")),i=n("2321"),u=Object(c["defineComponent"])({name:"Introduce",components:{MarkdownRender:i["a"]},data:function(){return{introduce:"",titleList:[]}},mounted:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.titleList=[1,2],t.next=3,e.axios.get("/markdown/topology.md");case 3:e.introduce=t.sent,e.$nextTick((function(){e.$refs.mdRender.handleRender()}));case 5:case"end":return t.stop()}}),t)})))()}});n("739c");u.render=d,u.__scopeId="data-v-1452e9a2";t["default"]=u}}]);
//# sourceMappingURL=introduce.922c37be.js.map