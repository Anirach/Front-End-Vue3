<template>
    <div>
      <h2>Create Book</h2>
      <form @submit.prevent="createBook">
        <div>
          <label for="title">Title</label>
          <input type="text" id="title" v-model="title" />
        </div>
        <div>
          <label for="author">Author</label>
          <input type="text" id="author" v-model="author" />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: "",
        author: "",
      };
    },
    methods: {
      async createBook() {
        try {
          const data = { title: this.title, author: this.author };
          await this.$http.post(this.$base_url + "/books", data);
          this.$router.push("/");
        } catch (err) {
          console.error(err);
          // Handle error
        }
      },
    },
  };
  </script>
  