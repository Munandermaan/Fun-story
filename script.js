const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
$$('[data-scroll]').forEach(b=>b.addEventListener('click',()=>$(b.dataset.scroll).scrollIntoView({behavior:'smooth'})));
$$('.flip-card').forEach(c=>c.addEventListener('click',()=>c.classList.toggle('flipped')));
const quests=['Late-night chai + a long walk ☕','Pick a random café and rate its dessert 🍰','Recreate our first PUBG memory 🎮','Phone-free dinner — just us ❤️','Take silly pictures like teenagers 📸','Watch a movie and roast every scene 😂','Go for a sunset drive with our favourite playlist 🌅','Plan one completely spontaneous date 🎲'];
$('#questBtn').addEventListener('click',()=>{const r=quests[Math.floor(Math.random()*quests.length)];$('#questResult').textContent='MISSION: '+r;burst(8)});
$('#continueBtn').addEventListener('click',()=>{const l=$('#letter');l.classList.remove('hidden');$('#continueBtn').textContent='CONTINUE ❤️';l.scrollIntoView({behavior:'smooth',block:'center'});burst(28)});
function burst(n=12){for(let i=0;i<n;i++){const h=document.createElement('span');h.className='float-heart';h.textContent=['♥','❤','♡','✨'][Math.floor(Math.random()*4)];h.style.left=Math.random()*100+'%';h.style.animationDuration=(3+Math.random()*3)+'s';h.style.fontSize=(14+Math.random()*18)+'px';$('#hearts').appendChild(h);setTimeout(()=>h.remove(),6500)}}
setInterval(()=>{if(Math.random()<.45)burst(1)},2500);
window.addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-innerHeight;$('#progressBar').style.width=(scrollY/max*100)+'%'});
