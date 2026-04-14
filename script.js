for(let i=1; i<=5; i++)
 {
    const elem=document.getElementById(i+"");
    elem.addEventListener("click",visitLink);
 }


    function visitLink(event){
        const id=event.target.id;
        
        if(id=="1")
        {
            setTimeout(function() { window.open('https://www.instagram.com/herve/', "_blank") }, 1);
        }


        else if(id=="2")
        {
            setTimeout(function() { window.open('https://www.linkedin.com/in/herveahishakiye/', "_blank") }, 1);
        }

        else if(id=="3")
        {
            setTimeout(function() { window.open('https://github.com/herveahishakiye', "_blank") }, 1);
        }



          }
          