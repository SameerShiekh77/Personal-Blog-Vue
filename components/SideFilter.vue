<script setup>

defineProps({
    title: String,
    sideLinks: Array
})
</script>
<template>

    <div>
        <h4 class="text-[#1C5CFF] text-xl my-7">{{title}}</h4>
        <ul class="space-y-3">
            <li class="text-lg" v-for="(sideLink,index) in sideLinks" :key="index"><a href="#" class="cursor-pointer">{{sideLink}}</a></li>
        </ul>
    </div>

</template>