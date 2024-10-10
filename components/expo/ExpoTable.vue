<template>
    <div>
      <div class="event-toggle-slider">
        <div
          class="event-toggle-button"
          :class="{ active: selectedToggle === 'virtual' }"
          @click="toggleEvents('virtual')"
        >
          Virtual
        </div>
        <div
          class="event-toggle-button"
          :class="{ active: selectedToggle === 'all' }"
          @click="toggleEvents('all')"
        >
          All
        </div>
        <div
          class="event-toggle-button"
          :class="{ active: selectedToggle === 'in-person' }"
          @click="toggleEvents('in-person')"
        >
          In-Person
        </div>
      </div>
  
      <div class="search-container">
        <div class="filter-input">
          <input v-model="filter" placeholder="Filter by Team Name" />
        </div>
        <div class="filter-input">
          <input v-model="sponsorFilter" placeholder="Filter by Sponsor Name" />
        </div>
      </div>
  
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th @click="sortTable('team_name')">Team Name {{ getSortIcon('team_name') }}</th>
              <th @click="sortTable('time')">Time {{ getSortIcon('time') }}</th>
              <th @click="sortTable('prize_category')">Prize Category {{ getSortIcon('prize_category') }}</th>
              <th @click="sortTable('sponsor_name')">Sponsor Name {{ getSortIcon('sponsor_name') }}</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item, i in sortedItems" :key="item.team_name + i">
              <td>{{ item.team_name }}</td>
              <td>{{ formatAMPM(item.time) }}</td>
              <td>{{ item.prize_category }}</td>
              <td>{{ item.sponsor_name }}</td>
              <td v-if="item.location.toString().startsWith('http')">
                <a :href="item.location" target="_blank">{{ item.location }}</a>
              </td>
              <td v-else>
                {{ item.location }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ExpoTable',
    props: {
      items: Array,
    },
    data() {
      return {
        sortBy: 'time',
        sortDesc: true,
        filter: '',
        sponsorFilter: '',
        selectedToggle: 'all', // 'all', 'virtual', or 'in-person'
  
      };
    },
    computed: {
      sortedItems() {
        const key = this.sortBy;
        const desc = this.sortDesc ? -1 : 1;
  
        const filteredItems = this.items.filter((item) => {
          const filterText = this.filter.toLowerCase();
          const sponsorText = this.sponsorFilter.toLowerCase();
  
          // Filter by team name and sponsor name
          const nameFilter =
            item.team_name.toLowerCase().includes(filterText) &&
            item.sponsor_name.toLowerCase().includes(sponsorText);
  
          // Filter by the selected toggle
          const virtualFilter =
            this.selectedToggle === 'virtual' &&
            item.location.toString().startsWith('https');
          const inPersonFilter =
            this.selectedToggle === 'in-person' &&
            !item.location.toString().startsWith('https');
  
          return nameFilter && (virtualFilter || inPersonFilter || this.selectedToggle === 'all');
        });
  
        return filteredItems.slice().sort((a, b) => {
          const aValue = a[key];
          const bValue = b[key];
          if (key === 'time') {
            return desc * (new Date(bValue[0]) - new Date(aValue[0]));
          } else {
            return desc * (aValue.localeCompare(bValue));
          }
        });
      },
    },
    methods: {
      sortTable(key) {
        if (this.sortBy === key) {
          this.sortDesc = !this.sortDesc;
        } else {
          this.sortBy = key;
          this.sortDesc = false;
        }
      },
      getSortIcon(key) {
        if (this.sortBy === key) {
          return this.sortDesc ? '▼' : '▲';
        }
        return '';
      },
      toggleEvents(filter) {
        this.selectedToggle = filter;
      },
      formatAMPM(timeArray) {
        const startDate = new Date(timeArray[0]);
        const endDate = new Date(timeArray[1]);
  
        const startTime = startDate.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        });
        
        const endTime = endDate.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        });
  
        return !timeArray[0] ? "" : `${startTime} - ${endTime}`;
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  @import "../../styles/base.scss";
  
  /* Style for the table */
  .table {
    border-collapse: collapse;
    width: 100%;
  
    th, td {
      padding: 10px;
      text-align: left;
    }
  
    td {
      background-color: $LIGHTGREEN;
      border-top: none !important;
      border-bottom: 1px solid $DARKGREEN;
      color: black !important;
    }
  
    th {
      border-top: none !important;
      border-bottom: solid 1px $DARKGREEN;
      background-color: $MIDGREEN !important;
      cursor: pointer;
      font-weight: 600;
      user-select: none;
    }
  
    th:hover {
      background-color: #2e2929;
    }
  
    tr:hover {
      background-color: #f5f5f5;
    }
  }

  a {
    color: $DARKYELLOW;
  }
  
  .search-container {
    margin: 20px 0;
  }
  
  .filter-input {
    display: inline-block;
    width: 48%;
    margin-right: 2%;
  
    input {
      padding: 10px;
      width: 100%;
      border: 1px solid #ccc;
      border-radius: 5px;
      transition: border-color 0.3s;
  
      &:focus {
        border-color: $DARK_PURPLE;
      }
    }
  }
  
  /* Style for event toggle */
  .event-toggle-slider {
    display: flex;
    justify-content: space-between;
    background-color: $LIGHTGREEN;
    border-radius: 25px;
    padding: 5px;
    width: 50%;
    margin: 0 auto;
    margin-bottom: 20px;
    border: 2px solid $DARKGREEN; /* Add a border */
  
    @media (max-width: 768px) {
      width: 100%; /* Make it full width on smaller screens */
      margin-left: 0;
      margin-right: 0;
    }
  }
  
  .event-toggle-button {
    background-color: transparent; /* Transparent background */
    border: 1px solid $DARKGREEN;
    border-radius: 20px;
    padding: 8px 12px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    font-weight: 600;
    color: black;
  
    &.active {
      background-color: $DARKGREEN;
      color: white;
    }
  }
  
  .event-toggle-button:hover {
    background-color: $MIDGREEN;
  }
  
  .event-toggle-slider div {
    flex: 1;
    text-align: center;
    font-weight: 600;
    user-select: none; /* Disable text selection */
  }
  
  </style>