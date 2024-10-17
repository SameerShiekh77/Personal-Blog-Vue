<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>

    <div class="flex justify-between items-center py-10">
        <div class="logo flex space-x-20 items-center">
            <div class="flex space-x-3 items-center">
                <img src="../public/logo.png" alt="">
                <h1 class="font-semibold text-3xl">Coranu</h1>
            </div>
            <div class="flex items-center  rounded-full shadow-md py-2 px-6 w-96 border border-[#DADADA]">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 ml-2" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11 4a7 7 0 017 7c0 1.657-.615 3.163-1.623 4.313l4.207 4.207a1 1 0 01-1.414 1.414l-4.207-4.207A6.966 6.966 0 0111 18a7 7 0 110-14zm0 2a5 5 0 100 10 5 5 0 000-10z" />
                </svg>

                <input class="bg-transparent focus:outline-none ml-3 w-full placeholder-gray-400 px-4" type="text"
                    placeholder="search...">

                <p class="bg-gray-200 text-gray-400 p-1 text-sm transition-all ml-2">
                    /
                </p>
            </div>
        </div>
        <div class="nav-links">
            <ul class="flex space-x-10">
                <li>
                    <RouterLink to="/" class="text-black cursor-pointer hover:underline ">Home</RouterLink>
                </li>
                <li>
                    <RouterLink to="#" class="text-gray-400 cursor-pointer hover:underline">About</RouterLink>
                </li>
                <li>
                    <RouterLink to="#" class="text-gray-400 cursor-pointer hover:underline">Blog</RouterLink>
                </li>
                <li>
                    <RouterLink to="#" class="text-gray-400 cursor-pointer hover:underline">Caree</RouterLink>
                    <span
                            class="mx-3 rounded-full px-2 bg-[#1C5CFF] text-white">hiring</span>
                </li>
                <li>
                    <RouterLink to="#" class="text-gray-400 cursor-pointer hover:underline">Contact</RouterLink>
                </li>
            </ul>
        </div>

        <div class="button mx-5 flex items-center justify-center w-48 bg-[[#1C5CFF]] rounded-md">
            <button class="text-white py-3 px-5 rounded-md font-semibold">Get Started

            </button>
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M9.72468 3.19757L8.6386 4.28365L12.9367 8.58946L3.56252 8.58946L3.56252 10.13L12.9367 10.13L8.6309 14.4281L9.72468 15.5219L15.8868 9.35973L9.72468 3.19757Z"
                    fill="white" />
            </svg>


        </div>
    </div>
</template>