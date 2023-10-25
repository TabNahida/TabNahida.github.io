function AboutREADME()
function AboutREADME() {
    path = 'https://raw.githubusercontent.com/TabNahida/TabNahida/main/README.md';
    fetch(path)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        // 在 fetch 成功后再进行 Markdown 解析
        document.getElementById('About-MD').innerHTML = marked(data);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }
  