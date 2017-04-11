var imagenesProyectos = [];
var container=document.getElementsByClassName("content-images-work")[0];
var template = document.getElementById("template");

for(var i = 1; i < 13; i++){
  imagenesProyectos.push({nombre: "Nombre Proyecto "+i+".", foto:"assets/img/img-"+i+".jpg"});
}

for(var i = 0 ; i < imagenesProyectos.length ; i++){
	var imagenProyecto = imagenesProyectos[i];
	var tmpl = document.getElementById('js-template').childNodes[1].cloneNode(true);

 		tmpl.querySelector(".js-enlaceModal").href = "#openModal" + (i+1);
		tmpl.querySelector('.js-imgModalSmall').src = imagenProyecto.foto;
		tmpl.querySelector('.js-nombre').innerText = imagenProyecto.nombre;
		tmpl.querySelector(".modalDialog").id = "openModal" + (i+1);
		tmpl.querySelector(".js-imgModalLarge").src = imagenProyecto.foto;
 
 container.appendChild(tmpl);
}



