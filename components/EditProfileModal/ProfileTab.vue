<template>
    <div class="flex justify-start gap-10">
        <div class="flex flex-col relative">
            <!-- <div class="absolute bottom-0 right-2 font-bold text-green-200 cursor" @click="showEditValues">EDIT</div> -->
            <div 
            :class="{'bg-slate-500' : showEditName}"
            class="cursor-default flex items-center p-3 hover:bg-slate-500 transition-all rounded  mt-5"
            @mouseenter="showEditField">
                <IconComponent :props="{ name: 'mdi-account', size: 'default' }" />
                <div class="pl-2">Chad Lew</div>
            </div>
            <div 
            @mouseenter="showEditField"
            :class="{'bg-slate-500' : showEditHandle}"
            class="cursor-default flex items-center p-3 hover:bg-slate-500 transition-all rounded"
            >
                <IconComponent :props="{ name: 'mdi-at', size: 'default' }" />
                <div class="pl-2">MochiTheDog</div>
            </div>
            <div 
            @mouseenter="showEditField"
            :class="{'bg-slate-500' : showEditLocation}"
            class="cursor-default flex items-center p-3 hover:bg-slate-500 transition-all rounded ">
                <IconComponent :props="{ name: 'mdi-map-marker', size: 'default' }" />
                <div class="pl-2 ">San Fransisco</div>
            </div>
            <div 
            @mouseenter="showEditField"
            :class="{'bg-slate-500' : showEditBirthday}"
            class="cursor-default flex items-center p-3 hover:bg-slate-500 transition-all rounded">
                <IconComponent :props="{ name: 'mdi-cake-variant', size: 'default' }" />
                <div class="pl-2">July 21, 1995</div>
            </div>
            <div 
            @mouseenter="showEditField"
            :class="{'bg-slate-500' : showEditProfilePhoto}"
            class="cursor-default flex items-center p-3 hover:bg-slate-500 transition-all rounded">
                <IconComponent :props="{ name: 'mdi-image', size: 'default' }" />
                <div class="pl-2">Profile Photo</div>
            </div>
        </div>
            <div class="borde w-full">

                <div v-if="showEditName">
                    <div class="text-base font-semibold">This is the name displayed everywhere you comment, message, or post a status.</div>
                    <div class="py-4 font-bold">Change your name here.</div>
                <v-text-field
                    density="compact"
                    bg-color="#4b5563"
                    variant="solo"
                    append-inner-icon="mdi-account"
                    label="Name"
                    placeholder="Mark Twain"
                    type="email"
                    ></v-text-field>
             
                </div>

                <div v-if="showEditHandle">
                    <div class="text-base font-semibold">This is the handle people use to tag or reach you at</div>
                    <div class="py-4 font-bold">Change your handle here.</div>
                    <v-text-field
                        density="compact"
                        bg-color="#4b5563"
                        variant="solo"
                        append-inner-icon="mdi-at"
                        label="Handle"
                        placeholder="@MarkTwain69"
                        type="email"
                        ></v-text-field>
                </div>
                <div v-if="showEditLocation">
                    <div class="text-base font-semibold">This is the location people can see you at on your profile</div>
                    <div class="py-4 font-bold">Change your Location here.</div>
                    <v-text-field
                        density="compact"
                        bg-color="#4b5563"
                        variant="solo"
                        append-inner-icon="mdi-at"
                        label="Handle"
                        placeholder="@MarkTwain69"
                        type="email"
                        ></v-text-field>
                </div>
                <div v-if="showEditBirthday">
                    <div class="text-base font-semibold">This is the handle people use to tag or reach you at</div>
                    <div class="py-4 font-bold">Change your handle here.</div>
                    <v-text-field
                        density="compact"
                        bg-color="#4b5563"
                        variant="solo"
                        append-inner-icon="mdi-at"
                        label="Handle"
                        placeholder="@MarkTwain69"
                        type="email"
                        ></v-text-field>
                </div>

            </div>
           <div class="editInputs grow"
           v-if="wantsEdit">
        <v-file-input
        focused
        :rules="rules"
        bg-color="#4b5563"
        density="compact"
        class="pt-4"
        accept="image/*"
        label="Profile Picture"
        variant="solo"
        append-inner-icon="mdi-camera"
        ></v-file-input>
        <v-text-field
        density="compact"
        bg-color="#4b5563"
        variant="solo"
        append-inner-icon="mdi-account"
        label="Name"
        placeholder="Mark Twain"
        type="email"
        ></v-text-field>
      
        <v-text-field
        density="compact"
        bg-color="#4b5563"
        variant="solo"
        append-inner-icon="mdi-map-marker"
        label="Location"
        placeholder="San Fransisco, CA"
        type="email"
        ></v-text-field>
        <v-text-field
        density="compact"
        bg-color="#4b5563"
              v-model="dateFormatted"
              variant="solo"
              label="Birthday"
              hint="MM/DD/YYYY format"
              persistent-hint
              append-inner-icon="mdi-calendar"
              v-bind="attrs"
              @blur="date = parseDate(dateFormatted)"
              v-on="on"

            ></v-text-field>
        </div>
    
</div>
</template>

<script setup>
const wantsEdit = ref(false);
const showEditName = ref(false);
const showEditHandle = ref(false);
const showEditLocation = ref(false);
const showEditBirthday = ref(false);
const showEditProfilePhoto = ref(false);
const showEditValues = () => {
    wantsEdit.value = !wantsEdit.value;
}
const rules = [
value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
  ];

const showEditField = (e) => {
    console.log(e.target.innerText);
    reset();
    nextTick(() => {
        switch(e.target.innerText) {
            case "Chad Lew":
                showEditName.value = true;
                break;
            case "MochiTheDog":
                showEditHandle.value = true;
                break;
            case "San Fransisco":
                showEditLocation.value = true;
                break;
            case "July 21, 1995":
                showEditBirthday.value = true;
                break;
            case "Profile Photo":
                showEditProfilePhoto.value = true;
                break;
        }
    })
}

const reset = () => {
    showEditName.value = false;
    showEditHandle.value = false;
    showEditLocation.value = false;
    showEditBirthday.value = false;
    showEditProfilePhoto.value = false;
}

</script>

<style scoped>

.v-enter-active,
.v-leave-active {
  /* transition: opacity 0.5s ease; */
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>