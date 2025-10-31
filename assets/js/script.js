

(function(){
const btn = document.getElementById('btnHamburger');
const nav = document.getElementById('navPanel');
if(!btn || !nav) return;
btn.addEventListener('click', () => {
const open = document.body.classList.toggle('nav-open');
btn.setAttribute('aria-expanded', String(open));
});
})();




(function(){
const nav = document.getElementById('navPanel');
if(!nav) return;
nav.querySelectorAll('li').forEach(li => {
const trigger = li.querySelector('a');
const submenu = li.querySelector('.submenu');
if(trigger && submenu){
trigger.addEventListener('focus', () => trigger.setAttribute('aria-expanded','true'));
trigger.addEventListener('blur', () => trigger.setAttribute('aria-expanded','false'));
}
});
})();




(function(){
document.querySelectorAll('[data-open-modal]').forEach(btn => {
const sel = btn.getAttribute('data-open-modal');
const modal = document.querySelector(sel);
if(!modal) return;
btn.addEventListener('click', () => {
document.body.classList.add('modal-open');
modal.classList.add('open');
});
});


document.querySelectorAll('[data-close-modal]').forEach(btn => {
btn.addEventListener('click', () => {
document.body.classList.remove('modal-open');
document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.remove('open'));
});
});