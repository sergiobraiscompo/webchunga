import { ENV } from '#core/constants/env.constants.js';
import express, { application, Router } from 'express';
import path from 'path';
const videolink = "public\media\video1.mp4"
const videosApi = Router();

const createVideoContainer = (link: string) => {
  const container = document.createElement("div");
  const title = document.createElement("h4");
  title.innerText = "video 1";
  const video = document.createElement("video");
  video.src = "public\media\video1.mp4"
  video.play()

  container.appendChild(video)
}

application.get("/", (req, res) => {
  
})

videosApi
  .get("/", async (req, res, next) => {
    try {
     createVideoContainer
    }
    catch (error) {
      next(error);
    }
  })

application.listen(ENV.PORT, async () => {
  console.log(`Server ready at port ${ENV.PORT}`);
});