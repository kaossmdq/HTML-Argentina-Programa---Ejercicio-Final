function SelectTab(tabLinkID){
  $(tabLinkID).tab('show');
  HideNavbarMenu();
}

function HideNavbarMenu(){
  $('#btMenuNavbarClose').click();
}

$('#btMenuDatosPersonales').on('click', function(e) {
    SelectTab('#tmDatosPersonales');
})

$('#btMenuFormacionAcademica').on('click', function(e) {
  SelectTab('#tmFormacionAcademica');
})

$('#btMenuExperienciaLaboral').on('click', function(e) {
  SelectTab('#tmExperienciaLaboral');
})

$('#tmDatosPersonales').on('click', function(e) {
  SelectTab('#tmDatosPersonales');
})

$('#tmFormacionAcademica').on('click', function(e) {
  SelectTab('#tmFormacionAcademica');
})

$('#tmExperienciaLaboral').on('click', function(e) {
  SelectTab('#tmExperienciaLaboral');
})


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("menu").style.top = "0";
  } else {
    document.getElementById("menu").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}