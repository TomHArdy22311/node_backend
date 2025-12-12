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

    stage('Image Pull') {
      steps{
        sh 'docker pull anthony1985/node_backend'
      }
    }

    stage('Image') {
          steps {
            sh 'docker build -t "anthony1985/node_backend" .'
          }
    }
    stage('Run COntainer'){
      steps{
        sh 'docker run -p 3017:3017 anthony1985/node_backend'     
      }
    }
  }
}