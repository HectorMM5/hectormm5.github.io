<template>
    <div class="hero">
        <div class="left-side">
            <h1 class="name">Hector Mendana Morales</h1>
            <h3>Computer Science @ NTNU</h3>
            <div class="separator"></div>
            <h3>Developer @ MAKE NTNU</h3>

        </div>
        <div class="right-side">
            <h3 class="contact">hmmoralesdev@gmail.com</h3>
            <h4 class="GitHub">GitHub</h4>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Hero'
}
</script>

<style scoped>
.hero {
    margin: 10% 10%;
    display: flex;
    flex-direction: row;
    background-color: rgb(20, 20, 20);
}

.left-side {
    display: flex;
    flex-direction: column;
    width: 60%
}

.left-side h1 {
    display: block;
    font-family: 'Courier New', Courier, monospace;
    font-size: 2rem;
}

.left-side h2 {
    display: block;
    font-family: 'Courier New', Courier, monospace;
    font-size: 1rem;
}

.left-side .separator {
    background-color: rgb(22, 22, 22);
    border-radius: 5px;
}

.right-side {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 30%;
    align-items: baseline;
}

.right-side h2 {
    display: block;
    font-family: 'Courier New', Courier, monospace;
    font-size: 0.7rem;
}



</style>