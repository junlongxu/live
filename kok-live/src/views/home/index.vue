<template>
  <div>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <el-tabs>
          <el-tab-pane label="引流">
            <VideoPlayer />
          </el-tab-pane>
          <el-tab-pane label="推流">
            <AnchorLive />
          </el-tab-pane>
        </el-tabs>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import VideoPlayer from "@/components/VideoPlayer.vue";
import AnchorLive from "@/components/AnchorLive.vue";
export default {
  props: {},
  computed: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  watch: {},
  components: { VideoPlayer, AnchorLive }
};
</script>

<style scoped>
</style>
