class Tab {
    constructor(id) {
        this.main =document.querySelector(id);
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section'); 
        this.init();
    }
    init(){
        // init初始化操作让让相关的元素绑定事件
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;
        }
    }
    // 1.切换功能
    toggleTab(){
        console.log(this.index);
        this.className = ' liactive';
        this.sections[this.index].className = 'conactive';
        
    }
    // 2.添加功能
    addTab(){}
    // 3.删除功能
    removeTab(){}
    // 4.修改功能
    editTab(){}
}
new Tab('#tab');