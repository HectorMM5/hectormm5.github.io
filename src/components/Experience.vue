<template>
  <div class="experience">
    <div class="work-experience">
      <h1 class="title">Professional Experience</h1>
      <ul class="job-list">
        <li class="job-item" v-for="job in jobs" :key="job.company">
          <h3 class="job-company">{{ job.company }}</h3>
          <h4 class="job-role">{{ job.role }}</h4>
          <p class="job-period">{{ job.period }}</p>
          <ul class="job-highlights">
            <li
              class="job-highlight-item"
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
      <ul class="study-list">
        <li class="study-item" v-for="study in studies" :key="study.school">
          <h3 class="study-school">{{ study.school }}</h3>
          <h4 class="study-studyName">{{ study.studyName }}</h4>
          <p class="study-period">{{ study.period }}</p>
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
  display: flex;
  flex-direction: row;
  background-color: #2a2a2a;
  justify-content: space-between;
  font-family: 'Courier New', Courier, monospace;
}

.title {
  padding: 0 1rem;
  margin-top: 0.75rem;
  margin-bottom: 0;
  color: white;
}

.separator {
  width: 5px;
  background-color: rgba(255, 255, 255, 0.15);
  margin: 2rem 0;
}

.work-experience {
  width: 48%;
}

.job-list {
  padding: 1rem;
  display: grid;
  grid-template-columns: auto;
  gap: 1rem;
}

.job-item {
  padding: 2rem;
  background-color: #303030;
  border-radius: 1rem;
  list-style-type: none;
}

.job-company {
  font-size: 2rem;
  color: white;
  margin: 0;
}

.job-role {
  font-size: 1.5rem;
  color: white;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.job-period {
  font-size: 1rem;
  color: white;
}

.job-highlights {
  font-size: 1rem;
  color: white;
}

.education {
  width: 48%;
}

.study-list {
  padding: 1rem;
  display: grid;
  grid-template-columns: auto;
  gap: 1rem;
}

.study-item {
  padding: 2rem;
  background-color: #303030;
  border-radius: 1rem;
  list-style-type: none;
}

.study-school {
  font-size: 2rem;
  color: white;
  margin: 0;
}

.study-studyName {
  font-size: 1.5rem;
  color: white;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.study-period {
  font-size: 1rem;
  color: white;
}
</style>
