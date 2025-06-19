class User { 
  static count: number = 0; 
  private name: string; 
  private login: string; 
  private grade: number; 
 
  constructor(name: string, login: string, grade: number) { 
    if (!Number.isInteger(grade) || grade <= 0) { 
      throw new Error("Grade должен быть положительным и быть равен больше 0"); 
    } 
    this.name = name; 
    this.login = login; 
    this.grade = grade; 
    User.count++; 
  } 
 
  showInfo(): void { 
    console.log(`Name: ${this.name}, Login: ${this.login}`); 
  } 
 
  eq(other: User): boolean { 
    return this.grade === other.grade; 
  } 
 
  lt(other: User): boolean { 
    return this.grade < other.grade; 
  } 
 
  gt(other: User): boolean { 
    return this.grade > other.grade; 
  } 
} 
 
class SuperUser extends User {  
    static count: number = 0;  
  
    private role: string;  
  
    constructor(name: string, login: string, role: string) {  
        super(name, login, 1);  
        this.role = role;  
        SuperUser.count++;  
    }  
    showInfo(): void {  
        console.log(`Роль: ${this.role}`);  
    }  
}  
 
 
const user1 = new User("Paul McCartney", "paul", 3); 
const user2 = new User("George Harrison", "george", 2); 
const user3 = new User("Richard Starkey", "ringo", 3); 
const admin = new SuperUser("John Lennon", "john", "admin"); 
 
user1.showInfo(); 
admin.showInfo(); 
 
let users = User.count 
let admins = SuperUser.count 
 
console.log(`Всего обычных пользователей: ${users}`) 
console.log(`Всего супер-пользователей: ${admins}`) 
 
console.log( user1.lt(user2) ) 
console.log( admin.gt(user3) ) 
console.log( user1.eq(user3) )
