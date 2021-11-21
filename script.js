console.log("Arimize Screen Console -- created by Arindam")

const video = document.getElementById("video");
const arimizeBtn = document.getElementById("arimize-button");

video.hidden=true;
async function selectMedia(){
    try{
        const media = await navigator.mediaDevices.getDisplayMedia();
        video.srcObject = media;
        video.onloadedmetadata = ()=>{
            video.play();
        }
    }catch(error){
        console.log("Error : ",error);
    }
}
selectMedia();

arimizeBtn.addEventListener("click", async () => {
    try{
        if(video.srcObject.active){
            arimizeBtn.disabled = true;
            await video.requestPictureInPicture()
            arimizeBtn.disabled = false;
        }
    }catch(error){
        console.log("Error : ",error);
    }
})