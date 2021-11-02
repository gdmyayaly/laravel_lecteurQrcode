var entree=document.getElementById('entree');
var sortie=document.getElementById('sortie');
var loader=document.getElementById('loader');
var resultat=document.getElementById('resultat');
var typeBtn=null;


// Desactivation des résultat
resultat.style.display='none';
loader.style.display='none';

// Activation de l'evenement click sur le boutton entre et sortie
entree.addEventListener('click',ActiveCamera);
sortie.addEventListener('click',ActiveCamera)
var scanner = new Instascan.Scanner({ video: document.getElementById('preview') });

// resultat.getAttribute
function ActiveCamera() {
    typeBtn=this.getAttribute('id');
    console.log("Type =>"+typeBtn);
    resultat.style.display='none';
    loader.style.display='block';
    // On active le camera pour Scanner le qrCode
    scanner.addListener('scan', function (content) {

        if (content) {
            resultat.style.display='block'; 
            loader.style.display='none';
            scanner.stop();
        }
        else{
            resultat.style.display='none';
            loader.style.display='block';
        }
    });
    Instascan.Camera.getCameras().then(function (cameras) {
      if (cameras.length > 0) {
        scanner.start(cameras[cameras.length -1]);
      } else {
        console.error('No cameras found.');
        alert('Pas de Camera disponible sur cette Appareil')
      }
    }).catch(function (e) {
      console.error(e);
      alert('Nous ne pouvons pas Accedez à la Camera')
    });
}