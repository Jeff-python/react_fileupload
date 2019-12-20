# import App from "../src/App.js"
from flask_cors import CORS
import os
from flask import render_template, request, redirect, jsonify



@app.config["IMAGE_UPLOADS"]= "/Users/jeffreyzheng/byte_academy/phase2/p5_group_project/public"

@app.route("/upload-image",methods = ["GET","POST"])
def upload_image():
    if request.method == "POST":
        if request.files:
            image = request.files["image"]
            image.save(os.path.join(@app.config["IMAGE_UPLOADS"],image.filename))
            return redirect(request.url)
    return render_template("../src/App.js")

app.run(debug=True)