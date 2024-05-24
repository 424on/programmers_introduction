// 두 수의 차
function solution(num1, num2) {
    var answer = 0;
    answer = num1 - num2;
    return answer;
}
//두 수의 곱
function solution(num1, num2) {
    var answer = 0;
    return num1 * num2;
}
//몫 구하기
function solution(num1, num2) {
    var answer = 0;
    return parseInt(num1/num2);
}
//숫자 비교하기
function solution(num1, num2) {
    var answer = 0;
    if(num1 === num2){
        answer++
    }else{
        answer--
    }
    return answer;
}
//나머지 구하기
function solution(num1, num2) {
    var answer = -1;
    return num1%num2;
}
//나이 출력
function solution(age) {
    var answer = 0;
    return 2023-age;
}
//두 수의 합
function solution(num1, num2) {
    var answer = -1;
    return num1+num2;
}
//배열의 평균값
function solution(numbers) {
    var answer = 0;
    for(let i = 0; i < numbers.length ; i++){
        answer += numbers[i];
    }
    return answer/numbers.length;
}
//각도기
function solution(angle) {
    var answer = 0;
    if(angle<90){
        answer =1;
    }else if(angle === 90){
        answer = 2;
    }else if(angle < 180){
        answer = 3;
    }else if(angle === 180){
        answer = 4;
    }
    return answer;
}
//짝수의 합
function solution(n) {
    var answer = 0;
    for(let i = 1; i<n/2+1; i++){
        answer += i;
    }
    return answer*2;
}
//양꼬치
function solution(n, k) {
    var answer = 0;
    answer = 12000*n + 2000*k - 2000 * parseInt(n/10) ;
    return answer;
}
//두 수의 나눗셈
function solution(num1, num2) {
    var answer = 0;
    return parseInt((1000*num1)/num2);
}
//세균 증식
function solution(n, t) {
    var answer = 0;
    while(t>0){
        n *= 2;
        t--;
    }
    return n;
}
//배열 뒤집기
function solution(num_list) {
    var answer = [];
    answer = num_list.reverse();

    return answer;
}
//문자열 뒤집기
function solution(my_string) {
    var answer = '';
    for(let i = my_string.length; i>0 ; i--)
        answer += my_string[i-1];
    return answer;
}

//배열 원소의 길이
function solution(strlist) {
    var answer = [];
    for(let i =0; i<strlist.length; i++){
        answer[i] = strlist[i].length;
    }
    return answer;
}
//중복된 숫자 개수
function solution(array, n) {
    var answer = 0;
    for(let i = 0; i<array.length; i++){
        if(array[i]=== n){
            answer++;
        }
    }
    return answer;
}
//머쓱이보다 키 큰 사람
function solution(array, height) {
    var answer = 0;
    for(let i = 0; i<array.length; i++)
        if(array[i]>height){
            answer++;
        }
    return answer;
}
//중앙값 구하기
function solution(array) {
    var answer = 0;
    array.sort();
    answer = array[array.length / 2]
    return answer;
}
//짝수는 싫어요
function solution(n) {
    var answer = [];
    for(let i = 1; i<n+1 ; i++){
        if(i%2!==0){
            answer.push(i);
        }
    }
    return answer;
}
//피자 나눠먹기(1)
function solution(n) {
    var answer = 0;
    for(let i = 0; i<n ; i++){
        if(i%7===0)
            answer++;
    }
    return answer;
}
//옷가게 할인 받기
function solution(price) {
    var answer = 0;
    if(price<100000){
        answer = price;
    }else if(price<300000){
        answer = parseInt(price*0.95);
    }else if(price<500000){
        answer = parseInt(price*0.9);
    }else{
        answer = parseInt(price*0.8);
    }
    return answer;
}
//아이스 아메리카노
function solution(money) {
    var answer = [];
    let n = parseInt(money / 5500);
    let other = parseInt(money - n*5500);
    answer.push(n,other);
    return answer;
}
//개미 군단
function solution(hp) {
    var answer = 0;
    
    if(hp/5 >0){
        answer += parseInt(hp/5);
        hp -=parseInt(hp/5)*5;
    }
    
    if(hp/3 >0){
        answer += parseInt(hp/3);
        hp -=parseInt(hp/3)*3;
    }
    answer +=hp;
    return answer;
}
//가위 바위 보
function solution(rsp) {
    var answer = '';
    for(let i=0;i<rsp.length;i++)
    if(rsp[i] === '2'){
        answer += '0';
    }else if(rsp[i] === '0'){
        answer += '5'
    }else if(rsp[i] === '5'){
        answer += '2';
    }
    return answer;
}
//숨어있는 숫자의 덧셈(1)
function solution(my_string) {
    var answer = 0;
    for(let i =0; i<my_string.length; i++){
        if(my_string[i]+1 >1){
            answer += Number(my_string[i]);
        }
    }
    return answer;
}
//삼각형의 완성조건(1)
function solution(sides) {
    var answer = 2;
    sides.sort();
    if(sides[0]+sides[1]>sides[2]){
        answer =1;
    }
    return answer;
}