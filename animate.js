function animate(obj,target,callback) {
    // 当我们不断地点击按钮，这个元素的速度会越来越快，因为开启太多定时器
    // 解决方案就是 让元素只有一个定时器执行：先清除之前的定时器 只保留当前的定时器
    clearInterval(obj.timer);
    // (目标值 - 现在的位置) / 10
    obj.timer = setInterval(function(){
        // 步长写到定时器里面，来重新计算每次的步长
        // 把步长值改为整数 不要出现小数
    // var step = Math.ceil((target - obj.offsetLeft) / 10);
    var step = (target - obj.offsetLeft) / 10;
    // 如果step是正数取大的，如果是负数取小的
    step = step > 0 ? Math.ceil(step) : Math.floor(step);
    if(obj.offsetLeft == target ){
        clearInterval(obj.timer);
        // 回调函数写到定时器结束里面
        if (callback) {//你有回调函数吗？如果有就调用
            // 调用函数
            callback();
        }
    }else {
        obj.style.left = obj.offsetLeft + step + 'px';
    }     
},15);
}