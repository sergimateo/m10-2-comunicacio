<template>
  <div id="parent">
    <Item v-for="item in items" :title="item.title" :key="item.id"></Item>
  </div>
</template>

<script type="text/javascript" src="@/Scripts/parent.js"></script>
<style src="@/Styles/CSS/parent.css"></style>
