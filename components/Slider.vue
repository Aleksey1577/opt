<template>
  <div class="mb-[100px]">
    <h2 class="text-center font-h2 mb-[40px]">Документы</h2>
    <div class="relative overflow-hidden">
      <div
        class="flex transition-transform duration-500 ease-in-out"
        :style="{
          transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)`,
        }"
      >
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="flex-shrink-0 w-full md:w-1/3 px-4"
        >
          <div
            class="border-[1px] border-dark-gray shadow-custom p-[25px] rounded-lg bg-white flex flex-col justify-between h-full"
          >
            <div class="mb-[35%]">
              <h3 class="mb-[15px] font-titl-doc">{{ slide.title }}</h3>
              <p class="font-desc-doc">{{ slide.description }}</p>
            </div>
            <router-link
              :to="slide.link"
              class="btn-animated bg-blue w-full rounded-[5px] text-white mt-[15px] text-center py-[11px]"
            >
              Перейти
            </router-link>
          </div>
        </div>
      </div>
      <button
        @click="prevSlide"
        class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300 z-10"
      >
        <img src="/images/left.svg" alt="Previous Slide" />
      </button>
      <button
        @click="nextSlide"
        class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300 z-10"
      >
        <img src="/images/right.svg" alt="Next Slide" />
      </button>
    </div>
    <div class="flex justify-center mt-4 space-x-2">
      <span
        v-for="(slide, index) in paginationDots"
        :key="index"
        :class="indicatorClass(index)"
        @click="goToSlide(index)"
        class="cursor-pointer w-3 h-3 rounded-full"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const slides = ref([
  {
    title: "Лицензионный договор",
    description:
      "Механизм разбрасывания веерного типа приводится в действие от колес тележки, отличается простой и надежной конструкцией, не нуждается в смазке.",
    link: "/license-agreement",
  },
  {
    title: "Политика обработки персональных данных",
    description:
      "Радиус разброса ПГМ составляет до 3 метров и может регулироваться.",
    link: "/",
  },
  {
    title: "Информация об оплате",
    description:
      "Десятипозиционный переключатель дозировки расположен на ручке тележки и позволяет очень точно регулировать объем рассыпаемого реагента с учетом его массы и фракции.",
    link: "/",
  },
  {
    title: "Еще одна карточка",
    description:
      "Десятипозиционный переключатель дозировки расположен на ручке тележки и позволяет очень точно регулировать объем рассыпаемого реагента с учетом его массы и фракции.",
    link: "/",
  },
]);

const slidesPerView = 3;
const currentSlide = ref(0);

const paginationDots = computed(() => {
  return Math.ceil(slides.value.length / slidesPerView);
});

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % paginationDots.value;
};

const prevSlide = () => {
  currentSlide.value =
    (currentSlide.value - 1 + paginationDots.value) % paginationDots.value;
};

const goToSlide = (index) => {
  currentSlide.value = index;
};

const indicatorClass = (index) => {
  return index === currentSlide.value ? "bg-blue" : "bg-dark-gray";
};
</script>

<style scoped>
.shadow-custom {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}
.border-red-500 {
  border-color: #f56565 !important;
}

/* анимация */
.btn-animated {
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
}

.btn-animated::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300%;
  height: 300%;
  background: rgba(255, 255, 255, 0.2);
  transition: width 0.4s ease, height 0.4s ease, top 0.4s ease, left 0.4s ease;
  border-radius: 50%;
  z-index: 0;
  transform: translate(-50%, -50%);
}

.btn-animated:hover::before {
  width: 0;
  height: 0;
}

.btn-animated:hover {
  background-color: #0056b3;
  color: #fff;
}

.btn-animated:active::before {
  width: 0;
  height: 0;
  top: 50%;
  left: 50%;
}

.btn-animated span {
  position: relative;
  z-index: 1;
}
</style>
