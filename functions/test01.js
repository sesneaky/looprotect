exports.handler = function(event, context, callback) {
    callback(null, {
    statusCode: 200,
    body: '<?xml version="1.0" encoding="utf-8"?><MESSAGE message="Thanks for registering our product!"><KEY>I4qtvzcihwD8NvDK2cOnH7hMf26lQX2HmW9RrAG3</KEY></MESSAGE>'
    });
}