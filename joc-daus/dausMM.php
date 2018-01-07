<?php include_once("../partials/head.php") ?>
<?php include_once("../partials/navbar.php") ?>

<!-- JOC -->
<div class="container mt-5">
  <div class="row">
    <div class="col-md-6">
      <h1 class="display-4 text-primary">Joc de daus</h1>
      <p class="text-justify"><strong>Màquina vs Màquina</strong>; Un joc de daus (per a practicar els arrays). Juguem amb dos daus, si la suma val 7 o 11, guanyem; si val 2, 3 o 12, perdem; si obtenim una altra suma, fem una segona ronda. El joc continua així, fent rondes fins que guanyem o perdem. Tindrem l’opció de jugar contra la màquina o veure una simulació de la màquina contra si mateixa. En aquest cas heu de simular 1000 partides i mostrar per pantalla quantes vegades es guanya i perd en la 1a ronda, en la 2a, ... fins la 10a ronda. Mostreu quines són les possibilitats de guanyar a aquest joc si tenim en compte les 1000 partides simulades.</p>
    </div><!-- /.col -->
    <!-- El joc -->
    <div class="col-md-6">
      <h1 class="display-4 text-primary">
        Partida
        <span id="num-partida" class="text-muted"></span>
      </h1>

      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <!-- Ronda -->
          <h5 class="card-title">
            Ronda
            <span id="num-ronda" class="text-muted"></span>
          </h5>
          <!-- Resultat -->
          <h6 class="card-subtitle mb-2 text-muted">
            Resultat tirada: <span id="resultat"></span>
          </h6>
          <!-- Jugador/ra -->
          <p>Torn: <span id="tirador"></span></p>
          <hr>
          <!-- Botó -->
          <p class="card-text">Iniciar el joc!</p>
          <button type="button" onclick="iniciJoc()" class="btn btn-primary btn-lg btn-block">Iniciar</button>
        </div>
      </div>

    </div><!-- /.col -->
  </div><!-- /.row -->
</div><!-- /.container -->

<!-- Scripts Bootstrap -->
<?php include_once("../partials/footer-scripts.php") ?>

<!-- Joc daus (humà vs màquina) -->
<script src="../assets/js/dausMM.js" charset="utf-8"></script>

<?php include_once("../partials/footer.php") ?>
