// 1
db.users.find(
  {
    _id: ObjectId("6804bcafc23e2ba6e1a23911"),
  },
  {
    _id: 0,
    name: 1,
    age: 1,
  }
);

// 2
db.users.find(
  {
    age: 80,
    isActive: true,
  },
  {
    age: 1,
    isActive: 1,
    gender: 1,
  }
);

// 3
db.users.find({
  isActive: true,
  age: {
    $gt: 60,
  },
});

// 4
db.users.find({
  isActive: true,
  age: {
    $gte: 20,
    $lte: 40,
  },
});

// 5
db.users.find({
  eyeColor: {
    $in: ["brown", "blue"],
  },
});

// 6
db.users.find({
  gender: "male",
  balance: {
    $gt: 500,
  },
});

// 7
db.users.find({}).sort({ balance: 1 });

// 8
db.users.find({}).sort({ balance: -1 }).limit(3);

// 9
db.users.find({}).sort({ balance: -1 }).skip(1).limit(1);

db.users.updateMany(
  {
    age: 30,
    eyeColor: "brown",
    gender: "male",
  },
  {
    $set: {
      company: "MYCOMP",
      isActive: true,
    },
    $rename: {
      latitude: "lat",
      longitude: "lng",
    },
    $inc: {
      balance: 10000,
    },
    $unset: {
      friends: "",
    },
  }
);

db.users.updateMany(
  {},
  {
    $unset: {
      phone: "",
    },
    $rename: { latitude: "lat", longitude: "lan" },
  }
);

db.users.updateMany(
  {},
  {
    $set: { vip: false },
  }
);

db.users.updateMany(
  {
    isActive: true,
    balance: {
      $gte: 300,
    },
    eyeColor: {
      $ne: "blue",
    },
  },
  {
    $set: {
      vip: true,
    },
  }
);
