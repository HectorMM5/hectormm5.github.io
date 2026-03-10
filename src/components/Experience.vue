<template>
  <div class="experience">
    <div class="work-experience">
      <h1 class="title">Professional Experience</h1>

      <ul class="card-list">
        <li class="card" v-for="job in jobs" :key="job.company">
          <h3 class="card-title">{{ job.company }}</h3>
          <h4 class="card-subtitle">{{ job.role }}</h4>
          <p class="card-period">{{ job.period }}</p>

          <ul class="card-bullets">
            <li
              class="card-bullet"
              v-for="(h, index) in job.highlights"
              :key="job.company + '-' + index"
            >
              {{ h }}
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="separator"></div>

    <div class="education">
      <h1 class="title">Education</h1>

      <ul class="card-list">
        <li class="card" v-for="study in studies" :key="study.school">
          <h3 class="card-title">{{ study.school }}</h3>
          <h4 class="card-subtitle">{{ study.studyName }}</h4>
          <p class="card-period">{{ study.period }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'

class JobExperience {
  constructor(
    public company: string,
    public role: string,
    public start: string,
    public end: string,
    public highlights: string[] = [],
  ) {}

  get period(): string {
    return `${this.start} - ${this.end}`
  }
}

const jobs: JobExperience[] = [
  new JobExperience('MAKE NTNU', 'Developer', 'Jan 2026', 'Present', [
    'Built internal tools for member workflows',
    'Worked in a team with code reviews and sprints',
  ]),
  new JobExperience('Horten vgs.', 'Language Teacher', 'Oct 2023', 'June 2024', [
    'Helped foreign students learn the Norwegian language',
    'Preparation and execution of simple lectures',
    'Reviewing learning exercises',
  ]),
]

class Study {
  constructor(
    public school: string,
    public studyName: string,
    public location: string,
    public start: string,
    public end: string,
  ) {}

  get period(): string {
    return `${this.start} - ${this.end}`
  }
}

const studies: Study[] = [
  new Study('NTNU', 'Bachelor in Computer Science', 'Trondheim', 'Aug 2024', 'Present'),
  new Study('Horten vgs.', 'Environment and Science line', 'Horten', 'Aug 2021', 'June 2024'),
]

export default {
  name: 'Experience',
  data() {
    return {
      jobs: jobs,
      studies: studies,
    }
  },
}
</script>

<style scoped>
.experience {
  margin: 3% 3%;
  padding: 1rem;
  display: grid;
  grid-template-columns: 47.5% 5% 47.5%;
  background-color: var(--color-bg);
  justify-content: space-between;
}

.title {
  padding: 0;
  margin-top: 0.75rem;
  margin-bottom: 0;
  color: white;
}

.separator {
  width: 5px;
  height: 90%;
  background-color: var(--color-separator);
  margin: auto;
}

.work-experience {
  width: 100%;
}

.education {
  width: 100%;
}

.card-list {
  padding: 0;
  display: grid;
  grid-template-columns: auto;
  gap: 1rem;
}

.card {
  padding: 2rem;
  background-color: var(--color-card);
  border-radius: 1rem;
  list-style-type: none;
  color: var(--color-text);
}

.card-title {
  font-size: 2rem;
  margin: 0;
}

.card-subtitle {
  font-size: 1.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.card-period {
  font-size: 1rem;
}

.card-bullets {
  margin: 0.75rem 0 0;
  padding-left: 1.25rem;
  font-size: 1rem;
}

.card-bullet {
  margin: 0.25rem 0;
}

@media 
(max-width: 800px) {
  .experience {
    grid-template-columns: 1fr;
  }

  .separator {
    width: 90%;
    height: 5px;
    margin: 1rem auto;
  }
}
</style>
