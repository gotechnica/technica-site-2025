<!-- This page provides more details about each track at Technica -->
<template>
  <title>Tracks</title>
  <div class="container">
    <div class="row intro">
      <H1 class="title"> Tracks </H1>
      <p>
        Each track is designed to best accommodate a hacker's interests and
        skill level, and will have track-specific mentors for support and
        guidance during the weekend of Technica. During registration, hackers
        will select one of the four tracks they wish to participate in.
        <b>This year we are introducing a new Exploratory Track!</b>
        <br /><br />
        During the weeks leading up to Technica, there will be virtual workshops
        hosted that we highly recommend hackers to attend! Please note that some
        tracks may have limited capacity to be announced.
      </p>

      <br /><br /><b
        >The beginner and startup tracks are in-person registrations only and
        have limited spots.</b
      >
    </div>

    <TracksIconCard
        class="track-row"
        borderColor="#8E1E4D"
        padding="8% 5% 5% 5%"
        iconLink="general-circle-icon.svg"
        altText="magic wand with pink bg"
        heading="General Track"
        description="The general track is for any and all hackers! Individuals of all skill levels and with any interests and curiosities are welcomed and supported. In this track, you will bring creative ideas to life through building projects that use software, hardware, or anything that is reachable. You will have the opportunity to connect and collaborate with hackers of diverse backgrounds, experiences, and interests on a project of your own."
      />

    <TracksIconCard
        class="track-row"
        borderColor="#00617E"
        padding="8% 5% 5% 5%"
        iconLink="beginner-circle-icon.svg"
        altText="flower with blue bg"
        heading="Beginner Track"
        description="The beginner track is designed for hackers who are new to hackathons and/or computer science! In this track, you will be provided with dedicated resources to help you explore computer science and its applications to your areas of interest (e.g. life sciences, arts & humanities, technology, etc.), learn technical skills such as coding, and succeed at Technica and beyond.

        Hackers are highly encouraged to attend the beginner track's exclusive workshops. The guided and hands-on workshops will help you set up your programming environment, introduce you to web development, and more! Get excited for the opportunity to build your own working website and collaborate with other hackers on meaningful projects.
        
        This track is for in-person attendance only."
      />
    
    <TracksIconCard
        class="track-row"
        borderColor="#4E1E74"
        padding="8% 5% 5% 5%"
        iconLink="research-circle-icon.svg"
        altText="chemical beakers with purple bg"
        heading="Research Track"
        description="The research track is aimed towards undergraduate students interested in research! Participants will explore the fields of research and practical applications within computing fields. In this track, student teams will come together and collaboratively work together to solve a research challenge presented by faculty. Computing faculty and graduate students will serve as mentors on projects in their research areas.
        
        Along with providing hands-on research experience, the research will both introduce students to the basics of computer science research (CSR) and highlight the exciting opportunities that come with pursuing a graduate degree in computer science.
        
        Note that registering for this track does not guarantee admittance; you will receive another form in your registration email that you must also complete to be eligible for the research track.
        
        You must be a college/university student to register. Preference will be given to undergraduates."
      />

      <TracksIconCard
        class="track-row"
        borderColor="#8C6E08"
        padding="8% 5% 5% 5%"
        iconLink="startup-circle-icon.svg"
        altText="flaming hammer with yellow bg"
        heading="Startup Track"
        description="The startup track is for individuals interested in learning and experiencing the business side of building a project. In this track, Technica is partnering with Startup Shell to provide you with hands-on experience with topics including teamwork, brainstorming, effective presenting and pitching, and turning ideas into a business. Featuring workshops before and during Technica weekend, the startup track is a unique opportunity to explore an alternate dimension of project building that hackers should not miss out on!
        
        This track is for in-person attendance only."
      />

    <TracksIconCard
        class="track-row"
        borderColor="#4E23AA"
        padding="8% 5% 5% 5%"
        iconLink="exploratory-circle-icon.svg"
        altText="10-sided die with purple bg"
        heading="Exploratory"
        description="The Exploratory track is designed for those who aren’t solely interested in coding but want to learn about the applications of computer science to other fields.

        Participants have the opportunity to look beyond conventional careers in computer science and explore different careers and their intersections with tech through curated workshops hosted by diverse individuals.
        
        This track is open to both in-person and virtual hackers.
        "
    />

    <div class="row contact">
      <h3 class="contact-title">Still Have A Question?</h3>
      <p class="contact-email">
        Email us at
        <a href="mailto:events@gotechnica.org">events@gotechnica.org</a> and
        we'll be happy to help!
      </p>
    </div>
    <StickyButton></StickyButton>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.track-row {
  margin-bottom: 1rem;
}

h3,
.contact-email {
  text-align: center;
}

.intro {
  margin: 0 0.2rem 3rem 0.2rem;
}

.container {
  margin-bottom: 5rem;
}

.title {
  margin: 3.5rem 0 2.5rem 0;
}

.contact-title {
  color: $PINK;
}

.contact {
  margin: 0;
}

.contact-email {
  margin-top: 1rem;
}

a {
  color: $DARK-PURPLE;
}
</style>
