export class Transaction {
    constructor(description, value, type) {
        this.id = this.generateId()
        this.description = description;
        this.value = value;
        this.type = type;
    }

    generateId() {
        return Math.floor(Math.random() * 1000)
    }
}

export class ListTransactions {
    constructor() {
        this.transactions = [];
        this.founds = 0;
        this.recepies = 0;
        this.despecies = 0;
    }

    add(transaction) {
        this.transactions.push(transaction)

        this.updateValues();

        console.log(this.transactions);
    }

    getAllTransactions() {
        return this.transactions;
    }

    getTransactionById(id) {
        return this.transactions.find((trasaction) => trasaction.id == id)
    }

    excludeTransaction(id) {
        const listTransactions = this.transactions = this.transactions.filter(
            (transaction) => transaction.id != id
        );

        this.updateValues()

        console.log(id);
        return listTransactions;
    }

    updateValues() {
        this.founds = 0;
        this.recepies = 0;
        this.despecies = 0;

        this.transactions.forEach((transaction) => {
            if(transaction.type == 'Receita') {
                this.recepies = Number(transaction.value) + Number(this.recepies)
            } else {
                this.despecies = Number(transaction.value) + Number(this.despecies)
            }
        })

        this.founds = this.recepies - this.despecies;
    }

    editTransaction(id, description, value) {
        const transaction = this.getTransactionById(id);

        transaction.description = description;
        transaction.value = value;

        this.updateValues();
        return transaction;
    }
}