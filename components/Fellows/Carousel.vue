<!-- Hey, please ignore this file for now, but don't delete it!! 
 
I have installed a carousel library and redid the fellows carousel, could be useful for later but not done yet!!-->


<template>
<!-- 
    <Carousel v-bind="carouselConfig">

    <Slide v-for="(card, index) in cards" :key="index" :class = "[card.color]">

        <div class="card-content image" :class="{ wide: card.wide }">
            <img :src="`/fellows/${card.image}`"/>
        </div>
        
        <div class="card-content quote" :class="{ wide: card.wide }">
            <div>
                <h3>“</h3>
                <p> {{ !isShorten ? card.quote : card.shortenQuote}} </p>
                <h3>”</h3>
            </div>
            <h3 class="name"> {{ card.quoteName }} </h3>
        </div>

    </Slide>

    <template #addons>
      <Navigation />
    </template>

  </Carousel>
    -->
</template>
<!-- 
<script setup lang = "ts">
    // import 'vue3-carousel/carousel.css'
    import { type FellowCard } from '~/components/Fellows/FellowsCards';
    import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

    const carouselConfig = {
      itemsToShow: 1,
      wrapAround: true,
    }

    const props = defineProps<{
	initialCards: FellowCard[];
	isShorten: boolean
    }>();

    const cards = ref(props.initialCards);  
</script>


<style scoped lang="scss">

.carousel {
    display: flex;
	white-space: nowrap;
    background-color: pink;
    padding: 0;
    margin: 0;
    aspect-ratio: 5/4;
    height: 32rem;
    border-radius: 20px;
}

.carousel__slide{
	display: flex;
    flex-direction: row;
	border: none;
	border-radius: 0;
	white-space: normal;
	color: $CREAM;
    border: 10px solid white;
    height: 100%;
    border-radius: 30px;
  
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
  
	//Card types
	& .card-content {
	  width: 50%;
      height: 100%;
      border: 1px solid white;
      margin: 0;
      padding: 0;
	}
	
	& .quote {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 2rem;
		height: 100%;

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
			position: relative;
			overflow-y: auto;
			scrollbar-width: thin;
			padding-right: 20px;
		}
  
		.name {
			width: 100%;
			font-family: Poppins;
			text-align: right;
		}
	}

.image {
    opacity: 0.7;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    

    img {
      height: 100%;
    //   width: 50%;
    }
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

<style lang = "scss">
/* Tried to modify the scrollbar to look better, but style won't apply??? */

 .card .quote p::-webkit-scrollbar {
 	background-color: transparent;
	width: 5px;
 }

.card .quote p::-webkit-scrollbar-thumb {
 	border-radius: 3px;
}

 .card .quote p::-webkit-scrollbar-track {
	background: transparent;
 }

 .card .quote p::-webkit-scrollbar-button {
 	display: none;
	height: 0;

}

</style> 
-->