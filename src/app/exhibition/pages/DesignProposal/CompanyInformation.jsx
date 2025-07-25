// "use client"
// import React, { useState } from 'react';

// // Custom Card component to replace shadcn/ui Card
// const Card = ({ children, className = '' }) => (
//   <div className={`bg-white rounded-lg shadow-md ${className}`}>
//     {children}
//   </div>
// );

// const CompanyRegistrationForm = () => {
//   const [currentStep, setCurrentStep] = useState(1)

//   const [formData, setFormData] = useState({
//     companyName: '',
//     contactPerson: '',
//     email: '',
//     mobileNumber: '',
//     phoneNumber: '',
//     website: '',
//     designation: '',
//     address: '',

//      // Event Information
//     exhibitionName: '',
//     venueLocation: '',
//     exhibitionDates: '',
//     exhibitionDetails: '',

//     // Stand/Stall Information
//     standNumber: '',
//     hallNumber: '',
//     standSizeLength: '',
//     standSizeWidth: '',
//     standLayout: '',
//     needMezzanine: '',
//     mezzanineDetails: '',

//        // Stand/Stall Design Requirements
//     theme: '',
//     exhibitsDisplay: '',
//     areas: [],
//     areaDetails: '',

//     audioVisual: [],
//     pantryItems: [],
//     additionalInfo: '',

//     brandingType: '',
//     companyLogo: null,
//     brandingDescription: '',

//     budgetFrom: '',
//     budgetTo: '',
//     budgetNotes: '',


//     presentationDate: '',
//     approvalDate: '',
//     otherInformation: '',
//     floorPlan: null,
//     verificationCode: ''
//   });
//   const [errors, setErrors] = useState({});

//   const steps = [
//     { id: 1, title: 'COMPANY INFORMATION' },
//     { id: 2, title: 'EVENT INFORMATION' },
//     { id: 3, title: 'STAND/STALL INFORMATION' },
//     { id: 4, title: 'STAND/STALL DESIGN REQUIREMENTS' },
//     { id: 5, title: 'STAND/STALL EQUIPMENT REQUIREMENTS' },
//     { id: 6, title: 'BRANDING & SIGNAGE REQUIREMENTS' },
//     { id: 7, title: 'BUDGET INDICATION' },
//     { id: 8, title: 'OTHER INFORMATION' }
//   ];
//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     if (type === 'checkbox') {
//       let newValue;
//       if (name === 'areas') {
//         if (value === 'None Of The Above') {
//           newValue = checked ? ['None Of The Above'] : [];
//         } else {
//           newValue = checked
//             ? [...formData.areas.filter(area => area !== 'None Of The Above'), value]
//             : formData.areas.filter(area => area !== value);
//         }
//       } else if (name === 'audioVisual') {
//         if (value === 'None Of The Above') {
//           newValue = checked ? ['None Of The Above'] : [];
//         } else {
//           newValue = checked
//             ? [...formData.audioVisual.filter(item => item !== 'None Of The Above'), value]
//             : formData.audioVisual.filter(item => item !== value);
//         }
//       } else if (name === 'pantryItems') {
//         if (value === 'None Of The Above') {
//           newValue = checked ? ['None Of The Above'] : [];
//         } else {
//           newValue = checked
//             ? [...formData.pantryItems.filter(item => item !== 'None Of The Above'), value]
//             : formData.pantryItems.filter(item => item !== value);
//         }
//       } else {
//         newValue = checked
//           ? [...(formData[name] || []), value]
//           : (formData[name] || []).filter(item => item !== value);
//       }
//       setFormData(prev => ({
//         ...prev,
//         [name]: newValue
//       }));
//     } else if (type === 'file') {
//       setFormData(prev => ({
//         ...prev,
//         [name]: e.target.files[0]
//       }));
//     } else {
//       setFormData(prev => ({
//         ...prev,
//         [name]: value
//       }));
//     }

//     if (errors[name]) {
//       setErrors(prev => ({
//         ...prev,
//         [name]: ''
//       }));
//     }
//   };
//     const [loading, setLoading] = useState(false)
//     const [status, setStatus] = useState("");;

//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       setLoading(true);
//       setStatus("");

//       try {
//         // Convert files to Base64 if they exist
//         const convertToBase64 = (file) => {
//           return new Promise((resolve, reject) => {
//             if (!file) return resolve(null); // No file selected
//             const reader = new FileReader();
//             reader.readAsDataURL(file);
//             reader.onload = () => resolve(reader.result);
//             reader.onerror = (error) => reject(error);
//           });
//         };

//         const companyLogoBase64 = await convertToBase64(formData.companyLogo);
//         const floorPlanBase64 = await convertToBase64(formData.floorPlan);

//         const formDataToSend = {
//           ...formData,
//           companyLogo: companyLogoBase64,
//           floorPlan: floorPlanBase64,
//         };

//         const response = await fetch("/api/contact", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formDataToSend),
//         });

//         const data = await response.json();
//         if (response.ok) {
//           setStatus("Email sent successfully!");
//           setFormData({
//             companyName: "",
//             contactPerson: "",
//             email: "",
//             mobileNumber: "",
//             phoneNumber: "",
//             website: "",
//             designation: "",
//             address: "",
//             exhibitionName: "",
//             venueLocation: "",
//             exhibitionDates: "",
//             exhibitionDetails: "",
//             standNumber: "",
//             hallNumber: "",
//             standSizeLength: "",
//             standSizeWidth: "",
//             standLayout: "",
//             needMezzanine: "",
//             mezzanineDetails: "",
//             theme: "",
//             exhibitsDisplay: "",
//             areas: [],
//             areaDetails: "",
//             audioVisual: [],
//             pantryItems: [],
//             additionalInfo: "",
//             brandingType: "",
//             companyLogo: null,
//             brandingDescription: "",
//             budgetFrom: "",
//             budgetTo: "",
//             budgetNotes: "",
//             presentationDate: "",
//             approvalDate: "",
//             otherInformation: "",
//             floorPlan: null,
//             verificationCode: "",
//           }); // Reset form
//         } else {
//           setStatus(data.error || "Failed to send email.");
//         }
//       } catch (error) {
//         setStatus("Something went wrong. Try again.");
//       } finally {
//         setLoading(false);
//       }
//     };


//   const validateStep = () => {
//     const newErrors = {};
//     if (currentStep === 1) {
//       if (!formData.companyName) newErrors.companyName = 'This field is required!';
//       if (!formData.contactPerson) newErrors.contactPerson = 'This field is required!';
//       if (!formData.email) newErrors.email = 'This field is required!';
//       if (!formData.mobileNumber) newErrors.mobileNumber = 'This field is required!';
//       if (!formData.phoneNumber) newErrors.phoneNumber = 'This field is required!';
//       if (!formData.website) newErrors.website = 'This field is required!';
//       if (!formData.designation) newErrors.designation = 'This field is required!';
//     }
//     else if (currentStep === 2) {
//       if (!formData.exhibitionName) newErrors.exhibitionName = 'This field is required!';
//       if (!formData.venueLocation) newErrors.venueLocation = 'This field is required!';
//       if (!formData.exhibitionDates) newErrors.exhibitionDates = 'This field is required!';
//     }
//     else if (currentStep === 3) {
//       if (!formData.standNumber) newErrors.standNumber = 'This field is required!';
//       if (!formData.hallNumber) newErrors.hallNumber = 'This field is required!';
//       if (!formData.standSizeLength || !formData.standSizeWidth) newErrors.standSize = 'Size is required!';
//       if (!formData.standLayout) newErrors.standLayout = 'This field is required!';
//       if (!formData.needMezzanine) newErrors.needMezzanine = 'This field is required!';
//     } 
//     if (currentStep === 4) {
//       if (!formData.exhibitsDisplay) {
//         newErrors.exhibitsDisplay = 'This field is required!';
//       }
//       if (formData.areas.length === 0) {
//         newErrors.areas = 'Please select at least one area';
//       }
//     }
//     if (currentStep === 6) {      
//       if (formData.companyLogo) {
//         const validTypes = [
//           'image/jpeg', 
//           'image/jpg', 
//           'image/png', 
//           'application/pdf', 
//           'application/postscript', // For .ai and .eps (Adobe Illustrator files)
//           'application/x-cdr' // CorelDRAW (.cdr)
//         ];

//         if (!validTypes.includes(formData.companyLogo.type)) {
//           newErrors.companyLogo = 'Please upload only .ai, .cdr, .jpeg, .png, or .pdf files!';
//         }
//       }
//     }

//     if (currentStep === 7) {
//       if (!formData.budgetFrom) newErrors.budgetFrom = 'Budget range (from) is required!';
//       if (!formData.budgetTo) newErrors.budgetTo = 'Budget range (to) is required!';
//       if (Number(formData.budgetFrom) > Number(formData.budgetTo)) {
//         newErrors.budgetFrom = 'From amount cannot be greater than To amount';
//       }
//     }
//     if (currentStep === 8) {
//       if (!formData.presentationDate) newErrors.presentationDate = 'Presentation date is required!';
//       if (!formData.floorPlan) newErrors.floorPlan = 'Floor plan is required!';

//       if (formData.floorPlan) {
//         const validTypes = ['image/jpeg', 'image/jpg', 'application/pdf'];
//         if (!validTypes.includes(formData.floorPlan.type)) {
//           newErrors.floorPlan = 'Please upload only JPEG or PDF files!';
//         }
//       }
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleNext = () => {
//     if (validateStep()) {
//       setCurrentStep(prev => Math.min(prev + 1, steps.length ));
//     }
//   };

//   const handlePrev = () => {
//     if (validateStep()) {
//       setCurrentStep(prev => Math.min(prev - 1, steps.length));
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 mt-44">
//       {/* Progress Steps */}
//       <div className="mb-8">
//         {steps.map(step => (
//           <div key={step.id} className="mb-4">
//             <div className="flex items-center">
//               <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
//                 currentStep === step.id 
//                   ? 'bg-orange-500 text-white' 
//                   : currentStep > step.id 
//                     ? 'bg-green-500 text-white'
//                     : 'bg-gray-200 text-gray-600'
//               }`}>
//                 {step.id}
//               </div>
//               <div className="ml-4 flex items-center">
//                 <span className={`font-medium ${
//                   currentStep === step.id ? 'text-orange-600' : 'text-gray-600'
//                 }`}>
//                   {step.title}
//                 </span>
//                 <span className="ml-2 text-sm text-gray-400">Step {step.id}</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Form Content */}
//       <Card className="p-6">
//       <form onSubmit={handleSubmit} >
//         {currentStep === 1 && (
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label className="block mb-2">
//                 Company Name
//                 <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="companyName"
//                 value={formData.companyName}
//                 onChange={handleInputChange}
//                 className={`w-full p-2 border rounded ${
//                   errors.companyName ? 'border-red-500' : 'border-gray-300'
//                 }`}
//               />
//               {errors.companyName && (
//                 <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>
//               )}
//             </div>

//             <div>
//               <label className="block mb-2">
//                 Contact Person
//                 <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="contactPerson"
//                 value={formData.contactPerson}
//                 onChange={handleInputChange}
//                 className={`w-full p-2 border rounded ${
//                   errors.contactPerson ? 'border-red-500' : 'border-gray-300'
//                 }`}
//               />
//               {errors.contactPerson && (
//                 <p className="text-red-500 text-sm mt-1">{errors.contactPerson}</p>
//               )}
//             </div>

//             <div>
//               <label className="block mb-2">
//                 E-mail
//                 <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 className={`w-full p-2 border rounded ${
//                   errors.email ? 'border-red-500' : 'border-gray-300'
//                 }`}
//               />
//               {errors.email && (
//                 <p className="text-red-500 text-sm mt-1">{errors.email}</p>
//               )}
//             </div>

//             <div>
//               <label className="block mb-2">
//                 Mobile Number
//                 <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="tel"
//                 name="mobileNumber"
//                 value={formData.mobileNumber}
//                 onChange={handleInputChange}
//                 className={`w-full p-2 border rounded ${
//                   errors.mobileNumber ? 'border-red-500' : 'border-gray-300'
//                 }`}
//               />
//               {errors.mobileNumber && (
//                 <p className="text-red-500 text-sm mt-1">{errors.mobileNumber}</p>
//               )}
//             </div>

//             <div>
//               <label className="block mb-2">
//                 Phone Number
//                 <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="tel"
//                 name="phoneNumber"
//                 value={formData.phoneNumber}
//                 onChange={handleInputChange}
//                 className={`w-full p-2 border rounded ${
//                   errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
//                 }`}
//               />
//               {errors.phoneNumber && (
//                 <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
//               )}
//             </div>

//             <div>
//               <label className="block mb-2">
//                 Website
//                 <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="url"
//                 name="website"
//                 value={formData.website}
//                 onChange={handleInputChange}
//                 className={`w-full p-2 border rounded ${
//                   errors.website ? 'border-red-500' : 'border-gray-300'
//                 }`}
//               />
//               {errors.website && (
//                 <p className="text-red-500 text-sm mt-1">{errors.website}</p>
//               )}
//             </div>

//             <div>
//               <label className="block mb-2">
//                 Designation
//                 <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="designation"
//                 value={formData.designation}
//                 onChange={handleInputChange}
//                 className={`w-full p-2 border rounded ${
//                   errors.designation ? 'border-red-500' : 'border-gray-300'
//                 }`}
//               />
//               {errors.designation && (
//                 <p className="text-red-500 text-sm mt-1">{errors.designation}</p>
//               )}
//             </div>

//             <div className="md:col-span-2">
//               <label className="block mb-2">
//                 Address
//               </label>
//               <textarea
//                 name="address"
//                 value={formData.address}
//                 onChange={handleInputChange}
//                 rows={3}
//                 className="w-full p-2 border border-gray-300 rounded"
//               />
//             </div>
//           </div>
//         )}

//     {currentStep === 2 && (
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label className="block mb-2">
//                 Exhibition/Event Name
//                 <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="exhibitionName"
//                 value={formData.exhibitionName}
//                 onChange={handleInputChange}
//                 className={`w-full p-2 border rounded ${
//                   errors.exhibitionName ? 'border-red-500' : 'border-gray-300'
//                 }`}
//               />
//               {errors.exhibitionName && (
//                 <p className="text-red-500 text-sm mt-1">{errors.exhibitionName}</p>
//               )}
//             </div>

//             <div>
//               <label className="block mb-2">
//                 Venue/Location
//                 <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="venueLocation"
//                 value={formData.venueLocation}
//                 onChange={handleInputChange}
//                 className={`w-full p-2 border rounded ${
//                   errors.venueLocation ? 'border-red-500' : 'border-gray-300'
//                 }`}
//               />
//               {errors.venueLocation && (
//                 <p className="text-red-500 text-sm mt-1">{errors.venueLocation}</p>
//               )}
//             </div>

//             <div>
//               <label className="block mb-2">
//                 Exhibition/Event Dates
//                 <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="exhibitionDates"
//                 value={formData.exhibitionDates}
//                 onChange={handleInputChange}
//                 className={`w-full p-2 border rounded ${
//                   errors.exhibitionDates ? 'border-red-500' : 'border-gray-300'
//                 }`}
//               />
//               {errors.exhibitionDates && (
//                 <p className="text-red-500 text-sm mt-1">{errors.exhibitionDates}</p>
//               )}
//             </div>

//             <div>
//               <label className="block mb-2">
//                 Details Of Exhibition
//               </label>
//               <textarea
//                 name="exhibitionDetails"
//                 value={formData.exhibitionDetails}
//                 onChange={handleInputChange}
//                 rows={3}
//                 className="w-full p-2 border border-gray-300 rounded"
//               />
//             </div>
//           </div>
//         )}

//     {currentStep === 3 && (
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label className="block mb-2">
//                 Stand / Stall No
//                 <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="standNumber"
//                 value={formData.standNumber}
//                 onChange={handleInputChange}
//                 className={`w-full p-2 border rounded ${
//                   errors.standNumber ? 'border-red-500' : 'border-gray-300'
//                 }`}
//               />
//               {errors.standNumber && (
//                 <p className="text-red-500 text-sm mt-1">{errors.standNumber}</p>
//               )}
//             </div>

//             <div>
//               <label className="block mb-2">
//                 Stand / Stall Size (Mtrs)
//                 <span className="text-red-500">*</span>
//               </label>
//               <div className="flex gap-2 items-center">
//                 <input
//                   type="text"
//                   name="standSizeLength"
//                   value={formData.standSizeLength}
//                   onChange={handleInputChange}
//                   placeholder="Mtrs."
//                   className={`w-full p-2 border rounded ${
//                     errors.standSize ? 'border-red-500' : 'border-gray-300'
//                   }`}
//                 />
//                 <span className="text-xl">×</span>
//                 <input
//                   type="text"
//                   name="standSizeWidth"
//                   value={formData.standSizeWidth}
//                   onChange={handleInputChange}
//                   placeholder="Mtrs."
//                   className={`w-full p-2 border rounded ${
//                     errors.standSize ? 'border-red-500' : 'border-gray-300'
//                   }`}
//                 />
//               </div>
//               {errors.standSize && (
//                 <p className="text-red-500 text-sm mt-1">{errors.standSize}</p>
//               )}
//             </div>

//             <div>
//               <label className="block mb-2">
//                 Hall No
//                 <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="hallNumber"
//                 value={formData.hallNumber}
//                 onChange={handleInputChange}
//                 className={`w-full p-2 border rounded ${
//                   errors.hallNumber ? 'border-red-500' : 'border-gray-300'
//                 }`}
//               />
//               {errors.hallNumber && (
//                 <p className="text-red-500 text-sm mt-1">{errors.hallNumber}</p>
//               )}
//             </div>

//             <div>
//               <label className="block mb-2">
//                 Stand/Stall layout
//                 <span className="text-red-500">*</span>
//               </label>
//               <div className="flex gap-4">
//                 <label className="flex items-center">
//                   <input
//                     type="radio"
//                     name="standLayout"
//                     value="4 Sides Open (Island)"
//                     checked={formData.standLayout === '4 Sides Open (Island)'}
//                     onChange={handleInputChange}
//                     className="mr-2"
//                   />
//                   4 Sides Open (Island)
//                 </label>
//                 <label className="flex items-center">
//                   <input
//                     type="radio"
//                     name="standLayout"
//                     value="3 Sides Open"
//                     checked={formData.standLayout === '3 Sides Open'}
//                     onChange={handleInputChange}
//                     className="mr-2"
//                   />
//                   3 Sides Open
//                 </label>
//                 <label className="flex items-center">
//                   <input
//                     type="radio"
//                     name="standLayout"
//                     value="2 Sides Open"
//                     checked={formData.standLayout === '2 Sides Open'}
//                     onChange={handleInputChange}
//                     className="mr-2"
//                   />
//                   2 Sides Open
//                 </label>
//                 <label className="flex items-center">
//                   <input
//                     type="radio"
//                     name="standLayout"
//                     value="1 Side Open"
//                     checked={formData.standLayout === '1 Side Open'}
//                     onChange={handleInputChange}
//                     className="mr-2"
//                   />
//                   1 Side Open
//                 </label>
//               </div>
//               {errors.standLayout && (
//                 <p className="text-red-500 text-sm mt-1">{errors.standLayout}</p>
//               )}
//             </div>

//             <div className="md:col-span-2">
//               <label className="block mb-2">
//                 Do you need a Mezzanine Floor?
//                 <span className="text-red-500">*</span>
//               </label>
//               <div className="flex gap-4">
//                 <label className="flex items-center">
//                   <input
//                     type="radio"
//                     name="needMezzanine"
//                     value="Yes"
//                     checked={formData.needMezzanine === 'Yes'}
//                     onChange={handleInputChange}
//                     className="mr-2"
//                   />
//                   Yes
//                 </label>
//                 <label className="flex items-center">
//                   <input
//                     type="radio"
//                     name="needMezzanine"
//                     value="No"
//                     checked={formData.needMezzanine === 'No'}
//                     onChange={handleInputChange}
//                     className="mr-2"
//                   />
//                   No
//                 </label>
//               </div>
//               {errors.needMezzanine && (
//                 <p className="text-red-500 text-sm mt-1">{errors.needMezzanine}</p>
//               )}
//             </div>

//             {formData.needMezzanine === 'Yes' && (
//               <div className="md:col-span-2">
//                 <label className="block mb-2">
//                   If yes, please give details (in not more than 150 words)
//                 </label>
//                 <textarea
//                   name="mezzanineDetails"
//                   value={formData.mezzanineDetails}
//                   onChange={handleInputChange}
//                   rows={4}
//                   maxLength={150}
//                   className="w-full p-2 border border-gray-300 rounded"
//                 />
//               </div>
//             )}
//           </div>
//         )}

//          {/* Step 4: Stand/Stall Design Requirements */}
//          {currentStep === 4 && (
//           <div className="space-y-6">
//             <div>
//               <label className="block mb-2">
//                 Theme
//               </label>
//               <textarea
//                 name="theme"
//                 value={formData.theme}
//                 onChange={handleInputChange}
//                 placeholder="(Mention if any)"
//                 rows={3}
//                 className="w-full p-2 border border-gray-300 rounded"
//               />
//             </div>

//             <div>
//               <label className="block mb-2">
//                 Exhibits/Product Display / Machines With Dimension
//                 <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="exhibitsDisplay"
//                 value={formData.exhibitsDisplay}
//                 onChange={handleInputChange}
//                 placeholder="Exhibits/Product Display"
//                 className={`w-full p-2 border rounded ${
//                   errors.exhibitsDisplay ? 'border-red-500' : 'border-gray-300'
//                 }`}
//               />
//               {errors.exhibitsDisplay && (
//                 <p className="text-red-500 text-sm mt-1">{errors.exhibitsDisplay}</p>
//               )}
//             </div>

//             <div>
//               <label className="block mb-2">
//                 Areas required
//                 <span className="text-red-500">*</span>
//               </label>
//               <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                 <label className="flex items-center">
//                   <input
//                     type="checkbox"
//                     name="areas"
//                     value="Raised Platform"
//                     checked={formData.areas.includes('Raised Platform')}
//                     onChange={handleInputChange}
//                     className="mr-2"
//                   />
//                   Raised Platform
//                 </label>
//                 <label className="flex items-center">
//                   <input
//                     type="checkbox"
//                     name="areas"
//                     value="Reception / Info Counter"
//                     checked={formData.areas.includes('Reception / Info Counter')}
//                     onChange={handleInputChange}
//                     className="mr-2"
//                   />
//                   Reception / Info Counter
//                 </label>
//                 <label className="flex items-center">
//                   <input
//                     type="checkbox"
//                     name="areas"
//                     value="Discussion Area"
//                     checked={formData.areas.includes('Discussion Area')}
//                     onChange={handleInputChange}
//                     className="mr-2"
//                   />
//                   Discussion Area
//                 </label>
//                 <label className="flex items-center">
//                   <input
//                     type="checkbox"
//                     name="areas"
//                     value="Pantry/ Storage"
//                     checked={formData.areas.includes('Pantry/ Storage')}
//                     onChange={handleInputChange}
//                     className="mr-2"
//                   />
//                   Pantry/ Storage
//                 </label>
//                 <label className="flex items-center">
//                   <input
//                     type="checkbox"
//                     name="areas"
//                     value="Lounge Seating"
//                     checked={formData.areas.includes('Lounge Seating')}
//                     onChange={handleInputChange}
//                     className="mr-2"
//                   />
//                   Lounge Seating
//                 </label>
//                 <label className="flex items-center">
//                   <input
//                     type="checkbox"
//                     name="areas"
//                     value="Closed Cabins"
//                     checked={formData.areas.includes('Closed Cabins')}
//                     onChange={handleInputChange}
//                     className="mr-2"
//                   />
//                   Closed Cabins
//                 </label>
//               </div>
//               {errors.areas && (
//                 <p className="text-red-500 text-sm mt-1">{errors.areas}</p>
//               )}
//             </div>

//             <div>
//               <label className="block mb-2">
//                 Give Details about the above requirements
//               </label>
//               <textarea
//                 name="areaDetails"
//                 value={formData.areaDetails}
//                 onChange={handleInputChange}
//                 placeholder="(Type and quantity)"
//                 rows={4}
//                 className="w-full p-2 border border-gray-300 rounded"
//               />
//             </div>
//           </div>
//         )}

//           {currentStep === 5 && (
//             <div className="space-y-6">
//               <div>
//                 <label className="block mb-2">
//                   Audio-Visual And IT
//                   <span className="text-red-500">*</span>
//                 </label>
//                 <div className="border p-4 rounded">
//                   <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                     <label className="flex items-center">
//                       <input
//                         type="checkbox"
//                         name="audioVisual"
//                         value="Plasma / LCD TV"
//                         checked={formData.audioVisual.includes('Plasma / LCD TV')}
//                         onChange={handleInputChange}
//                         className="mr-2"
//                       />
//                       Plasma / LCD TV
//                     </label>
//                     <label className="flex items-center">
//                       <input
//                         type="checkbox"
//                         name="audioVisual"
//                         value="DVD Players"
//                         checked={formData.audioVisual.includes('DVD Players')}
//                         onChange={handleInputChange}
//                         className="mr-2"
//                       />
//                       DVD Players
//                     </label>
//                     <label className="flex items-center">
//                       <input
//                         type="checkbox"
//                         name="audioVisual"
//                         value="Speakers"
//                         checked={formData.audioVisual.includes('Speakers')}
//                         onChange={handleInputChange}
//                         className="mr-2"
//                       />
//                       Speakers
//                     </label>
//                     <label className="flex items-center">
//                       <input
//                         type="checkbox"
//                         name="audioVisual"
//                         value="Video Wall"
//                         checked={formData.audioVisual.includes('Video Wall')}
//                         onChange={handleInputChange}
//                         className="mr-2"
//                       />
//                       Video Wall
//                     </label>
//                     <label className="flex items-center">
//                       <input
//                         type="checkbox"
//                         name="audioVisual"
//                         value="Projector"
//                         checked={formData.audioVisual.includes('Projector')}
//                         onChange={handleInputChange}
//                         className="mr-2"
//                       />
//                       Projector
//                     </label>
//                     <label className="flex items-center">
//                       <input
//                         type="checkbox"
//                         name="audioVisual"
//                         value="Interactive Touch Screens"
//                         checked={formData.audioVisual.includes('Interactive Touch Screens')}
//                         onChange={handleInputChange}
//                         className="mr-2"
//                       />
//                       Interactive Touch Screens
//                     </label>
//                     <label className="flex items-center">
//                       <input
//                         type="checkbox"
//                         name="audioVisual"
//                         value="None Of The Above"
//                         checked={formData.audioVisual.includes('None Of The Above')}
//                         onChange={handleInputChange}
//                         className="mr-2"
//                       />
//                       None Of The Above
//                     </label>
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <label className="block mb-2">
//                   Pantry Items Required
//                   <span className="text-red-500">*</span>
//                 </label>
//                 <div className="border p-4 rounded">
//                   <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                     <label className="flex items-center">
//                       <input
//                         type="checkbox"
//                         name="pantryItems"
//                         value="Fridge"
//                         checked={formData.pantryItems.includes('Fridge')}
//                         onChange={handleInputChange}
//                         className="mr-2"
//                       />
//                       Fridge
//                     </label>
//                     <label className="flex items-center">
//                       <input
//                         type="checkbox"
//                         name="pantryItems"
//                         value="Coffee/Tea Maker"
//                         checked={formData.pantryItems.includes('Coffee/Tea Maker')}
//                         onChange={handleInputChange}
//                         className="mr-2"
//                       />
//                       Coffee/Tea Maker
//                     </label>
//                     <label className="flex items-center">
//                       <input
//                         type="checkbox"
//                         name="pantryItems"
//                         value="Water Dispenser"
//                         checked={formData.pantryItems.includes('Water Dispenser')}
//                         onChange={handleInputChange}
//                         className="mr-2"
//                       />
//                       Water Dispenser
//                     </label>
//                     <label className="flex items-center">
//                       <input
//                         type="checkbox"
//                         name="pantryItems"
//                         value="Storage Racks"
//                         checked={formData.pantryItems.includes('Storage Racks')}
//                         onChange={handleInputChange}
//                         className="mr-2"
//                       />
//                       Storage Racks
//                     </label>
//                     <label className="flex items-center">
//                       <input
//                         type="checkbox"
//                         name="pantryItems"
//                         value="None Of The Above"
//                         checked={formData.pantryItems.includes('None Of The Above')}
//                         onChange={handleInputChange}
//                         className="mr-2"
//                       />
//                       None Of The Above
//                     </label>
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <label className="block mb-2">
//                   More Information regarding the above
//                 </label>
//                 <textarea
//                   name="additionalInfo"
//                   value={formData.additionalInfo}
//                   onChange={handleInputChange}
//                   placeholder="if any"
//                   rows={4}
//                   className="w-full p-2 border border-gray-300 rounded"
//                 />
//               </div>
//             </div>
//           )}



//         {currentStep === 6 && (
//           <div className="space-y-6">
//             <div>
//               <label className="block mb-2">
//                 Branding And Graphic Posters
//                 <span className="text-red-500">*</span>
//               </label>
//               <div className="border p-4 rounded">
//                 <div className="flex gap-6">
//                   <label className="flex items-center">
//                     <input
//                       type="radio"
//                       name="brandingType"
//                       value="From Ready to print Files"
//                       checked={formData.brandingType === 'From Ready to print Files'}
//                       onChange={handleInputChange}
//                       className="mr-2"
//                     />
//                     From Ready to print Files
//                   </label>
//                   <label className="flex items-center">
//                     <input
//                       type="radio"
//                       name="brandingType"
//                       value="Designing"
//                       checked={formData.brandingType === 'Designing'}
//                       onChange={handleInputChange}
//                       className="mr-2"
//                     />
//                     Designing
//                   </label>
//                 </div>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block mb-2">
//                   Company Logo
//                 </label>
//                 <div className="flex flex-col space-y-2">
//                   <input
//                     type="file"
//                     id="companyLogo"
//                     name="companyLogo"
//                     onChange={handleInputChange}
//                     className="hidden"
//                   />
//                   <label
//                     htmlFor="companyLogo"
//                     className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded cursor-pointer hover:bg-gray-50"
//                   >
//                     <span className="text-sm text-gray-600">Choose File</span>
//                     <span className="ml-2 text-sm text-gray-400">
//                       {formData.companyLogo ? formData.companyLogo.name : 'No file chosen'}
//                     </span>
//                   </label>
//                   <span className="text-xs text-gray-500">Please upload only .ai, .cdr, .jpeg, .png, or .pdf files!</span>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <label className="block mb-2">
//                 Description:
//               </label>
//               <textarea
//                 name="brandingDescription"
//                 value={formData.brandingDescription}
//                 onChange={handleInputChange}
//                 placeholder="(Please describe specifications and Pantone colors of your Corporate ID below)"
//                 rows={4}
//                 className="w-full p-2 border border-gray-300 rounded"
//               />
//             </div>
//           </div>
//         )}


//       {currentStep === 7 && (
//         <div className="space-y-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label className="block mb-2">
//                 Budget Range (From)
//                 <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="number"
//                 name="budgetFrom"
//                 value={formData.budgetFrom}
//                 onChange={handleInputChange}
//                 placeholder=""
//                 className={`w-full p-2 border rounded ${
//                   errors.budgetFrom ? 'border-red-500' : 'border-gray-300'
//                 }`}
//               />
//               {errors.budgetFrom && (
//                 <p className="text-red-500 text-sm mt-1">{errors.budgetFrom}</p>
//               )}
//             </div>

//             <div>
//               <label className="block mb-2">
//                 Budget Range (To)
//                 <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="number"
//                 name="budgetTo"
//                 value={formData.budgetTo}
//                 onChange={handleInputChange}
//                 placeholder=""
//                 className={`w-full p-2 border rounded ${
//                   errors.budgetTo ? 'border-red-500' : 'border-gray-300'
//                 }`}
//               />
//               {errors.budgetTo && (
//                 <p className="text-red-500 text-sm mt-1">{errors.budgetTo}</p>
//               )}
//             </div>
//           </div>

//           <div>
//             <label className="block mb-2">
//               Additional Budget Notes
//             </label>
//             <textarea
//               name="budgetNotes"
//               value={formData.budgetNotes}
//               onChange={handleInputChange}
//               placeholder="Any additional notes about your budget requirements"
//               rows={4}
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>
//         </div>
//       )}


//         {currentStep === 8 && (
//           <div className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block mb-2">
//                   Presentation Date
//                   <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="date"
//                   name="presentationDate"
//                   value={formData.presentationDate}
//                   onChange={handleInputChange}
//                   className={`w-full p-2 border rounded ${
//                     errors.presentationDate ? 'border-red-500' : 'border-gray-300'
//                   }`}
//                   placeholder="MM/DD/YYYY"
//                 />
//                 {errors.presentationDate && (
//                   <p className="text-red-500 text-sm mt-1">{errors.presentationDate}</p>
//                 )}
//               </div>

//               <div>
//                 <label className="block mb-2">
//                   Approval Date
//                 </label>
//                 <input
//                   type="date"
//                   name="approvalDate"
//                   value={formData.approvalDate}
//                   onChange={handleInputChange}
//                   className="w-full p-2 border border-gray-300 rounded"
//                   placeholder="MM/DD/YYYY"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block mb-2">
//                 Other Information
//               </label>
//               <textarea
//                 name="otherInformation"
//                 value={formData.otherInformation}
//                 onChange={handleInputChange}
//                 rows={4}
//                 className="w-full p-2 border border-gray-300 rounded"
//               />
//             </div>

//             <div>
//               <label className="block mb-2">
//                 Please Attach Floor Plan
//                 <span className="text-red-500">*</span>
//               </label>
//               <div className="flex flex-col space-y-2">
//                 <input
//                   type="file"
//                   id="floorPlan"
//                   name="floorPlan"
//                   onChange={handleInputChange}
//                   accept=".jpg,.jpeg,.pdf"
//                   className="hidden"
//                 />
//                 <label
//                   htmlFor="floorPlan"
//                   className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded cursor-pointer hover:bg-gray-50"
//                 >
//                   <span className="text-sm text-gray-600">Choose File</span>
//                   <span className="ml-2 text-sm text-gray-400">
//                     {formData.floorPlan ? formData.floorPlan.name : 'No file chosen'}
//                   </span>
//                 </label>
//                 <span className="text-xs text-gray-500">(Please Upload JPEG / PDF files only)</span>
//               </div>
//               {errors.floorPlan && (
//                 <p className="text-red-500 text-sm mt-1">{errors.floorPlan}</p>
//               )}
//             </div>

//             {/* <div>
//               <label className="block mb-2">
//                 Enter code
//               </label>
//               <input
//                 type="text"
//                 name="verificationCode"
//                 value={formData.verificationCode}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border border-gray-300 rounded"
//               />
//             </div> */}

//             <div className="space-y-4 mt-6">
//               <h3 className="text-lg font-medium text-red-600">Important information regarding designs:</h3>
//               <ol className="list-decimal pl-5 space-y-3">
//                 <li className="text-gray-700">
//                   Our lead time depends on current workload.
//                 </li>
//                 <li className="text-gray-700">
//                   Once the design concept is complete we will supply all the specifications of the graphics required. All final graphic artworks will be requested in print-ready formats and sizes from the client. Different Strokes is responsible for the printing and application of the graphic only.
//                 </li>
//                 <li className="text-gray-700">
//                   Our design service is free of charge up to Two sets of changes. Any changes to the design thereafter will be charged for at a rate of Rs.5000/- per change.
//                 </li>
//               </ol>
//             </div>
//           </div>
//         )}



//         {/* Placeholder content for other steps */}
//         {currentStep > 1 && (
//           <div className="text-center py-8 text-gray-500">
//             Content for {steps[currentStep - 1].title}
//           </div>
//         )}

//         {/* Navigation Buttons */}
//         <div className="flex space-x-4">
//           {/* Prev Button - Only Show If Not on First Step */}
//           <button
//             onClick={handlePrev}
//             disabled={currentStep === 1}
//             className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors disabled:opacity-50"
//           >
//             Prev
//           </button>

//           {/* Conditional Buttons - Show Next OR Submit */}
//           {currentStep < steps.length ? (
//             <button
//               onClick={handleNext}
//               className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
//             >
//               Next
//             </button>
//           ) : (
//             <button
//               onClick={handleSubmit} // Ensure submit function is correct
//               disabled={loading}
//               className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
//             >
//               Submit

//             </button>
//           )}
//         </div>
//         </form>

//       </Card>
//     </div>
//   );
// };

// export default CompanyRegistrationForm;
























































"use client"
import React, { useState } from 'react';

// Custom Card component 
const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-lg shadow-md ${className}`}>
    {children}
  </div>
);

const CompanyRegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    message: '',
    isError: false
  });

  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    mobileNumber: '',
    phoneNumber: '',
    website: '',
    designation: '',
    address: '',
    exhibitionName: '',
    venueLocation: '',
    exhibitionDates: '',
    exhibitionDetails: '',
    standNumber: '',
    hallNumber: '',
    standSizeLength: '',
    standSizeWidth: '',
    standLayout: '',
    needMezzanine: '',
    mezzanineDetails: '',
    theme: '',
    exhibitsDisplay: '',
    areas: [],
    areaDetails: '',
    audioVisual: [],
    pantryItems: [],
    additionalInfo: '',
    brandingType: '',
    companyLogo: null,
    brandingDescription: '',
    budgetFrom: '',
    budgetTo: '',
    budgetNotes: '',
    presentationDate: '',
    approvalDate: '',
    otherInformation: '',
    floorPlan: null,
    verificationCode: ''
  });

  const [errors, setErrors] = useState({});

  const steps = [
    { id: 1, title: 'COMPANY INFORMATION' },
    { id: 2, title: 'EVENT INFORMATION' },
    { id: 3, title: 'STAND/STALL INFORMATION' },
    { id: 4, title: 'STAND/STALL DESIGN REQUIREMENTS' },
    { id: 5, title: 'STAND/STALL EQUIPMENT REQUIREMENTS' },
    { id: 6, title: 'BRANDING & SIGNAGE REQUIREMENTS' },
    { id: 7, title: 'BUDGET INDICATION' },
    { id: 8, title: 'OTHER INFORMATION' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === 'file') {
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }));
    }
    else if (type === 'checkbox') {
      let newValue;
      if (name === 'areas' || name === 'audioVisual' || name === 'pantryItems') {
        if (value === 'None Of The Above') {
          newValue = checked ? ['None Of The Above'] : [];
        } else {
          newValue = checked
            ? [...formData[name].filter(item => item !== 'None Of The Above'), value]
            : formData[name].filter(item => item !== value);
        }
      } else {
        newValue = checked;
      }
      setFormData(prev => ({
        ...prev,
        [name]: newValue
      }));
    }
    else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    // Clear error when field is modified
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};

    switch (step) {
      case 1:
        if (!formData.companyName) newErrors.companyName = 'Company name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.contactPerson) newErrors.contactPerson = 'Contact person is required';
        if (!formData.mobileNumber) newErrors.mobileNumber = 'Mobile number is required';
        if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone Number is required';
        if (!formData.website) newErrors.website = 'Website is required';
        if (!formData.designation) newErrors.designation = 'Designation is required';
        break;
      case 2:
        if (!formData.exhibitionName) newErrors.exhibitionName = 'Exhibition name is required';
        if (!formData.venueLocation) newErrors.venueLocation = 'Venue location is required';
        break;
      case 3:
        if (!formData.standNumber) newErrors.standNumber = 'Stand number is required';
        if (!formData.hallNumber) newErrors.hallNumber = 'Hall number is required';
        if (!formData.standSizeLength || !formData.standSizeWidth) newErrors.standSize = 'Size is required!';
        if (!formData.standLayout) newErrors.standLayout = 'This field is required!';
        if (!formData.needMezzanine) newErrors.needMezzanine = 'This field is required!';
    }
    if (currentStep === 4) {
      if (!formData.exhibitsDisplay) {
        newErrors.exhibitsDisplay = 'This field is required!';
      }
      if (formData.areas.length === 0) {
        newErrors.areas = 'Please select at least one area';
      }
    }
    if (currentStep === 6) {
      if (formData.companyLogo) {
        const validTypes = [
          'image/jpeg',
          'image/jpg',
          'image/png',
          'application/pdf',
          'application/postscript', // For .ai and .eps (Adobe Illustrator files)
          'application/x-cdr' // CorelDRAW (.cdr)
        ];

        if (!validTypes.includes(formData.companyLogo.type)) {
          newErrors.companyLogo = 'Please upload only .ai, .cdr, .jpeg, .png, or .pdf files!';
        }
      }
    }

    if (currentStep === 7) {
      if (!formData.budgetFrom) newErrors.budgetFrom = 'Budget range (from) is required!';
      if (!formData.budgetTo) newErrors.budgetTo = 'Budget range (to) is required!';
      if (Number(formData.budgetFrom) > Number(formData.budgetTo)) {
        newErrors.budgetFrom = 'From amount cannot be greater than To amount';
      }
    }
    if (currentStep === 8) {
      if (!formData.presentationDate) newErrors.presentationDate = 'Presentation date is required!';
      if (!formData.floorPlan) newErrors.floorPlan = 'Floor plan is required!';

      if (formData.floorPlan) {
        const validTypes = ['image/jpeg', 'image/jpg', 'application/pdf'];
        if (!validTypes.includes(formData.floorPlan.type)) {
          newErrors.floorPlan = 'Please upload only JPEG or PDF files!';
        }
      }


    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };



  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length));
    }
  };

  const handlePrev = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateStep(currentStep)) {
      setSubmitStatus({
        message: 'Please fill in all required fields',
        isError: true
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ message: '', isError: false });

    try {
      // Convert files to base64
      const companyLogoBase64 = formData.companyLogo ? await convertFileToBase64(formData.companyLogo) : null;
      const floorPlanBase64 = formData.floorPlan ? await convertFileToBase64(formData.floorPlan) : null;

      // Prepare form data
      const formDataToSend = {
        ...formData,
        companyLogo: companyLogoBase64,
        floorPlan: floorPlanBase64,
        submissionDate: new Date().toISOString()
      };

      // Send to your API endpoint
      const response = await fetch('/api/design-proposal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataToSend),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit form');
      }

      // Success
      setSubmitStatus({
        message: 'Form submitted successfully! We will contact you soon.',
        isError: false
      });

      // Reset form
      setFormData({
        companyName: '',
        contactPerson: '',
        email: '',
        mobileNumber: '',
        phoneNumber: '',
        website: '',
        designation: '',
        address: '',
        exhibitionName: '',
        venueLocation: '',
        exhibitionDates: '',
        exhibitionDetails: '',
        standNumber: '',
        hallNumber: '',
        standSizeLength: '',
        standSizeWidth: '',
        standLayout: '',
        needMezzanine: '',
        mezzanineDetails: '',
        theme: '',
        exhibitsDisplay: '',
        areas: [],
        areaDetails: '',
        audioVisual: [],
        pantryItems: [],
        additionalInfo: '',
        brandingType: '',
        companyLogo: null,
        brandingDescription: '',
        budgetFrom: '',
        budgetTo: '',
        budgetNotes: '',
        presentationDate: '',
        approvalDate: '',
        otherInformation: '',
        floorPlan: null
        // ... reset all other fields
      });
      setCurrentStep(1);

    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus({
        message: 'Failed to submit form. Please try again.',
        isError: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  // Your existing JSX for form steps and fields remains the same
  return (
    <div className="max-w-4xl mx-auto p-6 mt-44">
      {/* Progress Steps */}
      <div className="mb-8">
        {steps.map(step => (
          <div key={step.id} className="mb-4">
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep === step.id
                  ? 'bg-orange-500 text-white'
                  : currentStep > step.id
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                {step.id}
              </div>
              <div className="ml-4 flex items-center">
                <span className={`font-medium ${currentStep === step.id ? 'text-orange-600' : 'text-gray-600'
                  }`}>
                  {step.title}
                </span>
                <span className="ml-2 text-sm text-gray-400">Step {step.id}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Card className="p-6">
        <form onSubmit={handleSubmit}>
          {/* Your existing form fields for each step */}

          {currentStep === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2">
                  Company Name
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className={`w-full p-2 border rounded ${errors.companyName ? 'border-red-500' : 'border-gray-300'
                    }`}
                />
                {errors.companyName && (
                  <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>
                )}
              </div>

              <div>
                <label className="block mb-2">
                  Contact Person
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleInputChange}
                  className={`w-full p-2 border rounded ${errors.contactPerson ? 'border-red-500' : 'border-gray-300'
                    }`}
                />
                {errors.contactPerson && (
                  <p className="text-red-500 text-sm mt-1">{errors.contactPerson}</p>
                )}
              </div>

              <div>
                <label className="block mb-2">
                  E-mail
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full p-2 border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block mb-2">
                  Mobile Number
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  className={`w-full p-2 border rounded ${errors.mobileNumber ? 'border-red-500' : 'border-gray-300'
                    }`}
                />
                {errors.mobileNumber && (
                  <p className="text-red-500 text-sm mt-1">{errors.mobileNumber}</p>
                )}
              </div>

              <div>
                <label className="block mb-2">
                  Phone Number
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className={`w-full p-2 border rounded ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
                    }`}
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
                )}
              </div>

              <div>
                <label className="block mb-2">
                  Website
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className={`w-full p-2 border rounded ${errors.website ? 'border-red-500' : 'border-gray-300'
                    }`}
                />
                {errors.website && (
                  <p className="text-red-500 text-sm mt-1">{errors.website}</p>
                )}
              </div>

              <div>
                <label className="block mb-2">
                  Designation
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleInputChange}
                  className={`w-full p-2 border rounded ${errors.designation ? 'border-red-500' : 'border-gray-300'
                    }`}
                />
                {errors.designation && (
                  <p className="text-red-500 text-sm mt-1">{errors.designation}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block mb-2">
                  Address
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2">
                  Exhibition/Event Name
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="exhibitionName"
                  value={formData.exhibitionName}
                  onChange={handleInputChange}
                  className={`w-full p-2 border rounded ${errors.exhibitionName ? 'border-red-500' : 'border-gray-300'
                    }`}
                />
                {errors.exhibitionName && (
                  <p className="text-red-500 text-sm mt-1">{errors.exhibitionName}</p>
                )}
              </div>

              <div>
                <label className="block mb-2">
                  Venue/Location
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="venueLocation"
                  value={formData.venueLocation}
                  onChange={handleInputChange}
                  className={`w-full p-2 border rounded ${errors.venueLocation ? 'border-red-500' : 'border-gray-300'
                    }`}
                />
                {errors.venueLocation && (
                  <p className="text-red-500 text-sm mt-1">{errors.venueLocation}</p>
                )}
              </div>

              <div>
                <label className="block mb-2">
                  Exhibition/Event Dates
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="exhibitionDates"
                  value={formData.exhibitionDates}
                  onChange={handleInputChange}
                  className={`w-full p-2 border rounded ${errors.exhibitionDates ? 'border-red-500' : 'border-gray-300'
                    }`}
                />
                {errors.exhibitionDates && (
                  <p className="text-red-500 text-sm mt-1">{errors.exhibitionDates}</p>
                )}
              </div>

              <div>
                <label className="block mb-2">
                  Details Of Exhibition
                </label>
                <textarea
                  name="exhibitionDetails"
                  value={formData.exhibitionDetails}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2">
                  Stand / Stall No
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="standNumber"
                  value={formData.standNumber}
                  onChange={handleInputChange}
                  className={`w-full p-2 border rounded ${errors.standNumber ? 'border-red-500' : 'border-gray-300'
                    }`}
                />
                {errors.standNumber && (
                  <p className="text-red-500 text-sm mt-1">{errors.standNumber}</p>
                )}
              </div>

              <div>
                <label className="block mb-2">
                  Stand / Stall Size (Mtrs)
                  <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2 items-center">
                  <input
                    type="text"
                    name="standSizeLength"
                    value={formData.standSizeLength}
                    onChange={handleInputChange}
                    placeholder="Mtrs."
                    className={`w-full p-2 border rounded ${errors.standSize ? 'border-red-500' : 'border-gray-300'
                      }`}
                  />
                  <span className="text-xl">×</span>
                  <input
                    type="text"
                    name="standSizeWidth"
                    value={formData.standSizeWidth}
                    onChange={handleInputChange}
                    placeholder="Mtrs."
                    className={`w-full p-2 border rounded ${errors.standSize ? 'border-red-500' : 'border-gray-300'
                      }`}
                  />
                </div>
                {errors.standSize && (
                  <p className="text-red-500 text-sm mt-1">{errors.standSize}</p>
                )}
              </div>

              <div>
                <label className="block mb-2">
                  Hall No
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="hallNumber"
                  value={formData.hallNumber}
                  onChange={handleInputChange}
                  className={`w-full p-2 border rounded ${errors.hallNumber ? 'border-red-500' : 'border-gray-300'
                    }`}
                />
                {errors.hallNumber && (
                  <p className="text-red-500 text-sm mt-1">{errors.hallNumber}</p>
                )}
              </div>

              <div>
                <label className="block mb-2">
                  Stand/Stall layout
                  <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="standLayout"
                      value="4 Sides Open (Island)"
                      checked={formData.standLayout === '4 Sides Open (Island)'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    4 Sides Open (Island)
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="standLayout"
                      value="3 Sides Open"
                      checked={formData.standLayout === '3 Sides Open'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    3 Sides Open
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="standLayout"
                      value="2 Sides Open"
                      checked={formData.standLayout === '2 Sides Open'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    2 Sides Open
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="standLayout"
                      value="1 Side Open"
                      checked={formData.standLayout === '1 Side Open'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    1 Side Open
                  </label>
                </div>
                {errors.standLayout && (
                  <p className="text-red-500 text-sm mt-1">{errors.standLayout}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block mb-2">
                  Do you need a Mezzanine Floor?
                  <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="needMezzanine"
                      value="Yes"
                      checked={formData.needMezzanine === 'Yes'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="needMezzanine"
                      value="No"
                      checked={formData.needMezzanine === 'No'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    No
                  </label>
                </div>
                {errors.needMezzanine && (
                  <p className="text-red-500 text-sm mt-1">{errors.needMezzanine}</p>
                )}
              </div>

              {formData.needMezzanine === 'Yes' && (
                <div className="md:col-span-2">
                  <label className="block mb-2">
                    If yes, please give details (in not more than 150 words)
                  </label>
                  <textarea
                    name="mezzanineDetails"
                    value={formData.mezzanineDetails}
                    onChange={handleInputChange}
                    rows={4}
                    maxLength={150}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
              )}
            </div>
          )}

          {/* Step 4: Stand/Stall Design Requirements */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div>
                <label className="block mb-2">
                  Theme
                </label>
                <textarea
                  name="theme"
                  value={formData.theme}
                  onChange={handleInputChange}
                  placeholder="(Mention if any)"
                  rows={3}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>

              <div>
                <label className="block mb-2">
                  Exhibits/Product Display / Machines With Dimension
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="exhibitsDisplay"
                  value={formData.exhibitsDisplay}
                  onChange={handleInputChange}
                  placeholder="Exhibits/Product Display"
                  className={`w-full p-2 border rounded ${errors.exhibitsDisplay ? 'border-red-500' : 'border-gray-300'
                    }`}
                />
                {errors.exhibitsDisplay && (
                  <p className="text-red-500 text-sm mt-1">{errors.exhibitsDisplay}</p>
                )}
              </div>

              <div>
                <label className="block mb-2">
                  Areas required
                  <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="areas"
                      value="Raised Platform"
                      checked={formData.areas.includes('Raised Platform')}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Raised Platform
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="areas"
                      value="Reception / Info Counter"
                      checked={formData.areas.includes('Reception / Info Counter')}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Reception / Info Counter
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="areas"
                      value="Discussion Area"
                      checked={formData.areas.includes('Discussion Area')}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Discussion Area
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="areas"
                      value="Pantry/ Storage"
                      checked={formData.areas.includes('Pantry/ Storage')}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Pantry/ Storage
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="areas"
                      value="Lounge Seating"
                      checked={formData.areas.includes('Lounge Seating')}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Lounge Seating
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="areas"
                      value="Closed Cabins"
                      checked={formData.areas.includes('Closed Cabins')}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Closed Cabins
                  </label>
                </div>
                {errors.areas && (
                  <p className="text-red-500 text-sm mt-1">{errors.areas}</p>
                )}
              </div>

              <div>
                <label className="block mb-2">
                  Give Details about the above requirements
                </label>
                <textarea
                  name="areaDetails"
                  value={formData.areaDetails}
                  onChange={handleInputChange}
                  placeholder="(Type and quantity)"
                  rows={4}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div className="space-y-6">
              <div>
                <label className="block mb-2">
                  Audio-Visual And IT
                  <span className="text-red-500">*</span>
                </label>
                <div className="border p-4 rounded">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="audioVisual"
                        value="Plasma / LCD TV"
                        checked={formData.audioVisual.includes('Plasma / LCD TV')}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Plasma / LCD TV
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="audioVisual"
                        value="DVD Players"
                        checked={formData.audioVisual.includes('DVD Players')}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      DVD Players
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="audioVisual"
                        value="Speakers"
                        checked={formData.audioVisual.includes('Speakers')}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Speakers
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="audioVisual"
                        value="Video Wall"
                        checked={formData.audioVisual.includes('Video Wall')}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Video Wall
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="audioVisual"
                        value="Projector"
                        checked={formData.audioVisual.includes('Projector')}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Projector
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="audioVisual"
                        value="Interactive Touch Screens"
                        checked={formData.audioVisual.includes('Interactive Touch Screens')}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Interactive Touch Screens
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="audioVisual"
                        value="None Of The Above"
                        checked={formData.audioVisual.includes('None Of The Above')}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      None Of The Above
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label className="block mb-2">
                  Pantry Items Required
                  <span className="text-red-500">*</span>
                </label>
                <div className="border p-4 rounded">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="pantryItems"
                        value="Fridge"
                        checked={formData.pantryItems.includes('Fridge')}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Fridge
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="pantryItems"
                        value="Coffee/Tea Maker"
                        checked={formData.pantryItems.includes('Coffee/Tea Maker')}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Coffee/Tea Maker
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="pantryItems"
                        value="Water Dispenser"
                        checked={formData.pantryItems.includes('Water Dispenser')}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Water Dispenser
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="pantryItems"
                        value="Storage Racks"
                        checked={formData.pantryItems.includes('Storage Racks')}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Storage Racks
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="pantryItems"
                        value="None Of The Above"
                        checked={formData.pantryItems.includes('None Of The Above')}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      None Of The Above
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label className="block mb-2">
                  More Information regarding the above
                </label>
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  placeholder="if any"
                  rows={4}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </div>
          )}



          {currentStep === 6 && (
            <div className="space-y-6">
              <div>
                <label className="block mb-2">
                  Branding And Graphic Posters
                  <span className="text-red-500">*</span>
                </label>
                <div className="border p-4 rounded">
                  <div className="flex gap-6">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="brandingType"
                        value="From Ready to print Files"
                        checked={formData.brandingType === 'From Ready to print Files'}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      From Ready to print Files
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="brandingType"
                        value="Designing"
                        checked={formData.brandingType === 'Designing'}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Designing
                    </label>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2">
                    Company Logo
                  </label>
                  <div className="flex flex-col space-y-2">
                    <input
                      type="file"
                      id="companyLogo"
                      name="companyLogo"
                      onChange={handleInputChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="companyLogo"
                      className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded cursor-pointer hover:bg-gray-50"
                    >
                      <span className="text-sm text-gray-600">Choose File</span>
                      <span className="ml-2 text-sm text-gray-400">
                        {formData.companyLogo ? formData.companyLogo.name : 'No file chosen'}
                      </span>
                    </label>
                    <span className="text-xs text-gray-500">Please upload only .ai, .cdr, .jpeg, .png, or .pdf files!</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block mb-2">
                  Description:
                </label>
                <textarea
                  name="brandingDescription"
                  value={formData.brandingDescription}
                  onChange={handleInputChange}
                  placeholder="(Please describe specifications and Pantone colors of your Corporate ID below)"
                  rows={4}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </div>
          )}


          {currentStep === 7 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2">
                    Budget Range (From)
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="budgetFrom"
                    value={formData.budgetFrom}
                    onChange={handleInputChange}
                    placeholder=""
                    className={`w-full p-2 border rounded ${errors.budgetFrom ? 'border-red-500' : 'border-gray-300'
                      }`}
                  />
                  {errors.budgetFrom && (
                    <p className="text-red-500 text-sm mt-1">{errors.budgetFrom}</p>
                  )}
                </div>

                <div>
                  <label className="block mb-2">
                    Budget Range (To)
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="budgetTo"
                    value={formData.budgetTo}
                    onChange={handleInputChange}
                    placeholder=""
                    className={`w-full p-2 border rounded ${errors.budgetTo ? 'border-red-500' : 'border-gray-300'
                      }`}
                  />
                  {errors.budgetTo && (
                    <p className="text-red-500 text-sm mt-1">{errors.budgetTo}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block mb-2">
                  Additional Budget Notes
                </label>
                <textarea
                  name="budgetNotes"
                  value={formData.budgetNotes}
                  onChange={handleInputChange}
                  placeholder="Any additional notes about your budget requirements"
                  rows={4}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </div>
          )}


          {currentStep === 8 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2">
                    Presentation Date
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="presentationDate"
                    value={formData.presentationDate}
                    onChange={handleInputChange}
                    className={`w-full p-2 border rounded ${errors.presentationDate ? 'border-red-500' : 'border-gray-300'
                      }`}
                    placeholder="MM/DD/YYYY"
                  />
                  {errors.presentationDate && (
                    <p className="text-red-500 text-sm mt-1">{errors.presentationDate}</p>
                  )}
                </div>

                <div>
                  <label className="block mb-2">
                    Approval Date
                  </label>
                  <input
                    type="date"
                    name="approvalDate"
                    value={formData.approvalDate}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="MM/DD/YYYY"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2">
                  Other Information
                </label>
                <textarea
                  name="otherInformation"
                  value={formData.otherInformation}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>

              <div>
                <label className="block mb-2">
                  Please Attach Floor Plan
                  <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-col space-y-2">
                  <input
                    type="file"
                    id="floorPlan"
                    name="floorPlan"
                    onChange={handleInputChange}
                    accept=".jpg,.jpeg,.pdf"
                    className="hidden"
                  />
                  <label
                    htmlFor="floorPlan"
                    className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded cursor-pointer hover:bg-gray-50"
                  >
                    <span className="text-sm text-gray-600">Choose File</span>
                    <span className="ml-2 text-sm text-gray-400">
                      {formData.floorPlan ? formData.floorPlan.name : 'No file chosen'}
                    </span>
                  </label>
                  <span className="text-xs text-gray-500">(Please Upload JPEG / PDF files only)</span>
                </div>
                {errors.floorPlan && (
                  <p className="text-red-500 text-sm mt-1">{errors.floorPlan}</p>
                )}
              </div>

              <div className="space-y-4 mt-6">
                <h3 className="text-lg font-medium text-red-600">Important information regarding designs:</h3>
                <ol className="list-decimal pl-5 space-y-3">
                  <li className="text-gray-700">
                    Our lead time depends on current workload.
                  </li>
                  <li className="text-gray-700">
                    Once the design concept is complete we will supply all the specifications of the graphics required. All final graphic artworks will be requested in print-ready formats and sizes from the client. Different Strokes is responsible for the printing and application of the graphic only.
                  </li>
                  <li className="text-gray-700">
                    Our design service is free of charge up to Two sets of changes. Any changes to the design thereafter will be charged for at a rate of Rs.5000/- per change.
                  </li>
                </ol>
              </div>
            </div>
          )}



          {/* Form Navigation */}
          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentStep === 1 || isSubmitting}
              className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 disabled:opacity-50"
            >
              Previous
            </button>

            {currentStep < steps.length ? (
              <button
                type="button"
                onClick={handleNext}
                disabled={isSubmitting}
                className="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 disabled:opacity-50"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Form'}
              </button>
            )}
          </div>

          {/* Status Message */}
          {submitStatus.message && (
            <div className={`mt-4 p-4 rounded ${submitStatus.isError ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
              }`}>
              {submitStatus.message}
            </div>
          )}
        </form>
      </Card>
    </div>
  );
};

export default CompanyRegistrationForm;