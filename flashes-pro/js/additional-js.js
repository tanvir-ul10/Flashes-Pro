/*<![CDATA[*/
// Cookies Consent
var ckBox=document.querySelector("#ckBox"),ckAcptBtn=document.querySelector("#ckAcptBtn"),ckErrMes="Cookie can't be set! Please unblock this site from the cookie setting of your browser.";if(null!=ckBox){ckAcptBtn.onclick=()=>{document.cookie="CookieConsentByFineshop=Accepted; max-age=2592000; path=/",document.cookie?ckBox.classList.add("acptd"):alert(ckErrMes)};let e=document.cookie.indexOf("CookieConsentByFineshop=Accepted");-1!=e?ckBox.classList.add("hidden"):ckBox.classList.remove("hidden")};
// No Internet
function pageReload(){var n=document.querySelector("#noInternet .popBo .popBtn svg");null!=n&&n.classList.add("r"),setTimeout(function(){window.location.reload()},500)};window.addEventListener("offline",function(){document.querySelector("#noInternet").classList.remove("hidden"),document.querySelector("#toastNotif").innerHTML="<span>No internet connection!</span>"}),window.addEventListener("online",function(){document.querySelector("#noInternet").classList.add("hidden"),document.querySelector("#toastNotif").innerHTML="<span>Internet connection restored!</span>"});
// Back to TOP by Finestap Design
var prPt=document.querySelector(".Ttop circle.c"),ptLh=prPt.getTotalLength();prPt.style.transition=prPt.style.WebkitTransition="none",prPt.style.strokeDasharray=ptLh+" "+ptLh,prPt.style.strokeDashoffset=ptLh,prPt.getBoundingClientRect();var updateProgress=function(){var t=document.documentElement.scrollTop,e=document.documentElement.scrollHeight-window.innerHeight;prPt.style.strokeDashoffset=ptLh-t*ptLh/e};updateProgress(),window.addEventListener("scroll",updateProgress);var offset=0;window.onscroll=function(){document.documentElement.scrollTop>offset?document.querySelector(".Ttop").classList.add("vsbl"):document.querySelector(".Ttop").classList.remove("vsbl")};
/* Toast Notif */ window.addEventListener("offline",function(){document.querySelector("#toastNotif").innerHTML="<span>No internet connection!</span>"}),window.addEventListener("online",function(){document.querySelector("#toastNotif").innerHTML="<span>Internet connection restored!</span>"});
/*]]>*/