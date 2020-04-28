const express             = require('express');
const path                = require('path');
const fs                  = require('fs');
const router              = express.Router();

router.get('/videos', (request, response)=>{
  let videos;
  let pathVideos = path.join('./' + 'public/assets/videos');
  videos = fs.readdirSync(pathVideos, { encoding: 'utf-8' });
  //videos = JSON.stringify(videos);
  if(videos.length > 0){
    response.status(200).json({ok: true, data:videos, fails:[]});
  }else{
    response.status(400).json({ok: false, data: [], fails:[{error: 'There were not found any videos.'}]});
  }
});

router.get('/video/:id', (request, response)=>{

  const filepath = path.join('public/assets/videos/'+request.params.id);
  const stat = fs.statSync(filepath);
  const fileSize = stat.size;
  const range = request.headers.range;
  if (range) {
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1]
      ? parseInt(parts[1], 10)
      : fileSize-1;
    const chunksize = (end-start)+1;
    const file = fs.createReadStream(filepath, {start, end});
    const head = {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': 'video/mp4',
    };
    response.writeHead(206, head);
    file.pipe(response);
  } else {
    const head = {
      'Content-Length': fileSize,
      'Content-Type': 'video/mp4',
    };
    response.writeHead(200, head);
    fs.createReadStream(filepath).pipe(response);
  }
});

module.exports = router;
