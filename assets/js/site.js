(function(){
  const nav=document.querySelector('.nav');
  const onScroll=()=>{if(!nav)return;nav.classList.toggle('solid',window.scrollY>30);nav.classList.toggle('transparent',window.scrollY<=30)};
  onScroll();window.addEventListener('scroll',onScroll,{passive:true});

  const hamburger=document.querySelector('.hamburger');
  const mobileMenu=document.querySelector('.mobile-menu');
  if(hamburger&&mobileMenu){
    hamburger.addEventListener('click',()=>{hamburger.classList.toggle('open');mobileMenu.classList.toggle('open');document.body.style.overflow=mobileMenu.classList.contains('open')?'hidden':''});
    mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{hamburger.classList.remove('open');mobileMenu.classList.remove('open');document.body.style.overflow='';}));
  }

  const reveals=document.querySelectorAll('.reveal');
  if(reveals.length){
    const io=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('revealed');io.unobserve(e.target);}})},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
    reveals.forEach(el=>io.observe(el));
  }
})();
