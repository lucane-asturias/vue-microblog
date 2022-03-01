<template>
  <div>
    <div class="like">
      <button @click="like">
        Like
      </button>
      <div>
        {{ post.likes }}
      </div>
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
  setup(props) {
    const like = () => {
      store.incrementLike(props.post)
    }

    return { 
      like
    }
  },
  components: { Hashtag },
  props: {
    post: {
      type: Object
    }
  },
}
</script>

<style scoped>
.like {
  display: flex;
  justify-content: center;
  margin: 10px;
}
</style>