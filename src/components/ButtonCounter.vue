<template>
  <button v-on:click="plusCount">{{ btnCount }}</button>
</template>

<script type="text/javascript" src="@/Scripts/buttonCounter.js"></script>
<style src="@/Styles/CSS/buttonCounter.css"></style>

<!-- 
antes de hacer el @emit lo resolví así de forma patillera
<button v-on:click="count++">{{ count }}</button> !-->
