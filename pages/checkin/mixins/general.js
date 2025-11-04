import Axios from 'axios';
import Config from '../config/general';

export default {
  methods: {
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    async performGetRequest(endpoint) {
      const baseUrl = this.getCurrentEnvironment();
      try {
        const result = await Axios.get(`${baseUrl}/${endpoint}`);
        return result.data;
      } catch (e) {
        console.error(e);
        return null;
      }
    },
    async performPostRequest(endpoint, params) {
      const baseUrl = this.getCurrentEnvironment();
      try {
        const result = await Axios.post(`${baseUrl}/${endpoint}`, params);
        return result.data;
      } catch (e) {
        console.error(e);
        return null;
      }
    },
    getCurrentEnvironment() {
      return 'https://api.gotechnica.org';
    },
    getEnvVariable(variableName) {
      if (Config.shared[variableName]) {
        console.log(variableName)
        return Config.shared[variableName];
      }
      return Config[this.getCurrentEnvironment()][variableName];
    },
  },
};
