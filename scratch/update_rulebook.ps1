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
    "hackathon.html"
)

foreach ($file in $files) {
    $path = "c:\Users\yp585\OneDrive\Desktop\final\$file"
    if (Test-Path $path) {
        $content = Get-Content $path -Raw
        
        # Update Hydro Blast rules
        $oldRules = '"Rocket body must be made from a plastic bottle.",`r?`n\s+"Propulsion is purely water and air pressure.",`r?`n\s+"Launcher will be provided, or participants can bring their own."'
        $newRules = '"Rocket body must be made from a PET bottle.",`r?`n                    "Propulsion is purely water and air pressure.",`r?`n                    "participants must bring their own launcher."'
        
        # Using a simpler string replace since regex with newlines in PS can be tricky
        $newContent = $content -replace "Rocket body must be made from a plastic bottle.", "Rocket body must be made from a PET bottle."
        $newContent = $newContent -replace "Launcher will be provided, or participants can bring their own.", "participants must bring their own launcher."
        
        Set-Content $path $newContent
        Write-Host "Updated $file"
    }
}
