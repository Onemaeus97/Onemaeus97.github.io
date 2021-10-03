(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[5],{153:function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",i="hour",r="day",s="week",a="month",u="quarter",c="year",o="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},l=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},$={s:l,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+l(i,2,"0")+":"+l(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(i,a),s=n-r<0,u=e.clone().add(i+(s?-1:1),a);return+(-(i+(n-r)/(s?r-u:u-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:a,y:c,w:s,d:r,D:o,h:i,m:n,s:e,ms:t,Q:u}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},m="en",p={};p[m]=f;var M=function(t){return t instanceof y},j=function(t,e,n){var i;if(!t)return m;if("string"==typeof t)p[t]&&(i=t),e&&(p[t]=e,i=t);else{var r=t.name;p[r]=t,i=r}return!n&&i&&(m=i),i||!n&&m},g=function(t,e){if(M(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new y(n)},v=$;v.l=j,v.i=M,v.w=function(t,e){return g(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var y=function(){function f(t){this.$L=j(t.locale,null,!0),this.parse(t)}var l=f.prototype;return l.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(v.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(h);if(i){var r=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},l.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},l.$utils=function(){return v},l.isValid=function(){return!("Invalid Date"===this.$d.toString())},l.isSame=function(t,e){var n=g(t);return this.startOf(e)<=n&&n<=this.endOf(e)},l.isAfter=function(t,e){return g(t)<this.startOf(e)},l.isBefore=function(t,e){return this.endOf(e)<g(t)},l.$g=function(t,e,n){return v.u(t)?this[e]:this.set(n,t)},l.unix=function(){return Math.floor(this.valueOf()/1e3)},l.valueOf=function(){return this.$d.getTime()},l.startOf=function(t,u){var h=this,d=!!v.u(u)||u,f=v.p(t),l=function(t,e){var n=v.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return d?n:n.endOf(r)},$=function(t,e){return v.w(h.toDate()[t].apply(h.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},m=this.$W,p=this.$M,M=this.$D,j="set"+(this.$u?"UTC":"");switch(f){case c:return d?l(1,0):l(31,11);case a:return d?l(1,p):l(0,p+1);case s:var g=this.$locale().weekStart||0,y=(m<g?m+7:m)-g;return l(d?M-y:M+(6-y),p);case r:case o:return $(j+"Hours",0);case i:return $(j+"Minutes",1);case n:return $(j+"Seconds",2);case e:return $(j+"Milliseconds",3);default:return this.clone()}},l.endOf=function(t){return this.startOf(t,!1)},l.$set=function(s,u){var h,d=v.p(s),f="set"+(this.$u?"UTC":""),l=(h={},h[r]=f+"Date",h[o]=f+"Date",h[a]=f+"Month",h[c]=f+"FullYear",h[i]=f+"Hours",h[n]=f+"Minutes",h[e]=f+"Seconds",h[t]=f+"Milliseconds",h)[d],$=d===r?this.$D+(u-this.$W):u;if(d===a||d===c){var m=this.clone().set(o,1);m.$d[l]($),m.init(),this.$d=m.set(o,Math.min(this.$D,m.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},l.set=function(t,e){return this.clone().$set(t,e)},l.get=function(t){return this[v.p(t)]()},l.add=function(t,u){var o,h=this;t=Number(t);var d=v.p(u),f=function(e){var n=g(h);return v.w(n.date(n.date()+Math.round(e*t)),h)};if(d===a)return this.set(a,this.$M+t);if(d===c)return this.set(c,this.$y+t);if(d===r)return f(1);if(d===s)return f(7);var l=(o={},o[n]=6e4,o[i]=36e5,o[e]=1e3,o)[d]||1,$=this.$d.getTime()+t*l;return v.w($,this)},l.subtract=function(t,e){return this.add(-1*t,e)},l.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=v.z(this),r=this.$locale(),s=this.$H,a=this.$m,u=this.$M,c=r.weekdays,o=r.months,h=function(t,i,r,s){return t&&(t[i]||t(e,n))||r[i].substr(0,s)},f=function(t){return v.s(s%12||12,t,"0")},l=r.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:v.s(u+1,2,"0"),MMM:h(r.monthsShort,u,o,3),MMMM:h(o,u),D:this.$D,DD:v.s(this.$D,2,"0"),d:String(this.$W),dd:h(r.weekdaysMin,this.$W,c,2),ddd:h(r.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(s),HH:v.s(s,2,"0"),h:f(1),hh:f(2),a:l(s,a,!0),A:l(s,a,!1),m:String(a),mm:v.s(a,2,"0"),s:String(this.$s),ss:v.s(this.$s,2,"0"),SSS:v.s(this.$ms,3,"0"),Z:i};return n.replace(d,(function(t,e){return e||$[t]||i.replace(":","")}))},l.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},l.diff=function(t,o,h){var d,f=v.p(o),l=g(t),$=6e4*(l.utcOffset()-this.utcOffset()),m=this-l,p=v.m(this,l);return p=(d={},d[c]=p/12,d[a]=p,d[u]=p/3,d[s]=(m-$)/6048e5,d[r]=(m-$)/864e5,d[i]=m/36e5,d[n]=m/6e4,d[e]=m/1e3,d)[f]||m,h?p:v.a(p)},l.daysInMonth=function(){return this.endOf(a).$D},l.$locale=function(){return p[this.$L]},l.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=j(t,e,!0);return i&&(n.$L=i),n},l.clone=function(){return v.w(this.$d,this)},l.toDate=function(){return new Date(this.valueOf())},l.toJSON=function(){return this.isValid()?this.toISOString():null},l.toISOString=function(){return this.$d.toISOString()},l.toString=function(){return this.$d.toUTCString()},f}(),O=y.prototype;return g.prototype=O,[["$ms",t],["$s",e],["$m",n],["$H",i],["$W",r],["$M",a],["$y",c],["$D",o]].forEach((function(t){O[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),g.extend=function(t,e){return t.$i||(t(e,y,g),t.$i=!0),g},g.locale=j,g.isDayjs=M,g.unix=function(t){return g(1e3*t)},g.en=p[m],g.Ls=p,g.p={},g}()},166:function(t,e,n){"use strict";n.r(e);var i=n(0),r=(n(1),n(5)),s=n(20),a=n(153),u=n.n(a),c=function(t){var e=t.data;return Object(i.jsx)("div",{className:"cell-container",children:Object(i.jsxs)("article",{className:"mini-post",children:[Object(i.jsxs)("header",{children:[Object(i.jsx)("h3",{children:Object(i.jsx)("a",{href:e.link,children:e.title})}),Object(i.jsx)("time",{className:"published",children:u()(e.date).format("MMMM, YYYY")})]}),Object(i.jsx)("a",{href:e.link,className:"image",children:Object(i.jsx)("img",{src:"".concat("").concat(e.image),alt:e.title})}),Object(i.jsx)("div",{className:"description",children:Object(i.jsx)("p",{children:e.desc})})]})})},o=[{title:"AI implementation on Video Laryngoscope",subtitle:"",image:"/images/projects/vitaltechnics.png",date:"2021-09",desc:"From conception to implementation. A system that helps tracheal intubation, "}];e.default=function(){return Object(i.jsx)(s.a,{title:"Projects",description:"Learn about Michael D'Angelo's projects.",children:Object(i.jsxs)("article",{className:"post",id:"projects",children:[Object(i.jsx)("header",{children:Object(i.jsxs)("div",{className:"title",children:[Object(i.jsx)("h2",{"data-testid":"heading",children:Object(i.jsx)(r.b,{to:"/projects",children:"Projects"})}),Object(i.jsx)("p",{children:"A selection of projects that I'm not too ashamed of"})]})}),o.map((function(t){return Object(i.jsx)(c,{data:t},t.title)}))]})})}}}]);
//# sourceMappingURL=5.217f3263.chunk.js.map