class Buyer{
    #_name;
    #_email;
    constructor(name, email, emitter){
        this.#_name = name;
        this.#_email = email;
        emitter.on('sales', (amount) => {
            this.SaleNotice(amount);
        });
    }
    SaleNotice(percent){
        return console.log(`To: ${this.#_email}.    Hi, ${this.#_name}! Today we have sales to ${percent}%`)
    }
    ToString(){
        return `Name: ${this.#_name} Email: ${this.#_email}`;
    }
}

export {Buyer}