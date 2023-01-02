<template>
    <div>
        show arrow
    </div>
    <div>
        Now Chatting with
    </div>
    <v-card>
        <div v-for="message in props" :key="message">
            <!-- <pre>          {{ message }}</pre> -->

            <div class="flex p-2 items-start gap-2 "
                :class="setUserCss(message)">
                <v-avatar>
                    <img :src="message.owner.profilePicture" alt="avatar">
                </v-avatar>
                <div>
                    <div class="talk-bubble tri-right left-top"
                    :class="setUserCssChat(message)">
  <div class="talktext font-bold z-10 text-black"
  >
    <p>  {{  message.content  }}</p>
  </div>
</div>
                  
                </div>
           
            </div>
        </div>
    </v-card>
</template>

<script setup>
import { useUserStore } from '~~/store/userStore';
const userStore = useUserStore();
const {props} = defineProps(['props'])
console.log('props: ',props)
console.log('userStore: ',userStore.$state.userId);

// socket.value = ctx.$nuxtSocket({})

const setUserCss = (message) => {
    if (message.owner._id === userStore.$state.userId ) {
        return 'justify-start flex-row-reverse '
    } else {
        return ''
    }
}

const setUserCssChat = (message) => {
    if (message.owner._id === userStore.$state.userId ) {
        return 'tri-right border right-top'
    } else {
        return ''
    }
}


</script>

<style  scoped>
.talk-bubble {
	/* margin: 40px; */
  display: inline-block;
  position: relative;
padding: 11px;
	height: auto;
	background-color: lightyellow;
    margin-left: 10px;
}
.tri-right.left-top:after{
	content: ' ';
	position: absolute;
	width: 0;
	height: 0;
  left: -20px;
	right: auto;
  top: 0px;
	bottom: auto;
	border: 22px solid;
	border-color: lightyellow transparent transparent transparent;
}

.tri-right.border.right-top:before {
	content: ' ';
	position: absolute;
	width: 0;
	height: 0;
  left: auto;
	right: -40px;
  top: -10px;
	bottom: auto;
	border-color: #666 transparent transparent transparent;
}
.tri-right.right-top:after{
	content: ' ';
	position: absolute;
	width: 0;
	height: 0;
  left: auto;
	right: -14px;
  top: -1px;

	bottom: auto;
	border: 20px solid;
	border-color: lightyellow transparent transparent transparent;
}
</style>