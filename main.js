import { data } from '@tensorflow/tfjs';

document.addEventListener('DOMContentLoaded', async () => {
  const button = document.getElementById('button');
  const video = document.getElementById('video');
  
  video.width = document.documentElement.offsetWidth;

  const webcam = await data.webcam(video);
  
  await new Promise(resolve => {
    button.addEventListener('click', resolve);
  });

  const filePicker = await showSaveFilePicker();

  const entries = [];

  let next = true;

  setInterval(async () => {
    if (!next) return;
    next = false;
    const capture = await webcam.capture();
    const data = await capture.array();
    entries.push(data);
    const writable = await filePicker.createWritable();
    const content = JSON.stringify(entries);
    await writable.write(content);
    await writable.close();
    next = true;
  }, 1);
});
