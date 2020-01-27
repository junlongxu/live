<template>
  <div>
    <el-button @click="ppPusher()">获取摄像头</el-button>
    <video id="video" width="640" height="480" autoplay></video>
    <el-button id="snap">拍照</el-button>
    <canvas id="canvas" width="640" height="480"></canvas>
  </div>
</template>

<script>
export default {
  props: {},
  computed: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    ppPusher() {
      var canvas = document.getElementById("canvas");
      var context = canvas.getContext("2d");
      var video = document.getElementById("video");
      var audio = document.getElementById("audio");
      // Trigger photo take
      document.getElementById("snap").addEventListener("click", function() {
        context.drawImage(video, 0, 0, 640, 480);
      });
      window.URL =
        window.URL || window.webkitURL || window.mozURL || window.msURL;
      // Get access to the camera!
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
          .getUserMedia({ audio: true, video: true })
          .then(function(stream) {
            console.log(stream);
            if ("srcObject" in video) {
              video.srcObject = stream;
            } else {
              video.src = window.URL && window.URL.createObjectURL(stream);
            }
            video.play();
          });
      }
    }
  },
  watch: {},
  components: {}
};
</script>

<style scoped>
</style>
