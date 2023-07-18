import { Handler } from '@netlify/functions'

export const handler: Handler = async (event) => {
    // @ts-ignore
    const { firstName, lastName, email, message } = JSON.parse(event.body)

    console.log({ firstName, lastName, email, message})

    return {
        statusCode: 200,
        body: JSON.stringify({
            firstName,
            lastName,
            email,
            message:
                `
                    First Name: ${firstName}
                    Last Name: ${lastName}
                    Email Address: ${email}
                    Message: ${message}
                `
        })
    }
}