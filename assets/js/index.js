let JsAll = (e)=> document.querySelectorAll(e), 
    Js = (e)=> document.querySelector(e),
listLink = JsAll(".href-i a"); 



// limpa lista
function limparList()
{
    listLink.forEach(item =>{
        (item.className == 'this') ? item.classList.remove("this") : null;
    })
}


// list link
listLink.forEach(btn =>{
    btn.addEventListener('click', function(e){
        limparList();
        e.preventDefault();
        var tag = btn.hash.replace("#", "");
        document.title = (tag == "inicio") ? "Portfólio | Tomas Manuel" : tag.replace(tag.charAt(0), tag.charAt(0).toLocaleUpperCase())+' | Tomas Manuel';
        Js(btn.hash).scrollIntoView();
        btn.classList.add("this");
    });
})



console.clear();