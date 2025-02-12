Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression

scoop bucket add tilt-dev https://github.com/tilt-dev/scoop-bucket
scoop install ctlptl