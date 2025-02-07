// 🔹 تهيئة Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBBQL24BcCQ3SptVTaRgXA2gTXBYUWnKVw",

authDomain: "teckman-df6d1.firebaseapp.com",

projectId: "teckman-df6d1",

storageBucket: "teckman-df6d1.firebasestorage.app",

messagingSenderId: "735915952956",

appId: "1:735915952956:web:a6be519bcd36fe37856c39",

measurementId: "G-J6ZMHS42M0"
};

// 🔹 الاتصال بقاعدة البيانات
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

document.addEventListener("DOMContentLoaded", function () {
    const usersRef = database.ref("users");
    const tableBody = document.getElementById("usersTable");

    usersRef.on("value", (snapshot) => {
        tableBody.innerHTML = ""; // تفريغ الجدول قبل إعادة تحميل البيانات
        let index = 1;

        snapshot.forEach((childSnapshot) => {
            const user = childSnapshot.val();
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${index}</td>
                <td>${user.name}</td>
                <td><a href="#" onclick="copyEmail(this, '${user.email}')">${user.email}</a></td>
            `;

            tableBody.appendChild(row);
            index++;
        });
    });
});

// 🔹 دالة لنسخ البريد الإلكتروني بتأثير بصري
function copyEmail(element, email) {
    navigator.clipboard.writeText(email).then(() => {
        element.classList.add("copied");
        element.textContent = "📋 تم النسخ!";
        setTimeout(() => {
            element.textContent = email;
            element.classList.remove("copied");
        }, 1500);
    }).catch(err => {
        console.error("فشل النسخ:", err);
    });
}


document.addEventListener("DOMContentLoaded", function () {
    const usersRef = database.ref("users");
    const tableBody = document.getElementById("usersTable");

    usersRef.on("value", (snapshot) => {
        tableBody.innerHTML = ""; // تفريغ الجدول قبل إعادة تحميل البيانات
        let index = 1;

        snapshot.forEach((childSnapshot) => {
            const user = childSnapshot.val();
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${index}</td>
                <td>${user.name}</td>
                <td>${user.hidden ? "🔒 Hidden" : `<a href="#" onclick="copyEmail(this, '${user.email}')">${user.email}</a>`}</td>
            `;

            tableBody.appendChild(row);
            index++;
        });
    });
});
