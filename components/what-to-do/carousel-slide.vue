<!-- Uses vue3-carousel--->

<!-- Template -->
<template>
  <div class="card">
    <div class="card-contents">
      <div class="image-container" @click="toggleText">
        <img :src="`${whatToDoImg}`" alt="What To Do Image" />
        <div v-if="showDesc" class="overlay-text">
          <p>{{ whatToDoDesc }}</p>
        </div>
        <div class="card-text">
          <div class="clickable-text">
            <h3>{{ whatToDoTitle }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    whatToDoImg: {
      type: String,
      required: true,
    },
    whatToDoTitle: {
      type: String,
      required: true,
    },
    whatToDoDesc: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      showDesc: false,
    };
  },
  methods: {
    toggleText() {
      this.showDesc = !this.showDesc;
    },
  },
});
</script>

<style scoped>
.card {
  position: relative;
  display: contents;
  flex-direction: column;
  align-content: center;
  width: 50vw;
  height: fit-content;
  border-radius: 1rem;
  border-width: 0;
  background-color: transparent;
  transition: transform 0.6s;
  visibility: visible;
}

.card-contents {
  border: 0.7rem solid #1e638e;
  border-radius: 20px;
  background-color: #fffbef;
  width: 100%;
  height: fit-content;
  position: relative;
}

.image-container {
  position: relative;
  padding: 2rem 0;
}

.image-container img {
  border-radius: 0.5rem;
  max-width: 75%;
}

.card-text {
  position: relative;
  justify-content: center;
}

.overlay-text {
  position: absolute;
  top: 20%;
  background-color: rgba(0, 0, 0, 0.805);
  color: #fffbef;
  border: 0.3rem solid #6b80a2;
  border-radius: 30px;
  padding: 2rem;
  margin: 0.5rem;
  z-index: 10;
}

.clickable-text {
  cursor: pointer;
  padding: 0.5rem;
  transition: all 0.3s ease;
}

.clickable-text:hover {
  text-shadow: 0 0 10px rgba(130, 156, 237, 10);
}

h3 {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 2.5rem;
}

/* responsivity */
@media screen and (max-width: 1300px) {
  p {
    font-size: 1.2vw;
  }
}

@media screen and (max-width: 992px) {
  .card,
  .card-contents {
    height: fit-content;
  }
  .overlay-text {
    top: 0;
  }

  p {
    font-size: 80%;
  }
}

@media screen and (max-width: 768px) {
  .card,
  .card-contents {
    height: fit-content;
  }
}

@media screen and (max-width: 630px) {
  .card {
    visibility: hidden;
  }

  .mobile {
    visibility: visible;
  }
}
</style>
