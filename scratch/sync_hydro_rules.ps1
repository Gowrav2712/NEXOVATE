$files = @(
    "robo-race.html",
    "robo-soccer.html",
    "robo-sumo.html",
    "line-follower.html",
    "maze-solver.html",
    "brand-rumbling.html",
    "shark-tank.html",
    "iq-wars.html",
    "hydro-blast.html",
    "hackathon.html",
    "events-data.js"
)

foreach ($file in $files) {
    $path = "c:\Users\yp585\OneDrive\Desktop\final\$file"
    if (Test-Path $path) {
        $content = Get-Content $path -Raw
        
        # Replace 1
        $content = $content -replace "Rocket body must be made from a plastic bottle.", "Rocket body must be made from a PET bottle."
        
        # Replace 2
        $content = $content -replace "Launcher will be provided, or participants can bring their own.", "participants must bring their own launcher."
        
        Set-Content $path $content
        Write-Host "Processed $file"
    }
}
