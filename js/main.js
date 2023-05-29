const {createApp} = Vue;

createApp({
    data(){
        return{
            listaEmail: [],
            newEmail: ''
        }
    },
    mounted(){
        console.log("Che succede amico?!");

        for (i = 0; i < 10; i++) {
            
            // richiamo la libreria axios
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(
                
                item => {
                // console.log(item.data.response);

                // genero email random
                this.newEmail = item.data.response;
                console.log(this.newEmail);

                // inserisco l'email generata nell'array vuoto
                this.listaEmail.push(this.newEmail);
                console.log(this.listaEmail);
                
            });
            
        }
    }
}).mount("#myapp");