pipeline {
  agent any

  tools {nodejs "nodemeriha"}

  stages {

    stage('Git') {
      steps {
        git(url: 'https://github.com/TomHArdy22311/node_backend.git', branch: 'main')
      }
    }

    stage('Installation') {
          steps {
            bash 'npm install'
          }
        }

    stage('start') {
      steps {
         bash 'npm start'
      }
    }
  }
}