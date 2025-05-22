const employees = [
  [
    "347483647",
    "Dikla",
    "Alon",
    "Tabiria 3",
    "Uno",
    "0",
    "2014-09-139",
    "2014-09-108",
  ],
  [
    "347483847",
    "Avi",
    "Aviel",
    "Kiron 112",
    "Ramat Gan",
    "1",
    "2014-09-139",
    "2014-09-108",
  ],
  [
    "347483947",
    "Vered",
    "Levi",
    "Gur 18",
    "Petach Tikva",
    "1",
    "2014-09-008",
    "2014-09-142",
  ],
  [
    "347489967",
    "Haim",
    "Moshe",
    "Yalin 14",
    "Petach Tikva",
    "1",
    "2014-09-114",
    "2014-09-139",
  ],
  [
    "366945120",
    "Haya",
    "Bitun",
    "Arbel 70",
    "Tel Aviv",
    "1",
    "2014-09-014",
    "2014-09-121",
  ],
  [
    "398874520",
    "Moshe",
    "Cohen",
    "Haverim 29",
    "Ramat Gan",
    "0",
    "2014-09-042",
    "2014-09-026",
  ],
  [
    "498876513",
    "Israel",
    "Israeli",
    "Galim 5",
    "Tel Aviv",
    "1",
    "2014-09-026",
    "2014-09-113",
  ],
];

const employeesColumn = {
  id: 0,
  first_name: 1,
  last_name: 2,
  street: 3,
  city: 4,
  status: 5,
  created_at: 6,
  updated_at: 7,
};

const result = employees
  .map((item) => [
    1 + 1,
    new Date().toISOString(),
    item[employeesColumn.first_name],
  ])
  .filter((fields) => fields.status === 1)
  .sort((a, b) => (a.first_name < b.first_name ? 1 : -1))
  .slice(2, 5);

console.log(result);
