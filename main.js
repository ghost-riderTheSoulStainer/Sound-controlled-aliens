// https://teachablemachine.withgoogle.com/models/8ffpwEHRQ/
function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/8ffpwEHRQ/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        random_r=Math.floor(Math.random()*255)+1;
        random_g=Math.floor(Math.random()*255)+1;
        random_b=Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").innerHTML="I can hear-"+results[0].label;
        document.getElementById("result_confidence").innerHTML="Accuracy-"+(results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color="rgb("+random_r+","+random_g+","+random_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_r+","+random_g+","+random_b+")";
        
        if(results[0].label=="Clap"){
            document.getElementById('alien1').src='aliens-01.gif';
            document.getElementById('alien2').src='aliens-02.png';
            document.getElementById('alien3').src='aliens-03.png';
            document.getElementById('alien4').src='aliens-04.png';
        }
        else if(results[0].label=="Bell"){
            document.getElementById('alien1').src='aliens-01.png';
            document.getElementById('alien2').src='aliens-02.gif';
            document.getElementById('alien3').src='aliens-03.png';
            document.getElementById('alien4').src='aliens-04.png';
        }
        else if(results[0].label=="Snap"){
            document.getElementById('alien1').src='aliens-01.png';
            document.getElementById('alien2').src='aliens-02.png';
            document.getElementById('alien3').src='aliens-03.gif';
            document.getElementById('alien4').src='aliens-04.png';
        }
        else{
            document.getElementById('alien1').src='aliens-01.png';
            document.getElementById('alien2').src='aliens-02.png';
            document.getElementById('alien3').src='aliens-03.png';
            document.getElementById('alien4').src='aliens-04.gif';
        }
    }
}