module.exports = {
  staticFileGlobs: [
    'dist/**.html',
    'dist/**.js',
    'dist/**.css',
    'dist/assets/images/*',
    'dist/assets/icons/*',
    'dist/assets/data/**/**.json'
  ],
  root: 'dist',
  stripPrefix: 'dist/',
  navigateFallback: '/index.html'
};