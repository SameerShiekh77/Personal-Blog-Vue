<script setup>
import NavBar from '../../components/NavBar.vue';
import SideFilter from '../../components/SideFilter.vue';
import SimpleButton from '../../components/SimpleButton.vue';
import BlogsPanel from '../../components/BlogsPanel.vue';
import WebFooter from '../../components/WebFooter.vue';

let links = { first_part: ['Company', 'Design', 'Technology', 'Crypto', 'Artificial Intelligence', 'Work'], second_part: ['Guidelines', 'Mentorship', 'Tutorial', 'Training', 'Career', 'Self Care'] }

const buttons_names = ['All', 'Design Thinking', 'Technology', 'Web3', 'Programming', 'AI']


</script>

<template>
  <div class="bg-[#F9F9F9]">
    <div class="container mx-auto w-full">

      <NavBar />

      <!-- Header Created -->
      <section class="my-5 border-b-2 pb-12">
        <div class="main">
          <div class="content space-y-4">

            <div class="flex items-center">
              <p class="hover:underline decoration-[#1C5CFF] text-[#1C5CFF] text-lg cursor-pointer">See Coranu Tutorial
              </p>
              <span>
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.43695 17L5.12445 15.6875L14.1245 6.68753H6.06195V4.81253H17.3119V16.0625H15.4369V8.00003L6.43695 17Z"
                    fill="blue" />
                </svg>
              </span>
            </div>
            <h1 class="font-bold text-5xl w-[100]">Insights from our team</h1>
            <div class="flex justify-between items-center">
              <p class="text-lg text-[#7D7D7D]">Powerful Trading Tools and Features for Experienced Investors</p>
              <div class="search-bar">
                <div class="flex items-center  rounded-full shadow-md py-2 px-6 w-[500px] border border-[#DADADA]">
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
            </div>
          </div>

        </div>
      </section>

      <!-- Trending Topic  -->

      <section class="">
        <div class="heading flex justify-around items-center my-6">
          <p class="text-[#1C5CFF] text-2xl">Trending Topics</p>
        </div>
        <div class="buttons flex justify-center items-center space-x-10">
          <SimpleButton v-for="(buttons_name, index) in buttons_names" :key="index" :name="buttons_name" />


        </div>
        <div class="flex justify-around my-9">
          <div class="space-y-10 w-[15%]">
            <SideFilter title="Blog Title" :side-links="links['first_part']" />
            <SideFilter title="Guide and Tools" :side-links="links['second_part']" />
          </div>
          <BlogsPanel class="w-full" />
        </div>
      </section>

      <!-- footer section -->
      <WebFooter />
    </div>
  </div>
</template>
