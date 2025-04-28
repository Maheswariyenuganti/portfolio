
const nodemailer=require("nodemailer");
const sendGridTansport=require("nodemailer-sendgrid-transport");

//transport fn
const transporter=nodemailer.createTransport(
    sendGridTansport({
        auth: {
            api_key:process.env.API_SENDGRID,
        },
    })
)

const sendEmailController=(req,res)=>{
try{
    const {name,email,msg}=req.body;
    //validation
    if(!name || !email || !msg){
        return res.status(500).send({
            success:false,
            message:"Please provide  All Properties"
        })
    }
    //emailmatter
    transporter.sendMail({
        to:"22jr1a05g2@gmail.com",
        from:"22jr1a05g2@gmail.com",
        subject:"Regarding mern portfolio",
        html: ` 
        <h5>Detail Information</h5>
        <ul>
        <li><p>Name : ${name}</p></li>
          <li><p>Email : ${email}</p></li>
            <li><p>Message : ${msg}</p></li>
        
        
        </ul>
        
        
        
        `
    })
return res.status(200).send({
    success:true,
    message:"Your Message send successfully",
});
}
catch(error){
    console.log(error);
    return res.send({
        success:false,
        message:"Send Email API Error",
        error:"Something Went Wrong"
    })
}
}
module.exports={sendEmailController};