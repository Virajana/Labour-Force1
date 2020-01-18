#!/usr/bin/env python
# coding: utf-8

# In[1]:


import os
import pickle
import pandas as pd
from flask import Flask, render_template, request, jsonify
from sklearn.preprocessing import StandardScaler
from flask_cors import CORS, cross_origin
from sklearn.preprocessing import OneHotEncoder


# In[2]:


age_model = pickle.load(open('models/age.sav', 'rb'))
unemployee_model = pickle.load(open('models/unemployee.sav', 'rb'))
under_employee_model = pickle.load(open('models/under_employee.sav', 'rb'))


# In[3]:


dis_data = [11,12,13,21,22,23,31,32,33,41,42,43,44,45,51,52,53,61,62,71,72,81,82,91,92]
age_cats_data = [1,2,3]
genders_a_data = [1,1.5,2]
genders_b_data = [1,2]


# In[4]:


districts = pd.DataFrame({'district': dis_data})
age_cats = pd.DataFrame({'age_cat': age_cats_data})
genders_a = pd.DataFrame({'gend_a': genders_a_data})
genders_b = pd.DataFrame({'gend_b': genders_b_data})


# In[5]:


enced_dis = pd.get_dummies(districts.district, prefix='dis')
enced_age_cats = pd.get_dummies(age_cats.age_cat, prefix='age_cat')
enced_gender_a = pd.get_dummies(genders_a.gend_a, prefix='gend_a')
enced_gender_b = pd.get_dummies(genders_b.gend_b, prefix='gend_b')


# In[6]:


app = Flask(__name__, template_folder="client/build", static_folder="client/build/static")
app.config['SITE'] = "http://0.0.0.0:5000/"


# In[7]:


@cross_origin()
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    """ This is a catch all that is required for react-router """
    return render_template('index.html')


# In[8]:


@cross_origin()
@app.route('/agestructure',methods=['POST'])
def predict_age_count():
    input_arr=[]
    input_arr.append(request.json['year'])
    input_arr = input_arr+ list(enced_dis.loc[dis_data.index(request.json['district']),:])
    input_arr = input_arr+ list(enced_age_cats.loc[age_cats_data.index(request.json['agecategory']),:])
    input_arr = input_arr+ list(enced_gender_a.loc[genders_a_data.index(request.json['gender']),:])
    
    input_arr1=[]
    input_arr1.append(input_arr)
    print(request.json)
    print(input_arr1)
    predict_result = age_model.predict(input_arr1).tolist()
    result={"result":predict_result}
    return jsonify(result)

# def predict_age_count():
#     input_arr1=[[2028, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1]]
#     predict_result = age_model.predict(input_arr1).tolist()
#     result={"result":predict_result}
#     print(result)
# predict_age_count()


# In[9]:


@cross_origin()
@app.route('/unemployee',methods=['POST'])
def predict_unemployee_count():
    input_arr=[]
    input_arr.append(request.json['year'])
    input_arr = input_arr+ list(enced_dis.loc[dis_data.index(request.json['district']),:])
    input_arr = input_arr+ list(enced_age_cats.loc[age_cats_data.index(request.json['agecategory']),:])
    input_arr = input_arr+ list(enced_gender_a.loc[genders_a_data.index(request.json['gender']),:])
    
    input_arr1=[]
    input_arr1.append(input_arr)
    print(request.json)
    print(input_arr1)
    predict_result = unemployee_model.predict(input_arr1).tolist()
    result={"result":predict_result}
    return jsonify(result)

# def predict_unemployee_count():
#     input_arr1=[[2008, 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1]]
#     predict_result = under_employee_model.predict(input_arr1).tolist()
#     result={"result":predict_result}
#     print(result)
# predict_unemployee_count()


# In[10]:


@cross_origin()
@app.route('/underemployee',methods=['POST'])
def predict_under_employee_count():
    input_arr=[]
    input_arr.append(request.json['year'])
    input_arr = input_arr+ list(enced_dis.loc[dis_data.index(request.json['district']),:])
    input_arr = input_arr+ list(enced_age_cats.loc[age_cats_data.index(request.json['agecategory']),:])
    input_arr = input_arr+ list(enced_gender_b.loc[genders_a_data.index(request.json['gender']),:])
    
    input_arr1=[]
    input_arr1.append(input_arr)
    print(request.json)
    print(input_arr1)
    predict_result = under_employee_model.predict(input_arr1).tolist()
    result={"result":predict_result}
    return jsonify(result)

# def predict_under_employee_count():
#     input_arr1=[[2030, 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1]]
#     predict_result = under_employee_model.predict(input_arr1).tolist()
#     result={"result":predict_result}
#     print(result)
# predict_under_employee_count()


# In[11]:


if __name__ == '__main__':
    cors = CORS(app)
    app.config['CORS_HEADERS'] = 'Content-Type'
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)

