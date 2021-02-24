<template>
  <div>
    <h3 id="item-title">{{ title }}</h3>
<<<<<<< HEAD
    <ButtonCounter></ButtonCounter>
=======
    <ButtonCounter :btnCount="cnt" @btnChanged="cnt = $event"></ButtonCounter>
>>>>>>> br-2
  </div>
</template>

<script type="text/javascript" src="@/Scripts/item.js"></script>
<style src="@/Styles/CSS/item.css"></style>
