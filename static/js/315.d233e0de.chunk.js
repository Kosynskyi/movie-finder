"use strict";(self.webpackChunkmovie_finder=self.webpackChunkmovie_finder||[]).push([[315],{315:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,a,c,u,i,o=t(885),s=t(2791),f=t(470),p=t(5890),l=t(9457),d=t(168),h=t(6444),m=h.ZP.ul(r||(r=(0,d.Z)(["\n  display: grid;\n  justify-items: center;\n  justify-content: center;\n  flex-shrink: 1;\n  grid-template-columns: repeat(auto-fit, minmax(80px, auto));\n  gap: 10px;\n  list-style: none;\n  padding: ","px;\n"])),(function(n){return n.theme.space[1]})),v=h.ZP.p(a||(a=(0,d.Z)(["\n  margin: ","px;\n  margin-bottom: ","px;\n  font-size: ",";\n"])),(function(n){return n.theme.space[1]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.fontSizes.s})),x=h.ZP.a(c||(c=(0,d.Z)(["\n  text-decoration: none;\n  color: goldenrod;\n\n  &:hover {\n    color: ",";\n  }\n\n  &:visited {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.red})),g=h.ZP.p(u||(u=(0,d.Z)(["\n  margin: ","px;\n  font-size: ",";\n"])),(function(n){return n.theme.space[1]}),(function(n){return n.theme.fontSizes.xs})),Z=h.ZP.span(i||(i=(0,d.Z)(["\n  color: ",";\n  font-size: ",";\n"])),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.fontSizes.s})),k=t(184),y=function(){var n=(0,s.useState)(null),e=(0,o.Z)(n,2),t=e[0],r=e[1],a=(0,f.UO)().movieId;if((0,s.useEffect)((function(){(0,p.$3)(a).then(r)}),[a]),t)return(0,k.jsx)(l.x,{children:(0,k.jsx)(m,{children:t.cast.map((function(n){var e=n.cast_id,t=n.profile_path,r=n.name,a=n.character;return(0,k.jsxs)("li",{children:[(0,k.jsxs)(x,{href:"https://en.wikipedia.org/wiki/".concat(r),target:"_blank",rel:"noopener noreferrer",children:[(0,k.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(t),alt:r,width:"80"}),(0,k.jsx)(v,{children:r})]}),(0,k.jsxs)(g,{children:[(0,k.jsx)(Z,{children:"Character:"})," ",a]})]},e)}))})})}},5890:function(n,e,t){t.d(e,{$3:function(){return p},Df:function(){return o},FL:function(){return f},ME:function(){return s},MS:function(){return d},f6:function(){return l}});var r=t(5861),a=t(7757),c=t.n(a),u=t(2388);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="8cfcb474139669e5b2bb861e26380b30",o=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.Z)("/trending/movie/day?api_key=".concat(i));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.Z)("search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.Z)("movie/".concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.Z)("movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.Z)("movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.Z)("/movie/".concat(e,"/videos?api_key=").concat(i));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=315.d233e0de.chunk.js.map