const bank = [
  { id: "001", name: "Lalia", balance: 73000 },
  { id: "002", name: "Bonny", balance: 102000 },
  { id: "003", name: "Sapfo", balance: 48000 },
  { id: "004", name: "Rolan", balance: 69000 },
  { id: "005", name: "Cuper", balance: 85000 },
  { id: "006", name: "Andiu", balance: 51000 },
  { id: "007", name: "Owera", balance: 93000 },
];

console.log("--------------------------- Task 1 ---------------------------");

const totalBalabce = bank.reduce((acc, { balance }) => acc + balance, 0);
console.log(totalBalabce);

const friends1 = [
  { name: "Poly", age: 15, friends: ["Urina", "Tunare", "Sacker"] },
  { name: "Ura", age: 14, friends: ["Poly", "Kiter"] },
  { name: "Warety", age: 16, friends: ["Nerana", "Tunare", "Lucky"] },
  { name: "Lager", age: 14, friends: ["Ura", "Geora", "Kiter"] },
  { name: "Kiter", age: 15, friends: ["Lager", "Lucky", "Warety"] },
  { name: "Nerana", age: 15, friends: ["Warety", "Ura", "Tunare"] },
  { name: "Tunare", age: 16, friends: ["Lager", "Geora"] },
  { name: "Lucky", age: 14, friends: ["Geora", "Warety", "Poly"] },
  { name: "Sacker", age: 17, friends: ["Poly", "Ura"] },
  { name: "Geora", age: 15, friends: ["Lucky", "Kiter", "Lager"] },
];

console.log("--------------------------- Task 2 ---------------------------");

// const findFriendsByName = (friends) => {
//   friends.forEach(({ name, friends }) => {
//     friends.reduce((friendsByName = [], friend) => {
//       if (friend === "Warety") {
//         friendsByName.push(name);
//       }
//     }, []);
//   });
// };

const findFriendsByName = (allfriends, friendsname) => {
  const friendsByName = [];
  allfriends.forEach(({ name, friends }) => {
    friends.reduce((friendByName, friend) => {
      friendByName = friend;
      if (friendByName === friendsname) {
        friendsByName.push(name);
      }
    }, 0);
  });
  return friendsByName;
};
console.log(findFriendsByName(friends1, "Warety"));
console.log(findFriendsByName(friends1, "Lucky"));
console.log(findFriendsByName(friends1, "Geora"));

const friends2 = [
  {
    name: "Poly",
    age: 15,
    friends: ["Urina", "Tunare", "Sacker", "Lucky", "Warety"],
  },
  { name: "Ura", age: 14, friends: ["Poly", "Kiter"] },
  { name: "Warety", age: 16, friends: ["Nerana"] },
  { name: "Lager", age: 14, friends: ["Ura", "Geora", "Kiter"] },
  { name: "Kiter", age: 15, friends: ["Lager", "Lucky", "Warety", "Tunare"] },
  { name: "Nerana", age: 15, friends: ["Warety", "Ura", "Tunare"] },
  { name: "Tunare", age: 16, friends: ["Lager", "Geora"] },
  { name: "Lucky", age: 14, friends: ["Geora", "Warety", "Poly"] },
  { name: "Sacker", age: 17, friends: ["Poly", "Ura"] },
  { name: "Geora", age: 15, friends: ["Lucky", "Kiter", "Lager", "Warety"] },
];

console.log("--------------------------- Task 3 ---------------------------");

console.log(friends2.sort((a, b) => a.friends.length - b.friends.length));

const people = [
  {
    name: "Poly",
    age: 15,
    skills: ["Танці", "Рукоділлля", "Їзда на коні", "Кулінарія"],
  },
  {
    name: "Ura",
    age: 14,
    skills: ["Футбол", "Кулінарія", "Конструктор", "Їзда на велосипеді"],
  },
  {
    name: "Warety",
    age: 16,
    skills: ["Танці", "Конструктор", "Плавання", "Їзда на коні"],
  },
];

console.log("--------------------------- Task 4 ---------------------------");

const allSkills = people.reduce(
  (acc = [...skills], { name, age, skills } = person) => {
    skills.forEach((skill) => {
      if (acc.includes(skill)) {
      } else {
        acc.push(skill);
      }
    });
    return acc;
  },
  []
);
console.log(allSkills.sort());
