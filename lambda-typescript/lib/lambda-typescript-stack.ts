import * as cdk from "aws-cdk-lib";
import { aws_lambda_nodejs, aws_lambda } from "aws-cdk-lib";
import { Construct } from "constructs";
import path = require("path");

export class LambdaTypescriptStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new aws_lambda_nodejs.NodejsFunction(this, "lambdaTypescriptFunction", {
      runtime: aws_lambda.Runtime.NODEJS_22_X,
      handler: "index.handler",
      entry: path.join(__dirname, "../lambda/index.ts"),
    });
  }
}
