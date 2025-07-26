

// import { NextResponse } from "next/server"
// import { Resend } from "resend"

// const resend = new Resend(process.env.RESEND_API_KEY)

// export async function POST(request) {
//   try {
//     const formData = await request.json() // Change this to json() instead of formData()

//     const { data, error } = await resend.emails.send({
//       from: "Stall/Booth Request <onboarding@resend.dev>",
//       to: "trumpcardworld@gmail.com", // Replace with your recipient email
//       subject: `New Stall Request from ${formData.companyName}`,
//       html: generateEmailHtml(formData),
//       attachments: [
//         ...(formData.companyLogo ? [{ filename: "company_logo.png", content: formData.companyLogo }] : []),
//         ...(formData.floorPlan ? [{ filename: "floor_plan.pdf", content: formData.floorPlan }] : []),
//       ],
//     })

//     if (error) {
//       console.error("Error sending email:", error)
//       return NextResponse.json({ error: error.message }, { status: 500 })
//     }

//     return NextResponse.json({ success: true, data })
//   } catch (error) {
//     console.error("Error processing form submission:", error)
//     return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
//   }
// }

// function generateEmailHtml(formData) {
//   return `
//    <!DOCTYPE html>
// <html>
// <head>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>New Stall Request</title>
//   <style>
//     table {
//       border-collapse: collapse;
//       width: 100%;
//       margin-bottom: 20px;
//       background-color: #ffffff;
//     }
//     th, td {
//       text-align: left;
//       padding: 8px;
//       border: 1px solid #dddddd;
//     }
//     th {
//       background-color: #f5f5f5;
//       font-weight: bold;
//     }
//     h2, h3 {
//       color: #333333;
//       margin-top: 20px;
//     }
//     .header {
//       background-color: #4a90e2;
//       color: white;
//       padding: 10px;
//       margin-bottom: 20px;
//     }
//   </style>
// </head>
// <body style="font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f8f8f8;">
//   <div class="header">
//     <h2 style="margin: 0;">New Stall/Booth Request from ${formData.companyName || "N/A"}</h2>
//   </div>

//   <h3>Company Information</h3>
//   <table>
//     <tr>
//       <th width="30%">Field</th>
//       <th>Details</th>
//     </tr>
//     <tr>
//       <td>Company Name</td>
//       <td>${formData.companyName || "N/A"}</td>
//     </tr>
//     <tr>
//       <td>Contact Person</td>
//       <td>${formData.contactPerson || "N/A"}</td>
//     </tr>
//     <tr>
//       <td>Email</td>
//       <td>${formData.email || "N/A"}</td>
//     </tr>
//     <tr>
//       <td>Mobile Number</td>
//       <td>${formData.mobileNumber || "N/A"}</td>
//     </tr>
//     <tr>
//       <td>Phone Number</td>
//       <td>${formData.phoneNumber || "N/A"}</td>
//     </tr>
//     <tr>
//       <td>Website</td>
//       <td>${formData.website || "N/A"}</td>
//     </tr>
//     <tr>
//       <td>Designation</td>
//       <td>${formData.designation || "N/A"}</td>
//     </tr>
//     <tr>
//       <td>Address</td>
//       <td>${formData.address || "N/A"}</td>
//     </tr>
//   </table>

//   <h3>Event Information</h3>
//   <table>
//     <tr>
//       <th width="30%">Field</th>
//       <th>Details</th>
//     </tr>
//     <tr>
//       <td>Exhibition Name</td>
//       <td>${formData.exhibitionName || "N/A"}</td>
//     </tr>
//     <tr>
//       <td>Venue Location</td>
//       <td>${formData.venueLocation || "N/A"}</td>
//     </tr>
//     <tr>
//       <td>Exhibition Dates</td>
//       <td>${formData.exhibitionDates || "N/A"}</td>
//     </tr>
//     <tr>
//       <td>Exhibition Details</td>
//       <td>${formData.exhibitionDetails || "N/A"}</td>
//     </tr>
//   </table>

//   <h3>Stand/Stall Information</h3>
//   <table>
//     <tr>
//       <th width="30%">Field</th>
//       <th>Details</th>
//     </tr>
//     <tr>
//       <td>Stand Number</td>
//       <td>${formData.standNumber || "N/A"}</td>
//     </tr>
//     <tr>
//       <td>Hall Number</td>
//       <td>${formData.hallNumber || "N/A"}</td>
//     </tr>
//     <tr>
//       <td>Stand Size</td>
//       <td>${formData.standSizeLength || "N/A"} x ${formData.standSizeWidth || "N/A"} meters</td>
//     </tr>
//     <tr>
//       <td>Stand Layout</td>
//       <td>${formData.standLayout || "N/A"}</td>
//     </tr>
//     <tr>
//       <td>Need Mezzanine</td>
//       <td>${formData.needMezzanine || "N/A"}</td>
//     </tr>
//     <tr>
//       <td>Mezzanine Details</td>
//       <td>${formData.mezzanineDetails || "N/A"}</td>
//     </tr>
//   </table>

//   <h3>Stand/Stall Design Requirements</h3>
//   <table>
//     <tr>
//       <th width="30%">Field</th>
//       <th>Details</th>
//     </tr>
//     <tr>
//       <td>Theme</td>
//       <td>${formData.theme || "N/A"}</td>
//     </tr>
//     <tr>
//       <td>Exhibits/Product Display</td>
//       <td>${formData.exhibitsDisplay || "N/A"}</td>
//     </tr>
//     <tr>
//       <td>Areas Required</td>
//       <td>${(formData.areas || []).join(", ") || "N/A"}</td>
//     </tr>
//     <tr>
//       <td>Area Details</td>
//       <td>${formData.areaDetails || "N/A"}</td>
//     </tr>
//   </table>

//   <h3>Stand/Stall Equipment Requirements</h3>
//   <table>
//     <tr>
//       <th width="30%">Field</th>
//       <th>Details</th>
//     </tr>
//     <tr>
//       <td>Audio-Visual and IT</td>
//       <td>${(formData.audioVisual || []).join(", ") || "N/A"}</td>
//     </tr>
//     <tr>
//       <td>Pantry Items</td>
//       <td>${(formData.pantryItems || []).join(", ") || "N/A"}</td>
//     </tr>
//     <tr>
//       <td>Additional Info</td>
//       <td>${formData.additionalInfo || "N/A"}</td>
//     </tr>
//   </table>

//   <h3>Branding & Signage Requirements</h3>
//   <table>
//     <tr>
//       <th width="30%">Field</th>
//       <th>Details</th>
//     </tr>
//     <tr>
//       <td>Branding Type</td>
//       <td>${formData.brandingType || "N/A"}</td>
//     </tr>
//     <tr>
//       <td>Company Logo</td>
//       <td>${formData.companyLogo ? "Uploaded" : "Not provided"}</td>
//     </tr>
//     <tr>
//       <td>Branding Description</td>
//       <td>${formData.brandingDescription || "N/A"}</td>
//     </tr>
//   </table>

//   <h3>Budget</h3>
//   <table>
//     <tr>
//       <th width="30%">Field</th>
//       <th>Details</th>
//     </tr>
//     <tr>
//       <td>Budget Range</td>
//       <td>${formData.budgetFrom || "N/A"} - ${formData.budgetTo || "N/A"}</td>
//     </tr>
//     <tr>
//       <td>Budget Notes</td>
//       <td>${formData.budgetNotes || "N/A"}</td>
//     </tr>
//   </table>

//   <h3>Other Information</h3>
//   <table>
//     <tr>
//       <th width="30%">Field</th>
//       <th>Details</th>
//     </tr>
//     <tr>
//       <td>Presentation Date</td>
//       <td>${formData.presentationDate || "N/A"}</td>
//     </tr>
//     <tr>
//       <td>Approval Date</td>
//       <td>${formData.approvalDate || "N/A"}</td>
//     </tr>
//     <tr>
//       <td>Other Information</td>
//       <td>${formData.otherInformation || "N/A"}</td>
//     </tr>
//     <tr>
//       <td>Floor Plan</td>
//       <td>${formData.floorPlan ? "Uploaded" : "Not provided"}</td>
//     </tr>
//   </table>
// </body>
// </html>
//   `
// }





















import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const formData = await request.json()

    // Send email to admin
    const { data: adminData, error: adminError } = await resend.emails.send({
      from: "Stall/Booth Request <onboarding@resend.dev>",
      to: "connect@differentstrokes.in", // Admin email
      subject: `New Stall Request from ${formData.companyName}`,
      html: generateAdminEmailHtml(formData),
      attachments: [
        ...(formData.companyLogo ? [{ filename: "company_logo.png", content: formData.companyLogo }] : []),
        ...(formData.floorPlan ? [{ filename: "floor_plan.pdf", content: formData.floorPlan }] : []),
      ],
    })

    if (adminError) {
      console.error("Error sending admin email:", adminError)
      return NextResponse.json({ error: adminError.message }, { status: 500 })
    }

    // Send confirmation email to client
    const { data: clientData, error: clientError } = await resend.emails.send({
      from: "Stall/Booth Request <onboarding@resend.dev>",
      to: formData.email, // Client email from form
      subject: `Confirmation: Your Stall Request for ${formData.exhibitionName}`,
      html: generateClientEmailHtml(formData),
    })

    if (clientError) {
      console.error("Error sending client email:", clientError)
      // Don't return error here as admin email was successful
      // Just log the error and continue
    }

    return NextResponse.json({ 
      success: true, 
      adminEmail: adminData,
      clientEmail: clientData,
      message: "Form submitted successfully. Confirmation emails sent."
    })
    
  } catch (error) {
    console.error("Error processing form submission:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

// Admin email template (detailed form data)
function generateAdminEmailHtml(formData) {
  return `
   <!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Stall Request</title>
  <style>
    table {
      border-collapse: collapse;
      width: 100%;
      margin-bottom: 20px;
      background-color: #ffffff;
    }
    th, td {
      text-align: left;
      padding: 8px;
      border: 1px solid #dddddd;
    }
    th {
      background-color: #f5f5f5;
      font-weight: bold;
    }
    h2, h3 {
      color: #333333;
      margin-top: 20px;
    }
    .header {
      background-color: #4a90e2;
      color: white;
      padding: 10px;
      margin-bottom: 20px;
    }
  </style>
</head>
<body style="font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f8f8f8;">
  <div class="header">
    <h2 style="margin: 0;">New Stall/Booth Request from ${formData.companyName || "N/A"}</h2>
  </div>

  <h3>Company Information</h3>
  <table>
    <tr>
      <th width="30%">Field</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>Company Name</td>
      <td>${formData.companyName || "N/A"}</td>
    </tr>
    <tr>
      <td>Contact Person</td>
      <td>${formData.contactPerson || "N/A"}</td>
    </tr>
    <tr>
      <td>Email</td>
      <td>${formData.email || "N/A"}</td>
    </tr>
    <tr>
      <td>Mobile Number</td>
      <td>${formData.mobileNumber || "N/A"}</td>
    </tr>
    <tr>
      <td>Phone Number</td>
      <td>${formData.phoneNumber || "N/A"}</td>
    </tr>
    <tr>
      <td>Website</td>
      <td>${formData.website || "N/A"}</td>
    </tr>
    <tr>
      <td>Designation</td>
      <td>${formData.designation || "N/A"}</td>
    </tr>
    <tr>
      <td>Address</td>
      <td>${formData.address || "N/A"}</td>
    </tr>
  </table>

  <h3>Event Information</h3>
  <table>
    <tr>
      <th width="30%">Field</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>Exhibition Name</td>
      <td>${formData.exhibitionName || "N/A"}</td>
    </tr>
    <tr>
      <td>Venue Location</td>
      <td>${formData.venueLocation || "N/A"}</td>
    </tr>
    <tr>
      <td>Exhibition Dates</td>
      <td>${formData.exhibitionDates || "N/A"}</td>
    </tr>
    <tr>
      <td>Exhibition Details</td>
      <td>${formData.exhibitionDetails || "N/A"}</td>
    </tr>
  </table>

  <h3>Stand/Stall Information</h3>
  <table>
    <tr>
      <th width="30%">Field</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>Stand Number</td>
      <td>${formData.standNumber || "N/A"}</td>
    </tr>
    <tr>
      <td>Hall Number</td>
      <td>${formData.hallNumber || "N/A"}</td>
    </tr>
    <tr>
      <td>Stand Size</td>
      <td>${formData.standSizeLength || "N/A"} x ${formData.standSizeWidth || "N/A"} meters</td>
    </tr>
    <tr>
      <td>Stand Layout</td>
      <td>${formData.standLayout || "N/A"}</td>
    </tr>
    <tr>
      <td>Need Mezzanine</td>
      <td>${formData.needMezzanine || "N/A"}</td>
    </tr>
    <tr>
      <td>Mezzanine Details</td>
      <td>${formData.mezzanineDetails || "N/A"}</td>
    </tr>
  </table>

  <h3>Stand/Stall Design Requirements</h3>
  <table>
    <tr>
      <th width="30%">Field</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>Theme</td>
      <td>${formData.theme || "N/A"}</td>
    </tr>
    <tr>
      <td>Exhibits/Product Display</td>
      <td>${formData.exhibitsDisplay || "N/A"}</td>
    </tr>
    <tr>
      <td>Areas Required</td>
      <td>${(formData.areas || []).join(", ") || "N/A"}</td>
    </tr>
    <tr>
      <td>Area Details</td>
      <td>${formData.areaDetails || "N/A"}</td>
    </tr>
  </table>

  <h3>Stand/Stall Equipment Requirements</h3>
  <table>
    <tr>
      <th width="30%">Field</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>Audio-Visual and IT</td>
      <td>${(formData.audioVisual || []).join(", ") || "N/A"}</td>
    </tr>
    <tr>
      <td>Pantry Items</td>
      <td>${(formData.pantryItems || []).join(", ") || "N/A"}</td>
    </tr>
    <tr>
      <td>Additional Info</td>
      <td>${formData.additionalInfo || "N/A"}</td>
    </tr>
  </table>

  <h3>Branding & Signage Requirements</h3>
  <table>
    <tr>
      <th width="30%">Field</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>Branding Type</td>
      <td>${formData.brandingType || "N/A"}</td>
    </tr>
    <tr>
      <td>Company Logo</td>
      <td>${formData.companyLogo ? "Uploaded" : "Not provided"}</td>
    </tr>
    <tr>
      <td>Branding Description</td>
      <td>${formData.brandingDescription || "N/A"}</td>
    </tr>
  </table>

  <h3>Budget</h3>
  <table>
    <tr>
      <th width="30%">Field</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>Budget Range</td>
      <td>${formData.budgetFrom || "N/A"} - ${formData.budgetTo || "N/A"}</td>
    </tr>
    <tr>
      <td>Budget Notes</td>
      <td>${formData.budgetNotes || "N/A"}</td>
    </tr>
  </table>

  <h3>Other Information</h3>
  <table>
    <tr>
      <th width="30%">Field</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>Presentation Date</td>
      <td>${formData.presentationDate || "N/A"}</td>
    </tr>
    <tr>
      <td>Approval Date</td>
      <td>${formData.approvalDate || "N/A"}</td>
    </tr>
    <tr>
      <td>Other Information</td>
      <td>${formData.otherInformation || "N/A"}</td>
    </tr>
    <tr>
      <td>Floor Plan</td>
      <td>${formData.floorPlan ? "Uploaded" : "Not provided"}</td>
    </tr>
  </table>
</body>
</html>
  `
}

// Client confirmation email template (simplified, professional)
function generateClientEmailHtml(formData) {
  return `
   <!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Stall Request Confirmation</title>
  <style>
    .container {
      max-width: 600px;
      margin: 0 auto;
      font-family: Arial, sans-serif;
      background-color: #ffffff;
      border: 1px solid #e0e0e0;
    }
    .header {
      background-color: #4a90e2;
      color: white;
      padding: 20px;
      text-align: center;
    }
    .content {
      padding: 30px;
      line-height: 1.6;
      color: #333333;
    }
    .highlight {
      background-color: #f8f9fa;
      padding: 15px;
      border-left: 4px solid #4a90e2;
      margin: 20px 0;
    }
    .footer {
      background-color: #f8f9fa;
      padding: 20px;
      text-align: center;
      font-size: 14px;
      color: #666666;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
    }
    th, td {
      text-align: left;
      padding: 8px;
      border-bottom: 1px solid #ddd;
    }
    th {
      background-color: #f5f5f5;
      font-weight: bold;
    }
  </style>
</head>
<body style="margin: 0; padding: 20px; background-color: #f5f5f5;">
  <div class="container">
    <div class="header">
      <h1 style="margin: 0;">Thank You for Your Stall Request!</h1>
    </div>
    
    <div class="content">
      <p>Dear ${formData.contactPerson || "Valued Client"},</p>
      
      <p>Thank you for submitting your stall/booth design request. We have successfully received your request and our team will review it shortly.</p>
      
      <div class="highlight">
        <h3 style="margin-top: 0;">Request Summary:</h3>
        <table>
          <tr>
            <th>Company</th>
            <td>${formData.companyName || "N/A"}</td>
          </tr>
          <tr>
            <th>Exhibition</th>
            <td>${formData.exhibitionName || "N/A"}</td>
          </tr>
          <tr>
            <th>Venue</th>
            <td>${formData.venueLocation || "N/A"}</td>
          </tr>
          <tr>
            <th>Stand Size</th>
            <td>${formData.standSizeLength || "N/A"} x ${formData.standSizeWidth || "N/A"} meters</td>
          </tr>
          <tr>
            <th>Presentation Date</th>
            <td>${formData.presentationDate || "N/A"}</td>
          </tr>
          <tr>
            <th>Budget Range</th>
            <td>${formData.budgetFrom || "N/A"} - ${formData.budgetTo || "N/A"}</td>
          </tr>
        </table>
      </div>
      
      <h3>What happens next?</h3>
      <ul>
        <li><strong>Review:</strong> Our design team will review your requirements within 1-2 business days</li>
        <li><strong>Contact:</strong> We will contact you to discuss your project in detail</li>
        <li><strong>Proposal:</strong> You will receive a detailed proposal and design concepts</li>
        <li><strong>Approval:</strong> Once approved, we'll begin the design and construction process</li>
      </ul>
      
      <div class="highlight">
        <p><strong>Important Reminders:</strong></p>
        <ul>
          <li>Our lead time depends on current workload</li>
          <li>Design service is free up to two sets of changes</li>
          <li>Additional changes will be charged at Rs.5000/- per change</li>
        </ul>
      </div>
      
      <p>If you have any questions or need to make changes to your request, please don't hesitate to contact us.</p>
      
      <p>Best regards,<br>
      <strong>The Design Team</strong></p>
    </div>
    
    <div class="footer">
      <p>This is an automated confirmation email. Please do not reply to this email.</p>
      <p>For any queries, please contact us at trumpcardworld@gmail.com</p>
    </div>
  </div>
</body>
</html>
  `
}