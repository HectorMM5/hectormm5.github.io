<template>
  <div class="projects">
    <h1 class="title">Projects</h1>

    <ul class="card-list">
      <li class="card" v-for="project in projects" :key="project.name">
        <h3 class="card-title">{{ project.name }}</h3>
        <h4 class="card-subtitle">{{ project.about }}</h4>
        <p class="card-techstack">{{ project.stack }}</p>

          <ul class="card-bullets">
          <li
            class="card-bullet"
            v-for="(highlight, index) in project.highlights"
            :key="project.name + '-' + index"
          >
            {{ highlight }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'

class Project {
  constructor(
    public name: string,
    public about: string,
    public highlights: string[] = [], 
    public techStack: string[] = [],
  ) {}

  get stack(): string {
    return this.techStack.join(" | ")
  }
}

const projects: Project[] = [
  new Project(
    "Portfolio website",
    "The website you're in right now, aiming to present my work experience, education and projects. Built using Vue 3 and Vite, and hosted on GitHub Pages.",
    [
      "Learning project to familiarize myself with Vue",
      "TypeScript-enabled Vue components",
      "Dynamic element generation allows easy addition of new education, project or work cards"
    ],
    ["Vue", "Vite", "TypeScript", "HTML", "CSS"]
  ),

  new Project(
    "H.O.M.E System", 
    "Task-management app for small-medium size teams. Allows registration of tasks with multiple metrics; such as priority-level and workload rating. Tasks can be claimed by users or be automatically assigned.",
    [
      "Massively increased performance by implementation of in-memory H2-database",
      "Designed and implemented external database",
      "Participated in development of the task-allocation system"
    ],
    ["Java", "MySQL", "JavaFX", "Maven"]
  ),

  new Project(
    "BlueSky-clone",
    "Social media app (work in progress), using the BlueSky API to get content. Web interface built with React. Automatic fetching of new posts white keeping local storage usage low.",
    [
      "Analyzed the API open-source code directly, due to lack of documentation",
      "Utilizes both Python (backend API-interaction) and TypeScript (frontend), with communication using FastAPI (JSON syntax)",
      "Learning project to familiarize myself with React, Docker and Docker Compose",
    ],
    ["React", "Python", "TypeScript", "FastAPI", "Docker", "Docker Compose", "HTML", "CSS"]
  ),

  new Project(
    "Board-game",
    "Desktop board-game app with the classic games Snakes & Ladders and a simple Ludo game. Made with custom graphics, animations and dynamic board generation.",
    [
      "Abstract classes allow code reusability between games",
      "Utilizes MVC structure and several design patterns, such as Observer, Factory, Singleton and Facade", 
      "Allows custom board import (JSON) and player profile statistics which are saved between sessions (CSV)",
      "Built with extensive testing",
    ],
    ["Java", "JavaFX", "JUnit", "JSON", "CSV", "Maven"]
  )
]

export default {
  name: 'Projects',
  data() {
    return {
      projects: projects
    }
  },
}
</script>

<style scoped>
.projects {
  margin: 3% 3%;
  padding: 1rem;
  display: grid;
  grid-template-columns: 100%;
  background-color: #2a2a2a;
  justify-content: space-between;
}

.title {
  padding: 0;
  margin-top: 0.75rem;
  margin-bottom: 0;
  color: white;
}

.card-list {
  padding: 0;
  display: grid;
  grid-template-columns: auto;
  gap: 1rem;
}

.card {
  padding: 2rem;
  background-color: #303030;
  border-radius: 1rem;
  list-style-type: none;
}

.card-title {
  font-size: 2rem;
  color: white;
  margin: 0;
}

.card-subtitle {
  font-size: 1.5rem;
  color: white;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.card-techstack {
  font-size: 1rem;
  color: white;
}

.card-bullets {
  margin: 0.75rem 0 0;
  padding-left: 1.25rem;
  color: white;
  font-size: 1rem;
}

.card-bullet {
  margin: 0.25rem 0;
}
</style>
