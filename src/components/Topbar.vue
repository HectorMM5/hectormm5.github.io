<template>
    <div class="topbar">
        <div class="topbar-content">
            <h1 class="topbar-title">Morales</h1>
            <nav class="topbar-nav">
                <a href="#home">Experience</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Topbar'
}
</script>

<style scoped>
.topbar {
    background-color: #333;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.topbar-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
}

.topbar-title {
    color: white;
    margin: 0;
    font-size: 1.5rem;
}

.topbar-nav {
    display: flex;
    gap: 2rem;
}

.topbar-nav a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
}

.topbar-nav a:hover {
    color: #ddd;
}
</style>