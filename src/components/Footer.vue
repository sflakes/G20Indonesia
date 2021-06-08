<template>
  <div class="w-auto h-60 bromos ml-28">
    <!-- <div class="flex justify-between">
      <div class="h-1/2 w-full py-5">
        <img src="../assets/footerLogo.png" alt />
      </div>
      <div class="pt-5 pb-5 flex justify-center items-center">
        <button class="rounded-xl bg-yellow-200 w-96 h-20">VIRTUAL OFFICE</button>
      </div>
    </div>
    <div class=" w-full">
      <ul class="flex">
        <li>FAQS</li>
        <li>Legal Notes</li>
        <li>Contact</li>
      </ul>
      <button></button>
    </div>-->
    <div class="flex bromos justify-between  ">
      <div class=" h-60 w-1/3 bg-cover bg-no-repeat">
        <img src="../assets/footerLogo.png" alt />
        <ul class="flex relative">
          <li class="ml-3 font-bold text-white">FAQS</li>
          <li class="ml-3 font-bold text-white">Legal Notes</li>
          <li class="ml-3 font-bold text-white">Contact</li>
        </ul>
      </div>
      <div class="flex justify-center items-center">
        <button class="rounded-xl bg-white w-96 h-20">VIRTUAL OFFICE</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.bromos {
  height: 100%;
  background: -o-linear-gradient(
      45deg,
      rgba(220, 38, 38, 0.9),
      rgba(236, 34, 34, 0.493)
    ),
    url("../assets/bromos.jpg");
  background: linear-gradient(
      45deg,
      rgba(236, 34, 34, 0.493),
      rgba(220, 38, 38, 0.9)   
    ),
    url("../assets/bromos.jpg");
  background-size: contain;
  
  background-position: left;
  background-repeat: no-repeat;
}
</style>