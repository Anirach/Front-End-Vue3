<template>
    <div>
      <h2>{{ book.title }}</h2>
      <p>{{ book.author }}</p>
      <router-link :to="'/update/' + book.id">Edit</router-link>
      <button @click="deleteBook()">Delete</button>
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
      async deleteBook() {
        try {
          await this.$http.delete(this.$base_url + "/books/" + this.$route.params.id);
          this.$router.push("/");
        } catch (err) {
          console.error(err);
          // Handle error
        }
      },
    },
  };
  </script>
  