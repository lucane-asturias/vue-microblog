<template>
  <div id="wrapper">
    <div>
      <label>Search hashtag:</label>
      <input 
        :value="currentHashtag" 
        @input="handleInput"
        placeholder="#vue" 
      >
    </div>
  </div>
  <div class="cards">
    <card v-for="post in filteredPosts">
      <template v-slot:title>
        {{ post.title }}
      </template>

      <template v-slot:content>
        {{ post.content }}
      </template>

      <template v-slot:description>
        <controls :post="post" />
      </template>
    </card>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { store } from './store/store'
import Card from './components/Card.vue'
import Controls from './components/Controls.vue';

export default {
  name: 'App',
  components: {
    Card,
    Controls
  },

  setup() {    
    const handleInput = ($event) => {
      store.setHashtag($event.target.value)
    }

    return {
      filteredPosts: store.filteredPosts,
      handleInput,
      currentHashtag: computed(() => store.state.currentHashtag)
    }
  },
}
</script>

<style scoped>
.cards {
  display: flex;
  justify-content: center;
}
input, label {
  font-size: 30px;
}
input {
  height: 30px;
  width: 200px;
  padding: 5px;
  margin: 5px;
  margin: 30px;
}
#wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>