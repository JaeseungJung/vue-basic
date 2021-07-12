module.exports = {
  list: {
    query: "select * from t_person",
  },
  createPerson: {
    query: "insert into t_person set ?",
  },
  deletePerson: {
    query: "delete from t_person where id=?",
  },
  updatePerson: {
    query: "update t_person set ? where id=?",
  },
  // list2: {
  //   query: "select * from t_person2",
  // },
  createPerson2: {
    query: "insert into t_person2 set ?",
  },
  deletePerson2: {
    query: "delete from t_person2 where id=?",
  },
  updatePerson2: {
    query: "update t_person2 set ? where id=?",
  },
};
