<script setup>
import BlogCard from './BlogCard.vue';
import { blogData } from '../src/js/blogData.js';  // Import the shared data

let blogAvailable = true

defineProps({
    tagName: String
})

const showAllData = (tag = 'All') => {
    if (tag === 'All') {
        blogAvailable = true
        return blogData; // Return all blogData if the tag is 'All'
    }
    if (blogData.filter(item => item.tag_name === tag) != "") {
        blogAvailable = true
        return blogData.filter(item => item.tag_name === tag); // Filter based on tag_name

    }
    else {
        blogAvailable = false
    }
}


</script>


<template>
    <div class="flex flex-col max-h-[51rem] h-full" :class="{ 'overflow-y-scroll': showAllData(tagName)?.length > 3 }">

        <BlogCard v-show="blogAvailable" v-for="(i, index) in showAllData(tagName)" :key="index" :id="i.id"
            :date="i.date" :title="i.title" :description="i.description" :author="i.author"
            :approximate_time="i.approximate_time" :tag_name="i.tag_name" :image="i.image" />
        <div v-show="!blogAvailable">
            <h1 class="text-5xl font-bold text-center flex justify-center items-center align-middle py-48">No Blog Found
            </h1>
        </div>
    </div>



</template>