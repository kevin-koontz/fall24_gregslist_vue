<script setup>
import { AppState } from "@/AppState.js";
import { logger } from "@/utils/Logger.js";
import { housesService } from "@/services/HousesService.js";
import { computed, onMounted } from "vue";
import Pop from "@/utils/Pop.js";
import { House } from "@/models/House.js";
import HouseListing from "@/components/globals/HouseListing.vue";

const houses = computed(() => AppState.houses)

onMounted(() => {
  getHouses()
})


async function getHouses() {
  try {
    await housesService.getHouses()
  } catch (error) {
    Pop.error(error);
    logger.error(error)
  }
}

</script>


<template>
<div class="container">
  <section class="row">
    <div class="col-12">
      <h1 class="text-center">Houses</h1>
    </div>
  </section>
  <section class="row">
    <div v-for="house in houses" :key="house.id" class="col-3">
      <HouseListing :houseProp="house" />
    </div>
  </section>
</div>
</template>


<style lang="scss" scoped></style>