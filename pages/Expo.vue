<template>
  <div>
    <div style="margin-top: 5rem;"></div>
    <Header>Expo</Header>
    <div style="margin-top: 5rem;"></div>
    <div class="container mx-auto">
      <div>
        <div>
          <p class="table-description">
            A schedule of all demo times and their corresponding locations will
            published here after the submission period closes. <br/>Sit tight!
          </p>
          <p class="table-description">
            Below is a list of the demos and corresponding locations, as well as a map with all of the in-person judging locations.
          </p>
          <img src="../static/expo_map.svg">
          <br><br>
          <ExpoTable :items="formatSchedule(getFullExpoSchedule())" />
        </div>
        <div style="margin-top: 5rem;"></div>
        <Header>Frequently Asked Questions</Header>
        <div style="margin-top: 5rem;"></div>
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
import { identifierToKeywordKind } from 'typescript';
import ExpoTable from '../components/expo/ExpoTable.vue';
import data from '../static/actual.json';
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
            "Hackers will be allowed to submit projects that they have worked on only during the course of Technica 2024's hacking period. Any use of prior projects is strictly prohibited. Additionally, any plagiarized projects from the internet or from fellow hackers is prohibited. Hackers found in violation of the above rules will be disqualified from all prize categories and will be reported to MLH.<br><br>Projects can be submitted to a maximum of THREE Technica prize categories, and unlimited Sponsor prize categories. However, you will have the opportunity to demo your project to judges from each prize category you submit to, so if you submit your project to four prize categories, you will be signed up to demo four separate times.",
        },
        {
          question: 'Submission',
          answer:
            'You will be required to submit information about you and your hack to Devpost by 11:30am EDT on Sunday, 10/27. After the submission deadline, no hacks will be accepted, with absolutely no exceptions. Ensure that you have ample time to submit your project before the deadline.',
        },
        {
          question: 'Where will I demo?',
          answer:
            'Expo will be conducted in a hybrid format. During Expo, in-person hackers must be seated in the hacking area, at their assigned table.<br><br>If you are demoing in person, the sponsors will come to you during the allotted time slot. Otherwise, you will join the sponsor booth via Gather.',
        },
        {
          question: 'If you are attending Expo virtually',
          answer:
            'Find your team name by searching in the table above. If you are in-person at The Armory &copy; and need to attend virtually, we have rooms reserved for you! <br>If you are a <b>Hacker</b>, you can go to:<ul><li>Wayne K. Curry</li><li>Jim Henson</li><li>Francis Scott Key</li></ul><br>If you are a <b>Sponsor</b>, you can go to rooms:<ul><li>Salon I</li><li>Salon II</li><li>Salon III</li></ul>',
        },
        {
          question: 'Judging Process',
          answer:
            'Demos will take 5 minutes. You will have 2 minutes to demo your project, then the following 3 minutes to answer questions and discuss your project further with your judges. Judges will evaluate each hack against the criteria of that category. Winners will then be selected at the end of Expo by the judges.',
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
        Spades: { rows: 'ABCDE', cols: 6 },
        Diamonds: { rows: 'ABCDEF', cols: 5 },
        Hearts: { rows: 'ABCDEFGHIJK', cols: 5 },
        Clubs: { rows: 'ABCDE', cols: 6 },
      };
      let tableIndex = 0;
      const tableMap = [];
      for (const [category, config] of Object.entries(tables)) {
          const { rows, cols } = config;
          for (let row of rows) {
              for (let col = 1; col <= cols; col++) {
                  tableMap[tableIndex] = `${category} ${row}${col}`;
                  tableIndex++;
              }
          }
      }
      if (schedule) {
        //waiting for schedule query
        Object.values(schedule).forEach((k) => {
          // if(!('prize_category' in k) || !k.hasOwnProperty('prize_category') || k.prize_category === undefined) {
          //   k.prize_category = k.sponsor_name;
          //   k.sponsor_name = "Technica";
          // }
          if(k.sponsor_name != null && !k.sponsor_name.toString().includes("[MLH]") && (k.prize_category !== undefined && !k.prize_category.toString().includes("Best Research Track Hack"))) {
            const item = {};
            item.team_name = k.team_name;
            let start_time = new Date(k.start_time); //putting actual date object in
            start_time.setHours(start_time.getHours());
            let end_time = new Date(k.end_time);
            end_time.setHours(end_time.getHours());
            item.time = [start_time, end_time];
            item.prize_category = k.prize_category;
            item.sponsor_name = k.sponsor_name;
            if(k.sponsor_name.toString().startsWith("ICF")) {
              item.location = "https://app.gather.town/app/QAq8ZvP0XrnJanvN/Technica%202024?spawnToken=j_sGeUFoTdiSHGi0rv_j";
            }
            if(k.location == null) {
                if(k.sponsor_name.toString().includes("Bloomberg")) {
                  item.location = "https://app.gather.town/app/QAq8ZvP0XrnJanvN/Technica%202024?spawnToken=NRCV3WFDSwm1HFHmjbqQ";
                } else if (k.sponsor_name.toString().includes("ICF")) {
                  item.location = "https://app.gather.town/app/QAq8ZvP0XrnJanvN/Technica%202024?spawnToken=j_sGeUFoTdiSHGi0rv_j";
                } else if (k.sponsor_name.toString().includes("T. Rowe Price")) {
                  item.location = "https://app.gather.town/app/QAq8ZvP0XrnJanvN/Technica%202024?spawnToken=_bFXPg1uRmGKtGNnNsDG";
                } else { // Technica 
                  if(k.prize_category.toString().includes("Best Education Hack")) {
                    item.location = "https://app.gather.town/app/QAq8ZvP0XrnJanvN/Technica%202024?spawnToken=X3pU1IHlTY20jdEaSwGq";
                  } else if(k.prize_category.toString().includes("Best UI/UX Hack")) {
                    item.location = "https://app.gather.town/app/QAq8ZvP0XrnJanvN/Technica%202024?spawnToken=vtiNk00kRk24OWkIRZIE";
                  } else if(k.prize_category.toString().includes("Best Hack For Social Good")) {
                    item.location = "https://app.gather.town/app/QAq8ZvP0XrnJanvN/Technica%202024?spawnToken=CW9Q-FR5Q5-9H0v-iy_K";
                  } else if(k.prize_category.toString().includes("Best Gamification Hack")) {
                    item.location = "https://app.gather.town/app/QAq8ZvP0XrnJanvN/Technica%202024?spawnToken=EcvQ61m4TTy1Q090L8Pn";
                  } else if(k.prize_category.toString().includes("Best Accessibility Solution")) {
                    item.location = "https://app.gather.town/app/QAq8ZvP0XrnJanvN/Technica%202024?spawnToken=uAiSIXV1Tvu8IL0aDcTg";
                  } else if(k.prize_category.toString().includes("Best Active-Wellness/Health Hack")) {
                    item.location = "https://app.gather.town/app/QAq8ZvP0XrnJanvN/Technica%202024?spawnToken=m0H0r72WTDC8PaQhAvyv";
                  } else if(k.prize_category.toString().includes("Best Startup Track Hack")) {
                    item.location = "https://app.gather.town/app/QAq8ZvP0XrnJanvN/Technica%202024?spawnToken=LGR1eBZITQiGPvt7BXJs";
                  } else if(k.prize_category.toString().includes("Best Beginner Hack (College)")) {
                    item.location = "https://app.gather.town/app/QAq8ZvP0XrnJanvN/Technica%202024?spawnToken=C19eA1PSS5aL9UGOgkFe";
                  } else if(k.prize_category.toString().includes("Best Beginner Hack (Middle/High School)")) {
                    item.location = "https://app.gather.town/app/QAq8ZvP0XrnJanvN/Technica%202024?spawnToken=oIZDuZWST-W3bXw6tzal";
                  } else {
                    item.location = "https://app.gather.town/app/QAq8ZvP0XrnJanvN/Technica%202024?spawnToken=_OK0O2faSk2uGYv5vMR-";
                  }
                }
            } else {
              if (k.sponsor_name.toString().includes("ICF")) {
                  item.location = "https://app.gather.town/app/QAq8ZvP0XrnJanvN/Technica%202024?spawnToken=j_sGeUFoTdiSHGi0rv_j";
                } else {
                  item.location = tableMap[Number(k.location) - 1];
                }
            }
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
@import './styles/base.scss';
.title {
  margin: 3.5rem 0 1.5rem 0;
  text-align: center;
  color: $DARKGREEN;
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