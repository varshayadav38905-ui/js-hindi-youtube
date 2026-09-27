// class, objects, and methods

class sunscreen{
  constructor(name, color, price , brand , nature){
    this.name = name
    this.color = color
    this.price = price
    this.brand = brand
    this.nature = nature
  }
  suitableFor(){
    if(this.nature === "waterBased"){
      console.log(`${this.brand} is for oily skin`)
    }
    
  
  else if(this.nature === "creamBased"){
  console.log(`${this.brand} is for dry skin`)
    }
  }
  Affordable(){
    if(this.price <= 699){
      console.log(`${this.brand} is the best sunscreen`)
    }
    else{
      console.log("this sunscreen is expensive")
    }
  
  }


  
}
  
  const sunscreen1 = new sunscreen("vitamin c", "yellow", 699, "dot n key", "waterBased")

  const sunscreen2 = new sunscreen("aqua", "white", 1500, "beautyOfJoseon","creamBased")
  sunscreen1.suitableFor()
  sunscreen2.suitableFor()
  sunscreen1.Affordable()
  sunscreen2.Affordable()