import React from "react";
// import { toast } from "react-toastify";
// import axios from "axios";
// // import axios from "axios";
// import { toast} from "react-toastify";
import Swal from "sweetalert2"
import "./Contact.css";

// import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
const Contact = () => {
// const [name,setName]=useState("");


const onSubmit=async (e)=>{
 
e.preventDefault();

try{
  const formData = new FormData(e.target);

  formData.append("access_key", "0768c459-cba8-4249-a451-0170c308850c");
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: json
  }).then((res) => res.json());
  
  if(res.success){

 Swal.fire({
  title:"success",
  text:"Message sent successfully",
  icon:"success"
 })

  }
  
}
catch(error){
  console.log(error);
}

}
 
  return (
    <>
      
<div className="contact-container">

  <form onSubmit={onSubmit} className="contact-left">
<div class="contact-left-title">
  <h2>Contact With</h2>
<hr/>
</div>
 <input type="text" name="name" placeholder="Enter Your Name" className="contact-inputs" required/>
 
 <input type="email" name="email" placeholder="Enter Your Email" className="contact-inputs" required width={23} />
 <textarea name="message" id="" cols="20" rows="5" placeholder="Your Message" className="contact-inputs" required >

 </textarea>
 <button type="submit">
  Submit 

 </button>

  </form>
    <div className="contact-right">
  <img
                      src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                      alt="ocontact"
                     className="contact-image"
                    />
               
  </div>

</div>







    </>
  );
};

export default Contact;