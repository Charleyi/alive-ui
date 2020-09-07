<template>
    <div id="app">
        <alive-icon type="success"></alive-icon>
        <alive-line></alive-line>
        <alive-icon type="like-fill" color="#ff4242" size="30px"></alive-icon>
        <alive-line></alive-line>
        <div class="wisdom-icon"></div>
        <alive-line></alive-line>
        <div class="wisdom-drag" v-drag>
            <img class="wisdom-drag-echart" src="./assets/echart_002.png" alt="">
        </div>
    </div>
</template>

<script>


export default {
    name: 'App',
    directives: {
        drag(el) {
            let dragBox = el; //获取当前元素
                dragBox.onmousedown = (e) => {
                    //算出鼠标相对元素的位置
                    let disX = e.clientX - dragBox.offsetLeft;
                    let disY = e.clientY - dragBox.offsetTop;
                    document.onmousemove = (e) => {
                        //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
                        let left = e.clientX - disX;
                        let top = e.clientY - disY;
                        //移动当前元素
                        dragBox.style.left = left + "px";
                        dragBox.style.top = top + "px";
                    };
                    document.onmouseup = () => {
                        //鼠标弹起来的时候不再移动
                        document.onmousemove = null;
                        //预防鼠标弹起来后还会循环（即预防鼠标放上去的时候还会移动）  
                        document.onmouseup = null;
                    };
                };
            }
        }
    }
</script>

<style>
body{
    margin:0;padding:0;
}
.wisdom-icon{
    width:20px;
    height:20px;
    background-image:url('./assets/close_002.png');
    background-size:100%;
    cursor:pointer;
}
.wisdom-icon:hover{
     background-image:url('./assets/close_001.png');
}

.wisdom-drag{
    position:fixed;
    top:20px;
    left:20px;
    width:360px;
    height:210px;
    background-color:rgba(162, 188, 234,.5);
}
.wisdom-drag-echart{
    width:100%;
    height:100%;
    pointer-events:none;
}
</style>
