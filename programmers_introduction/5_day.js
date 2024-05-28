// 65 A로 B만들기
function solution(before, after) {
    var answer = 0;
    var a = after.split('').sort().toString();
    var b = before.split('').sort().toString();
    if(a===b){
        answer++
    }
    return answer;
}
// 66 7의 개수
function solution(array) {
    var answer = 0;
    var a = array.toString().split('')
    for(let i =0 ; i<a.length; i++){
        if(a[i] === "7"){
            answer++;
        }
    }
    return answer;
}
// 67 진료 순서 정하기
function solution(emergency) {
    var answer = [];
    const exm={
        ...emergency,
    }
    var rev = emergency.sort((a, b) => b - a);
    for(let i = 0 ; i<emergency.length ; i++){
        for(let j = 0; j<emergency.length ; j++){
            if(exm[i] === rev[j]){
                answer.push(j+1);
            }
        }
    }
    return answer;
}
// 68 이진수 더하기
function solution(bin1, bin2) {
    var answer = '';
    var b1 = parseInt(bin1,2);
    var b2 = parseInt(bin2,2);
    var sum = b1+b2;
    var answer = sum.toString(2)
    return answer;
}
// 69 컨트롤 제트
function solution(s) {
    var answer = 0;
    var str = s.replaceAll(/ /gi,",") 
    var a = str.split(",");
    for(let i = 0; i<a.length; i++){
        if(a[i] === "Z"){
            answer -= parseInt(a[i-1])
        }else answer += parseInt(a[i])
    }
    
    return answer;
}
// 70 영어가 싫어요
function solution(numbers) {
    var answer = 0;
    var str = numbers.replaceAll("zero","0").replaceAll("one","1").replaceAll("two","2").replaceAll("three","3").replaceAll("four","4").replaceAll("five","5").replaceAll("six","6").replaceAll("seven","7").replaceAll("eight","8").replaceAll("nine","9")
    answer = parseInt(str);
    return answer;
}

// 71 구슬을 나누는 경우의 수
function solution(balls, share) {
    var answer = 1;
    var n=1;
    var m=1;
    var nm=1;
    if(balls === share){
        return 1;
    }else{
        for(let i = 1 ; i< balls+1; i++){
            n *= i
        }
        for(let j = 1 ; j< share+1; j++){
            m *= j
        }
        for(let k = 1 ; k< balls-share+1; k++){
            nm *= k
        }
    }
    answer = n/(m*nm);
    return Math.round(answer);
} 

// 72 k의 개수
function solution(i, j, k) {
    var answer = 0;
    var arr =[];
    for(let n = i; n<j+1; n++){
        arr.push(n);
    }
    var str = arr.toString().split('');
    for(let r = 0; r<str.length; r++){
        if(parseInt(str[r]) === k){
            answer++
        }
    }
    return answer;
}