const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const artifactDir = 'C:\\Users\\ajith\\.gemini\\antigravity-ide\\brain\\101c3bc1-0f73-4243-9e8a-26c8d57d706a';

// We can test by serving a lightweight HTML page that mounts the footer SVGs in the exact footer layout
// or directly screenshotting the page.
const testHtml = `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="https://cdn.tailwindcss.com"></script>
<style>
body { background: #f1f5f9; padding: 20px; font-family: sans-serif; }
</style>
</head>
<body>
  <div class="w-full max-w-[1200px] mx-auto">
    <h2 class="text-sm font-bold text-slate-500 mb-2">Desktop View (4 Columns + Vertical Joints)</h2>
    <div class="relative w-full border border-slate-300 bg-[#fafafa] p-8 mb-12">
      <!-- 4 Corners -->
      <div class="absolute -top-px -left-px w-[10px] h-[10px]"><img src="http://localhost:3000/joints/top-left-corner.svg" class="w-full h-full block"/></div>
      <div class="absolute -top-px -right-px w-[10px] h-[10px]"><img src="http://localhost:3000/joints/top-right-corner.svg" class="w-full h-full block"/></div>
      <div class="absolute -bottom-px -left-px w-[10px] h-[10px]"><img src="http://localhost:3000/joints/bottom-left-corner.svg" class="w-full h-full block"/></div>
      <div class="absolute -bottom-px -right-px w-[10px] h-[10px]"><img src="http://localhost:3000/joints/bottom-right-corner.svg" class="w-full h-full block"/></div>

      <!-- Vertical Dividers -->
      <div class="absolute top-0 bottom-0 left-[33.333333%] w-px bg-slate-300"></div>
      <div class="absolute -top-px left-[calc(33.333333%-4px)] w-[10px] h-[10px]"><img src="http://localhost:3000/joints/top-Tjoint.svg" class="w-full h-full block"/></div>
      <div class="absolute -bottom-px left-[calc(33.333333%-4px)] w-[10px] h-[10px]"><img src="http://localhost:3000/joints/bottom-Tjoint.svg" class="w-full h-full block"/></div>

      <div class="absolute top-0 bottom-0 left-[50%] w-px bg-slate-300"></div>
      <div class="absolute -top-px left-[calc(50%-4px)] w-[10px] h-[10px]"><img src="http://localhost:3000/joints/top-Tjoint.svg" class="w-full h-full block"/></div>
      <div class="absolute -bottom-px left-[calc(50%-4px)] w-[10px] h-[10px]"><img src="http://localhost:3000/joints/bottom-Tjoint.svg" class="w-full h-full block"/></div>

      <div class="absolute top-0 bottom-0 left-[75%] w-px bg-slate-300"></div>
      <div class="absolute -top-px left-[calc(75%-4px)] w-[10px] h-[10px]"><img src="http://localhost:3000/joints/top-Tjoint.svg" class="w-full h-full block"/></div>
      <div class="absolute -bottom-px left-[calc(75%-4px)] w-[10px] h-[10px]"><img src="http://localhost:3000/joints/bottom-Tjoint.svg" class="w-full h-full block"/></div>

      <div class="grid grid-cols-12 gap-4 text-xs text-slate-700">
        <div class="col-span-4 pr-4">Brand & Info</div>
        <div class="col-span-2 px-4">Navigation</div>
        <div class="col-span-3 px-4">Construction & Engineering Works</div>
        <div class="col-span-3 pl-4">Industrial Supply & Specialized Services</div>
      </div>
    </div>

    <h2 class="text-sm font-bold text-slate-500 mb-2">Mobile / Mid Screens View (Stacked + Horizontal Joints)</h2>
    <div class="relative w-[500px] border border-slate-300 bg-[#fafafa]">
      <!-- 4 Corners -->
      <div class="absolute -top-px -left-px w-[10px] h-[10px]"><img src="http://localhost:3000/joints/top-left-corner.svg" class="w-full h-full block"/></div>
      <div class="absolute -top-px -right-px w-[10px] h-[10px]"><img src="http://localhost:3000/joints/top-right-corner.svg" class="w-full h-full block"/></div>
      <div class="absolute -bottom-px -left-px w-[10px] h-[10px]"><img src="http://localhost:3000/joints/bottom-left-corner.svg" class="w-full h-full block"/></div>
      <div class="absolute -bottom-px -right-px w-[10px] h-[10px]"><img src="http://localhost:3000/joints/bottom-right-corner.svg" class="w-full h-full block"/></div>

      <div class="p-6 text-xs text-slate-700">Brand & Info</div>

      <!-- Horizontal Divider 1 -->
      <div class="relative w-full h-px bg-slate-300">
        <div class="absolute w-[10px] h-[19px]" style="top: -9px; left: -1px;"><img src="http://localhost:3000/joints/left-to-right-Tjoint.svg" class="w-full h-full block"/></div>
        <div class="absolute w-[10px] h-[19px]" style="top: -9px; right: -1px;"><img src="http://localhost:3000/joints/right-to-left-Tjoint.svg" class="w-full h-full block"/></div>
      </div>

      <div class="p-6 text-xs text-slate-700">Navigation</div>

      <!-- Horizontal Divider 2 -->
      <div class="relative w-full h-px bg-slate-300">
        <div class="absolute w-[10px] h-[19px]" style="top: -9px; left: -1px;"><img src="http://localhost:3000/joints/left-to-right-Tjoint.svg" class="w-full h-full block"/></div>
        <div class="absolute w-[10px] h-[19px]" style="top: -9px; right: -1px;"><img src="http://localhost:3000/joints/right-to-left-Tjoint.svg" class="w-full h-full block"/></div>
      </div>

      <div class="p-6 text-xs text-slate-700">Construction & Engineering Works</div>

      <!-- Horizontal Divider 3 -->
      <div class="relative w-full h-px bg-slate-300">
        <div class="absolute w-[10px] h-[19px]" style="top: -9px; left: -1px;"><img src="http://localhost:3000/joints/left-to-right-Tjoint.svg" class="w-full h-full block"/></div>
        <div class="absolute w-[10px] h-[19px]" style="top: -9px; right: -1px;"><img src="http://localhost:3000/joints/right-to-left-Tjoint.svg" class="w-full h-full block"/></div>
      </div>

      <div class="p-6 text-xs text-slate-700">Industrial Supply & Specialized Services</div>
    </div>
  </div>
</body>
</html>
`;

const htmlPath = path.join(artifactDir, 'scratch', 'verify_joints.html');
fs.writeFileSync(htmlPath, testHtml);

const outPng = path.join(artifactDir, 'scratch', 'verify_joints.png');
const cmd = `"${edgePath}" --headless --disable-gpu --screenshot="${outPng}" --window-size=1280,1000 "file://${htmlPath}"`;
try {
  execSync(cmd, { stdio: 'pipe', timeout: 15000 });
  console.log('Verification screenshot saved to:', outPng);
} catch (e) {
  console.error(e);
}
