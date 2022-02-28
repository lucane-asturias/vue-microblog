import { reactive } from 'vue'
import { posts_data } from './posts_data'
// group all the functionality for the posts
class Store {
  constructor() {
    this.state = reactive({
      posts: posts_data
    })
  }
}

export const store = new Store() 