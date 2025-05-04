function computeGrade() {
    const midterm = parseFloat(document.getElementById('midtermGrade').value);
    const final = parseFloat(document.getElementById('finalGrade').value);
  
    if (isNaN(midterm) || isNaN(final)) {
      alert("Please enter valid numeric grades.");
      return;
    }
  
    const finalGrade = Math.round((midterm + final) / 2);
    document.getElementById('finalGradeResult').value = finalGrade;
    document.getElementById('remarksResult').value = getRemark(finalGrade);
  }
  
  function getRemark(grade) {
    if (grade >= 99) return "1.0";
    if (grade >= 97) return "1.1";
    if (grade >= 95) return "1.2";
    if (grade >= 93) return "1.3";
    if (grade >= 90) return "1.5";
    if (grade == 89) return "1.6";
    if (grade == 87) return "1.8";
    if (grade == 86) return "1.9";
    if (grade == 85) return "2.0";
    if (grade == 84) return "2.1";
    if (grade == 83) return "2.2";
    if (grade == 82) return "2.3";
    if (grade == 81) return "2.4";
    if (grade == 80) return "2.5";
    if (grade == 79) return "2.6";
    if (grade == 78) return "2.7";
    if (grade == 77) return "2.8";
    if (grade == 76) return "2.9";
    if (grade == 75) return "3.0";
    if (grade >= 70) return "5.0";
    return "Invalid";
  }
  
  function resetForm() {
    document.getElementById('studentName').value = "";
    document.getElementById('studentNumber').value = "";
    document.getElementById('midtermGrade').value = "";
    document.getElementById('finalGrade').value = "";
    document.getElementById('finalGradeResult').value = "";
    document.getElementById('remarksResult').value = "";
  }
  