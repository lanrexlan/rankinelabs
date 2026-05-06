(function(){
  const nav=document.querySelector('.nav');
  const onScroll=()=>{if(!nav)return;nav.classList.toggle('solid',window.scrollY>30);nav.classList.toggle('transparent',window.scrollY<=30)};
  onScroll();window.addEventListener('scroll',onScroll,{passive:true});

  const hamburger=document.querySelector('.hamburger');
  const mobileMenu=document.querySelector('.mobile-menu');
  if(hamburger&&mobileMenu){
    const menuId=mobileMenu.id||'mobileMenu';
    if(!mobileMenu.id) mobileMenu.id=menuId;
    hamburger.setAttribute('aria-controls',menuId);
    hamburger.setAttribute('aria-expanded','false');
    if(!hamburger.getAttribute('aria-label')) hamburger.setAttribute('aria-label','Open menu');
    mobileMenu.setAttribute('role','dialog');
    mobileMenu.setAttribute('aria-label',mobileMenu.getAttribute('aria-label')||'Mobile navigation');

    const focusableSelector='a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
    let lastFocused=null;

    const setOpen=(isOpen)=>{
      hamburger.classList.toggle('open',isOpen);
      mobileMenu.classList.toggle('open',isOpen);
      hamburger.setAttribute('aria-expanded',isOpen?'true':'false');
      if(isOpen){
        lastFocused=document.activeElement;
        document.body.style.overflow='hidden';
        mobileMenu.setAttribute('aria-modal','true');
        const focusables=[...mobileMenu.querySelectorAll(focusableSelector)].filter(el=>el.offsetParent!==null);
        (focusables[0]||mobileMenu).focus();
      }else{
        document.body.style.overflow='';
        mobileMenu.removeAttribute('aria-modal');
        (lastFocused||hamburger).focus();
      }
    };

    hamburger.addEventListener('click',()=>setOpen(!mobileMenu.classList.contains('open')));
    mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setOpen(false)));

    document.addEventListener('keydown',(e)=>{
      if(!mobileMenu.classList.contains('open')) return;
      if(e.key==='Escape'){ e.preventDefault(); setOpen(false); return; }
      if(e.key!=='Tab') return;
      const focusables=[...mobileMenu.querySelectorAll(focusableSelector)].filter(el=>el.offsetParent!==null);
      if(!focusables.length){ e.preventDefault(); mobileMenu.focus(); return; }
      const first=focusables[0], last=focusables[focusables.length-1];
      if(e.shiftKey&&document.activeElement===first){ e.preventDefault(); last.focus(); }
      else if(!e.shiftKey&&document.activeElement===last){ e.preventDefault(); first.focus(); }
    });

    if(!mobileMenu.hasAttribute('tabindex')) mobileMenu.setAttribute('tabindex','-1');
  }

  const reveals=document.querySelectorAll('.reveal');
  if(reveals.length){
    const io=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('revealed');io.unobserve(e.target);}})},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
    reveals.forEach(el=>io.observe(el));
  }
})();
