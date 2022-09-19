// main.js
window.addEventListener('load',()=>{
//top버튼
const btnTop = document.querySelector('a.btn_top');

window.addEventListener('scroll',()=>{
    let scroll= document.querySelector('html').scrollTop;
    console.log(scroll);
    if(scroll<=0){
        btnTop.classList.remove("on","ab");
    }else if(scroll>3200){
        btnTop.classList.remove("ab");
        btnTop.classList.add("on");
    }else{
        btnTop.classList.add("ab");
        btnTop.classList.add("on");
    }
});

btnTop.addEventListener('click',e=>{
    window.scroll({
        top:0,
        left:0,
        behavior:'smooth'
    });
});

/*주메뉴 */
const gnbMenu = document.querySelectorAll('gnb>ul>li');
const headerWrap = docuent.querySelector(".header_wrap");

for(var i=0; i<gnbMenu.length;i++){
    gnbMenu[i].addEventListener('mouseover',(e) =>{
        e.currentTarget.classList.add('on');
        var ht = e.currentTarget.children[1].offsetHeight;
        headerWrap.style.height = 70 + ht + 'px';
    });
    gnbMenu[i].addEventListener('mouseout',(e) =>{
        e.currentTarget.classList.remove("on");
        headerWrap.style.height = '70px';

    });

    gnbMenu[i].children[0].addEventListener('focus',(e)=>{//li>a
    e.currentTarget.parentElement.classList.add('on');
var ht = e.currentTarget.nextElementSibling.offsetHeight;//li>div
headerWrap.style.height = 70 + ht + 'px';
});
gnbMenu[i].children[0].addEventListener('blur',(e)=>{
    e.currentTarget.parentElement.classList.remove('on');
    headerWrap.style.height = '70px';
});
}

//검색박스
const srch_wrap = document.querySelector(".srch_wrap");
const btn_srch = document.querySelector(".btn_srch");
const btn_srch_close = document.querySelector(".btn_srch_close");


btn_srch.addEventListener("click", e=>{
    e.preventDefault();
    srch_wrap.classList.add("on");
});

btn_srch_close.addEventListener("click", e=>{
    e.preventDefault();
    srch_wrap.classList.remove("on");
});

/* 오토배너 */
const btnNext = document.querySelector('.btn_next');
const btnPrev = document.querySelector('a.btn_prev');
const slide = document.querySelectorAll('li.slide');//0,1,2
const slideRoll = document.querySelectorAll('slide_roll li');
const btnPlay = document.querySelector('.btn_play');

let bnnNum=0;
let lastNum = document.querySelectorAll('.slide_wrap>li').length-1;//2

//next버튼
btnNext.addEventListener('click',e=>{
    bnnNum++;
    if(bnnNum>lastNum){bnnNum=0;}
    slide.forEach(item=>{
        item.classList.remove('active');
    });
    slide[bnnNum].classList.add('active');

    slideRoll.forEach(idx=>{
        idx.classList.remove('on');
    });
    slideRoll[bnnNum].classList.add('on');
});

//prev버튼
btnPrev.addEventListener("click", function(){
    bnnIdx--;
    if(bnnIdx < 0){bnnIdx = lastIdx;}
    slide.forEach(item =>{
        item.classList.remove("active");
    });
    slide[bnnIdx].classList.add("active");

    slideRoll.forEach(idx =>{
        idx.classList.remove("on");
    });
    slideRoll.forEach(idx =>{
        idx.classList.add("on");
    });
});

//오토배너
function autoBanner(){
    //next버튼 눌렀을때
    bnnNum++;
    if(bnnNum>lastNum) bnnNum=0;

    activation(bnnNum,slide);
    activation(bnnNum,slideRoll);
    autoBnn = setTimeout(autoBanner,5000);//재귀함수
}
let autoBnn = setTimeout(autoBanner,5000);//최초호출


//배너 재생 멈춤 버튼
let flag = true;
btnPlay.addEventListener('click', () => {
    if(flag){//멈춤
        btnPlay.classList.add('on');
        clearInterval(autoBnn);
        flag = false;
    }else{//재생
        btnPlay.classList.remove('on');
        setInterval(autoBanner,5000);
        flag = true;
    }
})
//롤링버튼클릭
for(let i=0; i<slideRoll.length;i++){
    slideRoll[i].addEventListener('click',e=>{
e.preventDefault();
activation(i,slide);
activation(i,slideRoll);
    });
};
});




