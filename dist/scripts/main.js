"use strict";function Swipe(t,i){function e(){f=b.children,w=f.length,f.length<2&&(i.continuous=!1),m.transitions&&i.continuous&&f.length<3&&(b.appendChild(f[0].cloneNode(!0)),b.appendChild(b.children[1].cloneNode(!0)),f=b.children),v=new Array(f.length),y=t.getBoundingClientRect().width||t.offsetWidth,b.style.width=f.length*y+"px";for(var e=f.length;e--;){var n=f[e];n.style.width=y+"px",n.setAttribute("data-index",e),m.transitions&&(n.style.left=e*-y+"px",r(e,g>e?-y:g<e?y:0,0))}i.continuous&&m.transitions&&(r(o(g-1),-y,0),r(o(g+1),y,0)),m.transitions||(b.style.left=g*-y+"px"),t.style.visibility="visible"}function n(){i.continuous?a(g-1):g&&a(g-1)}function s(){i.continuous?a(g+1):g<f.length-1&&a(g+1)}function o(t){return(f.length+t%f.length)%f.length}function a(t,e){if(g!=t){if(m.transitions){var n=Math.abs(g-t)/(g-t);if(i.continuous){var s=n;n=-v[o(t)]/y,n!==s&&(t=-n*f.length+t)}for(var a=Math.abs(g-t)-1;a--;)r(o((t>g?t:g)-a-1),y*n,0);t=o(t),r(g,y*n,e||x),r(t,0,e||x),i.continuous&&r(o(t-n),-(y*n),0)}else t=o(t),l(g*-y,t*-y,e||x);g=t,p(i.callback&&i.callback(g,f[g]))}}function r(t,i,e){h(t,i,e),v[t]=i}function h(t,i,e){var n=f[t],s=n&&n.style;s&&(s.webkitTransitionDuration=s.MozTransitionDuration=s.msTransitionDuration=s.OTransitionDuration=s.transitionDuration=e+"ms",s.webkitTransform="translate("+i+"px,0)translateZ(0)",s.msTransform=s.MozTransform=s.OTransform="translateX("+i+"px)")}function l(t,e,n){if(!n)return void(b.style.left=e+"px");var s=+new Date,o=setInterval(function(){var a=+new Date-s;return a>n?(b.style.left=e+"px",C&&c(),i.transitionEnd&&i.transitionEnd.call(event,g,f[g]),void clearInterval(o)):void(b.style.left=(e-t)*(Math.floor(a/n*100)/100)+t+"px")},4)}function c(){E=setTimeout(s,C)}function u(){C=0,clearTimeout(E)}var d=function(){},p=function(t){setTimeout(t||d,0)},m={addEventListener:!!window.addEventListener,touch:"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,transitions:function(t){var i=["transitionProperty","WebkitTransition","MozTransition","OTransition","msTransition"];for(var e in i)if(void 0!==t.style[i[e]])return!0;return!1}(document.createElement("swipe"))};if(t){var f,v,y,w,b=t.children[0];i=i||{};var g=parseInt(i.startSlide,10)||0,x=i.speed||300;i.continuous=void 0===i.continuous||i.continuous;var E,$,C=i.auto||0,T={},D={},X={handleEvent:function(t){switch(t.type){case"touchstart":this.start(t);break;case"touchmove":this.move(t);break;case"touchend":p(this.end(t));break;case"webkitTransitionEnd":case"msTransitionEnd":case"oTransitionEnd":case"otransitionend":case"transitionend":p(this.transitionEnd(t));break;case"resize":p(e)}i.stopPropagation&&t.stopPropagation()},start:function(t){var i=t.touches[0];T={x:i.pageX,y:i.pageY,time:+new Date},$=void 0,D={},b.addEventListener("touchmove",this,!1),b.addEventListener("touchend",this,!1)},move:function(t){if(!(t.touches.length>1||t.scale&&1!==t.scale)){i.disableScroll&&t.preventDefault();var e=t.touches[0];D={x:e.pageX-T.x,y:e.pageY-T.y},"undefined"==typeof $&&($=!!($||Math.abs(D.x)<Math.abs(D.y))),$||(t.preventDefault(),u(),i.continuous?(h(o(g-1),D.x+v[o(g-1)],0),h(g,D.x+v[g],0),h(o(g+1),D.x+v[o(g+1)],0)):(D.x=D.x/(!g&&D.x>0||g==f.length-1&&D.x<0?Math.abs(D.x)/y+1:1),h(g-1,D.x+v[g-1],0),h(g,D.x+v[g],0),h(g+1,D.x+v[g+1],0)))}},end:function(t){var e=+new Date-T.time,n=Number(e)<250&&Math.abs(D.x)>20||Math.abs(D.x)>y/2,s=!g&&D.x>0||g==f.length-1&&D.x<0;i.continuous&&(s=!1);var a=D.x<0;$||(n&&!s?(a?(i.continuous?(r(o(g-1),-y,0),r(o(g+2),y,0)):r(g-1,-y,0),r(g,v[g]-y,x),r(o(g+1),v[o(g+1)]-y,x),g=o(g+1)):(i.continuous?(r(o(g+1),y,0),r(o(g-2),-y,0)):r(g+1,y,0),r(g,v[g]+y,x),r(o(g-1),v[o(g-1)]+y,x),g=o(g-1)),i.callback&&i.callback(g,f[g])):i.continuous?(r(o(g-1),-y,x),r(g,0,x),r(o(g+1),y,x)):(r(g-1,-y,x),r(g,0,x),r(g+1,y,x))),b.removeEventListener("touchmove",X,!1),b.removeEventListener("touchend",X,!1)},transitionEnd:function(t){parseInt(t.target.getAttribute("data-index"),10)==g&&(C&&c(),i.transitionEnd&&i.transitionEnd.call(t,g,f[g]))}};return e(),C&&c(),m.addEventListener?(m.touch&&b.addEventListener("touchstart",X,!1),m.transitions&&(b.addEventListener("webkitTransitionEnd",X,!1),b.addEventListener("msTransitionEnd",X,!1),b.addEventListener("oTransitionEnd",X,!1),b.addEventListener("otransitionend",X,!1),b.addEventListener("transitionend",X,!1)),window.addEventListener("resize",X,!1)):window.onresize=function(){e()},{setup:function(){e()},slide:function(t,i){u(),a(t,i)},prev:function(){u(),n()},next:function(){u(),s()},stop:function(){u()},getPos:function(){return g},getNumSlides:function(){return w},kill:function(){u(),b.style.width="",b.style.left="";for(var t=f.length;t--;){var i=f[t];i.style.width="",i.style.left="",m.transitions&&h(t,0,0)}m.addEventListener?(b.removeEventListener("touchstart",X,!1),b.removeEventListener("webkitTransitionEnd",X,!1),b.removeEventListener("msTransitionEnd",X,!1),b.removeEventListener("oTransitionEnd",X,!1),b.removeEventListener("otransitionend",X,!1),b.removeEventListener("transitionend",X,!1),window.removeEventListener("resize",X,!1)):window.onresize=null}}}}!function(t,i,e){function n(t,i){this.element=t,this.layers=t.getElementsByClassName("layer");var e={calibrateX:this.data(this.element,"calibrate-x"),calibrateY:this.data(this.element,"calibrate-y"),invertX:this.data(this.element,"invert-x"),invertY:this.data(this.element,"invert-y"),limitX:this.data(this.element,"limit-x"),limitY:this.data(this.element,"limit-y"),scalarX:this.data(this.element,"scalar-x"),scalarY:this.data(this.element,"scalar-y"),frictionX:this.data(this.element,"friction-x"),frictionY:this.data(this.element,"friction-y"),originX:this.data(this.element,"origin-x"),originY:this.data(this.element,"origin-y")};for(var n in e)null===e[n]&&delete e[n];this.extend(this,a,i,e),this.calibrationTimer=null,this.calibrationFlag=!0,this.enabled=!1,this.depths=[],this.raf=null,this.bounds=null,this.ex=0,this.ey=0,this.ew=0,this.eh=0,this.ecx=0,this.ecy=0,this.erx=0,this.ery=0,this.cx=0,this.cy=0,this.ix=0,this.iy=0,this.mx=0,this.my=0,this.vx=0,this.vy=0,this.onMouseMove=this.onMouseMove.bind(this),this.onDeviceOrientation=this.onDeviceOrientation.bind(this),this.onOrientationTimer=this.onOrientationTimer.bind(this),this.onCalibrationTimer=this.onCalibrationTimer.bind(this),this.onAnimationFrame=this.onAnimationFrame.bind(this),this.onWindowResize=this.onWindowResize.bind(this),this.initialise()}var s="Parallax",o=30,a={relativeInput:!1,clipRelativeInput:!1,calibrationThreshold:100,calibrationDelay:500,supportDelay:500,calibrateX:!1,calibrateY:!0,invertX:!0,invertY:!0,limitX:!1,limitY:!1,scalarX:10,scalarY:10,frictionX:.1,frictionY:.1,originX:.5,originY:.5};n.prototype.extend=function(){if(arguments.length>1)for(var t=arguments[0],i=1,e=arguments.length;e>i;i++){var n=arguments[i];for(var s in n)t[s]=n[s]}},n.prototype.data=function(t,i){return this.deserialize(t.getAttribute("data-"+i))},n.prototype.deserialize=function(t){return"true"===t||"false"!==t&&("null"===t?null:!isNaN(parseFloat(t))&&isFinite(t)?parseFloat(t):t)},n.prototype.camelCase=function(t){return t.replace(/-+(.)?/g,function(t,i){return i?i.toUpperCase():""})},n.prototype.transformSupport=function(n){for(var s=i.createElement("div"),o=!1,a=null,r=!1,h=null,l=null,c=0,u=this.vendors.length;u>c;c++)if(null!==this.vendors[c]?(h=this.vendors[c][0]+"transform",l=this.vendors[c][1]+"Transform"):(h="transform",l="transform"),s.style[l]!==e){o=!0;break}switch(n){case"2D":r=o;break;case"3D":if(o){var d=i.body||i.createElement("body"),p=i.documentElement,m=p.style.overflow;i.body||(p.style.overflow="hidden",p.appendChild(d),d.style.overflow="hidden",d.style.background=""),d.appendChild(s),s.style[l]="translate3d(1px,1px,1px)",a=t.getComputedStyle(s).getPropertyValue(h),r=a!==e&&a.length>0&&"none"!==a,p.style.overflow=m,d.removeChild(s)}}return r},n.prototype.ww=null,n.prototype.wh=null,n.prototype.wcx=null,n.prototype.wcy=null,n.prototype.wrx=null,n.prototype.wry=null,n.prototype.portrait=null,n.prototype.desktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),n.prototype.vendors=[null,["-webkit-","webkit"],["-moz-","Moz"],["-o-","O"],["-ms-","ms"]],n.prototype.motionSupport=!!t.DeviceMotionEvent,n.prototype.orientationSupport=!!t.DeviceOrientationEvent,n.prototype.orientationStatus=0,n.prototype.propertyCache={},n.prototype.initialise=function(){n.prototype.transform2DSupport===e&&(n.prototype.transform2DSupport=n.prototype.transformSupport("2D"),n.prototype.transform3DSupport=n.prototype.transformSupport("3D")),this.transform3DSupport&&this.accelerate(this.element);var i=t.getComputedStyle(this.element);"static"===i.getPropertyValue("position")&&(this.element.style.position="relative"),this.updateLayers(),this.updateDimensions(),this.enable(),this.queueCalibration(this.calibrationDelay)},n.prototype.updateLayers=function(){this.layers=this.element.getElementsByClassName("layer"),this.depths=[];for(var t=0,i=this.layers.length;i>t;t++){var e=this.layers[t];this.transform3DSupport&&this.accelerate(e),e.style.position=t?"absolute":"relative",e.style.display="block",e.style.left=0,e.style.top=0,this.depths.push(this.data(e,"depth")||0)}},n.prototype.updateDimensions=function(){this.ww=t.innerWidth,this.wh=t.innerHeight,this.wcx=this.ww*this.originX,this.wcy=this.wh*this.originY,this.wrx=Math.max(this.wcx,this.ww-this.wcx),this.wry=Math.max(this.wcy,this.wh-this.wcy)},n.prototype.updateBounds=function(){this.bounds=this.element.getBoundingClientRect(),this.ex=this.bounds.left,this.ey=this.bounds.top,this.ew=this.bounds.width,this.eh=this.bounds.height,this.ecx=this.ew*this.originX,this.ecy=this.eh*this.originY,this.erx=Math.max(this.ecx,this.ew-this.ecx),this.ery=Math.max(this.ecy,this.eh-this.ecy)},n.prototype.queueCalibration=function(t){clearTimeout(this.calibrationTimer),this.calibrationTimer=setTimeout(this.onCalibrationTimer,t)},n.prototype.enable=function(){this.enabled||(this.enabled=!0,this.orientationSupport?(this.portrait=null,t.addEventListener("deviceorientation",this.onDeviceOrientation),setTimeout(this.onOrientationTimer,this.supportDelay)):(this.cx=0,this.cy=0,this.portrait=!1,t.addEventListener("mousemove",this.onMouseMove)),t.addEventListener("resize",this.onWindowResize),this.raf=requestAnimationFrame(this.onAnimationFrame))},n.prototype.disable=function(){this.enabled&&(this.enabled=!1,this.orientationSupport?t.removeEventListener("deviceorientation",this.onDeviceOrientation):t.removeEventListener("mousemove",this.onMouseMove),t.removeEventListener("resize",this.onWindowResize),cancelAnimationFrame(this.raf))},n.prototype.calibrate=function(t,i){this.calibrateX=t===e?this.calibrateX:t,this.calibrateY=i===e?this.calibrateY:i},n.prototype.invert=function(t,i){this.invertX=t===e?this.invertX:t,this.invertY=i===e?this.invertY:i},n.prototype.friction=function(t,i){this.frictionX=t===e?this.frictionX:t,this.frictionY=i===e?this.frictionY:i},n.prototype.scalar=function(t,i){this.scalarX=t===e?this.scalarX:t,this.scalarY=i===e?this.scalarY:i},n.prototype.limit=function(t,i){this.limitX=t===e?this.limitX:t,this.limitY=i===e?this.limitY:i},n.prototype.origin=function(t,i){this.originX=t===e?this.originX:t,this.originY=i===e?this.originY:i},n.prototype.clamp=function(t,i,e){return t=Math.max(t,i),t=Math.min(t,e)},n.prototype.css=function(t,i,n){var s=this.propertyCache[i];if(!s)for(var o=0,a=this.vendors.length;a>o;o++)if(s=null!==this.vendors[o]?this.camelCase(this.vendors[o][1]+"-"+i):i,t.style[s]!==e){this.propertyCache[i]=s;break}t.style[s]=n},n.prototype.accelerate=function(t){this.css(t,"transform","translate3d(0,0,0)"),this.css(t,"transform-style","preserve-3d"),this.css(t,"backface-visibility","hidden")},n.prototype.setPosition=function(t,i,e){i+="px",e+="px",this.transform3DSupport?this.css(t,"transform","translate3d("+i+","+e+",0)"):this.transform2DSupport?this.css(t,"transform","translate("+i+","+e+")"):(t.style.left=i,t.style.top=e)},n.prototype.onOrientationTimer=function(){this.orientationSupport&&0===this.orientationStatus&&(this.disable(),this.orientationSupport=!1,this.enable())},n.prototype.onCalibrationTimer=function(){this.calibrationFlag=!0},n.prototype.onWindowResize=function(){this.updateDimensions()},n.prototype.onAnimationFrame=function(){this.updateBounds();var t=this.ix-this.cx,i=this.iy-this.cy;(Math.abs(t)>this.calibrationThreshold||Math.abs(i)>this.calibrationThreshold)&&this.queueCalibration(0),this.portrait?(this.mx=this.calibrateX?i:this.iy,this.my=this.calibrateY?t:this.ix):(this.mx=this.calibrateX?t:this.ix,this.my=this.calibrateY?i:this.iy),this.mx*=this.ew*(this.scalarX/100),this.my*=this.eh*(this.scalarY/100),isNaN(parseFloat(this.limitX))||(this.mx=this.clamp(this.mx,-this.limitX,this.limitX)),isNaN(parseFloat(this.limitY))||(this.my=this.clamp(this.my,-this.limitY,this.limitY)),this.vx+=(this.mx-this.vx)*this.frictionX,this.vy+=(this.my-this.vy)*this.frictionY;for(var e=0,n=this.layers.length;n>e;e++){var s=this.layers[e],o=this.depths[e],a=this.vx*o*(this.invertX?-1:1),r=this.vy*o*(this.invertY?-1:1);this.setPosition(s,a,r)}this.raf=requestAnimationFrame(this.onAnimationFrame)},n.prototype.onDeviceOrientation=function(t){if(!this.desktop&&null!==t.beta&&null!==t.gamma){this.orientationStatus=1;var i=(t.beta||0)/o,e=(t.gamma||0)/o,n=this.wh>this.ww;this.portrait!==n&&(this.portrait=n,this.calibrationFlag=!0),this.calibrationFlag&&(this.calibrationFlag=!1,this.cx=i,this.cy=e),this.ix=i,this.iy=e}},n.prototype.onMouseMove=function(t){var i=t.clientX,e=t.clientY;!this.orientationSupport&&this.relativeInput?(this.clipRelativeInput&&(i=Math.max(i,this.ex),i=Math.min(i,this.ex+this.ew),e=Math.max(e,this.ey),e=Math.min(e,this.ey+this.eh)),this.ix=(i-this.ex-this.ecx)/this.erx,this.iy=(e-this.ey-this.ecy)/this.ery):(this.ix=(i-this.wcx)/this.wrx,this.iy=(e-this.wcy)/this.wry)},t[s]=n}(window,document),function(){for(var t=0,i=["ms","moz","webkit","o"],e=0;e<i.length&&!window.requestAnimationFrame;++e)window.requestAnimationFrame=window[i[e]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[i[e]+"CancelAnimationFrame"]||window[i[e]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(i,e){var n=(new Date).getTime(),s=Math.max(0,16-(n-t)),o=window.setTimeout(function(){i(n+s)},s);return t=n+s,o}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}(),(window.jQuery||window.Zepto)&&!function(t){t.fn.Swipe=function(i){return this.each(function(){t(this).data("Swipe",new Swipe(t(this)[0],i))})}}(window.jQuery||window.Zepto);var scene=document.getElementById("hero"),parallax=new Parallax(scene);window.mySwipe=Swipe(document.getElementById("slider")),$(".fa-search").click(function(){$(".search-input").toggleClass("s-opacity"),$(".search").toggleClass("search-active"),$(".search-off").toggleClass("search-on")}),$(".fa-bars").click(function(){$(".nav").toggleClass("on")}),$(window).scroll(function(){var t=$(this).scrollTop();t>=100?$("#r-nav").addClass("is-active"):$("#r-nav").removeClass("is-active"),t>=100?$("#r-nav-mobile").addClass("is-active"):$("#r-nav-mobile").removeClass("is-active"),t>$(".firstSection").offset().top-$(window).height()/1.1&&$(".r-sm-thumb").addClass("is-showing"),t>$(".second-section").offset().top-$(window).height()/.7&&($(".second-section").addClass("is-showing"),$(".left-us h1").addClass("is-showing"),$(".right-us h1").addClass("is-showing")),t>$(".subdomains").offset().top-$(window).height()/.7&&$(".subdomains").addClass("is-showing"),t>$(".multimedia").offset().top-$(window).height()/.7&&$(".multimedia").addClass("is-showing"),t>$(".sss").offset().top-$(window).height()/.4&&$(".sss").addClass("is-showing"),t+$(window).height()>$(document).height()-300&&$(".footer").addClass("is-showing")}),$(".show-it-b").mouseenter(function(){$(".left-us h1").addClass("r-tada"),$(".samp-ne").removeClass("is-active"),$(".biz-kimiz").addClass("is-active")}),$(".show-it-b").mouseleave(function(){$(".left-us h1").removeClass("r-tada")}),$(".show-it-s").mouseenter(function(){$(".biz-kimiz").removeClass("is-active"),$(".samp-ne").addClass("is-active"),$(".right-us h1").addClass("r-tada")}),$(".show-it-s").mouseleave(function(){$(".right-us h1").removeClass("r-tada")});var action="click",speed="500";$(document).ready(function(){$("li.q").on(action,function(){$(this).next().slideToggle(speed).siblings("li.a").slideUp();var t=$(this).children(".fa");$(t).not(t).removeClass("rotate"),t.toggleClass("rotate")})}),$(function(){$('a[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);if(t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length)return $("html, body").animate({scrollTop:t.offset().top-"52"},1e3),!1}})});