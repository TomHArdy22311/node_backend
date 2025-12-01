pipeline {
  agent any

  environment {
    pm2_app_name = "Artorias"
  }
  tools { nodejs "Simon" }

  stages {
    stage('pm2 Install') {
      steps{
      sh 'npm i pm2 -g'
      }
    }
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
        sh 'pm2 status'
      }
    }
  }
}
