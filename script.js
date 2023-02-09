$(document).ready(function() {
//Objectif principal : 
//L'application doit permettre à l'utilisateur de rentrer des nouvelles tâches via un champ input et de consulter les tâches en cours. 
    //ajouter des nouvelles tâches
    // //récupérer la valeur de l'input quand on clique sur le bouton 
    // // //identifier l'input
    let newtask = $('#task')
    // // //récupérer la valeur de l'input au clic
    $('#add').click(function() {
        let newitem = newtask.val()
        // //afficher la tâche
        // // //récupérer le parent
        const list = $('#list')
        // // //créer un élément enfant
        let item = $(`<li>${newitem}</li>`)
        // // //on insère l'enfant dans le parent
        list.append(item)
        // // //on vide ensuite le champ
        newtask.val('')

        // Objectifs supplémentaires :
        //- Pouvoir éditer la tâche
        // // Au clic sur un bouton 
        // // //on crée le bouton et on l'insère dans notre item de liste
        let edit = $(`<button>U</button>`) 
        item.append(edit)
        // // //au clic ...
        edit.click(function() {
            // faire apparaitre un prompt et récupérer sa valeur
            let updatedTask = prompt('modifier la tâche', newitem)
            // jQuery c'est chiant : on récupère la liste des noeuds, puis le premier enfant, enfin on le remplace par la valeur du prompt \\
            item.contents().first().replaceWith(updatedTask) 
        })
        // //Avoir un bouton pour dire que la tâche a été effectuée
        // // // ajouter un bouton au li
        let validate = $(`<button>V</button>`)
        item.append(validate)
        // // // au clic, valider la tâche
        validate.click(function() {
            // // // pour faire simple, on va ajouter une classe qui va barrer la tâche
            // // // si la tâche est déjà barrée
            if(item.hasClass("line-through")){
                // // // on lui retire la classe
                item.removeClass("line-through")
            // // // sinon     
            }else{
                // // // on lui ajoute
                item.addClass("line-through")
            }
        })
        // //Avoir un bouton la supprimer 
        // // // ajouter un bouton au li
        // // // //on crée donc un bouton
        let trash = $(`<button>X</button>`)
        // // // //on l'ajoute au li
        item.append(trash)
        // // // supprimer la tache au clic sur le bouton 
        trash.click(function() {
            item.remove()
        })
    })
})