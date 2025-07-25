// "use client"

// import { useState } from "react"
// import { MapPin, Phone, Info } from 'lucide-react';


// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   })

//   const [status, setStatus] = useState({
//     loading: false,
//     success: false,
//     error: null,
//   })

//   const handleChange = (e: any) => {
//     const { name, value } = e.target
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }))
//   }

//   const validateForm = () => {
//     if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
//       throw new Error("Please enter a valid email address")
//     }
//     if (!formData.phone.match(/^\+?[\d\s-()]{8,}$/)) {
//       throw new Error("Please enter a valid phone number")
//     }   
//   }

//   const handleSubmit = async (e: any) => {
//     e.preventDefault()

//     setStatus({ loading: true, success: false, error: null })

//     try {
//       validateForm()
//       const response = await fetch("/api/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       })

//       const data = await response.json()

//       if (!response.ok) {
//         throw new Error(data.error || "Failed to send message")
//       }

//       setStatus({ loading: false, success: true, error: null })
//       setFormData({ name: "", email: "", phone: "", subject: "", message: "" })

//       setTimeout(() => {
//         setStatus({ loading: false, success: false, error: null })
//       }, 5000)
//     } catch (error) {
//       setStatus({
//         loading: false,
//         success: false,
//         error: error.message || "Failed to send message. Please try again.",
//       })
//     }
//   }



//   return (
//     <div className="bg-white">
//       {/* Contact Info Section */}
//       <section className="py-16 mt-40">
//         <div className="container mx-auto px-4  ">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10  ">
//             {/* About Box */}
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <div className="flex items-center mb-4">
//                 <div className="bg-orange-400 p-3 rounded-full">
//                   <Info className="w-6 h-6 text-white" />
//                 </div>
//               </div>
//               <h3 className="text-xl font-semibold mb-2">About</h3>
//               <p className="text-gray-600">Lorem ipsum is simply free text dolor sit amet, conse ullam blandit.</p>
//             </div>

//             {/* Address Box */}
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <div className="flex items-center mb-4">
//                 <div className="bg-orange-400 p-3 rounded-full">
//                   <MapPin className="w-6 h-6 text-white" />
//                 </div>
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Address</h3>
//               <p className="text-gray-600">
//                 304-305, Sursarthi Complex,<br />
//                 Nr. Ambawadi Circle,<br />
//                 Ahmedabad, Gujarat,<br />
//                 India - 380006
//               </p>
//             </div>

//             {/* Contact Box */}
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <div className="flex items-center mb-4">
//                 <div className="bg-orange-400 p-3 rounded-full">
//                   <Phone className="w-6 h-6 text-white" />
//                 </div>
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Contact</h3>
//                 <p className="text-gray-600">
//                 <a href="mailto:anush@differentstrokes.in" className="hover:text-blue-600">venkat@differentstrokes.in</a><br />
//                 <a href="tel:+91 98250 62650" className="hover:text-blue-600">+91 98250 62650</a>
//               </p>
//               <p className="text-gray-600 mt-1">
//                 <a href="mailto:anush@differentstrokes.in" className="hover:text-blue-600">anush@differentstrokes.in</a><br />
//                 <a href="tel:+91 98250 62650" className="hover:text-blue-600">+91 98980 09993</a>
//               </p>
            
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Form Section */}
//       <section className="py-16 bg-gray-50">
//   <div className="container mx-auto px-4">
//     <div className="text-center mb-12">
//       <h3 className="text-gray-600 font-semibold mb-2">Contact With Us</h3>
//       <h2 className="text-3xl font-bold">Drop Us a Message</h2>
//     </div>

//     <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl mx-auto">
//       <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="space-y-6">
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Your name"
//             required
//             className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:border-blue-500"
//           />
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Email address"
//             required
//             className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:border-blue-500"
//           />
//           <input
//             type="tel"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             placeholder="Phone number"
//             className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:border-blue-500"
//           />
//           <input
//             type="text"
//             name="subject"
//             value={formData.subject}
//             onChange={handleChange}
//             placeholder="Subject"
//             className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:border-blue-500"
//           />
//         </div>

//         <div className="space-y-6">
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Write message"
//             required
//             className="w-full h-64 px-6 py-4 bg-gray-50 border border-gray-100 rounded-lg resize-none focus:outline-none focus:border-blue-500"
//           ></textarea>
//           <button
//             type="submit"
//             disabled={status.loading}
//             style={{ cursor: status.loading ? 'not-allowed' : 'pointer' }}
//             className="w-full bg-orange-400 text-white py-4 px-8 rounded-full hover:bg-orange-500 transition-colors duration-300"
//           >
//              {status.loading ? "Sending..." : (
//                         <>
//                           Send Message <i className="ri-arrow-right-up-line"></i>
//                         </>
//                       )}

//               {status.success && <div className="text-green-600 text-center mt-4">Message sent successfully!</div>}
//               {status.error && <div className="text-red-600 text-center mt-4">{status.error}</div>}

//           </button>
          
//         </div>
//       </form>
//     </div>
//   </div>
// </section>


//       {/* Map Section */}
//       <section className="h-[450px] w-full">
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.105899907694!2d72.5504830113518!3d23.019883579088848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e855afcd82dd9%3A0x25a673544f40c3ad!2sDifferent%20Strokes!5e0!3m2!1sen!2sin!4v1733725401437!5m2!1sen!2sin"
//           className="w-full h-full border-0"
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//         ></iframe>
//       </section>
//     </div>
//   );
// };

// export default Contact;










































































"use client"

import { useState} from "react"
import { MapPin, Phone, Info } from 'lucide-react'



const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const validateForm = () => {
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      throw new Error("Please enter a valid email address")
    }
    if (!formData.phone.match(/^\+?[\d\s-()]{8,}$/)) {
      throw new Error("Please enter a valid phone number")
    }   
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setStatus({ loading: true, success: false, error: null })

    try {
      validateForm()
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      setStatus({ loading: false, success: true, error: null })
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })

      setTimeout(() => {
        setStatus({ loading: false, success: false, error: null })
      }, 5000)
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: error instanceof Error ? error.message : "Failed to send message. Please try again.",
      })
    }
  }

  return (
    <div className="bg-white">

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50  mt-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-gray-600 font-semibold mb-2">Connect With Us</h3>
            <h2 className="text-3xl bg-gradient-to-r from-orange-600 to-orange-400 inline-block text-transparent bg-clip-text font-bold">Drop Us a Message</h2>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:border-orange-500"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  required
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:border-orange-500"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:border-orange-500"
                />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:border-orange-500"
                />
              </div>

              <div className="space-y-6">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write message"
                  required
                  className="w-full h-64 px-6 py-4 bg-gray-50 border border-gray-100 rounded-lg resize-none focus:outline-none focus:border-orange-500"
                ></textarea>
                <button
                  type="submit"
                  disabled={status.loading}
                  className="w-full bg-orange-500 text-white py-4 px-8 rounded-full hover:bg-orange-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status.loading ? "Sending..." : (
                    <>
                      Send Message <i className="ri-arrow-right-up-line"></i>
                    </>
                  )}
                </button>
                
                {status.success && <div className="text-green-600 text-center mt-4">Message sent successfully!</div>}
                {status.error && <div className="text-red-600 text-center mt-4">{status.error}</div>}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[450px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.105899907694!2d72.5504830113518!3d23.019883579088848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e855afcd82dd9%3A0x25a673544f40c3ad!2sDifferent%20Strokes!5e0!3m2!1sen!2sin!4v1733725401437!5m2!1sen!2sin"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  )
}

export default Contact