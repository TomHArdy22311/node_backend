pipeline {
  agent any

  tools {nodejs "Simon"}
 
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

    stage('pm2 installation') {
      steps {
        sh 'npm install -g'
      }
    }

    stage('Start') {
      steps {
        sh 'pm2 start index.js --name Backend'
      }
    }
  }
}