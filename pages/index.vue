<template>
  <div>
    <Header />
    <div class="max-w-[1200px] m-auto">
      <main>
        <Form />
        <Features />
        <Slider />
      </main>
    </div>
  </div>
</template>

<script setup>
import Header from "~/components/Header.vue";
import Form from "~/components/Form.vue";
import Features from "~/components/Features.vue";
import Slider from "~/components/Slider.vue";
</script>

<style scoped></style>
