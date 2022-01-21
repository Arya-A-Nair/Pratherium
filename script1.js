card_text=document.getElementById("card-text");
card_text.innerHTML ="I am launching a revolutionary coin. Which is going to be the future of cryptocurrency. It combines the concept of traditional shady transaction with cryptocurrency";

function success(){
    disclaimer=document.getElementById("disclaimer");
    disclaimer.style.display="none";
    content=document.getElementById("content");
    content.style.display="block";
    document.body.classList.remove("bg-dark");
    window.scrollTo(0, 0);
}
