<template>
  <div class="flex w-full m-auto justify-center mt-20">
    <img src="../assets/gerbangKiri.png" alt />
    <div class="w-1/2 mt-10">
      <section class="flex text-6xl justify-center content-center text-center font-bold">
        <div class="days mr-2 relative text-red-400">
          {{displayDays}}
          <div class="label text-sm bottom-0 text-black text-3xl mt-10">Days</div>
        </div>
        <div class="hours mx-2 text-red-400">
          {{displayHours}}
          <div class="label text-sm bottom-0 text-black text-3xl mt-10">Hours</div>
        </div>
        <div class="minutes mx-2 text-red-400">
          {{displayMinutes}}
          <div class="label text-sm bottom-0 text-black text-3xl mt-10">Minutes</div>
        </div>
        <div class="seconds ml-2 text-red-400">
          <div>{{displaySeconds}}</div>
          <div class="label text-sm bottom-0 text-black text-3xl mt-10">Seconds</div>
        </div>
      </section>
      <div class="w-full mt-10 flex justify-center items-center">
        <button
          class="text-center bg-gray-100 active:bg-gray-200 p-5 rounded-xl"
        >Go to Event Calendar</button>
      </div>
    </div>
    <img src="../assets/gerbangKanan.png" alt />
  </div>
</template>

<script>
export default {
  data: () => ({
    displayDays: 0,
    displayHours: 0,
    displayMinutes: 0,
    displaySeconds: 0
  }),
  computed: {
    _seconds: () => 1000,
    _minutes() {
      return this._seconds * 60;
    },
    _hours() {
      return this._minutes * 60;
    },
    _days() {
      return this._hours * 24;
    }
  },
  mounted() {
    this.showRemainings();
  },
  methods: {
    showRemainings() {
      const timer = setInterval(() => {
        const now = new Date();
        const end = new Date(2022, 10, 31, 10, 10, 10, 10);
        const distance = end.getTime() - now.getTime();

        if (distance < 0) {
          clearInterval(timer);
          return;
        }

        const days = Math.floor(distance / this._days);
        const hours = Math.floor((distance % this._days) / this._hours);
        const minutes = Math.floor((distance % this._hours) / this._minutes);
        const seconds = Math.floor((distance % this._minutes) / this._seconds);
        this.displayMinutes = minutes < 10 ? "0" + minutes : minutes;
        this.displaySeconds = seconds < 10 ? "0" + seconds : seconds;
        this.displayHours = hours < 10 ? "0" + hours : hours;
        this.displayDays = days < 10 ? "0" + days : days;
      }, 1000);
    }
  }
};
</script>

<style>
</style>