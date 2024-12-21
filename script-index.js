const pass1 = document.getElementById("pass1")
const pass2 = document.getElementById("pass2")
const submit = document.getElementById("pass3")
const message1 = document.getElementById("message1")
const message2 = document.getElementById("message2")
const hint1 = document.getElementById("hint1")
let hint_nr = 0

function hint(){
    hint_nr++

    if(hint_nr == 1)
        hint1.innerHTML = '2 - "Czy mogę zostać twoim chłopakiem?"'
    if(hint_nr == 2)
        hint1.innerHTML = "1 - Pierwsza wiadomość na mess"
    if(hint_nr == 3)
        hint1.innerHTML = "xx.xx.xxxx"
    if(hint_nr == 4)
    {
        hint1.innerHTML = 'Nie żartuj że nie wiesz jeszcze po tych podpowiedziach xDDD'
        hint1.style.color = "lightgreen"
    }
    if(hint_nr == 5)
        hint1.innerHTML = "Koniec podpowiedziów"
}

function pass(){
    message1.innerHTML = ""
    message2.innerHTML = ""

    if(pass1.value == "17.01.2024" && pass2.value !="19.03.2024")
    {
        message1.innerHTML = "Pierwsze hasło zostało podane prawidłowo."
        message1.style.color = "lightgreen"
        message2.innerHTML = "Drugie hasło zostało podane nieprawidłowo"
        message2.style.color = "red"
    }
    if(pass1.value != "17.01.2024" && pass2.value =="19.03.2024")
    {
        message1.innerHTML = "Pierwsze hasło zostało podane nieprawidłowo."
        message1.style.color = "red"
        message2.innerHTML = "Drugie hasło zostało podane prawidłowo"
        message2.style.color = "lightgreen"
    }
    if(pass1.value != "17.01.2024" && pass2.value !="19.03.2024")
    {
        message1.innerHTML = "Pierwsze hasło zostało podane nieprawidłowo."
        message1.style.color = "red"
        message2.innerHTML = "Drugie hasło zostało podane nieprawidłowo"
        message2.style.color = "red"
    }
    if(pass1.value == "17.01.2024" && pass2.value =="19.03.2024")
    {
        window.location.href = 'index1.html';
    }
}