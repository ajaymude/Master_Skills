/* ═══════════════════════════════════════════════════════════════════════════
   🐧 COMPLETE LINUX SYLLABUS - BEGINNER TO ADVANCED
   Master Linux System Administration & Command Line
   ═══════════════════════════════════════════════════════════════════════════ */


/* ═══════════════════════════════════════════════════════════════════════════
   🔰 MODULE 1: INTRODUCTION TO LINUX
   ═══════════════════════════════════════════════════════════════════════════ */

// 1.1 What is Linux?
//     - Open-source operating system
//     - Unix-like architecture
//     - Linux kernel
//     - Created by Linus Torvalds (1991)

// 1.2 Linux History
//     - Unix origins
//     - GNU Project
//     - Linux kernel development
//     - Open source movement

// 1.3 Why Learn Linux?
//     - Servers & cloud infrastructure
//     - DevOps & automation
//     - Security & hacking
//     - Free & customizable
//     - Career opportunities

// 1.4 Linux Distributions
//     - Ubuntu (beginner-friendly)
//     - Debian (stable)
//     - CentOS / Rocky Linux / AlmaLinux
//     - Fedora (cutting-edge)
//     - Arch Linux (advanced)
//     - Kali Linux (security)
//     - Alpine (lightweight/containers)

// 1.5 Linux Architecture
//     - Hardware layer
//     - Kernel
//     - Shell
//     - User applications
//     - Desktop environments


/* ═══════════════════════════════════════════════════════════════════════════
   💻 MODULE 2: GETTING STARTED
   ═══════════════════════════════════════════════════════════════════════════ */

// 2.1 Installation Options
//     - Dual boot
//     - Virtual machine (VirtualBox, VMware)
//     - WSL (Windows Subsystem for Linux)
//     - Live USB
//     - Cloud instances (AWS, DigitalOcean)

// 2.2 Installing Linux
//     - Creating bootable USB
//     - Installation wizard
//     - Partitioning (/, /home, swap)
//     - User creation
//     - Package selection

// 2.3 Desktop Environments
//     - GNOME
//     - KDE Plasma
//     - XFCE
//     - MATE
//     - Cinnamon
//     - i3 (tiling WM)

// 2.4 Terminal Basics
//     - Opening terminal
//     - Terminal emulators
//     - Shell prompt
//     - Command structure
//     - Getting help (man, --help)


/* ═══════════════════════════════════════════════════════════════════════════
   📁 MODULE 3: FILE SYSTEM & NAVIGATION
   ═══════════════════════════════════════════════════════════════════════════ */

// 3.1 Linux File System Hierarchy
//     - / (root)
//     - /home (user directories)
//     - /etc (configuration files)
//     - /var (variable data, logs)
//     - /tmp (temporary files)
//     - /usr (user programs)
//     - /bin, /sbin (binaries)
//     - /opt (optional software)
//     - /dev (device files)
//     - /proc, /sys (system info)

// 3.2 Navigation Commands
//     - pwd (print working directory)
//     - cd (change directory)
//     - ls (list contents)
//     - ls -la (detailed list)
//     - tree (directory tree)

// 3.3 Path Types
//     - Absolute path (/home/user/file)
//     - Relative path (./file, ../parent)
//     - Home directory (~)
//     - Current directory (.)
//     - Parent directory (..)

// 3.4 File Types
//     - Regular files (-)
//     - Directories (d)
//     - Symbolic links (l)
//     - Block devices (b)
//     - Character devices (c)
//     - Sockets (s)
//     - Named pipes (p)


/* ═══════════════════════════════════════════════════════════════════════════
   📄 MODULE 4: FILE OPERATIONS
   ═══════════════════════════════════════════════════════════════════════════ */

// 4.1 Creating Files & Directories
//     - touch (create empty file)
//     - mkdir (create directory)
//     - mkdir -p (nested directories)

// 4.2 Copying & Moving
//     - cp (copy files)
//     - cp -r (copy directories)
//     - mv (move/rename)

// 4.3 Deleting
//     - rm (remove files)
//     - rm -r (remove directories)
//     - rm -rf (force remove)
//     - rmdir (remove empty dir)

// 4.4 Viewing Files
//     - cat (concatenate/display)
//     - less (page viewer)
//     - more (simple pager)
//     - head (first lines)
//     - tail (last lines)
//     - tail -f (follow log)

// 4.5 File Information
//     - file (file type)
//     - stat (file statistics)
//     - wc (word count)
//     - du (disk usage)
//     - df (disk free)

// 4.6 Links
//     - ln (hard links)
//     - ln -s (symbolic links)
//     - Difference between hard & soft links


/* ═══════════════════════════════════════════════════════════════════════════
   🔍 MODULE 5: SEARCHING & FILTERING
   ═══════════════════════════════════════════════════════════════════════════ */

// 5.1 find Command
//     - find by name
//     - find by type
//     - find by size
//     - find by time
//     - find with -exec

// 5.2 locate Command
//     - updatedb
//     - Fast file search
//     - Database-based

// 5.3 grep Command
//     - Pattern searching
//     - grep -i (case insensitive)
//     - grep -r (recursive)
//     - grep -v (invert match)
//     - grep -n (line numbers)
//     - egrep (extended regex)

// 5.4 Regular Expressions
//     - Basic regex
//     - Extended regex
//     - Character classes
//     - Quantifiers
//     - Anchors (^, $)

// 5.5 Other Search Tools
//     - which (command location)
//     - whereis (binary/source/man)
//     - type (command type)
//     - awk (text processing)
//     - sed (stream editor)


/* ═══════════════════════════════════════════════════════════════════════════
   👤 MODULE 6: USERS & PERMISSIONS
   ═══════════════════════════════════════════════════════════════════════════ */

// 6.1 User Management
//     - useradd (create user)
//     - usermod (modify user)
//     - userdel (delete user)
//     - passwd (change password)
//     - whoami, id, who, w

// 6.2 Group Management
//     - groupadd (create group)
//     - groupmod (modify group)
//     - groupdel (delete group)
//     - gpasswd (group password)
//     - groups (list groups)

// 6.3 User Files
//     - /etc/passwd
//     - /etc/shadow
//     - /etc/group
//     - /etc/gshadow

// 6.4 Permission Basics
//     - Read (r) - 4
//     - Write (w) - 2
//     - Execute (x) - 1
//     - Owner, Group, Others

// 6.5 Changing Permissions
//     - chmod (symbolic mode)
//     - chmod (numeric mode)
//     - chmod 755, 644, 777
//     - chmod +x, -w, u+x

// 6.6 Ownership
//     - chown (change owner)
//     - chgrp (change group)
//     - chown user:group file

// 6.7 Special Permissions
//     - SUID (4xxx)
//     - SGID (2xxx)
//     - Sticky bit (1xxx)
//     - umask


/* ═══════════════════════════════════════════════════════════════════════════
   ⚡ MODULE 7: PROCESS MANAGEMENT
   ═══════════════════════════════════════════════════════════════════════════ */

// 7.1 Process Basics
//     - What is a process?
//     - PID (Process ID)
//     - Parent & child processes
//     - Process states

// 7.2 Viewing Processes
//     - ps (process status)
//     - ps aux (all processes)
//     - top (live process view)
//     - htop (enhanced top)
//     - pgrep (process grep)

// 7.3 Process Control
//     - & (run in background)
//     - fg (bring to foreground)
//     - bg (send to background)
//     - jobs (list jobs)
//     - nohup (no hangup)

// 7.4 Killing Processes
//     - kill (signal process)
//     - kill -9 (force kill)
//     - killall (by name)
//     - pkill (pattern kill)
//     - xkill (X window kill)

// 7.5 Process Priority
//     - nice (set priority)
//     - renice (change priority)
//     - Nice values (-20 to 19)

// 7.6 System Monitoring
//     - uptime
//     - free (memory)
//     - vmstat
//     - iostat
//     - sar


/* ═══════════════════════════════════════════════════════════════════════════
   📦 MODULE 8: PACKAGE MANAGEMENT
   ═══════════════════════════════════════════════════════════════════════════ */

// 8.1 Package Managers Overview
//     - DEB-based (Debian, Ubuntu)
//     - RPM-based (CentOS, Fedora)
//     - Pacman (Arch)

// 8.2 APT (Debian/Ubuntu)
//     - apt update (update cache)
//     - apt upgrade (upgrade packages)
//     - apt install package
//     - apt remove package
//     - apt search package
//     - apt autoremove
//     - dpkg (low-level)

// 8.3 YUM/DNF (CentOS/Fedora)
//     - dnf update
//     - dnf install package
//     - dnf remove package
//     - dnf search package
//     - rpm (low-level)

// 8.4 Pacman (Arch)
//     - pacman -Syu (sync & upgrade)
//     - pacman -S package (install)
//     - pacman -R package (remove)
//     - pacman -Ss (search)

// 8.5 Other Package Tools
//     - snap
//     - flatpak
//     - AppImage
//     - pip (Python)
//     - npm (Node.js)

// 8.6 Compiling from Source
//     - ./configure
//     - make
//     - make install
//     - Dependencies


/* ═══════════════════════════════════════════════════════════════════════════
   🔧 MODULE 9: TEXT EDITORS
   ═══════════════════════════════════════════════════════════════════════════ */

// 9.1 Nano
//     - Simple and beginner-friendly
//     - Basic editing
//     - Ctrl commands
//     - Search & replace

// 9.2 Vim
//     - Modes (Normal, Insert, Visual, Command)
//     - Navigation (h, j, k, l)
//     - Insert mode (i, a, o)
//     - Saving & quitting (:w, :q, :wq, :q!)
//     - Searching (/pattern, n, N)
//     - Delete, copy, paste (dd, yy, p)
//     - Undo/Redo (u, Ctrl+r)

// 9.3 Vim Advanced
//     - Visual mode selection
//     - Multiple files
//     - Split windows
//     - Macros
//     - .vimrc configuration
//     - Plugins (vim-plug)

// 9.4 Other Editors
//     - Emacs
//     - VS Code (GUI)
//     - Sublime (GUI)
//     - micro (modern TUI)


/* ═══════════════════════════════════════════════════════════════════════════
   🌐 MODULE 10: NETWORKING BASICS
   ═══════════════════════════════════════════════════════════════════════════ */

// 10.1 Network Concepts
//     - IP addresses (IPv4, IPv6)
//     - Subnets & CIDR
//     - MAC addresses
//     - Ports & protocols
//     - TCP vs UDP

// 10.2 Network Configuration
//     - ifconfig (deprecated)
//     - ip addr (IP addresses)
//     - ip link (network interfaces)
//     - ip route (routing table)
//     - nmcli (NetworkManager)

// 10.3 Network Files
//     - /etc/hosts
//     - /etc/resolv.conf
//     - /etc/network/interfaces
//     - /etc/netplan/*.yaml

// 10.4 Connectivity Testing
//     - ping (ICMP echo)
//     - traceroute (path tracing)
//     - mtr (ping + traceroute)
//     - nslookup (DNS lookup)
//     - dig (DNS query)
//     - host (DNS lookup)

// 10.5 Network Utilities
//     - netstat (network statistics)
//     - ss (socket statistics)
//     - curl (URL transfer)
//     - wget (download files)
//     - nc (netcat)


/* ═══════════════════════════════════════════════════════════════════════════
   🔒 MODULE 11: SSH & REMOTE ACCESS
   ═══════════════════════════════════════════════════════════════════════════ */

// 11.1 SSH Basics
//     - What is SSH?
//     - ssh user@host
//     - SSH port (22)
//     - ssh -p (custom port)

// 11.2 SSH Keys
//     - ssh-keygen (generate keys)
//     - Public & private keys
//     - ssh-copy-id (copy to server)
//     - ~/.ssh/authorized_keys
//     - Key passphrase

// 11.3 SSH Configuration
//     - ~/.ssh/config
//     - Host aliases
//     - /etc/ssh/sshd_config
//     - Disable password auth
//     - Change default port

// 11.4 File Transfer
//     - scp (secure copy)
//     - sftp (secure FTP)
//     - rsync (efficient sync)

// 11.5 SSH Tunneling
//     - Local port forwarding
//     - Remote port forwarding
//     - Dynamic port forwarding (SOCKS)
//     - Jump hosts


/* ═══════════════════════════════════════════════════════════════════════════
   🛡️ MODULE 12: FIREWALL & SECURITY
   ═══════════════════════════════════════════════════════════════════════════ */

// 12.1 iptables
//     - Chains (INPUT, OUTPUT, FORWARD)
//     - Tables (filter, nat, mangle)
//     - Rules & policies
//     - Allow/deny rules
//     - Saving rules

// 12.2 UFW (Ubuntu)
//     - ufw enable/disable
//     - ufw allow port
//     - ufw deny port
//     - ufw status
//     - Application profiles

// 12.3 firewalld (CentOS/Fedora)
//     - firewall-cmd
//     - Zones
//     - Services
//     - Permanent rules

// 12.4 Security Practices
//     - Disable root login
//     - SSH key authentication
//     - Fail2ban
//     - Regular updates
//     - Principle of least privilege

// 12.5 SELinux / AppArmor
//     - Mandatory Access Control
//     - SELinux modes
//     - SELinux contexts
//     - AppArmor profiles


/* ═══════════════════════════════════════════════════════════════════════════
   ⚙️ MODULE 13: SYSTEM ADMINISTRATION
   ═══════════════════════════════════════════════════════════════════════════ */

// 13.1 System Information
//     - uname -a
//     - hostname
//     - hostnamectl
//     - cat /etc/os-release
//     - lscpu, lsmem, lsblk

// 13.2 Service Management (systemd)
//     - systemctl start/stop/restart
//     - systemctl enable/disable
//     - systemctl status
//     - journalctl (logs)
//     - Creating service units

// 13.3 Boot Process
//     - BIOS/UEFI
//     - Bootloader (GRUB)
//     - Kernel loading
//     - init/systemd
//     - Runlevels/targets

// 13.4 Scheduled Tasks
//     - crontab -e (edit)
//     - crontab -l (list)
//     - Cron syntax (* * * * *)
//     - /etc/cron.d/
//     - at (one-time jobs)
//     - anacron

// 13.5 System Logs
//     - /var/log/
//     - syslog, auth.log, dmesg
//     - journalctl
//     - Log rotation (logrotate)


/* ═══════════════════════════════════════════════════════════════════════════
   💾 MODULE 14: DISK & STORAGE MANAGEMENT
   ═══════════════════════════════════════════════════════════════════════════ */

// 14.1 Disk Information
//     - lsblk (list block devices)
//     - fdisk -l (partition table)
//     - blkid (block IDs)
//     - df -h (disk usage)
//     - du -sh (directory size)

// 14.2 Partitioning
//     - fdisk (MBR)
//     - gdisk (GPT)
//     - parted
//     - Partition types

// 14.3 File Systems
//     - ext4
//     - xfs
//     - btrfs
//     - ntfs, fat32
//     - mkfs (create filesystem)

// 14.4 Mounting
//     - mount command
//     - umount command
//     - /etc/fstab
//     - Mount options
//     - Auto-mount

// 14.5 LVM (Logical Volume Manager)
//     - Physical volumes (PV)
//     - Volume groups (VG)
//     - Logical volumes (LV)
//     - Extending/reducing volumes

// 14.6 RAID
//     - RAID levels (0, 1, 5, 10)
//     - mdadm
//     - Software vs Hardware RAID

// 14.7 Swap
//     - Swap partition
//     - Swap file
//     - swapon/swapoff
//     - Swappiness


/* ═══════════════════════════════════════════════════════════════════════════
   📝 MODULE 15: SHELL SCRIPTING
   ═══════════════════════════════════════════════════════════════════════════ */

// 15.1 Script Basics
//     - Shebang (#!/bin/bash)
//     - Making scripts executable
//     - Running scripts
//     - Comments

// 15.2 Variables
//     - Variable assignment (no spaces)
//     - Accessing variables ($VAR)
//     - Environment variables
//     - export command
//     - Command substitution $(...)

// 15.3 Input/Output
//     - echo, printf
//     - read (user input)
//     - Redirection (>, >>, <)
//     - Pipes (|)
//     - Here documents (<<EOF)

// 15.4 Conditionals
//     - if, elif, else, fi
//     - test / [ ] / [[ ]]
//     - String comparisons
//     - Numeric comparisons
//     - File tests (-f, -d, -e)

// 15.5 Loops
//     - for loop
//     - while loop
//     - until loop
//     - break, continue
//     - Looping through files

// 15.6 Functions
//     - Function definition
//     - Parameters ($1, $2, $@)
//     - Return values
//     - Local variables

// 15.7 Arrays
//     - Indexed arrays
//     - Associative arrays
//     - Array operations

// 15.8 Advanced Scripting
//     - Error handling
//     - Trap signals
//     - Debugging (set -x)
//     - Best practices


/* ═══════════════════════════════════════════════════════════════════════════
   🔄 MODULE 16: I/O REDIRECTION & PIPES
   ═══════════════════════════════════════════════════════════════════════════ */

// 16.1 Standard Streams
//     - stdin (0)
//     - stdout (1)
//     - stderr (2)

// 16.2 Output Redirection
//     - > (overwrite)
//     - >> (append)
//     - 2> (stderr redirect)
//     - &> (both stdout & stderr)
//     - /dev/null (discard output)

// 16.3 Input Redirection
//     - < (from file)
//     - << (here document)
//     - <<< (here string)

// 16.4 Pipes
//     - | (pipe operator)
//     - Chaining commands
//     - tee (split output)
//     - xargs (build commands)


/* ═══════════════════════════════════════════════════════════════════════════
   🔤 MODULE 17: TEXT PROCESSING
   ═══════════════════════════════════════════════════════════════════════════ */

// 17.1 Basic Tools
//     - cat, head, tail
//     - sort
//     - uniq
//     - cut
//     - paste
//     - tr (translate)

// 17.2 grep
//     - Pattern matching
//     - Regular expressions
//     - Options (-i, -v, -c, -l)

// 17.3 sed (Stream Editor)
//     - Substitution (s/old/new/)
//     - Global replace (g flag)
//     - Delete lines (d)
//     - In-place editing (-i)
//     - Address ranges

// 17.4 awk
//     - Field processing
//     - Pattern matching
//     - BEGIN/END blocks
//     - Variables (NR, NF, $0)
//     - Arithmetic operations
//     - Printf formatting


/* ═══════════════════════════════════════════════════════════════════════════
   📦 MODULE 18: COMPRESSION & ARCHIVING
   ═══════════════════════════════════════════════════════════════════════════ */

// 18.1 tar (Tape Archive)
//     - tar -cvf (create)
//     - tar -xvf (extract)
//     - tar -tvf (list)
//     - tar -czvf (gzip)
//     - tar -cjvf (bzip2)

// 18.2 Compression Tools
//     - gzip / gunzip
//     - bzip2 / bunzip2
//     - xz / unxz
//     - Compression ratios

// 18.3 zip / unzip
//     - Creating zip archives
//     - Extracting zip files
//     - Password protection

// 18.4 Other Tools
//     - 7z (7-Zip)
//     - rar / unrar
//     - zcat, zless, zgrep


/* ═══════════════════════════════════════════════════════════════════════════
   🖥️ MODULE 19: WEB SERVERS
   ═══════════════════════════════════════════════════════════════════════════ */

// 19.1 Apache
//     - Installation
//     - Virtual hosts
//     - Configuration files
//     - Modules (mod_rewrite, mod_ssl)
//     - .htaccess

// 19.2 Nginx
//     - Installation
//     - Server blocks
//     - Reverse proxy
//     - Load balancing
//     - SSL/TLS configuration

// 19.3 SSL/TLS
//     - Let's Encrypt
//     - Certbot
//     - Self-signed certificates
//     - HTTPS configuration

// 19.4 DNS Basics
//     - Record types (A, AAAA, CNAME, MX)
//     - BIND configuration
//     - Zone files


/* ═══════════════════════════════════════════════════════════════════════════
   🐳 MODULE 20: DOCKER & CONTAINERS
   ═══════════════════════════════════════════════════════════════════════════ */

// 20.1 Docker Basics
//     - What are containers?
//     - Docker vs Virtual Machines
//     - Docker installation

// 20.2 Docker Commands
//     - docker run
//     - docker ps
//     - docker images
//     - docker pull/push
//     - docker stop/start/rm
//     - docker logs
//     - docker exec

// 20.3 Dockerfile
//     - FROM, RUN, COPY, ADD
//     - WORKDIR, ENV
//     - EXPOSE, CMD, ENTRYPOINT
//     - Building images

// 20.4 Docker Compose
//     - docker-compose.yml
//     - Services, networks, volumes
//     - docker-compose up/down

// 20.5 Container Management
//     - Volume mounting
//     - Networking
//     - Environment variables
//     - Docker Hub


/* ═══════════════════════════════════════════════════════════════════════════
   ☸️ MODULE 21: KUBERNETES BASICS
   ═══════════════════════════════════════════════════════════════════════════ */

// 21.1 Kubernetes Concepts
//     - Container orchestration
//     - Clusters, nodes
//     - Pods, deployments
//     - Services, ingress

// 21.2 kubectl Commands
//     - kubectl get
//     - kubectl describe
//     - kubectl apply
//     - kubectl logs
//     - kubectl exec

// 21.3 YAML Manifests
//     - Pod definition
//     - Deployment definition
//     - Service definition
//     - ConfigMaps & Secrets

// 21.4 Local Development
//     - Minikube
//     - Kind
//     - k3s


/* ═══════════════════════════════════════════════════════════════════════════
   🔧 MODULE 22: CONFIGURATION MANAGEMENT
   ═══════════════════════════════════════════════════════════════════════════ */

// 22.1 Ansible
//     - Agentless automation
//     - Inventory files
//     - Playbooks
//     - Modules
//     - Roles

// 22.2 Terraform
//     - Infrastructure as Code
//     - Providers
//     - Resources
//     - State management

// 22.3 Other Tools
//     - Puppet
//     - Chef
//     - SaltStack


/* ═══════════════════════════════════════════════════════════════════════════
   📊 MODULE 23: MONITORING & LOGGING
   ═══════════════════════════════════════════════════════════════════════════ */

// 23.1 System Monitoring
//     - top, htop, btop
//     - iotop (I/O)
//     - nethogs (network)
//     - nmon

// 23.2 Log Management
//     - journalctl
//     - rsyslog
//     - Log aggregation
//     - ELK Stack (Elasticsearch, Logstash, Kibana)

// 23.3 Prometheus & Grafana
//     - Metrics collection
//     - Alerting
//     - Dashboards
//     - Node exporter

// 23.4 Application Monitoring
//     - Nagios
//     - Zabbix
//     - Datadog


/* ═══════════════════════════════════════════════════════════════════════════
   💾 MODULE 24: BACKUP & RECOVERY
   ═══════════════════════════════════════════════════════════════════════════ */

// 24.1 Backup Strategies
//     - Full backup
//     - Incremental backup
//     - Differential backup
//     - 3-2-1 rule

// 24.2 Backup Tools
//     - tar
//     - rsync
//     - dd (disk dump)
//     - borgbackup
//     - restic

// 24.3 Database Backup
//     - mysqldump
//     - pg_dump
//     - MongoDB backup

// 24.4 Disaster Recovery
//     - Recovery plans
//     - Testing backups
//     - Offsite storage


/* ═══════════════════════════════════════════════════════════════════════════
   🔐 MODULE 25: ADVANCED SECURITY
   ═══════════════════════════════════════════════════════════════════════════ */

// 25.1 Security Auditing
//     - Lynis
//     - OpenSCAP
//     - CIS Benchmarks
//     - Security hardening

// 25.2 Intrusion Detection
//     - OSSEC
//     - Tripwire
//     - AIDE
//     - Log monitoring

// 25.3 Encryption
//     - GPG (file encryption)
//     - LUKS (disk encryption)
//     - SSL/TLS certificates
//     - SSH tunneling

// 25.4 Vulnerability Scanning
//     - Nmap
//     - OpenVAS
//     - Nikto (web)

// 25.5 Penetration Testing
//     - Kali Linux tools
//     - Metasploit basics
//     - Network scanning


/* ═══════════════════════════════════════════════════════════════════════════
   ⚡ MODULE 26: PERFORMANCE TUNING
   ═══════════════════════════════════════════════════════════════════════════ */

// 26.1 Performance Analysis
//     - Identifying bottlenecks
//     - CPU, memory, I/O, network
//     - perf tool
//     - strace, ltrace

// 26.2 Kernel Tuning
//     - sysctl parameters
//     - /proc/sys/
//     - vm.swappiness
//     - Network buffers

// 26.3 Resource Limits
//     - ulimit
//     - /etc/security/limits.conf
//     - cgroups
//     - nice/ionice

// 26.4 I/O Optimization
//     - I/O schedulers
//     - SSD optimization
//     - noatime mount option


/* ═══════════════════════════════════════════════════════════════════════════
   🎓 MODULE 27: BEST PRACTICES
   ═══════════════════════════════════════════════════════════════════════════ */

// 27.1 System Hardening
//     - Minimal installation
//     - Regular updates
//     - Disable unused services
//     - Strong passwords
//     - SSH key authentication

// 27.2 Documentation
//     - Document configurations
//     - Change management
//     - Runbooks

// 27.3 Automation
//     - Script routine tasks
//     - Configuration management
//     - Infrastructure as Code

// 27.4 Monitoring
//     - Proactive monitoring
//     - Alerting
//     - Log analysis

// 27.5 Backup Strategy
//     - Regular backups
//     - Test restores
//     - Offsite copies


/* ═══════════════════════════════════════════════════════════════════════════
   📖 QUICK REFERENCE CHEAT SHEET
   ═══════════════════════════════════════════════════════════════════════════ */

// NAVIGATION
// pwd                 - print working directory
// cd /path            - change directory
// ls -la              - list all with details
// tree                - directory tree

// FILE OPERATIONS
// touch file          - create file
// mkdir -p dir/sub    - create nested dirs
// cp -r src dest      - copy recursively
// mv old new          - move/rename
// rm -rf dir          - force remove

// PERMISSIONS
// chmod 755 file      - rwxr-xr-x
// chmod u+x file      - add execute for user
// chown user:group    - change ownership

// PROCESSES
// ps aux              - all processes
// top / htop          - process monitor
// kill -9 PID         - force kill

// PACKAGE MANAGEMENT (Debian/Ubuntu)
// apt update          - update cache
// apt install pkg     - install package
// apt remove pkg      - remove package

// NETWORKING
// ip addr             - show IP addresses
// ping host           - test connectivity
// ss -tuln            - listening ports
// curl url            - fetch URL

// SSH
// ssh user@host       - connect
// ssh-keygen          - generate keys
// scp file user@host: - copy file

// SERVICES (systemd)
// systemctl start svc     - start service
// systemctl enable svc    - enable at boot
// systemctl status svc    - check status
// journalctl -u svc       - view logs

// DISK
// df -h               - disk usage
// du -sh dir          - directory size
// lsblk               - list block devices
// mount /dev/sda1 /mnt

// TEXT PROCESSING
// grep pattern file   - search
// sed 's/old/new/' f  - replace
// awk '{print $1}' f  - print column
// sort | uniq         - unique sorted


/* ═══════════════════════════════════════════════════════════════════════════
   END OF COMPLETE LINUX SYLLABUS
   Total Modules: 27
   Comprehensive coverage from Basics to Advanced System Administration
   ═══════════════════════════════════════════════════════════════════════════ */
