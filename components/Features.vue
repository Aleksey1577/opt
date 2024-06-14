<template>
  <div class="mb-[85px]">
    <h2 class="text-center font-h2">Плюсы использования сервиса «Компас» для анализа штрафов</h2>
    <div class="flex flex-wrap -mx-2">
      <div class="w-full md:w-1/2 lg:w-1/3 p-[35px]" v-for="(feature, index) in features" :key="index">
        <div class="bg-gray p-[20px] rounded-[10px] border-[1px] border-dark-gray flex justify-between items-center text-start h-full">
          <div class="mr-[10px] ">
            <img :src="feature.image" alt="j" class="custom-size" />
          </div>
          <div>
            <h3 class="mb-[15px] font-titl-feat">{{ feature.title }}</h3>
            <p class="font-desc-feat">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { content } from "~/data/content.js";
const { features } = content;
</script>

<style scoped>

</style>
