'use strict';
const request = require('request');

const GITHUB_USER = "Ryo-code";
const GITHUB_TOKEN = require('./gh-access-token');

const owner = process.argv[2];
const repo = process.argv[3];

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {

  const endpoint = `api.github.com/repos/${repoOwner}/${repoName}/contributors`;
  const requestURL = `https://${GITHUB_USER}:${GITHUB_TOKEN.token}@${endpoint}`;

  const options = {
    url: requestURL,
    headers: {
      'User-Agent': "GitHub Avatar Downloader - Ryo's Project"
    }
  };

  console.log('requestURL------>', requestURL);

  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      cb(data);
  } else {
    console.log("Error!", error)
    }
  });

}

getRepoContributors("jquery", "jquery", function(err, result, contributors) {
  console.log("Errors:", err);
  console.log("Result:", result);

  // console.log("777777777---> Avatar URL: ", result["avatar_url"]);
});
