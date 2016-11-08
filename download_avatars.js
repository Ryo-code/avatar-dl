'use strict';

const request = require('request');
console.log('Welcome to the GitHub Avatar Downloader!');


function getRepoContributors(repoOwner, repoName, cb) {

  const GITHUB_USER = "Ryo-code";
  const GITHUB_TOKEN = "place-holder-token"; //don't push the token to github

  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

  console.log('requestURL------>', requestURL);
}

getRepoContributors("mhdawson", "CurryKitten", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});
