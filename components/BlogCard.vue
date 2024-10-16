<script setup>
import SimpleButton from './SimpleButton.vue';
defineProps({
    date: String,
    title: String,
    description: String,
    author: String,
    approximate_time: String,
    button_name: String,
    image: String
})
</script>


<template>
    <div class="flex justify-around my-7 mx-16">
        <div class="space-y-4">
            <p class="text-[#1C5CFF]">{{date}}</p>
            <h1 class="text-4xl font-bold w-[700px]">{{title}}
            </h1>
            <p class="text-[#7D7D7D] w-[700px]">{{description}}</p>
            <div class="flex  items-center space-x-9">
                <SimpleButton :name="button_name" />
                <p class="text-[#7D7D7D]">By {{author}}</p>
                <p class="text-[#1C5CFF]">{{approximate_time}} min read</p>
            </div>
        </div>

        <div>
            <img :src="image" alt="blog-side-image">
        </div>

    </div>




</template>