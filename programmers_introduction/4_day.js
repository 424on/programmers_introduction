// 51 369게임
function solution(order) {
    var answer = 0;
    var str = order.toString();
    var strSplit =str.split(''); 
    for(let i = 0 ; i<strSplit.length ; i++){
        if(strSplit[i]%3 === 0 && strSplit[i]!=='0'){
            answer++;
        }
    }
    return answer;
}
// 52 합성수 찾기
function solution(n) {
    var answer = 0;
    for(let i = 4 ; i<n+1 ; i++){
        if((i%2 === 0 || i%3 ===0 || i%5===0  || i%7===0)&& (i!==5 && i!==7)){
            answer++;
        }
    }
    return answer;
}
// 53 숫자 찾기
function solution(num, k) {
    var answer = -1;
    var str = num.toString();
    var strSplit = str.split('');
    for(let i = 0; i<strSplit.length; i++){
        if(parseInt(strSplit[i])=== k){
            answer = i+1;
            break;
        }
    }
    return answer;
}
// 54 약수 구하기
function solution(n) {
    var answer = [];
    for(let i =1; i<n+1 ; i++){
        if(n%i === 0){
            answer.push(i);
        }
    }
    return answer;
}

// 55 문자열 정렬하기(1)
function solution(my_string) {
    var answer = [];
    
    for(let i =0; i<my_string.length; i++){
        if(parseInt(my_string[i])>-1 && parseInt(my_string[i])<10){
            answer.push((parseInt(my_string[i])));
            
        }
    }
    answer.sort();
    return answer;
}

// 56 피자 나눠 먹기(2)
function solution(n) {
    var answer = 0;
    for(let i = 1 ; i<n+1 ; i++){
        if((6*i)%n === 0){
           answer = i;
            break;
        }
    }
    return answer;
}
// 57 배열 회전시키기
function solution(numbers, direction) {
    var answer = [];
    if(direction.length >4){
        answer.push(numbers[numbers.length-1])
        for(let i = 0; i<numbers.length-1 ; i++){
            answer.push(numbers[i]);
        }
            
    }else{
        numbers.push(numbers[0]);
        numbers.splice(0 ,1);
        answer = numbers;
    }
    return answer;
}
// 58 문자열 정렬하기(2)
function solution(my_string) {
    var answer = '';
    return my_string.toLowerCase().split('').sort().join('');
}
// 59 중복된 문자 제거
function solution(my_string) {
    var answer = '';
    var strSplit = my_string.split('');
    for(let i = 0; i<strSplit.length; i++){
        for(let j = strSplit.length ; j>i; j--){
            if(strSplit[i] === strSplit[j]){
                strSplit.splice(j,1);
            }
        }
    }
    answer = strSplit.join('');
    return answer;
}
// 60 외계행성의 나이
function solution(age) {
    var answer = '';
    var ageStr = age.toString();
    var ageStrSplit = ageStr.split('')
    for(let i = 0; i<ageStrSplit.length ; i++){
        answer +=String.fromCharCode(parseInt(ageStrSplit[i])+97);
        }
    return answer;
}
// 61 2차원으로 만들기
function solution(num_list, n) {
    var answer = [];
    for(let i =0; i<num_list.length/n; i++){
       answer.push(num_list.slice(i*n, i*n+n))
    }
    return answer;
}
// 62 모스부호(1)
function solution(letter) {
    var answer = '';
    var arr = [];
    const morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'};
    arr=letter.split(/\s+/g);
    for(let i =0; i<arr.length ; i++){
            answer += morse[(arr[i])];
        }
    return answer;
}
// 63 팩토리얼
function solution(n) {
    var answer = 1;
    var i = 0;
    do{
        i++;
        answer *=i;
    }while(answer <n){
    };
    if(answer === n){
        return i;
    }else return i-1;
}
// 64 숨어있는 숫자의 덧셈(2)
function solution(my_string) {
    var answer = 0;
    var str =[];
    var strSpl = my_string.split('');
    for(let i = 0 ; i<strSpl.length ; i++){
        if(strSpl[i]+1 > 0){
            str.push(strSpl[i]);
        }else{
            str.push("+");
        }
    }
    let numbers = str.join('').match(/\d+/g);
    if(numbers === null){
        answer=0
    }else answer = numbers.reduce((acc, num) => acc + parseInt(num),0)
    return answer;
}
