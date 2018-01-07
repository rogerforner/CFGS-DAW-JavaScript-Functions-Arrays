<?php include_once("../partials/head.php") ?>
<?php include_once("../partials/navbar.php") ?>

<!-- JOC -->
<div class="container mt-5">
  <div class="row">
    <div class="col-md-6">
      <h1 class="display-4 text-primary">Memòria</h1>
      <p class="text-justify">Mostra-li a l’usuari els <strong>nombres primers</strong> que hi ha entre el 1 i el 30, després esborra’ls i l’usuari ha de recordar-los i escriure'ls correctament.</p>
    </div><!-- /.col -->
    <!-- El joc -->
    <div class="col-md-6">
      <h1 class="display-4 text-primary">Números primers</h1>
      <h3><span id="nums-primers"></span></h3>
      <p id="solucio"></p>

      <button id="iniciar-btn" type="button" onclick="iniciar()" class="btn btn-primary mt-4">Ja me'ls sé</button>

      <form id="recordar" class="iniciat mt-4 d-none" method="post">
        <div class="form-group">
          <label for="numsPrimers">Els números primers són...</label>
          <input id="numsPrimers" type="text" name="numsPrimers" class="form-control" aria-describedby="numsPrimersHelp">
          <small id="numsPrimersHelp" class="form-text text-muted">Separar amb una coma (,).</small>
        </div>
        <button id="memoria" type="button" onclick="comprovar()" class="btn btn-primary">Comprovar</button>
      </form>
    </div><!-- /.col -->
  </div><!-- /.row -->
</div><!-- /.container -->

<!-- Scripts Bootstrap -->
<?php include_once("../partials/footer-scripts.php") ?>

<!-- Joc Sèrie Matemàtica -->
<script src="../assets/js/memoria.js" charset="utf-8"></script>

<?php include_once("../partials/footer.php") ?>
