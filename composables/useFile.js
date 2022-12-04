import { ref } from "vue";
const photoData = ref([]);
const vidData = ref([]);
const scopedFiles = ref([]);
const backUpKey = "9uGuBilq1V7HHkeu";
const allMedia = ref([]);
const backUpUploader = 'https://yourimageshare.com/api/upload?key=9uGuBilq1V7HHkeu'
let count;
export default async function (allFiles) {
  const config = useRuntimeConfig().public;
  const token = config.IMAGE_TOKEN;
  allMedia.value = [];
  photoData.value = [];
  vidData.value = [];
  scopedFiles.value = allFiles;
  console.log('af', allFiles)
  for (count = 0; count <= allFiles.length - 1; count++) {
    if(allFiles[count].size / 1048576 > 50 ) {
      console.log('too big')
      return {error: `File ${allFiles[count].name} is too big! We support files up to 47MB`}
    }
    let formData = new FormData();
    formData.append("key", token);
    formData.append("media", allFiles[count]);

    let backUpFormData = new FormData();
    formData.append("upload", allFiles[count]);
    await saveImage(formData, backUpFormData);
  }
  if (count == allFiles.length) {
    return {imageData: photoData.value, videoData: vidData.value, media: allMedia.value,  emit: true, error: false };
  }
}

const possibleImageTypes = {
  '.jpg': '.jpg',
  '.png': '.png',
  '.gif': '.gif',
};

const possibleVideoTypes = {
  '.mp4': ".mp4",
};

const saveImage = async (formData, backUpFormData) => {
  const data = await useFetch("https://thumbsnap.com/api/upload", {
    method: "POST",
    body: formData,
  });
  console.log(data)
  if (data) {
    console.log('working...', data)
    const fileType = data.data.value.data.media.slice(-4);
    // console.log('fff2222', fileType)
    if (fileType in possibleImageTypes) {
      const mediaObj = {
        media: data.data.value.data.media,
        height: data.data.value.data.height,
        width: data.data.value.data.width,
      }
      allMedia.value.push(mediaObj);
      photoData.value.push(data.data.value.data);
    } else if (fileType in possibleVideoTypes) {
      // allMedia.value.push(data.data.value.data.media);
      const mediaObj = {
        media: data.data.value.data.media,
        height: data.data.value.data.height,
        width: data.data.value.data.width,
      }
      allMedia.value.push(mediaObj);
      vidData.value.push(data.data.value.data);
    }
    // progress.value += 100 / scopedFiles.value.length;
    
  } else {
  //   console.log('loool',backUpFormData)
  //   console.log("Running backup!");
  //   console.log(backUpFormData);
  //   const data = await useFetch(backUpUploader, {
  //   method: "POST",
  //   body: backUpFormData,
  // });
    console.log('lol')
  }
};
