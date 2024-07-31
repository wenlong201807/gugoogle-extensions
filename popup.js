// popup.js

document
  .getElementById('changeColorButton')
  .addEventListener('click', async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    console.log(999, tab);

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: setaaa,
    });

    // await chrome.tabs.sendMessage(tabs[0].id, { action: 'changeColor' });

    // chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    //   console.log(tabs);
    //   chrome.tabs.sendMessage(tabs[0].id, { action: 'changeColor' });
    // });
  });

function setaaa() {
  const a = document.getElementsByClassName('color_h1')[0];
  console.log(a);
  a.textContent = 'asdfa';
}
