// main.js — controla os poemas e interações
document.addEventListener('DOMContentLoaded', () => {
  const poems = [
    '"O tijolo baiano que a gente assenta é o mesmo que sustenta a esperança de não cair na curva da história."',
    '"As pernas dormem mais / Que as pessoas / Cabeças despencam / Dos troncos corpos"',
    '"Vou colar o meu bloco / tudo no canto da rua / na calçada / é que tô construindo um puxadinho"',
    '"A periferia é a cidade que não dorme, é o corpo que carrega o peso do cimento e a leveza do sonho."'
  ];
  let currentIndex = 0;

  const el = document.getElementById('poetry-text');
  const nextBtn = document.getElementById('next-btn');
  const prevBtn = document.getElementById('prev-btn');

  function updatePoem(){
    if(!el) return;
    el.style.opacity = 0;
    setTimeout(()=>{
      el.innerText = poems[currentIndex];
      el.style.opacity = 1;
    }, 250);
  }

  if(nextBtn) nextBtn.addEventListener('click', ()=>{
    currentIndex = (currentIndex + 1) % poems.length;
    updatePoem();
  });
  if(prevBtn) prevBtn.addEventListener('click', ()=>{
    currentIndex = (currentIndex - 1 + poems.length) % poems.length;
    updatePoem();
  });

  document.addEventListener('keydown', (e)=>{
    if(e.key === 'ArrowRight'){
      currentIndex = (currentIndex + 1) % poems.length;
      updatePoem();
    } else if(e.key === 'ArrowLeft'){
      currentIndex = (currentIndex - 1 + poems.length) % poems.length;
      updatePoem();
    }
  });

  updatePoem();
});
