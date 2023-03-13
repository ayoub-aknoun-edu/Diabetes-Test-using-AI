function showForm() {
    const form = document.getElementById("form-container");
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}

function validateform() {
    
  var Pregnancies = document.form1.Pregnancies.value;
  var Glucose = document.form1.Glucose.value;
  var BloodPressure = document.form1.BloodPressure.value;
  var SkinThickness = document.form1.SkinThickness.value;
  var Insulin = document.form1.Insulin.value;
  var BMI = document.form1.BMI.value;
  var DiabetesPedigreeFunction = document.form1.DiabetesPedigreeFunction.value;
  var Age = document.form1.Age.value;

  if (Pregnancies == null || Pregnancies == "") {
    alert("Pregnancies can't be blank");
    return false;
  } else if (Glucose == null || Glucose == "") {
    alert("Glucose can't be blank");
    return false;
  } else if (BloodPressure == null || BloodPressure == "") {
    alert("BloodPressure can't be blank");
    return false;
  } else if (SkinThickness == null || SkinThickness == "") {
    alert("SkinThickness can't be blank");
    return false;
  } else if (Insulin == null || Insulin == "") {
    alert("Insulin can't be blank");
    return false;
  } else if (BMI == null || BMI == "") {
    alert("BMI can't be blank");
    return false;
  } else if (
    DiabetesPedigreeFunction == null ||
    DiabetesPedigreeFunction == ""
  ) {
    alert("DiabetesPedigreeFunction can't be blank");
    return false;
  } else if (Age == null || Age == "") {
    alert("Age can't be blank");
    return false;
  }
}
