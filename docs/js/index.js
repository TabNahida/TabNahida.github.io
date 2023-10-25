function WgetMarkDown(Path,ElementId) 
{
    fetch(Path)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        // 在 fetch 成功后再进行 Markdown 解析
        document.getElementById(ElementId).innerHTML = marked.parse(data);
        console.log(data);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
}