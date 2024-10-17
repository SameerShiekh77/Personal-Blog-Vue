<script setup>
import BlogCard from './BlogCard.vue';

let data = [
    {
        date: "Mar 1",
        title: "Powerful Trading Tools and Features for Experienced Investors",
        description: "I’m always trying to think of new and interesting business ideas. I generally try to come up with ideas by thinking of what I would want to do or see in the world. Then, I try to find reasons why it wouldn’t work...",
        author: "Mark Tuchel",
        approximate_time: "7",
        tag_name: "Tools",
        image: "../public/blog-side-image.png"
    },
    {
        date: "Mar 1",
        title: "Powerful Trading Tools and Features for Experienced Investors",
        description: "I’m always trying to think of new and interesting business ideas. I generally try to come up with ideas by thinking of what I would want to do or see in the world. Then, I try to find reasons why it wouldn’t work...",
        author: "Mark Tuchel",
        approximate_time: "7",
        tag_name: "Tools",
        image: "../public/blog-side-image.png"

    },
    {
        date: "Mar 1",
        title: "Powerful Trading Tools and Features for Experienced Investors",
        description: "I’m always trying to think of new and interesting business ideas. I generally try to come up with ideas by thinking of what I would want to do or see in the world. Then, I try to find reasons why it wouldn’t work...",
        author: "Mark Tuchel",
        approximate_time: "7",
        tag_name: "Tools",
        image: "../public/blog-side-image.png"

    },
    {
        date: "Mar 1",
        title: "Powerful Trading Tools and Features for Experienced Investors",
        description: "I’m always trying to think of new and interesting business ideas. I generally try to come up with ideas by thinking of what I would want to do or see in the world. Then, I try to find reasons why it wouldn’t work...",
        author: "Mark Tuchel",
        approximate_time: "7",
        tag_name: "Tools",
        image: "../public/blog-side-image.png"

    },
    {
        date: "Mar 1",
        title: "Powerful Trading Tools and Features for Experienced Investors",
        description: "I’m always trying to think of new and interesting business ideas. I generally try to come up with ideas by thinking of what I would want to do or see in the world. Then, I try to find reasons why it wouldn’t work...",
        author: "Mark Tuchel",
        approximate_time: "7",
        tag_name: "Tools",
        image: "../public/blog-side-image.png"

    },
    {
        date: "Mar 1",
        title: "Powerful Trading Tools and Features for Experienced Investors",
        description: "I’m always trying to think of new and interesting business ideas. I generally try to come up with ideas by thinking of what I would want to do or see in the world. Then, I try to find reasons why it wouldn’t work...",
        author: "Mark Tuchel",
        approximate_time: "7",
        tag_name: "Tools",
        image: "../public/blog-side-image.png"

    }
]


</script>


<template>
    <div class="flex flex-col h-[51rem] max-h-1/2 overflow-y-scroll">

        <BlogCard v-for="(i, index) in data" :key="index" :date="i.date" :title="i.title" :description="i.description"
            :author="i.author" :approximate_time="i.approximate_time" :tag_name="i.tag_name" :image="i.image" />
    </div>



</template>