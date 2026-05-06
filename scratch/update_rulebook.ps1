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
        $newContent = $content -replace 'assets/Line Follower.pdf', 'assets/NEXOVATE - Line Follower (1).pdf'
        Set-Content $path $newContent
        Write-Host "Updated $file"
    }
}
