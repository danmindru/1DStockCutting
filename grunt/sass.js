module.exports = {
    // Development settings
  dev: {
    options: {
      outputStyle: 'compressed',
      sourceMap: true
    },
    files: [{
      'docs/styles/styles.min.css': ['src/styles/main.scss'],
      'docs/styles/lib.min.css': [
        'node_modules/angular-material/angular-material.scss'
      ]
    }]
  },
  // Production settings
  prod: {
    options: {
      outputStyle: 'compressed',
      sourceMap: false
    },
    files: [{
      'docs/styles/styles.min.css': ['src/styles/main.scss'],
      'docs/styles/lib.min.css': [
        'node_modules/angular-material/angular-material.scss'
      ]
    }]
  }
};
