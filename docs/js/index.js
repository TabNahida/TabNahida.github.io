function AboutREADME()
{
    path = 'https://raw.githubusercontent.com/TabNahida/TabNahida/main/README.md';
    readme = fetch(path)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text(); // 或 response.json()，根据响应内容类型选择
  })
  .then(data => {
    console.log(data); // 在这里处理获取的数据
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
    document.getElementById('About-MD').innerHTML =
    marked.parse(readme);
}