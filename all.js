function showThankYou() {
    // 隱藏評分部分
    document.querySelector('.main').style.display = 'none';
    // 顯示感謝頁面
    document.querySelector('#thankYouSection').style.display = 'block';
}

const nums = document.querySelectorAll(".num");
const message = document.querySelector(".message");

nums.forEach(function(item){
    item.addEventListener("click", function(e){
        // console.log(e.target.textContent);
        message.textContent = `You selected ${e.target.textContent} out of 5`;
	    item.style.background = "hsl(217, 12%, 63%)";
        item.style.color = "white";
        // console.log(item.style);
    });
});



