export default defineEventHandler(async(event) =>{
  console.log('New request: ' + event.node.req.url)
  console.log("useStorage", await useStorage().getItem("user"))
})