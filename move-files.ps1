# Stop processes
try { Stop-Process -Name "node" -Force } catch { }

# Set source and destination paths
$sourcePath = "C:\Users\acer\OneDrive\Desktop\Farmshare\tractor-pool-pro"
$destPath = "C:\Users\acer\OneDrive\Desktop\Farmshare"

# Create function to copy items
function Copy-ItemSafely {
    param (
        [string]$source,
        [string]$destination
    )
    
    Get-ChildItem -Path $source -Force | ForEach-Object {
        $destItem = Join-Path $destination $_.Name
        if (-not (Test-Path $destItem)) {
            Copy-Item -Path $_.FullName -Destination $destination -Force -Recurse
        }
    }
}

# Copy files
Copy-ItemSafely -source $sourcePath -destination $destPath

# Remove source directory after successful copy
Remove-Item -Path $sourcePath -Recurse -Force