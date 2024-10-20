<script setup>
import { isArray } from '@vue/shared';
import BlogCard from './BlogCard.vue';

let data = [
    {
        date: "Mar 1",
        title: "Powerful Trading Tools and Features for Experienced Investors",
        description: "I’m always trying to think of new and interesting business ideas. I generally try to come up with ideas by thinking of what I would want to do or see in the world. Then, I try to find reasons why it wouldn’t work...",
        author: "Mark Tuchel",
        approximate_time: "7",
        tag_name: "AI",
        image: "../public/blog-side-image.png"
    },
    {
        date: "Mar 2",
        title: "Powerful Trading Tools and Features for Experienced Investors",
        description: "I’m always trying to think of new and interesting business ideas. I generally try to come up with ideas by thinking of what I would want to do or see in the world. Then, I try to find reasons why it wouldn’t work...",
        author: "Mark Tuchel",
        approximate_time: "7",
        tag_name: "Web3",
        image: "../public/blog-side-image.png"

    },
    {
        date: "Mar 1",
        title: "Powerful Trading Tools and Features for Experienced Investors",
        description: "I’m always trying to think of new and interesting business ideas. I generally try to come up with ideas by thinking of what I would want to do or see in the world. Then, I try to find reasons why it wouldn’t work...",
        author: "Mark Tuchel",
        approximate_time: "7",
        tag_name: "Design Thinking",
        image: "../public/blog-side-image.png"

    },
    {
        date: "Mar 13",
        title: "Powerful Trading Tools and Features for Experienced Investors",
        description: "I’m always trying to think of new and interesting business ideas. I generally try to come up with ideas by thinking of what I would want to do or see in the world. Then, I try to find reasons why it wouldn’t work...",
        author: "Mark Tuchel",
        approximate_time: "7",
        tag_name: "Technology",
        image: "../public/blog-side-image.png"

    },
    {
        date: "Mar 5",
        title: "Powerful Trading Tools and Features for Experienced Investors",
        description: "I’m always trying to think of new and interesting business ideas. I generally try to come up with ideas by thinking of what I would want to do or see in the world. Then, I try to find reasons why it wouldn’t work...",
        author: "Mark Tuchel",
        approximate_time: "7",
        tag_name: "AI",
        image: "../public/blog-side-image.png"

    },
    {
        date: "Mar 6",
        title: "Powerful Trading Tools and Features for Experienced Investors",
        description: "I’m always trying to think of new and interesting business ideas. I generally try to come up with ideas by thinking of what I would want to do or see in the world. Then, I try to find reasons why it wouldn’t work...",
        author: "Mark Tuchel",
        approximate_time: "7",
        tag_name: "Web3",
        image: "../public/blog-side-image.png"

    },
    {
        date: "Mar 10",
        title: "Powerful Trading Tools and Features for Experienced Investors",
        description: "I’m always trying to think of new and interesting business ideas. I generally try to come up with ideas by thinking of what I would want to do or see in the world. Then, I try to find reasons why it wouldn’t work...",
        author: "Mark Tuchel",
        approximate_time: "7",
        tag_name: "Programming",
        image: "../public/blog-side-image.png"

    }
]
let blogAvailable = true

defineProps({
    tagName: String
})

const showAllData = (tag = 'All') => {
    if (tag === 'All') {
        blogAvailable = true
        return data; // Return all data if the tag is 'All'
    }
    if (data.filter(item => item.tag_name === tag) != "") {
        blogAvailable = true
        return data.filter(item => item.tag_name === tag); // Filter based on tag_name

    }
    else {
        blogAvailable = false
    }
}

</script>


<template>
    <div class="flex flex-col max-h-[51rem] h-full" :class="{ 'overflow-y-scroll': showAllData(tagName)?.length > 3 }">

        <BlogCard v-show="blogAvailable" v-for="(i, index) in showAllData(tagName)" :key="index" :date="i.date"
            :title="i.title" :description="i.description" :author="i.author" :approximate_time="i.approximate_time"
            :tag_name="i.tag_name" :image="i.image" />
        <div v-show="!blogAvailable">
            <h1 class="text-5xl font-bold text-center flex justify-center items-center align-middle py-48">No Blog Found
            </h1>
        </div>
    </div>



</template>