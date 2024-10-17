<script setup>
defineProps({
    name: String
})
</script>

<template>


    <button
        class="text-[#797979] rounded-full px-8 py-2 border border-[#797979] bg-white hover:bg-[#797979] hover:text-white cursor-pointer">{{ name }}</button>
</template>