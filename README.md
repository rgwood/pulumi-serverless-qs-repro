# Pulumi aws-serverless qs repro

This is a minimal reproduction of an issue I am experiencing with [`@pulumi/aws-serverless`](https://www.npmjs.com/package/@pulumi/aws-serverless)-managed Lambda functions and the popular [`qs`](https://www.npmjs.com/package/qs) NPM package.

The Pulumi setup code is entirely copied from [this example](https://github.com/lindydonna/velocity-examples/tree/master/pulumi/pulumi-serverless) by [Donna Malayeri](https://github.com/lindydonna).


## The issue

If I require `qs` in my Lambda function JS file (like `const qs = require('qs');`), then I get an error when trying to call the Lambda function: `{"message": "Internal server error"}`

Nothing shows up when I run `pulumi logs` so it's hard to say what's causing the issue.

## Steps to reproduce

1. Follow [steps 1-5 in the original setup instructions](https://github.com/lindydonna/velocity-examples/tree/master/pulumi/pulumi-serverless)
1. Call the endpoint with something like `curl $(pulumi stack output endpoint)`

You will receive `{"message": "Internal server error"}` instead of the expected Hello World message.

Commenting out the `const qs = require('qs');` line will fix the issue (but of course, now we can't use `qs`).