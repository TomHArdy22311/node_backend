pipeline {
  agent any

  tools {nodejs "nodemeriha"}

  stages {

    stage('Git') {
      steps {
        git 'https://github.com/TomHArdy22311/node_backend.git'
      }
    }

    stage('Installation') {
          steps {
            sh 'npm install'
          }
        }

    stage('start') {
      steps {
         sh 'npm start'
      }
    }
  }
}