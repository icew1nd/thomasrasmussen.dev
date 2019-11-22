const core = require("@actions/core");
const github = require("@actions/github");
const request = require("request");
const fs = require("fs");

try {
  // `who-to-greet` input defined in action metadata file
  const url = core.getInput("who-to-greet");
  if (!url) {
    throw new Error("No URL specified");
  }
  console.log(`Posted screenshot to GitHub PR`);
  const time = new Date().toTimeString();
  core.setOutput("time", time);

  // const options = {
  //   method: "POST",
  //   url:
  //     "https://api.saasify.sh/1/call/transitive-bullshit/puppet-master@a818aeac/screenshot",
  //   headers: {
  //     "content-type": "application/json"
  //   },
  //   body: {
  //     url
  //   },
  //   json: true
  // };

  // request(options, (error, response, body) => {
  //   if (error) throw new Error(error);

  const context = github.context;

  console.log(JSON.stringify(context));
  // octokit.pulls.createReview({
  //   owner: context.repo.owner,
  //   repo: context.repo,
  //   pull_number: context.pull_number,
  //   body: "yihaa"
  // });
  // });
} catch (error) {
  core.setFailed(error.message);
}
