function clock(){
    let hour = document.querySelector('.hour');
    let minute =document.querySelector('.minute');
    let seconds= document.querySelector('.seconds');
    const H = new Date().getHours();
    const M = new Date().getMinutes();
    const S = new Date().getSeconds();
    hour.innerHTML=H;
    minute.innerHTML=M;
    seconds.innerHTML=S;
}
setInterval(clock,1000);