import axios from "axios";

export default class postServis {
   static async getApi() {
      try {
         const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
         return response.data
      }
      catch {
         console.log("error")
      }

   }
}
