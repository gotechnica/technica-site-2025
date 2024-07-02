<template>
  <div v-if="mounted" class="accordion">
    <div @click="toggle" class="row faq-header mt-2">
      <!-- Accordion header -->
      <div class="col-9">
        <button class="faq-btn">
          {{ question }}
        </button>
      </div>
      <div class="col">
        <div class="faq-btn">
          <svg
            :id="collapseId + '-icon'"
            :class="faqId"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-plus"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
            />
          </svg>
        </div>
      </div>
    </div>
    <hr />

    <!-- Answer popup -->
    <div class="answer-wrapper">
      <div :id="collapseId" :class="[faqId, 'answer-container']">
        <div class="card">
          <p class="card-text" v-html="answer" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  question: string;
  answer: string;
  collapseId: string;
  faqId: string;
}>();

const collapseId = ref(props.faqId + '-' + props.collapseId);
const faqId = ref(props.faqId);
const mounted = ref(false);

const toggle = (evt: Event) => {
  const icon = document.getElementById(collapseId.value + '-icon');
  const ans = document.getElementById(collapseId.value);

  if (!ans) {
    return;
  }

  if (icon?.classList.contains('rotated')) {
    ans.style.height = '0';
    icon.classList.remove('rotated');
  } else {
    ans.style.height = ans.children[0].clientHeight.toString() + 'px';
    icon?.classList.add('rotated');
  }

  document
    .querySelectorAll('.faq-btn > svg' + '.' + faqId.value)
    .forEach((icon) => {
      if (icon !== document.getElementById(collapseId.value + '-icon')) {
        icon?.classList.remove('rotated');
      }
    });

  document
    .querySelectorAll('.answer-container' + '.' + faqId.value)
    .forEach((a) => {
      if (a !== ans) {
        (a as HTMLElement).style.height = '0';
      }
    });
};

onMounted(() => {
  mounted.value = true;
});
</script>

<style scoped lang="scss">
.faq-header {
  align-items: center;
  cursor: pointer;
}

.faq-btn {
  background-color: transparent;
  border: none;
  width: 100%;
  text-align: left;
  color: #000000;
  font-weight: 500;
  font-size: 18px;
}

.card-text {
  margin-bottom: 20px;
  padding: 0;
  color: black;
}

.answer-container {
  color: #000000;
  font-weight: 500;
  font-size: 18px;

  transition: 0.25s;
  overflow: hidden;
  height: 0;
}

.bi {
  margin-right: 0.5rem;
  float: right;
  transition-duration: 0.4s;
}

.card {
  background-color: transparent;
  border: none;
  padding: 0 1rem;
  margin-top: 0rem;
  border-radius: 1rem;
}

.rotated {
  transform: rotate(45deg);
}

hr {
  border: none;
  height: 2px;
  opacity: 1;
  background: #000000;
}
</style>
