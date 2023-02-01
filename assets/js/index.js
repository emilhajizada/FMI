const imgs = document.querySelectorAll("#testimonials_section img");
const texts = [
  {
    text: "Херсонес – одно из удивительных мест в мире. Здесь замерло время, но каждый камень может рассказать свою историю, наполненную борьбой и победами, отвагой и поражениями, волей и гордостью, силой и святостью. Херсонес – это особое сакральное место, сосуд, вместивший в себя культуру и память нашего народа.",
    name: "Елена Морозова",
    job: `Директор музея-заповедника `,
  },
  {
    text: "“Херсонес имеет для нас особое значение, и мы, безусловно, будем его развивать. То, что сделано, совершенно недостаточно. Знаю, что раскопки проводятся и работа идет, но этого пока недостаточно. Мы должны сделать еще больше и будем развивать Херсонес и дальше как центр притяжения не только для граждан нашей страны, но и тех кто захочет приехать в Севастополь из-за границы”",
    name: "В.В. Путин",
    job: "Президент России",
  },
  {
    text: "Вижу весьма важной и своевременной Вашу инициативу создания вблизи Херсонеса, исторически связанного с крещением Руси — историко-культурного центра христианства",
    name: "Патриарх Кирилл",
    job: "Патриарх Кирилл",
  },
];
imgs.forEach((img, i) => {
  img.addEventListener("click", async () => {
    const item = document.querySelector("#testimonials_section .active");
    const item_parent = item.parentElement.parentElement.children[1];
  
    item.classList.remove("active");
    img.classList.add("active");
    await setTimeout(() => {
      item_parent.classList.add("animate__fadeInUp");
        item_parent.children[0].innerHTML = texts[i].text;
    item_parent.children[1].innerHTML = texts[i].name;
    item_parent.children[2].innerHTML = texts[i].job;
    }, 100);
    item_parent.classList.remove("animate__fadeInUp");
  });
});


const header = document.querySelector("header");

window.onscroll =()=>{
  console.log(window.scrollY);
  window.scrollY > 0 ? header.classList.add("colored") : header.classList.remove("colored")
  
}