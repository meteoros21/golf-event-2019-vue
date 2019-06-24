<template>
<div class="container">
    <div class="content">
        <Banner></Banner>
        <div id="slider1" class="carousel slide" data-ride="carousel" data-interval="false">
            <div class="carousel-inner">
                <div class="record-wrap carousel-item active">
                    <RoundRecords1 v-bind:round="1"></RoundRecords1>
                </div>
                <!-- end of carousel-item -->

                <div class="record-wrap carousel-item">
                    <RoundRecords2 v-bind:round="2"></RoundRecords2>
                </div>
                <!-- end of carousel-item -->

                <div class="record-wrap carousel-item">
                    <FinalResult></FinalResult>
                    <Mvp></Mvp>
                </div>
                <!-- end of carousel-item -->
                <a class="carousel-control-prev" href="#slider1" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true" style="outline: black"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#slider1" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true" style="outline: black"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
            <!-- end of carousel-inner -->
        </div>
        <div class="pager">
            <div id="pager-1" class="circle-active"></div>
            <div id="pager-2" class="circle"></div>
            <div id="pager-3" class="circle"></div>
        </div>
    </div>
</div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import RoundRecords1 from "@/components/RoundRecords.vue";
import RoundRecords2 from "@/components/RoundRecords.vue";
import FinalResult from "@/components/FinalResult.vue";
import Mvp from "@/components/Mvp.vue";
import gameHandler from "@/api/game.js";
import Vue from "vue"

Vue.prototype.EventBus = new Vue()

export default {
  name: "home",
  components: {
    Banner, RoundRecords1, RoundRecords2, FinalResult, Mvp
  },

  created() {
    let data = gameHandler.getData()
    .then(data => {
      if (data['status'] === 200) {
        var mvpData = data['mvp'];
        this.EventBus.$emit('mvp-data', mvpData)
        this.EventBus.$emit('final-result', data['finalRecord'])
        this.EventBus.$emit('round-record', {round:1, dataList: data['dataList1']})
        this.EventBus.$emit('round-record', {round:2, dataList: data['dataList2']})
      }
    })
  },

  mounted () {
    $('#slider1').on('slid.bs.carousel', function (event) {
      var nextactiveslide = $(event.relatedTarget).index() + 1;

      $('.circle-active').removeClass('circle-active').addClass('circle');
      $('#pager-' + nextactiveslide).removeClass('circle').addClass('circle-active');
    });
  }
};
</script>
