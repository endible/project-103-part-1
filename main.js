Webcam.set({
    width: 350,
    hight: 300,
    image_format: 'png',
    png_quality: 1090
});

camera = document.getElementById("camera")
Webcam.attach('#camera')
function snapshot(){

    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'">'


    });
}
classifyer = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/7WScH1VV0/model.json',modelloded)