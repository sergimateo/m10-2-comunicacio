<template>
  <div>
    <h3 id="item-title">{{ title }}</h3>
    <ButtonCounter :btnCount="cnt" @btnChanged="cnt = $event"></ButtonCounter>
  </div>
</template>

<script type="text/javascript" src="@/Scripts/item.js"></script>
<style src="@/Styles/CSS/item.css"></style>
