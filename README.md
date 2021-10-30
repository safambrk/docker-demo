# Docker Demo


  ### Rebuild & Run with Docker Compose  
  ###### Step 1  
  ```$ docker-compose -f docker-compose.yaml up --build -d  ```
  ###### Step 2  
  ```$ node script.js  ```




  ### Build  
  ```$ docker build -t IMAGE_NAME:TAG .  ```

  ### Run The Image  
  $ docker run -i -t --name CONTAINER_NAME IMAGE_ID  




  ### Push to Docker Hub  
  ###### Step 1
  ```$ docker build -t DOCKER_HUB_USERNAME/IMAGE_NAME:TAG .  ```
  ###### Step 2
  ```$ docker login  ```
  ###### Step 3
  ```$ sudo docker push DOCKER_HUB_USERNAME/IMAGE_NAME:TAG  ```




# Link to Docker Hub Repo
https://hub.docker.com/repository/docker/safambrk/docker-demo

