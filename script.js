const supabaseUrl = "https://dolhojxaiicjlsocthxl.supabase.co/rest/v1/";
const supabaseKey = "sb_publishable_937F1rUifcDcxJEvD3Drxg_Qp9vDdSl";

const supabaseClient = supabase.createClient(
    supabaseUrl,
    supabaseKey
);


const uploadBtn = document.getElementById("uploadBtn");
const fileInput = document.getElementById("file");
const status = document.getElementById("status");


uploadBtn.addEventListener("click", async () => {

    const file = fileInput.files[0];


    if (!file) {
        status.innerHTML = "❌ Choisis un fichier";
        return;
    }


    status.innerHTML = "⏳ Envoi en cours...";


    const { data, error } = await supabaseClient
        .storage
        .from("Files")
        .upload(Date.now() + "-" + file.name.replace(/[^a-zA-Z0-9.]/g, "-"), file);


    if (error) {

        status.innerHTML = "❌ Erreur : " + error.message;

    } else {

        status.innerHTML = "✅ Fichier envoyé !";

    }

});
