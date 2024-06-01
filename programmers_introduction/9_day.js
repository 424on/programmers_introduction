// 82 연속된 수의 합
function solution(num, total) {
    var answer = [];
    var n = parseInt(total/num);
    for(let i = 0 ; i<num ; i++){
        if(num %2 !== 0){
            answer.push(n+i-parseInt(num/2));
        }else
            answer.push(n+i-parseInt(num/2)+1);
    }
    return answer;
}
//83 한 번만 등장한 문자
function solution(s) {
    var answer = '';
    var arr = s.split('').sort()
    var copyArr = s.split('').sort()
    var uniqueArr = [... new Set(arr)];
    for(let i = 0 ; i<uniqueArr.length ; i++){
        for(let j = 0 ; j < arr.length ; j++){
            if(uniqueArr[i] === arr[j]){
                arr.splice(j,1);
            }
        }
    }
    
    for(let l = 0 ; l<arr.length ; l++){
        for(let k = 0 ; k<copyArr.length ; k++){
            if(arr[l]===copyArr[k]){
                copyArr.splice(k,1);
                k--;
            }
        }
    }
    answer = copyArr.join('');
    return answer;
}
//84 소인수분해
function solution(n) {
    var answer = [];
    var primeNum = [2, 3, 5, 7];
    for(let i = 11 ; i<10000 ; i++){
        if(i%2 !== 0 && i%3 !==0 && i%5!==0 && i%7!==0){
            primeNum.push(i);
        }
    }
    for(let j =0; j<primeNum.length ; j++){
        if(n%primeNum[j] === 0){
            answer.push( primeNum[j]);
            n /= primeNum[j];
        }
    }
    return answer;
}
//85 평행
function solution(dots) {
    var answer = 0;
   if (Math.abs((dots[0][0] - dots[1][0])/(dots[0][1] - dots[1][1])) === Math.abs((dots[2][0] - dots[3][0])/(dots[2][1] - dots[3][1]))) {
       return 1;
   } else {
       return 0;
   }
   return answer;
}
// 86 공 던지기
function solution(numbers, k) {
    var answer = numbers[numbers.length/((k-1)*2)];
    if((k-1)*2 > numbers.length){
        answer = numbers[((k-1)*2)%numbers.length]
    }
    return answer;
}
// 87 유한소수 판별하기
function solution(a, b) {
    var answer = 1;
    var arrA =[];
    var arrB =[];
    for(let i =2; i<a+1 ; i++){
        if(a%i === 0){
            arrA.push(i);
        }
    };
    for(let i =2; i<b+1 ; i++){
        if(b%i === 0){
            arrB.push(i);
        }
    };
    
    for(let i = 0 ; i<arrA.length ; i++){
        for(let j = 0 ; j<arrB.length ; j++){srrB[j]<arrA[i])){
                arrB.splice(j,1);
                j--
            }
        }
    }
    for(let i = 0; i<arrB.length ; i++){
        if(arrB[i]%2 !==0 && arrB[i]%5 !==0 ){
            answer = 2;
        }
    }
    return answer;
}