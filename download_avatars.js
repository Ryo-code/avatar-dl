'use strict';
const request = require('request');
console.log('Welcome to the GitHub Avatar Downloader!');
const GITHUB_USER = "Ryo-code";
const githubToken = require('./gh-access-token');
console.log("Token: ", githubToken);

function getRepoContributors(repoOwner, repoName, cb) {

  const requestURL = 'https://' + GITHUB_USER + ':' + githubToken.token + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

  console.log('requestURL------>', requestURL);

  request.get(requestURL)
         .on('error', function (err) {      // Note 2
           throw err;
         })
         .on('response', function (response) {  // Note 3
          console.log('Response Status Code: ', response.statusCode);

         })
}

getRepoContributors("mhdawson", "CurryKitten", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});
