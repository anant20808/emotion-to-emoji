Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    img_quality : 90,
})

camera=document.getElementById("camera");

Webcam.attach("camera");

function snapshot(){
   Webcam.snap(function(data_uri){
   document.getElementById("snap").innerHTML = "<img id='displayofimage' src='" + data_uri+ "'>";
   })}

console.log("ml5",ml5.version);
Classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/KjZ1Dh8cX/model.json',modelloaded);


function modelloaded(){
    console.log('model loaded');
}
function speak(){

 var synth = window.speechSynthesis;
 speak_data_1 = "The first predection is " + prediction1;
 speak_data2 = "And the second prediction is " + prediction2;

 var utterthis = new SpeechSynthesisUtterance(speak_data_1 + speak_data2);
 synth.speak(utterthis);

}
function check(){
    img = document.getElementById("displayofimage");
    Classifier.classify(img,gotresult);
}
function gotresult(error,result){
    if(error){
        console.log(error);
    }
    if(result){
        console.log(result)

        document.getElementById("#result_emotion_name").innerHTML = result[0].label;
        document.getElementById("#result_emotion_name2").innerHTML = result[1].label;
        prediction1 = result[0].label;
        prediction2 = result[1].label;
         speak();
        if(prediction1 == "happy"){
            document.getElementById("emotion1").innerHTML = "&#128522;";
        }
        if(prediction1 == "sad"){
            document.getElementById("emotion1").innerHTML = "&#128532;";
        }
        if(prediction1 == "Class 3"){
            document.getElementById("emotion1").innerHTML = "&#128545;" ;
        }
        if(prediction2 == "happy"){
            document.getElementById("emotion2").innerHTML = "&#128522;";
        }
        if(prediction2 == "sad"){
            document.getElementById("emotion2").innerHTML = "&#128532;";
        }
        if(prediction2 == "Class 3"){
            document.getElementById("emotion2").innerHTML = "&#128545;";
        }
        

    }
}