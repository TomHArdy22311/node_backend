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

    stage('Start') {
      steps {
        sh 'npm start'
      }
    }
  }
}