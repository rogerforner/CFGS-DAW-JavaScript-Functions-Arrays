<?php include_once("../partials/head.php") ?>
<?php include_once("../partials/navbar.php") ?>

<!-- JOC -->
<div class="container mt-5">
  <div class="row">
    <div class="col-md-6">
      <h1 class="display-4 text-primary"><small>Morra</small></h1>
      <p class="text-justify">Joc de "Morra" entre dues màquines i l'usuari ha d'endevinar el número total d'entre la suma de les dues mans (màquines).</p>
    </div><!-- /.col -->

    <!-- El joc -->
    <div class="col-md-6">
      <!-- Escollir -->
      <form method="post">
        <div class="form-group">
          <label for="numUsuari">Escollir un número...</label>
          <input id="numUsuari" type="number" name="numUsuari" class="form-control" aria-describedby="numUsuariHelp" required>
          <small id="numUsuariHelp" class="form-text text-muted">Entre 2 i 10.</small>
        </div>
        <button type="button" onclick="comprovar()" class="btn btn-primary">Comprovar</button>
      </form>

      <p id="solucio"></p>

      <!-- Imatges PPT -->
      <div class="row">
        <div class="col-6">
          <h4 class="text-primary">C-3PO</h4>
          <div id="img-maquina1"></div>
        </div>
        <div class="col-6">
          <h4 class="text-primary">R2-D2</h4>
          <div id="img-maquina2"></div>
        </div>
        <div class="col">
          <small>
            <a href="https://www.freepik.es/vector-gratis/diseno-de-manos-humanas_955271.htm" target="_blank">Imatges creades per Ddraw</a>
          </small>
        </div>
      </div>
    </div><!-- /.col -->
  </div><!-- /.row -->
</div><!-- /.container -->

<!-- Scripts Bootstrap -->
<?php include_once("../partials/footer-scripts.php") ?>

<!-- Joc Sèrie Matemàtica -->
<script src="../assets/js/morra.js" charset="utf-8"></script>

<?php include_once("../partials/footer.php") ?>
