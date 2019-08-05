const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://chillydk147.github.io/about-ireland',
  },
  () => {
    console.log('Deploy Complete!')
  }
)
