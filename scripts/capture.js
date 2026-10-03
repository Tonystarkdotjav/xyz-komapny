import fs from 'fs';

async function run() {
  const versionRes = await fetch('http://localhost:9222/json/version');
  const version = await versionRes.json();
  console.log('Connected to CDP version:', version.Browser);

  // Create a new target/page
  const newTargetRes = await fetch('http://localhost:9222/json/new?http://localhost:3000/', { method: 'PUT' });
  const target = await newTargetRes.json();
  console.log('Target opened:', target.webSocketDebuggerUrl);

  const ws = new WebSocket(target.webSocketDebuggerUrl);

  let idCounter = 1;
  const pending = new Map();

  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pending.has(msg.id)) {
      pending.get(msg.id)(msg);
      pending.delete(msg.id);
    }
  };

  const send = (method, params = {}) => {
    return new Promise((resolve) => {
      const id = idCounter++;
      pending.set(id, resolve);
      ws.send(JSON.stringify({ id, method, params }));
    });
  };

  await new Promise((resolve) => {
    ws.onopen = resolve;
  });

  console.log('Enabling Page & Runtime domains...');
  await send('Page.enable');
  await send('Runtime.enable');
  await send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 1,
    mobile: false
  });

  // Wait 3.5s for boot loading screen to complete and WebGL 3D scene to render
  console.log('Waiting for boot loading screen and 3D WebGL render...');
  await new Promise(r => setTimeout(r, 3500));

  // Take Hero Screenshot
  console.log('Capturing Hero screenshot...');
  const heroSnap = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('c:/test repo/screenshot-hero.png', Buffer.from(heroSnap.result.data, 'base64'));
  console.log('Saved screenshot-hero.png');

  // Scroll to Section 4: Work Showcase and Click Modal
  console.log('Opening Case Study Modal...');
  await send('Runtime.evaluate', {
    expression: `
      document.getElementById('work').scrollIntoView({ behavior: 'instant' });
      const card = document.querySelector('.editorial-visual-wrapper');
      if (card) card.click();
    `
  });
  await new Promise(r => setTimeout(r, 800));
  const modalSnap = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('c:/test repo/screenshot-modal.png', Buffer.from(modalSnap.result.data, 'base64'));
  console.log('Saved screenshot-modal.png');

  // Close modal
  await send('Runtime.evaluate', {
    expression: `
      const closeBtn = document.querySelector('.modal-close-btn');
      if (closeBtn) closeBtn.click();
    `
  });
  await new Promise(r => setTimeout(r, 400));

  // Close target and disconnect
  await fetch(`http://localhost:9222/json/close/${target.id}`);
  ws.close();
  console.log('Capture complete!');
}

run().catch(err => {
  console.error('Capture error:', err);
  process.exit(1);
});
