let celular1 = {
    foto: "img/iphone13.png",
    marca: "Marca: Apple",
    modelo: "Modelo: iPhone 13",
    armazenamento: "Armazenamento: 128GB",
    ram: "Ram: 6GB",
    processador: "Processador: Apple A15 Bionic",
    tipoTela: "Tela: OLED",
    cor: "Cor: Azul",
    bateria: "Bateria: 4352 mAh",
    preco: 9000,
  };
  let celular2 = {
    foto: "img/samsung.png",
    marca: "Marca: Samsung",
    modelo: "Modelo: Galaxy S21",
    armazenamento: "Armazenamento: 256GB",
    ram: "Ram: 8GB",
    processador: "Processador: Exynos 2100",
    tipoTela: "Tela: AMOLED",
    cor: "Cor: Preto",
    bateria: "Bateria: 4000 mAh",
    preco: 1100,
  };
  let celular3 = {
    foto: "img/googlepixel.png",
    marca: "Marca: Google",
    modelo: "Modelo: Pixel 6",
    armazenamento: "Armazenamento: 128GB",
    ram: "RAM: 8GB",
    processador: "Processador: Google Tensor",
    tipoTela: "Tela: AMOLED",
    cor: "Cor: Branco",
    bateria: "Bateria: 4614 mAh",
    preco: 1200,
  };
  let celular4 = {
    foto: "img/oneplus.png",
    marca: "Marca: OnePlus",
    modelo: "Modelo: 9 Pro",
    armazenamento: "Armazenamento: 256GB",
    ram: "RAM: 12GB",
    processador: "Processador: Snapdragon 888",
    tipoTela: "Tela: AMOLED",
    cor: "Cor: Verde",
    bateria: "Bateria: 4500 mAh",
    preco: 1300,
  };
  let celular5 = {
    foto: "img/mi11.png",
    marca: "Marca: Xiaomi",
    modelo: "Modelo: Mi 11",
    armazenamento: "Armazenamento: 128GB",
    ram: "RAM: 8GB",
    processador: "Processador: Snapdragon",
    tipoTela: "Tela: AMOLED",
    cor: "Cor: Rosa",
    bateria: "Bateria: 5000 mAh",
    preco: 1400,
  };
  let celular6 = {
    foto: "img/huawei.png",
    marca: "Marca: Huawei",
    modelo: "Modelo: P40 Pro",
    armazenamento: "Armazenamento: 256GB",
    ram: "RAM: 8GB",
    processador: "Processador: Kirin 990",
    tipoTela: "Tela: OLED",
    cor: "Cor: Prata",
    bateria: "Bateria: 4200 mAh",
    preco: 1500,
  };
  let celular7 = {
    foto: "img/sony.png",
    marca: "Marca: Sony",
    modelo: "Modelo: Xperia 1 III",
    armazenamento: "Armazenamento: 256GB",
    ram: "RAM: 12GB",
    processador: "Processador: Snapdragon 888",
    tipoTela: "Tela: OLED",
    cor: "Cor: Roxo",
    bateria: "Bateria: 4500 mAh",
    preco: 1600,
  };
  
  //Sem FOR___________________________________________________________
  
  console.log(
    `${celular1.marca} ${celular1.modelo} ${celular1.armazenamento}GB ${celular1.ram} ${celular1.cor} ${celular1.preco}`
  );
  console.log(
    `${celular2.marca} ${celular2.modelo} ${celular2.armazenamento}GB ${celular2.ram} ${celular2.cor} ${celular2.preco}`
  );
  console.log(
    `${celular3.marca} ${celular3.modelo} ${celular3.armazenamento}GB ${celular3.ram} ${celular3.cor} ${celular3.preco}`
  );
  console.log(
    `${celular4.marca} ${celular4.modelo} ${celular4.armazenamento}GB ${celular4.ram} ${celular4.cor} ${celular4.preco}`
  );
  console.log(
    `${celular5.marca} ${celular5.modelo} ${celular5.armazenamento}GB ${celular5.ram} ${celular5.cor} ${celular5.preco}`
  );
  console.log(
    `${celular6.marca} ${celular6.modelo} ${celular6.armazenamento}GB ${celular6.ram} ${celular6.cor} ${celular6.preco}`
  );
  console.log(
    `${celular7.marca} ${celular7.modelo} ${celular7.armazenamento}GB ${celular7.ram} ${celular7.cor} ${celular7.preco}`
  );
  
  let listaDeCelulares = [];
  listaDeCelulares.push(celular1);
  listaDeCelulares.push(celular2);
  listaDeCelulares.push(celular3);
  listaDeCelulares.push(celular4);
  listaDeCelulares.push(celular5);
  listaDeCelulares.push(celular6);
  listaDeCelulares.push(celular7);
  
  console.log(
    "Celulares com FOR_________________________________________________________________________________"
  );
  
  for (let i = 0; i < listaDeCelulares.length; i++) {
    console.log(
      `${listaDeCelulares[i].marca} ${listaDeCelulares[i].modelo} ${listaDeCelulares[i].armazenamento}GB ${listaDeCelulares[i].ram} ${listaDeCelulares[i].processador}  ${listaDeCelulares[i].tipoTela}  ${listaDeCelulares[i].bateria}${listaDeCelulares[i].cor} ${listaDeCelulares[i].preco}`
    );
  
    document.write(`<div class="card">
  
      <img src="${listaDeCelulares[i].foto}" alt="" height: auto;>
      <p class="nome">${listaDeCelulares[i].marca} ${listaDeCelulares[i].modelo}</p>
      <p class="armazenamento">${listaDeCelulares[i].armazenamento}</p>
      <p class="processador">${listaDeCelulares[i].processador}</p>
      <p class="tela">${listaDeCelulares[i].tipoTela}</p>
      <p class="ram">${listaDeCelulares[i].ram}</p>
      <p class="cor">${listaDeCelulares[i].cor}</p>
      <p class="bateria">${listaDeCelulares[i].bateria}</p>
      <p class="preco"> R$ ${listaDeCelulares[i].preco}<p>
      </div>
    `);
  }