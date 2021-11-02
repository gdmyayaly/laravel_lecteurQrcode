// var entree=document.getElementById('entree');
// var sortie=document.getElementById('sortie');
// var loader=document.getElementById('loader');
// var resultat=document.getElementById('resultat');
// var typeBtn=null;


// // Desactivation des résultat
// resultat.style.display='none';
// loader.style.display='none';

// // Activation de l'evenement click sur le boutton entre et sortie
// entree.addEventListener('click',ActiveCamera);
// sortie.addEventListener('click',ActiveCamera)

// // resultat.getAttribute
// function ActiveCamera() {
//     typeBtn=this.getAttribute('id');
//     console.log("Type =>"+typeBtn);
//     resultat.style.display='none';
//     loader.style.display='block';
//     // On active le camera pour Scanner le qrCode
//     var html5QrcodeScanner = new Html5QrcodeScanner(
//       "reader", { fps: 10, qrbox: 250 });
            
//     function onScanSuccess(decodedText, decodedResult) {
//         // Handle on success condition with the decoded text or result.
//         console.log(`Scan result: ${decodedText}`, decodedResult);
//         // ...
//         html5QrcodeScanner.clear();
//         // ^ this will stop the scanner (video feed) and clear the scan area.
//     }
    
//     html5QrcodeScanner.render(onScanSuccess);
// }

var entree=document.getElementById('entree');
var sortie=document.getElementById('sortie');
var loader=document.getElementById('loader');
var resultat=document.getElementById('resultat');
var typeBtn=null;
// Desactivation des résultat
resultat.style.display='none';
loader.style.display='block';

// Activation de l'evenement click sur le boutton entre et sortie
entree.addEventListener('click',ActiveCamera);
sortie.addEventListener('click',ActiveCamera)
function ActiveCamera() {
  console.log("active");
  var html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", { fps: 10, qrbox: 250 });
        
  function onScanSuccess(decodedText, decodedResult) {
    console.log(decodedText);
    resultat.style.display='block'; 
    loader.style.display='none';
    html5QrcodeScanner.clear();
    html5QrCode.stop().then((ignore) => {
      // QR Code scanning is stopped.
    }).catch((err) => {
      // Stop failed, handle it.
    });
  }
  
  html5QrcodeScanner.render(onScanSuccess);
}
