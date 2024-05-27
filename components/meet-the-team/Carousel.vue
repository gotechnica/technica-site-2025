<template>
  <div
    :style="{
      transition: `transform ${transitionDuration}ms`,
      ...innerStyles,
    }"
    class="carousel"
  >
    <div
      v-for="(card, cardIndex) in cards"
      :key="cardIndex"
      class="card"
      :class="[card.color, { wide: card.wide }]"
    >
      <div v-if="card.type === 'team'" class="card-content team">
        <h3>
          {{ card.team }}
        </h3>
      </div>

      <div v-else-if="card.type === 'quote'" class="card-content quote">
        <div>
          <h3>“</h3>
          <p>
            {{ !isShorten ? card.quote : card.shortenQuote}}
          </p>
        </div>
        <h3 class="name">
          {{ card.quoteName }}
        </h3>
      </div>

      <img
        v-else-if="card.type === 'image'"
        class="card-content image"
        :class="{ wide: card.wide }"
        :src="`/meet-the-team/${card.image}`"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MeetTheTeamCard } from '~/components/meet-the-team/meet-the-team-cards';

// Carousel state
const props = defineProps<{
  initialCards: MeetTheTeamCard[];
  isMobile: boolean;
  isShorten: boolean
}>();
const cards = ref(props.initialCards);

// Carousel animation
const innerStyles = ref({});
const transitioning = ref(false);
const translatePercent = ref(-300);
const translateOffset = ref(0);
const transitionDuration = ref(750);

/** Go to the previous carousel screen. */
function prev() {
  if (transitioning.value) return;
  transitioning.value = true;

  moveRight();

  setTimeout(() => {
    let numCols = 0;
    const maxNumCols = (props.isMobile ? 2 : 4) - translateOffset.value;

    while (numCols < maxNumCols) {
      const card = cards.value[cards.value.length - 1] as MeetTheTeamCard;
      numCols += card.wide ? 2 : 1;
      cards.value.pop();
      cards.value.unshift(card);
    }

    if (numCols === (props.isMobile ? 1 : 3)) {
      translateOffset.value = 0;
    } else if (numCols === (props.isMobile ? 3 : 5)) {
      translateOffset.value = 1;
    }

    resetTranslate();
    transitioning.value = false;
  }, transitionDuration.value);
}

/** Go to the next carousel screen. */
function next() {
  if (transitioning.value) return;
  transitioning.value = true;

  moveLeft();

  setTimeout(() => {
    let numCols = 0;
    const maxNumCols = (props.isMobile ? 2 : 4) + translateOffset.value;

    while (numCols < maxNumCols) {
      const card = cards.value[0] as MeetTheTeamCard;
      const addedNumCols = card.wide ? 2 : 1;

      if (numCols + addedNumCols > maxNumCols) {
        break;
      }
      numCols += addedNumCols;
      cards.value.shift();
      cards.value.push(card);
    }

    if (numCols === (props.isMobile ? 1 : 3)) {
      translateOffset.value = 1;
    } else if (numCols === (props.isMobile ? 3 : 5)) {
      translateOffset.value = 0;
    }

    resetTranslate();
    transitioning.value = false;
  }, transitionDuration.value);
}

/** Animate moving to previous carousel screen. */
function moveLeft() {
  innerStyles.value = {
    transform: `translateX(${translatePercent.value}%) translateX(-100%)`,
  };
}

/** Animate moving to next carousel screen. */
function moveRight() {
  innerStyles.value = {
    transform: `translateX(100%) translateX(${translatePercent.value}%)`,
  };
}

/** Reset position after carousel animation. */
function resetTranslate() {
  translatePercent.value =
    -(props.isMobile ? 650 : 300) -
    translateOffset.value * (props.isMobile ? 50 : 25);
  innerStyles.value = {
    transition: 'none',
    transform: `translateX(${translatePercent.value}%)`,
  };
}

// Allow parent MeetTheTeam component to control child Carousel components
defineExpose({
  prev,
  next,
});

// Start carousel in initial position
onMounted(() => {
  resetTranslate();
});
</script>

<style scoped lang="scss">
.carousel {
  white-space: nowrap;
}

.card {
  display: inline-block;
  width: 25%;
  border: none;
  border-radius: 0;
  vertical-align: top;
  white-space: normal;
  aspect-ratio: 9/15;
  color: $CREAM;

  &.wide {
    width: 50%;
    aspect-ratio: 18/15;
  }

  // Card colors
  &.purple {
    background-color: $LIGHT_PURPLE;
  }
  &.pink {
    background-color: $PINK;
  }
  &.blue {
    background-color: $BLUE;
  }
  &.cream {
    background-color: $CREAM;
    color: $DARK_PURPLE;
  }

  // Card types
  & .card-content {
    width: 100%;
    height: 100%;
  }
  & .team {
    display: flex;
    align-items: flex-end;
    padding: 1rem;

    h3 {
      width: 100%;
      text-align: right;
    }
  }
  & .quote {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem;
    text-align: left;

    @media screen and (max-width: 1450px) {
      padding: 2rem;
    }

    @media screen and (max-width: 992px) {
      padding: 1rem;
    }
    
    @media screen and (max-width: 768px) {
      padding: 10%;
    }

    p {
      margin-top: -0.5rem;
      font-size: 88%;
    }

    .name {
      width: 100%;
      font-family: Poppins;
      text-align: right;
    }
  }
  & .image {
    object-fit: cover;
    opacity: 0.7;
  }

  @media screen and (max-width: 768px) {
    width: 50%;

    &.wide {
      width: 100%;
    }

    height: auto;
  }

  @media screen and (max-width: 900px) {
    h3 {
      font-size: 95%;
    }

    height: 20rem;
  }

  @media screen and (max-width: 450px) {
    p {
      font-size: 75%;
    }

    height: 17rem;
  }
}
</style>
