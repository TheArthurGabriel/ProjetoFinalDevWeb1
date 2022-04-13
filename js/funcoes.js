function validar() {

    if (document.getElementById('nomeForm').value == "" || document.getElementById('teleForm').value == "" || document.getElementById('endeForm').value == "" || document.getElementById('emailForm').value == "" || document.getElementById('texForm').value == "") {
        document.getElementById('val').innerHTML = "Preencha todos os campos."

        if (document.getElementById('nomeForm').value == "" && document.getElementById('teleForm').value == "" && document.getElementById('endeForm').value == "" && document.getElementById('emailForm').value == "" && document.getElementById('texForm').value == "") {
            document.getElementById('teleForm').style.border = 'solid red 1px'
            document.getElementById('endeForm').style.border = 'solid red 1px'
            document.getElementById('texForm').style.border = 'solid red 1px'
            document.getElementById('emailForm').style.border = 'solid red 1px'
            document.getElementById('nomeForm').style.border = 'solid red 1px'

        } else if (document.getElementById('nomeForm').value == "") {
            document.getElementById('val').innerHTML = "Preencha o campo 'Nome'."
            document.getElementById('nomeForm').style.border = 'solid red 1px'
            document.getElementById('teleForm').style.border = 'solid black 1px'
            document.getElementById('endeForm').style.border = 'solid black 1px'
            document.getElementById('texForm').style.border = 'solid black 1px'
            document.getElementById('emailForm').style.border = 'solid black 1px'

        } else if (document.getElementById('teleForm').value == "") {
            document.getElementById('val').innerHTML = "Preencha o campo 'Telefone'."
            document.getElementById('teleForm').style.border = 'solid red 1px'
            document.getElementById('endeForm').style.border = 'solid black 1px'
            document.getElementById('texForm').style.border = 'solid black 1px'
            document.getElementById('emailForm').style.border = 'solid black 1px'
            document.getElementById('nomeForm').style.border = 'solid black 1px'

        } else if (document.getElementById('endeForm').value == "") {
            document.getElementById('val').innerHTML = "Preencha o campo 'Endereço'."
            document.getElementById('endeForm').style.border = 'solid red 1px'
            document.getElementById('teleForm').style.border = 'solid black 1px'
            document.getElementById('texForm').style.border = 'solid black 1px'
            document.getElementById('emailForm').style.border = 'solid black 1px'
            document.getElementById('nomeForm').style.border = 'solid black 1px'

        } else if (document.getElementById('emailForm').value == "") {
            document.getElementById('val').innerHTML = "Preencha o campo 'Email'."
            document.getElementById('emailForm').style.border = 'solid red 1px'
            document.getElementById('teleForm').style.border = 'solid black 1px'
            document.getElementById('endeForm').style.border = 'solid black 1px'
            document.getElementById('texForm').style.border = 'solid black 1px'
            document.getElementById('nomeForm').style.border = 'solid black 1px'

        } else if (document.getElementById('texForm').value == "") {
            document.getElementById('val').innerHTML = "Descreva sua situação."
            document.getElementById('texForm').style.border = 'solid red 1px'
            document.getElementById('teleForm').style.border = 'solid black 1px'
            document.getElementById('endeForm').style.border = 'solid black 1px'
            document.getElementById('emailForm').style.border = 'solid black 1px'
            document.getElementById('nomeForm').style.border = 'solid black 1px'
        }

    } else {
        document.getElementById('teleForm').style.border = 'solid black 1px'
        document.getElementById('endeForm').style.border = 'solid black 1px'
        document.getElementById('texForm').style.border = 'solid black 1px'
        document.getElementById('emailForm').style.border = 'solid black 1px'
        document.getElementById('nomeForm').style.border = 'solid black 1px'
        document.getElementById('val').innerHTML = ""
    }


}