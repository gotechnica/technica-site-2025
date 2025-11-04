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
          <tr v-for="(item, i) in paginatedItems" :key="item.team_name + i">
            <td>{{ item.team_name }}</td>
            <td>{{ formatAMPM(item.time) }}</td>
            <td>{{ item.prize_category }}</td>
            <td>{{ item.sponsor_name }}</td>
            <td>
              <span v-if="item.location.toString().startsWith('https')">
                <a :href="item.location">{{ item.location }}</a>
              </span>
              <span v-else>{{ item.location }}</span>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
      <!-- Pagination controls -->
      <div class="pagination-controls">
        <button
          class="btn btn-md btn-outline-primary"
          :disabled="currentPage === 1"
          @click="currentPage--"
        >
          Prev
        </button>

        <span>Page {{ currentPage }} of {{ totalPages }}</span>

        <button
          class="btn btn-md btn-outline-primary"
          :disabled="currentPage === totalPages"
          @click="currentPage++"
        >
          Next
        </button>
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
      currentPage: 1,
      perPage: 20,
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
    totalPages() {
    return this.sortedItems && Array.isArray(this.sortedItems)
      ? Math.ceil(this.sortedItems.length / this.perPage)
      : 1
    },
    paginatedItems() {
      if (!this.sortedItems || !Array.isArray(this.sortedItems)) return []
      const start = (this.currentPage - 1) * this.perPage
      return this.sortedItems.slice(start, start + this.perPage)
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

/* Style for pagination controls */
.pagination-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
}

.pagination-controls button {
  color: black;
  border: 1px solid #EFE4DC;
  background-color: #f1adcd;
  border-radius: 20px;
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  font-weight: 600;
}

.pagination-controls button:hover {
  background-color: #D68BB1;
}

.table-responsive {
  border-radius: 12px;
  box-shadow: 0 0 30px 5px rgba(255, 255, 255, 0.1);
}

/* Style for the table */
.table {
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 0;

  th, td {
    padding: 10px;
    text-align: left;
  }

  td {
    background-color: #141024;
    border-top: none !important;
    border-bottom: 1px solid #EFE4DC;
    color: white !important;
  }

  th {
    border-top: none !important;
    border-bottom: solid 1px #EFE4DC;
    background-color: #f1adcd !important;
    cursor: pointer;
    font-weight: 600;
    user-select: none;
  }

   /* table rounded corners */
  thead th:first-child {
    border-top-left-radius: 12px;
  }
  thead th:last-child {
    border-top-right-radius: 12px;
  }
  tbody tr:last-child td:first-child {
    border-bottom-left-radius: 12px;
  }
  tbody tr:last-child td:last-child {
    border-bottom-right-radius: 12px;
  }

  /* remove bottom border on the last row */
  tbody tr:last-child td {
    border-bottom: none !important;
  }

  th:hover {
    background-color: #2e2929;
  }

  tr:hover {
    background-color: #f5f5f5;
  }
}

a {
  color: #f1adcd;
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
  background-color: #f1adcd;
  border-radius: 25px;
  padding: 5px;
  width: 50%;
  margin: 0 auto;
  margin-bottom: 20px;
  border: 2px solid #EFE4DC; 

  @media (max-width: 768px) {
    width: 100%; /* Make it full width on smaller screens */
    margin-left: 0;
    margin-right: 0;
  }
}

.event-toggle-button {
  background-color: transparent; /* Transparent background */
  border: 1px solid #EFE4DC;
  border-radius: 20px;
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  font-weight: 600;
  color: black;

  &.active {
    background-color: #B25F8C;
    color: white;
  }
}

.event-toggle-button:hover {
  background-color: #D68BB1;
}

.event-toggle-slider div {
  flex: 1;
  text-align: center;
  font-weight: 600;
  user-select: none; /* Disable text selection */
}

</style>