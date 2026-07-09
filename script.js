const supabaseUrl = "TON_URL_SUPABASE";
const supabaseKey = "TA_PUBLISHABLE_KEY";

const supabaseClient = supabase.createClient(
    supabaseUrl,
    supabaseKey
);


document.getElementById("uploadBtn").onclick = async () => {

    const fileInput = document.getElementById("file");
    const file = fileInput.files[0];

    if (!file) {
        alert("Choisis un fichier !");
        return;
    }


    const { data, error } = await supabaseClient
        .storage
        .from("files")
        .upload(file.name, file);


    if (error) {
        alert("Erreur : " + error.message);
    } else {
        alert("Fichier envoyé avec succès !");
        console.log(data);
    }

};
