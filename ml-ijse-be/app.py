from flask import Flask, request, jsonify
import os
import numpy as np
import pickle
from flask import Flask
from flask_cors import CORS


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

    # Determine the result based on prediction
    if prediction[0] == 0:
        result = 0
    else:
        result = 1

    # Return JSON response
    return jsonify({'result': result})

    ################################
    #
    # if (prediction[0] == 0):
    #  print('The person is not diabetic')
    #  res = 'The person is not diabetic'
    # else:
    #  print('The person is diabetic')
    #  res = 'The person is diabetic'
    #
    # # Handle the form data here
    # return res
    
if __name__=="__main__":
    # app.run(debug=True,port=5000)
    app.run(host='0.0.0.0',port=5000)