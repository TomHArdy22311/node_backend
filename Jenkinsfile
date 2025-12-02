pipeline {
  agent any

  tools {nodejs "Simon"}

  stages {
    stage('pm2 installation') {
      steps {
        sh 'npm i install pm2 -g'
      }
    }

    stage('Git') {
      steps {
        git(url: 'https://github.com/TomHArdy22311/node_backend.git', branch: 'main')
      }
    }

    stage('Installation') {
          steps {
            sh 'npm install'
          }
        }

    stage('pm2 status') {
      steps {
        sh 'pm2 start index.js --name backend2'
      }
    }
  }
}