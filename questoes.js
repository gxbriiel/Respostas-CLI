const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.clear();

console.log('')
console.log('                 _              _   _          _ ')
console.log('                | |            (_) (_)        | |')
console.log('   __ _  __  __ | |__    _ __   _   _    ___  | |')
console.log('  / _` | \\ \\/ / | \'_ \  | \'__| | | | |  / _ \\ | |')
console.log(' | (_| |  >  <  | |_) | | |    | | | | |  __/ | |')
console.log('  \\__, | /_/\\_\\ |_.__/  |_|    |_| |_|  \\___| |_|')
console.log('   __/ |                                         ')
console.log('  |___/                                          ')
console.log('')
console.log('# SISTEMA DE RESPOSTAS')
console.log('')
console.log('# Discord: Gabriiel#1212')
console.log('! Qualquer erro reportar ao desenvolvedor.')
console.log('')
console.log('# O GABARITO PODE ESTAR ERRADO ENTÃO CASO TENHA DÚVIDAS VERIFIQUE NA SUA APOSTILA A RESPOSTA!')
console.log('# NEM SEMPRE TODAS AS RESPOSTAS ESTARAM AQUI, VERIFIQUE AS QUESTÕES ABERTAS NA SUA APOSTILA!')
console.log('# ATUALIZADO DE ACORDO COM O TEMPO E DISPONIBILIDADE DO DESENVOLVEDOR DO PROGRAMA!')
console.log('')

let materias = {
    portugues_1: {
        nome_composto: 'Português 1',
        aulas: {
            A1: {
                ec: 'ABDDAC',
                ep: 'EDBCCBBDBC',
                sm: ''
            },
            A2: {
                ec: 'DABCCC',
                ep: 'BACDEAABCC',
                sm: ''
            },
            A3: {
                ec: 'CBDDD',
                ep: 'ECCCEDECDB',
                sm: ''
            },
        }
    },
    portugues_2: {
        nome_composto: 'Português 2',
        aulas: {
            A1: {
                ec: 'AABDA',
                ep: 'CCCCBEABEAE',
                sm: ''
            },
            A2: {
                ec: 'DEABD',
                ep: 'ECBDEEEECC',
                sm: ''
            },
            A3: {
                ec: 'EACAC',
                ep: 'BADABADBAE',
                sm: ''
            },
        }
    },
    historia_1: {
        nome_composto: 'História 1',
        aulas: {
            A1: {
                ec: 'ECCBD',
                ep: 'CABCBBBBDD',
                sm: ''
            },
            A2: {
                ec: 'AACED',
                ep: 'BDBEEBBCDD',
                sm: ''
            },
            A3: {
                ec: 'ADCBD',
                ep: 'CBCCABDADA',
                sm: ''
            },
        }
    },
    historia_2: {
        nome_composto: 'História 2',
        aulas: {
            A1: {
                ec: 'AEDBC',
                ep: 'AECBCDBABC',
                sm: ''
            },
            A2: {
                ec: 'EBCDA',
                ep: 'EBBCACBCAD',
                sm: ''
            },
            A3: {
                ec: 'ADEEC',
                ep: 'CCCBBBEEDB',
                sm: ''
            },
        }
    },
    historia_3: {
        nome_composto: 'História 3',
        aulas: {
            A1_2: {
                ec: 'BDCCA',
                ep: 'EBADABEBBA',
                sm: '',
                nome_de_aula: 'Aulas 1 e 2'
            },
            A3_4: {
                ec: 'DAEAA',
                ep: 'BDCCDEAEDE',
                sm: '',
                nome_de_aula: 'Aulas 3 e 4'
            },
        }
    },
    historia_4: {
        nome_composto: 'História 4',
        aulas: {
            A1: {
                ec: 'CEDEE',
                ep: 'DDBDA',
                sm: 'ACCAB',
                nome_de_aula: ''
            },
            A2: {
                ec: 'AEDEA',
                ep: 'CABEDEBCCD',
                sm: '',
                nome_de_aula: ''
            },
            A3: {
                ec: 'CBEEB',
                ep: 'DACCDCACDA',
                sm: '',
                nome_de_aula: ''
            },
        }
    },
    filosofia_1: {
        nome_composto: 'Filosofia',
        aulas: {
            A1: {
                ec: 'EADDB',
                ep: 'ACECAECCBD',
                sm: '',
                nome_de_aula: ''
            },
            A2: {
                ec: 'ACAAC',
                ep: 'CEDCEAACBA',
                sm: '',
                nome_de_aula: ''
            },
            A3: {
                ec: 'BAAEC',
                ep: 'DDCECCCAEA',
                sm: '',
                nome_de_aula: ''
            },
        }
    },
    geografia_1: {
        nome_composto: 'Geografia 1',
        aulas: {
            A1: {
                ec: 'AACBE',
                ep: 'DEABBCBEDB',
                sm: '',
                nome_de_aula: ''
            },
            A2: {
                ec: 'EEEAD',
                ep: 'CDEEBDEBBA',
                sm: '',
                nome_de_aula: ''
            },
            A3: {
                ec: 'EDEDB',
                ep: 'AABCCCEABE',
                sm: '',
                nome_de_aula: ''
            },
        }
    },
    geografia_2: {
        nome_composto: 'Geografia 2',
        aulas: {
            A1: {
                ec: 'DDDDE',
                ep: 'ACCCEBABCC',
                sm: '',
                nome_de_aula: ''
            },
            A2: {
                ec: 'DBADE',
                ep: 'AACEAADACC',
                sm: '',
                nome_de_aula: ''
            },
            A3: {
                ec: 'EDCCD',
                ep: 'CBDBBCBBEA',
                sm: '',
                nome_de_aula: ''
            },
        }
    },
    biologia_1: {
        nome_composto: 'Biologia 1',
        aulas: {
            A1: {
                ec: 'N',
                ep: 'N',
                sm: 'N',
                nome_de_aula: ''
            },
            A2_3: {
                ec: 'ABBBDDE',
                ep: 'EBDBDBCAEEC*ECDDADCCCC',
                sm: '',
                nome_de_aula: 'Aulas 2 e 3'
            },
        }
    },
    bio_2: {
        nome_composto: 'Biologia 2',
        aulas: {
            A1_2: {
                ec: 'EDCAA',
                ep: 'BEAAADCDBACBAACBABC',
                sm: '',
                nome_de_aula: 'Aulas 1 e 2'
            },
            A3: {
                ec: 'DEBCE',
                ep: 'BABAAADCBE',
                sm: '',
                nome_de_aula: ''
            },
        }
    },
    bio_3: {
        nome_composto: 'Biologia 3',
        aulas: {
            A1: {
                ec: '',
                ep: 'EBBCDBACBB',
                sm: '',
                nome_de_aula: ''
            },
            A2_3: {
                ec: 'EBCAD',
                ep: 'CCACEABBBA',
                sm: '',
                nome_de_aula: 'Aulas 2 e 3'
            },
        }
    },
    bio_4: {
        nome_composto: 'Biologia 4',
        aulas: {
            A1_2: {
                ec: 'BBCDE',
                ep: 'BCCCACAAEDACDDC',
                sm: '',
                nome_de_aula: 'Aulas 1 e 2'
            },
            A3: {
                ec: 'CAAEA',
                ep: 'BADEABCABB',
                sm: '',
                nome_de_aula: ''
            },
        }
    },
    bio_5: {
        nome_composto: 'Biologia 5',
        aulas: {
            A1: {
                ec: 'CECCAC',
                ep: 'ACCCDEDDDECCDDDC',
                sm: '',
                nome_de_aula: ''
            },
            A2: {
                ec: 'CABED',
                ep: 'DEBEBDDEAEBCCAD',
                sm: '',
                nome_de_aula: ''
            },
            A3: {
                ec: 'CBDBA',
                ep: 'DBADCBDEEDDDBEABABA',
                sm: '',
                nome_de_aula: ''
            },
        }
    },
    qui_1: {
        nome_composto: 'Química 1',
        aulas: {
            A1_2: {
                ec: 'EDABB',
                ep: 'CBDDDDBAEAD',
                sm: 'EA',
                nome_de_aula: 'Aulas 1 e 2'
            },
            A3: {
                ec: 'ADCCB',
                ep: 'CABBCABAECBC',
                sm: 'AC',
                nome_de_aula: ''
            },
        }
    },
    qui_2: {
        nome_composto: 'Química 2',
        aulas: {
            A1_2: {
                ec: 'AACDA',
                ep: 'ABCCDDBBCCAD',
                sm: 'CA',
                nome_de_aula: 'Aulas 1 e 2'
            },
            A3: {
                ec: 'ACCEB',
                ep: 'EABCCBECAC',
                sm: 'BA',
                nome_de_aula: ''
            },
        }
    },
    qui_3: {
        nome_composto: 'Química 3',
        aulas: {
            A1_2: {
                ec: 'BEBEE',
                ep: 'CCDADABDADACDACDCDD',
                sm: '',
                nome_de_aula: 'Aulas 1 e 2'
            },
            A3: {
                ec: 'CAADA',
                ep: 'ECDCABDDADEBBECAEBBBCCDDD',
                sm: '',
                nome_de_aula: ''
            },
        }
    },
    qui_4: {
        nome_composto: 'Química 4',
        aulas: {
            A1: {
                ec: 'N',
                ep: 'N',
                sm: 'N',
                nome_de_aula: ''
            },
            A2: {
                ec: 'CAAEBB',
                ep: 'DCDBBAADBAEB',
                sm: 'ED',
                nome_de_aula: ''
            },
            A3: {
                ec: 'CECBA',
                ep: 'CCDADEEDAD',
                sm: 'EA',
                nome_de_aula: ''
            },
        }
    },
    qui_5: {
        nome_composto: 'Química 5',
        aulas: {
            A1: {
                ec: 'N',
                ep: 'N',
                sm: 'N',
                nome_de_aula: ''
            },
            A2: {
                ec: '',
                ep: 'DCEDCAEBCEEABCABBAEC',
                sm: 'CCCAB',
                nome_de_aula: ''
            },
            A3: {
                ec: 'AADCB',
                ep: 'ADAEDDBCADBEDCEEDD',
                sm: 'ACDCD',
                nome_de_aula: ''
            },
        }
    },
    fis_1: {
        nome_composto: 'Física 1',
        aulas: {
            A1: {
                ec: 'A*CDA',
                ep: 'DBAABCDDABB',
                sm: '',
                nome_de_aula: ''
            },
            A2: {
                ec: 'DA*AC',
                ep: 'ACECADABBB',
                sm: '',
                nome_de_aula: ''
            },
            A3: {
                ec: 'AADBDB',
                ep: 'DABACCEDDCB',
                sm: '',
                nome_de_aula: ''
            },
        }
    },
    fis_2: {
        nome_composto: 'Física 2',
        aulas: {
            A1: {
                ec: 'N',
                ep: 'N',
                sm: 'N',
                nome_de_aula: ''
            },
            A2: {
                ec: 'N',
                ep: 'N',
                sm: 'N',
                nome_de_aula: ''
            },
            A3: {
                ec: 'ADBAEB',
                ep: 'BBCDDCDDCAAAEAEEDBA',
                sm: '',
                nome_de_aula: ''
            },
        }
    },
    fis_3: {
        nome_composto: 'Física 3',
        aulas: {
            A1: {
                ec: 'CEBCB',
                ep: 'CDBBABDAAD',
                sm: '',
                nome_de_aula: ''
            },
            A2: {
                ec: 'DCDAD',
                ep: 'DAEAAACDDDCBD',
                sm: '',
                nome_de_aula: ''
            },
            A3: {
                ec: 'AE*DB',
                ep: 'EECDDDAABBCE',
                sm: '',
                nome_de_aula: ''
            },
        }
    },
    fis_4: {
        nome_composto: 'Física 4',
        aulas: {
            A1: {
                ec: 'DCDCB',
                ep: 'CAEECBDCACBC',
                sm: '',
                nome_de_aula: ''
            },
            A2: {
                ec: 'BCCCA',
                ep: 'DCACACCDCADA',
                sm: 'E',
                nome_de_aula: ''
            },
            A3: {
                ec: 'CECBBE',
                ep: 'DCCCEDACDBBB',
                sm: 'A',
                nome_de_aula: ''
            },
        }
    },
    fis_5: {
        nome_composto: 'Física 5',
        aulas: {
            A1: {
                ec: 'N',
                ep: 'N',
                sm: 'N',
                nome_de_aula: ''
            },
            A2: {
                ec: 'CDBEA',
                ep: 'BDCBBEBDCBCC',
                sm: 'C',
                nome_de_aula: ''
            },
            A3: {
                ec: 'EBBEE',
                ep: 'CCAADBCDCDDC',
                sm: '',
                nome_de_aula: ''
            },
        }
    },
    mat_1: {
        nome_composto: 'Matemática 1',
        aulas: {
            A1_2: {
                ec: 'BDCBE',
                ep: '*DABACABDAEAEBBEADCD',
                sm: '',
                nome_de_aula: 'Aulas 1 e 2'
            },
            A3: {
                ec: 'EEDAA',
                ep: 'CCECEDEBBCDDEDAAABCC',
                sm: '',
                nome_de_aula: ''
            },
        }
    },
    mat_2: {
        nome_composto: 'Matemática 2',
        aulas: {
            A1: {
                ec: 'BCCABE',
                ep: 'CDCABDCDCBCECEBABAEAEDDEDDDCEDDEA',
                sm: '',
                nome_de_aula: ''
            },
            A2: {
                ec: 'EAACC',
                ep: 'EBCDCCCEBCCEBBBDAE',
                sm: '',
                nome_de_aula: ''
            },
            A3: {
                ec: 'EEDAC',
                ep: 'BDDBBABCACAAAEBD',
                sm: '',
                nome_de_aula: ''
            },
        }
    },
    mat_3: {
        nome_composto: 'Matemática 3',
        aulas: {
            A1: {
                ec: 'CDBDE',
                ep: 'CDDCCCBDBCBDBAC',
                sm: '',
                nome_de_aula: ''
            },
            A2: {
                ec: 'CAACD',
                ep: 'CDBDCBACCBECDCC',
                sm: '',
                nome_de_aula: ''
            },
            A3: {
                ec: 'ABDBE',
                ep: 'CECBDBCBDEACCBE',
                sm: '',
                nome_de_aula: ''
            },
        }
    },
    mat_4: {
        nome_composto: 'Matemática 4',
        aulas: {
            A1: {
                ec: 'DACB',
                ep: 'CEACECDDA**EACB',
                sm: '',
                nome_de_aula: ''
            },
            A2_3: {
                ec: 'A**DD*B',
                ep: 'EDDCECCDEEDC**AE*C*ADDCDA',
                sm: '',
                nome_de_aula: 'Aulas 2 e 3'
            },
        }
    },
}

let materias_size = Object.keys(materias).length;

let i = 0;
while(materias_size != i) {
    console.log(`${i}. ${materias[Object.keys(materias)[i]].nome_composto}`)
    i++;
}


rl.question('\nEscolha uma matéria: ', function(choosen_materia_number) {
    console.clear();
    let choosen_materia = materias[Object.keys(materias)[choosen_materia_number]]
    let choosen_materia_aulas = choosen_materia.aulas
    let choosen_materia_aulas_size = Object.keys(choosen_materia_aulas).length;
    console.log('# ' + choosen_materia.nome_composto)
    console.log(`# Total de aulas: ${choosen_materia_aulas_size}\n`);

    let e = 0;
    let j = 0;
    let aconteceu = 0;
    while(choosen_materia_aulas_size != e) {
        j = e + aconteceu
        
        let nda = choosen_materia_aulas[Object.keys(choosen_materia_aulas)[e]].nome_de_aula;
        if(nda != undefined && nda != null && nda != '') {
            aconteceu++;
            console.log(`${e+1}. ${nda}`)
        } else {
            console.log(`${e+1}. Aula ${j+1}`) 
        }
        e++;
    }

    rl.question('\nEscolha uma aula: ', function(choosen_aula_number) {
        // console.log(choosen_materia_aulas)
        let choosen_aula = choosen_materia_aulas[Object.keys(choosen_materia_aulas)[choosen_aula_number - 1]]

        console.log('\n1. Exercícios de Classe')
        console.log('2. Exercícios Propostos')
        console.log('3. SM')

        rl.question('\nEscolha um gabarito: ', async function(choosen_gabarito_number) {
            let choosen_gabarito = "";
            switch(choosen_gabarito_number) {
                case '1':
                    choosen_gabarito = choosen_aula[Object.keys(choosen_aula)[0]];
                    break;
                case '2':
                    choosen_gabarito = choosen_aula[Object.keys(choosen_aula)[1]];
                    break;
                case '3':
                    choosen_gabarito = choosen_aula[Object.keys(choosen_aula)[2]];
                    break;
            }

            await startup(choosen_gabarito);
        })

    })
})

function startup(gabarito) {

    // 'abcde'
    let respostas = gabarito.split('')

    rl.question('\nNúmero da questão: ', function(i) {
        if(i == 0) {
            rl.close();
            return;
        }
        if(i > respostas.length) {
            console.log('O valor ultrapassa o número de questões.')
            rl.close();
            return;
        }
        console.log(`A resposta é o item: ${respostas[i - 1]}\n`)
        startup(gabarito);
    })
}

rl.on('close', function () {
    console.log('\nFIM!!!\n');
    process.exit(0);
});
