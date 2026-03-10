<template>
  <div class="topbar">
    <div class="topbar-content">
      <h1 class="topbar-title">Morales</h1>

      <!-- Desktop nav (hidden on mobile via CSS) -->
      <nav class="topbar-nav">
        <a href="#home">Experience</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      <!-- Hamburger (only visible on mobile via CSS) -->
      <button class="hamburger" type="button" aria-label="Open menu" :aria-expanded="isMenuOpen ? 'true' : 'false'"
        aria-controls="mobile-menu" @click="toggleMenu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
    </div>

    <!-- Mobile menu dropdown -->
    <transition name="menu">
      <nav v-if="isMenuOpen" id="mobile-menu" class="mobile-menu" aria-label="Mobile navigation">
        <a href="#home" @click="closeMenu">Experience</a>
        <a href="#about" @click="closeMenu">About</a>
        <a href="#contact" @click="closeMenu">Contact</a>
      </nav>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Topbar",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu,
    closeMenu,
    onResize,
    onKeydown
  },

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  },

  closeMenu() {
    this.isMenuOpen = false;
  },

  onResize() {
    // If user goes back to desktop, ensure mobile menu is closed
    if (window.innerWidth > 800 && this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  },

  onKeydown(e) {
    if (e.key === "Escape" && this.isMenuOpen) this.closeMenu();
  },

  mounted() {
    window.addEventListener("resize", this.onResize);
    window.addEventListener("keydown", this.onKeydown);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.onResize);
    window.removeEventListener("keydown", this.onKeydown);
  },
};
</script>

<style scoped>
.topbar {
  background-color: var(--color-card);
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.topbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 80%;
  margin: 0 auto;
}

.topbar-title {
  color: var(--color-text);
  margin: 0;
  font-size: 2.5rem;
}

.topbar-nav {
  display: flex;
  gap: 2rem;
}

.topbar-nav a {
  color: var(--color-text);
  text-decoration: none;
  transition: color 0.3s;
  font-size: 1.5rem;
}

.topbar-nav a:hover {
  color: var(--color-text-hover);
}

/* Hamburger button (hidden on desktop) */
.hamburger {
  display: none;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0.5rem;
}

.bar {
  display: block;
  width: 28px;
  height: 3px;
  margin: 6px 0;
  background-color: var(--color-text);
  border-radius: 2px;
}

/* Mobile dropdown menu (hidden by v-if when closed) */
.mobile-menu {
  max-width: 80%;
  margin: 1rem auto 0 auto;
  background-color: var(--color-card);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem 0;
  border-top: 5px solid var(--color-separator);
}

.mobile-menu a {
  color: var(--color-text);
  text-decoration: none;
  font-size: 1.5rem;
  padding: 0.5rem 0;
}

.mobile-menu a:hover {
  color: var(--color-text-hover);
}

/* Animations */
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

@media (max-width: 800px) {

  /* hide navigation links on smaller widths */
  .topbar-nav {
    display: none;
  }

  /* show hamburger on mobile */
  .hamburger {
    display: block;
  }
}
</style>