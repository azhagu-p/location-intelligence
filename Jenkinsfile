pipeline {
    agent any

      stages {
          stage('build') {
              steps {
                  echo 'building the software'
                  sh 'npm install'
              }
          }
          
          stage('deploy') {
              steps {
                  echo 'deploying the software'
                  sh '''#!/bin/bash
                  echo "Creating .ssh"
                  sudo ssh-keyscan 192.168.0.170 >> /home/memob/.ssh/known_hosts

                  sudo rsync -avz --exclude  '.git' --delete -e "ssh" ./ memob@192.168.0.170:/opt/
                  
                  sudo ssh memob@192.168.0.170 "sudo systemctl restart nodeapp"

                  '''
              }
          }
      }
    }

