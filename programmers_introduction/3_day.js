// 35 편지
function solution(message) {
    var answer = message.length *2;
    return answer;
}

//36 배열 두배 만들기
function solution(numbers) {
    var answer = [];
    for(let i =0; i<numbers.length; i++){
        answer[i] = numbers[i]*2;
    }
    return answer;
}
// 37 최댓값 만들기
function solution(numbers) {
    var answer = numbers[0]*numbers[1];
    for(let i =0; i<numbers.length ; i++){
        for(let j=0; j<numbers.length ; j++){
            if (i!==j && answer < numbers[i]*numbers[j]){
                answer = numbers[i]*numbers[j];
            }
        }
    }
    return answer;
} 
// 38 점의 위치 구하기
function solution(dot) {
    var answer = 0;
    if(dot[0] > 0 && dot[1] >0){
        answer = 1;
    }else if(dot[0] < 0 && dot[1] >0){
        answer = 2;
    }else if(dot[0] <0 && dot[1] <0){
        answer =3;
    }else
        answer =4;
    return answer;
}

//39 피자 나눠 먹기(3)
function solution(slice, n) {
    var answer = 0;
    if(n%slice > 0){
        answer = n/slice +1;
    }else if(n%slice  === 0){
        answer = n/slice;
    }
    return parseInt(answer);
}

// 40 분수의 덧셈
function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    var num1 = denom1 * denom2;
    var num2 = (numer1*(num1/denom1))+(numer2*(num1/denom2));
    answer = [num2,num1];
    for(let i =1 ; i<num1+1 ; i++){
        if((num1%i===0)&&(num2%i===0)){
            answer = [num2/i,num1/i];
        }
    }
    return answer;
}

// 41 n의 배수 고르기
function solution(n, numlist) {
    var answer = [];
    for(let i =0; i<numlist.length; i++){
        if(numlist[i]%n === 0){
            answer.push(numlist[i]);
        }
    }
    return answer;
}

// 42 가장 큰 수 찾기
function solution(array) {
    var answer = [];
    let n = array[0];
    let n1 = 0;
    for(let i =0 ; i<array.length; i++){
        if(n<array[i]){
            n = array[i];
            n1 =i;
        }
    }
    answer.push(n,n1);
    return answer;
}

// 43 대문자와 소문자
function solution(my_string) {
    var answer = '';
    for(let i = 0; i<my_string.length ; i++){
       if(my_string[i] === my_string[i].toLowerCase()){
           answer +=my_string[i].toUpperCase();
       } else{
           answer +=my_string[i].toLowerCase();
        }
}
    return answer;
}

// 44 암호해독
function solution(cipher, code) {
    let a= cipher.split('');
    let b =[]
    if(code === 1){
        return cipher;
    }
    for(i=1; i<a.length; i++){
        b.push(a[i*code-1])
    }
    return b.join('');
}
// 45 모음 제거
function solution(my_string) {
    var answer = '';
    for(let i =0; i<my_string.length ; i++){
        if(my_string[i] !== 'u' &&my_string[i] !== 'a'&&my_string[i] !== 'e'&&my_string[i] !== 'i'&&my_string[i] !== 'o'){
            answer += my_string[i];
        }else{
            continue;
        }
    }
    return answer;
}
// 46 인덱스 바꾸기
function solution(my_string, num1, num2) {
    var answer = '';
    var tmp1 = my_string[num1];
    var tmp2 = my_string[num2];
    var splitArr = my_string.split('');
    
    splitArr[num1] = tmp2;
    splitArr[num2] = tmp1;
    
    return splitArr.join('');
}
// 47 문자 반복 출력하기
function solution(my_string, n) {
    var answer = '';
    var splitStr = my_string.split('');
    for(let i =0; i<splitStr.length; i++){
        for(let j =0; j<n ; j++){
            answer += my_string[i];
        }
    }
    return answer;
}
// 48 문자열안에 문자열
function solution(str1, str2) {
    var answer = 2;
    for(let i =1; i<str1.length+1 ; i++){
        if(str1.slice(i-1,i+str2.length-1) === str2.slice(0,str2.length)){
            answer =1;
        }
    }
    
    return answer;
}
// 49 최대값 만들기(1)
function solution(numbers) {
    var answer = 0;
    numbers.sort(function(a, b)  {
    if(a > b) return 1;
    if(a === b) return 0;
    if(a < b) return -1;
});
    answer = numbers[numbers.length-1]*numbers[numbers.length-2]
    return answer;
}
// 50 주사위의 개수
function solution(box, n) {
    var answer = 0;
    var num1 = parseInt(box[0]/n) 
    var num2 = parseInt(box[1]/n)
    var num3 = parseInt(box[2]/n)
    return num1*num2*num3;
}