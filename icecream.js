





class Menu{
    constructor(){
        this.flavor = []
    }

    start(){
        let selection = this.showMenu()
    }


    while(selection != 0) {
        switch (selection) {
            case'1':
                this.createFlavor()
                break
            case '2':
                this.destroyFlavor()
                break
            default:
                selection = 0;
                break;
        }
    }

    showMenu() {
        return prompt(`
            1.Create Flavor
            2. Destroy Flavor
            `)
    }



    createFlavor(){
        let flavor = prompt(`gimme that good flavor!`)
        this.flavor.push(flavor)
    }

    destroyFlavor(){
        let flavPrompt = `Select flavor to destroy`
        for(let i = 0; i < this.flavor.length; i++){
            flavPrompt +=`${i}) ${this.flavor[i]}\n`
        }

        let option = prompt(flavPrompt)
        return option
    }
}

let menu= new Menu();
menu.start();