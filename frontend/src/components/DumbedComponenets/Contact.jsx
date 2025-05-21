import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import email from "@/assets/contactus/email.png";
import maps from "@/assets/contactus/map.png";
import phone from "@/assets/contactus/phone-call.png";
import time from "@/assets/contactus/schedule.png"

const Contact = () => {

 const cardContent = [
  {
    img:phone,
    text:"Call",
    otherText:["+91 9266474766","+1 415-234-9076"]
  },
  {
    img:email,
    text:"Email",
    otherText:["support@softmoreit.co.in"]
  },
  {
    img:phone,
    text:"Business Hours",
    otherText:["Monday - Friday: 10:00 AM - 6:00 PM"]
  },
  {
    img:phone,
    text:"Call",
    otherText:["+91 9266474766","+1 415-234-9076"]
  },
 ]


  return (
    <div>
      <p className="text-center text-4xl font-semibold mt-4 bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-transparent bg-clip-text">
        Contact Us
      </p>
      <p className="px-4 font-semibold mt-5">
        We are thrilled to hear from you! Whether you have questions,
        suggestions, or just want to say hi, we are here to help. Feel free to
        reach out to us.
      </p>

      <div>
        <div className="px-5">
          <p
            className="mt-4 bg-gradient-to-r from-fuchsia-500 to-pink-500 text-transparent bg-clip-text"
            style={{ fontFamily: "'Pacifico', cursive" }}
          >
            Connect with us
          </p>
          <p className="text-3xl font-bold text-blue-950">
            Have a quick question?
          </p>
          <p className="text-blue-950 mt-4">
            Fill out our inquiry form, and we will get back to you within 24
            hours
          </p>


          <form className="my-10 flex flex-col gap-6">
            <input type="text" placeholder="Your Name" className="bg-gray-300 placeholder:font-semibold placeholder:text-gray-500 w-full px-5 py-3 rounded-xl"/>
            <input type="email" placeholder="Email address" className="bg-gray-300 placeholder:font-semibold placeholder:text-gray-500 w-full px-5 py-3 rounded-xl"/>
            <input type="number" placeholder="Phone Number" className="bg-gray-300 placeholder:font-semibold placeholder:text-gray-500 w-full px-5 py-3 rounded-xl"/>
            <textarea name="" id="" className="bg-gray-300 placeholder:font-semibold placeholder:text-gray-500 w-full px-5 py-3 rounded-xl" placeholder="Message..."></textarea>

            <Button className="bg-blue-700 py-5 rounded-lg font-semibold ">SEND A MESSAGE</Button>
          </form>
        </div>

        {/* for cards  */}
        <div></div>
      </div>
    </div>
  );
};

export default Contact;




const CardContact = ({image,text,otherText}) => {
  return (
    <Card>
      <div>
        <img src="" alt="" />
        <p></p>
      </div>
    </Card>
  )
}

