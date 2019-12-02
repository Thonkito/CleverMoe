const app = new Vue ({
    el: '#app',
    data: {
        titulo: "Moe"
    },
    methods:{
		evaluarExpresion() {
				cadena = document.getElementById("txtPregunta").value;
				escribirChat(cadena);
				cadena = cadena.toUpperCase();
				document.getElementById("txtPregunta").value="";
				cod=0;
				
		  /*
				document.getElementById("resultado1").innerHTML= tener.test(cadena);
				document.getElementById("resultado2").innerHTML= edad.test(cadena);
		  */ 	  
		  if (Que.test(cadena)==true && Fecha.test(cadena)==true) {
			  cod = 20;
		  };
		  if (Agustin.test(cadena)==true && quien.test(cadena)==true) {
			  cod = 19;
		  };
		  if (JoRod.test(cadena)==true && quien.test(cadena)==true) {
			  cod = 18;
		  };
		  if (Joaquin.test(cadena)==true && quien.test(cadena)==true) {
			  cod = 17;
		  };
		  if (Matias.test(cadena)==true && quien.test(cadena)==true) {
			  cod = 16;
		  };
				if (prohibido.test(cadena)==true) {
				  cod = 15;
				};
				if (belen.test(cadena)==true && quien.test(cadena)==true) {
					cod = 13;
				};
				if (sebita.test(cadena)==true && quien.test(cadena)==true){
					cod = 12;
				};
				if (sebita.test(cadena)==true && quien.test(cadena)==false){
				  cod = 12;
			  };
				if (friv.test(cadena)==true) {
					cod = 11;
				};
				if (comoestas.test(cadena)==true && moe.test(cadena)==true) {
				cod = 5;
				};
				if (comoestas.test(cadena)==true && moe.test(cadena)==false) {
				  cod = 5;
				  };
				if (saludar.test(cadena)==true && moe.test(cadena)==true) {
				  cod = 1;
				};
				if (saludar.test(cadena)==true && moe.test(cadena)==false) {
				  cod = 1;
				};
				  if (bien.test(cadena)==true) {
				  cod = 2;
				};
				if (tener.test(cadena)==true && edad.test(cadena)==true ) {
				  cod = 4;
				};
				if (moe.test(cadena)==true && comoestas.test(cadena)==false && saludar.test(cadena)==false && quien.test(cadena)==true) {
			   cod = 3;		  
				};
				if (tyler.test(cadena)==true && quien.test(cadena)==true) {
				  cod = 6;
				};
				if (adios.test(cadena)==true) {
				  cod = 7;
				};
				if (hora.test(cadena)==true && que.test(cadena)==true) {
					cod = 8;
				};
				if (que.test(cadena)==true && metodo.test(cadena)==true) {
				  cod = 9;
				};
				if (que.test(cadena)==true && hipotesis.test(cadena)==true) {
					cod = 10;
				};
				if (memes.test(cadena)==true) {
					cod = 14;
				};
				if (uwu.test(cadena)==true) {
					cod = 21;
				};
			  //Lama a responder
				  setTimeout(this.responder, 1000);
				//responder();
			  }, 
			  responder() {
				var r = Math.floor((Math.random() * 3) + 1);
				console.log("random " + r);
				console.log("cod " + cod);
				var mensaje;
				  switch (cod) {
			//Respuestas
			case 0:
				if (document.getElementById('txtPregunta').value === false) {
						mensaje = "Podrias escribir algo?";
				} else {
					return;
				}
				break;
				  case 1:
						if (r == 1) {
						mensaje = "Wena, como estás?";
						};
						if (r == 2) {
						mensaje = "Hola, como va la vida?";
						};
						if (r == 3) {
						mensaje = "Todos dicen 'Buena Moe, Hola Moe', pero nadie dice 'Como estás Moe' 😪";
						};
						
					break;
					
					case 2:
							if (r == 1) {
								mensaje = "Si? Yo te veo triste :(";
								};
							if (r == 2) {
								mensaje = "Que bueno :)";
								};
					if (r == 3) {
						mensaje = "Me alegro.";
						};
					break;
				  case 3:
					  mensaje = "Aqui hay una foto mia."
					  setTimeout(redireccionarMoe,1500);
					  break;
					case 4:
					if (r == 1) {
						mensaje = "Podria decir que 20.";
						};
						if (r == 2) {
						mensaje = "20";
						};
						if (r == 3) {
						mensaje = "Tengo 20 años.";
						};
			
					 break;
					
					case 5:
						if (r == 1) {
							mensaje = "Estoy la raja hermano, como andas tu amigo?";
						};
						if (r == 2) {
							mensaje = "Ando mal, tu como estás?";
						};
						if (r == 3) {
							mensaje = "Estoy apenao, se me murió el Tyler1."
							setTimeout(redireccionarTylerMuerto, 1500);
						};
					break;
					case 6:
						mensaje = "Aqui una foto de mi amigo Tyler1"
						setTimeout(redireccionarTyler,1500);
						
						break;
						case 7:		
						if (r == 1) {
							mensaje = "Bueno, hasta luego."
						};
						if (r == 2) {
						mensaje = "Chao, nos vemos después."
						};
						if (r == 3) {
						mensaje = "Andate luego."
						};
			
						setTimeout(redireccionarGoogle, 2000);
			
							break;
			
							case 8:
									var fechaHora = new Date();
									var horas = fechaHora.getHours();
									var minutos = fechaHora.getMinutes();
									var segundos = fechaHora.getSeconds();
									
									if(horas < 10) { horas = '0' + horas; }
									if(minutos < 10) { minutos = '0' + minutos; }
									if(segundos < 10) { segundos = '0' + segundos; }
								mensaje = horas+':'+minutos+':'+segundos;
								break;
								case 9:
								mensaje = "El método científico es una metodología para obtener nuevos conocimientos, que ha caracterizado históricamente a la ciencia, y que consiste en la observación sistemática, medición, experimentación, y la formulación, análisis y modificación de hipótesis. Otras características del método científico son la deducción, la inducción, la abducción, la predicción, la falsabilidad, la reproducibilidad y repetibilidad de los resultados, y la revisión por pares.\nLas reglas y principios del método científico buscan minimizar la influencia de la subjetividad del científico en su trabajo, lo cual refuerza la validez de los resultados, y por ende, del conocimiento obtenido."
									break;
									case 10:
										mensaje = "Una hipótesis (del griego hipo, 'subordinación' o 'por debajo' y tesis, 'conclusión que se mantiene con un razonamiento') es un enunciado no verificado, una vez refutado o confirmado dejará de ser hipótesis y sería un enunciado verificado. La hipótesis es una conjetura científica que requiere una contrastación con la experiencia.​ Para ella no son suficientes los argumentos persuasivos, por más elaborados que sean. Se puede decir entonces, que de ciertas hipótesis se deducen otras y así sucesivamente hasta llegar a ciertos enunciados básicos, de observación directa." 
									break;
									case 11:
										if (r = 1) {
										mensaje = "De verdad quieres ir a Friv?"
										}
										if (r = 2) {
											mensaje = "Bueno... te llevaré ahí... (Debes tener 5 años uwu)"
										}
										if (r = 3) {
											mensaje = "Wow, si que quieres volver al pasado XD"
										}
										setTimeout(redireccionarFriv,2000);
										break;
										case 12: 
										mensaje = "Aqui esta una foto de mi amigo Sebita"
										setTimeout(redireccionarSebita, 2000);
										break;
										case 13:
										mensaje = "Es mejor describir a las personas con una foto, no?"
										setTimeout(redireccionarBelen,2000);
										break;
										case 14:
										if (r = 1) {
											mensaje = "XD"
										}
										if (r = 2) {
											mensaje = "Buenardo"
										}
										if (r = 3) {
											mensaje = "Fome"
										}
										break;
										case 15:
											mensaje = "No creo que quieras ver eso..."
											break;
											case 16:
													var r = Math.floor((Math.random() * 2) + 1);
												if (r = 1) {
													mensaje = "Si tranqui, aqui hay una foto de el."
													setTimeout(redireccionarMatias,2000);
												}
												if (r = 2) {
													mensaje = "UwU?"
													setTimeout(redireccionarMatiasv2,2000);
												}
												break;
												case 17:
												mensaje = "Aqui hay una foto de mi amigo el Chino"
												setTimeout(redireccionarJoaquin,2000);
												break;
												case 18:
													mensaje = "Feliz Cumpleaños Jo uwu"
													setTimeout(redireccionarJoRod,2000);
													break;
													case 19:
														mensaje = "Esta mamadisimo"
														setTimeout(redireccionarAgu,2000);
														break;
														case 20:
															var dia = new Date();
															var año = dia.getFullYear();
															var mes = dia.getMonth();
															var dias = dia.getDate();
															mensaje = `${dias}/${mes+1}/${año}`
															 break;
															 case 21: 
															 if (r = 3) {
																mensaje = "owo"
															 } 
															 if (r = 2) {
																mensaje = "OwO"
															 }
															 if (r = 1) {
																mensaje = "tas chikito?"
																setTimeout(redireccionarMoeChikito, 2000);
															 }
															 break;
					default:
					mensaje = "¿Podrías ser más claro por favor?";
			
				  }
				  //document.getElementById("respuesta").innerHTML = mensaje;
				  escribirChat(mensaje);
				}
		  }
});

/*
Lo de arriba es Vue
Tu tranquilo :D
*/


//Declaración de variables
    var cadena, cod, respuesta;
	
	//Declaración de expresiones
    var tener = RegExp("(TIENE|TIENES)");
    var edad = /AÑOS/;
	var saludar = /HOLA/;
	var bien = RegExp("(BIEN|PANA|BKN)");
	var moe = /MOE/;
	var comoestas = RegExp("(COMO|ESTAS)");
	var tyler = /TYLER1/;
	var adios = RegExp("(CHAO|NOS VEMOS|ADIOS|FUERA)");
	var hora = /HORA/;
	var que = /QUE/;
	var quien = /QUIEN/;
	var metodo = /METODO CIENTIFICO/;
	var hipotesis = /HIPOTESIS/;
	var friv = /FRIV/;
	var stella = /STELLA/; //No ocupado
	var sebita = RegExp("(SEBITA|SEBA|TYLER THE CREATOR)");
	var belen = RegExp("(BELU|BELEN)");
	var memes = RegExp("(BUENARDO|XD|FOME)");
	var uwu = /UWU/;
	var prohibido = RegExp("(RICARDO MILOS|RICARDO|PORNO)");
	var Matias = RegExp("(MATIAS|MATIGOL)");
	var Joaquin = RegExp("(JOAQUIN|JOAQUIN ABARCA|CHINO|CHINO RIOS)");
	var JoRod = RegExp("(JO|JOSEFINA|JO ROD|JOROD)");
	var Agustin = RegExp("(AGUSTIN|AGU)");
	var Fecha = /DIA/;
	var Que = /QUE/;

	  
	  function escribirChat (texto) {
		  if (document.getElementById("areaChat").value === 0) {
			return;
		  } else {
		  document.getElementById("areaChat").value += texto + "\r";
		  
	  }
	}
	  function redireccionarMoe() {
   document.location.href = "https://i.redd.it/4k5n0layuw331.png"
	  }
  function redireccionarTyler() {
  document.location.href = "https://i.redd.it/8j3euqv0i2a01.jpg"
  }
  function redireccionarGoogle() {
	  document.location.href = "https://www.google.com"
  }
  
  function redireccionarTylerMuerto() {
	  document.location.href="https://www.youtube.com/watch?v=ppyyQxgQq9I"
  }
  function redireccionarFriv() {
	  document.location.href="http://www.juegosdefriv20.com"
  }
  function redireccionarSebita() {
	  document.location.href= "https://i.redd.it/jox6ybiu7qs31.jpg"
  }
  function redireccionarBelen() {
	  document.location.href="https://i.redd.it/44jd7fy2yiv31.jpg"
  }
  function redireccionarMatias() {
  document.location.href = "https://i.redd.it/edz1x38nhjv31.jpg"
  }
  function redireccionarMatiasv2() {
	  document.location.href = "https://i.redd.it/tbr1t5cuhjv31.jpg"
  }
  function redireccionarJoaquin() {
	  document.location.href = "https://i.redd.it/ogg0t480gnw31.jpg"
  }
  function redireccionarJoRod() {
	  document.location.href = "https://i.redd.it/u2r9l3s9inw31.jpg"
  }
  function redireccionarAgu() {
	  document.location.href = "https://i.redd.it/uz5rup0amuw31.jpg"
  }
  function redireccionarMoeChikito() {
	  document.location.href = "https://i.redd.it/0egjxf8snnz31.jpg"
  }
