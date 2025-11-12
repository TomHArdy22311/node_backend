pipeline {
  agent any

  tools {nodejs "Jedi"}

  stages {

    stage('Git') {
      steps {
        git(url: 'https://github.com/TomHArdy22311/node_backend.git', branch: 'main')
      }
    }

    stage('Installation') {
          steps {
            bat 'npm install'
          }
        }

    stage('start') {
      steps {
         bat 'npm start'
      }
    }
  }
}