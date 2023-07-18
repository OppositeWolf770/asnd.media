exports.handler = async (event, context) => {
    const data = { message: 'Hello, World!!!' };

    return {
        statusCode: 200,
        body: console.log(data),
    }
}