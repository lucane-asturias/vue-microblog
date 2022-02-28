<template>
  <div class="hashtag" @click="setHashtag">
    #{{ hashtag }}
  </div>
</template>

<script>
export default {
  name: 'Hashtag',
  setup(props, ctx) {
    const setHashtag = () => {
      ctx.emit('setHashtag', props.hashtag)
    }

    return {
    }
  },
  props: {
    hashtag: {
      type: String
    }
  }
}
</script>

<style scoped>
  hashtag {
    text-decoration: underline;
  }

  hashtag:hover {
    color: cornflowerblue;
  }
</style>