'use strict';

// This line makes calls to the Lambda function fail with {"message": "Internal server error"}
const qs = require('qs');

exports.handler = async (event, context, callback) => {
    
    // const qsResult = qs.parse('hello=world');

    return {
        statusCode: 200,
        body: JSON.stringify('hello world')
    }
}
