<template>
  <div class="tracks-wrapper">
    <div class="card-row">
      <TracksIconCard
        borderColor="#8E1E4D"
        padding="10% 7% 7% 7%"
        iconLink="general-circle-icon.svg"
        altText="magic wand with pink bg"
        heading="General"
        description="For any and all hackers! Come build to your heart's content using hardware, software, or anything you want with other hackers. Hackers can be students, designers, or just any tech-lovers out there. Hackers of all skill levels are welcomed and supported!"
      />
      <TracksIconCard
        borderColor="#00617E"
        padding="10% 7% 7% 7%"
        iconLink="beginner-circle-icon.svg"
        altText="flower with blue bg"
        heading="Beginner"
        description="New to hackathons? Don't know how to code? No worries! You'll be provided with dedicated resources to help you be successful at Technica and beyond. This track begins with exclusive workshops a few weeks before Technica, and includes everything from an introduction to hackathons to universal coding and logic concepts."
      />
    </div>
    <div class="card-row">
      <TracksIconCard
        borderColor="#4E1E74"
        padding="10% 7% 7% 7%"
        iconLink="research-circle-icon.svg"
        altText="chemical beakers with purple bg"
        heading="Research"
        description="Calling all undergraduates interested in research! Come explore the fields of research within computer science. You will get to work hands-on with faculty researchers and peers to address social issues using technology and research! This track is a separate 3-day event taking place during Technica weekend."
      />
      <TracksIconCard
        borderColor="#8C6E08"
        padding="10% 7% 7% 7%"
        iconLink="startup-circle-icon.svg"
        altText="flaming hammer with yellow bg"
        heading="Startup"
        description="Interested in the business side of building a project? Join startup track! Featuring both workshops before and during Technica weekend, startup track is a unique opportunity to explore an alternate dimension of project building that you won't want to miss out on!"
      />
    </div>
    <div class="card-row">
      <TracksIconCard
        class="last-card"
        borderColor="#4E23AA"
        padding="10% 7% 7% 7%"
        iconLink="exploratory-circle-icon.svg"
        altText="10-sided die with purple bg"
        heading="Exploratory"
        description="The Exploratory track is designed for those who aren’t solely interested in coding but want to learn about the applications of computer science to other fields.
Participants have the opportunity to look beyond conventional careers in computer science and explore different careers and their intersections with tech through curated workshops hosted by diverse individuals.
This track is open to both in-person and virtual hackers.
"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.tracks-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 !important;
}

.card-row {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.last-card {
  width: 50%;
}

@media screen and (max-width: 768px) {
  .card-row {
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .last-card {
    width: 100%;
  }
}
</style>
