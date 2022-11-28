import jwt from 'jsonwebtoken';
const config = useRuntimeConfig();
    export default defineEventHandler(async (event) => {
        console.log("run");
        const cookie:any = getCookie(event, "altine");
        console.log(event.node.req.url === "/dashboard")
        if (event.node.req.url === "/dashboard") {
        jwt.verify(cookie, config.JWT_SECRET, (err:any, decoded:any) => {
            if (err) {
                console.log("err");
                return "False";
            } else {
                // console.log("decoded", decoded);
        
                return decoded;
            }
          }
        )
      }
    },
  );