const listaInvitados = [
  { nombre: 'Morena Lopez', mesa: 'MESA 1', acompanantes: 0, qr: "verdadero" },
  { nombre: 'Angel Castillo', mesa: 'MESA 1', acompanantes: 0, qr: "falso" },
  { nombre: 'Enrique Castillo', mesa: 'MESA 1', acompanantes: 0, qr: "falso" },
  { nombre: 'Sucely Palacios', mesa: 'MESA 1', acompanantes: 0, qr: "falso" },
  { nombre: 'Patricia Lopez', mesa: 'MESA 1', acompanantes: 1, qr: "falso" },
  { nombre: 'Moises Campos', mesa: 'MESA 1', acompanantes: 0, qr: "falso" },
  { nombre: 'Stephany Castillo', mesa: 'MESA 1', acompanantes: 1, qr: "falso" },
  { nombre: 'novio', mesa: 'MESA 1', acompanantes: 0, qr: "falso" },
  { nombre: 'Marisol Navas', mesa: 'MESA 1', acompanantes: 1, qr: "falso" },
  { nombre: 'hijo', mesa: 'MESA 1', acompanantes: 0, qr: "falso" },
  { nombre: 'Lucas Amaya', mesa: 'MESA 2', acompanantes: 1, qr: "falso" },
  { nombre: 'Mirna De Amaya', mesa: 'MESA 2', acompanantes: 0, qr: "falso" },
  { nombre: 'Carmen Emilia Amaya', mesa: 'MESA 2', acompanantes: 4, qr: "falso" },
  { nombre: 'Joaquin', mesa: 'MESA 2', acompanantes: 0, qr: "falso" },
  { nombre: 'Camila', mesa: 'MESA 2', acompanantes: 0, qr: "falso" },
  { nombre: 'Yancy', mesa: 'MESA 2', acompanantes: 0, qr: "falso" },
  { nombre: 'Jason', mesa: 'MESA 2', acompanantes: 0, qr: "falso" },
  { nombre: 'Nicole Amaya', mesa: 'MESA 2', acompanantes: 0, qr: "falso" },
  { nombre: 'Mirna Amaya', mesa: 'MESA 2', acompanantes: 1, qr: "falso" },
  { nombre: 'amiga Mirna', mesa: 'MESA 2', acompanantes: 0, qr: "falso" },
  { nombre: 'Andrea Cordova', mesa: 'MESA 3', acompanantes: 1, qr: "falso" },
  { nombre: 'hija', mesa: 'MESA 3', acompanantes: 0, qr: "falso" },
  { nombre: 'Monica Cordova', mesa: 'MESA 3', acompanantes: 3, qr: "falso" },
  { nombre: 'Mama sarai', mesa: 'MESA 3', acompanantes: 0, qr: "falso" },
  { nombre: 'Leito', mesa: 'MESA 3', acompanantes: 0, qr: "falso" },
  { nombre: 'Sofia', mesa: 'MESA 3', acompanantes: 0, qr: "falso" },
  { nombre: 'Mauricio Castellon', mesa: 'MESA 3', acompanantes: 1, qr: "falso" },
  { nombre: 'esposa', mesa: 'MESA 3', acompanantes: 0, qr: "falso" },
  { nombre: 'ALBERTO AGUILAR', mesa: 'MESA 3', acompanantes: 1, qr: "falso" },
  { nombre: 'CLARA AGUILAR', mesa: 'MESA 3', acompanantes: 0, qr: "falso" },
  { nombre: 'ROSA VALLE', mesa: 'MESA 4', acompanantes: 0, qr: "falso" },
  { nombre: 'JOSE OCHOA', mesa: 'MESA 4', acompanantes: 0, qr: "falso" },
  { nombre: 'ROBERTO OCHOA', mesa: 'MESA 4', acompanantes: 1, qr: "falso" },
  { nombre: 'esposa', mesa: 'MESA 4', acompanantes: 0, qr: "falso" },
  { nombre: 'RAUL OCHOA', mesa: 'MESA 4', acompanantes: 1, qr: "falso" },
  { nombre: 'esposa', mesa: 'MESA 4', acompanantes: 0, qr: "falso" },
  { nombre: 'ROXANA OCHOA', mesa: 'MESA 4', acompanantes: 1, qr: "falso" },
  { nombre: 'acompañante', mesa: 'MESA 4', acompanantes: 0, qr: "falso" },
  { nombre: 'JONATHAN MENJIVAR', mesa: 'MESA 4', acompanantes: 1, qr: "falso" },
  { nombre: 'acompañante', mesa: 'MESA 4', acompanantes: 0, qr: "falso" },
  { nombre: 'ELMER GONZALEZ', mesa: 'MESA 5', acompanantes: 1, qr: "falso" },
  { nombre: 'esposa', mesa: 'MESA 5', acompanantes: 0, qr: "falso" },
  { nombre: 'CARMEN AMAYA', mesa: 'MESA 5', acompanantes: 0, qr: "falso" },
  { nombre: 'ELMER ESPOSO', mesa: 'MESA 5', acompanantes: 0, qr: "falso" },
  { nombre: 'RODRIGO PRIMO', mesa: 'MESA 5', acompanantes: 0, qr: "falso" },
  { nombre: 'JOHANA PRIMA', mesa: 'MESA 5', acompanantes: 0, qr: "falso" },
  { nombre: 'CLARA AMAYA', mesa: 'MESA 5', acompanantes: 0, qr: "falso" },
  { nombre: 'TULES AMAYA', mesa: 'MESA 5', acompanantes: 0, qr: "falso" },
  { nombre: 'OSMIN AMAYA', mesa: 'MESA 5', acompanantes: 1, qr: "falso" },
  { nombre: 'esposa', mesa: 'MESA 5', acompanantes: 0, qr: "falso" },
  { nombre: 'OMAR AMAYA', mesa: 'MESA 6', acompanantes: 1, qr: "falso" },
  { nombre: 'acompañante', mesa: 'MESA 6', acompanantes: 0, qr: "falso" },
  { nombre: 'JOSE ADAN IRAHETA', mesa: 'MESA 6', acompanantes: 1, qr: "falso" },
  { nombre: 'acompañante', mesa: 'MESA 6', acompanantes: 0, qr: "falso" },
  { nombre: 'MANUEL AMAYA', mesa: 'MESA 6', acompanantes: 2, qr: "falso" },
  { nombre: 'acompañante', mesa: 'MESA 6', acompanantes: 0, qr: "falso" },
  { nombre: 'acompañante', mesa: 'MESA 6', acompanantes: 0, qr: "falso" },
  { nombre: 'STEVEN HERNANDEZ', mesa: 'MESA 6', acompanantes: 1, qr: "falso" },
  { nombre: 'acompañante', mesa: 'MESA 6', acompanantes: 0, qr: "falso" },
  { nombre: 'WILLIAM RIVAS', mesa: 'MESA 7', acompanantes: 1, qr: "falso" },
  { nombre: 'acompañante', mesa: 'MESA 7', acompanantes: 0, qr: "falso" },
  { nombre: 'CELINA MARTINEZ', mesa: 'MESA 7', acompanantes: 1, qr: "falso" },
  { nombre: 'MARCK', mesa: 'MESA 7', acompanantes: 0, qr: "falso" },
  { nombre: 'CLAUDIA RIVAS', mesa: 'MESA 7', acompanantes: 0, qr: "falso" },
  { nombre: 'NEMESIO MEJIA', mesa: 'MESA 7', acompanantes: 1, qr: "falso" },
  { nombre: 'acompañante', mesa: 'MESA 7', acompanantes: 0, qr: "falso" },
  { nombre: 'EDWIN GRANDE', mesa: 'MESA 7', acompanantes: 1, qr: "falso" },
  { nombre: 'acompañante', mesa: 'MESA 7', acompanantes: 0, qr: "falso" },
  { nombre: 'MARIBEL MARTINEZ', mesa: 'MESA 7', acompanantes: 0, qr: "falso" },
  { nombre: 'CARMEN ELENA PINEDA', mesa: 'MESA 8', acompanantes: 1, qr: "falso" },
  { nombre: 'acompañante', mesa: 'MESA 8', acompanantes: 0, qr: "falso" },
  { nombre: 'ANA CELIA PINEDA', mesa: 'MESA 8', acompanantes: 1, qr: "falso" },
  { nombre: 'acompañante', mesa: 'MESA 8', acompanantes: 0, qr: "falso" },
  { nombre: 'CELIA DE PINEDA', mesa: 'MESA 8', acompanantes: 1, qr: "falso" },
  { nombre: 'acompañante', mesa: 'MESA 8', acompanantes: 0, qr: "falso" },
  { nombre: 'CLAUDIA PINEDA', mesa: 'MESA 8', acompanantes: 0, qr: "falso" },
  { nombre: 'JOSE PINEDA', mesa: 'MESA 8', acompanantes: 1, qr: "falso" },
  { nombre: 'acompañante', mesa: 'MESA 8', acompanantes: 0, qr: "falso" },
  { nombre: 'LUIS PINEDA', mesa: 'MESA 8', acompanantes: 0, qr: "falso" },
  { nombre: 'ALEXIS PEREZ', mesa: 'MESA 9', acompanantes: 0, qr: "falso" },
  { nombre: 'ASHLEY RIVERA', mesa: 'MESA 9', acompanantes: 0, qr: "falso" },
  { nombre: 'JUAN LOPEZ', mesa: 'MESA 9', acompanantes: 1, qr: "falso" },
  { nombre: 'acompañante', mesa: 'MESA 9', acompanantes: 0, qr: "falso" },
  { nombre: 'GERARDO MARTINEZ', mesa: 'MESA 9', acompanantes: 1, qr: "falso" },
  { nombre: 'acompañante', mesa: 'MESA 9', acompanantes: 0, qr: "falso" },
  { nombre: 'WILL FIGUEROA', mesa: 'MESA 9', acompanantes: 0, qr: "falso" },
  { nombre: 'ERICK SANTOS', mesa: 'MESA 9', acompanantes: 0, qr: "falso" },
  { nombre: 'VICTOR ABARCA', mesa: 'MESA 9', acompanantes: 1, qr: "falso" },
  { nombre: 'acompañante', mesa: 'MESA 9', acompanantes: 0, qr: "falso" },
  { nombre: 'ANGELA AMAYA', mesa: 'MESA 10', acompanantes: 1, qr: "falso" },
  { nombre: 'esposo', mesa: 'MESA 10', acompanantes: 0, qr: "falso" },
  { nombre: 'MAGALY HERNANDEZ', mesa: 'MESA 10', acompanantes: 1, qr: "falso" },
  { nombre: 'hijo', mesa: 'MESA 10', acompanantes: 0, qr: "falso" },
  { nombre: 'AMERICA HERNANDEZ', mesa: 'MESA 10', acompanantes: 1, qr: "falso" },
  { nombre: 'hija', mesa: 'MESA 10', acompanantes: 0, qr: "falso" },
  { nombre: 'GERBER HERNANDEZ', mesa: 'MESA 10', acompanantes: 1, qr: "falso" },
  { nombre: 'esposa', mesa: 'MESA 10', acompanantes: 0, qr: "falso" },
  { nombre: 'CANDE AMAYA', mesa: 'MESA 10', acompanantes: 0, qr: "falso" },
  { nombre: 'PACO AMAYA', mesa: 'MESA 10', acompanantes: 0, qr: "falso" },
  { nombre: 'ANGELICA HERNANDEZ', mesa: 'MESA 11', acompanantes: 3, qr: "falso" },
  { nombre: 'esposo', mesa: 'MESA 11', acompanantes: 0, qr: "falso" },
  { nombre: 'hijo', mesa: 'MESA 11', acompanantes: 0, qr: "falso" },
  { nombre: 'hija', mesa: 'MESA 11', acompanantes: 0, qr: "falso" },
  { nombre: 'JUANITA AMAYA', mesa: 'MESA 11', acompanantes: 1, qr: "falso" },
  { nombre: 'acompañante', mesa: 'MESA 11', acompanantes: 0, qr: "falso" },
  { nombre: 'ERICK FERNANDEZ', mesa: 'MESA 11', acompanantes: 1, qr: "falso" },
  { nombre: 'acompañante', mesa: 'MESA 11', acompanantes: 0, qr: "falso" },
  { nombre: 'GERSON RIVAS', mesa: 'MESA 11', acompanantes: 0, qr: "falso" },
  { nombre: 'MARCOS MENENDEZ', mesa: 'MESA 11', acompanantes: 0, qr: "falso" },
  { nombre: 'ELVIS DIAZ', mesa: 'MESA 12', acompanantes: 1, qr: "falso" },
  { nombre: 'acompañante', mesa: 'MESA 12', acompanantes: 0, qr: "falso" },
  { nombre: 'KEVIN DIAZ', mesa: 'MESA 12', acompanantes: 1, qr: "falso" },
  { nombre: 'acompañante', mesa: 'MESA 12', acompanantes: 0, qr: "falso" },
  { nombre: 'FRANK DIAZ', mesa: 'MESA 12', acompanantes: 3, qr: "falso" },
  { nombre: 'acompañante', mesa: 'MESA 12', acompanantes: 0, qr: "falso" },
  { nombre: 'acompañante', mesa: 'MESA 12', acompanantes: 0, qr: "falso" },
  { nombre: 'acompañante', mesa: 'MESA 12', acompanantes: 0, qr: "falso" },
  { nombre: 'Gustavo Menjivar', mesa: 'MESA 12', acompanantes: 1, qr: "falso" },
  { nombre: 'acompañante', mesa: 'MESA 12', acompanantes: 0, qr: "falso" },
  { nombre: 'MELVIN LUE', mesa: 'MESA 13', acompanantes: 0, qr: "falso" },
  { nombre: 'JENNIFER PLEITEZ', mesa: 'MESA 13', acompanantes: 0, qr: "falso" },
  { nombre: 'YESENIA VASQUEZ', mesa: 'MESA 13', acompanantes: 0, qr: "falso" },
  { nombre: 'MIRIAM MARTINEZ', mesa: 'MESA 13', acompanantes: 0, qr: "falso" },
  { nombre: 'JOEL ZUNIGA', mesa: 'MESA 13', acompanantes: 0, qr: "falso" },
  { nombre: 'OSCAR RAMIREZ', mesa: 'MESA 13', acompanantes: 1, qr: "falso" },
  { nombre: 'acompañante', mesa: 'MESA 13', acompanantes: 0, qr: "falso" },
  { nombre: 'JORGE HERNANDEZ', mesa: 'MESA 13', acompanantes: 0, qr: "falso" },
  { nombre: 'IVONNE HERNANDEZ', mesa: 'MESA 14', acompanantes: 1, qr: "falso" },
  { nombre: 'esposo', mesa: 'MESA 14', acompanantes: 0, qr: "falso" },
  { nombre: 'GABRIELA HERNANDEZ', mesa: 'MESA 14', acompanantes: 1, qr: "falso" },
  { nombre: 'hija', mesa: 'MESA 14', acompanantes: 0, qr: "falso" },
  { nombre: 'EVELYN FUENTES', mesa: 'MESA 14', acompanantes: 0, qr: "falso" },
  { nombre: 'VIOLETA ESCALANTE', mesa: 'MESA 14', acompanantes: 0, qr: "falso" },
  { nombre: 'FREDY REALEGENO', mesa: 'MESA 14', acompanantes: 1, qr: "falso" },
  { nombre: 'esposa', mesa: 'MESA 14', acompanantes: 0, qr: "falso" },
  { nombre: 'FRANCISCO CORNEJO', mesa: 'MESA 14', acompanantes: 1, qr: "falso" },
  { nombre: 'esposa', mesa: 'MESA 14', acompanantes: 0, qr: "falso" },
  { nombre: 'JOSE QUINTANILLA', mesa: 'MESA 14', acompanantes: 0, qr: "falso" },
  { nombre: 'Elizabeth Aquian', mesa: 'MESA 14', acompanantes: 0, qr: "falso" },
  { nombre: 'ROSARIO', mesa: 'MESA 15', acompanantes: 1, qr: "falso" },
  { nombre: 'hijo', mesa: 'MESA 15', acompanantes: 0, qr: "falso" },
  { nombre: 'LUPITA', mesa: 'MESA 15', acompanantes: 1, qr: "falso" },
  { nombre: 'esposo', mesa: 'MESA 15', acompanantes: 0, qr: "falso" },
  { nombre: 'TERESA', mesa: 'MESA 15', acompanantes: 1, qr: "falso" },
  { nombre: 'acompañante', mesa: 'MESA 15', acompanantes: 0, qr: "falso" },
  { nombre: 'ESTEFANI LOPEZ', mesa: 'MESA 15', acompanantes: 1, qr: "falso" },
  { nombre: 'esposo', mesa: 'MESA 15', acompanantes: 0, qr: "falso" },
  { nombre: 'ABRAHAM LOPEZ', mesa: 'MESA 15', acompanantes: 1, qr: "falso" },
  { nombre: 'esposa', mesa: 'MESA 15', acompanantes: 0, qr: "falso" },
  { nombre: 'GLENDA CONTRERAS', mesa: 'MESA 16', acompanantes: 1, qr: "falso" },
  { nombre: 'hijo', mesa: 'MESA 16', acompanantes: 0, qr: "falso" },
  { nombre: 'SOPHIA MELENDEZ', mesa: 'MESA 16', acompanantes: 0, qr: "falso" },
  { nombre: 'VANESSA MELGAR', mesa: 'MESA 16', acompanantes: 0, qr: "falso" },
  { nombre: 'VILMA MOZ', mesa: 'MESA 16', acompanantes: 1, qr: "falso" },
  { nombre: 'acompañante', mesa: 'MESA 16', acompanantes: 0, qr: "falso" },
  { nombre: 'ANA ROSA CENTENO', mesa: 'MESA 16', acompanantes: 1, qr: "falso" },
  { nombre: 'acompañante', mesa: 'MESA 16', acompanantes: 0, qr: "falso" },
  { nombre: 'CRISTY', mesa: 'MESA 16', acompanantes: 1, qr: "falso" },
  { nombre: 'DON FRANK', mesa: 'MESA 16', acompanantes: 0, qr: "falso" },
  { nombre: 'RUBEN AMAYA', mesa: 'MESA 17', acompanantes: 1, qr: "falso" },
  { nombre: 'acompañante', mesa: 'MESA 17', acompanantes: 0, qr: "falso" },
  { nombre: 'FERNANDO GOCHEZ', mesa: 'MESA 17', acompanantes: 1, qr: "falso" },
  { nombre: 'esposa', mesa: 'MESA 17', acompanantes: 0, qr: "falso" },
  { nombre: 'RENE GUZMAN', mesa: 'MESA 17', acompanantes: 1, qr: "falso" },
  { nombre: 'acompañante', mesa: 'MESA 17', acompanantes: 0, qr: "falso" },
  { nombre: 'GEORGINA BRIONES', mesa: 'MESA 17', acompanantes: 1, qr: "falso" },
  { nombre: 'acompañante', mesa: 'MESA 17', acompanantes: 0, qr: "falso" },
  { nombre: 'URANIA ZELAYA', mesa: 'MESA 17', acompanantes: 0, qr: "falso" },
  { nombre: 'PATY GIRON', mesa: 'MESA 17', acompanantes: 0, qr: "falso" },
  { nombre: 'YANIRA DE UMAÑA', mesa: 'MESA 18', acompanantes: 0, qr: "falso" },
  { nombre: 'YANILETH MOZO', mesa: 'MESA 18', acompanantes: 0, qr: "falso" },
  { nombre: 'JUAN CARLOS NAJERA', mesa: 'MESA 18', acompanantes: 0, qr: "falso" },
  { nombre: 'SINDY VELIZ', mesa: 'MESA 18', acompanantes: 0, qr: "falso" },
  { nombre: 'ERNESTO RAMIREZ', mesa: 'MESA 18', acompanantes: 0, qr: "falso" },
  { nombre: 'MARIO VEGA', mesa: 'MESA 18', acompanantes: 0, qr: "falso" },
  { nombre: 'ALEX ALVAREZ', mesa: 'MESA 18', acompanantes: 0, qr: "falso" },
  { nombre: 'VERALIZ SEVILLANO', mesa: 'MESA 18', acompanantes: 0, qr: "falso" },
  { nombre: 'Gloria Rodriguez', mesa: 'MESA 18', acompanantes: 0, qr: "falso" },
  { nombre: 'JOSE SOLORZANO', mesa: 'MESA 18', acompanantes: 0, qr: "falso" },
  { nombre: 'DANIEL RIVAS', mesa: 'MESA 19', acompanantes: 1, qr: "falso" },
  { nombre: 'acompañante', mesa: 'MESA 19', acompanantes: 0, qr: "falso" },
  { nombre: 'LEON RODRIGUEZ', mesa: 'MESA 19', acompanantes: 1, qr: "falso" },
  { nombre: 'acompañante', mesa: 'MESA 19', acompanantes: 0, qr: "falso" },
  { nombre: 'TONY LOPEZ', mesa: 'MESA 19', acompanantes: 1, qr: "falso" },
  { nombre: 'esposa', mesa: 'MESA 19', acompanantes: 0, qr: "falso" },
  { nombre: 'RODRIGO SISNIEGA', mesa: 'MESA 19', acompanantes: 1, qr: "falso" },
  { nombre: 'esposa', mesa: 'MESA 19', acompanantes: 0, qr: "falso" },
  { nombre: 'NEFTALY RAMONE', mesa: 'MESA 19', acompanantes: 1, qr: "falso" },
  { nombre: 'novia', mesa: 'MESA 19', acompanantes: 0, qr: "falso" },
  { nombre: 'ENRIQUE PORTILLO', mesa: 'MESA 20', acompanantes: 3, qr: "falso" },
  { nombre: 'esposa', mesa: 'MESA 20', acompanantes: 0, qr: "falso" },
  { nombre: 'hija', mesa: 'MESA 20', acompanantes: 0, qr: "falso" },
  { nombre: 'hija', mesa: 'MESA 20', acompanantes: 0, qr: "falso" },
  { nombre: 'CECILIA LOPEZ', mesa: 'MESA 20', acompanantes: 0, qr: "falso" },
  { nombre: 'NANCY LOPEZ', mesa: 'MESA 20', acompanantes: 3, qr: "falso" },
  { nombre: 'esposo', mesa: 'MESA 20', acompanantes: 0, qr: "falso" },
  { nombre: 'hijo', mesa: 'MESA 20', acompanantes: 0, qr: "falso" },
  { nombre: 'hijo', mesa: 'MESA 20', acompanantes: 0, qr: "falso" }
];
module.exports = { listaInvitados };