<script setup>
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

defineProps({
    tagName: String
})

const showAllData = (tag = 'All') => {
    if (tag === 'All') {
        return data; // Return all data if the tag is 'All'
    }
    return data.filter(item => item.tag_name === tag); // Filter based on tag_name
}

</script>


<template>
    <div class="flex flex-col h-[51rem] max-h-1/2 overflow-y-scroll">

        <BlogCard v-for="(i, index) in showAllData(tagName)" :key="index" :date="i.date" :title="i.title"
            :description="i.description" :author="i.author" :approximate_time="i.approximate_time"
            :tag_name="i.tag_name" :image="i.image" />
    </div>



</template>