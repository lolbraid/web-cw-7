// project أنشئ كائن
const project = {
  type: "No Thing",
  users: 1,
  biography() {
    return "جملة تعريفية عن المشروع";
  },
};
// randomProperty أنشئ دالة
(function randomProperty() {
  let num = Math.floor(Math.random() * 4);
  if (num == 1) {
    console.log(project.type);
  } else if (num == 2) {
    console.log(project.users);
  } else if (num == 3){
    console.log(project.biography());
  } else {
      randomProperty()
  }
})();
