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
            Below is a list of the demos and corresponding locations.
          </p>
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
import ExpoTable from '../components/expo/ExpoTable.vue';
import data from '../static/expo_virtual_schedule.json';
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
      if (schedule) {
        //waiting for schedule query
        Object.values(schedule).forEach((k) => {
          console.log(k);
          const item = {};
          item.team_name = k[0][0];
          let start_time = new Date(k[1]); //putting actual date object in
          start_time.setHours(start_time.getHours());
          let end_time = new Date(k[2]);
          end_time.setHours(end_time.getHours());
          item.time = [start_time, end_time];
          item.prize_category = k[3];
          item.sponsor_name = k[4];
          if(k[5] == null) {
              if(k[4] === "Technica") {
                  item.location = "https Technica";
              } else {
                  item.location = "https Gather";
              }
              
          } else {
              item.location = k[5];
          }
          items.push(item); //boom
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