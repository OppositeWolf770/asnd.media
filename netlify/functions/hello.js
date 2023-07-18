exports.handler = async (event, context) => {
    const data = { message: 'Hello, World!!!' };

    return {
        statusCode: 200,
        body: JSON.stringify(data),
    }
}