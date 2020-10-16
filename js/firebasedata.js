// $(function () {
//     var db = firebase.firestore();
//     db.collection("movie")
//         .get().then((querySnapshot) => {
//             querySnapshot.forEach((doc) => {
//                 var card = ` <div class="card" style="width: 18rem;">
//         <img class="card-img-top" src="${doc.data().Poster}" alt="Card image cap">
//         <div class="card-body">
//           <h5 class="card-title">${doc.data().Title}</h5>
//           <p class="card-text">${doc.data().Detail}</p>
//           <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//       </div>`;
//                 $("#list").append(card);
//             });
//         })
// });