<?php include_once("../partials/head.php") ?>
<?php include_once("../partials/navbar.php") ?>

<!-- JOC -->
<div class="container mt-5">
  <div class="row">
    <div class="col-md-6">
      <h1 class="display-4 text-primary"><small>Pedra, Paper o Tisora</small></h1>
      <p class="text-justify">Joc de "pedra, paper o tisora" entre un usuari i una màquina</p>
    </div><!-- /.col -->

    <!-- El joc -->
    <div class="col-md-6">
      <!-- Escollir -->
      <div class="btn-group" role="group" aria-label="Escollir">
        <button type="button" onclick="iniciar(0)" class="btn btn-primary">Pedra</button>
        <button type="button" onclick="iniciar(1)" class="btn btn-primary">Paper</button>
        <button type="button" onclick="iniciar(2)" class="btn btn-primary">Tisora</button>
      </div>

      <p id="solucio"></p>

      <!-- Imatges PPT -->
      <div class="row">
        <div class="col-6">
          <h4 class="text-primary">Persona</h4>
          <div id="img-persona"></div>
        </div>
        <div class="col-6">
          <h4 class="text-primary">Màquina</h4>
          <div id="img-maquina"></div>
        </div>
      </div>
    </div><!-- /.col -->
  </div><!-- /.row -->
</div><!-- /.container -->

<!-- Scripts Bootstrap -->
<?php include_once("../partials/footer-scripts.php") ?>

<!-- Joc Sèrie Matemàtica -->
<script src="../assets/js/ppt.js" charset="utf-8"></script>

<?php include_once("../partials/footer.php") ?>
