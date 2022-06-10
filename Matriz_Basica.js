    function calculodaMatriz(numero){
        numero = parseInt(numero);
        var linha = numero;
        var colunas = linha;
        var matriz = new Array(colunas);
        var matriz2 = new Array(colunas);

        for(var i = 0; i < colunas; i++){

            matriz[i] = new Array(linha);
            matriz2[i] = new Array(linha);
        }
        for(var x = 0; x < linha; x++){
            for (var y = 0; y < colunas; y++){

                matriz [x][y] = (Math.round(Math.random () * 20))
            }   
        }

        console.log(matriz);
    }

    calculodaMatriz(3)
