class User{
   
    /*constructor()
    {

    }*/
    
    setplayerName(name){
        this.name=name;
    }
    setplayerScore(score){
        this.score=score;
    }
    setplayerColor(color){
        this.color=color;
    }
    setplayerCurrentPos(currentPos){
        this.currentPos=currentPos;
    }
    setplayerId(playerId){
        this.playerId=playerId;
    }
    setSalesScenario(salesScenario)
    {
        this.salesScenarioArray = [];
        for(var i=0;i<salesScenario.length;i++)
        {
            this.salesScenarioArray[i]=salesScenario[i];
        }
    }
    setIsComputer(isComputer)
    {
        this.isComputer=isComputer;
    }
    setDifficultyLevel(difficultyLevel)
    {
        this.difficultyLevel=difficultyLevel;
    }
    getDifficultyLevel()
    {
        return this.difficultyLevel;
    }
    getIsComputer()
    {
        return this.isComputer;
    }

    setInventoryScore(inventoryScore)
    {
        this.inventoryScore=inventoryScore;
    }

    getInventoryScore()
    {
        return this.inventoryScore;
    }

    
    setSurpriseScenario(surpirseScenario)
    {
        this.surpriseScenarioArray = [];
        for(var i=0;i<surpirseScenario.length;i++)
        {
            this.surpriseScenarioArray[i]=surpirseScenario[i];
        }
    }
    setPurchaseScenario(purchaseScenario)
    {
        this.purchaseScenarioArray=[];
        for(var i=0;i<purchaseScenario.length;i++)
        {
            this.purchaseScenarioArray[i]=purchaseScenario[i];
        }
    }
    setLuckScenario(luckScenario)
    {
        this.luckScenarioArray=[];
        for(var i=0;i<luckScenario.length;i++)
        {
            this.luckScenarioArray[i]=luckScenario[i];
        }
    }
    setScenarioArray(scenariosArray)    
    {
        this.scenariosArray=[];
        for(var key in scenariosArray)
        {
            if(this.scenariosArray[key]==null)
            {
                this.scenariosArray[key]=[];
            }
            for(var iterator=0;iterator<scenariosArray[key].length;iterator++)
            {
                this.scenariosArray[key][iterator]=scenariosArray[key][iterator];
            }
        }
    }
    getplayerName(){
        return this.name;
    }

    getplayerScore(){
        return this.score;
    }
    getplayerColor(){
        return this.color;
    }
    getplayerCurrentPos(){
        return this.currentPos;
    }
    getplayerId(){
        return this.playerId;
    }
    // updatequestions(questionId){
    //     this.questionsDone.push(questionId);
    //}
    getSalesScenario(playerChance)
    {
        var number;
        let object;
        let removeFromUser=false;
        let removeFromAll=false;
        if(this.salesScenarioArray.length==0)
        {
            this.setSalesScenario(salesScenarioArray);
        }
        number=(Math.floor(Math.random() * 100) + 1)%(this.salesScenarioArray.length);
        object=this.salesScenarioArray[number];
        
        if(object.getRepeatforUser()==false)
        {
            removeFromUser=true;
            //this.salesScenarioArray.splice(number,1);
           // document.write(JSON.stringify(templates));
        }
        if(object.getRepeatforAllUsers()==false)
        {
            removeFromAll=true;
        }
        if(removeFromUser)
        {
            this.salesScenarioArray.splice(number,1);
        }
        if(removeFromAll)
        {
            for(var i=0;i<userArray.length;i++)
            {
                if(playerChance!=i)
                userArray[i].salesScenarioArray.splice(number,1);
            }
        }
        return object;
    }
    getLuckScenario(playerChance)
    {
        var number;
        let object;
        let removeFromUser=false;
        let removeFromAll=false;
        if(this.luckScenarioArray.length==0)
        {
            this.setLuckScenario(luckScenarioArray);
        }
        number=(Math.floor(Math.random() * 100) + 1)%(this.luckScenarioArray.length);
        object=this.luckScenarioArray[number];
        
        if(object.getRepeatforUser()==false)
        {
            removeFromUser=true;
        }
        if(object.getRepeatforAllUsers()==false)
        {
            removeFromAll=true;
        }
        if(removeFromUser)
        {
            this.luckScenarioArray.splice(number,1);
        }
        if(removeFromAll)
        {
            for(var i=0;i<userArray.length;i++)
            {
                if(playerChance!=i)
                userArray[i].luckScenarioArray.splice(number,1);
            }
        }
        return object;
    }

    getSurpriseScenario(playerChance)
    {
        var number;
        let object;
        let removeFromUser=false;
        let removeFromAll=false;
        if(this.surpriseScenarioArray.length==0)
        {
            this.setSurpriseScenario(surpriseScenarioArray);
        }
        number=(Math.floor(Math.random() * 100) + 1)%(this.surpriseScenarioArray.length);
        object=this.luckScenarioArray[number];
        
        if(object.getRepeatforUser()==false)
        {
            removeFromUser=true;
            //this.salesScenarioArray.splice(number,1);
           // document.write(JSON.stringify(templates));
        }
        if(object.getRepeatforAllUsers()==false)
        {
            removeFromAll=true;
        }
        if(removeFromUser)
        {
            this.surpriseScenarioArray.splice(number,1);
        }
        if(removeFromAll)
        {
            for(var i=0;i<userArray.length;i++)
            {
                if(playerChance!=i)
                userArray[i].surpriseScenarioArray.splice(number,1);
            }
        }
        return object;
    }

    getPurchaseScenario(playerChance)
    {
        var number;
        let object;
        let removeFromUser=false;
        let removeFromAll=false;
        if(this.purchaseScenarioArray.length==0)
        {
            this.setPurchaseScenario(purchaseScenarioArray);
        }
        number=(Math.floor(Math.random() * 100) + 1)%(this.surpriseScenarioArray.length);
        object=this.luckScenarioArray[number];
        
        if(object.getRepeatforUser()==false)
        {
            removeFromUser=true;
        }
        if(object.getRepeatforAllUsers()==false)
        {
            removeFromAll=true;
        }
        if(removeFromUser)
        {
            this.purchaseScenarioArray.splice(number,1);
        }
        if(removeFromAll)
        {
            for(var i=0;i<userArray.length;i++)
            {
                if(playerChance!=i)
                userArray[i].purchaseScenarioArray.splice(number,1);
            }
        }
        return object;
    }

getScenario(category,playerChance)
    {
        
        var number;
        let object;
        let removeFromUser=false;
        let removeFromAll=false;

        if(this.scenariosArray===undefined)
        {
            this.setScenarioArray(scenariosArray);
        }
        number=(Math.floor(Math.random() * 100) + 1)%(this.scenariosArray[category].length);
        object=this.scenariosArray[category][number];
        if(object.getRepeatforUser()==false)
        {
            removeFromUser=true;
        }
        if(object.getRepeatforAllUsers()==false)
        {
            removeFromAll=true;
        }

        if(object.getIfCalculatorRequired())
        {
            calculatorReq=true;
        }
        if(removeFromUser)
        {
            this.scenariosArray[category].splice(number,1);
        }
        if(removeFromAll)
        {
            for(var i=0;i<userArray.length;i++)
            {
                if(playerChance!=i)
                userArray[i].scenariosArray[category].splice(number,1);
            }
        }
        return object; //write code to return the object
    }

}   