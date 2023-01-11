function mostrar(){
	var caja1= document.getElementById('imagen1')
	var caja2= document.getElementById('imagen2')
	var caja3= document.getElementById('imagen3')
	var caja4= document.getElementById('imagen4')
	var caja5= document.getElementById('imagen5')
	var caja6= document.getElementById('imagen6')
	var caja7= document.getElementById('imagen7')
	var caja8= document.getElementById('imagen8')

	var borrar1=document.getElementById('borrar1')
	var borrar2=document.getElementById('borrar2')
	var borrar3=document.getElementById('borrar3')
	var borrar4=document.getElementById('borrar4')
	var borrar5=document.getElementById('borrar5')
	var borrar6=document.getElementById('borrar6')
	var borrar7=document.getElementById('borrar7')
	var borrar8=document.getElementById('borrar8')


	if (caja1.style.display='none') {

	caja1.style.display='inline-block'
	caja2.style.display='block'
	caja3.style.display='block'
	caja4.style.display='block'
	caja5.style.display='block'
	caja6.style.display='block'
	caja7.style.display='block'
	caja8.style.display='block'

	borrar1.parentNode.removeChild(borrar1)
	borrar2.parentNode.removeChild(borrar2)
	borrar3.parentNode.removeChild(borrar3)
	borrar4.parentNode.removeChild(borrar4)
	borrar5.parentNode.removeChild(borrar5)
	borrar6.parentNode.removeChild(borrar6)
	borrar7.parentNode.removeChild(borrar7)
	borrar8.parentNode.removeChild(borrar8)


	}
	else{

	caja1.style.display='none'
	caja2.style.display='none'
	caja3.style.display='none'
	caja4.style.display='none'
	caja5.style.display='none'
	caja6.style.display='none'
	caja7.style.display='none'
	caja8.style.display='none'


	}


}







function mostrarencuesta(){
	var encuesta=document.getElementById('encuesta')
	var borrar=document.getElementById('borrar')
	
	
	
	if(encuesta.style.display='none'){
		encuesta.style.display='block'
		borrar.parentNode.removeChild(borrar)
	
		
	}
	else{
	encuesta.style.display='none'
	
	}
	
}