/** 
//第一階段練習 開始

function printBmi(height,weight){
  //let height = 178; //身高
  //let weight = 130; //體重
  let bmi = (weight / ((height /100) * (height /100))).toFixed(2); //BMI
  
  //console.log(bmi);
  
  if (bmi < 18.5) {
      console.log(`體重過輕`);
      }else if (18.5 <= bmi && bmi < 24) {
          console.log(`體重正常`);
      }else if (24 < bmi && bmi < 27) {
          console.log(`體重偏重`);
      }else if (27 < bmi && bmi < 30) {
          console.log(`輕度肥胖`);
      }else if (30 < bmi && bmi < 35) {
          console.log(`中度肥胖`);
      }else if (35 < bmi) {
          console.log(`重度肥胖`);
      }else{
          console.log(`您輸入的數字錯誤`);
          }
  }
  
  printBmi(178,50);
  //>> 印出 console.log 文字為「您的體重過輕」
  printBmi(178, 70);
  //>> 印出 console.log 文字為「您的體重正常」
  printBmi(178, 85);
  //>> 印出 console.log 文字為「您的體重過重」
  printBmi(178, 90);
  //>> 印出 console.log 文字為「您的體重輕度肥胖」
  printBmi(178, 110);
  //>> 印出 console.log 文字為「您的體重中度肥胖」
  printBmi(178, 130);
  //>> 印出 console.log 文字為「您的體重重度肥胖」
  printBmi("身高","體重");
  //>> 印出 console.log 文字為「您的數值輸入錯誤，請重新輸入」
  
  //第一階段練習 結束
  
  //=================================


//第二階段練習 開始
function printBmi(height,weight){
//let height = 178; //身高
//let weight = 130; //體重
let bmi = (weight / ((height /100) * (height /100))).toFixed(2); //BMI
//console.log(bmi);

const bmiStatesData = {
    "overThin": {
      "state": "過輕",
      "color": "藍色"
    },
    "normal": {
      "state": "正常",
      "color": "紅色"
    },
    "overWeight": {
      "state": "過重",
      "color": "澄色"
    },
    "mildFat": {
      "state": "輕度肥胖",
      "color": "黃色"
    },
    "moderateFat": {
      "state": "中度肥胖",
      "color": "黑色"
    },
    "severeFat": {
      "state": "重度肥胖",
      "color": "綠色"
    },
}


function bmiStateText(state){
    console.log(state);
    console.log(bmiStatesData[state].state);
    console.log(bmiStatesData[state].color);
  console.log(`您的體重${bmiStatesData[state].state}，健康指數為${bmiStatesData[state].color}`);

}

     

if (bmi < 18.5) {
    //overThin
    bmiStateText("overThin");
      }else if (18.5 <= bmi && bmi < 24) {
        //normal
        bmiStateText("normal");
    }else if (24 < bmi && bmi < 27) {
        //overWeight
        bmiStateText("overWeight");
    }else if (27 < bmi && bmi < 30) {
        //mildFat
        bmiStateText("mildFat");
    }else if (30 < bmi && bmi < 35) {
        //moderateFat
        bmiStateText("moderateFat");
    }else if (35 < bmi) {
        //severeFat
        bmiStateText("severeFat");
    }else{
        console.log(`您的數值輸入錯誤，請重新輸入`);
        }

}
printBmi(178, 20) 
//>> 印出 console.log 文字為「您的體重過輕，健康指數為藍色」
printBmi(178, 70) 
//>> 印出 console.log 文字為「您的體重正常，健康指數為紅色」
printBmi(178, 85)
//>> 印出 console.log 文字為「您的體重過重，健康指數為澄色」
printBmi(178, 90)
//>> 印出 console.log 文字為「您的體重輕度肥胖，健康指數為黃色」
printBmi(178, 110)
//>> 印出 console.log 文字為「您的體重中度肥胖，健康指數為黑色」
printBmi(178, 130)
//>> 印出 console.log 文字為「您的體重重度肥胖，健康指數為綠色」
printBmi("身高","體重")
//>> 印出 console.log 文字為「您的數值輸入錯誤，請重新輸入」

//第二階段結束

//====================================================
*/


// 第三階段測試  

let bmiHistoryData =[];

const bmiStatesData = {
  "overThin": {
    "state": "過輕",
    "color": "藍色"
  },
  "normal": {
    "state": "正常",
    "color": "紅色"
  },
  "overWeight": {
    "state": "過重",
    "color": "澄色"
  },
  "mildFat": {
    "state": "輕度肥胖",
    "color": "黃色"
  },
  "moderateFat": {
    "state": "中度肥胖",
    "color": "黑色"
  },
  "severeFat": {
    "state": "重度肥胖",
    "color": "綠色"
  },
}

function bmiStateText(state){

    console.log(`您的體重${bmiStatesData[state].state}，健康指數為${bmiStatesData[state].color}`);
  }

function addData(bmi,state){
 // console.log(bmi,state);
 let obj = {};
 obj.bmi = bmi;
 obj.state = "state";
 bmiHistoryData.push(obj);
}

function printBmi(height,weight){
  //let height =  178;
  //let weight =  110;
  let  bmi = (weight / ((height/100) * (height/100))).toFixed(2);
  if (bmi <18.5) {
       bmiStateText("overThin");
       addData(bmi,"overThin");
         

    }else if (18.5 <=bmi && bmi <24 ) {
    bmiStateText("normal");
    addData(bmi,"normal");

  }else if (24 <=bmi && bmi <27 ) {
    bmiStateText("overWeight");
    addData(bmi,"overWeight");

  }else if (27 <=bmi && bmi <30) {
    bmiStateText("mildFat");
  }else if (30 <=bmi && bmi <35) {
    bmiStateText("moderateFat");
  }else if (bmi >35) {
    bmiStateText("severeFat");
  }else{
    console.log(`您的數值輸入錯誤，請重新輸入`);
  }
  
}

function showHistoryData(){
  console.log(`您總共計算 ${bmiHistoryData.length}次 BMI 紀錄，最後一次 BMI 指數為 ${bmiHistoryData[bmiHistoryData.length-1].bmi}，
  體重${bmiStatesData[bmiHistoryData[bmiHistoryData.length - 1].state].state}
  ！健康指數為${bmiStatesData[bmiHistoryData[bmiHistoryData.length - 1].state].color}！`);   

}
  
//console.log(bmiStatesData["overWeight"].state);
//console.log(bmiStatesData["overWeight"].color);

//input
printBmi(178, 20) ;
printBmi(178, 70) ;
printBmi(178, 85);
showHistoryData()

