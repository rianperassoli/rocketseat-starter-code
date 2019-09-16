function temHabilidade(skills) {
    for (var i = 0; i < skills.length; i++) {
        if (skills.indexOf('Javascript', 0) >= 0)
          return true;
    }
    return false;
}

var skills = ["Javascript", "ReactJS", "React Native"];

//#############################

temHabilidade(skills); // true

var skills = ["Java", "ReactJS", "React Native"];

temHabilidade(skills); // false