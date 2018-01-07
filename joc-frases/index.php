<?php include_once("../partials/head.php") ?>
<?php include_once("../partials/navbar.php") ?>

<!-- JOC -->
<div class="container mt-5">
  <div class="row">
    <div class="col-md-12">
      <h1 class="display-4 text-primary">Relacionar Autor-Frase</h1>
      <p class="text-justify">Mostrar per pantalla (mitjançant un array) 10 frases cèlebres i els seu 10 autors, l’usuari ha d’ajuntar la frase amb l’autor, a veure quantes encerta.</p>
      <p id="solucio"></p>
    </div><!-- /.col -->
    <!-- El joc -->
    <div class="col-md-12 mt-4">
      <form method="post">
        <div class="row">

          <!-- Autors -->
          <div class="col">
            <!-- Autor 1 -->
            <div class="form-check">
              <input class="form-check-input" type="radio" name="autorsRadio" id="autor-1" value="1" checked>
              <label id="a1" class="form-check-label" for="autor-1">
                Default radio
              </label>
            </div>
            <!-- Autor 2 -->
            <div class="form-check">
              <input class="form-check-input" type="radio" name="autorsRadio" id="autor-2" value="2">
              <label id="a2" class="form-check-label" for="autor-2">
                Second default radio
              </label>
            </div>
            <!-- Autor 3 -->
            <div class="form-check">
              <input class="form-check-input" type="radio" name="autorsRadio" id="autor-3" value="3">
              <label id="a3" class="form-check-label" for="autor-3">
                Second default radio
              </label>
            </div>
            <!-- Autor 4 -->
            <div class="form-check">
              <input class="form-check-input" type="radio" name="autorsRadio" id="autor-4" value="4">
              <label id="a4" class="form-check-label" for="autor-4">
                Second default radio
              </label>
            </div>
            <!-- Autor 5 -->
            <div class="form-check">
              <input class="form-check-input" type="radio" name="autorsRadio" id="autor-5" value="5">
              <label id="a5" class="form-check-label" for="autor-5">
                Second default radio
              </label>
            </div>
            <!-- Autor 6 -->
            <div class="form-check">
              <input class="form-check-input" type="radio" name="autorsRadio" id="autor-6" value="6">
              <label id="a6" class="form-check-label" for="autor-6">
                Second default radio
              </label>
            </div>
            <!-- Autor 7 -->
            <div class="form-check">
              <input class="form-check-input" type="radio" name="autorsRadio" id="autor-7" value="7">
              <label id="a7" class="form-check-label" for="autor-7">
                Second default radio
              </label>
            </div>
            <!-- Autor 8 -->
            <div class="form-check">
              <input class="form-check-input" type="radio" name="autorsRadio" id="autor-8" value="8">
              <label id="a8" class="form-check-label" for="autor-8">
                Second default radio
              </label>
            </div>
            <!-- Autor 9 -->
            <div class="form-check">
              <input class="form-check-input" type="radio" name="autorsRadio" id="autor-9" value="9">
              <label id="a9" class="form-check-label" for="autor-9">
                Second default radio
              </label>
            </div>
            <!-- Autor 10 -->
            <div class="form-check">
              <input class="form-check-input" type="radio" name="autorsRadio" id="autor-10" value="10">
              <label id="a10" class="form-check-label" for="autor-10">
                Second default radio
              </label>
            </div>
          </div><!-- /.col -->

          <!-- Frases -->
          <div class="col">
            <!-- Frase 1 -->
            <div class="form-check">
              <input class="form-check-input" type="radio" name="frasesRadio" id="frase-1" value="1" checked>
              <label id="f1" class="form-check-label" for="frase-1">
                Default radio
              </label>
            </div>
            <!-- Frase 2 -->
            <div class="form-check">
              <input class="form-check-input" type="radio" name="frasesRadio" id="frase-2" value="2">
              <label id="f2" class="form-check-label" for="frase-2">
                Second default radio
              </label>
            </div>
            <!-- Frase 3 -->
            <div class="form-check">
              <input class="form-check-input" type="radio" name="frasesRadio" id="frase-3" value="3">
              <label id="f3" class="form-check-label" for="frase-3">
                Second default radio
              </label>
            </div>
            <!-- Frase 4 -->
            <div class="form-check">
              <input class="form-check-input" type="radio" name="frasesRadio" id="frase-4" value="4">
              <label id="f4" class="form-check-label" for="frase-4">
                Second default radio
              </label>
            </div>
            <!-- Frase 5 -->
            <div class="form-check">
              <input class="form-check-input" type="radio" name="frasesRadio" id="frase-5" value="5">
              <label id="f5" class="form-check-label" for="frase-5">
                Second default radio
              </label>
            </div>
            <!-- Frase 6 -->
            <div class="form-check">
              <input class="form-check-input" type="radio" name="frasesRadio" id="frase-6" value="6">
              <label id="f6" class="form-check-label" for="frase-6">
                Second default radio
              </label>
            </div>
            <!-- Frase 7 -->
            <div class="form-check">
              <input class="form-check-input" type="radio" name="frasesRadio" id="frase-7" value="7">
              <label id="f7" class="form-check-label" for="frase-7">
                Second default radio
              </label>
            </div>
            <!-- Frase 8 -->
            <div class="form-check">
              <input class="form-check-input" type="radio" name="frasesRadio" id="frase-8" value="8">
              <label id="f8" class="form-check-label" for="frase-8">
                Second default radio
              </label>
            </div>
            <!-- Frase 9 -->
            <div class="form-check">
              <input class="form-check-input" type="radio" name="frasesRadio" id="frase-9" value="9">
              <label id="f9" class="form-check-label" for="frase-9">
                Second default radio
              </label>
            </div>
            <!-- Frase 10 -->
            <div class="form-check">
              <input class="form-check-input" type="radio" name="frasesRadio" id="frase-10" value="10">
              <label id="f10" class="form-check-label" for="frase-10">
                Second default radio
              </label>
            </div>
          </div><!-- /.col -->
        </div><!-- /.row -->

        <!-- Submit -->
        <div class="row">
          <button type="button" onclick="comprovar()" class="btn btn-primary mt-3">Comprovar</button>
        </div><!-- /.row -->
      </form>
    </div><!-- /.col -->
  </div><!-- /.row -->
</div><!-- /.container -->

<!-- Scripts Bootstrap -->
<?php include_once("../partials/footer-scripts.php") ?>

<!-- Joc Sèrie Matemàtica -->
<script src="../assets/js/frases.js" charset="utf-8"></script>

<?php include_once("../partials/footer.php") ?>
