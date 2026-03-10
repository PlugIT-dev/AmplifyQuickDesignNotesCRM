function onload() {
    var userId;
    ZOHO.embeddedApp.on("PageLoad", (entity) => {
        recordtype = "lead";
        moduleID = entity.EntityId;

        ZOHO.CRM.CONFIG.getCurrentUser().then(function(data){
            userId = data.users[0].id;

            ZOHO.CRM.UI.Resize({height: "480px", width: "100%"})
            .then(function(data) {
                var baseUrl = "https:/amplify.plugpv.com/quickdesignnotesembed?debug_mode=true";
                var dynamicUrl = baseUrl + "&type=lead" + "&rec=" + moduleID + "&zohouserid=" + userId;
                console.log("Dynamic URL: " + dynamicUrl);
                document.getElementById("zoho-iframe").src = dynamicUrl;
            })
            .catch(function(error) {
                alert("Resize error: " + JSON.stringify(error));
            });
        });
    });

ZOHO.embeddedApp.init();
}

on_load();