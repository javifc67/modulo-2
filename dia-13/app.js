/* let user = {
  name: "John Smith",
  age: 35
};
let json = JSON.stringify(user);
alert(typeof json);

let user2 = JSON.parse(json);
alert(user2);
 */

let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  occupiedBy: [{ name: "John" }, { name: "Alice" }],
  place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

alert(
  JSON.stringify(meetup, function replacer(key, value) {
    if (key != "" && value == meetup) {
      return undefined;
    } else {
      return value;
    }
  })
);
