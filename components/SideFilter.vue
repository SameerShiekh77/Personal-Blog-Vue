<script setup>

defineProps({
    title: String,
    sideLinks: Array,
    categoryName: String
})

const emit = defineEmits(['categoryFilter'])

function handleCategoryClick(category) {
    emit('categoryFilter', category)
}
</script>
<template>

    <div>
        <h4 class="text-[#1C5CFF] text-2xl my-7">{{ title }}</h4>
        <ul class="space-y-3">
            <li class="text-lg hover:text-[#1C5CFF]" :class="{ '!text-[#1C5CFF]': categoryName == sideLink }"
                v-for="(sideLink, index) in sideLinks" :key="index"><a href="#" class="cursor-pointer"
                    @click.prevent="handleCategoryClick(sideLink)">{{ sideLink }}</a></li>
        </ul>
    </div>

</template>