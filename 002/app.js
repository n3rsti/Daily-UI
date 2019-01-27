

const app = new Vue({
    el: ".header__checkout",
    data: {
        cardType: "",
        

        
    },
    methods: {
        visa: function(){
            this.cardType = "Visa";
        },
        mastercard: function(){
            this.cardType = "Mastercard";
        },
    }
});