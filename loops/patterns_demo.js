// for(let i =1;i<=5;i++){
//     let row=""
//     for(let j=1;j<=i;j++){
//        row+=i
//        row+=" "
//     }
//     console.log(row)
// }

// for(let i =1;i<=5;i++){
//     let row=" "
//      for(let k=5-i;k>=0;k--){
//         row+=" "
//        }
//     for(let j=1;j<=i;j++){
//        row+=i+" "
//     }
//     console.log(row)
// }

for(let i =1;i<=5;i++){
    let row=" "
     for(let k=5-i;k>=0;k--){
        row+=" "
       }
    for(let j=1;j<=i;j++){
       row+="* "
    }
    console.log(row)
}

for(let i =4;i>=1;i--){
    let revrow="  "
     for(let k=1;k<=4-i;k++){
        revrow+=" "
       }
    for(let j=1;j<=i;j++){
       revrow+=" *"
    }
    console.log(revrow)
}


