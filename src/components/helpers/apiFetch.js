const arrItems = [
    {
      id: 'brocoli-burger',
      title: 'Burger de Brocoli',
      description: 'string',
      price: 100,
      stock: 1,
      pictureUrl: "https://vegg-burger.vercel.app/assets/burger-brocoli-300x300.png",
    },
    {
      id: 'berenjena-burger',
      title: 'Burger de Berenjena',
      description: 'string',
      price: 200,
      stock: 1,
      pictureUrl: "https://vegg-burger.vercel.app/assets/burger-berenjena-300x300.png",
    },
    {
      id: 'calabaza-burger',
      title: 'Burger de Calababaza',
      description: 'string',
      price: 60,
      stock: 1,
      pictureUrl: "https://vegg-burger.vercel.app/assets/burger-calabaza-300x300.png",
    },
    {
      id: 'espinaca-burger',
      title: 'Burger de Espinaca',
      description: 'string',
      price: 70,
      stock: 1,
      pictureUrl: "https://vegg-burger.vercel.app/assets/burger-espinaca-300x300.png",
    },
  ];


//Promesa  simulando API

export const apiFetch = new Promise ((resolve, reject) => {
    setTimeout(()=>{
      if (arrItems.length>0 ) {
        resolve(arrItems)
      } else {
        reject("Fatal Error!")
      }
      // arrItems>0 ? resolve("Success!")  : reject("Fatal Error!") 
    },2000)
    
  })
