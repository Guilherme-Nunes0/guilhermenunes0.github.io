var rodada = 1;
            var pontua = 0;
            var placar = document.getElementById("placar2");
            var pergunta = document.getElementById("perg");

            var alt1 = document.getElementById("n1");
            var alt2 = document.getElementById("n2");
            var alt3 = document.getElementById("n3");
            var alt4 = document.getElementById("n4");

            var final = document.getElementById("pontfin")
            var nota = document.getElementById("nota")

            function perguntas(nn){
                if(nn == 2){
                    pergunta.innerHTML = "2 - Qual o menor e maior país do mundo?"
                    alt1.innerHTML = "Vaticano e Rússia" //Respos6a certa
                    alt2.innerHTML = "Mônaco e Canadá"
                    alt3.innerHTML = "São Marino e Índia"
                    alt4.innerHTML = "Mônaco e Canadá"
                }else if(nn == 3){
                    pergunta.innerHTML = "3 - Qual a montanha mais alta do Brasil?"
                    alt1.innerHTML = "Monte Roraima"
                    alt2.innerHTML = "Pico da Neblina"  //Respos6a certa
                    alt3.innerHTML = "Pico da Bandeira"
                    alt4.innerHTML = "Monte everest"
                }else if(nn == 4){
                    pergunta.innerHTML = "4 - Quem é o autor de “O Príncipe”?"
                    alt1.innerHTML = "Hobbes"
                    alt2.innerHTML = "Rousseau"
                    alt3.innerHTML = "Montesquieu"
                    alt4.innerHTML = "Maquiavel"  //Respos6a certa
                }else if(nn == 5){
                    pergunta.innerHTML = "5 - Que animal gruguleja?"
                    alt1.innerHTML = "Pavão"
                    alt2.innerHTML = "Garça"
                    alt3.innerHTML = "Papagaio"
                    alt4.innerHTML = "Peru" //Respos6a certa
                }else if(nn == 6){
                    pergunta.innerHTML = "6 - Em que país nasceu Clarice Lispector?"
                    alt1.innerHTML = "Brasil"
                    alt2.innerHTML = "Ucrânia" //Respos6a certa
                    alt3.innerHTML = "França"
                    alt4.innerHTML = "Rússia"
                }else if(nn == 7){
                    pergunta.innerHTML = "7 - Em que ano o homem pisou na lua?"
                    alt1.innerHTML = "1967"
                    alt2.innerHTML = "1968"
                    alt3.innerHTML = "1969" //Respos6a certa
                    alt4.innerHTML = "1970"
                }else if(nn == 8){
                    pergunta.innerHTML = "8 - Quais são as cores dos anéis olímpicos?"
                    alt1.innerHTML = "Azul, laranja, preto, vermelho e roxo"
                    alt2.innerHTML = "Azul, amarelo, preto, verde e vermelho" //Respos6a certa
                    alt3.innerHTML = "Amarelo, preto, roxo, laranja e vermelho"
                    alt4.innerHTML = "Amarelo, azul, marrom, verde e branco"
                }else if(nn == 9){
                    pergunta.innerHTML = "9 - Em qual cidade surgiu a banda The Beatles?"
                    alt1.innerHTML = "New York"
                    alt2.innerHTML = "Manchester"
                    alt3.innerHTML = "Londres"
                    alt4.innerHTML = "Liverpool" //Respos6a certa
                }else if(nn == 10){
                    pergunta.innerHTML = "10 - Qual foi o Apóstolo que ficou temporariamente cego?"
                    alt1.innerHTML = "Paulo" //Respos6a certa
                    alt2.innerHTML = "Pedro"
                    alt3.innerHTML = "João"
                    alt4.innerHTML = "Adão"
                }
            }

            function validar(n){
                if(rodada == 1){
                    if(n == 1){
                        pontua = 1;
                        placar.innerText = `Player: ${pontua}`;
                        rodada = 2;
                        perguntas(2);
                    }else{
                        placar.innerText = `Player: ${pontua}`;
                        rodada = 2;
                        perguntas(2);

                    }
                }else if(rodada == 2){
                    if(n == 1){
                        pontua += 1;
                        placar.innerText = `Player: ${pontua}`;
                        rodada = 3;
                        perguntas(3);
                    }else{
                        placar.innerText = `Player: ${pontua}`;
                        rodada = 3;
                        perguntas(3);
                    }
                }else if(rodada == 3){
                    if(n == 2){
                        pontua += 1;
                        placar.innerText = `Player: ${pontua}`;
                        rodada = 4;
                        perguntas(4);
                    }else{
                        placar.innerText = `Player: ${pontua}`;
                        rodada = 4;
                        perguntas(4);
                    }
                }else if(rodada == 4){
                    if(n == 4){
                        pontua += 1;
                        placar.innerText = `Player: ${pontua}`;
                        rodada = 5;
                        perguntas(5);
                    }else{
                        placar.innerText = `Player: ${pontua}`;
                        rodada = 5;
                        perguntas(5);
                    }
                }else if(rodada == 5){
                    if(n == 4){
                        pontua += 1;
                        placar.innerText = `Player: ${pontua}`;
                        rodada = 6;
                        perguntas(6);
                    }else{
                        placar.innerText = `Player: ${pontua}`;
                        rodada = 6;
                        perguntas(6);
                    }
                }else if(rodada == 6){
                    if(n == 2){
                        pontua  += 1;
                        placar.innerText = `Player: ${pontua}`;
                        rodada = 7;
                        perguntas(7);
                    }else{
                        placar.innerText = `Player: ${pontua}`;
                        rodada = 7;
                        perguntas(7);
                    }
                }else if(rodada == 7){
                    if(n == 3){
                        pontua  += 1;
                        placar.innerText = `Player: ${pontua}`;
                        rodada = 8;
                        perguntas(8);
                    }else{
                        placar.innerText = `Player: ${pontua}`;
                        rodada = 8;
                        perguntas(8);
                    }
                }else if(rodada == 8){
                    if(n == 2){
                        pontua  += 1
                        placar.innerText = `Player: ${pontua}`;
                        rodada = 9;
                        perguntas(9);
                    }else{
                        placar.innerText = `Player: ${pontua}`;
                        rodada = 9;
                        perguntas(9);
                    }
                }else if(rodada == 9){
                    if(n == 4){
                        pontua  += 1
                        placar.innerText = `Player: ${pontua}`;
                        rodada = 10;
                        perguntas(10);
                    }else{
                        placar.innerText = `Player: ${pontua}`;
                        rodada = 10;
                        perguntas(10);
                    }
                }else if(rodada == 10){
                    if(n == 1){
                        pontua  += 1
                        placar.innerText = `Player: ${pontua}`;
                        rodada = 11;
                        finalizar();
                    }else{
                        placar.innerText = `Player: ${pontua}`;
                        rodada = 11;

                        finalizar();
                    }
                }
            }


            function finalizar(){
                console.log("Deu certo")
                pergunta.innerHTML = "Você chegou ao fim!"

                nota.style.display = "block"
                alt1.style.display = "none"
                alt2.style.display = "none"
                alt3.style.display = "none"
                alt4.style.display = "none"

                
                final.innerHTML = `Sua pontuação foi: ${pontua}`
                
            }