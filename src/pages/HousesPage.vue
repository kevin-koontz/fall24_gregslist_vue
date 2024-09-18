<script setup>
import { Pop } from '@/utils/Pop.js'

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