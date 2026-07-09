const supabaseUrl = "https://dolhojxaiicjlsocthxl.supabase.co/rest/v1/
";
const supabaseKey = "sb_publishable_937F1rUifcDcxJEvD3Drxg_Qp9vDdSl";

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
