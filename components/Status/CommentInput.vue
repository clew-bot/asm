<style scoped>
.comment-container >>> .v-field__outline {
  display: none !important;
  
}

.comment-container >>> .v-field--variant-filled, .v-field__overlay  {
  background-color: inherit !important;
  border-bottom: solid .2px var(--dashBorder);
  border-radius: 0px !important;
  
  
}

.comment-container >>> .v-field--variant-filled, .v-field__overlay  {
  background-color: inherit !important;
  border-bottom: none;
  border-radius: 0px !important;
  

}

.comment-container >>> .v-field__overlay {
  background-color: inherit !important;
  border-radius: 0px !important;
 
}

.comment-container >>> .v-field__overlay {
  /* border: solid 2px red !important; */
  background: #5d615d !important;
  border-radius: 0px !important;
 
}

.comment-container >>> .v-label {
  text-transform: none !important;
  border-radius: 0px !important;

}

.comment-container >>> .v-container {
  padding: 0px !important;

  /* width: 80% !important; */
}
</style>
<template>
    <div class="flex items-end justify-center border-t-[.2px] border-t-[var(--dashBorder)] ">
        <div class="p-3 pt-[.65rem]">
            <v-avatar
            size="33">
                <v-img
                    src="https://i.pinimg.com/originals/40/54/f1/4054f1b2083dc3f0bf3f8ef5f85a2dfd.jpg"
                    alt="John"
                    class="cursor-pointer"
                >
                </v-img>
            </v-avatar>
        </div>
        <div class="comment-container grow">
            <v-container fluid>
                <v-textarea
                v-model="theText"
                elevation="0"
                variant="solo"
                label=""
                auto-grow
                placeholder="Comment.."
                rows="1"
                class=""
                hide-details="true"
                ></v-textarea>
            </v-container>
        </div>
        <div
        class="pb-5 px-4 "
        >
            <v-icon
            @click="sendComment"
            color="#67e8f9"
            class="-rotate-[30deg] cursor-pointer hover:text-[#22d3ee]">mdi-send</v-icon>
        </div>
<!-- <button @click="clickMe">CLick</button> -->
    </div>
</template>

<script setup>
const theText = ref('');

const sendComment = () => {
  console.log(theText.value);
}


</script>