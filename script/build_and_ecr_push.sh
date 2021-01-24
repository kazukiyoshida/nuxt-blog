#!/bin/sh

# 必要があればデフォルトレジストリに対して docker cli を認証する
# aws ecr get-login-password --profile kazuki-projects | docker login --username AWS --password-stdin  508261446428.dkr.ecr.ap-northeast-1.amazonaws.com

# Docker image を build
docker build -t 508261446428.dkr.ecr.ap-northeast-1.amazonaws.com/blog:latest .

# ECR に image を push
docker push 508261446428.dkr.ecr.ap-northeast-1.amazonaws.com/blog:latest
