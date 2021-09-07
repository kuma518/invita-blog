# Learning powershell as a Linux user

Since Windows XP there are two [shells](https://en.wikipedia.org/wiki/Command-line_interface) available on the system. Powershell `powershell.exe` and the original "Command Prompt" `cmd.exe`. Windows 10 comes preinstalled with Powershell version 5 so I am using that one.

<!-- The older `cmd.exe`, still has deep integrations into graphical Windows Desktop settings and applications. For example the "Run" window opened with `Win+R` is a Command Prompt in the background. -->

## Why bother

Personally, I learned Powershell to automate Workstation setup and maintenance. But there are still other reasons why one might want to learn the powershell basics.

1. `cmd.exe` is good for oneliners, but actual scripting is only really done with Powershell.
2. Windows Powershell has a 150 something aliases that mirror basic unix binaries. (i.e. `echo -> Write-Output`, `ls -> Get-ChildItem`)
3. The even newer, open source [rewrite](https://github.com/PowerShell/PowerShell) of powershell works cross platform on Windows, Linux and macOS.

There are still millions of Windows boxes around the world. They are used as Workstations or Personal Computers, not so much as servers. Every employees PC needs setup and patches, that's where powershell comes in. Modern systems, including everything in the public cloud, run on Linux (usually operated via `bash` shell). Compared to traditional Unix tooling, Powershell is a young and already fading relic.

<!-- ```ps1
systeminfo.exe
where.exe
whoami.exe
ping.exe
``` -->

## Powershell snippets

Things I learned when using the [powershell language](https://github.com/PowerShell/PowerShell/tree/master/docs/learning-powershell#map-book-for-experienced-bash-users), to do scripting (with objects?! Why not use python or js?) on windows.
I used the default version of windows powershell, version 5. Not the new fancy `pwsh` from GitHub.

1. powershell is inspired by unix, but breakes a lot of rules.
2. It uses [objects](https://www.varonis.com/blog/how-to-use-powershell-objects-and-data-piping).

   - Most Commands (not all) return objects.
   - You can create objects manually.
   - Pipe an object into `Get-Member` to see it's props/methods.

3. Instead of stdout and stderr (unix), there are five channels a process can [stream with](https://devblogs.microsoft.com/wp-content/uploads/sites/29/2019/02/2570.1.png).
4. just use admin powershell. (ofc there is no `sudo`)

   - search for powershell in windows and do `ctrl + shift + enter`
   - do `powershell.exe "start-process powershell -verb runas"` in `cmd.exe`

5. curl.exe is preinstalled with windows 10.

## Schedule Tasks

Windows works using schedulded tasks, these tasks are visually accessible in the the `Task Scheduler` app.
Powershell has it's own abstraction on these tasks called [jobs](https://docs.microsoft.com/en-us/powershell/module/psscheduledjob). Powershell jobs are a superset of windows tasks, (Every powershell job is also a windows task).

We just schedule tasks [directly](https://docs.microsoft.com/en-us/powershell/module/scheduledtasks) using `New-ScheduledTask`.

```ps1
TODO:
   wallpaper
   remote desktop

# create the task object
$act = New-ScheduledTaskAction -Execute "powershell.exe"
$task = New-ScheduledTask -Action $act

# create the task
Register-ScheduledTask T1 -RunLevel "Highest" -InputObject $task
# manually start the task
Start-ScheduledTask -TaskName "T1"
# remove the task
Unregister-ScheduledTask -TaskName "T1" -Confirm False
```

## Snippets

```ps1
# Check for admin in powershell
$currentPrincipal=New-Object Security.Principal.WindowsPrincipal([Security.Principal.WindowsIdentity]::GetCurrent());
$isAdmin=$currentPrincipal.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator);
echo $isAdmin;
```

`Start-Process -FilePath "myfile.txt" -WorkingDirectory "C:\PS-Test" -Verb Print`
https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/start-process?view=powershell-7
