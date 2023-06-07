const carousel_caption_list=[
  'We provide high quality products just for you',
  'Your satisfaction is our number one periority',
  'Let’s fulfill your fashion needs with shoearight now!'
]
const next_button_carousel = document.getElementById("next-button");
const img_carousel = document.getElementById("img-carousel");

const carousel_line_activate = document.getElementById("carousel-line-activate");
const carousel_caption = document.getElementById("carousel-caption");

let index_src_img_next_button_carousel = 1;

next_button_carousel.addEventListener("click",function(event){
  index_src_img_next_button_carousel++;
  if(index_src_img_next_button_carousel>3){
    window.location.href = "http://127.0.0.1:5500/login.html";
    index_src_img_next_button_carousel=1;
    return;
  }
  
  img_carousel.src=`./assets/data/carousel/${index_src_img_next_button_carousel}.png`;
  const carousel_line_activate_list = carousel_line_activate.querySelectorAll("[data-name]");
  carousel_line_activate_list[index_src_img_next_button_carousel-2].classList.remove("active-slide");
  carousel_line_activate_list[index_src_img_next_button_carousel-1].classList.add("active-slide");
  carousel_caption.innerText=carousel_caption_list[index_src_img_next_button_carousel-1];
  if (index_src_img_next_button_carousel == 3){
    event.target.innerText="Get start"
  }
});