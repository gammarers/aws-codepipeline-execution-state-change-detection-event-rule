import { awscdk, javascript } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'yicr',
  authorAddress: 'yicr@users.noreply.github.com',
  authorOrganization: true,
  cdkVersion: '2.80.0',
  defaultReleaseBranch: 'main',
  typescriptVersion: '5.4.x',
  jsiiVersion: '5.4.x',
  name: '@gammarers/aws-codepipeline-state-change-detection-event-rule',
  majorVersion: 1,
  projenrcTs: true,
  repositoryUrl: 'https://github.com/gammarers/aws-codepipeline-state-change-detection-event-rule.git',
  npmAccess: javascript.NpmAccess.PUBLIC,
  releaseToNpm: true,
  depsUpgrade: true,
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      schedule: javascript.UpgradeDependenciesSchedule.expressions(['0 18 * * *']), // every sunday (JST/MON:03:00)
    },
  },
  minNodeVersion: '18.0.0',
  workflowNodeVersion: '22.x',
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['yicr'],
  },
});
project.synth();