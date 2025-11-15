pipeline {
  agent any

  tools { nodejs "Simon" }

  environment {
    PM2_HOME = "${WORKSPACE}/.pm2"
    PM2_PATH = "/usr/local/bin/pm2"   // adjust if needed
  }

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

    stage('Install PM2') {
      steps {
        sh 'npm install pm2 -g'
      }
    }

    stage('Start with PM2') {
      steps {
        sh '$PM2_PATH start index.js --name Backend --no-daemon'
      }
    }
  }
}
