functions:
  generatePDF:
    handler: dist/handler.generatePDF
    environment:
      S3_BUCKET: ${self:custom.s3Bucket}
    events:
      - http:
          path: /
          method: GET
    package:
      include:
        # Include the bundled JS file
        - '.webpack/**'
