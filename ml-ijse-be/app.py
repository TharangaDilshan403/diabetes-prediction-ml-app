from flask import Flask, request
import os
import numpy as np
import pickle
from flask import Flask
from flask_cors import CORS
import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn import svm
from sklearn.metrics import accuracy_score


app = Flask(__name__)
CORS(app)

@app.route('/endpoint', methods=['POST'])
def handle_form_data():
    
    # Loading the saved model
    scaler = pickle.load(open('model/scaler.pkl', 'rb'))
    loaded_model = pickle.load(open('model/trained_model.sav', 'rb'))
    
    data = request.json
    print(data)
    
    pregnancies = int(data['pregnancies'])
    glucose = int(data['glucose'])
    pressure = int(data['pressure'])
    thickness = int(data['thickness'])
    insulin = int(data['insulin'])
    bmi = float(data['bmi'])
    dpf = float(data['dpf'])
    age = int(data['age'])
    
    print(pregnancies,glucose)
    
    input_data = (pregnancies,glucose,pressure,thickness,insulin,bmi,dpf,age)
    
    # input_data = (10,125,70,26,115,31.1,0.205,41)

    # input_data = (0,0,0,0,0,0,0,0)

    # Changing the input_data to numpy array
    input_data_as_numpy_array = np.asarray(input_data)

    # Reshape the array as we are predicting for one instance
    input_data_reshaped = input_data_as_numpy_array.reshape(1,-1)

    # Standardize the input data
    std_data = scaler.transform(input_data_reshaped)
    # print(std_data)

    prediction = loaded_model.predict(std_data)
    print(prediction)
    
    res = None

    if (prediction[0] == 0):
     print('The person is not diabetic')
     res = 'The person is not diabetic'
    else:
     print('The person is diabetic')
     res = 'The person is diabetic'
    
    # Handle the form data here
    return res

# @app.route("/result",methods=['POST','GET'])
# def result():
#     pregnancies = int(request.form['pregnancies'])
#     glucose = int(request.form['glucose'])
#     pressure = int(request.form['pressure'])
#     thickness = int(request.form['thickness'])
#     insulin = int(request.form['insulin'])
#     bmi = float(request.form['bmi'])
#     dpf = float(request.form['dpf'])
#     age = int(request.form['age'])
   
#     x = np.array([pregnancies,glucose,pressure,thickness,insulin,bmi,dpf,age]).reshape(1,-1)
    
#     scaler_path = os.path.join('D:\Education\ML Project\ml-ijse-be', 'model/trained_model.pkl')
#     scaler = None
#     with open(scaler_path, 'rb') as scaler_file:
#         scaler = pickle.load(scaler_file)
        
#     x=scaler.transform(x)
    
#     model_path = os.path.join('D:\Education\ML Project\ml-ijse-be', 'model/trained_model.sav')
#     trained_model = pickle.load(model_path)
    
#     Y_pred = trained_model.predict(x)
    
#     if Y_pred==0:
#         return send_from_directory('../nextjs-app/build', 'index.html')
#     else:
#         return send_from_directory('../nextjs-app/build', 'index.html')
    

    
if __name__=="__main__":
    # app.run(debug=True,port=5000)
    app.run(host='0.0.0.0',port=5000)