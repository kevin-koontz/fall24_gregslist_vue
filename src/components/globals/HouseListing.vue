<script setup>
import { House } from "@/models/House.js";

const props = defineProps({
  houseProp: { type: House, required: true }
})
</script>


<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card mb-3">
          <img :src="houseProp.imgUrl" class="card-img-top" alt="House Image">
          <div class="card-body">
            <h5 class="card-title">{{ houseProp.priceAsCurrency }}</h5>
            <div class="d-flex justify-content-between">
              <span>Floors: {{ houseProp.levels }}</span>
              <span>Bedrooms: {{ houseProp.bedrooms }}</span>
              <span>Bathrooms: {{ houseProp.bathrooms }}</span>
            </div>
            <p class="card-text">{{houseProp.description}}</p>
            <div class="d-flex flex-column">
              <img class="creator-img" :src="houseProp.creatorPicture" alt="User Image">
              <span>Posted by: {{ houseProp.creatorName }}</span>
              <div class="d-flex justify-content-between">
                <button class="btn btn-success w-100 mt-2">Delete</button>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.creator-img {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  object-fit: cover;
}

</style>