let celular1={
    foto: 'S23.png',
    marca:'samsung',
    modelo:'galaxy S23',
    armazenamento:'512Gb',
    ram:'12Gb',
    processador:'Qualcomm Snapdragon',
    tipoTela:'Ips',
    cor:'branco',
    bateria:'5.000mAh',
    preco:'3000',
}

let celular2={
    foto: 'edge.jpeg',
    marca:'Motorola',
    modelo:'Edge',
    armazenamento:'256GB',
    ram:'6.0GB',
    processador:'Qualcomm snapdragon 765',
    tipoTela:'Ltpo AMOled',
    cor:'vermelho',
    bateria:'E6 plus',
    preco:'1900',
}

let celular3={
    foto:'s23azul.webp',
    marca:'samsung',
    modelo:'Galaxy S23',
    armazenamento:'512gb',
    ram:'12gb',
    processador: 'snapragon',
    tipoTela:'ips',
    cor:'azul',
    bateria:'500Mah',
    preco:'2400',
}

let celular4={
    foto: '14pro.jpeg',
    marca:'xaomi',
    modelo:'14 pro',
    armazenamento:'256GB',
    ram:'8GB',
    processador:'Snapdragon 8 Gen 3',
    tipoTela:'LTP AMOLED',
    cor:'branco',
    bateria:'lipo',
    preco:'2502'
}

let celular5={
    foto: 's63.webp',
    marca:'SAMSUNG',
    modelo:'563 ULRA',
    armazenamento:'512GB',
    ram:'12GB',
    processador:'QUALCOM SNAPDRGON 8',
    tipoTela:'DYNAMIC AMOLED 2X',
    cor:'AZUL',
    bateria:'LIPO',
    preco:'5039'

}

let listaDecelulares = []
listaDecelulares.push(celular1);
listaDecelulares.push(celular2);
listaDecelulares.push(celular3);
listaDecelulares.push(celular4);
listaDecelulares.push(celular5);



for(let i = 0; i < listaDecelulares.length; i++){
    console.log(`${listaDecelulares[i].marca} ${listaDecelulares[i].armazenamento} ${listaDecelulares[i].ram} ${listaDecelulares[i].cor} -->R$ ${listaDecelulares[i].preco}`)
    document.write(`

    <div class="card">
        <img class="foto" src="img/${listaDecelulares[i].foto}">
        <p class="nome"> ${listaDecelulares[i].marca} ${listaDecelulares[i].modelo} </p>
        <p class="armazenamento"> ${listaDecelulares[i].armazenamento} </p>
        <p class="ram"> ${listaDecelulares[i].ram} </p>
        <p class="cor"> ${listaDecelulares[i].cor} </p>
        <p class="processador"> ${listaDecelulares[i].processador}</p>
        <p class="tela"> ${listaDecelulares[i].tipoTela}</p>
        <p class="bateria">${listaDecelulares[i].bateria}</p>
        <p class="preco"> R$ ${listaDecelulares[i].preco} </p>

    </div>
    `);
}
