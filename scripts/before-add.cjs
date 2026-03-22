const fs = require('fs');
const path = require('path');

/**
 * gh-pages --before-add hook
 * Removes .gitignore from the cache clone directory so that
 * git add . won't skip built MP4 files during deployment.
 */
module.exports = function (git) {
  const gitignorePath = path.join(git.cwd, '.gitignore');
  if (fs.existsSync(gitignorePath)) {
    fs.unlinkSync(gitignorePath);
    console.log('Removed .gitignore from gh-pages clone to include all assets.');
  }
};
