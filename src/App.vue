<template>
  <card 
    v-for="post in store.state.posts"
  >
    <template v-slot:title>
      {{ post.title }}
    </template>

    <template v-slot:content>
      {{ post.content }}
    </template>

    <template v-slot:description>
      <controls :post="post" @setHashtag="setHashtag"
 />
    </template>
  </card>
  {{ currentHashtag }}
</template>

<script>
import { ref } from 'vue'
import { store } from './store/store'
import Card from './components/Card.vue'
import Controls from './components/Controls.vue';

export default {
  name: 'App',
  setup() {
    const currentHashtag = ref()
    const setHashtag = (tag) => {
      // update ref
      currentHashtag.value = tag
    }

    return { // return from the setup
      store,
      setHashtag,
      currentHashtag
    }
  },
  components: {
    Card,
    Controls
  },
}
</script>