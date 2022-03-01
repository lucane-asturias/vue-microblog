import { reactive, computed } from 'vue'
import { posts_data } from './posts_data'

// central functionality for the posts

class Store {
  constructor() {
    this.state = reactive({
      posts: posts_data,
      currentHashtag: null
    })
  }

  get filteredPosts() {
    // update dynamically when change values
    return computed(() => {
      if (!this.state.currentHashtag) {
        return this.state.posts;
      }
      console.log(this.state.posts)
      return this.state.posts.filter(
        post => post.hashtags.toString().includes(this.state.currentHashtag)
      )
    });
  }

  setHashtag(tag) {
    this.state.currentHashtag = tag
  }

  incrementLike(clickedPost) {
    // look for the specific post
    const findedPost = this.state.posts.find(post =>
      post.id === clickedPost.id
    )

    if (!findedPost) {
      return;
    }

    findedPost.likes++
  }
}

export const store = new Store() 