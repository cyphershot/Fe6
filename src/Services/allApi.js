import { BASE_URL } from "./base_url"
import { commonRequest } from "./commonRequest"





// form api
export const empRegister = async(body,header) =>{
  return await  commonRequest("POST",`${BASE_URL}/employee/register`,body,header)
} 


// get all users api
export const getallusers = async()=>{
  return await commonRequest("GET",`${BASE_URL}/get-all-employees`,"")
}

// get a particular user api
export const viewUser = async(id) =>{
  return await commonRequest("GET",`${BASE_URL}/employee/view/${id}`,"")

}









