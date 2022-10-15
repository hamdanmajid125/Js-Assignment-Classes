class PersonAccount {
    constructor(firstName, lastName, income, expenses) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.income = income;
      this.expenses = expenses;
     }
    totalIncome() {
        var sum = 0;
        for(const item in this.income)
        {
            sum = sum + this.income[item]
        }
        return sum;
     
     
    }
    totalExpense() {
        var sum = 0;
        for(const item in this.expenses)
        {
            sum = sum + this.expenses[item]
        }
        return sum;
     
    }
    addIncome(year,income) {
        this.income[year] = income;
     
    }
    addExpense(year,expense) {
        this.expenses[year] = expense
     
    }
    accountBalances(){
        if( this.totalIncome() - this.totalExpense() < 0){
            return "loss "+ Math.abs(this.totalIncome() - this.totalExpense()).toString();
        }
        else{
            return "profit " + (this.totalIncome() - this.totalExpense()).toString();

        }
    }
  }

  let person = new PersonAccount("Hamdan","Majid", {"2014":2000,"2020":50000,"2022":100000},{"2014":20000,"2020":250000,"2022":50000});

  var totalincome = person.totalIncome();
  var totalExpense = person.totalExpense();
  person.addIncome("2021",90000)
  person.addExpense("2021",2000)
  console.log(person.accountBalances())


  class AutoMobile {
    constructor(name, model, type) {
        this.name = name;
        this.model = model;
        this.type = type;
       }
    opendoor(){

    }
    start(){

    }
    
  }

  class Car extends AutoMobile{
    constructor(name, model, type,doors,maxspeed) {
        super(name);
        super(model);
        super(type);
        this.doors = doors;
        this.maxspeed = maxspeed;
       }

  }  
  class Truck extends AutoMobile{
    constructor(name, model, type,doors,maxspeed) {
        super(name);
        super(model);
        super(type);
        this.doors = doors;
        this.maxspeed = maxspeed;
       }

  }


  var car = Car("Ford","2019","Automatic","open",20000)
  var truck = Truck("Truck","2021","Manual","close",200)

