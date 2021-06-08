<template>
  <div class="flex justify-center ml-28 mt-20 mb-20">
    <div class="wrapper w-1/2 mt-24 ml-42">
      <div class="w-full">
        <h1 class="font-acme text-center font-bold text-3xl">GET TO KNOW MORE ABOUT INDONESIA</h1>
      </div>

      <div class="w-full ">
        <router-link to>
          <div class="flex justify-end bg-red-500 p-5 rounded-xl w-2/5 mt-10 mx-auto">
            <button class="mr-2 text-white font-bold">Life of Indonesian People</button>
            <img src="../assets/blackRightArrow.png" alt />
          </div>
        </router-link>
      </div>

      <div class="w-full ">
        <router-link to>
          <div class="flex justify-end bg-red-500 p-5 rounded-xl w-2/5 mt-5 mx-auto">
            <button class="mr-2 text-white font-bold">Religions and Cultures</button>
            <img src="../assets/blackRightArrow.png" alt />
          </div>
        </router-link>
      </div>
    </div>
    <div class="imageWrapper w-1/2">
      <img src="../assets/playbutton.png" alt />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>