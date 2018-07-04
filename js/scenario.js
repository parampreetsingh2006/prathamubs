class Scenarios{
   
    setScenarioId(scenarioId)
    {
        this.scenarioId=scenarioId;
    }
    getScenarioId()
    {
        return this.scenarioId;
    }

    setName(name)
    {
        this.name=name;
    }
   setIfCalculatorRequired(calculator)
   {
       this.calculator=calculator;
   }

   getIfCalculatorRequired()
   {
       return this.calculator;
   }
    setPage(page){
        this.page=page;
    }

    
    getPage(page)
    {
        return this.page;
    }
    setCategory(category)
    {
        this.category=category;
    }
    getCategory(category)
    {
        return this.category;
    }
    setTemplate(templates)
    {
        this.templates=templates;
    }

    getTemplate()
    {
        return this.templates;
    }

    setRepeatForAllUsers(repeat_for_all)
    {
        this.repeat_for_all=repeat_for_all;
    }

    getRepeatforAllUsers()
    {
        return false;
    }
    setRepeatforUser(repeat)
    {
        this.repeat=repeat;
    }
    getRepeatforUser()
    {
        return this.repeat;
    }
   /* openScenario(pid)
    {
        if(this.players_answered_this_scenario.includes(pid))
        {
            return -1;
        }
        else
        {
            this.players_answered_this_scenario.push(pid);
            ubsApp.renderPageByName(page);
        }
            
    }*/
}