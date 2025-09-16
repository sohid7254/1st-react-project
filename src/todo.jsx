

// conditional operating : 1
// export default function ToDo({task, isDone}){
    
//     return(
//         <li>Task: {task}</li>
        
//     )
// }

//Consitional Operating : 2 
// Condition: if/else
// export default function ToDo({task,isDone}){
//     if(isDone === true){
//         return <li>Done: {task}</li>
//     }else{
//         return <li>Pending: {task}</li>
//     }
// }

// Condotional Operating:3 With ternary Operator
// Condition ? true: false;
// export default function ToDo({task, isDone, time = 0}){
//     return isDone ? 
//     <li>Done: {task} time : {time}</li> : 
//     <li>Not Yet: {task}</li>
// }

// conditon rendering: 4 && 
// export default function ToDo({ task, isDone, time = 0 }) {
//     return isDone && <li>Done Task: {task} Time: {time}</li>
// }

// conditon rendering: 5 ||
// export default function ToDo({ task, isDone, time = 0 }) {
//     return isDone || <li>Not Done Task: {task} Time: {time}</li>
// }

export default function ToDo({task,isDone}){
    if(isDone === true){
        return <li>Done: {task}</li>
    }else{
        return <li>Pending: {task}</li>
    }
}