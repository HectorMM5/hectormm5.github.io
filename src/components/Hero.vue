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
            <h3 class="GitHub">GitHub</h3>
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
    margin: 3% 3%;
    padding: 1rem;
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
    color: white;
}

.left-side h3 {
    display: block;
    font-family: 'Courier New', Courier, monospace;
    font-size: 1rem;
    color: white;
}

.left-side h4 {
    display: block;
    font-family: 'Courier New', Courier, monospace;
    font-size: 0.7rem;
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
    width: 30%;
    align-items: baseline;
    margin-top: auto;
}

.right-side h3 {
    display: block;
    font-family: 'Courier New', Courier, monospace;
    font-size: 0.7rem;
    color: white;
}

</style>