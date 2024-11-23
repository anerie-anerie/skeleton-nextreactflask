from flask import Flask, jsonify
from flask_cors import CORS

#app instance
app = Flask(__name__)
CORS(app)

#/app/home to end of the url
@app.route("/api/home", methods=['GET'])

#backend messaging
def return_home():
    return jsonify({
        'message': "Hello world! are you a bean too"
        #difficulty with trying to add a list too
    })

if __name__ == "__main__":
    #debug is true for developing mode (see errors)
    app.run(debug=True, port=8080)
