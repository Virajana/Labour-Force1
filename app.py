import os
import pickle
import pandas as pd
from flask import Flask, render_template, request, jsonify
from sklearn.preprocessing import StandardScaler
from flask_cors import CORS, cross_origin


age_model = pickle.load(open('models/age.sav', 'rb'))
unemployee_model = pickle.load(open('models/unemployee.sav', 'rb'))
under_employee_model = pickle.load(open('models/under_employee.sav', 'rb'))

app = Flask(__name__, template_folder="client/build", static_folder="client/build/static")
app.config['SITE'] = "http://0.0.0.0:5000/"

@cross_origin()
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    """ This is a catch all that is required for react-router """
    return render_template('index.html')


@cross_origin()
@app.route('/agestructure',methods=['POST'])
def predict_age_count():
    input_arr=[]
    input_arr.append(request.json['year'])
    input_arr.append(request.json['district'])
    input_arr.append(request.json['agecategory'])
    input_arr.append(request.json['gender'])
    input_arr1=[]
    input_arr1.append(input_arr)
    predict_result = age_model.predict(input_arr1).tolist()
    result={"result":predict_result}
    return jsonify(result)


@cross_origin()
@app.route('/unemployee',methods=['POST'])
def predict_unemployee_count():
    input_arr=[]
    input_arr.append(request.json['year'])
    input_arr.append(request.json['district'])
    input_arr.append(request.json['agecategory'])
    input_arr.append(request.json['gender'])
    input_arr1=[]
    input_arr1.append(input_arr)
    predict_result = unemployee_model.predict(input_arr1).tolist()
    result={"result":predict_result}
    return jsonify(result)


@cross_origin()
@app.route('/underemployee',methods=['POST'])
def predict_under_employee_count():
    input_arr=[]
    input_arr.append(request.json['year'])
    input_arr.append(request.json['district'])
    input_arr.append(request.json['agecategory'])
    input_arr.append(request.json['gender'])
    input_arr1=[]
    input_arr1.append(input_arr)
    predict_result = under_employee_model.predict(input_arr1).tolist()
    result={"result":predict_result}
    return jsonify(result)


if __name__ == '__main__':
    cors = CORS(app)
    app.config['CORS_HEADERS'] = 'Content-Type'
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)