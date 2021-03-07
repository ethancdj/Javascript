/**
//第一題
let obj = {
    myName: "Tom",
    age : 18,
    pets : ["John","Mike"],
    isWakeUp : "false"
}
console.log(obj);


//第二題
let colors = ["red","black","yellow"];
colors.push("black");
console.log(colors.length);


//第三題
let motherStatus = [
     {
         name: "mary",
         age: 31,
         sons: ["Tom","Bob"]
     }
   ]
   motherStatus[0].age+=1;
   motherStatus[0].sons.push("John");
   console.log(motherStatus);


//第四題


//第五題
let homePictures = {
   motherName: "Jane",
   fatherName: "Bill",
   daughter: "Rosa",
   son: "Howard",
   dogs: [],
}
homePictures.dogs.unshift("Bobo","Koko");
console.log(homePictures);


//第六題
 let houseObj1 = {
    price: "2億8千萬",
    numberofPings: "900坪",
    swimmingPool: "無",
    basement: "有",
    buildingNumber: "5",
    Bathroom: "3",
    housekeeper: "無",
    Sell: "有",
    numberOfHouseholds: 1,
    projectName: "六角大別墅",
    location: "高雄市"
 }

 let houseObj2 = {
    price: "3億2千萬",
    numberofPings: "1200坪",
    swimmingPool: "有",
    basement: "有",
    buildingNumber: "7",
    Bathroom: "4",
    housekeeper: "有",
    Sell: "無",
    numberOfHouseholds: 1,
    projectName: "六角大別墅",
    location: "高雄市"

 }

 console.log(
     houseObj1,houseObj2,
     `此建案名稱為${houseObj1.projectName}，地點在${houseObj2.location}此建案目前只有${houseObj1.numberOfHouseholds+houseObj2.numberOfHouseholds}戶`
 )


 //第七題

 let roomDetail = {
    "success": true,
    "items": [
      {
        "id": "3Elqe8kfMxdZv5xFLV4OUeN6jhmxIvQSTyj4eTgIowfIRvF4rerA2Nuegzc2Rgwu",
        "imageUrl": "https:\/\/images.unsplash.com\/photo-1551776235-dde6d482980b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
        "normalDayPrice": 1380,
        "holidayPrice": 1500,
        "name": "Single Room"
      },
      {
        "id": "g0mYhN6ignMz4VYW7eiWsXZN8DHolHzH8LuVmM6hq5h6BrrqrLMw4aJgHv7LZ3RQ",
        "imageUrl": "https:\/\/images.unsplash.com\/photo-1564182379166-8fcfdda80151?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80",
        "normalDayPrice": 1899,
        "holidayPrice": 2000,
        "name": "Deluxe Single Room"
      },
      {
        "id": "RA8NhExaXXZB7EODVALSDvFFQzj1JP0a4C1pwZ1acPaieRBwiWoCb0FE0KUbXaxg",
        "imageUrl": "https:\/\/images.unsplash.com\/photo-1526913621366-a4583840d736?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        "normalDayPrice": 2460,
        "holidayPrice": 2500,
        "name": "Double Room"
      },
      {
        "id": "kICyWhZ5XsfI4n1d4gBOsDjIyIxNozwgmxYKyZpzi5pjLcU2Nl4RhiGrn6zaPuTJ",
        "imageUrl": "https:\/\/images.unsplash.com\/photo-1519710889408-a67e1c7e0452?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
        "normalDayPrice": 2888,
        "holidayPrice": 3000,
        "name": "Deluxe Double Room"
      },
      {
        "id": "VCxbQq1vLeUtxW781k9Dlq3mHBRNl5YP19Lhq8k5TbIr2BeH58gRpnNKGoEgkysz",
        "imageUrl": "https:\/\/images.unsplash.com\/photo-1558976825-6b1b03a03719?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        "normalDayPrice": 3350,
        "holidayPrice": 3500,
        "name": "Twin Room"
      },
      {
        "id": "YovqNpFDaal598jbpd1A14gXwDE6gekTqJgxOAGcq78B8YnP7claymQVFy2GTwgb",
        "imageUrl": "https:\/\/images.unsplash.com\/photo-1552902019-ebcd97aa9aa0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
        "normalDayPrice": 3899,
        "holidayPrice": 4000,
        "name": "Deluxe Twin Room"
      }
    ]
  }
 let totalPrice = 0;
 let normalDayPriceTotal = roomDetail.items.length;

   for (let i = 0; i < normalDayPriceTotal; i++)
   {
     totalPrice += roomDetail.items[i].normalDayPrice;
   }
     console.log(`您的訂房總價為${totalPrice}`);



//第八題
let salaryData = {
    company: "circle center",
    bossName: "casper",
    staff:[
           {
               name: "Bob",
               salary: 32000
           },
              {
                 name: "Jack",
                 salary: 28000
              }
          ]

}
//Bob的薪資計算
if(salaryData.staff[0].salary <= 40000)
   salaryData.staff[0].salary = 40000
   console.log(`Bob的薪資增加至${salaryData.staff[0].salary}`);

//Jack的薪資計算
if(true){
    salaryData.staff[1].salary = 40000
    console.log(`Jack的薪資增加至${salaryData.staff[0].salary}`);
}



//第九題 輕軌車站出入口基本資料
let stationInformation = {
    isImage: false,
    data: [
    {
    seq: 1,
    站序: "1",
    車站代碼: "C1",
    車站中文站名: "籬仔內",
    車站英文站名: "Lizihnei",
    站位地點: "凱旋四路、一心路及瑞隆路交會路口南側",
    備註: ""
    },
    {
    seq: 2,
    站序: "2",
    車站代碼: "C2",
    車站中文站名: "凱旋瑞田",
    車站英文站名: "Kaisyuan Rueitian",
    站位地點: "凱旋四路、瑞田街路口",
    備註: ""
    },
    {
    seq: 3,
    站序: "3",
    車站代碼: "C3",
    車站中文站名: "前鎮之星",
    車站英文站名: "Cianjhen Star",
    站位地點: "中山三路與凱旋四路路口",
    備註: ""
    },
    {
    seq: 4,
    站序: "4",
    車站代碼: "C4",
    車站中文站名: "凱旋中華",
    車站英文站名: "Kaisyuan Jhonghua",
    站位地點: "中華五路、凱旋四路路口",
    備註: ""
    },
    {
    seq: 5,
    站序: "5",
    車站代碼: "C5",
    車站中文站名: "夢時代",
    車站英文站名: "Dream Mall",
    站位地點: "成功二路、時代大道路路口南側",
    備註: ""
    },
    {
    seq: 6,
    站序: "6",
    車站代碼: "C6",
    車站中文站名: "經貿園區",
    車站英文站名: "Commerce and Trade Park",
    站位地點: "成功二路、正勤路路口南側",
    備註: ""
    },
    {
    seq: 7,
    站序: "7",
    車站代碼: "C7",
    車站中文站名: "軟體園區",
    車站英文站名: "Software Technology Park",
    站位地點: "成功二路、復興三路路口北側",
    備註: ""
    },
    {
    seq: 8,
    站序: "8",
    車站代碼: "C8",
    車站中文站名: "高雄展覽館",
    車站英文站名: "Kaohsiung Exhibition Center",
    站位地點: "新光路、成功路路口",
    備註: ""
    },
    {
    seq: 9,
    站序: "9",
    車站代碼: "C9",
    車站中文站名: "旅運中心",
    車站英文站名: "Cruise Terminal",
    站位地點: "三多五路、苓南路路口",
    備註: ""
    },
    {
    seq: 10,
    站序: "10",
    車站代碼: "C10",
    車站中文站名: "光榮碼頭",
    車站英文站名: "Glory Pier",
    站位地點: "海邊路、青年二路路口",
    備註: ""
    },
    {
    seq: 11,
    站序: "11",
    車站代碼: "C11",
    車站中文站名: "真愛碼頭",
    車站英文站名: "Love Pier",
    站位地點: "公園二路路口",
    備註: "有電梯"
    },
    {
    seq: 12,
    站序: "12",
    車站代碼: "C12",
    車站中文站名: "駁二大義",
    車站英文站名: "Dayi Pier-2",
    站位地點: "駁二特區，大義街口",
    備註: ""
    },
    {
    seq: 13,
    站序: "13",
    車站代碼: "C13",
    車站中文站名: "駁二蓬萊",
    車站英文站名: "Penglai Pier-2",
    站位地點: "駁二特區，七賢三路口",
    備註: ""
    },
    {
    seq: 14,
    站序: "14",
    車站代碼: "C14",
    車站中文站名: "哈瑪星",
    車站英文站名: "Hamasen",
    站位地點: "近捷運橘線O1西子灣站",
    備註: ""
    }
    ],
    id: "d7790c87-b75a-40fc-94b5-1ebe8262166e",
    success: true
    }
   console.log(stationInformation);
     /**
   最外層為物件，data為一個陣列，陣內又包含很多物件 以第一個物件為例物件內的屬性及值如下:
    seq: 1,
    站序: "1",
    車站代碼: "C1",
    車站中文站名: "籬仔內",
    車站英文站名: "Lizihnei",
    站位地點: "凱旋四路、一心路及瑞隆路交會路口南側",
    備註: ""


     //第十題  流程圖

// https://whimsical.com/ApXdxKz1Sp8Wc6uHqNQCgw
    */

//自訂題目

//判斷你是哪裡人

