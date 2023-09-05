import post from "../../sanity/schemas/post";

export const sendContactForm = async (data:any) =>fetch('api/contact', {method : "POST", body: JSON.stringify(data),headers:{
    "Content-Type":"application",
    Accept:"application/json"
}})