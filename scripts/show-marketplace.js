// This dotenv import is required for the `.env` file to be read
require('dotenv').config();

const flexIntegrationSdk = require('sharetribe-flex-integration-sdk');

const integrationSdk = flexIntegrationSdk.createInstance({

  // These two env vars need to be set in the `.env` file.
  clientId: process.env.FLEX_INTEGRATION_CLIENT_ID,
  clientSecret: process.env.FLEX_INTEGRATION_CLIENT_SECRET,

  // Normally you can just skip setting the base URL and just use the
  // default that the `createInstance` uses. We explicitly set it here
  // for local testing and development.
  baseUrl: process.env.FLEX_INTEGRATION_BASE_URL || 'https://flex-api.sharetribe.com',
});

// We query the marketplace resource. The `show` function returns a
// Promise that resolves with a response object.
integrationSdk.marketplace.show().then(res => {
  const marketplace = res.data.data;
  console.log(`Name: ${marketplace.attributes.name}`);
  console.log(`Description: ${marketplace.attributes.description}`);
});
