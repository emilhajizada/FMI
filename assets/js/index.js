const imgs = document.querySelectorAll("#testimonials_section img");


imgs.forEach(img=>{
    img.onclick = ()=>{
        imgs.forEach(img=>{
            img.classList.remove("active")
        })
        img.classList.add("active")
    }
})