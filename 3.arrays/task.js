function compareArrays(arr1, arr2) {
    return arr1.every((value, index) => value === arr2[index]) && arr2.every((value, index) => value === arr1[index]);
  }

  function getUsersNamesInAgeRange(users, gender) {
    const filteredUsers = users.filter(user => user.gender === gender);
    const totalAge = filteredUsers.reduce((acc, user) => acc + user.age, 0);
    const averageAge = filteredUsers.length ? totalAge / filteredUsers.length : 0;
    return averageAge;
  }