<script setup>
</script>

<template>
    <section class="bg-[url('../public/footer-bg.png')] py-3 my-12">

        <div class="px-40 py-7 space-y-4">
            <a href="#" class="hover:underline decoration-[#1C5CFF] text-[#1C5CFF] text-lg cursor-pointer">Stay up to
                date</a>
            <h3 class="text-4xl font-bold">Join Our Newsletter</h3>
            <form class="space-x-6">
                <input type="email" name="email" required
                    class="border-[#DADADA] outline-[#DADADA] border-2 px-5 py-3 rounded-md"
                    placeholder="Enter your email...">
                <input
                    class="text-white rounded-md px-10 py-3 bg-[#1c5cff] hover:bg-white hover:text-[#1c5cff] cursor-pointer border border-[#1c5cff] font-medium hover:border-blue-400"
                    type="submit" value="Submit" />

            </form>
            <p class="text-base">*You can unsubscribe anytime</p>
        </div>

    </section>

</template>
