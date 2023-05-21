

function expandButton() {
   var button = document.getElementById('expandButton');
   button.classList.toggle('expand');
}


fetch('https://voodoo-sandbox.myshopify.com/products.json?limit=12')
   .then(resp => {
      return resp.json();
   })
   .then( function (data) {
      result(data)
      console.log(data)
   })
   .catch( function (err) {
      console.log('error' + err)
   })

  
    function result(data) {
      const url = 'https://voodoo-sandbox.myshopify.com/products.json?limit=12';
      fetch(url)
        .then(response => response.json())
        .then(data => {
          for (let item in data['products']) {
            const itemId = `prod-name${Number(item) + 1}`;
            const itemElement = document.getElementById(itemId);
            itemElement.innerHTML = data['products'][item].title;
    
            const imgId = `card-img${Number(item) + 1}`;
            const imgElement = document.getElementById(imgId);
            imgElement.src = data['products'][item].images[0].src;
    

            const priceId = `price${Number(item) + 1}`;
            const priceElement = document.getElementById(priceId)
            priceElement.innerHTML = data['products'][item].variants[0].price + " KR"
            console.log(data['products'][item].variants[0].price);
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
    
    
    
