const user = {
    name: 'Əkbər',
    age: 30,
    retirementAge: 65,


    setAge(){
        this.age = 40
    },

     getYearsBeforeRetirement(){
        return this.retirementAge - this.age 
     }

}
console.log(`Pensiyaya qədər qalan illər:${user.getYearsBeforeRetirement()}`)

user.setAge()
console.log(`yeni yas:${user.age}`)
console.log(`Pensiyaya qədər qalan illər:${user.getYearsBeforeRetirement()}`)

console.log(user)