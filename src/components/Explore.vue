<template>
  <div class="mt-10">
    <div class="flex items-center">
      <div class="w-1/12 h-2 bg-yellow-900 rounded-xl mr-3"></div>
      <div>
        <h1 class="font-acme text-3xl">EXPLORE INDONESIA</h1>
      </div>
      <div class="w-full h-2 bg-yellow-900 rounded-xl ml-5"></div>
    </div>

    <div>
      <div class="ml-28">
        <div class="list w-1/2 w-full">
          <div class="h-64 grid grid-rows-3 grid-flow-col gap-3 mt-10">
            <div class="flex">
              <img src="../assets/wisata/morotai.jpg" alt class="w-20 h-20 rounded-xl" />
              <h1 class="ml-5 flex justify-center items-center font-bold text-xl">Morotai</h1>
            </div>
            <div class="flex">
              <img src="../assets/wisata/raja-ampat.jpeg" alt class="w-20 h-20 rounded-xl" />
              <h1 class="ml-5 flex justify-center items-center font-bold text-xl">Raja Ampat</h1>
            </div>
            <div class="flex">
              <img src="../assets/wisata/borobudur.jpg" alt class="w-20 h-20 rounded-xl" />
              <h1 class="ml-5 flex justify-center items-center font-bold text-xl">Borobudur</h1>
            </div>
            <div class="flex">
              <img src="../assets/wisata/lombok.jpg" alt class="w-20 h-20 rounded-xl" />
              <h1 class="ml-5 flex justify-center items-center font-bold text-xl">Lombok</h1>
            </div>
            <div class="flex">
              <img src="../assets/wisata/bromo.jpg" alt class="w-20 h-20 rounded-xl" />
              <h1 class="ml-5 flex justify-center items-center font-bold text-xl">Bromo</h1>
            </div>
            <div class="flex">
              <img src="../assets/wisata/mentawai.jpg" alt class="w-20 h-20 rounded-xl" />
              <h1 class="ml-5 flex justify-center items-center font-bold text-xl">Mentawai</h1>
            </div>
            <div class="flex">
              <img src="../assets/wisata/banka-belitung.jpg" alt class="w-20 h-20 rounded-xl" />
              <h1 class="ml-5 flex justify-center items-center font-bold text-xl">Bangka Belitung</h1>
            </div>
            <div class="flex">
              <img src="../assets/wisata/wakatobi.jpeg" alt class="w-20 h-20 rounded-xl" />
              <h1 class="ml-5 flex justify-center items-center font-bold text-xl">Wakatobi</h1>
            </div>
            <div class="flex">
              <img src="../assets/wisata/labuan-bajo.jpg" alt class="w-20 h-20 rounded-xl" />
              <h1 class="ml-5 flex justify-center items-center font-bold text-xl">Labuan Bajo</h1>
            </div>
            <div class="flex">
              <img src="../assets/wisata/toba.jpeg" alt class="w-20 h-20 rounded-xl" />
              <h1 class="ml-5 flex justify-center items-center font-bold text-xl">Toba</h1>
            </div>
            <div class="flex">
              <img src="../assets/wisata/kepulauan-seribu.jpg" alt class="w-20 h-20 rounded-xl" />
              <h1 class="ml-5 flex justify-center items-center font-bold text-xl">Kepulauan Seribu</h1>
            </div>
            <div class="text-right flex justify-end items-center">
              <div>
                <router-link to>
                  <div class="bg-blue-200 p-5 rounded-xl flex cursor-pointer">
                    <button class="mr-2">See More</button>
                    <img src="../assets/rightArrow.png" alt />
                  </div>
                </router-link>
              </div>
            </div>
          </div>
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
