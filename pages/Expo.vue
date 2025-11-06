<template>
  <div>
    <div style="margin-top: 5rem"></div>
    <Header>Expo</Header>
    <div style="margin-top: 5rem"></div>
    <div class="container mx-auto">
      <div>
        <div>
          <!-- Expo Has Not Started! -->
          <p class="table-description">
            A schedule of all demo times and their corresponding locations will
            published here after the submission period closes. <br />Sit tight!
          </p>

          <!-- Expo Has Ended! -->
          <!-- <p class="table-description">
           Expo has ended! Thank you to all that participated!
          </p> -->

          <!-- Expo Message & Table -->
          <p class="table-description">
            Below is the list of demos and their locations, along with a map
            showing all in-person judging areas.
          </p>
          <!-- Expo Map -->
          <img
            src="/maps/hacker_map_opencenter.svg"
            alt="Expo Map"
            class="expo-map"
          />
          <br /><br />
          <ExpoTable :items="formatSchedule(getFullExpoSchedule())" />
        </div>
        <div style="margin-top: 5rem"></div>
        <Header>Frequently Asked Questions</Header>
        <div style="margin-top: 5rem"></div>
        <FAQ class="faq-section" faqId="faq" :qaList="qaList" />
      </div>
    </div>
    <div>
      <StickyButton v-if="showStickyUp" />
      <StickyDown v-else />
    </div>
  </div>
</template>

<script>
import ExpoTable from '../components/expo/ExpoTable.vue';
import data from '../static/final.json';
export default {
  name: 'ExpoPage',
  components: {
    ExpoTable,
  },
  data() {
    return {
      showStickyUp: false,
      schedule: null,
      dataLoaded: false,
      qaList: [
        {
          question: 'Rules',
          answer:
            "Hackers will be allowed to submit projects that they have worked on only during the course of Technica 2025's hacking period. Any use of prior projects is strictly prohibited. Additionally, any plagiarized projects from the internet or from fellow hackers is prohibited. Hackers found in violation of the above rules will be disqualified from all prize categories and will be reported to MLH.<br><br>Projects can be submitted to a maximum of THREE Technica prize categories, and THREE Sponsor prize categories. You will have the opportunity to demo your project to judges from each prize category you submit to, so if you submit your project to four prize categories, you will be signed up to demo four separate times.",
        },
        {
          question: 'Submission',
          answer:
            'You will be required to submit information about you and your hack to Devpost by 12:00pm EST on Sunday, 11/16. After the submission deadline, no hacks will be accepted, with absolutely no exceptions. Ensure that you have ample time to submit your project before the deadline.',
        },
        {
          question: 'Where will I demo?',
          answer:
            'Expo will be conducted in a hybrid format. During Expo, in-person hackers must be seated in the hacking area, at their assigned table.<br><br>If you are demoing in person, the sponsors will come to you during the allotted time slot. Otherwise, you will join the sponsor booth via Gather.',
        },
        {
          question: 'If you are attending Expo virtually',
          answer:
            'Find your team name by searching in the table above and join the corresponding linked Gather room.',
        },
        {
          question: 'Judging Process',
          answer:
            'Demos are 5 minutes total: 2 minutes to present your project and 3 minutes for Q&A with judges. Judges will score each hack based on the category criteria, and winners will be chosen at the end of Expo.',
        },
      ],
    };
  },
  async mounted() {
    this.schedule = data;
  },
  beforeMount() {
    window.addEventListener('scroll', this.showButton);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.showButton);
  },
  methods: {
    showButton() {
      var currentScrollPosition = window.scrollY;
      var button = document.getElementById('down-button');
      var pageHeight = document.documentElement.scrollHeight;
      var windowHeight = window.innerHeight;
      var scrollPosition =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop;
      if (currentScrollPosition < this.scrollPosition) {
        this.showStickyUp = true;
      } else {
        this.showStickyUp = false;
      }
      this.scrollPosition = window.scrollY;
    },
    getFullExpoSchedule() {
      return this.schedule;
    },
    formatSchedule(schedule) {
      const items = [];

      const tables = {
        Vampires: { cols: 'ABCDE', rows: ['1-1', '1-2', '2-1', '2-2'] },
        Zombies: { cols: 'ABCDE', rows: ['1-1', '1-2', '2-1', '2-2'] },
        Skeletons: { cols: 'FGHIJ', rows: ['3-1', '3-2', '4-1', '4-2'] },
        Ghosts: { cols: 'FGHIJ', rows: ['3-1', '3-2', '4-1', '4-2'] },
      };

      let tableIndex = 0;
      const tableMap = [];
      for (const [category, config] of Object.entries(tables)) {
        const { rows, cols } = config;
        for (let col of cols) {
          for (let row of rows) {
            tableMap[tableIndex] = `${category}\n${col}${row}`;
            tableIndex++;
          }
        }
      }
      if (schedule) {
        //waiting for schedule query
        Object.values(schedule).forEach((k) => {
          if (
            k.sponsor_name != null &&
            !k.sponsor_name.toString().includes('[MLH]') &&
            k.prize_category !== undefined &&
            !k.prize_category.toString().includes('Best Research Track Hack')
          ) {
            const item = {};
            item.team_name = k.team_name;
            let start_time = new Date(k.start_time); //putting actual date object in
            start_time.setHours(start_time.getHours());
            let end_time = new Date(k.end_time);
            end_time.setHours(end_time.getHours());
            item.time = [start_time, end_time];
            item.prize_category = k.prize_category;
            item.sponsor_name = k.sponsor_name;
            item.location =
              k.location != null && !isNaN(Number(k.location))
                ? tableMap[Number(k.location) - 1]
                : k.location != null
                ? k.location.toString()
                : 'Error';

            items.push(item); //boom
          }
        });
      }
      return items;
    },
  },
};
</script>

<style lang="scss" scoped>
@import './styles/base.css';
.expo-map {
  display: block;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
.faq-section {
  margin-bottom: 10rem;
  width: 90%;
}
.filler {
  cursor: text !important;
}
.content-container {
  border-radius: 8px;
  padding: 3rem;
  background-color: var(--color-foreground);
  border-radius: 4px;
  text-align: center;
  margin-bottom: 2rem;
}
.table-description {
  margin: -1rem auto 3rem;
  width: 75%;
}
.loading-spinner {
  width: 3rem;
  height: 3rem;
}
p {
  text-align: center;
}
</style>
