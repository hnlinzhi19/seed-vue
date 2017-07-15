<template>
  <div class="layout">
    <div class="layout-header">
    </div>
    <Row type="flex" class="layout-main">
      <i-col span="5" class="layout-menu-left">
        <side-comp></side-comp>
      </i-col>
      <i-col span="19" class="layout-content">
        <div class="layout-content-main">
          <router-view></router-view>
        </div>
      </i-col>
    </Row>
  </div>
</template>

<script>
  import SideComp from '@/components/Common/side';

  export default {
    name: 'app',
    components: {
      SideComp,
    },
  };

</script>

<style lang="scss">
  @import './assets/css/reset.scss';
  $headerH: 60px;
  .layout {
    &-header {
      height: $headerH;
      background: #495060;
    }
    &-main {
      position: absolute;
      top: $headerH;
      left: 0;
      bottom: 0;
      width: 100%;
    }
    &-menu-left {
      height: 100%;
      background: #495060;
    }
  }

</style>
