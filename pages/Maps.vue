<template>
  <title>Maps</title>
  <div class="container">
    <!-- Page title -->
    <div class="overall">
      <div class="title">
        <div style="margin-top: 1rem"></div>
        <Header>Maps</Header>
      </div>

      <!-- Overall image (SVG with PNG fallback) -->
      <div class="center">
        <picture>
          <source srcset="/maps/hacker_map_opencenter.svg" type="image/svg+xml" />
          <img
            class="map"
            src="/maps/hacker_map_opencenter.png"
            alt="Technica 2025 Overall Map"
          />
        </picture>
      </div>
    </div>

    <!-- CTA links -->
    <section class="venue">
      <div class="links">
        <a
          class="link-button"
          href="https://discover.matterport.com/space/xWTzbt4JkkJ"
          target="_blank"
          rel="noopener"
        >
          🏢 Explore in 3D (Matterport)
        </a>
        <a
          class="link-button outline"
          href="https://www.google.com/maps/place/College+Park+Marriott+Hotel+%26+Conference+Center/@38.9862534,-76.954447,18z/data=!4m9!3m8!1s0x89b7c68ebdd0925b:0x7075c001ebfa980b!5m2!4m1!1i2!8m2!3d38.986374!4d-76.954442!16s%2Fg%2F12619fvs9?entry=ttu"
          target="_blank"
          rel="noopener"
        >
          📍 Open in Google Maps
        </a>
      </div>
    </section>

    <!-- PNG venue floor plan (centered) -->
    <section class="venue-svg">
      <h3>Venue Floor Plan — College Park Marriott</h3>
      <img
        class="venue-map"
        src="/maps/hacker_map_opencenter.png"
        alt="College Park Marriott venue floor plan"
      />
    </section>

    <!-- Embedded Google Map -->
    <section class="venue">
      <div class="map-embed">
        <iframe
          title="College Park Marriott Map"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=College+Park+Marriott+Hotel+%26+Conference+Center&output=embed"
        ></iframe>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
/* === 2025 Color Theme === */
:root {
  --t-bg: #0e0f1a;
  --t-panel: #1a1b27;
  --t-muted: #cadaea;
  --t-accent: #f1adcd;
  --t-accent-2: #96b7ff;
  --t-white: #ffffff;

  /* Navbar height — keep in sync with .navbar { min-height: 84px } */
  --nav-h: 84px;
}

/* Page container: adds consistent space below sticky navbar */
.container {
  align-items: center;
  margin-bottom: 5rem;
  background: var(--t-bg);
  color: var(--t-white);
  padding-top: calc(var(--nav-h) + 24px); /* consistent with other pages */
}

/* Page Title Section */
.title {
  /* remove extra page-specific padding so spacing matches other pages */
  padding-top: 0;
  text-align: center;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: var(--t-muted);
  margin-top: 0.5rem;
  font-size: 1.2rem;
  text-shadow: 0 0 6px rgba(150, 183, 255, 0.5);
}

/* Map Styles */
.map {
  max-width: 100vw;
  margin-top: 2rem;
  height: auto;
  border-radius: 12px;
  border: 1px solid rgba(202, 218, 234, 0.35);
  box-shadow: 0 6px 20px rgba(202, 218, 234, 0.15);
}

.center {
  display: flex;
  justify-content: center;

  @media (max-width: 1100px) {
    margin-right: 0;
  }
}

/* Buttons section (CTA) */
.venue {
  margin-top: 3rem;
  padding: 2rem 1rem;
  border-radius: 16px;
  border: 1px solid var(--t-muted);
  background: linear-gradient(
    135deg,
    rgba(166, 225, 255, 0.08),
    rgba(205, 189, 255, 0.08)
  );
  text-align: center;
  box-shadow: 0 6px 18px rgba(202, 218, 234, 0.1);
}

.links {
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0.5rem 0 0.5rem 0;
}

/* Primary button (gradient) */
.link-button {
  display: inline-block;
  padding: 0.8rem 1.6rem;
  border-radius: 999px;
  background: linear-gradient(135deg, #f1adcd, #96b7ff);
  color: #fff;
  font-weight: 700;
  letter-spacing: 0.4px;
  text-decoration: none;
  box-shadow: 0 0 18px rgba(150, 183, 255, 0.35);
  transition: all 0.3s ease;
}

.link-button:hover {
  transform: scale(1.05);
  box-shadow: 0 0 25px rgba(241, 173, 205, 0.6);
  filter: brightness(1.15);
}

/* Outline button (secondary) */
.link-button.outline {
  background: rgba(255, 255, 255, 0.08);
  border: 2px solid #96b7ff;
  color: #ffffff;
  font-weight: 700;
  text-shadow: 0 0 8px rgba(150, 183, 255, 0.6);
  box-shadow: 0 0 15px rgba(150, 183, 255, 0.2);
}

.link-button.outline:hover {
  background: linear-gradient(135deg, rgba(241, 173, 205, 0.15), rgba(150, 183, 255, 0.15));
  border-color: #f1adcd;
  transform: scale(1.05);
}

/* Venue map block (PNG) */
.venue-svg {
  margin-top: 2rem;
  text-align: center;
  padding: 1rem;
}

.venue-svg h3 {
  color: #ffffff;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
  text-shadow: 0 0 8px rgba(241, 173, 205, 0.6),
               0 0 20px rgba(150, 183, 255, 0.4);
}

.venue-map {
  display: block;
  margin: 0 auto 0.5rem;     /* center horizontally */
  width: min(1080px, 95%);   /* match the rest of the page’s max width */
  height: auto;
  border-radius: 12px;
  border: 1px solid rgba(202, 218, 234, 0.35);
  box-shadow: 0 6px 20px rgba(202, 218, 234, 0.15);
  background: rgba(255, 255, 255, 0.01);
  image-rendering: auto;
}

/* Embedded Google Map */
.map-embed {
  position: relative;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(202, 218, 234, 0.35);
  box-shadow: 0 6px 20px rgba(202, 218, 234, 0.15);
}

.map-embed iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
