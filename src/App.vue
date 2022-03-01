<template>
  <card 
    v-for="post in filteredPosts"
  >
    <template v-slot:title>
      {{ post.title }}
    </template>

    <template v-slot:content>
      {{ post.content }}
    </template>

    <template v-slot:description>
      <controls :post="post"
 />
    </template>
  </card>
</template>

<script>
import { ref, computed } from 'vue'
import { store } from './store/store'
import Card from './components/Card.vue'
import Controls from './components/Controls.vue';

export default {
  name: 'App',
  setup() {
    const filteredPosts = computed(() => {
      if (!store.state.currentHashtag) {
        return store.state.posts;
      }

      return store.state.posts.filter(
        post => post.hashtags.includes(store.state.currentHashtag)
      )
    });

    return { // return from the setup
      filteredPosts,
    }
  },
  components: {
    Card,
    Controls
  },
}
</script>