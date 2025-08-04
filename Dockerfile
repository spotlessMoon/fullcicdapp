name: Build and Push Docker Images to Docker Hub (single repo with tags)

on:
  push:
    branches:
      - main

jobs:
  build-and-push:
    runs-on: ubuntu-latest

    env:
      IMAGE_PREFIX: bastawadidocker/fullcicd

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Log in to Docker Hub
        run: echo "${{ secrets.DOCKERHUB_TOKEN }}" | docker login -u "${{ secrets.DOCKERHUB_USERNAME }}" --password-stdin

      - name: Build and Push FE
        run: |
          docker build -t $IMAGE_PREFIX:fe-latest ./FE
          docker push $IMAGE_PREFIX:fe-latest

      - name: Build and Push API1
        run: |
          docker build -t $IMAGE_PREFIX:api1-latest ./BE/API1
          docker push $IMAGE_PREFIX:api1-latest

      - name: Build and Push API2
        run: |
          docker build -t $IMAGE_PREFIX:api2-latest ./BE/API2
          docker push $IMAGE_PREFIX:api2-latest
