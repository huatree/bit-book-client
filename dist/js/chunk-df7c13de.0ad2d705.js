(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-df7c13de"],{1440:function(t,e,i){},4570:function(t,e,i){"use strict";i("1440")},4766:function(t,e,i){},"4e1b":function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"scrollWrapper",staticClass:"scroll-wrapper",class:{"no-scroll":t.ifNoScroll},on:{"&scroll":function(e){return t.handleScroll.apply(null,arguments)}}},[t._t("default")],2)},l=[],s=(i("a9e3"),i("fa7d")),n={props:{top:{type:Number,default:0},bottom:{type:Number,default:0},ifNoScroll:{type:Boolean,default:!1},initPosition:{type:Object,default:function(){return{x:0,y:0}}}},methods:{handleScroll:function(t){var e=t.target.scrollTop||window.pageYOffset||document.body.scrollTop;this.$emit("onScroll",e)},scrollTo:function(t,e){this.$refs.scrollWrapper.scrollTo(t,e)},refresh:function(){this.$refs.scrollWrapper&&(this.$refs.scrollWrapper.style.height=window.innerHeight-Object(s["d"])(this.top)-Object(s["d"])(this.bottom)+"px",this.$refs.scrollWrapper.addEventListener("scroll",this.handleScroll))}},mounted:function(){var t=this;this.refresh(),this.$nextTick((function(){setTimeout((function(){t.scrollTo(Object(s["d"])(t.initPosition.x),Object(s["d"])(t.initPosition.y))}),1)}))}},r=n,c=(i("4570"),i("2877")),a=Object(c["a"])(r,o,l,!1,null,"0b4ae033",null);e["a"]=a.exports},"69aa":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"book-list-wrapper"},[i("detail-title",{ref:"title",attrs:{title:t.title,showShelf:!0},on:{back:t.back}}),i("scroll",{ref:"scroll",staticClass:"book-list-scroll-wrapper",attrs:{top:42},on:{onScroll:t.onScroll}},t._l(t.list,(function(e,o,l){return i("featured",{key:l,attrs:{data:e,titleText:t.titleText?t.titleText:t.getCategoryText(o),btnText:""}})})),1)],1)},l=[],s=(i("ac1f"),i("5319"),i("159b"),i("b64b"),i("99af"),i("4de4"),i("c7f8")),n=i("4e1b"),r=i("cbe5"),c=i("fa7d"),a=i("365c"),u=i("5de6"),f={components:{DetailTitle:s["a"],Scroll:n["a"],Featured:r["a"]},computed:{title:function(){return this.list?this.total&&this.$t("home.allBook").replace("$1",this.totalNumber):null},totalNumber:function(){var t=this,e=0;return Object.keys(this.list).forEach((function(i){e+=t.list[i].length})),e}},data:function(){return{list:null,total:null}},methods:{getCategoryText:function(t){return"".concat(Object(u["e"])(u["d"][t],this),"(").concat(this.list[t].length,")")},back:function(){this.$router.go(-1)},onScroll:function(t){t>Object(c["d"])(42)?this.$refs.title.showShadow():this.$refs.title.hideShadow()},getList:function(){var t=this;Object(a["e"])().then((function(e){t.list=e.data.data,t.total=e.data.total;var i=t.$route.query.category,o=t.$route.query.keyword;if(i){var l=Object.keys(t.list).filter((function(t){return t===i}))[0],s=t.list[l];t.list={},t.list[l]=s}else o&&Object.keys(t.list).filter((function(e){return t.list[e]=t.list[e].filter((function(t){return t.fileName.indexOf(o)>=0})),t.list[e].length>0}))}))}},created:function(){this.getList(),this.titleText=this.$route.query.categoryText}},h=f,d=(i("b76b"),i("2877")),p=Object(d["a"])(h,o,l,!1,null,"21b6f3ff",null);e["default"]=p.exports},7730:function(t,e,i){},aec6:function(t,e,i){"use strict";i("7730")},b76b:function(t,e,i){"use strict";i("4766")},c7f8:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"detail-title-wrapper",class:{"hide-shadow":t.ifHideShadow}},[i("div",{staticClass:"title-left-wrapper",on:{click:t.back}},[i("span",{staticClass:"icon-back"})]),i("div",{staticClass:"title-right-wrapper"},[t.showShelf?i("span",{staticClass:"icon-shelf icon",on:{click:t.showBookShelf}}):i("span",{staticClass:"icon-share"})]),t.title?i("div",{staticClass:"title-text"},[t._v(" "+t._s(t.title)+" ")]):t._e()])},l=[],s={props:{title:String,showShelf:{type:Boolean,default:!0}},data:function(){return{ifHideShadow:!0}},methods:{showBookShelf:function(){this.$router.push("/book-store/shelf")},showShadow:function(){this.ifHideShadow=!1},hideShadow:function(){this.ifHideShadow=!0},back:function(){this.$emit("back")}}},n=s,r=(i("aec6"),i("2877")),c=Object(r["a"])(n,o,l,!1,null,"4801840a",null);e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-df7c13de.0ad2d705.js.map