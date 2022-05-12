window.addEventListener('load', function() {
    var tb_promo = document.querySelector('.tb-promo');

        var prev = tb_promo.querySelector('.prev');
        var right = tb_promo.querySelector('.right');
        var ul = tb_promo.querySelector('ul');
        var ol = tb_promo.querySelector('ol');
        var tb_promoWidth = tb_promo.offsetWidth;
        // 记录图片位置
        var num = 0;
        // 记录圆点位置
        var circle = 0;
        for (let i = 0; i < ul.children.length; i++) {
            // 根据图片的数量添加li（圆点）元素进入ol里
            var li = document.createElement('li');
            // 用index记录下每个li元素的索引号
            li.setAttribute('index', i);
            // 将li元素加进ol
            ol.appendChild(li);
            // 利用排他思想对轮播图进行图片与圆点对应
            li.addEventListener('click', function () {
                for (var j = 0; j < ol.children.length; j++) {
                    ol.children[j].className = '';
                }
                this.className = 'selected';
                var index = this.getAttribute('index');
                num = index;
                circle = index;
                animate(ul, -index * tb_promoWidth);

            })
        }
        // 第一个圆点赋予选中颜色
        ol.children[0].className = 'selected';
        // 克隆第一张图片 实现真正的无缝滚动
        var first = ul.children[0].cloneNode(true);
        ul.appendChild(first);
        // 右键点击跳转事件
        right.addEventListener('click', function () {
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * tb_promoWidth);
            circle++;
            if (circle == ol.children.length) {
                circle = 0;
            }
            circleMove();
        });
        // 左键点击跳转事件
        prev.addEventListener('click', function () {
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * tb_promoWidth + 'px';

            }
            num--;
            animate(ul, -num * tb_promoWidth);
            circle--;
            // if (circle < 0) {
            //     circle = ol.children.length - 1;
            // }
            circle = circle < 0 ? ol.children.length - 1 : circle;
            circleMove();
        });

        // 圆点移动
        function circleMove() {
            for (let i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            ol.children[circle].className = 'selected';
        }

        // // 自动播放图片

        var timer = setInterval(function () {
            right.click();
        }, 2000);


        // 鼠标进入，左右标显示
        tb_promo.addEventListener('mouseenter', function () {
            prev.style.display = 'block';
            right.style.display = 'block';
            clearInterval(timer);
            timer = null;
        });
        // 鼠标离开，左右标隐藏
        tb_promo.addEventListener('mouseleave', function () {
            prev.style.display = 'none';
            right.style.display = 'none';
            timer = setInterval(function () {
                right.click();
            }, 2000);
        });
})