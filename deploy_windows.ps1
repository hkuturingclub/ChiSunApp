$scriptpath = $MyInvocation.MyCommand.Path
$dir = Split-Path $scriptpath
cd $dir
$id = git subtree split --prefix server master
Invoke-Expression "git push heroku $id:master --force"