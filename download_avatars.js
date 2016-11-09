'use strict';
const request = require('request');
console.log('Welcome to the GitHub Avatar Downloader!');
const GITHUB_USER = "Ryo-code";
const githubToken = require('./gh-access-token');
console.log("Token: ", githubToken);

function getRepoContributors(repoOwner, repoName, cb) {

  // const requestURL = `https://${GITHUB_USER}:${githubToken.token}@api.github.com/repos/${repoOwner}/${repoName}/contributors`;
  const requestURL = 'https://' + GITHUB_USER + ':' + githubToken.token + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

  const options = {
    url: requestURL,
    headers: {
      'User-Agent': "GitHub Avatar Downloader - Ryo's Project"
    }
  };

  console.log('requestURL------>', requestURL);

  request.get(options)
         .on('error', function (err) {      // Note 2
           throw err;
         })
         .on('response', function (response) {  // Note 3
          // const parsedResponse = JSON.parse(response[0]);
          // console.log("Parsed response: ", response);
          console.log('Response Status Code: ', response.statusCode);
         })
}

getRepoContributors("mhdawson", "CurryKitten", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});
