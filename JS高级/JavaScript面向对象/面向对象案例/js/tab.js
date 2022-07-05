var that;
class Tab {
    constructor(id) {
        that = this;
        this.main = document.querySelector(id);
        this.add = this.main.querySelector('.tabadd');
        // li的父元素
        this.ul = this.main.querySelector('.firstnav ul:first-child');
        // section 的父元素
        this.fsection = this.main.querySelector('.tabscon');
        this.init();
    }
    init() {
        this.updateNode();
        // init初始化操作让让相关的元素绑定事件
        this.add.onclick = this.addTab;
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;
            this.remove[i].onclick = this.removeTab;
            // 双击事件
            this.spans[i].ondblclick = this.editTab;
            this.sections[i].ondblclick = this.editTab;
        }
    }
    // 获取所有的 li 和 section remove
    updateNode() {
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
        this.remove = this.main.querySelectorAll('.icon-guanbi');
        this.spans = this.main.querySelectorAll('.firstnav li span:first-child');
    }
    // 1.切换功能
    toggleTab() {
        // console.log(this.index);
        that.clearClass();
        this.className = 'liactive';
        that.sections[this.index].className = 'conactive';
    }
    clearClass() {
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].className = '';
            this.sections[i].className = '';
        }
    }
    // 2.添加功能
    addTab() {
        that.clearClass();
        // 1.创建li元素
        var li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>';
        var section = '<section class="conactive">测试1</section>';
        // 2.加到相应的父元素里面
        that.ul.insertAdjacentHTML('beforeend', li);
        that.fsection.insertAdjacentHTML('beforeend', section);
        that.init();
    }
    // 3.删除功能
    removeTab(e) { 
        // 阻止冒泡 防止触发li的点击事件
        e.stopPropagation();
        var index = this.parentNode.index;
        // 根据索引号删除对应的 li 和 section   remove方法可以直接删除指定元素
        that. lis[index].remove();
        that.sections[index].remove();
        that.init();
        // 当我们删除的不是选中状态这个li的时候，原来的选中状态不变
        if(document.querySelector('.liactive')) return;
        // 当我们删除了选中状态的这个li的时候，让它的前一个li处于选定状态
        index--;
        // 前面为真，则执行后面的 为假则不执行 来筛选当index为-1的时候，因为index没有-1这个索引
        that.lis[index] && that.lis[index].click();
    }
    // 4.修改功能
    editTab() { 
        var str = this.innerHTML;
        // 禁止双击选中文字
        window.getSelection?window.getSelection().removeAllRanges():document.getSelection.empty();
        this.innerHTML = '<input type="text" />';
        var input = this.children[0];
        input.value = str;
        // 让文本框内文字处于选定状态
        input.select();
        // 当离开文本框就把文本框内的值给span
        input.onblur = function() {
            this.parentNode.innerHTML = this.value;
        }
        input.onkeyup = function(e) {
            if(e.keycode === 13) {
                // 手动调用表单失去焦点事件 不需要鼠标离开操作
                this.blur();
            }
        }
    }
}
new Tab('#tab');