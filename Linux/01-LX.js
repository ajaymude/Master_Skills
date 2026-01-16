//==================================================================================
//==================================================================================

====================================================
MODULE 3: LINUX FILE SYSTEM & ACCESS – NOTES
====================================================

----------------------------------------------------
1) IMPORTANT THINGS TO REMEMBER IN LINUX
----------------------------------------------------
- Linux is CASE-SENSITIVE
  Example: File.txt ≠ file.txt
- Everything in Linux is treated as a FILE
- Command format:
  command [options] [arguments]
- Root directory starts with /
- Use `man command` for help
  Example: man ls

----------------------------------------------------
2) ACCESS TO LINUX SYSTEM
----------------------------------------------------
Ways to access Linux:
1. Local Login (physical system)
2. Remote Login

Remote Access Methods:
- SSH (Secure Shell)
- PuTTY (Windows-based SSH client)

----------------------------------------------------
3) ACCESS LINUX VIA SSH / PUTTY
----------------------------------------------------
SSH Command:
ssh username@server_ip

Example:
ssh root@192.168.1.10

Default SSH Port:
22

PuTTY Steps:
- Enter IP Address
- Port: 22
- Connection Type: SSH
- Click Open

----------------------------------------------------
4) COMMAND PROMPT & GETTING PROMPT BACK
----------------------------------------------------
Prompt symbols:
$  -> Normal user
#  -> Root user

If terminal hangs or command runs too long:
Ctrl + C   -> Stop command

----------------------------------------------------
5) WHAT IS ROOT?
----------------------------------------------------
- Root is the superuser in Linux
- Has full administrative privileges
- Can modify/delete any file

Switch to root:
su -

----------------------------------------------------
6) CHANGING PASSWORD
----------------------------------------------------
Change own password:
passwd

Change another user password (root only):
passwd username

----------------------------------------------------
7) INTRODUCTION TO LINUX FILE SYSTEM
----------------------------------------------------
- Linux file system is hierarchical (tree structure)
- Starts from root directory "/"
- All files and directories are organized under /

----------------------------------------------------
8) FILE SYSTEM STRUCTURE & DESCRIPTION
----------------------------------------------------
/        -> Root directory
/home    -> Home directories for users
/root    -> Home directory for root user
/bin     -> Essential user commands
/sbin    -> System administration commands
/etc     -> Configuration files
/var     -> Log files & variable data
/tmp     -> Temporary files
/usr     -> User programs and libraries
/lib     -> Shared libraries

----------------------------------------------------
9) FILE SYSTEM NAVIGATION COMMANDS
----------------------------------------------------
pwd  -> Print current directory
ls   -> List files and directories
ls -l -> Long listing
ls -a -> Show hidden files

Change directory:
cd directory_name
cd /absolute/path
cd ..        -> Move one directory up
cd ~         -> Go to home directory

----------------------------------------------------
10) ABSOLUTE & RELATIVE PATHS
----------------------------------------------------
Absolute Path:
- Starts from root (/)
- Example: /home/user/file.txt

Relative Path:
- Based on current directory
- Example: ./file.txt or ../file.txt

----------------------------------------------------
11) FILE & DIRECTORY PROPERTIES
----------------------------------------------------
Check properties:
ls -l

Output fields:
- File type
- Permissions
- Number of links
- Owner
- Group
- Size
- Date & time
- File name

----------------------------------------------------
12) CREATING FILES & DIRECTORIES
----------------------------------------------------
Create empty file:
touch file.txt

Create directory:
mkdir folder_name

Copy files:
cp source destination

Copy directory:
cp -r dir1 dir2

----------------------------------------------------
13) FINDING FILES & DIRECTORIES
----------------------------------------------------
find command:
find /path -name filename

locate command:
locate filename

Difference:
find   -> Real-time search (slower)
locate -> Uses database (faster)

----------------------------------------------------
14) WILDCARDS
----------------------------------------------------
*  -> Matches any characters
?  -> Matches single character
[] -> Matches character range

Examples:
ls *.txt
ls file?.txt
ls file[1-3].txt

----------------------------------------------------
15) LINUX FILE TYPES
----------------------------------------------------
- Regular file (-)
- Directory (d)
- Link (l)
- Character device (c)
- Block device (b)
- Socket (s)
- Pipe (p)

----------------------------------------------------
16) SOFT & HARD LINKS
----------------------------------------------------
Hard Link:
ln file1 file2

Soft (Symbolic) Link:
ln -s file1 file2

Difference:
- Hard link shares inode
- Soft link points to path
- Soft link breaks if original file deleted

----------------------------------------------------
END OF MODULE 3 NOTES
====================================================


//==================================================================================
//==================================================================================

====================================================
MODULE 4: LINUX COMMANDS, PERMISSIONS & TEXT PROCESSING
====================================================

----------------------------------------------------
1) LINUX COMMAND SYNTAX
----------------------------------------------------
General Syntax:
command [options] [arguments]

Example:
ls -l /home

----------------------------------------------------
2) FILE & DIRECTORY PERMISSIONS (chmod)
----------------------------------------------------
Permission Types:
r -> read
w -> write
x -> execute

Applies to:
- User (owner)
- Group
- Others

Symbolic Mode:
chmod u+x file
chmod g-w file
chmod o+r file

----------------------------------------------------
3) FILE PERMISSIONS – NUMERIC MODE
----------------------------------------------------
Permission Values:
r = 4
w = 2
x = 1

Examples:
chmod 777 file   -> Full permission
chmod 755 file   -> rwxr-xr-x
chmod 644 file   -> rw-r--r--

----------------------------------------------------
4) FILE OWNERSHIP COMMANDS
----------------------------------------------------
Changechown (change owner):
chown user file

Change owner & group:
chown user:group file

chgrp (change group):
chgrp group file

----------------------------------------------------
5) ACCESS CONTROL LIST (ACL)
----------------------------------------------------
Used for fine-grained permissions

Set ACL:
setfacl -m u:username:rwx file

View ACL:
getfacl file

----------------------------------------------------
6) HELP COMMANDS
----------------------------------------------------
command --help
man command
info command

----------------------------------------------------
7) TAB COMPLETION & COMMAND HISTORY
----------------------------------------------------
TAB key:
- Auto-complete commands & file names

Up Arrow:
- View previous commands

----------------------------------------------------
8) ADDING TEXT TO FILES
----------------------------------------------------
Using echo:
echo "Hello" > file.txt
echo "World" >> file.txt

Using cat:
cat > file.txt
(Type text then Ctrl+D)

----------------------------------------------------
9) INPUT & OUTPUT REDIRECTION
----------------------------------------------------
>   -> Output overwrite
>>  -> Output append
<   -> Input redirect

stdin  -> 0
stdout -> 1
stderr -> 2

Examples:
ls > output.txt
ls >> output.txt
command 2> error.txt

----------------------------------------------------
10) TEE COMMAND
----------------------------------------------------
Writes output to file & screen

Example:
ls | tee file.txt
ls | tee -a file.txt

----------------------------------------------------
11) PIPES ( | )
----------------------------------------------------
Pass output of one command to another

Example:
ls | grep txt
ps aux | grep root

----------------------------------------------------
12) EXECUTING MULTIPLE COMMANDS
----------------------------------------------------
;   -> Run commands sequentially
&&  -> Run next if previous succeeds
||  -> Run next if previous fails

Examples:
mkdir test && cd test
rm file || echo "Delete failed"

----------------------------------------------------
13) FILE MAINTENANCE COMMANDS
----------------------------------------------------
cp     -> Copy files
mv     -> Move/Rename
rm     -> Remove files
mkdir  -> Create directory
rmdir  -> Remove empty directory

----------------------------------------------------
14) FILE DISPLAY COMMANDS
----------------------------------------------------
cat   -> Display entire file
less  -> Scrollable view
more  -> Page by page
head  -> First 10 lines
tail  -> Last 10 lines
tail -f -> Live log view

----------------------------------------------------
15) TEXT PROCESSING / FILTER COMMANDS
----------------------------------------------------
Used to process text data & logs

----------------------------------------------------
16) CUT COMMAND
----------------------------------------------------
Extract columns

Example:
cut -d: -f1 /etc/passwd

----------------------------------------------------
17) AWK COMMAND
----------------------------------------------------
Pattern scanning & processing

Example:
awk '{print $1,$3}' file.txt

----------------------------------------------------
18) GREP / EGREP
----------------------------------------------------
Search text patterns

Examples:
grep "error" file.txt
grep -i "error" file.txt
egrep "error|fail" file.txt

----------------------------------------------------
19) SORT & UNIQ
----------------------------------------------------
sort file.txt
sort -r file.txt
uniq file.txt
sort file.txt | uniq

----------------------------------------------------
20) COMPARE FILES
----------------------------------------------------
diff file1 file2
cmp file1 file2

----------------------------------------------------
21) WC COMMAND
----------------------------------------------------
Count lines, words, characters

wc file.txt
wc -l file.txt
wc -w file.txt

----------------------------------------------------
22) COMPRESS & UNCOMPRESS FILES
----------------------------------------------------
tar:
tar -cvf file.tar folder
tar -xvf file.tar

gzip:
gzip file
gunzip file.gz

----------------------------------------------------
23) TRUNCATE FILE SIZE
----------------------------------------------------
truncate -s 0 file.txt
truncate -s 10M file.txt

----------------------------------------------------
24) COMBINING & SPLITTING FILES
----------------------------------------------------
Combine:
cat file1 file2 > combined.txt

Split:
split -l 100 file.txt

----------------------------------------------------
25) LINUX VS WINDOWS COMMANDS
----------------------------------------------------
ls    -> dir
cp    -> copy
rm    -> del
mv    -> move
cat   -> type
pwd   -> cd

----------------------------------------------------
END OF MODULE 4 NOTES
====================================================


//==================================================================================
//==================================================================================




// notes

====================================================
MODULE 5: LINUX USER, PROCESS & SYSTEM MANAGEMENT
====================================================

----------------------------------------------------
1. Welcome to Module 5
----------------------------------------------------
Overview:
This module focuses on user management, process control, scheduling, system monitoring, editors, and system maintenance.

Key Areas:
- User & group management
- Editors and text processing
- Processes & scheduling
- System monitoring & maintenance
- Authentication & directory services

----------------------------------------------------
2. Linux File Editor (vi)
----------------------------------------------------
Definition:
vi is a standard Linux text editor available on almost all systems.

Modes:
- Command Mode
- Insert Mode
- Last Line Mode

Important Commands:
i       → insert mode
Esc     → command mode
:w      → save
:q      → quit
:wq     → save & quit
:q!     → force quit

Example:
vi file.txt

----------------------------------------------------
3. Difference between vi and vim Editors
----------------------------------------------------
vi:
- Basic editor
- Minimal features
- Available everywhere

vim:
- Advanced version of vi
- Syntax highlighting
- Plugins support
- Undo history

Difference Summary:
vim = vi + enhanced features

----------------------------------------------------
4. sed Command
----------------------------------------------------
Definition:
Stream editor for filtering and transforming text.

Syntax:
sed 'operation' file

Common Options:
-n   suppress output
-i   edit file in-place

Examples:
sed 's/linux/Linux/' file.txt
sed -i 's/old/new/g' file.txt

Use Cases:
- Search & replace
- Text manipulation in scripts

----------------------------------------------------
5. User Account Management
----------------------------------------------------
Commands:
useradd    → add user
userdel    → delete user
usermod    → modify user
groupadd  → add group
groupdel  → delete group

Syntax:
useradd username
usermod -aG group user
userdel -r username

----------------------------------------------------
6. Enable Password Aging
----------------------------------------------------
Definition:
Enforces password expiration policies.

Command:
chage

Syntax:
chage [options] user

Options:
-M  max days
-m  min days
-W  warning days
-l  list policy

Example:
chage -M 90 user1

----------------------------------------------------
7. Switch Users and sudo Access
----------------------------------------------------
Commands:
su      → switch user
sudo    → execute as root

Syntax:
su - username
sudo command

Difference:
su → full shell
sudo → single command with privileges

----------------------------------------------------
8. Monitor Users
----------------------------------------------------
Commands:
who     → logged-in users
last    → login history
w       → user activity
id      → user identity

Examples:
who
last
id username

----------------------------------------------------
9. Lab: Manage Team Accounts and Enforce Password Policies
----------------------------------------------------
Tasks:
- Create users/groups
- Assign sudo access
- Set password aging
- Verify login details

----------------------------------------------------
10. Talking to Users
----------------------------------------------------
Commands:
users   → list users
wall    → broadcast message
write   → message single user

Examples:
wall "System reboot at 10 PM"
write user1

----------------------------------------------------
11. Special Permissions (setuid, setgid, sticky bit)
----------------------------------------------------
Definition:
Special permissions for files/directories.

Permissions:
setuid  → runs as file owner
setgid  → runs as group
sticky  → restrict delete access

Commands:
chmod u+s file
chmod g+s dir
chmod +t dir

----------------------------------------------------
12. Role Play 13: Onboarding a New Employee
----------------------------------------------------
Tasks:
- Create user & group
- Assign permissions
- Configure sudo
- Apply password policy

----------------------------------------------------
13. Linux Directory Service - Account Authentication
----------------------------------------------------
Definition:
Centralized authentication system.

Examples:
- LDAP
- Active Directory
- IDM

Purpose:
Manage users across multiple systems

----------------------------------------------------
14. Difference between AD, LDAP, IDM, WinBIND, OpenLDAP
----------------------------------------------------
Active Directory:
- Microsoft based
- Centralized auth

LDAP:
- Protocol for directory services

OpenLDAP:
- Open-source LDAP server

WinBIND:
- Linux integration with AD

IDM:
- Identity management system

----------------------------------------------------
15. System Utility Commands
----------------------------------------------------
Commands:
date       → system date
uptime     → running time
hostname   → system name
uname      → kernel info
which      → command path
cal        → calendar
bc         → calculator

Examples:
uptime
uname -a

----------------------------------------------------
16. Processes, Jobs and Scheduling
----------------------------------------------------
Definition:
Processes are running programs.

Types:
- Foreground
- Background

Scheduling:
- cron
- at

----------------------------------------------------
17. systemctl Command
----------------------------------------------------
Definition:
Controls system services.

Syntax:
systemctl action service

Actions:
start
stop
restart
status
enable
disable

Example:
systemctl status sshd

----------------------------------------------------
18. ps Command
----------------------------------------------------
Definition:
Displays running processes.

Syntax:
ps [options]

Common Options:
ps -ef
ps aux

----------------------------------------------------
19. top Command
----------------------------------------------------
Definition:
Real-time process monitoring.

Key Fields:
PID, CPU, MEM, TIME

Command:
top

----------------------------------------------------
20. kill Command
----------------------------------------------------
Definition:
Terminates processes.

Syntax:
kill signal PID

Example:
kill -9 1234

----------------------------------------------------
21. Process Signals in Linux
----------------------------------------------------
Common Signals:
1  SIGHUP
9  SIGKILL
15 SIGTERM

Example:
kill -15 PID

----------------------------------------------------
22. crontab Command
----------------------------------------------------
Definition:
Schedules recurring jobs.

Syntax:
crontab -e

Format:
min hour day month weekday command

Example:
0 2 * * * backup.sh

----------------------------------------------------
23. at Command
----------------------------------------------------
Definition:
Schedules one-time jobs.

Syntax:
at time

Example:
at 5pm
shutdown now

----------------------------------------------------
24. Additional cronjobs
----------------------------------------------------
Directories:
/etc/cron.hourly
/etc/cron.daily
/etc/cron.weekly
/etc/cron.monthly

----------------------------------------------------
25. Role Play 14: High Load Investigation
----------------------------------------------------
Tasks:
- Identify process
- Kill or nice process
- Schedule monitoring job

----------------------------------------------------
26. Process Management (bg, fg, nice)
----------------------------------------------------
Commands:
bg    → background
fg    → foreground
nice  → priority

Example:
nice -n 10 command

----------------------------------------------------
27. System Monitoring Commands
----------------------------------------------------
Commands:
df       → disk usage
dmesg    → kernel messages
iostat   → CPU/disk stats
netstat  → network stats
free     → memory
top      → process view

----------------------------------------------------
28. System Logs Monitor
----------------------------------------------------
Location:
/var/log

Important Logs:
messages
secure
cron
boot.log

----------------------------------------------------
29. Lab: System Health Report
----------------------------------------------------
Tasks:
- Check CPU, memory, disk
- Analyze logs
- Document findings

----------------------------------------------------
30. System Maintenance Commands
----------------------------------------------------
Commands:
shutdown
init
reboot
halt

Examples:
shutdown -h now
reboot

----------------------------------------------------
31. Changing System Hostname
----------------------------------------------------
Command:
hostnamectl

Syntax:
hostnamectl set-hostname newname

----------------------------------------------------
32. Finding System Information
----------------------------------------------------
Commands:
uname
dmidecode

Examples:
uname -a
dmidecode -t system

----------------------------------------------------
33. Finding System Architecture
----------------------------------------------------
Command:
arch

Example:
arch

----------------------------------------------------
34. SOS Report
----------------------------------------------------
Definition:
Collects system diagnostic data.

Command:
sosreport

Use Case:
Support & troubleshooting

----------------------------------------------------
35. Role Play 15: System Performance Check
----------------------------------------------------
Tasks:
- Monitor resources
- Generate SOS report
- Create health summary

----------------------------------------------------
36. Terminal Control Keys
----------------------------------------------------
Keys:
Ctrl+C → terminate
Ctrl+Z → suspend
Ctrl+D → exit
Ctrl+L → clear screen

----------------------------------------------------
37. Terminal Commands
----------------------------------------------------
Commands:
clear
exit
script

Examples:
script session.log

----------------------------------------------------
38. Recover Root Password
----------------------------------------------------
Steps:
- Edit grub
- Boot into single-user mode
- Reset password

Command:
passwd root

----------------------------------------------------
39. Environment Variables
----------------------------------------------------
Definition:
Variables controlling shell behavior.

Commands:
env
export
printenv

Examples:
export PATH=$PATH:/opt/bin

----------------------------------------------------
40. screen Command
----------------------------------------------------
Definition:
Persistent terminal session manager.

Commands:
screen
Ctrl+A D → detach
screen -r → reattach

----------------------------------------------------
41. tmux Command
----------------------------------------------------
Definition:
Advanced terminal multiplexer.

Commands:
tmux
Ctrl+B D → detach
tmux attach

----------------------------------------------------
42. Role Play 16: Root Recovery & Sessions
----------------------------------------------------
Tasks:
- Recover root access
- Use screen/tmux
- Maintain sessions

----------------------------------------------------
43. Quiz 5: Module 5 Quiz
----------------------------------------------------
Purpose:
Test understanding of Module 5 concepts

----------------------------------------------------
44. Module 5 Homework
----------------------------------------------------
Tasks:
- Practice commands
- User & process management
- Scheduling jobs

----------------------------------------------------
45. Module 5 Handouts
----------------------------------------------------
Includes:
- Command references
- Diagrams
- Practice sheets
----------------------------------------------------


//==================================================================================
//==================================================================================



====================================================
MODULE 6: LINUX SHELL & SHELL SCRIPTING
====================================================

----------------------------------------------------
1. Welcome to Module 6
----------------------------------------------------
Overview:
This module introduces the Linux kernel, shell concepts, and shell scripting for automation and administration.

Focus Areas:
- Linux kernel basics
- Shell types
- Shell scripting fundamentals
- Control structures
- Aliases and history
- Productivity automation

----------------------------------------------------
2. Linux Kernel
----------------------------------------------------
Definition:
The kernel is the core of the Linux operating system.

Responsibilities:
- Process management
- Memory management
- Hardware interaction
- File system control

Command:
uname -r

Example:
uname -a

----------------------------------------------------
3. What is a Shell?
----------------------------------------------------
Definition:
A shell is a command-line interpreter that allows users to interact with the Linux OS.

Functions:
- Executes commands
- Runs scripts
- Manages environment variables

Examples:
bash
sh
zsh

----------------------------------------------------
4. Types of Shells
----------------------------------------------------
Common Shells:
sh     → Bourne Shell
bash   → Bourne Again Shell
csh    → C Shell
tcsh   → Enhanced C Shell
ksh    → Korn Shell
zsh    → Z Shell

Check current shell:
echo $SHELL

----------------------------------------------------
5. Shell Scripting
----------------------------------------------------
Definition:
Shell scripting is writing a sequence of commands in a file to automate tasks.

Script File:
Ends with .sh

Shebang:
#!/bin/bash

----------------------------------------------------
6. Basic Shell Scripts
----------------------------------------------------
Steps:
1. Create script file
2. Add commands
3. Give execute permission
4. Run script

Commands:
chmod +x script.sh
./script.sh

Example:
#!/bin/bash
echo "Hello Linux"

----------------------------------------------------
7. Input and Output of Script
----------------------------------------------------
Input:
read command

Output:
echo command

Example:
read name
echo "Hello $name"

Arguments:
$0, $1, $2, $#

----------------------------------------------------
8. if-then Scripts
----------------------------------------------------
Definition:
Conditional execution of commands.

Syntax:
if [ condition ]
then
  commands
fi

Example:
if [ $a -gt $b ]
then
  echo "A is greater"
fi

----------------------------------------------------
9. for Loop Scripts
----------------------------------------------------
Definition:
Repeats commands for a list or range.

Syntax:
for var in list
do
  commands
done

Example:
for i in 1 2 3
do
  echo $i
done

----------------------------------------------------
10. do-while Scripts
----------------------------------------------------
Definition:
Executes commands at least once, then checks condition.

Syntax:
while condition
do
  commands
done

Until Loop:
until condition
do
  commands
done

----------------------------------------------------
11. Case Statement Scripts
----------------------------------------------------
Definition:
Multi-condition branching.

Syntax:
case value in
  pattern) commands ;;
esac

Example:
case $1 in
  start) echo "Start" ;;
  stop) echo "Stop" ;;
esac

----------------------------------------------------
12. Lab: Menu-Driven Utility Script
----------------------------------------------------
Tasks:
- Display menu
- Read user choice
- Perform actions using case statement

----------------------------------------------------
13. Check Remote Servers Connectivity
----------------------------------------------------
Purpose:
Check network reachability of servers.

Commands:
ping
ssh
nc

Example:
ping -c 3 server_ip

----------------------------------------------------
14. Role Play 17: Multi-Server Connectivity Script
----------------------------------------------------
Tasks:
- Loop through server list
- Ping each server
- Log connectivity status

----------------------------------------------------
15. Aliases (alias)
----------------------------------------------------
Definition:
Shortcut for long commands.

Syntax:
alias name='command'

Example:
alias ll='ls -l'

----------------------------------------------------
16. User and Global Aliases
----------------------------------------------------
User Aliases:
~/.bashrc

Global Aliases:
/etc/bashrc
/etc/profile

Apply changes:
source ~/.bashrc

----------------------------------------------------
17. Shell History
----------------------------------------------------
Definition:
Stores previously executed commands.

Commands:
history
!number
!! 

Example:
history | tail

----------------------------------------------------
18. Role Play 18: Productivity with Aliases & History
----------------------------------------------------
Tasks:
- Create aliases
- Use history efficiently
- Speed up daily tasks

----------------------------------------------------
19. Quiz 6: Module 6 Quiz
----------------------------------------------------
Purpose:
Evaluate understanding of shell and scripting concepts

----------------------------------------------------
20. Module 6 Homework
----------------------------------------------------
Tasks:
- Write scripts
- Practice loops & conditions
- Use aliases and history

----------------------------------------------------
21. Module 6 Handouts
----------------------------------------------------
Includes:
- Script templates
- Command references
- Practice examples
----------------------------------------------------








//==================================================================================
//==================================================================================






====================================================
MODULE 7: LINUX NETWORKING, SERVICES & ADVANCED ADMINISTRATION
====================================================

----------------------------------------------------
1. Welcome to Module 7
----------------------------------------------------
Overview:
This module covers Linux networking fundamentals, remote access, file transfer, system updates, servers, security, containers, and automation.

Core Focus:
- Networking
- Remote access
- File transfer
- System services
- Security & monitoring
- Containers & automation

----------------------------------------------------
2. Client and Server Relationship
----------------------------------------------------
Definition:
Client requests services, server provides services.

Examples:
Client → Browser
Server → Web Server

Protocols:
HTTP, HTTPS, FTP, SSH

----------------------------------------------------
3. Enable Internet on Linux VM
----------------------------------------------------
Methods:
- NAT
- Bridged Adapter

Commands:
ping
nmcli

Example:
ping google.com

----------------------------------------------------
4. Network Components
----------------------------------------------------
Components:
- IP Address
- Subnet Mask
- Gateway
- DNS
- NIC

----------------------------------------------------
5. Network Files and Commands
----------------------------------------------------
Files:
/etc/hosts
/etc/resolv.conf
/etc/sysconfig/network-scripts/

Commands:
ping
ifup
ifdown
netstat
tcpdump

Examples:
ping -c 4 8.8.8.8
netstat -tulnp

----------------------------------------------------
6. NIC Information (ethtool)
----------------------------------------------------
Definition:
Displays and controls NIC parameters.

Syntax:
ethtool interface

Example:
ethtool eth0

----------------------------------------------------
7. NIC or Port Bonding
----------------------------------------------------
Definition:
Combines multiple NICs for redundancy or performance.

Modes:
balance-rr
active-backup
802.3ad (LACP)

Files:
ifcfg-bond0

----------------------------------------------------
8. New Network Utilities
----------------------------------------------------
Tools:
nmtui
nmcli
nm-connection-editor
GNOME Settings

Examples:
nmcli device status
nmtui

----------------------------------------------------
9. SSH and Telnet
----------------------------------------------------
SSH:
Secure remote access

Telnet:
Unsecured remote access

Command:
ssh user@server
telnet server

Difference:
SSH is encrypted
Telnet is not secure

----------------------------------------------------
10. Configure and Secure SSH
----------------------------------------------------
File:
/etc/ssh/sshd_config

Options:
Port
PermitRootLogin
PasswordAuthentication

Commands:
systemctl restart sshd

----------------------------------------------------
11. SSH Keys (Password-less Login)
----------------------------------------------------
Commands:
ssh-keygen
ssh-copy-id user@server

Benefits:
- Secure
- No password prompt

----------------------------------------------------
12. ss Command
----------------------------------------------------
Definition:
Replaces netstat for socket statistics.

Syntax:
ss [options]

Examples:
ss -tuln

----------------------------------------------------
13. Role Play 19: Network Issues & SSH Security
----------------------------------------------------
Tasks:
- Diagnose network
- Secure SSH
- Use ss and ping

----------------------------------------------------
14. curl and ping Commands
----------------------------------------------------
ping:
Network connectivity

curl:
Transfer data from URL

Examples:
curl http://example.com
ping -c 3 google.com

----------------------------------------------------
15. Lab: Network Troubleshooting Toolkit
----------------------------------------------------
Tools Used:
ping
ss
curl
netstat

----------------------------------------------------
16. FTP (File Transfer Protocol)
----------------------------------------------------
Definition:
Transfers files over network.

Ports:
21

Commands:
ftp server_ip

Limitation:
Not secure

----------------------------------------------------
17. SCP (Secure Copy Protocol)
----------------------------------------------------
Definition:
Secure file transfer using SSH.

Syntax:
scp file user@server:/path

Example:
scp test.txt user@192.168.1.10:/tmp

----------------------------------------------------
18. rsync (Remote Sync)
----------------------------------------------------
Definition:
Efficient file synchronization.

Syntax:
rsync options source destination

Options:
-a
-v
-z

Example:
rsync -av dir/ user@server:/backup/

----------------------------------------------------
19. wget Command
----------------------------------------------------
Definition:
Downloads files from internet.

Syntax:
wget url

Example:
wget http://example.com/file.tar.gz

----------------------------------------------------
20. Lab: File Transfer & Sync Toolkit
----------------------------------------------------
Tools:
scp
rsync
ftp
wget

----------------------------------------------------
21. Role Play 20: Choosing Transfer Tools
----------------------------------------------------
Scenarios:
- Large files
- Secure transfer
- Incremental sync

----------------------------------------------------
22. System Updates and Repos
----------------------------------------------------
Commands:
rpm
yum

Examples:
rpm -qa
yum install httpd

----------------------------------------------------
23. System Upgrade & Patch Management
----------------------------------------------------
Tasks:
- Apply updates
- Security patches
- Version upgrades

Commands:
yum update

----------------------------------------------------
24. Create Local Repository (YUM Server)
----------------------------------------------------
Purpose:
Offline package installation.

Tools:
createrepo
httpd

----------------------------------------------------
25. Advanced Package Management
----------------------------------------------------
Includes:
- Dependency resolution
- Repo priority
- Package locking

----------------------------------------------------
26. Rollback Patches and Updates
----------------------------------------------------
Tools:
yum history

Commands:
yum history undo ID

----------------------------------------------------
27. Lab: Network Diagnostics Console
----------------------------------------------------
Includes:
- Network tools
- Package tools
- Monitoring

----------------------------------------------------
28. DNS Installation and Configuration
----------------------------------------------------
Service:
bind

Files:
/etc/named.conf

Purpose:
Name to IP resolution

----------------------------------------------------
29. Hostname or IP Lookup
----------------------------------------------------
Commands:
nslookup
dig

Examples:
dig google.com

----------------------------------------------------
30. Network Time Protocol (NTP)
----------------------------------------------------
Purpose:
Time synchronization

Service:
ntpd

----------------------------------------------------
31. chronyd
----------------------------------------------------
Definition:
Modern replacement for ntpd.

Commands:
chronyc sources

----------------------------------------------------
32. timedatectl
----------------------------------------------------
Definition:
Manages system date/time.

Examples:
timedatectl set-timezone Asia/Kolkata

----------------------------------------------------
33. Mail Transfer Agent
----------------------------------------------------
Purpose:
Send emails from system.

Examples:
postfix
sendmail

----------------------------------------------------
34. Web Server (Apache HTTP)
----------------------------------------------------
Service:
httpd

Commands:
systemctl start httpd

Config:
 /etc/httpd/conf/httpd.conf

----------------------------------------------------
35. Nginx Web Server
----------------------------------------------------
Features:
- High performance
- Reverse proxy

Commands:
systemctl start nginx

----------------------------------------------------
36. Cockpit (Web-Based Admin)
----------------------------------------------------
Definition:
Web-based system management tool.

Access:
https://server:9090

----------------------------------------------------
37. Proxy Server (Squid)
----------------------------------------------------
Purpose:
Cache and control internet access.

Config:
 /etc/squid/squid.conf

----------------------------------------------------
38. Central Logger (rsyslog)
----------------------------------------------------
Purpose:
Centralized log management.

Config:
 /etc/rsyslog.conf

----------------------------------------------------
39. Nagios Monitoring
----------------------------------------------------
Purpose:
Monitor systems and services.

Components:
- NRPE
- Plugins
- Alerts

----------------------------------------------------
40. Securing Linux Machine (OS Hardening)
----------------------------------------------------
Includes:
- Firewall
- SELinux
- Disable unused services
- Secure SSH

----------------------------------------------------
41. OpenLDAP Installation
----------------------------------------------------
Purpose:
Centralized authentication.

Service:
slapd

----------------------------------------------------
42. traceroute Command
----------------------------------------------------
Purpose:
Trace network path.

Command:
traceroute google.com

----------------------------------------------------
43. Open Image via Command Line
----------------------------------------------------
Commands:
display
xdg-open

Example:
xdg-open image.png

----------------------------------------------------
44. Firewall
----------------------------------------------------
Tools:
firewalld
iptables

Commands:
firewall-cmd --list-all

----------------------------------------------------
45. Tune System Performance
----------------------------------------------------
Tools:
tuned
nice
renice

Examples:
nice -n 10 process

----------------------------------------------------
46. Lab: Admin Console for Logs & Traffic
----------------------------------------------------
Includes:
- Logs
- Network traffic
- Process monitoring

----------------------------------------------------
47. Containers - Podman
----------------------------------------------------
Definition:
Daemonless container engine.

Commands:
podman run
podman ps

----------------------------------------------------
48. Docker Management
----------------------------------------------------
Commands:
docker run
docker ps
docker images

----------------------------------------------------
49. Kickstart (Automated Install)
----------------------------------------------------
Definition:
Automates Linux installation.

File:
ks.cfg

----------------------------------------------------
50. Ansible
----------------------------------------------------
Definition:
Automation and configuration tool.

Files:
inventory
playbook.yml

----------------------------------------------------
51. OpenVPN
----------------------------------------------------
Purpose:
Secure VPN connection.

Service:
openvpn

----------------------------------------------------
52. DHCP Server
----------------------------------------------------
Purpose:
Auto-assign IP addresses.

Service:
dhcpd

----------------------------------------------------
53. Clustered Environment
----------------------------------------------------
Purpose:
High availability & scalability.

Examples:
Pacemaker
Corosync

----------------------------------------------------
54. Role Play 21: Updates & Automation
----------------------------------------------------
Tasks:
- Patch systems
- Automate config
- Use Ansible

----------------------------------------------------
55. Role Play 22: Web Server Setup
----------------------------------------------------
Tasks:
- Install Apache/Nginx
- Enable Cockpit
- Secure access

----------------------------------------------------
56. Role Play 23: Monitoring & Containers
----------------------------------------------------
Tasks












//==================================================================================
//==================================================================================






====================================================
MODULE 8: LINUX BOOT PROCESS, STORAGE & SYSTEM COMPATIBILITY
====================================================

----------------------------------------------------
1. Welcome to Module 8
----------------------------------------------------
Overview:
This module focuses on Linux booting, run levels, storage management, file systems, backups, shared storage, databases, and OS version differences.

Core Areas:
- Boot process
- Storage & LVM
- RAID & backup
- Network storage
- Databases & stacks
- OS compatibility

----------------------------------------------------
2. System Run Levels (0 thru 6)
----------------------------------------------------
Definition:
Run levels define system operating states.

Run Levels:
0 → Halt
1 → Single-user (rescue)
2 → Multi-user (no network)
3 → Multi-user with network
4 → Unused
5 → Graphical mode
6 → Reboot

Command:
runlevel
who -r

----------------------------------------------------
3. Computer Boot Process
----------------------------------------------------
Steps:
1. Power ON
2. BIOS/UEFI
3. Bootloader
4. OS load

Purpose:
Initialize hardware and load OS

----------------------------------------------------
4. Linux Boot Process (Old Versions)
----------------------------------------------------
Flow:
BIOS → MBR → GRUB → Kernel → init → Runlevel

Files:
 /etc/inittab

----------------------------------------------------
5. Linux Boot Process (Newer Versions)
----------------------------------------------------
Flow:
UEFI → GRUB2 → Kernel → systemd → target

Targets:
multi-user.target
graphical.target

----------------------------------------------------
6. systemd-analyze Command
----------------------------------------------------
Definition:
Analyzes boot performance.

Commands:
systemd-analyze
systemd-analyze blame
systemd-analyze critical-chain

----------------------------------------------------
7. Role Play 24: Slow Boot Investigation
----------------------------------------------------
Tasks:
- Analyze boot time
- Identify slow services
- Explain run levels

----------------------------------------------------
8. Message of the Day (MOTD)
----------------------------------------------------
Definition:
Message displayed after login.

File:
 /etc/motd

Use Case:
System notices and warnings

----------------------------------------------------
9. Customize Message of the Day
----------------------------------------------------
Files:
 /etc/motd
 /etc/profile.d/

Example:
echo "Authorized users only" > /etc/motd

----------------------------------------------------
10. Storage
----------------------------------------------------
Definition:
Persistent data storage on disks.

Types:
- HDD
- SSD
- NVMe

----------------------------------------------------
11. Disk Partition (df, fdisk)
----------------------------------------------------
df:
Shows disk usage

fdisk:
Manages disk partitions

Commands:
df -h
fdisk -l

----------------------------------------------------
12. Add Disk and Create Standard Partition
----------------------------------------------------
Steps:
1. Add disk
2. fdisk /dev/sdX
3. mkfs
4. mount

Example:
mkfs.ext4 /dev/sdb1

----------------------------------------------------
13. Logical Volume Management (LVM)
----------------------------------------------------
Definition:
Flexible disk management layer.

Components:
PV → VG → LV

Commands:
pvcreate
vgcreate
lvcreate

----------------------------------------------------
14. LVM Configuration During Installation
----------------------------------------------------
Purpose:
Dynamic disk resizing

Advantages:
- Easy expansion
- Snapshot support

----------------------------------------------------
15. Add Disk and Create New LVM Partition
----------------------------------------------------
Commands:
pvcreate /dev/sdb
vgcreate vg01 /dev/sdb
lvcreate -L 5G -n lv01 vg01

----------------------------------------------------
16. Extend Disk using LVM
----------------------------------------------------
Steps:
1. Extend LV
2. Resize filesystem

Commands:
lvextend -L +5G /dev/vg01/lv01
resize2fs /dev/vg01/lv01

----------------------------------------------------
17. Adding Swap Space
----------------------------------------------------
Definition:
Disk used as virtual memory.

Commands:
mkswap
swapon

Example:
swapon /dev/sdb2

----------------------------------------------------
18. xfs_info Command
----------------------------------------------------
Definition:
Displays XFS filesystem info.

Command:
xfs_info /mountpoint

----------------------------------------------------
19. Role Play 25: Storage Expansion with LVM
----------------------------------------------------
Tasks:
- Add disk
- Extend volume
- Verify space

----------------------------------------------------
20. Advanced Storage Management with Stratis
----------------------------------------------------
Definition:
Modern storage management tool.

Commands:
stratis pool create
stratis fs create

----------------------------------------------------
21. RAID
----------------------------------------------------
Definition:
Redundant Array of Independent Disks.

Levels:
RAID 0 → Striping
RAID 1 → Mirroring
RAID 5 → Parity
RAID 10 → Mirror + Strip

----------------------------------------------------
22. File System Check
----------------------------------------------------
Commands:
fsck
xfs_repair

Use Case:
Repair corrupted filesystems

----------------------------------------------------
23. System Backup (dd Command)
----------------------------------------------------
Definition:
Low-level disk copy.

Syntax:
dd if=source of=destination

Example:
dd if=/dev/sda of=/backup/sda.img

----------------------------------------------------
24. Lab: Disk Monitoring & Backup Console
----------------------------------------------------
Includes:
- Disk usage
- LVM status
- Backup scripts

----------------------------------------------------
25. Network File System (NFS)
----------------------------------------------------
Definition:
Share files over network.

Files:
 /etc/exports

Commands:
exportfs
mount

----------------------------------------------------
26. Samba Installation and Configuration
----------------------------------------------------
Definition:
File sharing with Windows.

Service:
smb

Config:
 /etc/samba/smb.conf

----------------------------------------------------
27. NAS Drive for NFS or Samba
----------------------------------------------------
Definition:
Centralized storage device.

Use Case:
Shared storage across systems

----------------------------------------------------
28. Role Play 26: Shared Storage Setup
----------------------------------------------------
Tasks:
- Configure NFS/Samba
- Mount shares
- Test access

----------------------------------------------------
29. SATA and SAS
----------------------------------------------------
SATA:
- Low cost
- Desktop usage

SAS:
- High speed
- Enterprise usage

----------------------------------------------------
30. MySQL & MariaDB
----------------------------------------------------
Purpose:
Relational databases.

Commands:
mysql
systemctl start mariadb

----------------------------------------------------
31. LAMP Stack
----------------------------------------------------
Components:
Linux
Apache
MySQL/MariaDB
PHP

Use Case:
Web development

----------------------------------------------------
32. Role Play 27: LAMP Setup
----------------------------------------------------
Tasks:
- Install Apache
- Setup DB
- Configure PHP

----------------------------------------------------
33. Difference: CentOS/RHEL 5, 6, 7
----------------------------------------------------
Key Changes:
- init → systemd
- Legacy boot → GRUB2
- Service management updates

----------------------------------------------------
34. Difference: CentOS/RHEL 7 vs 8
----------------------------------------------------
Differences:
- dnf replaces yum
- Application streams
- Improved security

----------------------------------------------------
35. Difference: CentOS 8 vs 9 Stream
----------------------------------------------------
CentOS Stream:
Rolling release
Closer to RHEL development

----------------------------------------------------
36. Lab: Disk & OS Compatibility Console
----------------------------------------------------
Includes:
- Disk types
- OS versions
- Compatibility notes

----------------------------------------------------
37. Quiz 8: Module 8 Quiz
----------------------------------------------------
Purpose:
Test boot, storage, and OS concepts

----------------------------------------------------
38. Module 8 Homework
----------------------------------------------------
Tasks:
- Practice LVM
- Boot analysis
- Storage labs

----------------------------------------------------
39. Module 8 Handouts
----------------------------------------------------
Includes:
- Boot diagrams
- Storage commands
- Comparison charts
----------------------------------------------------





//==================================================================================
//==================================================================================



====================================================
MODULE 9: CAREER PREPARATION FOR LINUX ADMINISTRATORS
====================================================

----------------------------------------------------
1. Welcome to Module 9
----------------------------------------------------
Overview:
This module focuses on career readiness, resume building, job expectations, and professional preparation for Linux Administrator roles.

Goals:
- Create a strong resume
- Understand job responsibilities
- Prepare for job applications and interviews

----------------------------------------------------
2. Resume Workshop
----------------------------------------------------
Purpose:
Hands-on guidance to build or improve a professional resume.

Focus Areas:
- Resume structure
- Content relevance
- Industry expectations
- Tailoring resume for Linux Admin roles

----------------------------------------------------
3. Resume Design and Format
----------------------------------------------------
Definition:
The visual structure and layout of a resume.

Best Practices:
- Clean and simple design
- One or two pages maximum
- Consistent fonts and spacing
- Clear section headings

Recommended Sections:
- Header
- Summary / Objective
- Skills
- Experience
- Education
- Certifications

----------------------------------------------------
4. Grammatical Mistakes
----------------------------------------------------
Definition:
Errors in grammar, spelling, or sentence structure that reduce resume quality.

Common Mistakes:
- Spelling errors
- Incorrect tense usage
- Long and unclear sentences

Best Practices:
- Use past tense for previous roles
- Use present tense for current role
- Proofread multiple times

----------------------------------------------------
5. Objective or Summary
----------------------------------------------------
Definition:
A short introduction at the top of the resume.

Objective:
- For freshers or career changers
- Focuses on career goals

Summary:
- For experienced professionals
- Highlights skills and experience

Example:
"Linux Administrator with experience in system administration, user management, and server monitoring."

----------------------------------------------------
6. Support Your Resume
----------------------------------------------------
Definition:
Backing up resume claims with proof.

Supporting Elements:
- Projects
- Labs
- Certifications
- Internships
- Practical experience

Examples:
- Home lab setup
- Cloud practice
- Automation scripts

----------------------------------------------------
7. Cover Letter
----------------------------------------------------
Definition:
A formal letter explaining why you are suitable for the role.

Structure:
- Introduction
- Skills summary
- Experience highlights
- Closing statement

Best Practices:
- Customize for each job
- Keep it concise
- Match job requirements

----------------------------------------------------
8. Post Resume and What to Expect
----------------------------------------------------
Where to Post Resume:
- Job portals
- Company websites
- Professional networks

What to Expect:
- Resume screening
- Technical interviews
- HR discussions
- Background verification

----------------------------------------------------
9. Linux Administrator Job Duties
----------------------------------------------------
Key Responsibilities:
- User and group management
- Server installation and configuration
- Monitoring system performance
- Backup and recovery
- Security and patch management
- Troubleshooting issues

----------------------------------------------------
10. Exposure to Other Technologies
----------------------------------------------------
Importance:
Enhances job opportunities and growth.

Related Technologies:
- Cloud platforms
- Containers
- Automation tools
- Networking basics
- Databases

----------------------------------------------------
11. Role Play 28: Resume Feedback for Linux Admin Job
----------------------------------------------------
Activities:
- Resume review
- Identify improvements
- Align resume with job description
- Receive constructive feedback

----------------------------------------------------
12. Module 9 Homework
----------------------------------------------------
Tasks:
- Update resume
- Write a cover letter
- Research Linux Admin job roles

----------------------------------------------------
13. Module 9 Handouts
----------------------------------------------------
Includes:
- Resume templates
- Sample cover letters
- Job role descriptions
----------------------------------------------------



//==================================================================================
//==================================================================================









====================================================
MODULE 10: IT CAREER AWARENESS, JOB MARKET & CERTIFICATIONS
====================================================

----------------------------------------------------
1. Welcome to Module 10
----------------------------------------------------
Overview:
This module focuses on understanding the IT industry, career paths, certifications, job market trends, and interview preparation.

Objective:
- Understand IT as a field
- Explore Linux and IT careers
- Prepare for interviews and certifications

----------------------------------------------------
2. What is IT?
----------------------------------------------------
Definition:
Information Technology (IT) involves the use of computers, networks, software, and systems to store, process, and transmit information.

Core Areas:
- Hardware
- Software
- Networking
- Security
- System Administration

----------------------------------------------------
3. Facts about IT
----------------------------------------------------
Key Facts:
- IT is a fast-growing industry
- Continuous learning is required
- High demand for skilled professionals
- Global career opportunities
- Automation and cloud are increasing demand

----------------------------------------------------
4. Linux Operating System Jobs
----------------------------------------------------
Job Roles:
- Linux System Administrator
- Linux Engineer
- DevOps Engineer
- Cloud Engineer
- Site Reliability Engineer (SRE)

Key Skills Required:
- Linux commands
- Networking basics
- Shell scripting
- Security fundamentals

----------------------------------------------------
5. IT Management Jobs
----------------------------------------------------
Definition:
Roles focused on managing teams, projects, and IT operations.

Examples:
- IT Manager
- Project Manager
- Service Delivery Manager
- Technical Lead

Skills Required:
- Technical knowledge
- Communication
- Leadership
- Planning

----------------------------------------------------
6. Interview Workshop
----------------------------------------------------
Purpose:
Prepare candidates for IT and Linux interviews.

Focus Areas:
- Technical questions
- Scenario-based questions
- HR questions
- Communication skills

----------------------------------------------------
7. College Degree
----------------------------------------------------
Importance:
Formal education background in IT or related fields.

Examples:
- BSc IT
- BCA
- BE / BTech
- MCA

Note:
Degree helps but skills matter more in IT.

----------------------------------------------------
8. IT Certification
----------------------------------------------------
Definition:
Industry-recognized proof of skills.

Benefits:
- Improves resume
- Validates knowledge
- Better job opportunities

----------------------------------------------------
9. IT Related Diplomas
----------------------------------------------------
Definition:
Short-term technical courses.

Examples:
- Diploma in Networking
- Diploma in System Administration
- Diploma in Cyber Security

----------------------------------------------------
10. New to IT (A+ Certification)
----------------------------------------------------
Definition:
Entry-level certification for beginners.

Certification:
CompTIA A+

Covers:
- Hardware
- Operating systems
- Basic networking
- Troubleshooting

----------------------------------------------------
11. Review Competitive Resumes
----------------------------------------------------
Purpose:
Analyze strong resumes to improve your own.

Focus:
- Skill presentation
- Project descriptions
- Keywords
- Formatting

----------------------------------------------------
12. Linux Job Market
----------------------------------------------------
Trends:
- High demand for Linux admins
- Growth in cloud and DevOps roles
- Strong demand in enterprises

Industries:
- IT services
- Cloud providers
- Finance
- Telecom

----------------------------------------------------
13. Red Hat Certifications
----------------------------------------------------
Certifications:
- RHCSA
- RHCE
- RHCA

Focus:
- Hands-on exams
- Real-world tasks
- Enterprise Linux skills

----------------------------------------------------
14. Join Linux Communities and Forums
----------------------------------------------------
Purpose:
Learning, networking, and problem-solving.

Examples:
- Linux forums
- Open-source communities
- Professional groups

Benefits:
- Knowledge sharing
- Career guidance
- Job referrals

----------------------------------------------------
15. 300+ Interview Questions
----------------------------------------------------
Purpose:
Practice for Linux and IT interviews.

Categories:
- Linux basics
- Networking
- Security
- Troubleshooting
- Scripting

----------------------------------------------------
16. Role Play 29: Mock Interview Preparation
----------------------------------------------------
Activities:
- Technical mock interview
- HR questions practice
- Feedback and improvement

----------------------------------------------------
17. Module 10 Homework
----------------------------------------------------
Tasks:
- Research IT roles
- Prepare interview answers
- Plan certification path

----------------------------------------------------
18. Module 10 Handouts
----------------------------------------------------
Includes:
- Career guides
- Resume samples
- Interview preparation material

----------------------------------------------------
19. LPIC Learning Material 101-500
----------------------------------------------------
Coverage:
- Linux system architecture
- Installation and package management
- GNU and Unix commands
- Devices and file systems

----------------------------------------------------
20. LPIC Learning Material 102-500
----------------------------------------------------
Coverage:
- Shell scripting
- User interfaces
- Administrative tasks
- Networking fundamentals
- Security basics

----------------------------------------------------
21. CompTIA Linux XK0-005 Exam Objectives
----------------------------------------------------
Exam Areas:
- System management
- Security
- Networking
- Scripting and automation
- Troubleshooting

Purpose:
Prepare for CompTIA Linux+ certification
----------------------------------------------------




//==================================================================================
//==================================================================================





====================================================
ADDITIONAL RESOURCES: TROUBLESHOOTING, VIRTUALIZATION, SECURITY & EMERGING TECH
====================================================

----------------------------------------------------
1. Welcome to Additional Resources
----------------------------------------------------
Overview:
This section provides practical troubleshooting guides, system optimization topics, virtualization basics, security concepts, and emerging technologies useful for IT professionals.

Purpose:
- Strengthen real-world problem-solving skills
- Cover common Linux issues
- Introduce modern IT trends

----------------------------------------------------
2. Troubleshooting PuTTY Connection
----------------------------------------------------
Common Issues:
- Network not reachable
- SSH service down
- Firewall blocking port 22
- Wrong IP or port

Commands:
ping server_ip
systemctl status sshd
netstat -tulnp | grep ssh

Fixes:
- Start SSH service
- Allow SSH in firewall
- Verify credentials

----------------------------------------------------
3. Changing Default File Permissions (umask)
----------------------------------------------------
Definition:
umask sets default permission values for new files/directories.

Command:
umask

Common Values:
022 → files: 755, dirs: 755
027 → files: 750, dirs: 750

Set umask:
umask 022

Config Files:
~/.bashrc
/etc/profile

----------------------------------------------------
4. Create VM on VMware Player
----------------------------------------------------
Steps:
- Install VMware Player
- Create new VM
- Select ISO
- Allocate CPU, RAM, Disk
- Install OS

Use Case:
Practice Linux safely

----------------------------------------------------
5. Install Oracle VirtualBox on macOS
----------------------------------------------------
Steps:
- Download VirtualBox for macOS
- Install package
- Allow security permissions
- Reboot if required

----------------------------------------------------
6. Install Oracle Guest Additions
----------------------------------------------------
Purpose:
Enhances VM performance.

Features:
- Better graphics
- Clipboard sharing
- Screen resize

Steps:
- Insert Guest Additions CD
- Run installer
- Reboot VM

----------------------------------------------------
7. Filesystem Color Definition
----------------------------------------------------
Definition:
Colors indicate file types in terminal.

Common Colors:
Blue  → Directory
Green → Executable
Red   → Compressed files
White → Regular files
Cyan  → Symlinks

Command:
ls --color=auto

----------------------------------------------------
8. Troubleshooting File Issues
----------------------------------------------------
Common Issues:
- Permission denied
- File not found
- Ownership issues

Commands:
ls -l
chmod
chown

Example:
chmod 644 file.txt

----------------------------------------------------
9. Troubleshooting Change Directory Issues
----------------------------------------------------
Issues:
- No execute permission on directory
- Directory does not exist

Commands:
ls -ld dir
chmod +x dir

----------------------------------------------------
10. Fixing Corrupted Filesystem
----------------------------------------------------
Symptoms:
- Mount failure
- Read-only filesystem

Commands:
fsck /dev/sdX
xfs_repair /dev/sdX

Note:
Unmount filesystem before repair

----------------------------------------------------
11. Linux System Performance Issues
----------------------------------------------------
Causes:
- High CPU usage
- Memory exhaustion
- Disk I/O bottleneck

Commands:
top
htop
free -m
iostat

----------------------------------------------------
12. IP Assigned but Not Reachable
----------------------------------------------------
Possible Causes:
- Firewall enabled
- Wrong subnet
- Network service down

Commands:
ip addr
ip route
systemctl restart network

----------------------------------------------------
13. Remove Unnecessary or Orphan Packages
----------------------------------------------------
Definition:
Unused packages consuming disk space.

Commands:
yum autoremove
dnf autoremove

----------------------------------------------------
14. SELinux
----------------------------------------------------
Definition:
Security-Enhanced Linux – mandatory access control.

Modes:
Enforcing
Permissive
Disabled

Commands:
getenforce
setenforce 0

Config File:
 /etc/selinux/config

----------------------------------------------------
15. Types of Security Threats
----------------------------------------------------
Threats:
- Malware
- Ransomware
- Phishing
- Insider threats
- DDoS attacks

Prevention:
- Updates
- Firewalls
- Strong authentication

----------------------------------------------------
16. Running Linux on Web Browser
----------------------------------------------------
Options:
- Online Linux terminals
- Cloud-based labs

Use Case:
Practice without local installation

----------------------------------------------------
17. Improve Typing Skills
----------------------------------------------------
Importance:
Faster command execution and productivity.

Methods:
- Daily typing practice
- Online typing tools
- Command repetition

----------------------------------------------------
18. What is Virtualization and Its Benefits?
----------------------------------------------------
Definition:
Running multiple OS on one physical machine.

Benefits:
- Cost saving
- Isolation
- Easy testing
- Scalability

----------------------------------------------------
19. Introduction to VMware
----------------------------------------------------
Definition:
Virtualization platform.

Products:
- VMware Player
- VMware Workstation
- VMware ESXi

----------------------------------------------------
20. What is AI?
----------------------------------------------------
Definition:
Artificial Intelligence enables machines to mimic human intelligence.

Examples:
- Chatbots
- Recommendation systems
- Image recognition

----------------------------------------------------
21. How AI Works
----------------------------------------------------
Basic Flow:
- Data collection
- Training models
- Prediction/decision

Key Concepts:
- Machine learning
- Neural networks

----------------------------------------------------
22. ChatGPT in IT
----------------------------------------------------
Use Cases:
- Troubleshooting help
- Script generation
- Learning concepts
- Documentation assistance

Best Practice:
Verify outputs before production use

----------------------------------------------------
23. Additional Resources - Handout
----------------------------------------------------
Includes:
- Troubleshooting checklists
- Command references
- Practice labs
- Learning links
----------------------------------------------------








































//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================



