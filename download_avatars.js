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

  console.log('requestURL:', requestURL);

  request(options, cb);
}

getRepoContributors("jquery", "jquery", function(err, respone, body) {
  if(err){
    console.log("Error!", err);
  }else{
    const data = JSON.parse(body);
    data.forEach(function(contributor){
      console.log(contributor.avatar_url);
    });
  }
});


//download with writestream...
