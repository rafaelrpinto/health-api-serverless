const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies
const ddbGeo = require('dynamodb-geo');

// geo dynamo setup
const dynamoDb = new AWS.DynamoDB();
const geoDynamoConfig = new ddbGeo.GeoDataManagerConfiguration(dynamoDb, process.env.DYNAMODB_TABLE);
geoDynamoConfig.hashKeyLength = 6;
geoDynamoConfig.rangeKeyAttributeName = 'facilityId';
const geoTableManager = new ddbGeo.GeoDataManager(geoDynamoConfig);

/**
 * Function that searched for the nearest healf facilities based on the provided coordinates.
 */
module.exports.search = (event, context, callback) => {
  let latitude = event.pathParameters.lat;
  let longitude = event.pathParameters.long;

  console.log('Searching for facilities...');
  console.log(JSON.stringify(event));
  geoTableManager.queryRadius({
    RadiusInMeter: 2000,
    CenterPoint: {
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude)
    }
  }).then((dirtyResults) => {
    console.log(`${dirtyResults.length} facilities found!`);

    // clears the attribute values
    let facilities = [];
    dirtyResults.forEach((dirtyResult) => {
      let facility = {};
      Object.keys(dirtyResult).forEach((key) => {
        let dirtyValue = dirtyResult[key];
        facility[key] = dirtyValue[Object.keys(dirtyValue)[0]];
      });
      facilities.push(facility);
    });

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(facilities)
    };
    callback(null, response);
  }).catch((error) => {
    console.error(error);
    callback(error);
  });
};
