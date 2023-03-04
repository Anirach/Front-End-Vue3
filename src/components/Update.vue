<template>
    <div>
      <h2>Update Book</h2>
      <form @submit.prevent="updateBook">
        <div>
          <label for="title">Title</label>
          <input type="text" id="title" v-model="book.title" />
        </div>
        <div>
          <label for="author">Author</label>
          <input type="text" id="author" v-model="book.author" />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        book: {},
      };
    },
    async created() {
      try {
        const response = await this.$http.get(this.$base_url + "/books/" + this.$route.params.id);
        this.book = response.data;
      } catch (err) {
        console.error(err);
        // Handle error
      }
    },
    methods: {
      async updateBook() {
        try {
          const data = { title: this.book.title, author: this.book.author };
          await this.$http.put(this.$base_url + "/books/" + this.$route.params.id, data);
          this.$router.push("/");
        } catch (err) {
          console.error(err);
          // Handle error
        }
      },
    },
  };
  </script>
  