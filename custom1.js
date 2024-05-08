class Student{
    constructor(name,yob){
        this.name=name;
        this.yob=yob

    }
    getAge(){
        return `hi ${this.name} your age is :${new Date().getFullYear()-this.yob}`;
    }
}

var stud1=new Student("kiran",2000)
console.log(stud1.getAge());