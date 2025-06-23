<template>
  <div class="button-demo">
    <h1 class="title">Windows 7 Style Button Demo</h1>
    <p class="subtitle">Exemplos de utilização do componente <code>&lt;ButtonWin7&gt;</code></p>

    <div class="examples-grid">
      <section>
        <h2>🟦 Cor padrão (grey)</h2>
        <ButtonWin7 @click="handleClick">Botão Padrão</ButtonWin7>
      </section>

      <section>
        <h2>🔵 Cor azul</h2>
        <ButtonWin7 color="blue" @click="handleClick">Botão Azul</ButtonWin7>
      </section>

      <section>
        <h2>🟢 Cor verde</h2>
        <ButtonWin7 color="green" @click="handleClick">Botão Verde</ButtonWin7>
      </section>

      <section>
        <h2>🚫 Botão desativado</h2>
        <ButtonWin7 color="blue" disabled>Desativado</ButtonWin7>
      </section>

      <section>
        <h2>💡 Conteúdo personalizado</h2>
        <ButtonWin7 color="grey">
          <span style="font-style: italic;">✨ Clicável com estilo</span>
        </ButtonWin7>
      </section>

      
    </div>
  </div>
</template>

<script setup>
import ButtonWin7 from '@/components/win7/win7-button.vue';

function handleClick() {
  console.log('Botão clicado!');
}
</script>

<style scoped>
.button-demo {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.title {
  font-size: 26px;
  margin-bottom: 0.5rem;
  text-align: center;
}

.subtitle {
  font-size: 14px;
  color: #555;
  text-align: center;
  margin-bottom: 2rem;
}

.examples-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}

section {
  background: linear-gradient(to bottom, #ffffff, #e9eef5);
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
  text-align: center;
  transition: box-shadow 0.2s;
}

section:hover {
  box-shadow: 0 0 10px rgba(0, 120, 215, 0.3);
}

h2 {
  font-size: 15px;
  margin-bottom: 0.8rem;
  color: #333;
}
</style>
