const imgs = document.querySelectorAll("#testimonials_section img");
const texts = [
  {
    text: "“Woman image -Херсонес имеет для нас особое значение, и мы, безусловно, будем его развивать. То, что сделано, совершенно недостаточно. Знаю, что раскопки проводятся и работа идет, но этого пока недостаточно. Мы должны сделать еще больше и будем развивать Херсонес и дальше как центр притяжения не только для граждан нашей страны, но и тех кто захочет приехать в Севастополь из-за границы”",
    name: "Woman image",
    job: "Woman image",
  },
  {
    text: "“Херсонес имеет для нас особое значение, и мы, безусловно, будем его развивать. То, что сделано, совершенно недостаточно. Знаю, что раскопки проводятся и работа идет, но этого пока недостаточно. Мы должны сделать еще больше и будем развивать Херсонес и дальше как центр притяжения не только для граждан нашей страны, но и тех кто захочет приехать в Севастополь из-за границы”",
    name: "В.В. Путин",
    job: "Президент России",
  },
  {
    text: "Monarx image - Херсонес имеет для нас особое значение, и мы, безусловно, будем его развивать. То, что сделано, совершенно недостаточно. Знаю, что раскопки проводятся и работа идет, но этого пока недостаточно. Мы должны сделать еще больше и будем развивать Херсонес и дальше как центр притяжения не только для граждан нашей страны, но и тех кто захочет приехать в Севастополь из-за границы”",
    name: "Monarx image",
    job: "Monarx image",
  },
];
imgs.forEach((img, i) => {
  img.addEventListener("click", async () => {
    const item = document.querySelector("#testimonials_section .active");
    const item_parent = item.parentElement.parentElement.children[1];
    item_parent.children[0].innerHTML = texts[i].text;
    item_parent.children[1].innerHTML = texts[i].name;
    item_parent.children[2].innerHTML = texts[i].job;
    item.classList.remove("active");
    img.classList.add("active");
    await setTimeout(() => {
      item_parent.classList.add("animate__fadeInUp");
    }, 100);
    item_parent.classList.remove("animate__fadeInUp");
  });
});
