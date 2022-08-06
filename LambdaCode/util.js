function buildResponse(statuscode, body) {
    return {
        StatusCode: statuscode,
        headers: {
            'Access-Control-Allow-Origin' : '*',
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(body)
    }
}

module.exports.buildResponse = buildResponse;
