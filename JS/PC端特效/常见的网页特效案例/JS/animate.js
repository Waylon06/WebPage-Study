function animate(obj, target, callback) {
    // 先清除以前的定时器，保留一个定时器才不会出现设置点击事件后连点的加速情况
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        // Math.ceil往大的取整  
        // var step = Math.ceil((target - obj.offsetLeft) / 10);
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            if(callback) {
                callback();
            }
        }
        // 把每次加一 这个步长值改为一个慢慢变小的值     步长公式（目标值 - 现在的位置）/ 10
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15)
}