'use strict';
const request = require('request');
const fs = require("fs");

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

function downloadImageByURL(url, filePath) {
  request({
    url: url
  }).pipe(fs.createWriteStream(filePath));

  if (process.argv.length !== 4) {
    let notFourArgs = `Error! Insert the name of the repo owner and the name of the repo (such as "jquery jquery"). You must have ONLY four arguments.`;
    throw notFourArgs;
  }
}

getRepoContributors(owner, repo, function(err, respone, body) {
  if (err) {
    console.log("Error!", err);
  } else {
    const data = JSON.parse(body);
    if (!fs.existsSync('avatars')) {
      fs.mkdirSync('avatars')
    }

    data.forEach(function(contributor) {
      console.log(contributor.avatar_url);

      const avatarURL = contributor.avatar_url;
      const username = contributor.login;
      const filePath = `./avatars/${username}.jpeg`;

      downloadImageByURL(avatarURL, filePath);
    });
  }
});
