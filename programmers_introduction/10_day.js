// 88 외계어 사전
function solution(spell, dic) {
    var answer = 2;
    for(let i = 0 ; i< dic.length ; i++){
        for(let k = 0 ; k<spell.length ; k++){
            if(dic[i].includes(spell[k])===false){
                 dic.splice(dic[i],1);
                 i--;
                break;
                }
            }
        }
    if(dic.length>0){
        answer =1
    }
    return answer 
}
// 89 치킨 쿠폰
function solution(chicken) {
    var answer = 0;
    var other = 0;
    var n = 0;
    do{
        answer += parseInt(chicken/10);
        other += parseInt(chicken%10);
        chicken = parseInt(chicken/10);
    }while(chicken >0);
    if(other >9){
        n = parseInt(other/10) + parseInt((parseInt(other/10)+parseInt(other%10))/10)
    }
    
    return answer+n;
}
// 90 저주의 숫자 3
function solution(n) {
    var answer = 0;
    var arr = [];
    let i = 0
    for(i = 1 ; i< 200; i++){
        if(i%3===0 || i.toString().includes(3)===true){
            continue;
        }else{
            arr.push(i);
        }
    }

    answer = arr[n-1]
    return answer;
}
// 91 특이한 정렬
function solution(numlist, n) {
    var answer = [];
    var ans = [];
    numlist.sort(function compare(a, b) {
        if(Math.abs(n-a) > Math.abs(n-b)) return 1;
        if(Math.abs(n-a) < Math.abs(n-b)) return -1;
        if(Math.abs(n-a) === Math.abs(n-b) && a>b) return -1;
        })

    return numlist;
}
// 92 문자열 밀기
function solution(A, B) {
    var answer = -1;
    var arrA = A.split('');
    var arrB = B.split(''); 
    var k = '';
        for(let i= 0 ; i<A.length; i++){
            if(arrA.join('') === B){
                answer = i;
                break;
            }else if(arrA !== B){
                k = arrA[A.length-1]
                arrA.unshift(k);
                arrA.pop();

            }
        }
    
    return answer;
}
// 93 최빈값 구하기
function solution(array) {
    var answer = 0;
    array.sort()
    var uniqueArr = [... new Set(array)];
    if(array.length ===1){
        return array[0];
    }else{
        do{
        for(let i = 0 ; i<uniqueArr.length ; i++){
            for(let j = 0 ; j<array.length ; j++){
                if(uniqueArr[i] === array[j]){
                    array.splice(j,1)
                    break;
                }
            }
        }
    }
    while(array.length >1 )
    }
    
    if(array.length === 0){
        answer = -1;
    }else
        answer = array[0];
    return answer;
}
//94 겹치는 선분의 길이 
function solution(lines) {
    var answer = 0;
    var arr = [];
    for(let i =0 ; i<3 ; i++){
        for(let j = lines[i][0] ; j<lines[i][1] ; j++){
            arr.push(j)
        }
    }
    var uniqueArr = [... new Set(arr)];
    for(let i = 0 ; i<uniqueArr.length ; i++){
            for(let j = 0 ; j<arr.length ; j++){
                if(uniqueArr[i] === arr[j]){
                    arr.splice(j,1)
                    break;
                }
            }
        }
    var lastArr = [... new Set(arr)];
    answer = lastArr.length
    return answer;
}