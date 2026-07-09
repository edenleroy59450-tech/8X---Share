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
        status.innerHTML = "❌ Choisis un fichier avant d'envoyer";
        return;
    }


    status.innerHTML = "⏳ Upload en cours...";


    const fileName = Date.now() + ".png";

const { data, error } = await supabaseClient
    .storage
    .from("files")
    .upload(fileName, file);
        .replace(/[^a-zA-Z0-9.]/g, "-");


    const { data, error } = await supabaseClient
        .storage
        .from("files")
        .upload(fileName, file);



    if (error) {

        console.error(error);
        status.innerHTML = "❌ Erreur : " + error.message;

    } else {

        console.log(data);
        status.innerHTML = "✅ Fichier envoyé avec succès !";

    }

});
