// import axios from 'axios'
//
// export const ListAPI = {
//     getListApi() {
//         return (
//             axios.get('https://trello-we.firebaseio.com/lists.json')
//                 .then(response => {
//                     return response.data
//                 })
//         )
//     },
//     putListApi(id, newObj) {
//         return (
//             axios.put(`https://trello-we.firebaseio.com/lists/${id}.json`, newObj
//             ).then(response => {
//                 return response.data
//             })
//         )
//     },
//     postListApi(title) {
//         return (
//             axios.post(`https://trello-we.firebaseio.com/lists.json/`,
//                 {
//                     listTitle: title,
//                     date: new Date(),
//                     textArray: [{id: false, text: false}]
//                 }).then(response => {
//                 return response.data
//             })
//         )
//     },
//     deleteListApi(listId) {
//         return (
//             axios.delete(`https://trello-we.firebaseio.com/lists/${listId}.json`)
//         )
//     },
// };