<template>
    <div>
        <h1>Books</h1>
        <ul>
            <li v-for="book in books" :key="book.id">
                <router-link :to="'/book/' + book.id">{{ book.title }}</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            books: [],
        };
    },
    async created() {
        try {
            const response = await this.$http.get(this.$base_url + "/books");
            this.books = response.data;
        } catch (err) {
            console.error(err);
            // Handle error
        }
    },
};
</script>
  
<style scoped>
li {
    margin: 10px 0;
}
</style>
  