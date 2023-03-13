import pickle

from django.shortcuts import render, redirect
from django.template import loader
from django.http import HttpResponse, HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt


def index(request):
    template = loader.get_template('index.html')
    return HttpResponse(template.render())


@csrf_exempt
def results(request):
    template = loader.get_template('results.html')
    
    pregnancies = float(request.POST.get("Pregnancies"))
    glucose =float( request.POST.get("Glucose"))
    bloodpressure =float( request.POST.get("BloodPressure"))
    skinthickness =float( request.POST.get("SkinThickness"))
    insulin =float( request.POST.get("Insulin"))
    BMI =float( request.POST.get("BMI"))
    DiabetesPedigreeFunction =float( request.POST.get("DiabetesPedigreeFunction"))
    age =float( request.POST.get("Age"))

    diabetes_data = [
        [pregnancies, glucose, bloodpressure, skinthickness, insulin, BMI, DiabetesPedigreeFunction, age]]
    diabetes_model = pickle.load(open('diabetes_model.pickle', 'rb'))
    # diabetes_model = pd.read_pickle('r',"diabetes_model.pickle")
    prediction = diabetes_model.predict(diabetes_data)
    outcome = prediction


    if outcome == 1:
        result = "Diabetic"
    elif outcome == 0:
        result = "Not Diabetic"


    return HttpResponse(template.render({'result':result}))
