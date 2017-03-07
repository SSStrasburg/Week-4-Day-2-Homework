console.log( 'line 7 in main.js, this means that main.js was pulled into index.html properly');



let promise = fetch(
  'https://api.github.com/users/addyosmani/orgs',

  {
    method:'GET',
    headers: {
      Authorization: 'token ***********************************'
    }
  }
);


promise.then( function handleResponse( responseObject ){
  console.log(responseObject.status);

  if (responseObject.status > 199 && responseObject.status < 300){

     responseObject.json().then( function printData(orgsData){
       console.log( orgsData );

       orgsData.forEach( function generateListItem (org) {
         console.log(org.login, org.avatar_url);
         // make tag, make tagname,

         let listItem = document.createElement('li');
         let imgItem = document.createElement('img');
         imgItem.setAttribute('src', org.avatar_url);
         listItem.appendChild(imgItem);



          let headerItem = document.createElement('h3'); // <h3></h3>
          headerItem.innerText = org.login;
          listItem.appendChild(headerItem);  //puts h3 as a child to ul

          document.querySelector('#organizations ul').appendChild(listItem);

       });

     } );
  } else {

    console.log( 'There was a problem', responseObject.status);

  }
});
