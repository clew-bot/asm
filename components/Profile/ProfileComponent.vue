<style lang="scss" scoped>

</style>
<template>
    <div>
    <div class="relative">
        <div >
        <v-avatar
        class="h-[130px] w-[130px] border-2 absolute
        left-3 -top-12 rounded-full z-9"
            color="primary"
            size="128"
            >
            <img 
        src="https://thumbsnap.com/t/wEuYWvW3.jpg" alt=""></v-avatar>

        </div>
        <div class="absolute top-5 right-6">
          
            <ClientOnly>
            <EditProfileModal/>
            </ClientOnly>
        </div>
    </div>
    <div class="pt-24">
        <div class="px-5">
            <div class="font-bold text-2xl text-amber-200">
                {{props.username}} 
            </div>
            <div>
                @{{props.handleName}} • <span class="italic font-semibold">Online</span>
            </div>
            <div class="flex text-sm font-semibold pt-4">
                <IconComponent class="pr-2" :props="{name: 'mdi-calendar-text', size: 'x-small'}"/><span>Joined <span class="font-base text-yellow-400">{{memberSinceLog(props.createdAt)}}</span></span>
            </div>
            <div class="flex text-sm font-semibold pt-1">
                <IconComponent class="pr-2" :props="{name: 'mdi-map-marker', size: 'x-small'}"/><span>{{props.location}}</span>
            </div>
            <div class="flex text-sm font-semibold pt-1">
                <IconComponent class="pr-2" :props="{name: 'mdi-cake-variant', size: 'x-small'}"/><span>{{memberSinceLog(props.createdAt)}}</span>
            </div>
            <div class="pt-5 italic">If it ain't broke don't fix it</div>
        </div>
    </div>
</div>
</template>

<script setup>
import { memberSinceLog } from '@/utils/timeConvert'
const image = ref(null)
const { props } = defineProps(['props'])

console.log(props)


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

