window.addEventListener('load', function () {
    const xhr = new XMLHttpRequest();
    var url = 'http://localhost:8080/'
    var ul = document.querySelector('.banner ul');
    let cid = sessionStorage.getItem('cid');
    let title = sessionStorage.getItem('title');
    xhr.open('get', url + 'SelAllBook?cid=' + cid + '&title='+title);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                console.log(cid);
                const resp = JSON.parse(xhr.responseText);
                console.log(resp);
                let a, item;
                for (let i = 0; i < resp.length; i++) {
                    a = ` <li>
                    <a href="borrowing.html">
                        <img src="${resp[i].cover}" alt="">
                        <h3 class="title">${resp[i].title}</h3>
                        <p class="details">${resp[i].abs}</p>
                        <p class="author">${resp[i].author}</p>
                    </a>
                </li>`
                    if (i == 0) {
                        item = a;
                    }
                    if (i > 0) {
                        item += a;
                    }
                }
                ul.innerHTML = item + `<li>
                    <a href="javascript:;">
                        <img src="../Images/addbook.jpg" alt="">
                        <form action="../AddBook" method="get">
                            <input type="text" name="id" class="ipt" placeholder="增加的书本已给您备好，只需输入id号"></br>
                            <input type="submit" value="新 增" class="btn">
                         </form>
                    </a>
                </li>`;
                let lis = document.querySelectorAll('.banner ul li');
                for (let i = 0; i < resp.length; i++) {
                    lis[i].addEventListener('click', function () {
                        sessionStorage.setItem('id', resp[i].id);
                    })
                }
            }
        }
    }
})