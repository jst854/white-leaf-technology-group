(function(){
var d=document,nav=d.querySelector('.nav'),btn=d.querySelector('.menu-btn'),menu=d.getElementById('site-nav');
d.documentElement.classList.add('js');
function close(){nav.classList.remove('open');btn.setAttribute('aria-expanded','false');btn.setAttribute('aria-label','Open menu');}
btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o);btn.setAttribute('aria-label',o?'Close menu':'Open menu');});
menu.querySelectorAll('a').forEach(function(a){a.addEventListener('click',close)});
d.addEventListener('keydown',function(e){if(e.key==='Escape'){close();lbClose();}});
function onScroll(){nav.classList.toggle('scrolled',window.scrollY>10)}onScroll();window.addEventListener('scroll',onScroll,{passive:true});
var links={};menu.querySelectorAll('a').forEach(function(a){links[a.getAttribute('href').slice(1)]=a});
if('IntersectionObserver' in window){
 var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){for(var k in links){links[k].classList.toggle('active',k===e.target.id);links[k].toggleAttribute('aria-current',k===e.target.id)}}})},{rootMargin:'-45% 0px -50% 0px'});
 ['top','about','technology','applications','results'].forEach(function(id){var el=d.getElementById(id);el&&so.observe(el)});
 var ro=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');ro.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px'});
 d.querySelectorAll('.reveal').forEach(function(el){ro.observe(el)});
}else{d.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in')})}
var lb=d.querySelector('.lightbox'),li=lb.querySelector('img'),lc=lb.querySelector('.lb-cap'),last;
function lbClose(){if(!lb.hidden){lb.hidden=true;d.body.style.overflow='';last&&last.focus()}}
d.querySelectorAll('main figure img').forEach(function(img){
 img.tabIndex=0;img.setAttribute('role','button');img.classList.add('zoom');
 function open(){last=img;li.src=img.src;li.alt=img.alt;var c=img.parentNode.querySelector('figcaption');lc.textContent=c?c.textContent:'';lb.hidden=false;d.body.style.overflow='hidden';lb.querySelector('.lb-close').focus()}
 img.addEventListener('click',open);img.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();open()}});
});
lb.addEventListener('click',function(e){if(e.target!==li)lbClose()});
})();
