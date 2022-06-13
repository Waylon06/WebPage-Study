window.addEventListener('load', function () {
    var xhr = new XMLHttpRequest();
    var url = 'http://localhost:8080/'
    var id = sessionStorage.getItem('id');
    var info = document.querySelector('.banner .w');
    xhr.open('get', url + 'SelABook?id=' + id);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                const resp = JSON.parse(xhr.responseText);
                info.innerHTML = `  <div class="book-img">
                <div class="info"></div>
                <img src="${resp.cover}" alt="">
            </div>
            <div class="book-info">
                <h2 class="title">《${resp.title}》</h2>
                <p class="details">${resp.abs}</p>
                <p class="author">作者：<span>${resp.author}</span></p>
                <div class="line"></div>
                <div class="address">
                    <div class="address-info">
                        <i></i>
                        <span>四川</span>
                        <span>绵阳市</span>
                        <span>安州区</span>
                        <span>绵阳城市学院图书馆</span>
                    </div>
                    <a href="javascript:;">有库存</a>
                </div>
                <div class="time">
                    <div class="title">借用时长</div>
                    <input type="text" placeholder="请输入借用时长">
                </div>
                <button class="borrow">借 阅</button>
                <button class="delete">删 除</button>
                 <div class="time" style="margin-top: 5px">
                    <div class="title">修改书名</div>
                     <input type="text" placeholder="请填写修改后的书名" class="ipt">
                </div>
                <button class="change">修 改</button>
                <div class="line"></div>
            </div>`
                let del = document.querySelector('.delete');
                let borrow = document.querySelector('.borrow');
                let change = document.querySelector('.change');
                let ipt = document.querySelector('.ipt');
                del.addEventListener('click', function () {
                    xhr.open('get',url +'DelBook?id='+id);
                    xhr.send();
                    xhr.onreadystatechange = function () {
                        if (xhr.readyState === 4) {
                            if (xhr.status >= 200 && xhr.status < 300) {
                                alert('删除成功');
                                window.location.href="../index.html"
                            }
                        }
                    }
                });
                borrow.addEventListener('click', function () {
                    alert('借阅成功');
                });
                change.addEventListener('click', function () {
                    let title = ipt.value;
                    xhr.open('get', 'http://localhost:8080/UpdBook?id='+id+'&title='+title);
                    xhr.send();
                    xhr.onreadystatechange = function () {
                        alert('修改成功');
                        window.location.href = '../index.html';
                    }
                });
            }
        }
    }
})