<template>
  <div class="flex justify-between pt-[139px] mb-[98px]">
    <div class="mr-[40px]">
      <h1 class="mb-[25px] font-h1">
        Проверьте штрафы и зарегестрируйтесь в 1 клик
      </h1>
      <form @submit.prevent="handleSubmit" @click.stop class="flex flex-col">
        <div class="flex space-x-4">
          <div
            :class="['flex-1 mb-[16px]', errors.number ? 'border-red-500' : '']"
          >
            <label for="number" class="font-label">Номер автомобиля</label>
            <input
              type="text"
              id="number"
              v-model="form.number"
              class="mt-1 input-form"
              :class="{ 'border-red-500': errors.number }"
            />
          </div>
          <div :class="['flex-1', errors.region ? 'border-red-500' : '']">
            <label for="region" class="font-label">Регион</label>
            <input
              type="text"
              id="region"
              v-model="form.region"
              class="mt-1 input-form"
              :class="{ 'border-red-500': errors.region }"
            />
          </div>
        </div>
        <div class="mb-[16px]" :class="{ 'border-red-500': errors.license }">
          <label for="license" class="font-label"
            >Свидетельство о регистрации ТС</label
          >
          <input
            type="text"
            id="license"
            v-model="form.license"
            class="mt-1 input-form"
            :class="{ 'border-red-500': errors.license }"
          />
        </div>
        <div class="flex text-white mb-[16px]">
          <button
            type="submit"
            class="btn-animated bg-blue px-[20px] py-[11px] rounded-[5px] mr-[21px]"
          >
            Проверить штрафы
          </button>
          <button
            type="button"
            @click="openModal"
            class="px-[20px] py-[11px] font-btn border-blue text-black"
          >
            О сервисе <span class="text-dark-blue">(1 мин. 20 сек)</span>
          </button>
        </div>
        <p class="font-politic">
          Нажимая «Проверить штрафы» вы соглашаетесь с политикой обработки
          персональных данных и принимаете оферту
        </p>
      </form>
    </div>
    <div class="max-w-[500px]">
      <img src="/assets/images/img.png" alt="h" class="bg-auto" />
    </div>
    <Modal :isOpen="isModalOpen" :videoSrc="videoSrc" @close="closeModal" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Modal from "~/components/Modal.vue";

const form = ref({
  number: "",
  license: "",
  region: "",
});

const errors = ref({
  number: false,
  license: false,
  region: false,
});

const isModalOpen = ref(false);
const videoSrc = ref("https://www.youtube.com/embed/DeqM073s5E8");

const validateForm = () => {
  errors.value.number = !form.value.number;
  errors.value.license = !form.value.license;
  errors.value.region = !form.value.region;

  return !errors.value.number && !errors.value.license && !errors.value.region;
};

const handleSubmit = () => {
  if (validateForm()) {
    alert(
      "Прекрасно! Вы доказали свою предусмотрительность и ответственность, заполнив все необходимые поля. Ваше внимание к деталям и точное выполнение требований заслуживают восхищения и похвалы. Ваши действия свидетельствуют о высоком уровне осознанности и компетентности. Ваша старательность и дисциплина являются залогом успешного и безмятежного будущего. Браво!"
    );
  } else {
    alert(
      "Если же вы, дерзкий невежда, осмелитесь не заполнить все необходимые поля, то вас настигнут такие неописуемые страдания, что сама мысль о них повергнет вас в трепет и ужас. Вас будут преследовать нескончаемые мучения, сравнимые разве что с самыми мрачными кошмарами, и каждый день вашей жизни превратится в беспросветное адское терзание. Безразличие к требованиям приведет к неизбежному и жестокому наказанию, от которого не будет спасения, и вы будете проклинать тот миг, когда допустили столь роковую ошибку. Заполнение всех полей – это ваш единственный шанс избежать неминуемого апокалипсиса, который поглотит вашу душу и разум."
    );
  }
};

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const clearErrors = () => {
  errors.value.number = false;
  errors.value.license = false;
  errors.value.region = false;
};

const handleClickOutside = (event) => {
  const formElement = event.target.closest("form");
  if (!formElement) {
    clearErrors();
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
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

/* красная рамка */
.border-red-500 {
  border-color: #f56565 !important;
}
</style>
