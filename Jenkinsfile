pipeline {
  agent any

  tools { nodejs "Simon" }

  stages {
    stage('Git') {
      steps {
        git(url: 'https://github.com/TomHArdy22311/node_backend.git', branch: 'main')
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('Start') {
      steps{
        sh 'pm2 start index.js --name KizaBack'
      }
    }
  }
}
