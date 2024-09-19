import { defineEventHandler, readBody } from 'h3'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    
    // Check if body is undefined or doesn't have the required fields
    if (!body || !body.name || !body.email || !body.message) {
      console.error('Invalid form data received:', body)
      return { success: false, error: 'Invalid form data' }
    }

    const { name, email, message } = body

    // Log the received data (remove this in production)
    console.log('Received form data:', { name, email, message })

    // Send email using nuxt-mail
    await event.context.mail.send({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    })

    return { success: true }
  } catch (error) {
    console.error('Error processing contact form submission:', error)
    return { success: false, error: 'Failed to process form submission' }
  }
})