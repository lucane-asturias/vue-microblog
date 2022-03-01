<template>
  <div>
    <div>{{ post.likes }}</div>
    <div class="like">
      <button @click="handleLike">❤ Like</button> 
    </div>
    <hashtag 
      v-for="tag in post.hashtags"
      :hashtag="tag"
    />
  </div>
</template>

<script>
import Hashtag from './Hashtag.vue'
import { store } from '../store/store'

export default {
  name: 'Controls',
  components: { 
    Hashtag 
  },
  props: {
    post: {
      type: Object
    }
  },

  setup(props) {
    const handleLike = () => {
      store.incrementLike(props.post)
    }

    return { 
      handleLike
    }
  }
}
</script>

<style scoped>
.like {
  display: flex;
  justify-content: center;
  margin: 10px;
}
</style>