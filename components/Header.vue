<!-- <template>
  <header class="bg-black py-[12px]">
    <div class="flex justify-between items-center max-w-[1200px] m-auto px-4">
      <div class="">
        <nav class="nav">
          <ul class="flex list-none text-white items-center">
            <li>
              <router-link to="/">
                <img
                  src="/assets/images/logo.svg"
                  alt="Compas Logo"
                  class="h-8"
                />
              </router-link>
            </li>
            <li class="hidden md:block ml-4">
              <router-link to="/tariffs">Тарифы</router-link>
            </li>
            <li class="hidden md:block ml-4">
              <router-link to="/contacts">Контакты</router-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="hidden md:flex items-center text-center text-white">
        <a href="tel:+74951184422">+7 495 118-44-22</a>
        <a href="#" class="mx-[30px]">Вход</a>
        <a href="#" class="bg-blue px-[18px] py-[9px] rounded-[5px]"
          >Регистрация</a
        >
      </div>
      <button @click="toggleMenu" class="md:hidden text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
    <div v-if="menuOpen" class="md:hidden bg-black text-white">
      <nav class="nav">
        <ul class="flex flex-col list-none p-4">
          <li class="mb-4"><router-link to="/tariffs">Тарифы</router-link></li>
          <li class="mb-4">
            <router-link to="/contacts">Контакты</router-link>
          </li>
          <li class="mb-4"><a href="tel:+74951184422">+7 495 118-44-22</a></li>
          <li class="mb-4"><a href="#">Вход</a></li>
          <li>
            <a
              href="#"
              class="bg-blue px-[18px] py-[9px] rounded-[5px] inline-block"
              >Регистрация</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>

<style scoped>
.nav li {
  margin-left: 20px;
}
</style>  -->

<template>
  <header class="bg-black py-[12px]">
    <div class="flex justify-between items-center max-w-[1200px] m-auto px-4">
      <div class="">
        <nav class="nav">
          <ul class="flex list-none text-white items-center">
            <li>
              <router-link to="/">
                <img
                  src="/opt/assets/images/logo.svg"
                  alt="Compas Logo"
                  class="h-8"
                />
              </router-link>
            </li>
            <li class="hidden md:block ml-4">
              <router-link to="/tariffs">Тарифы</router-link>
            </li>
            <li class="hidden md:block ml-4">
              <router-link to="/contacts">Контакты</router-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="hidden md:flex items-center text-center text-white">
        <a href="tel:+74951184422">+7 495 118-44-22</a>
        <a href="#" class="mx-[30px]">Вход</a>
        <a href="#" class="bg-blue px-[18px] py-[9px] rounded-[5px]"
          >Регистрация</a
        >
      </div>
      <button @click="toggleMenu" class="md:hidden text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
    <div v-if="menuOpen" class="md:hidden bg-black text-white">
      <nav class="nav">
        <ul class="flex flex-col list-none p-4">
          <li class="mb-4"><router-link to="/tariffs">Тарифы</router-link></li>
          <li class="mb-4">
            <router-link to="/contacts">Контакты</router-link>
          </li>
          <li class="mb-4"><a href="tel:+74951184422">+7 495 118-44-22</a></li>
          <li class="mb-4"><a href="#">Вход</a></li>
          <li>
            <a
              href="#"
              class="bg-blue px-[18px] py-[9px] rounded-[5px] inline-block"
              >Регистрация</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>

<style scoped>
.nav li {
  margin-left: 20px;
}
</style>
