//@Author - James Pierce
//@Started - 28/01/2020
//@Brief - JS Script that pulls data from Google cloud firestore


class QuizManager
{
    Init()
    {
        this.InitialiseFirestore();
        //Request data from firestore collection
        this.db = firebase.firestore();
        this.level = sessionStorage.level;
        this.docs = null;
        this.index = 0;
    }

    InitialiseFirestore()
    {
        //Firebase app config data
        let firebaseConfig = {
            apiKey: "AIzaSyDrHxIx-NJh8LxhNa1jw9zu1Y6EZOdv4Kk",
            authDomain: "mediquery-430f7.firebaseapp.com",
            databaseURL: "https://mediquery-430f7.firebaseio.com",
            projectId: "mediquery-430f7",
            storageBucket: "mediquery-430f7.appspot.com",
            messagingSenderId: "313300086775",
            appId: "1:313300086775:web:7e5cffa97977da38bbc8f2",
            measurementId: "G-KS13F48QGP"
        };

        //Initialize firebase using app config data
        firebase.initializeApp({
            apiKey: firebaseConfig.apiKey,
            authDomain: firebaseConfig.authDomain,
            projectId: firebaseConfig.projectId
        });
    }

    QueryDatabase(_collection)
    {
        this.db.collection(_collection).get().then((querySnapshot) => {
            return querySnapshot.docs;
        })
        .catch((error) => {
            console.log("Error querying database - QuizManager.QueryDatabase", error);
        });
    }

    //Query firestore with parameters(For category based quiz)
    QueryDatabaseWithParameters(_collection)
    {
        this.db.collection(_collection).where("category", "==", sessionStorage.category)
        .get().then((querySnapshot) => {
            return querySnapshot.docs;
        })
        .catch((error) => {
            console.log("Error querying database - QuizManager.QueryDatabaseWithParameters", error);
        });
    }

    QueryFirestore()
    {
        this.InitialiseFirestore();
        //Request data from firestore collection
        this.db = firebase.firestore();
        this.level = sessionStorage.level;
        this.docs = null;
        this.index = 0;

        //QueryDatabase with clinical level from session storage
        var docs = this.QueryDatabase("efr");
        if (docs != null)
        {
            console.log("docs is not NULL");
            index = Utils.GenerateRandomInRange(docs.size);
            let currentDoc = docs[index];
            
            var ID = currentDoc.id;
            var data = currentDoc.data();
            console.log("DB: " + ID + " " + data.question);
            document.getElementById("question").innerHTML = data.question;
            document.getElementById("answer1").innerHTML = data.answer1;
            document.getElementById("answer2").innerHTML = data.answer2;
            document.getElementById("answer3").innerHTML = data.answer3;
            document.getElementById("answer4").innerHTML = data.answer4;
        }
        else
        {
            console.log("docs is NULL");
        }
    }
}

// if (docs != null)
// {
//     index = Utils.GenerateRandomInRange(docs.size);
//     let currentDoc = docs[index];

//     var ID = currentDoc.id;
//     var data = currentDoc.data();
//     console.log("DB: " + ID + " " + data.question);
//     document.getElementById("question").innerHTML = data.question;
//     document.getElementById("answer1").innerHTML = data.answer1;
//     document.getElementById("answer2").innerHTML = data.answer2;
//     document.getElementById("answer3").innerHTML = data.answer3;
//     document.getElementById("answer4").innerHTML = data.answer4;
// }