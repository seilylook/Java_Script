console.log("Hello world");
var healthObj = {
    name: "달리기",
    lastTime : "PM 10 : 30", 
    showHealth() {
        console.log(this.name + "님, 오늘은 " + this.lastTime + "에 운동을 하였습니다.")
    }
}
healthObj.showHealth();