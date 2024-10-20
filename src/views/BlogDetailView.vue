<template>
    <div class="bg-[#F9F9F9]">
        <div class="container mx-auto w-full">

            <NavBar />
            <section class="text-gray-600 body-font">
                <div class="px-5 py-24 flex flex-col">
                    <div class="lg:w-4/6 mx-auto">
                        <div class="rounded-lg h-64 overflow-hidden">
                            <img alt="content" class="object-cover object-center h-full w-full"
                                src="https://dummyimage.com/1200x500">
                        </div>

                        <div
                            class="sm:pl-8 sm:py-8 border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                            <h1 class="text-4xl font-bold w-[700px]"> {{ blog?.title }}</h1>
                            <p class="leading-relaxed text-lg mb-4">Meggings portland fingerstache lyft,
                                post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct
                                trade art party. Locavore small batch listicle gastropub farm-to-table
                                lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer
                                drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland
                                90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt
                                butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon
                                brooklyn.
                            </p>

                        </div>

                        <div class="flex flex-col justify-center items-center sm:flex-row mt-10">
                            <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                <div
                                    class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                                <div class="flex flex-col items-center text-center justify-center">
                                    <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">Phoebe Caulfield
                                    </h2>
                                    <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import Footer from '../../components/Footer.vue';
import NavBar from '../../components/NavBar.vue';
import { blogData } from '../js/blogData';  // Import the shared data


const route = useRoute();
const blogId = route.params.id;  // Get the id from the route
const blog = ref(null);



// Function to find the blog by id
onMounted(() => {
    blog.value = blogData.find((item) => item.id === blogId);
})

</script>