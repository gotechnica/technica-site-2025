<template>
    <div class="container">
    <div class="elems">
      <div class="title">
        <h3>Manual Hacker Lookup</h3>
        <p>Start typing the hacker’s name to find a match:</p>
        <input
          v-model="searchQuery"
          type="text"
          class="form-control"
          placeholder="Enter first or last name..."
        />
      </div>
      <div v-if="loading" class="mt-3">Searching...</div>

      <div v-if = "results.length && !loading" class = "results">
        <h3>Matches Found: Select a Hacker</h3>
        <ul class="result-list mt-3">
          <li
            v-for="(result, index) in results"
            :key="index"
            @click="selectHacker(result)"
          >
            {{ result.firstName }} {{ result.lastName }} | {{ result.email }}
          </li>
        </ul>
    </div>

        <p v-if="!results.length && !loading && searchQuery.length > 1" class="mt-3">
          No results found.
        </p>

        <button class="btn mt-4" @click="goBack">Back to Scan</button>
    </div>
  </div>
</template>

<script>
import general from './checkin/mixins/general'
import {ref, watch} from 'vue'
import {useRouter} from 'vue-router'
import '~/assets/styles/checkin.css'

definePageMeta({
  middleware: 'checkin',
  layout: 'checkinlayout'
})

export default{
    name: 'Search',
    mixins: [general],
    setup(){
        const searchQuery = ref('')
        const results = ref([])
        const loading = ref(false)
        const router = useRouter()
        const LAMBDA_URL = 'https://3m6dhx8k20.execute-api.us-east-1.amazonaws.com/search'

        let searchTimeout = null
        let controller = null

        watch(searchQuery, (newValue) => {
            clearTimeout(searchTimeout)
            if (!newValue){
                results.value = []
                return
            }

            searchTimeout = setTimeout(() => {
                performSearch(newValue)
            }, 400)
        })

        async function performSearch(query){
            //Abort previous request, avoid racing conditions
            if (controller){
                controller.abort()
            }

            controller = new AbortController()
            const signal = controller.signal

            try{
                loading.value = true

                // const response = await fetch('/api/tracking/search', {
                //     method: 'POST',
                //     headers: { 'Content-Type': 'application/json' },
                //     body: JSON.stringify({ name: query })
                // })

                const url = `${LAMBDA_URL}?q=${encodeURIComponent(query)}`
                const response = await fetch(url, {signal})
                const data = await response.json()
                results.value = data || []
            }
            
            catch(error){
                console.error('Search error:', error)
                results.value = []
            }

            finally {
                loading.value = false
            }
            }

        function selectHacker(hacker){
            router.push({
                path: '/viewHacker',
                query: {
                    email: hacker.email,
                    firstName: hacker.firstName
                }
            })
        }

        function goBack() {
            router.push('/checkin')
        }

        return{
            searchQuery,
            results,
            loading,
            selectHacker,
            goBack
        }
    }
}

</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  position: relative;
  top: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow-x: clip;
}

.elems {
  height: max-content;
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title *{
    color: white;
    margin: 1rem 0;
}

.title {
  /* border: solid 2px white; */
  padding: 1.5rem;
  border-radius: 10px;
  /* background-color: #EFE4DC; */
  color: #1a1b27;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  position: relative;
}

.title p{
    margin-top: 0;
    margin-bottom: 2rem;
    color: #c8c2e9;
    text-align: center;
}

.title input{
    width: 600px;
    max-width: 90%;
    color: #1a1b27;
}

.results h3{
    color: white;
    font-size: 1.1rem;
    text-align: center;
    margin-bottom: 2rem;
}

.result-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.result-list li {
  background-color: #EFE4DC;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
}

.result-list li:hover {
  background-color: white;
  transform: scale(1.05)
}

@media only screen and (max-width: 600px){
    .title input{
        width: 100%;
    }
}

</style>