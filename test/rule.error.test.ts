import { InvalidInternalDefinitionParameterError } from '@gammarers/aws-cdk-errors';
import { App, Stack } from 'aws-cdk-lib';
import { CodePipelineExecutionStateChangeDetectionEventRule } from '../src';

describe('Error Rule Check', () => {

  const app = new App();
  const stack = new Stack(app, 'TestingStack', {
    env: {
      account: '123456789012',
      region: 'us-east-1',
    },
  });

  it('Should Error', () => {
    expect(() => {
      new CodePipelineExecutionStateChangeDetectionEventRule(stack, 'CodePipelineExecutionStateChangeDetectionEventRule', {
        ruleName: 'codepipeline-state-change-detection-event-rule',
        eventPattern: {
          source: ['aws.codepipeline'],
          detailType: ['CodePipeline Pipeline Execution State Change'],
        },
      });
    }).toThrow(InvalidInternalDefinitionParameterError);
  });

});
