import { reactive } from 'vue'
import { posts_data } from './posts_data'

// central functionality for the posts

class Store {
  constructor() {
    this.state = reactive({
      posts: posts_data,
      currentHashtag: null
    })
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

    findedPost.likes += 1
  }
}

export const store = new Store() 