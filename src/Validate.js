export default function Validate(values){
    const error = {}

   const email_pattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
//    const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/

   if(values.email === ""){
    error.email = "Email is Required"
   }
   else if (!email_pattern.test(values.email)){
    error.email = "Invalid email"
   }

   if(values.password === ""){
    error.password = "Password is Required"
   }
//    else if(password_pattern.test(values.password)){
//     error.password = "Invalid Password"
//    }

   if(values.confirmPassword === ""){
    error.confirmPassword = "Confirm Password is Required"
   }
   else if(values.confirmPassword !== values.password){
    error.confirmPassword = "Password does not match"
   }

   return error

}