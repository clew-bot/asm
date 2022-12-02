import { ref } from "vue";
const photoData = ref([]);
const vidData = ref([]);

const progress = ref(0);
const scopedFiles = ref([]);
const thumbsnap_api_key = "000025e537b9452d8255b4fab140f7f7";
export default async function (allFiles) {
  console.log("allFiles", allFiles);
  photoData.value = [];
  vidData.value = [];
  scopedFiles.value = allFiles;
  let count;
  for (count = 0; count <= allFiles.length - 1; count++) {
    let formData = new FormData();
    formData.append("key", thumbsnap_api_key);
    formData.append("media", allFiles[count]);
    await saveImage(formData);
  }
  if (count == allFiles.length) {
    return { progress, imageData: photoData.value, videoData: vidData.value, emit: true };
  }
}

const possibleImageTypes = {
  '.jpg': ".jpg",
};

const possibleVideoTypes = {
  '.mp4': ".mp4",
};

const saveImage = async (formData) => {
  const data = await useFetch("https://thumbsnap.com/api/upload", {
    method: "POST",
    body: formData,
  });
  if (data) {
    const fileType = data.data.value.data.media.slice(-4);
    console.log("22", fileType);
    if (fileType in possibleImageTypes) {
      console.log('image type')
      photoData.value.push(data.data.value.data);
    } else if (fileType in possibleVideoTypes) {
      console.log('video type')
      vidData.value.push(data.data.value.data);
      console.log("vidData", vidData.value);
    }
    console.log("the data", data);
    progress.value += 100 / scopedFiles.value.length;
    
  } else {
    console.log("error");
  }
};
