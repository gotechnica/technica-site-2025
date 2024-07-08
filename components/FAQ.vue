<template>
    <div class="faq-section-wrapper row row-cols-1 row-cols-md-2" v-if="mounted">
      <div class="col">
        <FAQButton
          v-for="(qa, index) in qaList.slice(0, Math.round(qaList.length / 2))"
          :key="qa.question"
          :question="qa.question"
          :answer="qa.answer"
          :collapse-id="'collapse-' + index"
          :faq-id="faqId"
        />
      </div>
  
      <div class="col">
        <FAQButton
          v-for="(qa, index) in qaList.slice(
            Math.round(qaList.length / 2),
            qaList.length
          )"
          :key="qa.question"
          :question="qa.question"
          :answer="qa.answer"
          :collapse-id="'collapse-' + (index + Math.round(qaList.length / 2))"
          :faq-id="faqId"
        />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  interface QA {
    question: string;
    answer: string;
  }
  const props = defineProps<{
    qaList: QA[];
    faqId: string;
  }>();
  
  const mounted = ref(false);
  onMounted(() => {
    mounted.value = true;
  });
  </script>
  
  <style scoped lang="scss">
  .faq-section-wrapper {
    border-radius: 33px;
    background: $LIGHTGREEN;
    padding: 25px 15px 25px 15px;
    color: black;
    margin: auto;
    width: 90%;
    border: 5px solid $DARKGREEN;
  }
  
  @media screen and (max-width: 768px) {
    .faq-section-wrapper {
      width: 97%;
    }
  }
  
  </style>