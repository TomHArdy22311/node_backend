pipeline {
  agent any

  tools {nodejs "nodemeriha"}

  stages {

    stage('Git') {
      steps {
        git branch: 'main', url: 'https://github.com/TomHArdy22311/node_backend.git'
        sh 'git clone https://github.com/TomHArdy22311/node_backend.git'
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