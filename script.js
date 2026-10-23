// Kohinoor Tiwari — portfolio script
(function(){
  // splash screen
  var splash=document.getElementById('splash');
  document.body.style.overflow='hidden';
  setTimeout(function(){splash.classList.add('out');document.body.style.overflow='';},2300);

  // nav border on scroll
  var nav=document.getElementById('nav');
  addEventListener('scroll',function(){nav.classList.toggle('scrolled',scrollY>10)},{passive:true});

  // reveal on scroll
  var els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.08});
    els.forEach(function(el){io.observe(el)});
  }else{els.forEach(function(el){el.classList.add('in')})}
})();