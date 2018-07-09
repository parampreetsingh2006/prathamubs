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
        this.color=color.toLowerCase();
    }
    setCorrectAnswered(number){
        this.correctAnswered = number;
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

    setWeeks(weeks){
    	this.noOfWeeks = weeks;
    }
    setCorrectProbability(level){
        if(level.toLowerCase()=="easy"){
            this.correctProbability = (Math.random()*2)*0.1+0.2;
        }else if(level.toLowerCase() == "medium"){
            this.correctProbability = (Math.random()*2)*0.1+0.5;
        }else if(level.toLowerCase() == "difficult"){
            this.correctProbability = (Math.random()*2)*0.1+0.8;
        }
    }
    getCorrectProbability(){
        return this.correctProbability;
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
    getCorrectAnswered(){
        return this.correctAnswered;
    }

    getWeeks(){
    	return this.noOfWeeks;
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