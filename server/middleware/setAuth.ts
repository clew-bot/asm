import jwt from 'jsonwebtoken';
    export default defineEventHandler(async (event) => {
        console.log("run");
        const cookie = getCookie(event, "altine");
        console.log(event.node.req.url === "/dashboard")
        if (event.node.req.url === "/dashboard") {
        jwt.verify(cookie, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                console.log("err");
                return "False";
            } else {
                console.log("decoded", decoded);
                return decoded;
            }
          }
        )
      }
    },
  );