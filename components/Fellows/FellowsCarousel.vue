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
		<div v-if="card.type === 'quote'" class="card-content quote">
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
		  :src="`/fellows/${card.image}`"
		/>
	  </div>
	</div>
  </template>
  
<script setup lang="ts">
import type { FellowCard } from '~/components/Fellows/FellowsCards';

// Carousel state
const props = defineProps<{
	initialCards: FellowCard[];
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
		const maxNumCols = 4 - translateOffset.value;

		while (numCols < maxNumCols) {
		const card = cards.value[cards.value.length - 1] as FellowCard;
		numCols += 2;
		cards.value.pop();
		cards.value.unshift(card);
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
    const maxNumCols = 4 + translateOffset.value;

    while (numCols < maxNumCols) {
      const card = cards.value[0] as FellowCard;
      const addedNumCols = 2;

      if (numCols + addedNumCols > maxNumCols) {
        break;
      }
      numCols += addedNumCols;
      cards.value.shift();
      cards.value.push(card);
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
	translatePercent.value = - 300 - translateOffset.value * 25;
	innerStyles.value = {
	  transition: 'none',
	  transform: `translateX(${translatePercent.value}%)`,
	};
  }
  
  // Allow parent Fellow component to control child Carousel components
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
	width: 50%;
	border: none;
	border-radius: 0;
	vertical-align: top;
	white-space: normal;
	aspect-ratio: 9/15;
	color: $CREAM;
  
	&.wide {
	  width: 50%;
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
	
	& .quote {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 2rem;

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

	@media screen and (max-width: 850px) {
		h3 {
			font-size: 95%;
		}

		height: 20rem;
	}

	@media screen and (max-width: 1200px) {
		height: 25rem;

		h3 {
			font-size: 120%;
		}
	}


	@media screen and (max-width: 450px) {
		p {
			font-size: 75%;
		}

		h3 {
			font-size: 85%;
		}

		height: 19rem;
	}
}
</style>
  