<template>
  <div class="container">
    <div class="article w-3/5 mx-28 pt-20 text-white">
      <h1 class="font-semibold text-3xl text-sans font-acme">INDONESIA G20 PRESIDENCY</h1>
      <p
        class="mt-10 font-sans font-semibold text-2xl"
      >Since Desember 1st, 2021, Indonesia holds the Presidency of the G20, the international forum that brings together the world's major economies.</p>
      <br />
      <p
        class="font-sans font-semibold text-2xl"
      >In 2021 the international community will need to show courage and ambition in order to overcome the great challenges of today, from recovering from the pandemix to addressing cliamte change, from supporting innovation to overcome poverty and inequality.</p>
      <br />
      <p
        class="font-sans font-semibold text-2xl"
      >The Presidency's agenda rest upon three main pillars with them Recover Together Recover Stronger ----------</p>
      <button
        class="bg-white hover:bg-white-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 rounded-full py-3 px-6 bg-white text-black font-semibold outline-none border-none mt-10"
      >Go To Priorities</button>
    </div>

    <div class="flex mt-20">
      <div class="w-full justify-between ml-28 mr-10">
        <div class="allNews">
          <div class="grid grid-cols-2 gap-4">
            <div class="col-span-2 jokowi w-full h-96 relative">
              <div class="details absolute bottom-0 text-white font-bold w-full p-5">
                <div class="cardTitle bg-yellow-300 text-black w-2/5 pl-2">Category A</div>
                  <h2 class="mt-5 text-xl">June 1st, 2021</h2>
                  <h1 class="mb-2 text-3xl">Indonesia will host G20 in 2020</h1>
                <router-link to class="cursor-pointer">read more</router-link>
              </div>
            </div>
            <div class="aceh bg-no-repeat bg-center bg-cover bg-top w-full h-52 relative">
              <div class="details absolute bottom-0 font-bold w-full p-5">
                <div class="cardTitle bg-blue-400 w-2/4 pl-2 text-black">Category B</div>
                  <h2 class="mt-5 text-white">May 12st, 2021</h2>
                  <h1 class="bmb-2 text-white text-xl mb-2">Eid Al Fitr Mubarak</h1>
                <router-link to class="cursor-pointer text-white">read more</router-link>
              </div>
            </div>
            <div class="monas bg-no-repeat bg-center bg-cover bg-top w-full h-52 relative">
              <div class="details absolute bottom-0 text-white font-bold w-full p-5">
                <div class="cardTitle bg-yellow-300 text-black w-2/4 pl-2">Category A</div>
                  <h2 class="mt-2">April 1st, 2021</h2>
                <h1
                  class="bmb-2 font-bold textmd mb-1"
                 >G20 Sherpa Office had began to visit line ministries for strengthening priorities from each working group</h1>
                <router-link to class="cursor-pointer">read more</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white p-5 rounded-xl mr-10 ml-4">
        <div class="eventCalendar">
          <div class="calendar-header">
            <h1>Calendar Event</h1>
            <div class="flex justify-between mt-5">
              <div>
                <button></button>
                <button></button>
                <button>today</button>
              </div>
              <div>
                <h1>MAY 2021</h1>
              </div>
              <div>
                <button class="rounded-xl py-3 px-6 bg-blue-200">Month</button>
                <button class="rounded-xl py-3 px-6 bg-blue-200">Week</button>
                <button class="rounded-xl py-3 px-6 bg-blue-200">Day</button>
                <button class="rounded-xl py-3 px-6 bg-blue-200">List</button>
              </div>
            </div>
          </div>
          <div class="calendar">
            <span class="day-name">Mon</span>
            <span class="day-name">Tue</span>
            <span class="day-name">Wed</span>
            <span class="day-name">Thu</span>
            <span class="day-name">Fri</span>
            <span class="day-name">Sat</span>
            <span class="day-name">Sun</span>
            <div class="day day--disabled">30</div>
            <div class="day">31</div>
            <div class="day">1</div>
            <div class="day">2</div>
            <div class="day">3</div>
            <div class="day">4</div>
            <div class="day">5</div>
            <div class="day day--disabled">6</div>
            <div class="day">7</div>
            <div class="day">8</div>
            <div class="day">9</div>
            <div class="day">10</div>
            <div class="day">11</div>
            <div class="day">12</div>
            <div class="day day--disabled">13</div>
            <div class="day">14</div>
            <div class="day">15</div>
            <div class="day">16</div>
            <div class="day">17</div>
            <div class="day">18</div>
            <div class="day">19</div>
            <div class="day day--disabled">20</div>
            <div class="day">21</div>
            <div class="day">22</div>
            <div class="day">23</div>
            <div class="day">24</div>
            <div class="day">25</div>
            <div class="day day--disabled">26</div>
            <div class="day day--disabled">27</div>
            <div class="day">28</div>
            <div class="day">29</div>
            <div class="day">30</div>
            <div class="day">31</div>
            <div class="day day--disabled">1</div>
            <div class="day day--disabled">2</div>
            <section class="task task--warning">Projects</section>
            <section class="task task--danger">Design Sprint</section>
            <section class="task task--primary">
              Product Checkup 1
              <div class="task__detail">
                <h2>Product Checkup 1</h2>
                <p>15-17th November</p>
              </div>
            </section>
            <section class="task task--info">Product Checkup 2</section>
          </div>
        </div>
      </div>
    </div>
    <div class="buttons w-full mt-10 mr-20 flex ">
      <div class="first w-1/2 flex justify-center">
        <router-link to>
          <button
            class="bg-white hover:bg-red-white rounded-xl p-5 mb-10 font-semibold"
          >Read All News</button>
        </router-link>
      </div>
      <div class="second ml-26  w-1/2 flex justify-center">
        <router-link to>
          <button
            class="bg-white hover:bg-red-white rounded-xl p-5 mb-10 font-semibold"
          >Go to Event Calendar</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.jokowi {
  /* width: 600px;
  height: 300px; */
  background: linear-gradient(
      45deg,
      rgba(220, 38, 38, 0.9),
      rgba(243, 88, 88, 0.1)
    ),
    url("../assets/jokowiSpeech.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.aceh {
  /* width: 290px;
  height: 180px; */
  background: linear-gradient(
      45deg,
      rgba(220, 38, 38, 0.9),
      rgba(243, 88, 88, 0.1)
    ),
    url("../assets/masjid-agung-aceh.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.monas {
  /* width: 290px;
  height: 180px;
  margin-left: 170px; */
  background: linear-gradient(
      45deg,
      rgba(220, 38, 38, 0.9),
      rgba(243, 88, 88, 0.1)
    ),
    url("../assets/monas.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/*START OF CALENDAR*/
.eventCalendar {
  width: 600px;
  height: 540px;
  background-color: rgba(218, 218, 218, 0.233);
}

.calendar {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(7, minmax(40px, 1fr));
  grid-template-rows: 50px;
  grid-auto-rows: 70px;
  overflow: auto;
}
.calendar-container {
  margin-left: 20px;
  width: 40%;
  margin: auto;
  overflow: hidden;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background: #fff;
  max-width: 500px;
}
.calendar-header {
  text-align: center;
  padding: 20px 0 0 20px;
  background: rgba(223, 223, 223, 0.349);
  border-bottom: 1px solid rgba(166, 168, 179, 0.12);
}
.calendar-header h1 {
  margin: 0;
  font-size: 18px;
}
.calendar-header p {
  margin: 5px 0 0 0;
  font-size: 13px;
  font-weight: 600;
  color: rgb(63, 60, 60);
}
.calendar-header button {
  background: 0;
  border: 0;
  padding: 0;
  color: rgb(41, 41, 41);
  cursor: pointer;
  outline: 0;
}

.day {
  border-bottom: 1px solid rgb(146, 144, 144);
  border-right: 1px solid rgb(66, 65, 65);
  text-align: right;
  padding: 14px 20px;
  letter-spacing: 1px;
  font-size: 12px;
  box-sizing: border-box;
  color: #424242;
  position: relative;
  pointer-events: none;
  z-index: 1;
}
.day:nth-of-type(7n + 7) {
  border-right: 0;
}
.day:nth-of-type(n + 1):nth-of-type(-n + 7) {
  grid-row: 2;
}
.day:nth-of-type(n + 8):nth-of-type(-n + 14) {
  grid-row: 3;
}
.day:nth-of-type(n + 15):nth-of-type(-n + 21) {
  grid-row: 4;
}
.day:nth-of-type(n + 22):nth-of-type(-n + 28) {
  grid-row: 5;
}
.day:nth-of-type(n + 29):nth-of-type(-n + 35) {
  grid-row: 6;
}
.day:nth-of-type(7n + 1) {
  grid-column: 1/1;
}
.day:nth-of-type(7n + 2) {
  grid-column: 2/2;
}
.day:nth-of-type(7n + 3) {
  grid-column: 3/3;
}
.day:nth-of-type(7n + 4) {
  grid-column: 4/4;
}
.day:nth-of-type(7n + 5) {
  grid-column: 5/5;
}
.day:nth-of-type(7n + 6) {
  grid-column: 6/6;
}
.day:nth-of-type(7n + 7) {
  grid-column: 7/7;
}
.day-name {
  font-size: 12px;
  text-transform: uppercase;
  color: #99a1a7;
  text-align: center;
  border-bottom: 1px solid rgba(166, 168, 179, 0.12);
  line-height: 50px;
  font-weight: 500;
}
.day--disabled {
  color: rgba(152, 160, 166, 0.6);
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f9f9fa' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E");
  cursor: not-allowed;
}

.task {
  border-left-width: 3px;
  padding: 8px 12px;
  margin: 10px;
  border-left-style: solid;
  font-size: 14px;
  position: relative;
}
.task--warning {
  border-left-color: #fdb44d;
  grid-column: 4 / span 3;
  grid-row: 3;
  background: #fef0db;
  align-self: center;
  color: #fc9b10;
  margin-top: -5px;
}
.task--danger {
  border-left-color: #fa607e;
  grid-column: 2 / span 3;
  grid-row: 3;
  margin-top: 15px;
  background: rgba(253, 197, 208, 0.7);
  align-self: end;
  color: #f8254e;
}
.task--info {
  border-left-color: #4786ff;
  grid-column: 6 / span 2;
  grid-row: 5;
  margin-top: 15px;
  background: rgba(218, 231, 255, 0.7);
  align-self: end;
  color: #0a5eff;
}
.task--primary {
  background: #4786ff;
  border: 0;
  border-radius: 4px;
  grid-column: 3 / span 3;
  grid-row: 4;
  align-self: end;
  color: #fff;
  box-shadow: 0 10px 14px rgba(71, 134, 255, 0.4);
}
.task__detail {
  position: absolute;
  left: 0;
  top: calc(100% + 10px);
  background: #fff;
  border: 1px solid rgba(166, 168, 179, 0.2);
  color: #000;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 4px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  z-index: 2;
}
.task__detail:after,
.task__detail:before {
  bottom: 100%;
  left: 30%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}
.task__detail:before {
  border-bottom-color: rgba(166, 168, 179, 0.2);
  border-width: 8px;
  margin-left: -8px;
}
.task__detail:after {
  border-bottom-color: #fff;
  border-width: 6px;
  margin-left: -6px;
}
.task__detail h2 {
  font-size: 15px;
  margin: 0;
  color: #51565d;
}
.task__detail p {
  margin-top: 4px;
  font-size: 12px;
  margin-bottom: 0;
  font-weight: 500;
  color: rgba(81, 86, 93, 0.7);
}

/*END OF CALENDAR*/
</style>
