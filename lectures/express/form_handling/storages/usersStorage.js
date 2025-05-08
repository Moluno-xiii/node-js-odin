class UsersStorage {
  constructor() {
    this.storage = {};
    this.id = 0;
  }

  addUser({ firstName, lastName, email, bio, age }) {
    const id = this.id;
    this.storage[id] = { id, firstName, lastName, email, bio, age };
    this.id++;
  }

  getUsers() {
    return Object.values(this.storage);
  }

  getUser(id) {
    return this.storage[id];
  }

  updateUser(id, { firstName, lastName, email, bio, age }) {
    this.storage[id] = { id, firstName, lastName, email, bio, age };
  }

  deteUser(id) {
    delete this.storage[id];
  }

  getUserByEmail(email) {
    if (!email) return;
    const usersArray = Object.values(this.storage);
    return usersArray.filter((user) => user.email === email);
    // return usersArray.find((user) => user.email === email);
  }
}

module.exports = new UsersStorage();
