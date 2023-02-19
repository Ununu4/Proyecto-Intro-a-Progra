<!DOCTYPE html>
<html>
<head>
	<title>ProyectoFinal</title>
</head>
<body>
	<script>
		// Preguntar la edad del usuario.
		var name = prompt("Ingrese su nombre porfavor");
		var age = parseInt(prompt("Ingrese su edad porfavor"));

		if (age < 18) {
			alert("Edad no Valida");
			throw new Error("Edad no Valida");
		}

		// Calculate additional charges based on age
		var additionalCharges = 0;
		if (age >= 18 && age <= 24) {
			additionalCharges = 0.1 * 2000;
		} else if (age >= 25 && age <= 49) {
			additionalCharges = 0.2 * 2000;
		} else {
			additionalCharges = 0.3 * 2000;
		}

		// Preguntarle al usuario si esta casado o no
		var isMarried = prompt("Esta usted casado? (Si or No)").toLowerCase() === "si";
		var numChildren = 0;
		var spouseAge = 0;
		if (isMarried) {
			spouseAge = parseInt(prompt("Ingrese la edad de su conyuge"));
			var hasChildren = prompt("Tiene usted hijos? (Si or No)").toLowerCase() === "si";
			if (hasChildren) {
				numChildren = parseInt(prompt("Ingrese la cantidad de hijos"));
				for (var i = 1; i <= numChildren; i++) {
					var childAge = parseInt(prompt("Cual es la edad del " + i + "hijo"));
					if (childAge >= 18 && childAge <= 24) {
						additionalCharges += 0.1 * 2000;
					} else if (childAge >= 25 && childAge <= 49) {
						additionalCharges += 0.2 * 2000;
					} else {
						additionalCharges += 0.3 * 2000;
					}
				}
			}
		} 
		
        // calcular el precio final al usuario
		var totalPrice = 2000 + additionalCharges;
		alert("Gracias, " + name + " Su precio total es : $" + totalPrice.toFixed(2));
	</script>
</body>
</html>