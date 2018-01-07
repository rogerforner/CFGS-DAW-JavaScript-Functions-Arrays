<?php include_once("../partials/head.php") ?>
<?php include_once("../partials/navbar.php") ?>

<!-- JOC -->
<div class="container mt-5">
  <div class="row">
    <div class="col-md-6">
      <h1 class="display-4 text-primary">Laberint</h1>
      <p class="text-justify">Tindrem un array de 12 per 12 caselles, on haureu preparat un laberint (1=mur, 0=espai). Suposem que l’entrada es per la casella 1-1 i la sortida és la 12-12. Mostreu-li el laberint en forma de taula html a l'usuari, a veure si troba la sortida. Si l’usuari es rendeix recarregueu la taula mostrant-li el camí, que estarà guardat en un segon array.</p>
    </div><!-- /.col -->
    <!-- El joc -->
    <div class="col-md-6">
      <h1 class="display-4 text-primary">Surt del laberint</h1>
      <h3><span id="nums-primers"></span></h3>
      <p id="solucio"></p>

      <!-- Taula: evitar que es seleccioni (mirar head) -->
      <div id="taula-laberint" class="evitarSeleccio"><small class="text-danger">Sortida</small></div>

      <button id="rendir" type="button" onclick="rendirse()" class="btn btn-primary mt-4">Rendir-se</button>
    </div><!-- /.col -->
  </div><!-- /.row -->
</div><!-- /.container -->

<!-- Scripts Bootstrap -->
<?php include_once("../partials/footer-scripts.php") ?>

<!-- Joc Sèrie Matemàtica -->
<script src="../assets/js/laberint.js" charset="utf-8"></script>

<?php include_once("../partials/footer.php") ?>
