<template>
  <div class="hero">

    <Peaks />

    <div class="contentWrapper">
      <div class="left-side">
        <h1 class="name">Hector Mendana Morales</h1>
        <h3>Computer Science @ NTNU</h3>
        <div class="separator"></div>
        <h3>Developer @ MAKE NTNU</h3>
        <h4>Java | Python | TypeScript | C#</h4>
      </div>

      <div class="right-side">
        <h3 class="contact">hmmoralesdev@gmail.com</h3>
        <a href="https://github.com/HectorMM5" class="GitHub">GitHub</a>
      </div>
    </div>

  </div>
</template>

<script setup>
import Peaks from './Peaks.vue';
</script>

<script>
export default {
  name: 'Hero',
}
</script>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  background-color: var(--color-separator);
  height: 95dvh;
  width: 100%;
  left: 0;
}

.contentWrapper {
  margin: auto;
  padding: 1rem;
  display: grid;
  grid-template-columns: 60% 40%;
}

.left-side,
.right-side {
  margin: 3% 0 0 3%;
  position: relative;
  z-index: 1;
}

@media (max-width: 800px) {
  .contentWrapper {
    grid-template-columns: 1fr;
  }

  .separator {
    width: 90%;
    height: 3px;
    margin: 1rem auto;
  }

  .name {
    font-size: 2rem;
  }
}

.left-side {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.name {
  display: block;
  font-size: 4rem;
  font-weight: 1000;
  color: var(--color-text);
}

.left-side h3 {
  display: block;
  font-size: 2rem;
  color: var(--color-text);
}

.left-side h4 {
  display: block;
  font-size: 1.5rem;
  color: var(--color-text);
}

.separator {
  border: solid var(--color-bg);
  border-radius: 5px;
  width: 30%;
}

.right-side {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: baseline;
  margin-top: 65%;
}

.right-side h3 {
  display: block;
  font-size: 1rem;
  color: var(--color-text);
}

.GitHub {
  text-decoration: none;
  color: var(--color-text);
}
</style>
