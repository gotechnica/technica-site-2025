<template>
    <div class="container">
      <div class="box">
        <Header class="heading">Co-Execs</Header>
        <div class="row">
            <div class="card-grid">
                <ProfileCard
                v-for="(person, index) in coExecs"
                :key="index"
                :name="person.Name"
                :title="person.Title"
                :pronouns="person.Pronouns"
                :image="person.Image"
                :linkedin="person.Linkedin"
                />
            </div>
        </div>
      </div>
    </div>
  
    <div class="container">
      <div class="box">
        <Header class="heading">Directors</Header>
        <div class="row">
          <div class="card-grid">
                <ProfileCard
                v-for="(person, index) in directors"
                :key="index"
                :name="person.Name"
                :title="person.Title"
                :pronouns="person.Pronouns"
                :image="person.Image"
                :linkedin="person.Linkedin"
                />
            </div>
        </div>
      </div>
    </div>
  
    <div class="container">
      <div class="box">
        <Header class="heading">Brand</Header>
        <div class="row">
          <div class="card-grid">
                <ProfileCard
                v-for="(person, index) in brand"
                :key="index"
                :name="person.Name"
                :title="person.Title"
                :pronouns="person.Pronouns"
                :image="person.Image"
                :linkedin="person.Linkedin"
                />
          </div>
        </div>
      </div>
    </div>
  
    <div class="container">
      <div class="box">
        <Header class="heading">Design</Header>
        <div class="row">
          <div class="card-grid">
                <ProfileCard
                v-for="(person, index) in design"
                :key="index"
                :name="person.Name"
                :title="person.Title"
                :pronouns="person.Pronouns"
                :image="person.Image"
                :linkedin="person.Linkedin"
                />
            </div>
        </div>
      </div>
    </div>
  
    <div class="container">
      <div class="box">
        <Header class="heading">Events</Header>
        <div class="row">
          <div class="card-grid">
                <ProfileCard
                v-for="(person, index) in events"
                :key="index"
                :name="person.Name"
                :title="person.Title"
                :pronouns="person.Pronouns"
                :image="person.Image"
                :linkedin="person.Linkedin"
                />
            </div>
        </div>
      </div>
    </div>
  
    <div class="container">
      <div class="box">
        <Header class="heading">Experience</Header>
        <div class="row">
          <div class="card-grid">
                <ProfileCard
                v-for="(person, index) in experience"
                :key="index"
                :name="person.Name"
                :title="person.Title"
                :pronouns="person.Pronouns"
                :image="person.Image"
                :linkedin="person.Linkedin"
                />
            </div>
        </div>
      </div>
    </div>
  
    <div class="container">
      <div class="box">
        <Header class="heading">Inclusive Communities</Header>
        <div class="row">
          <div class="card-grid">
                <ProfileCard
                v-for="(person, index) in inclusiveCommunities"
                :key="index"
                :name="person.Name"
                :title="person.Title"
                :pronouns="person.Pronouns"
                :image="person.Image"
                :linkedin="person.Linkedin"
                />
            </div>
        </div>
      </div>
    </div>
  
    <div class="container">
      <div class="box">
        <Header class="heading">Operations</Header>
        <div class="row">
          <div class="card-grid">
                <ProfileCard
                v-for="(person, index) in operations"
                :key="index"
                :name="person.Name"
                :title="person.Title"
                :pronouns="person.Pronouns"
                :image="person.Image"
                :linkedin="person.Linkedin"
                />
            </div>
        </div>
      </div>
    </div>
  
    <div class="container">
      <div class="box">
        <Header class="heading">Outreach</Header>
        <div class="row">
          <div class="card-grid">
                <ProfileCard
                v-for="(person, index) in outreach"
                :key="index"
                :name="person.Name"
                :title="person.Title"
                :pronouns="person.Pronouns"
                :image="person.Image"
                :linkedin="person.Linkedin"
                />
            </div>
        </div>
      </div>
    </div>
  
    <div class="container">
      <div class="box">
        <Header class="heading">Sponsorship</Header>
        <div class="row">
          <div class="card-grid">
                <ProfileCard
                v-for="(person, index) in sponsorship"
                :key="index"
                :name="person.Name"
                :title="person.Title"
                :pronouns="person.Pronouns"
                :image="person.Image"
                :linkedin="person.Linkedin"
                />
            </div>
        </div>
      </div>
    </div>
  
    <div class="container">
      <div class="box">
        <Header class="heading">Tech</Header>
        <div class="row">
          <div class="card-grid">
                <ProfileCard
                v-for="(person, index) in tech"
                :key="index"
                :name="person.Name"
                :title="person.Title"
                :pronouns="person.Pronouns"
                :image="person.Image"
                :linkedin="person.Linkedin"
                />
            </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import allProfiles from '../assets/spreadsheets/teams.json'
import ProfileCard from '../components/ProfileCard.vue'

const coExecs = computed(() =>
  allProfiles.filter(p => p.Team === 'Co-Execs')
)

const directors = computed(() =>
  allProfiles.filter(p => p.Team === 'Directors')
)

const brand = computed(() =>
  allProfiles.filter(p => p.Team === 'Brand')
)
const design = computed(() =>
  allProfiles.filter(p => p.Team === 'Design')
)

const events = computed(() =>
  allProfiles.filter(p => p.Team === 'Events')
)

const experience = computed(() =>
  allProfiles.filter(p => p.Team === 'Experience')
)

const inclusiveCommunities = computed(() =>
  allProfiles.filter(p => p.Team === 'Inclusive Communities')
)

const operations = computed(() =>
  allProfiles.filter(p => p.Team === 'Operations')
)

const outreach = computed(() =>
  allProfiles.filter(p => p.Team === 'Outreach')
)

const sponsorship = computed(() =>
  allProfiles.filter(p => p.Team === 'Sponsorship')
)

const tech = computed(() =>
  allProfiles.filter(p => p.Team === 'Tech')
)
</script>

<style scoped>

.h3 {
    text-align: center;
}

.heading {
  margin-bottom: 2rem;
}

.box {
  background-color: rgba(56, 104, 62, 0.2);
  padding: 3rem 2rem;
  border-radius: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}

.container {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
}

.row {
    display: flex;
    justify-content: center;
    gap: 2rem;
    width: 100%;
}

.col {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.name {
    color: white;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px; 
  box-sizing: border-box;
}

</style>
  