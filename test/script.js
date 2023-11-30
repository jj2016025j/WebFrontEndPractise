function updateStyle() {
    analyser.getByteFrequencyData(data);
    let volume = data.reduce((a, b) => a + b) / data.length;

    const element = document.querySelector('.your-element');

    // 根據音量調整透明度，透明度範圍更大
    element.style.opacity = Math.min(volume / 50, 1); // 確保透明度不超過1

    // 根據音量調整元素大小
    const scale = Math.max(volume / 100, 1); // 確保最小為原始大小
    element.style.transform = `scale(${scale})`;
}

setInterval(updateStyle, 100);

const audioContext = new AudioContext();
const audioElement = document.querySelector('audio');
const track = audioContext.createMediaElementSource(audioElement);
track.connect(audioContext.destination);
const analyser = audioContext.createAnalyser();
track.connect(analyser);
const data = new Uint8Array(analyser.frequencyBinCount);
analyser.getByteFrequencyData(data);
function updateStyle() {
    analyser.getByteFrequencyData(data);
    let volume = data.reduce((a, b) => a + b) / data.length;

    const element = document.querySelector('.your-element');

    // 根據音量調整透明度
    element.style.opacity = Math.min(volume / 50, 1);

    // 根據音量調整元素大小
    const scale = Math.max(volume / 100, 1);
    element.style.transform = `scale(${scale})`;

    // 添加邊框效果，音量越大，邊框越明顯
    const borderWidth = Math.min(volume / 10, 5); // 限制最大邊框寬度
    element.style.border = `${borderWidth}px solid rgba(255, 255, 255, 0.5)`; // 紅色半透明邊框

    // 添加陰影效果，隨音量變化
    const shadowSize = Math.min(volume / 5, 10); // 限制最大陰影大小
    element.style.boxShadow = `0 0 ${shadowSize}px rgba(255, 255, 255, 0.5)`; // 黑色半透明陰影
}

setInterval(updateStyle, 100);
