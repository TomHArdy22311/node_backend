pipeline {
  agent any

  environment{
    NODE_ENV = 'development'
  }
  tools {
    nodejs 'Simon'
    }

  stages {
    stage('Git') {
      steps {
        git branch: 'main', url: 'https://github.com/TomHArdy22311/node_backend.git'
      }
    }

    stage('Image') {
          steps {
            sh 'sudo su'
            sh 'sudo docker build -t "backend".'
          }
    }
    stage('Run COntainer'){
      steps{
        sh 'sudo docer run -p 3016:3016 backend'     
      }
    }
  }
}