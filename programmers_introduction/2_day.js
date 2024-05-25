//자릿수 더하기
function solution(n) {
    var answer = 0;
    var n_string = n.toString();
    for(let i =0; i<n_string.length ; i++){
        answer += parseInt(n_string[i]);
    }
    
    return answer;
}
//제곱수 판별하기
function solution(n) {
    var answer = 2;
    for(let i =0; i<10000 ;i++){
        if(n === i*i){
            answer = 1;
        }
    }
    return answer;
}

//순서쌍의 개수
function solution(n) {
    var answer = 0;
    for(let i =1; i<n+1 ; i++){
        if(n%i === 0){
            answer++;
        }
    }
    return answer;
}

//특정 문자 제거하기
function solution(my_string, letter) {
    var answer = '';
    for(let i =0; i<my_string.length ; i++){
        if(letter === my_string[i]){
            continue;
        }else
            answer +=my_string[i];
    }
    return answer;
}
// 짝수 홀수 개수
function solution(num_list) {
    var answer = [];
    let a = 0;
    let b = 0;
    for(let i = 0; i < num_list.length; i++){
        if(num_list[i]%2 === 0){
            a++;
        }else
            b++;
    }
    answer = [a,b]
    return answer;
}

//배열 자르기
function solution(numbers, num1, num2) {
    var answer = [];
    answer = numbers.slice(num1,num2+1);
    return answer;
}

//배열의 유사도
function solution(s1, s2) {
    var answer = 0;
    for(let i =0; i<s1.length; i++){
        for(let j = 0; j<s2.length;j++){
            if(s1[i]===s2[j]){
                answer++;
            }
        }
    }
    return answer;
}
