<style lang="scss" scoped>

</style>
<template>
    <div class="relative">
        <div class="h-[130px] w-[130px] border-2 absolute
        left-3 -top-12 rounded-full z-10">
        <img 
        width="130px"
        height="130px"
        class="object-contain rounded-full"
        src="https://thumbsnap.com/t/wEuYWvW3.jpg" alt="">
        </div>
        <div class="absolute top-5 right-6">
            <v-btn
            color="white"
            prepend-icon="mdi-cog"
            class="rounded-2xl text-sky-200"
            >Edit Profile</v-btn>
            <input type="file" @input="checkFile"/>
        </div>
    </div>
    <div class="pt-24">
        <div class="px-5">
            <div class="font-bold text-2xl text-amber-200">
                Chad Lew    
            </div>
            <div>
                @mochitheDog • <span class="italic font-semibold">Online</span>
            </div>
        </div>
    </div>
</template>

<script setup>

const image = ref(null)
const checkFile = (e) => {
    console.log(e.target.files[0])
    const file = e.target.files[0]
    getBase64(file)
}

let thumbsnap_api_key = '000025e537b9452d8255b4fab140f7f7';
function getBase64(file) {
    let formData = new FormData()
    formData.append('key', thumbsnap_api_key);
    formData.append('media', file);
    console.log(formData)
     saveImage(formData);
//    var reader = new FileReader();
//    reader.readAsDataURL(file);
//    reader.onload = function () {
//     //  console.log(reader.result);
//     //  saveImage(formData);
//    };
//    reader.onerror = function (error) {
//      console.log('Error: ', error);
//    };
}

const saveImage = async (formData) => {
    const data = await useFetch('https://thumbsnap.com/api/upload', {
        method: 'POST',
        body: formData
    })
    console.log(data.data.value.data)

}


</script>

