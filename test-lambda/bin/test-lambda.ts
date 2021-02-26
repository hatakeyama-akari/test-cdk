#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { TestLambdaStack } from '../lib/test-lambda-stack';

const app = new cdk.App();
new TestLambdaStack(app, 'TestLambdaStack');
