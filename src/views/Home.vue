<template>
  <div class="home">
    <div class="app-list">
      <div
        class="app-item"
        v-for="item in appList"
        :key="item.id"
        :title="item.appName"
        @dblclick="openApp(item)"
      >
        <img :src="item.iconUrl" alt="" class="app-item-icon" />
        <span class="app-item-name">{{ item.appName }}</span>
      </div>
    </div>
    <div
      :class="{ 'mic-project-box': true, 'mic-project-box--max': isMaxApp }"
      v-show="currentApp.appName"
    >
      <div class="project-box-nav">
        <div class="box-nav-title">{{ currentApp.appName }}</div>
        <div class="box-nav-operations">
          <div class="nav-operations-item" title="最小化" @click="minApp">
            -
          </div>
          <div class="nav-operations-item" title="最大化" @click="maxApp">
            口
          </div>
          <div class="nav-operations-item" title="关闭" @click="closeApp">
            X
          </div>
        </div>
      </div>
    </div>

    <div class="bottom-nav"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      appList: [
        {
          id: 1,
          appName: "我的电脑",
          iconUrl: "https://s1.ax1x.com/2022/04/10/LkO2nI.png",
        },
        {
          id: 2,
          appName: "回收站",
          iconUrl: "https://s1.ax1x.com/2022/04/10/LkvYcQ.png",
        },
      ],
      currentApp: {},
      isMaxApp: false,
    };
  },
  methods: {
    openApp(item) {
      this.currentApp = item;
    },
    minApp() {
      this.currentApp = {};
    },
    closeApp() {
      this.currentApp = {};
    },
    maxApp() {
      this.isMaxApp = !this.isMaxApp;
    },
  },
};
</script>

<style lang="scss">
.home {
  background: url("../assets/win10Back.jpg") center  no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;

  .app-list {
    padding: 16px 8px;
    display: flex;
    flex-direction: column;
    .app-item {
      display: flex;
      width: 96px;
      flex-direction: column;
      align-items: center;
      white-space: nowrap;
      text-align: center;
      margin-bottom: 32px;
      .app-item-icon {
        width: 56px;
        margin-bottom: 8px;
      }
      .app-item-name {
        font-size: 14px;
        color: #ffffff;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
  .mic-project-box {
    width: 50vw;
    height: 50vh;
    background: #ffffff;
    position: fixed;
    left: 25vw;
    top: 25vh;
    transition: all 0.5s;
    &--max {
      width: 100vw;
      height: 100vh;
      left: 0;
      top: 0;
    }

    .project-box-nav {
      width: 100%;
      height: 32px;
      display: flex;
      padding: 8px 16px;
      justify-content: space-between;
      border-bottom: 1px solid #F5F5F5;

      .box-nav-title {
        font-size: 12px;
        width: 120px;
      }
      .box-nav-operations {
        display: flex;
        font-size: 12px;
        .nav-operations-item {
          margin-right: 16px;
        }
      }
    }
  }
}
</style>
