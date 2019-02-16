exports.handler = function(event, context, callback) {
    callback(null, {
    statusCode: 200,
    body: '<?xml version="1.0" encoding="utf-8"?><MESSAGE message="Thanks for registering our product!"><KEY>#1c5dd0eba812ebf09e4787f064af85341eda8787078e7259f1c1cc3a4517a01d25069016b92c69f57944787fb3a2c505e14585985bdd50136408e49fb7f8cf4d555ae151a1add0dc3b3e2b165999f67ecd4a585b63f8b7ac5b5f53ecc12ffdc7ccd196017d1a04ffe5ca093ea8d2d1c8049b09b5c77b0afb177a6b77e9e167a54346da92961398dc221609366ff23000d95bd59df440b883f5ba7e48cd2b30f</KEY></MESSAGE>'
    });
}
