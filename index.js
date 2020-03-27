const accountSid = ''
const authToken = ''
const client = require('twilio')(accountSid, authToken)
const from = ''
const to = ''

async function run() {
  try {
    const message = await client.messages.create({
      from,
      body: 'message!',
      to
    })
    console.log(message) // sid
  } catch (error) {
    console.log(error)
  }
}

run()
