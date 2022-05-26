async function formatar(materia, aula, classe, casa, sm, checkbox, callback, button) {
    console.clear()

    console.log('checkbox: ' + checkbox.checked)

    if(aula.value == '') {
        alert('O campo da AULA está vazio.')
        return;
    }
    if(classe.value == '') {
        if(!checkbox.checked) {
            alert('O campo dos EC está vazio.')
            return;
        }
    }
    if(casa.value == '') {
        if(!checkbox.checked) {
            alert('O campo dos EP está vazio.')
            return;
        }
    }

    let materias_fetch = await fetch('./json/materias.json')
    let materias = await materias_fetch.json()
    
    console.log(materias)
    console.log('-------------------')
    console.log(aula)
    console.log(classe)
    console.log(casa)
    console.log(sm)
    console.log(checkbox)
    console.log(callback)

    let lowObj = new Object();
    lowObj['A' + aula.value] = {
        ec: classe.value.toUpperCase(),
        ep: casa.value.toUpperCase(),
        sm: sm.value.toUpperCase()
    }


    var json_parsed = JSON.stringify(lowObj);

    callback.innerText = json_parsed;

    console.log(json_parsed)

    button.disabled = false;
}