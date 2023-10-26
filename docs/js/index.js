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

function ImgMatchStyle(src,style)
{
  // 查找所有的 <img> 标签
  var imgTags = document.querySelectorAll('img');

  // 用特定值的 src 来添加样式
  imgTags.forEach(function(img) {
    if (img.getAttribute('src') === src) {
        img.style = style; // 以红色边框为例
        // 添加其他样式或属性，根据需要
    }
  });
}