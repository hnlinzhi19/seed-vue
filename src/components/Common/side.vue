<template>
  <Menu active-name="1" theme="dark" width="auto">
    <Submenu name="1">
      <template slot="title">
        <Icon type="ios-navigate"></Icon>
        导航一
      </template>
      <Menu-item name="1-1">选项 1</Menu-item>
      <Menu-item name="1-2">选项 2</Menu-item>
      <Menu-item name="1-3">选项 3</Menu-item>
    </Submenu>
  </Menu>
</template>

<script>
  export default {
    name: 'side',
  };

</script>
