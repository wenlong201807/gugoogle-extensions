// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   if (request.action === 'changeColor') {
//     document.body.style.backgroundColor = 'lightgreen';
//     sendResponse({ status: 'color changed' });
//   }
// });

// content.js

// 修改页面背景颜色
document.body.style.backgroundColor = 'lightblue';

// 修改特定元素的文本内容
const targetElement = document.getElementsByClassName('color_h1')[0];
if (targetElement) {
  targetElement.textContent = 'This text is modified by the Chrome extension!';
  targetElement.style.color = 'red';
}
