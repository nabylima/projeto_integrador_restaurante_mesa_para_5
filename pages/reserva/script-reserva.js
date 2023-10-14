
//script escolher mesas 

let indexValue = 1;
showImg(indexValue);
function btm_slide(e){showImg(indexValue = e);}
function side_slide(e){showImg(indexValue += e);}
function showImg(e){
    let i;
    const img = document.querySelectorAll('.imagens img');
    const sliders = document.querySelectorAll('.btm-sliders span');
    if(e > img.length){indexValue = 1}
    if(e < 1){indexValue = img.length}
    for(i = 0; i < img.length; i++){
        img[i].style.display = "none";
    }
    for(i = 0; i < img.length; i++){
        sliders[i].style.background = "#ffffff";
    }
    img[indexValue - 1].style.display = "block";
    sliders[indexValue - 1].style.background = "#F2BD57";
}
