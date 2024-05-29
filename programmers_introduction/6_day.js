// 73 잘라서 배열로 저장하기
function solution(my_str, n) {
    var answer = [];
    var spl = my_str.split('')
    for(let i =0 ; i<my_str.length/n; i++){
        answer.push(spl.slice(i*n,i*n+n).join(''))
    }
    return answer;
}
// 74 삼각형의 완성조건(2)
function solution(sides) {
    var answer = 1;
    if(sides[0]>sides[1]){
        for(let i =1 ; i<sides[0]+sides[1]; i++){
            if((i>sides[0] && i<sides[0]+sides[1]) || (i+sides[1]>sides[0]&&i+sides[1]<sides[0]+sides[1])){
               answer++
               }
        }
    }else if(sides[1]>sides[0]){
        for(let i =1 ; i<sides[0]+sides[1]; i++){
            if((i>sides[1] && i<sides[1]+sides[0]) || (i+sides[0]>sides[1]&&i+sides[0]<sides[1]+sides[0])){
               answer++
               }
        }
    }else if(sides[1]===sides[0]){
        for(let i =1 ; i<sides[0]+sides[1]-1; i++){
            answer++
        }
    }        
    
    return answer;
}

// 75 가까운 수
function solution(array, n) {
    var sor = array.sort();
    var answer = array[0];
    var k =Math.abs(array[0]-n);
    for(let i =1 ; i<array.length; i++){
        if(Math.abs(array[i]-n)<k){
            k= Math.abs(array[i]-n);
            answer =array[i];
        }
    }
    
    return answer;
}

// 76 종이 자르기
function solution(M, N) {
    var answer = 0;
    return M*N-1;
}

// 77 캐릭터의 좌표
function solution(keyinput, board) {
    var answer = [0,0];
    var x = 0;
    var y = 0;
    var bx = parseInt(board[0]/2);
    var by = parseInt(board[1]/2);
    for(let i = 0 ; i<keyinput.length; i++){
        if(keyinput[i] === "up" && y<by){
            y++
        }else if(keyinput[i] === "down" && y>-by){
            y--
        }else if(keyinput[i] === "left"&& x>-bx){
            x--
        }else if(keyinput[i] === "right"&& x<bx){
            x++
        }else
            continue;
    }
    return [x,y];
}

//78 직사각형 넓이 구하기
function solution(dots) {
    var answer = 0;
    var dotc = [];
    dotc.push(dots[0][0]+dots[0][1],dots[1][0]+dots[1][1],dots[2][0]+dots[2][1],dots[3][0]+dots[3][1]);
    dotc.sort(function(a, b)  {
      if(a > b) return 1;
      if(a === b) return 0;
      if(a < b) return -1;
    });
    var max = dotc[3]
    var min = dotc[0]
    var maxarr = [];
    var minarr = [];
    for(let i = 0 ; i<4 ; i++){
        if(max === dots[i][0]+dots[i][1]){
            maxarr.push(dots[i][0],dots[i][1])
        }else if(min === dots[i][0]+dots[i][1]){
            minarr.push(dots[i][0],dots[i][1])
        }
    }
    answer = Math.abs(maxarr[0]-minarr[0])*Math.abs(maxarr[1]-minarr[1]);
    return answer;
}

// 79 로그인 성공?
function solution(id_pw, db) {
    var answer = 'fail';
    for(let i = 0 ; i<db.length ; i++){
        if(id_pw[0]=== db[i][0] && id_pw[1] === db[i][1]){
            answer = 'login'
        }else if(id_pw[0]=== db[i][0] && id_pw[1] !== db[i][1]){
            answer = 'wrong pw'
        }
    }
    return answer;
}

// 80 등수 매기기
function solution(score) {
    var answer = [];
    var arr = [];
    for(let i =0; i<score.length; i++){
        arr.push(score[i][0]+score[i][1]);
    }
    arr.sort(function(a, b)  {
      return b - a;
    });
    for(let j =0; j<score.length; j++){
        for(let k =0; k<score.length; k++){
            if(score[j][0]+score[j][1] === arr[k]){
                answer.push(k+1);
                break;
            }
        }
        
    }
    return answer;
}