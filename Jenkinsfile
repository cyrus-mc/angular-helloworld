#!/usr/bin/env groovy

@Library('shared-library@1.3.0') _

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
