pipeline {
  agent any
  stages {
    stage('PM2 Status') {
      steps {
        sh '''
          export HOME=/home/ubuntu
          pm2 status
        '''
      }
    }
  }
}
