"use strict";(self["webpackChunkjemmaliu"]=self["webpackChunkjemmaliu"]||[]).push([[278],{2676:function(l,a,e){e.r(a),e.d(a,{default:function(){return $}});var s=e(6252),t=e.p+"assets/img/index-home-img-box.cf055c0c.jpg",o=e.p+"assets/img/ui-page.469781d3.png";const i=(0,s._)("div",{class:"header d-flex justify-content-center align-items-center text-center"},[(0,s._)("div",null,[(0,s._)("h1",null,"Hi,I'm Jemma"),(0,s._)("p",null,"感謝您抽空進來參觀。")])],-1),c={class:"content home-container"},n={class:"container"},r={class:"row"},d={class:"col-12 scroll-item box1",id:"works"},m=(0,s._)("div",{class:"title"},[(0,s._)("h2",null,"WORKS")],-1),v={class:"row home-col12-col6"},h={class:"col-6"},u={class:"home-col12-col6-img"},g={class:"enlarge-box"},p=(0,s._)("img",{src:t,alt:""},null,-1),_={class:"col-6 home-col6-l home-col6-flex"},b=(0,s._)("div",null,[(0,s._)("small",null,"2022"),(0,s._)("h2",null,"THE NO9"),(0,s._)("p",{class:"home-p-color home-p-m home-p-w-a"},"使用 Vue 框架、Bootstrap 完成的購物網站。")],-1),f={class:"move"},w=(0,s._)("small",null,[(0,s.Uk)("Read more "),(0,s._)("i",{class:"fas fa-angle-right mt-2 ms-2"})],-1),k=(0,s.uE)('<div class="row home-col12-col6"><div class="col-6"><div class="home-col12-col6-img"><div class="enlarge-box"><a href="https://www.behance.net/vincentvan5b56" target="_blank"><img src="'+o+'" alt=""></a></div></div></div><div class="col-6 home-col6-l home-col6-flex"><div><small>2021</small><h2>UI Design</h2><p class="home-p-color home-p-m home-p-w-a">UI 及 DM、Banner 相關製作。</p></div><div class="move"><a href="https://www.behance.net/vincentvan5b56" target="_blank"><small>Read more <i class="fas fa-angle-right mt-2 ms-2"></i></small></a></div></div></div>',1),x=(0,s.uE)('<hr><div class="col-12 scroll-item box2" id="article"><h2>ARTICLES</h2><div class="row home-col12-col6"><div class="col-6"><div><div><i class="fab fa-js js-icon"></i></div><small>13th iThome Ironman 第 13 屆</small><br><small>IT 邦鐵人賽</small><h3 class="my-2">我的JavaScript日常</h3></div></div><div class="col-6 home-col6-flex col-6-mt"><div class="home-col6-border"><div><small>2021</small><p class="home-p-color home-p-m"> 2021 年 9 月，聽說有一場比賽，必須每天寫文章 30 天不中斷，於是我選擇了以 JavaScript 為主題的技術文章，希望能夠在尋找相關知識與整理資料的過程中，加強自己對 JavaScript 的觀念。 </p></div><div class="move"><a href="https://ithelp.ithome.com.tw/users/20138542/ironman/3906" target="_blank"><small>Read more <i class="fas fa-angle-right mt-2 ms-2"></i></small></a></div></div></div></div></div>',2);function I(l,a,e,t,o,I){const S=(0,s.up)("Navbar"),y=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(S),i,(0,s._)("div",c,[(0,s._)("div",n,[(0,s._)("div",r,[(0,s._)("div",d,[m,(0,s._)("div",v,[(0,s._)("div",h,[(0,s._)("div",u,[(0,s._)("div",g,[(0,s.Wm)(y,{to:"theno9"},{default:(0,s.w5)((()=>[p])),_:1})])])]),(0,s._)("div",_,[b,(0,s._)("div",f,[(0,s.Wm)(y,{to:"theno9"},{default:(0,s.w5)((()=>[w])),_:1})])])]),k]),x])])])],64)}var S=e(3577);const y={class:"sticky-top",style:{"z-index":"9"}},j={class:"navbar navbar-expand-lg px-5 py-3"},T={class:"container-fluid"},C=(0,s._)("a",{class:"navbar-brand",href:"#"},"Jemma",-1),E=(0,s._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,s._)("span",{class:"navbar-toggler-icon"})],-1),R={class:"collapse navbar-collapse justify-content-end",id:"navbarNav"},D=["value","onClick"],N={class:"navbar-nav"},J={class:"nav-item"},L={class:"navbar-nav"},W={class:"nav-item"};function A(l,a,e,t,o,i){return(0,s.wg)(),(0,s.iD)("div",y,[(0,s._)("nav",j,[(0,s._)("div",T,[C,E,(0,s._)("div",R,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.title_list,((l,a)=>((0,s.wg)(),(0,s.iD)("div",{key:l.id,value:l.title,onClick:l=>i.jump(a),class:"list1"},[(0,s._)("ul",N,[(0,s._)("li",J,[(0,s._)("a",null,(0,S.zw)(l.title),1)])])],8,D)))),128)),(0,s._)("div",null,[(0,s._)("ul",L,[(0,s._)("li",W,[(0,s._)("a",{onClick:a[0]||(a[0]=l=>i.toguid("/about","about"))}," ABOUT ")])])])])])])])}var B={data(){return{title_list:[{title:"WORKS",active:!0},{title:"ARTICLES",active:!1}]}},methods:{toguid(l,a){var e=a;localStorage.setItem("toId",e),this.$router.push(l)},jump(l){for(var a=document.querySelectorAll(".scroll-item"),e=0;e<a.length;e++)l===e&&a[e].scrollIntoView({block:"start",behavior:"smooth"})}},mounted(){}},H=e(3744);const O=(0,H.Z)(B,[["render",A]]);var U=O,K={components:{Navbar:U},created(){this.$nextTick((()=>{this.toLocal()}))},mounted(){let l=this;l.$nextTick((function(){window.addEventListener("scroll",l.handleScroll)}))},methods:{toLocal(){let l=localStorage.getItem("toId"),a=document.getElementById(l);l&&a.scrollIntoView()}},destroyed(){localStorage.setItem("toId","")}};const V=(0,H.Z)(K,[["render",I]]);var $=V}}]);
//# sourceMappingURL=278.72134476.js.map