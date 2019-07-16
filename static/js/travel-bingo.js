$(document).ready(function() {
    loadData();
});

function loadData() {
    AWS.config.update({
      region: "eu-west-1",
      endpoint: 'dynamodb.eu-west-1.amazonaws.com',
      accessKeyId: credentials.accessKeyId,
      secretAccessKey: credentials.secretAccessKey
    });

    var docClient = new AWS.DynamoDB.DocumentClient();

    var params = {
        TableName: "travel-bingo",
        Key: {
            "id": "cow"
        }
    };
    docClient.get(params, function(err, data) {
        if (err) {
            console.log("Unable to read item: " + "\n" + JSON.stringify(err, undefined, 2));
        } else {
            console.log("GetItem succeeded: " + "\n" + JSON.stringify(data, undefined, 2));
        }
    });
};

