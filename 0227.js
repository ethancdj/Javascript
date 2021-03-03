//第一題 比較運算子
 /** 
let a = 4;
let b = 5;
console.log(a>0);      //true
console.log(b>a);      //true
console.log((a+b)>1);  //true


let c = 5;
let d = 6;
console.log(c == d);   //false
console.log(c !== d);  //true



let e = 8;
let f = 5;
console.log(f >= e);   //false
console.log(f != e);   //true
console.log(f == e);   //false
*/


/** 
//第二題
let g = 8;
let h = "8";
console.log(g*h == 88);   //false
console.log(g*h == 64);   //true
console.log(g*h === 64);  //true (包含型別) 數字*字串=數字 

let i = "9";
let j = "9";
console.log(i+j == 99);    //true
console.log(i+j === "99"); //true
console.log(i+j === 99);   //false

var k = 2;
var l = "5";
console.log((k*l)>=5);  //true
//k*l= 數字*字串=數字 所以10>=5



//第三題

let m = 1;
if(2>1){
    m=3
}
console.log(m);

let n = 5 ;
if(true){
    n+=10
}
console.log(n);




//第四題

let childHeight = 133;
let restaurantChildHeight = 120;
let bill = 600;
let childPrice = 300;
let childFree = 0;

if(childHeight > restaurantChildHeight)
{
        bill+=childPrice
        console.log(`他們總共支付了${bill}元`)
}else if(childHeight < restaurantChildHeight)
    {
       bill+=childFree
        console.log(`他們總共支付了${bill}元`)
    }
           

//第五題
let badge = 3;
let buyRight = 5; 
let buyWrong = 4;

if(buyWrong != buyRight ){
       badge+=1
       console.log(`小明總得到${badge}個徽章`)
}else if(buyWrong == buyRight){
    console.log(`小明總得到${badge}個徽章`)
}


//第六題

let o = 200;
let p = 300;
console.log(o == 200 || p == 300);    //true
console.log(o !== 200 || p !== 300);  //false
console.log(o == 200 && p == 300);    //true

//折扣條件判斷
let hamPrice = 50;
let hamNum = 20;
let  isSale = 3000 <= hamPrice*hamNum || hamNum >10;
console.log(isSale); //true
// &&＜--代表and 即條件必須都符合才會是true否則都是false  || <--代表or 即條件只要一項符合即代表true否則才是false
//故　3000 <= 50*20 || 20 > 10等於true


//第七題
let weight = 90;

if(weight >= 40 && weight<= 60){
    console.log(`體重過輕`)
}
else if(weight >= 60 && weight<= 80){
    console.log(`體重正常`)
}else if(weight > 80 ){
    console.log(`體重過重`)
}
 
//第八題
let giftNum = 200; //數量贈品
let giftPricerule = 399; //贈品消費門檻
let BobPrice = 500; //Bob消費金額
let BobIsVip = false; //Bob是否為ＶＩＰ

if(BobPrice >= giftPricerule || BobIsVip){
      console.log("客戶您好，您有符合贈品資格");
}else{
    console.log("很抱歉，您沒有符合贈品資格");
}

if(giftPricerule || BobIsVip){
    giftNum-=1
    console.log(`贈品還剩下${giftNum}個`)
}


//第九題

let mingMoney = 400000; //全年所得
let mingBill  = 5000;　 //基本費
let taxNum01 = 0.3; //54萬以下稅收
let taxNum02 = 0.5; //54萬~100萬稅收
let taxNum03 = 0.8; //100萬以上稅收
let taxtotal = 0;
if(mingMoney < 540000){
        taxTotal= mingMoney*taxNum01+mingBill
        console.log(`小明應該繳${taxTotal}的稅`)
}else if(mingMoney >= 540000 && mingMoney <= 1000000){
    taxTotal= mingMoney*taxqu/6g.3Num02+mingBill
    console.log(`小明應該繳${taxTotal}的稅`)
}else if(mingMoney >= 1000000){
    taxTotal= mingMoney*taxNum03+mingBill
    console.log(`小明應該繳${taxTotal}的稅`)
}


//第十題  
let playerA = "剪刀";
let playerB = "剪刀";

if(playerA == "剪刀"　&&　playerB == "剪刀"){
　　　　console.log("平手");
}
else if(playerA == "剪刀"){
    if(playerB == "布"){
        console.log("Ａ玩家贏");
    }else if(playerB == "石頭"){
　　　　  console.log("B玩家贏");
    }
}
else if(plAyerA == "石頭"){
　　　if(playerB　== "剪刀"){
　　　　　console.log(A玩家贏)
}else if(playerB == "布"){
    　　　　　console.log(B玩家贏)
}else if(playerB == "石頭"){
    console.log("平手");
}
}else if(playerA == "布"){
    if(playerB == "石頭"){
        console.log(A玩家贏)
    }else if (playerB == "剪刀"){
        console.log(B玩家贏)
    }else if(playerB == "布"){
        console.log("平手");
    }
}
*/

//流程圖https://whimsical.com/ApXdxKz1Sp8Wc6uHqNQCgw


//自訂題
//小明的年終考績
/** 
100    優  四個月
80~99  甲  三個月
70~80  乙  兩個月
60~70  丙  一個月
50~60  丁  延長試用期
50以下 戊  沒有通過試用期


 
let  performanceScores = 87;
if(performanceScores < 50){
    console.log(`你年終分數為${performanceScores}分，考績為戊，沒有通過試用期`)
}else if(performanceScores >= 50 && performanceScores <= 60){
        console.log(`你年終分數為${performanceScores}分，考績為丁，延長試用期`)
}else if(performanceScores >= 60 && performanceScores <= 70){
        console.log(`你年終分數為${performanceScores}分，考績為丙，年終一個月`)
}else if(performanceScores >= 70 && performanceScores <= 80){
        console.log(`你年終分數為${performanceScores}分，考績為乙，年終二個月`)

}else if(performanceScores >= 80 && performanceScores <= 99){
        console.log(`你年終分數為${performanceScores}分，考績為甲，年終三個月`)
}else if(performanceScores == 100){ 
        console.log(`你年終分數為${performanceScores}分，你太棒了，考績為優，年終四個月`)
}

*/


//for 迴圈練習範例
let farms = [
    {
      origin: '台北',
      years:2020,
      guava: 200,
      pineapple: 5000
    },
    {
      Origin: '台中',
      years: 2020,
      Guava: 50,
      pineapple: 1000
    },
    {
      Origin: '高雄',
      years: 2021,
      Guava: 120,
      pineapple: 3215
    }
    ]
    // 計算今年的鳳梨採收總數
    let farmsTotal = farms.length;
    let thisYearPineappleGoal = 0;

    //鳳梨總數是 0 , 因為還不知道農田所有的鳳梨數量是多少,而我們預期會得到一組數字所以先宣告一個為 0 的初始值。
    for (let i = 0; i < farmsTotal; i++) {
        if(frames.years == 2020){
            thisYearPineappleGoal += farms[i].pineapple;
            console.log('2020年的鳳梨總採收量是：' + thisYearPineappleGoal);
        }        
          }
    console.log('今年的鳳梨總採收量是：' + thisYearPineappleGoal);
    





