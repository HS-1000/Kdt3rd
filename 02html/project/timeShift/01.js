// let now = new Date();
// now_str = String(now);

// console.log(now);
// console.log(typeof(now_str));

// let year = 

const sub_time = function() {
    const inputDatetime = document.querySelector('input[type="datetime-local"]');
    if (inputDatetime.value.length == 0) {
        return null;
    }
    // 빈입력 예외
    // let input_year = inputDatetime.value.substr(0, 4);
    // let input_month = inputDatetime.value.substr(5, 7);
    // let input_date = inputDatetime.value.substr(8, 10);
    // alert('why');
    console.log(inputDatetime.value);
    const input_obj = new Date(inputDatetime.value);
    let input_stamp = input_obj.getTime();

    const now_obj = new Date();
    let now_stamp = now_obj.getTime();

    let delta = now_stamp - input_obj;
    delta = Math.floor(delta / 1000);
    if (delta < 0) {
        alert("과거를 입력하세요.");
        return null;
    }
    let min = 60;
    let hour = 60*60;
    let day = 24*60*60;
    // console.log(delta);
    
    let dDay = Math.floor(delta / day);
    // console.log(delta);
    delta = delta % day;
    // console.log('%', delta);
    // console.log(delta%(24*60*60));
    let dHour = Math.floor((delta % day) / hour);
    delta = delta - dHour*hour;

    let dMin = Math.floor(delta / min);
    alert(`${dDay} 일 ${dHour} 시간 ${dMin} 분`);

    // console.log(test.getTime());
}