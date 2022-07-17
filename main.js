var sza=0;
var szb=0;
var szc=0;
var szd=0;
var sz=0;
var wsza=0;
var wszb=0;
var wszc=0;
var wszd=0;
var wsz=0;
var wszat=0;
var wszbt=0;
var wszct=0;
var wszdt=0;
var wszt=0;
var zqwz=0;
var zqsz=0;
var cccs=0;


document.getElementById("bt2").style.display="none";

function sj1(){

    do {
        sza=Math.floor(Math.random()*10);
    } while (sza==0);
    do {
        szb=Math.floor(Math.random()*10);
    } while (sza==szb);
    do {
        szc=Math.floor(Math.random()*10);
    } while (sza==szc||szb==szc);
    do {
        szd=Math.floor(Math.random()*10);
    } while (sza==szd||szb==szd||szc==szd);
    

    document.getElementById("bt1").style.display="none";
    document.getElementById("bt2").style.display="block";
    //document.getElementById("tsz").innerHTML=sza+''+szb+''+szc+''+szd;
    cccs=0;
}

function sj2(){
    wszt=prompt("输入一个四位数","数字");
    if(1000<=wszt&&wszt<10000){
        wszat=Math.floor(wszt/1000);
        wszbt=Math.floor((wszt-wszat*1000)/100);
        wszct=Math.floor((wszt-wszat*1000-wszbt*100)/10);
        wszdt=wszt-wszat*1000-wszbt*100-wszct*10;
        if(wszat==wszbt||wszat==wszct||wszat==wszdt||wszbt==wszct||wszbt==wszdt||wszct==wszdt){
            alert("四个数字不能重复！");
        }
        else{
            wsz=wszt;
            wsza=wszat;
            wszb=wszbt;
            wszc=wszct;
            wszd=wszdt;
        }
    }
    else{
        alert("请输入四位数字！");
    }
    document.getElementById("wtsz").innerHTML='你猜测的数字:'+wsz;
    zqsz=0;
    zqwz=0;
    if(wsza==sza){
        zqwz=zqwz+1;
    }
    if(wszb==szb){
        zqwz=zqwz+1;
    }
    if(wszc==szc){
        zqwz=zqwz+1;
    }
    if(wszd==szd){
        zqwz=zqwz+1;
    }
    document.getElementById("ts1").innerHTML='有'+zqwz+'个数字正确且在正确的位置上';
    if(wsza==sza||wsza==szb||wsza==szc||wsza==szd){
        zqsz=zqsz+1;
    }
    if(wszb==sza||wszb==szb||wszb==szc||wszb==szd){
        zqsz=zqsz+1;
    }
    if(wszc==sza||wszc==szb||wszc==szc||wszc==szd){
        zqsz=zqsz+1;
    }
    if(wszd==sza||wszd==szb||wszd==szc||wszd==szd){
        zqsz=zqsz+1;
    }
    document.getElementById("ts2").innerHTML='有'+zqsz+'个数字正确';
    cccs=cccs+1;
    if(wsza==sza&&wszb==szb&&wszc==szc&&wszd==szd){
        alert("你猜对了！\n你一共猜了"+cccs+'次');
        document.getElementById("bt2").style.display="none";
        document.getElementById("bt1").style.display="block";

    }
}
