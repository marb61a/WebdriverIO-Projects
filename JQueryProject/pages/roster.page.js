class RosterPage {
    get instructionText(){
        return $("body > div.container-fluid > div:nth-child(3) > p");
    }

    get listTitle(){
        return $("body > div.container-fluid > div:nth-child(4) > h3");
    }

    // Creating each element individual
    get wolverineItem(){
        return $("");
    }

    get ironManItem(){
        return $("");
    }

    get deadpoolItem(){
        return $("");
    }

    get thorItem(){
        return $("");
    }

    get spidermanItem(){
        return $("");
    }

    get addHeroLabel(){
        return $("");
    }

    get addHeroField(){
        return $("");
    }

    get submit(){
        return $("");
    }

}

module.exports = new RosterPage();