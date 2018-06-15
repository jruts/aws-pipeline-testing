const { execSync } = require('child_process');

execSync('pip install aws-sam-cli');
execSync('sam package --template-file template.yaml --s3-bucket grimlocks-testing --output-template-file packaged.yaml')
