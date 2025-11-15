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

    stage('Install PM2 (local)') {
      steps {
        sh 'npm install pm2'
      }
    }

    stage('Start') {
      steps {
        sh './node_modules/.bin/pm2 start index.js --name Backend'
      }
    }
  }
}
