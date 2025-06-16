const sprite = document.getElementById('sprite');
const prompt = document.getElementById('prompt');

const stages = [
  { scale: 1.2, text: 'Tá você até que é corajosa, mas não clique de novo (eu que mando aqui mesmo)' },
  { scale: 1.4, text: 'Olha, tá bom já viu, não tô pra brincadeira mais (me obedeça)' },
  { scale: 1.6, text: 'Paro' },
  { scale: 1.8, text: 'Tá de sacanagem' },
  { scale: 2.0, text: 'Não clique em mim, peble' },
  // final stage
  { scale: 1, text: null }
];

let current = 0;

sprite.addEventListener('click', () => {
  const stage = stages[current];
  if (stage.text) {
    sprite.style.transform = `scale(${stage.scale})`;
    prompt.textContent = stage.text;
    current = Math.min(current + 1, stages.length - 1);
  } else {
    // final screen
    document.querySelector('.container').innerHTML = `
      <img src="polar-bear.gif" alt="Polar Bear GIF" style="max-width:70%; transform:none;" />
      <p class="final-message">LAYSLAAAAAAA</p>
      <p>Feliz aniversárioooo, que Deus te abençoe muito pra todo sempre, muitos anos de vida porque eu tenho muito a conversar contigo e não ouse a parar viu, passar meu tempo com você é sempre muito bom então não mude esse seu lado muito divertido que é inegável que tem, um beijão e aproveita seu diaaaa</p>
    `;
  }
});