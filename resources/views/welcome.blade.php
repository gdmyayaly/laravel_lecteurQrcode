<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
        <!-- <script type="text/javascript" src="instascan.min.js"></script> -->
        <script type="text/javascript" src="https://rawgit.com/schmich/instascan-builds/master/instascan.min.js"></script>
        <link rel="stylesheet" href="{{ asset('style.css') }}">
    </head>
    <body>
      <div class="content_pointage">
        <div class="box_content_pointage">
          <div class="container-fluid p-0">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6">
                <button class="btn btn-dark w-100" id="entree">Entrée</button>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6">
                <button class="btn btn-dark w-100" id="sortie">Sortie</button>
              </div>
            </div>
            <div class="box_cam_video">
              <video id="preview"></video>
            </div>
            <div class="boc_rep_pointage ">
              <div class="loader" id="loader"></div>
              <div id="resultat">
                <h3 class="text-center">Résultat Valide <span>&#9989;</span> </h3>
              </div>
              {{-- <span>&#10060;</span> --}}
            </div>
          </div>
        </div>
      </div>
    {{-- <div class="container">
    <video id="preview"></video>

    </div> --}}
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js" integrity="sha384-VHvPCCyXqtD5DqJeNxl2dtTyhF78xXNXdkwX1CZeRusQfRKp+tA7hAShOK/B/fQ2" crossorigin="anonymous"></script>
    <script src="{{ asset('oldmain.js') }}"></script>
    {{-- <script >
      let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
      scanner.addListener('scan', function (content) {
        console.log(content);
      });
      Instascan.Camera.getCameras().then(function (cameras) {
        if (cameras.length > 0) {
          scanner.start(cameras[0]);
        } else {
          console.error('No cameras found.');
        }
      }).catch(function (e) {
        console.error(e);
      });
    </script> --}}
    </body>

</html>
