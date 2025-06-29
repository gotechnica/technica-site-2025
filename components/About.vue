<template>
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
          <img src="public\about\intro_vid_container.svg" alt="TV frame" class="tv-frame" />
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


.col-md-6 {
  margin-top: 3%;
}

.tv-wrapper {
  position: relative;
  width: 700px; 
  height: 360px; 
}

.tv-frame {
  position: relative;
  z-index: 0;
}

.tv-video {
  position: absolute;
  top: 16%;
  left: 12%;
  width: 76%;
  height: 68%;
  z-index: 2; 
  border-radius: 4px;
  box-shadow: 0 0 0 9999px #1a1b27; 
  clip-path: inset(0 round 8px); 
}

.info-box {
  background-color: #1a1b27;
  color: #ffffff;
  padding: 2rem;
  border-radius: 16px;
  border: 2px solid #ffffff;

  box-shadow:
    // white outer glow
    0 0 20px rgba(255, 255, 255, 0.4),
    // purple haze
    0 0 40px rgba(150, 120, 255, 0.3),
    // soft blue aura
    0 0 60px rgba(100, 120, 255, 0.2);

  font-size: 1.1rem;
  line-height: 1.6;
  transition: box-shadow 0.3s ease;
}
p {
  color: $DARKWHITE;
}
</style>
