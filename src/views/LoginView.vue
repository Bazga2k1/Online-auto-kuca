<template>
    <div>
    <form>
    <div class="form-group">
        <label for="exampleInputEmail1">Unesite Vaš OIB: </label>
        <input type="OIB" class="form-control" id="exampleInputOIB" aria-describedby="OIBHelp" placeholder="Unesite OIB">
        <small id="emailOIB" class="form-text text-muted"><br>Vaš OIB je privatan i vidljiv samo Vama</small>
    </div>
    <br>
    <div class="form-group">
        <label for="exampleInputPassword1">Lozinka: </label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
    </div>
    <br>
    <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Zapamti prijavu</label>
    </div>
    <button type="submit" class="btn btn-primary"> Prijava </button>
</form>
<br><br>
<div>
    Nemate račun za firmu? <router-link to="/registracija_firme">Registriajte se odmah</router-link>
</div>
    </div>
</template>

<script>
export default{
}
</script>