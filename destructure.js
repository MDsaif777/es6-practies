const person={name : 'Jack William', age :17, job : 'fackbook', wife: 'Ema Watson', address:"kata bon" , phone: '0124353', friend:['job', 'bom', 'dom']};
// console.log(person.wife)

const { phone, wife, address ,salary, } = person;
// const wife = person.wife;
// const phone = person.phone;

const complexObject = {
    name : 'abc',
    info : {
        address: 'kola bagan',
        leader : 'Tiger Leader',
    }
}

const {leader} = complexObject.info;
console.log(leader)



console.log(wife, phone, salary, address);
console.log(wife, phone, salary, address);

const friends =['shakib khan', 'Amran Khan', 'Amir Khan', 'Salman kahan', 'sharukh khan'];
const [chotoFriend,nextFriend, ...restfriend] = friends;
console.log(chotoFriend, nextFriend)
console.log(nextFriend)
console.log(restfriend)
