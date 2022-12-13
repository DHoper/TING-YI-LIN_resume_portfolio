
    let date = new Date();
    let titleTime = document.querySelector('.title p')
    titleTime.innerHTML = `${date}`;

    fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-E9D4D429-3897-4943-B244-2B78F0842241')
        .then(response => {
            return response.json();
        })
        .then(data => {
            let dataRecord = [];
            dataRecord = data.records.location;
            console.log(dataRecord);
            weather(dataRecord);
        });

    let northern = null;
    let central = null;
    let south = null;
    let east = null;
    let outerIslands = null;
    let taiwan = null;
    let face0, face1, face2, face3, face4 = null;
    let faceContainer = [face0, face1, face2, face3, face4];
    let face = document.querySelectorAll('.face');

    function weather(weatheData) {
        northern = [weatheData[1], weatheData[3], weatheData[4], weatheData[5], weatheData[7]];
        central = [weatheData[8], weatheData[9], weatheData[11], weatheData[14], weatheData[20]];
        south = [weatheData[0], weatheData[2], weatheData[6], weatheData[15], weatheData[17]];
        east = [weatheData[10], weatheData[12], weatheData[8], weatheData[13], weatheData[17]];
        outerIslands = [weatheData[16], weatheData[19], weatheData[21], weatheData[15], weatheData[17]];
        taiwan = [northern, central, south, east, outerIslands];


        faceContainer.forEach((item, index) => {
            faceContainer[index] = face[index];

            for (i = 2; i < 7; i++) {                           //星期//
                let week = faceContainer[index].children[i].children[1].children[0].children[0];  
                switch (date.getDay()) {
                    case 0:
                        week.innerHTML = `週日`
                        break;
                    case 1:
                        week.innerHTML = `週一`
                        break;
                    case 2:
                        week.innerHTML = `週二`
                        break;
                    case 3:
                        week.innerHTML = `週三`
                        break;
                    case 4:
                        week.innerHTML = `週四`
                        break;
                    case 5:
                        week.innerHTML = `週五`
                        break;
                    case 6:
                        week.innerHTML = `週六`
                        break;
                }
                faceContainer[index].children[i].children[1].children[0].children[1].innerHTML = `${date.getMonth() + 1} / ${date.getDate()}`;  //日期//

                faceContainer[index].children[i].children[1].children[1].innerHTML = taiwan[index][i - 2].weatherElement[4].time[0].parameter.parameterName + '&#176;'; //正面溫//

                faceContainer[index].children[i].children[1].children[2].innerHTML = taiwan[index][i - 2].locationName;//地區名//

                faceContainer[index].children[i].children[2].children[0].children[0].innerHTML = taiwan[index][i - 2].weatherElement[0].time[0].parameter.parameterName;//天況//

                let humidity = taiwan[index][i - 2].weatherElement[1].time[0].parameter.parameterName;  //按濕度換圖片//
                let weatherImg = faceContainer[index].children[i].children[1].children[3];
                switch (true) {
                    case (humidity < 40):
                        weatherImg.src = './img/cloudy-day-2.svg';
                        break;
                    case (humidity >= 40 && humidity < 70):
                        weatherImg.src = './img/cloudy.svg';
                        break;
                    case (humidity >= 70 && humidity < 90):
                        weatherImg.src = './img/rainy.svg';
                        break;
                    case (humidity >= 90):
                        weatherImg.src = './img/thunder.svg';
                        break;
                    default:
                        weatherImg.src = './img/day.svg';
                        break;
                }

                {
                    faceContainer[index].children[i].children[2].children[0].children[1].children[1].children[0].innerHTML = taiwan[index][i - 2].weatherElement[4].time[0].parameter.parameterName + '&#176;c';
                    faceContainer[index].children[i].children[2].children[0].children[1].children[1].children[1].innerHTML = taiwan[index][i - 2].weatherElement[2].time[0].parameter.parameterName + '&#176;c';
                    faceContainer[index].children[i].children[2].children[0].children[1].children[1].children[2].innerHTML = taiwan[index][i - 2].weatherElement[1].time[0].parameter.parameterName + '%';
                }   //今日(背面)天氣資訊//

                {
                    faceContainer[index].children[i].children[3].children[0].children[1].children[0].innerHTML = taiwan[index][i - 2].weatherElement[4].time[2].parameter.parameterName + '&#176;c';
                    faceContainer[index].children[i].children[3].children[0].children[1].children[1].innerHTML = taiwan[index][i - 2].weatherElement[2].time[2].parameter.parameterName + '&#176;c';
                    faceContainer[index].children[i].children[3].children[0].children[1].children[2].innerHTML = taiwan[index][i - 2].weatherElement[1].time[2].parameter.parameterName + '%';
                }                 //明日(背面)天氣資訊//
            };
        });
    };


    const screen = document.querySelector('.screen');
    const faceTouchPanel = document.querySelectorAll('.faceTouchPanel');
    let titleName = document.querySelector('.title span');  //更換標題用途//
    let titleCounter = 0;
    let titleBox = [ '北部', '中部', '南部', '東部', '離島'];
    faceTouchPanel.forEach((item, index) => {            ///////大板塊觸碰效果/////////
        console.log(titleBox[titleCounter]);
        turnPageL = () => {
            if(titleCounter > 0 && titleCounter <= 4) {     
                titleCounter--;
                console.log(titleBox[titleCounter]);
                titleName.innerHTML = titleBox[titleCounter];
            }
            screen.scrollBy({
                left: -1920,
                behavior: 'smooth',
            });
        }
        turnPageR = () => {
            if(titleCounter >= 0 && titleCounter < 4) {
                titleCounter++;
                titleName.innerHTML = titleBox[titleCounter];
            }
            screen.scrollBy({
                left: 1920,
                behavior: 'smooth',
            });
        }
        mouseE = (event) => {
            let x = event.offsetX;
            x = x - 700;

            if (x < -600) {
                item.style.cursor = 'pointer';
                face[index].style.transform = 'rotate3d( 0, -0.1, 0, 15deg)';
                item.removeEventListener('click', turnPageR);
                item.addEventListener('click', turnPageL);
            } else if (x > 600) {
                item.style.cursor = 'pointer';
                face[index].style.transform = 'rotate3d( 0, 0.1, 0, 15deg)';
                item.removeEventListener('click', turnPageL);
                item.addEventListener('click', turnPageR);
            } else {
                item.style.cursor = 'default';
                face[index].style.transform = 'none';
            }
        }
        item.addEventListener('mousemove', mouseE);
        item.addEventListener('mouseout', () => {
            // item.removeEventListener('mousemove', mouseE);  ///錯誤範例///
            item.removeEventListener('click', turnPageL);
            item.removeEventListener('click', turnPageR);
        });

    });

    const container = document.querySelectorAll('.container');      ///////小板塊觸碰效果/////////
    const touchPanel = document.querySelectorAll('.touchPanel');
    touchPanel.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
            container[index].style.transform = 'none';
            let tDBlockCounter = ((index + 4) - (index -4));   //*問題(小板塊被點擊後，mousemove效果被取消)，暫用方案//
            for( i=0; i < tDBlockCounter; i++) {
                touchPanel[i].style.display = 'block';
            };
           
        })
        item.addEventListener('mousemove', event => {
            let x = event.offsetX;
            let y = event.offsetY;
            x = (x - 125) / 125;
            y = -((y - 125) / 125);
            if (Math.abs(x) > 0.1 && Math.abs(y) > 0.1) {
                container[index].style.transform = `rotate3d(${y},${x},0,30deg)`;
            };
        })
        item.addEventListener('mouseout', () => {
            container[index].style.transform = 'none';
        })
        container[index].addEventListener('click', () => {
            item.style.display = 'none';
        })
    });

