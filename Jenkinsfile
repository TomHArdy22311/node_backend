pipeline {
  agent any
  stages {
    stage('PM2 Status') {
      steps {
        sh '''
          export HOME=/home/Simon
          pm2 status
        '''
      }
    }
  }
}
