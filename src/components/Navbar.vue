<template>
  <div class="flex justify-between h-48 flex-wrap align-center">
    <div class=" flex justify-center items-center">
      <img alt="Vue logo" src="../assets/logo.png" class="m-auto " />
    </div>
    <div class="w-7/12">
      <div class="flex h-24 justify-end">
        <ul class="flex justify-center items-center">
          <router-link to ="">
            <img src="../assets/facebook.png" alt="facebook icon" class="mx-4 cursor-pointer" />
          </router-link>
          <router-link to ="">
            <img src="../assets/instagram.png" alt="instagram icon" class="mx-4 cursor-pointer" />
          </router-link>
          <router-link to ="">
            <img src="../assets/twitter.png" alt="twitter icon" class="mx-4 cursor-pointer"/>
          </router-link>
          <router-link to ="">
            <img src="../assets/youtube.png" alt="youtube icon" class="mx-4 cursor-pointer"/>
          </router-link>
        </ul>
        <div class="flex justify-center items-center">
          <button class="outline-none border-none ml-10 font-sans font-semibold">Indonesian</button>
          <button class="ml-4 border-l-2 border-red-600 pl-4 font-sans font-semibold">ENGLISH</button>
        </div>
      </div>
      <div class=" h-24 w-46 flex justify-end items-center ">
        <div class="bg-gradient-to-b from-gray-100 via-gray-100 to-gray-300 rounded-xl h-12 flex justify-center items-center">
          <router-link to="" class="ml-8 cursor-pointer font-semibold font-sans ">About the G20</router-link>
          <router-link to="" class="ml-8 cursor-pointer font-semibold font-sans flex justify-end items-center">Indonesia G20 Presidency <img src="../assets/redArrow.png" alt="arrow" class="w-3 h-3 ml-2"></router-link>
          <router-link to="" class="ml-8 cursor-pointer font-semibold font-sans flex justify-end items-center">Media <img src="../assets/redArrow.png" alt="arrow" class="w-3 h-3 ml-2"></router-link>
          <router-link to="" class="ml-8 cursor-pointer font-semibold font-sans">Events Calendar</router-link>
          <router-link to="" class="ml-8 mr-8 cursor-pointer font-semibold font-sans">Study Center</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>