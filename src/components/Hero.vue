<template>
  <div class="hero">
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
</template>

<script>
export default {
  name: 'Hero',
}
</script>

<style scoped>
.hero {
  margin: 3% 3%;
  padding: 1rem;
  display: grid;
  grid-template-columns: 60% 40%;
  flex-direction: row;
  background-color: #2a2a2a;
}

@media 
(max-width: 800px) {
  .hero {
    grid-template-columns: 1fr;
  }

  .separator {
    width: 90%;
    height: 3px;
    margin: 1rem auto;
  }
}

.left-side {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.left-side h1 {
  display: block;
  font-size: 4rem;
  font-weight: 1000;
  color: white;
}

.left-side h3 {
  display: block;
  font-size: 2rem;
  color: white;
}

.left-side h4 {
  display: block;
  font-size: 1.5rem;
  color: white;
}

.left-side .separator {
  border: solid rgb(255, 0, 0);
  border-radius: 5px;
  width: 30%;
}

.right-side {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: baseline;
  margin-top: auto;
}

.right-side h3 {
  display: block;
  font-size: 1rem;
  color: white;
}

.GitHub {
  text-decoration: none;
  color: white;
}
</style>
