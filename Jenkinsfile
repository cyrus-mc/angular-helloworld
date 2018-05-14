#!/usr/bin/env groovy

@Library('shared-library@angular') _

if (env.BRANCH_NAME =~ /release-\d+/) {
  cfAngularCD {
    deployTo = "test"
    spa = "helloworld"
  }
} else if (env.BRANCH_NAME =~ /master/ || env.BRANCH_NAME =~ /PR-\d+/) {
  cfAngularCI {
    deployTo = "dev"
    spa = "helloworld"
  }
}
