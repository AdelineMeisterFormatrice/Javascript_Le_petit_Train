/* TODO Créer 3 variables 
nonTraction valant au depart 200
position train valant au depart 0
animation sans valeur initial
*/

var nonTraction = 20;
var positionTrain =0;
var animation;

// TODO Ajouter auditeur de clic sur le train 
// qui appelle la fonction accelerer()

var vTrain = document.getElementById("train");
vTrain.addEventListener("click",accelerer);

// TODO Ajouter auditeur de clic sur le bouton stop 
// qui appelle la fonction stopperTrain()
var vBtnStop = document.getElementById("btnStopper");
vBtnStop.addEventListener("click", stopperTrain);

function accelerer()
{
	/* TODO Tester si le train est deja en vitesse max
		sinon accelerer */
	/* Si le train avance le bloquer et redémarrer avec 
	la nouvelle vitesse(moins d'avance en roue libre) */
	if(nonTraction > 10)
	{
		nonTraction -=10;
	}

	clearInterval(animation);
	animation = setInterval(frame, nonTraction);


	function frame() 
	{
		/* TODO Replacer le train et appeller la fonction pour 
		tester s'il est arriver au bout */
		positionTrain +=2;
		vTrain.style.left = positionTrain + 'px';
		testerPosition(positionTrain);
	}
}

function testerPosition(posActuelle)
{
	/* TODO Tester la position. Si elle correspond au bord droit 
	declancher l'accident */
	if(posActuelle === 260)
	{
		alert("Boom !!! Trop tard");
		clearInterval(animation);
	}
}

function stopperTrain()
{
	/* TODO Tester si le train a deja percuter le bord 
	si ce n'est pas encore le cas, le stopper */
	if(positionTrain < 260)
	{
		clearInterval(animation);
		alert("C'était moins une Bravo");
	}
}