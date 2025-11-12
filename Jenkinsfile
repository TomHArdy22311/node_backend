pipeline {
  agent any

  tools {nodejs "Jedi"}
  environment {
    PORT = '3004'
    NODE_ENV = 'production'
  }

  stages {
    stage('Git') {
      steps {
        git(url: 'https://github.com/TomHArdy22311/node_backend.git',branch:'main')
      }
    }

    stage('Installation') {
      steps {
        sh 'npm install'
      }
    }

    stage('Start') {
      steps {
        sh 'npm install pm2 -g'
        sh 'pm2 start index.js --name backend'
      }
    }
  }
}