const resp_long = ""

let respostas = null;

function getRespostasLength() { return respostas.length; }

function generateQuestions(element, param) {

    var param_filtered = param.toUpperCase();

    respostas = param_filtered.split('')
    let respostas_length = getRespostasLength();

    element.innerHTML = '';

    console.log('generating...')

    copyToClipboard(textbox.value)
    textbox.value = ''

    var i = 0;
    while(i != respostas_length) {
        console.log('generated: ' + (i+1))
        var li = document.createElement('li')
        var a = document.createElement('a')
        var div = document.createElement('div')
        var h5 = document.createElement('h5')
        var text = document.createTextNode('Questão ' + (i+1))

        a.setAttribute('href', 'javascript: void(0);')
        a.setAttribute('onclick', `toggleResponse(${i});`)
        div.classList.add('question_box')
        h5.classList.add('question_text')
        h5.setAttribute('id', `${i}`)
        h5.setAttribute('shownResponse', false)


        element.appendChild(li)
        li.appendChild(a)
        a.appendChild(div)
        div.appendChild(h5)
        h5.appendChild(text)
        i++;
    }

    return;   
}

function toggleResponse(id) {
    var resposta = respostas[id]
    var element = document.getElementById(id)
    var shownResponse = element.getAttribute('shownresponse')

    if(shownResponse == 'false') {
        element.innerText = resposta;
        element.setAttribute('shownresponse', true)
    } else {
        element.innerText = `Questão ${id+1}`
        element.setAttribute('shownresponse', false)
    }


}