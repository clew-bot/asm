import { ref } from 'vue';
const videoData = ref([]);
const progress = ref(0);
const scopedImages = ref([]);
const thumbsnap_api_key = "000025e537b9452d8255b4fab140f7f7";
export default async function (allVideos) {
    scopedImages.value = allVideos;
    let count;
    for (count = 0; count <= allVideos.length - 1; count++) {
      let formData = new FormData();
      formData.append("key", thumbsnap_api_key);
      formData.append("media", allVideos[count]);
      await saveImage(formData);
    }
    if (count == allVideos.length) {
        return { progress, data: videoData.value, emit: true};
    }
}

const saveImage = async (formData) => {
    const data = await useFetch("https://thumbsnap.com/api/upload", {
      method: "POST",
      body: formData,
    });
    if (data) {
      progress.value += 100 / scopedImages.value.length;
      videoData.value.push(data.data.value.data);
    } else {
      console.log("error");
    }
  
  };