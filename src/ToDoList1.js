// import React, { useState } from 'react';
// // this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
// /** @jsx jsx */
// import { css, jsx } from '@emotion/core';

// export default function ToDoList1() {
//   const [aufgaben, setAufgaben] = useState('');
//   console.log(toDo);

//   return (
//     <div>
//       <h1
//         css={css`
//           color: darkblue;
//           display: flex;
//           justify-content: center;
//           align-items: top;
//           margin-top: 50px;
//         `}
//       >
//         This is a ToDo List
//       </h1>
//       <form
//         onSubmit={(event) =>
//           aufgaben(event.target.value) || event.preventDefault()
//         }
//       >
//         <input
//           css={css`
//             color: darkblue;
//             display: flex;
//             justify-content: center;
//             width: 300px;
//             height: 50px;
//           `}
//           type="text"
//           name="What do you have to do?"
//           placeholder="What do you have to do?"
//           // onChange={(event) => aufgaben(event.target.value)}
//         />

//         <input type="submit" value="submit" />
//       </form>

//       <div
//         css={css`
//           color: red;
//         `}
//       >
//         {toDo}
//       </div>
//     </div>
//   );
// }
