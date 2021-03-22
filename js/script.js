var app = new Vue ({
    el: '#app',
    data: {
        newTask: '',
        tasks: [
            'Fare esercizi',
            'Allenarsi',
            'Mangiare pollo e broccoli',
            'Aprire la piscina'
        ]
    },

    methods: {
        addTask() {
            this.tasks.push(this.newTask);
            this.newTask = '';
        },

        removeTask(index) {
            console.log(index);
            this.lastDeleted = this.tasks.splice(index, 1);    
        }

    }
});


Vue.config.devtools = true



// Descrizione: Rifare l'esercizio della to do list come fatto assieme in classe:
// - stampare in pagina un item per ogni elemento contenuto in un array
// - ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
// - predisporre un input per aggiungere un nuovo item alla lista: 
// digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista