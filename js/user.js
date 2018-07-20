class User{
   
    /*constructor()
    {

    }*/

    setplayerName(name){
        this.name=name;
    }
    setplayerScore(score){ ///this is the cash 
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
    setBankBalance(bankBalance){
        this.bankBalance=bankBalance;
    }
    getDifficultyLevel()
    {
        return this.difficultyLevel;
    }
    getIsComputer()
    {
        return this.isComputer;
    }

    getBankBalance(){
        return this.bankBalance;
    }

    setCredit(credit){
        this.credit=credit;
    }
    
    setCreditLimit(creditLimit){
        this.creditLimit=creditLimit;
    }

    getCredit(){
        return this.credit; 
    }
    getCreditLimit(){
        return this.creditLimit;
    }
    setInventoryScore(inventoryScore)
    {
        this.inventoryScore=inventoryScore;
    }

    getInventoryScore()
    {
        return this.inventoryScore;
    }

    /*updateInventoryScore(amount){
        this.inventoryScore=this.inventoryScore+amount;
    }*/

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

    setReputationPts(reputationPts){
        this.reputationPts=reputationPts;
    }
    getReputationPts(){
        return this.reputationPts;
    }
    setWeeks(weeks){
        if(this.deadline>0){
            this.deadline--;
        }
    	this.noOfWeeks = weeks;
    }
    setCorrectProbability(level){
        if(level.toLowerCase()=="easy"){
            this.correctProbability = (Math.random()*2)*0.1+0.15;
            console.log(this.correctProbability);
        }else if(level.toLowerCase() == "medium"){
            this.correctProbability = (Math.random()*2)*0.1+0.5;
            console.log(this.correctProbability);
        }else if(level.toLowerCase() == "hard"){
            this.correctProbability = (Math.random()*2)*0.1+0.8;
            console.log(this.correctProbability);
        }
    }
    getCorrectProbability(){
        console.log(this.correctProbability);
        return this.correctProbability;
    }
    getplayerName(){
        return this.name;
    }

    getplayerScore(){   ///this is the cash 
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

    setPayOffDeadline(deadline){
        if(this.deadline==-1||!this.deadline)
            this.deadline=deadline;
    }
    getPayOffDeadline(){
        return this.deadline;
    }

    getWeeks(){
    	return this.noOfWeeks;
    }

    setWildCard(numberOfWildCard){
        this.numberOfWildCard=numberOfWildCard;
    }
    
    getWildCard(){
        return this.numberOfWildCard;
    }
getScenario(category,playerChance)
    {
        
        var number;
        let object;
        let removeFromUser=false;
        let removeFromAll=false;

        if(this.scenariosArray[category].length==0)
        {
            this.setScenarioArray(scenariosArray);
        }
        // var scenariosApplicable=[];
        // for(var i=0;i<this.scenariosArray[category].length;i++){
        //     if(ubsApp.pages[this.scenariosArray[category][i].getName()].minimumInventoryScoreRequired<=userArray[playerChance].getInventoryScore()){
        //         scenariosApplicable.push(this.scenariosArray[category][i]);
        //     }
        // }
        // if(scenariosApplicable.length==0){
        //     this.setScenarioArray(scenariosArray);
        //     for(var i=0;i<this.scenariosArray[category].length;i++){
        //         if(ubsApp.pages[this.scenariosArray[category][i].getName()].minimumInventoryScoreRequired<=userArray[playerChance].getInventoryScore()){
        //             scenariosApplicable.push(this.scenariosArray[category][i]);
        //         }
        //     }
        // }
        
        number=(Math.floor(Math.random() * 100) + 1)%(this.scenariosArray[category].length);
        object=this.scenariosArray[category][number];

        /*while(ubsApp.pages[object.getName()].minimumInventoryScoreRequired>=userArray[playerChance].getInventoryScore())
        {
            number=(Math.floor(Math.random() * 100) + 1)%(this.scenariosArray[category].length);
            object=this.scenariosArray[category][number];
        }*/
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
        return object; 
    }
}