<template>
  <div class="schedule">
    <h1>Weekly Schedule</h1>

    <div class="week-grid">
      <div class="day-column" v-for="day in days" :key="day">
        <h3>{{ day }}</h3>

        <div class="day-card">
          <p class="session-text" v-if="day === 'Sunday'">
            Project Work Sessions / Technical Workshops:
            Hands-on work on technical projects, guided learning sessions,
            and skill-building workshops.
          </p>

           <p class="session-text" v-if="day === 'Tuesday & Thursday'">
            Professional Development Workshops: Workshops focused on career growth, 
            including resume building, interview prep, networking, and tech industry 
            insights
            </p>

            <p class="session-text" v-if="day === 'Tuesday & Thursday'">OR</p>
            
            <p class="session-text" v-if="day === 'Tuesday & Thursday'">
            
            Bonding Workshops: Fun, interactive workshops designed to build team 
            cohesion, foster relationships, and explore topics related to personal
            growth and community building
        </p>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const days = [
  'Sunday',
  'Tuesday & Thursday',
]
</script>

<style scoped>
.schedule {
  max-width: 1800px;
  margin: 0 auto;
  padding: 10rem 1rem 10rem 1rem;
  background: white;
}

.schedule h1 {
  color: black;
  font-size: 64px;
  text-align: center;
  margin: 0 0 2rem 0;
}

.week-grid {
  display: grid;
  grid-template-columns: repeat(2,40%);
  gap: 0.5rem;
  justify-content: center;
}

/* name + card */

.day-column {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 0.5rem;
}

.day-column h3 {
  color: black;
  font-size: 24px;
  margin: 0;
}

.day-card {
  width: 100%;
  height: 200px;
  padding: 1rem;
  box-sizing: border-box;
}

/* p */
.session-text {
  font-size: 21px;
  color: black;
  line-height: 1.4;
}
</style>