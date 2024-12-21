const notes = [
    "I love you more than anything.",
    "You're my everything.",
    "You're so beautiful, inside and out.",
    "I’m lucky to have you.",
    "You make my world brighter.",
    "You complete me.",
    "You’re my sunshine.",
    "My heart beats for you.",
    "I can't stop thinking about you.",
    "You’re my favorite person.",
    "Every moment with you is perfect.",
    "You make me smile every day.",
    "You mean the world to me.",
    "I'm so grateful for you.",
    "You make my heart race.",
    "Being with you feels like home.",
    "You light up my life.",
    "I’m always thinking about you.",
    "You make everything better.",
    "I'm so happy when I'm with you.",
    "You’re my dream come true.",
    "You make my heart smile.",
    "I never want to let you go.",
    "You're the best thing in my life.",
    "Being with you feels so right.",
    "I can’t imagine my life without you.",
    "You’re my forever.",
    "You make every day brighter.",
    "I'm so proud of you.",
    "You make me the happiest person alive.",
    "You’re the love of my life.",
    "I’ll always be here for you.",
    "You make my world a better place.",
    "I fall for you more every day.",
    "You’re my happiness.",
    "I can’t get enough of you.",
    "You bring out the best in me.",
    "I love the way you laugh.",
    "I’ll love you forever.",
    "You're my forever and always.",
    "You mean more to me than words can say.",
    "I’m so in love with you.",
    "You make me feel so special.",
    "You're everything I ever wanted.",
    "I love waking up next to you.",
    "You make every moment unforgettable.",
    "I’m lost in your eyes.",
    "You make me feel alive.",
    "I can't wait to spend my life with you.",
    "You complete me in ways I can't explain.",
    "Every time I see you, I fall in love all over again.",
    "You make me a better person.",
    "I feel safe when I'm with you.",
    "I’m the luckiest person to have you.",
    "You make my heart skip a beat.",
    "I want to spend forever with you.",
    "You’re the one I’ve been waiting for.",
    "You make every day brighter.",
    "I’ll never stop loving you.",
    "You have my heart, always.",
    "You’re my best friend and my love.",
    "I can't imagine a world without you.",
    "You make all my dreams come true.",
    "You're the first thing I think of in the morning.",
    "I’m addicted to you.",
    "I’m so lucky to have you by my side.",
    "You’re the reason I smile every day.",
    "You make everything seem perfect.",
    "You make my heart feel full.",
    "I’m better because of you.",
    "You make life so much sweeter.",
    "I’ll always choose you.",
    "You’re my one and only.",
    "Every moment with you is magic.",
    "I love how you love me.",
    "You make my dreams feel real.",
    "Being with you feels like a fairytale.",
    "You’re the best part of my day.",
    "You make my world complete.",
    "I’m always thinking about you.",
    "You make my heart feel full of love.",
    "I never want to lose you.",
    "You’re my soulmate.",
    "I love the way you hold me.",
    "You’re everything I’ve ever wanted and more.",
    "I can’t wait to create more memories with you.",
    "You make me feel so loved.",
    "I would choose you every time.",
    "You make life more beautiful.",
    "I can't imagine a life without you in it.",
    "You have my heart, forever and always.",
    "You make my heart sing.",
    "I’ll always adore you.",
    "You make me feel like the luckiest person.",
    "You make everything seem possible.",
    "I’m lost without you.",
    "You make my world feel so right.",
    "I want to grow old with you.",
    "You’re my reason to keep going.",
    "You make my life feel complete.",
    "You’re my forever and always.",
    "I can’t stop thinking about you.",
    "You make every moment unforgettable.",
    "You are my happy place.",
    "I love being with you.",
    "You bring joy into my life.",
    "I want to be with you always.",
    "You’re my one and only.",
    "I’ll always love you, no matter what.",
    "You’re my greatest adventure.",
    "You’re everything I need.",
    "I never want to let go of you.",
    "You’re my heart’s home.",
    "I’ll always choose you over and over.",
    "I’m so grateful for your love.",
    "You’re my happily ever after.",
    "You’re my reason for everything.",
    "I love the way you make me feel.",
    "You’re the greatest gift in my life.",
    "You make my heart skip a beat.",
    "I want to spend forever by your side.",
    "I love the way you look at me.",
    "You make everything feel right.",
    "You make my heart feel warm.",
    "I’ll love you more every day.",
    "You make life more exciting.",
    "I want to be with you forever.",
    "You make my soul happy.",
    "I’ll always be here for you.",
    "You make every day better.",
    "You mean everything to me.",
]
document.getElementById("note").innerHTML=notes[0]
var index = 0
function next(){
    if(index<130)
    {
        index++
        document.getElementById("note").innerHTML=notes[index]
    }else
    {
        document.getElementById("note").innerHTML=notes[0]
        index = 0
    }
}
function previous(){
    if(index>0)
    {
        index = index-1
        document.getElementById("note").innerHTML=notes[index]
    }else
    {
        document.getElementById("note").innerHTML=notes[130]
        index = 130
    }
}
function number(){
    let number = index+1
    document.getElementById("number").innerHTML=number+"/131"
}
function date(){
    var date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    document.getElementById("date").innerHTML = `${day}/${month}/${year}`
}