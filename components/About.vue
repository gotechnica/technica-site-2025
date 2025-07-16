<template>
  <Header><a href='register' style="color: #f1acdc">Registrations are now open!</a></Header>
  <div class="wrapper">
    <Header>About Technica</Header>
    <div class="row">
      <div class="col-md-6 info-box">
        <p>
          Technica is the world's largest hackathon for underrepresented genders 
          in tech. The hackathon is hosted annually at the University of Maryland, 
          and is a weekend jam-packed with swag, workshops, networking, and awesome projects!

        </p>
        <p>
          Last year we had over 800+ hackers participate (both in-person and online), 
          comprised of underrepresented groups from many different backgrounds. We 
          had 121 awesome projects submitted, many of which that tackle real-world 
          issues with unique solutions!
        </p>
      </div>
      <div class="col-md-6">
        <div class="tv-wrapper">
          <img src="public\about\intro_vid_container_transparent.svg" alt="TV frame" class="tv-frame" />
          <iframe
            class="tv-video"
            src="https://www.youtube.com/embed/YZZYDJbuJF8?si=VeMp8j6L7SlOkPoi"
            frameborder="0"
            allowfullscreen
          >
          </iframe>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup="ts"></script>

<style scoped lang="scss">

.wrapper {
  padding: 2rem;
}

.row {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
}

.col-md-6 {
  flex: 1;
}

.tv-wrapper {
  position: relative;
  width: 100%;
  max-width: 700px;
  aspect-ratio: 16 / 9;
}

.tv-frame {
  width: 100%;
  height: auto;
  display: block;
}

.tv-video {
  position: absolute;
  top: 16%;
  left: 9%;
  width: 65%;
  height: 69%;
  border-radius: 4px;
  clip-path: inset(0 round 8px);
}

.info-box {
  background-color: #1a1b27;
  color: #ffffff;
  padding: 2rem;
  border-radius: 16px;
  border: 2px solid #ffffff;
  font-size: 1.1rem;
  line-height: 1.6;
  box-shadow:
    0 0 20px rgba(255, 255, 255, 0.4),
    0 0 40px rgba(150, 120, 255, 0.3),
    0 0 60px rgba(100, 120, 255, 0.2);
}

p {
  color: #eaeaea;
}

@media (max-width: 1024px) {
  .row {
    flex-direction: column;
    align-items: center;
  }

  .col-md-6 {
    width: 100%;
  }
}

</style>
