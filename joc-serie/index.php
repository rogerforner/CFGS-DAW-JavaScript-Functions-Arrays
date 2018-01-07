<?php include_once("../partials/head.php") ?>
<?php include_once("../partials/navbar.php") ?>

<!-- JOC -->
<div class="container mt-5">
  <div class="row">
    <div class="col-md-6">
      <h1 class="display-4 text-primary">Sèrie matemàtica</h1>
      <p class="text-justify">Mostrar els primers 6 números d’una serie matemàtica (sense dir quina és, podeu usar la de Fibonacci) i preguntar quin número va a continuació. Tant si l’encerta com si no, aviseu a l’usuari. Si podeu, creeu la serie de manera recursiva.</p>
    </div><!-- /.col -->
    <!-- El joc -->
    <div class="col-md-6">
      <h1 class="display-4 text-primary">
        Seqüència
        (<span id="num-fibo" data-tooltip="tooltip" data-placement="bottom" title="Número escollit per crear la seqüència" class="text-muted"></span>)
      </h1>
      <div>
        <h3><span id="serie-fibo"></span>,[<span class="text-primary">?</span>]</h3>
      </div>

      <form method="post">
        <div class="form-group">
          <label for="numUsuari">L'últim número és...</label>
          <input id="numUsuari" type="number" name="numUsuari" class="form-control" aria-describedby="numUsuariHelp">
          <small id="numUsuariHelp" class="form-text text-muted">Endivina l'últim número de la seqüència.</small>
        </div>
        <button type="button" onclick="comprovar()" class="btn btn-primary">Comprovar</button>
      </form>
    </div><!-- /.col -->
  </div><!-- /.row -->
</div><!-- /.container -->

<!-- Scripts Bootstrap -->
<?php include_once("../partials/footer-scripts.php") ?>

<!-- Joc Sèrie Matemàtica -->
<script src="../assets/js/serie.js" charset="utf-8"></script>

<?php include_once("../partials/footer.php") ?>
