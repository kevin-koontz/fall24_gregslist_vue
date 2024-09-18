<script setup>
import { AppState } from "@/AppState.js";
import { logger } from "@/utils/Logger.js";
import { housesService } from "@/services/HousesService.js";
import { computed, onMounted } from "vue";
import Pop from "@/utils/Pop.js";

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

</template>


<style lang="scss" scoped></style>