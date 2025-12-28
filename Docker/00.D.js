/* ═══════════════════════════════════════════════════════════════════════════
   🐳 COMPLETE DOCKER SYLLABUS - BEGINNER TO ADVANCED
   Master Containerization & Container Orchestration
   ═══════════════════════════════════════════════════════════════════════════ */


/* ═══════════════════════════════════════════════════════════════════════════
   🔰 MODULE 1: INTRODUCTION TO DOCKER
   ═══════════════════════════════════════════════════════════════════════════ */

// 1.1 What is Docker?
//     - Container platform
//     - Lightweight virtualization
//     - Package applications with dependencies
//     - "Build once, run anywhere"

// 1.2 Containers vs Virtual Machines
//     - VMs: Full OS, heavy, slow startup
//     - Containers: Shared kernel, lightweight, fast
//     - Resource efficiency
//     - Isolation levels

// 1.3 Why Docker?
//     - Consistent environments
//     - Rapid deployment
//     - Microservices architecture
//     - CI/CD pipelines
//     - DevOps practices

// 1.4 Docker Architecture
//     - Docker Engine
//     - Docker Daemon (dockerd)
//     - Docker Client (docker CLI)
//     - Docker Registry (Docker Hub)
//     - containerd, runc

// 1.5 Docker Components
//     - Images
//     - Containers
//     - Volumes
//     - Networks
//     - Docker Compose


/* ═══════════════════════════════════════════════════════════════════════════
   ⚙️ MODULE 2: INSTALLATION & SETUP
   ═══════════════════════════════════════════════════════════════════════════ */

// 2.1 Installing Docker
//     - Docker Desktop (Windows/Mac)
//     - Docker Engine (Linux)
//     - System requirements
//     - Post-installation steps

// 2.2 Linux Installation
//     - apt/yum repository setup
//     - Installing docker-ce
//     - Adding user to docker group
//     - Starting docker service

// 2.3 Docker Desktop
//     - Windows with WSL2
//     - macOS installation
//     - Settings & resources
//     - Kubernetes integration

// 2.4 Verifying Installation
//     - docker version
//     - docker info
//     - docker run hello-world

// 2.5 Docker Configuration
//     - daemon.json
//     - Storage drivers
//     - Logging drivers
//     - Registry mirrors


/* ═══════════════════════════════════════════════════════════════════════════
   📦 MODULE 3: DOCKER IMAGES
   ═══════════════════════════════════════════════════════════════════════════ */

// 3.1 What are Images?
//     - Read-only templates
//     - Layered file system
//     - Base images
//     - Image tags

// 3.2 Image Commands
//     - docker images / docker image ls
//     - docker pull image:tag
//     - docker push image:tag
//     - docker rmi image (remove)
//     - docker image prune

// 3.3 Image Tags & Naming
//     - repository:tag format
//     - latest tag (default)
//     - Semantic versioning
//     - registry/repository:tag

// 3.4 Docker Hub
//     - Public registry
//     - Official images
//     - Verified publishers
//     - Creating account
//     - docker login/logout

// 3.5 Image Layers
//     - Layer caching
//     - docker history
//     - Optimizing layers
//     - Sharing layers

// 3.6 Image Inspection
//     - docker inspect image
//     - docker image inspect
//     - Viewing metadata
//     - Environment variables


/* ═══════════════════════════════════════════════════════════════════════════
   🏃 MODULE 4: CONTAINERS
   ═══════════════════════════════════════════════════════════════════════════ */

// 4.1 What are Containers?
//     - Running instance of image
//     - Isolated processes
//     - Writable layer
//     - Container lifecycle

// 4.2 Running Containers
//     - docker run image
//     - docker run -d (detached)
//     - docker run -it (interactive)
//     - docker run --name container_name
//     - docker run --rm (auto-remove)

// 4.3 Container Management
//     - docker ps (running)
//     - docker ps -a (all)
//     - docker start container
//     - docker stop container
//     - docker restart container
//     - docker kill container
//     - docker rm container

// 4.4 Container Interaction
//     - docker exec -it container bash
//     - docker attach container
//     - docker logs container
//     - docker logs -f (follow)
//     - docker top container

// 4.5 Container Inspection
//     - docker inspect container
//     - docker stats (resources)
//     - docker diff (changes)
//     - docker port (port mappings)

// 4.6 Container Copy
//     - docker cp src container:dest
//     - docker cp container:src dest
//     - Copying files in/out

// 4.7 Container Cleanup
//     - docker rm container
//     - docker container prune
//     - docker system prune


/* ═══════════════════════════════════════════════════════════════════════════
   📝 MODULE 5: DOCKERFILE
   ═══════════════════════════════════════════════════════════════════════════ */

// 5.1 What is Dockerfile?
//     - Text file with instructions
//     - Build automation
//     - Reproducible images

// 5.2 Basic Instructions
//     - FROM (base image)
//     - RUN (execute commands)
//     - COPY (copy files)
//     - ADD (copy + extract)
//     - WORKDIR (working directory)

// 5.3 Configuration Instructions
//     - ENV (environment variables)
//     - ARG (build arguments)
//     - EXPOSE (document ports)
//     - LABEL (metadata)

// 5.4 Execution Instructions
//     - CMD (default command)
//     - ENTRYPOINT (fixed command)
//     - CMD vs ENTRYPOINT
//     - Shell vs Exec form

// 5.5 Advanced Instructions
//     - USER (run as user)
//     - VOLUME (mount points)
//     - HEALTHCHECK (container health)
//     - STOPSIGNAL
//     - SHELL

// 5.6 Building Images
//     - docker build -t name:tag .
//     - docker build -f Dockerfile.dev
//     - Build context
//     - .dockerignore file

// 5.7 Dockerfile Best Practices
//     - Use official base images
//     - Minimize layers
//     - Order instructions by change frequency
//     - Multi-stage builds
//     - Don't run as root
//     - Use specific tags


/* ═══════════════════════════════════════════════════════════════════════════
   🏗️ MODULE 6: MULTI-STAGE BUILDS
   ═══════════════════════════════════════════════════════════════════════════ */

// 6.1 What are Multi-Stage Builds?
//     - Multiple FROM instructions
//     - Separate build & runtime
//     - Smaller final images

// 6.2 Build Stage
//     - Installing build tools
//     - Compiling code
//     - Running tests
//     - Named stages (AS builder)

// 6.3 Production Stage
//     - Minimal base image
//     - COPY --from=builder
//     - Only runtime dependencies

// 6.4 Examples
//     - Node.js (build → production)
//     - Go (compile → scratch)
//     - Java (Maven → JRE)
//     - React (build → nginx)


/* ═══════════════════════════════════════════════════════════════════════════
   🌐 MODULE 7: NETWORKING
   ═══════════════════════════════════════════════════════════════════════════ */

// 7.1 Network Types
//     - bridge (default)
//     - host
//     - none
//     - overlay (Swarm)
//     - macvlan

// 7.2 Bridge Network
//     - Default network
//     - Container isolation
//     - Internal DNS
//     - Port mapping required

// 7.3 Port Mapping
//     - -p hostPort:containerPort
//     - -p 8080:80
//     - -P (random port)
//     - Multiple ports

// 7.4 Network Commands
//     - docker network ls
//     - docker network create name
//     - docker network inspect name
//     - docker network rm name
//     - docker network prune

// 7.5 Container Networking
//     - docker run --network name
//     - docker network connect
//     - docker network disconnect
//     - Container DNS (by name)

// 7.6 Custom Networks
//     - User-defined bridge
//     - Automatic DNS resolution
//     - Better isolation
//     - --subnet, --gateway


/* ═══════════════════════════════════════════════════════════════════════════
   💾 MODULE 8: VOLUMES & STORAGE
   ═══════════════════════════════════════════════════════════════════════════ */

// 8.1 Why Volumes?
//     - Persistent data
//     - Survive container removal
//     - Share data between containers
//     - Better performance

// 8.2 Storage Types
//     - Volumes (managed by Docker)
//     - Bind mounts (host filesystem)
//     - tmpfs mounts (memory)

// 8.3 Volume Commands
//     - docker volume create name
//     - docker volume ls
//     - docker volume inspect name
//     - docker volume rm name
//     - docker volume prune

// 8.4 Using Volumes
//     - -v volume_name:/path
//     - --mount type=volume,src=name,dst=/path
//     - Anonymous volumes

// 8.5 Bind Mounts
//     - -v /host/path:/container/path
//     - Development workflows
//     - Live code reloading
//     - Read-only mounts (:ro)

// 8.6 Volume Drivers
//     - local (default)
//     - NFS
//     - Cloud storage drivers
//     - Plugin volumes


/* ═══════════════════════════════════════════════════════════════════════════
   🐙 MODULE 9: DOCKER COMPOSE
   ═══════════════════════════════════════════════════════════════════════════ */

// 9.1 What is Docker Compose?
//     - Multi-container applications
//     - YAML configuration
//     - Single command deployment
//     - Development environments

// 9.2 docker-compose.yml Structure
//     - version
//     - services
//     - networks
//     - volumes
//     - configs, secrets

// 9.3 Service Configuration
//     - image / build
//     - container_name
//     - ports
//     - volumes
//     - environment / env_file
//     - depends_on
//     - restart policy

// 9.4 Compose Commands
//     - docker compose up
//     - docker compose up -d
//     - docker compose down
//     - docker compose ps
//     - docker compose logs
//     - docker compose exec
//     - docker compose build

// 9.5 Build Configuration
//     - build: ./path
//     - context, dockerfile
//     - args (build arguments)
//     - target (multi-stage)

// 9.6 Environment Variables
//     - environment section
//     - env_file reference
//     - .env file
//     - Variable substitution

// 9.7 Networks in Compose
//     - Default network
//     - Custom networks
//     - External networks
//     - Network aliases

// 9.8 Volumes in Compose
//     - Named volumes
//     - Bind mounts
//     - Volume configuration


/* ═══════════════════════════════════════════════════════════════════════════
   🔒 MODULE 10: SECURITY
   ═══════════════════════════════════════════════════════════════════════════ */

// 10.1 Container Security
//     - Don't run as root
//     - USER instruction
//     - Read-only filesystem
//     - Drop capabilities

// 10.2 Image Security
//     - Use official images
//     - Scan for vulnerabilities
//     - Minimal base images
//     - Update regularly

// 10.3 Secrets Management
//     - Docker secrets (Swarm)
//     - Environment variables risks
//     - External secret managers
//     - Build-time secrets

// 10.4 Network Security
//     - Isolate networks
//     - Don't expose unnecessary ports
//     - Use TLS
//     - Firewall rules

// 10.5 Scanning & Auditing
//     - docker scan (Snyk)
//     - Trivy
//     - Clair
//     - Anchore

// 10.6 Security Best Practices
//     - Principle of least privilege
//     - No sensitive data in images
//     - Content trust
//     - Rootless Docker


/* ═══════════════════════════════════════════════════════════════════════════
   📊 MODULE 11: LOGGING & MONITORING
   ═══════════════════════════════════════════════════════════════════════════ */

// 11.1 Container Logs
//     - docker logs container
//     - docker logs -f (follow)
//     - docker logs --tail n
//     - docker logs --since

// 11.2 Logging Drivers
//     - json-file (default)
//     - syslog
//     - journald
//     - fluentd
//     - awslogs, gcplogs

// 11.3 Log Configuration
//     - --log-driver
//     - --log-opt
//     - Log rotation
//     - Max size, max file

// 11.4 Monitoring Tools
//     - docker stats
//     - cAdvisor
//     - Prometheus + Grafana
//     - Datadog, New Relic

// 11.5 Health Checks
//     - HEALTHCHECK instruction
//     - --health-cmd
//     - Intervals & timeouts
//     - Healthy/unhealthy states


/* ═══════════════════════════════════════════════════════════════════════════
   🐝 MODULE 12: DOCKER SWARM
   ═══════════════════════════════════════════════════════════════════════════ */

// 12.1 What is Docker Swarm?
//     - Native orchestration
//     - Cluster management
//     - Service deployment
//     - Built into Docker

// 12.2 Swarm Architecture
//     - Manager nodes
//     - Worker nodes
//     - Raft consensus
//     - Service discovery

// 12.3 Swarm Initialization
//     - docker swarm init
//     - docker swarm join
//     - Join tokens
//     - docker node ls

// 12.4 Services
//     - docker service create
//     - docker service ls
//     - docker service ps
//     - docker service scale
//     - docker service update
//     - docker service rm

// 12.5 Replicas & Scaling
//     - --replicas n
//     - Rolling updates
//     - Rollback
//     - Update parallelism

// 12.6 Stacks
//     - docker stack deploy
//     - Compose file v3
//     - docker stack ls
//     - docker stack services

// 12.7 Swarm Networking
//     - Overlay networks
//     - Ingress network
//     - Service mesh
//     - Load balancing

// 12.8 Secrets & Configs
//     - docker secret create
//     - docker config create
//     - Mounting in services


/* ═══════════════════════════════════════════════════════════════════════════
   ☸️ MODULE 13: DOCKER & KUBERNETES
   ═══════════════════════════════════════════════════════════════════════════ */

// 13.1 Kubernetes Overview
//     - Container orchestration
//     - Beyond Docker Swarm
//     - Industry standard

// 13.2 Docker in Kubernetes
//     - Container runtime
//     - containerd
//     - CRI-O
//     - Docker images in K8s

// 13.3 Local Kubernetes
//     - Docker Desktop K8s
//     - Minikube
//     - Kind (Kubernetes in Docker)
//     - k3d

// 13.4 Building for Kubernetes
//     - Image optimization
//     - Health checks
//     - Graceful shutdown
//     - Configuration patterns


/* ═══════════════════════════════════════════════════════════════════════════
   🔄 MODULE 14: CI/CD WITH DOCKER
   ═══════════════════════════════════════════════════════════════════════════ */

// 14.1 CI/CD Concepts
//     - Continuous Integration
//     - Continuous Delivery/Deployment
//     - Pipeline automation

// 14.2 Building in CI
//     - GitHub Actions
//     - GitLab CI
//     - Jenkins
//     - CircleCI

// 14.3 GitHub Actions Example
//     - Checkout code
//     - Build image
//     - Push to registry
//     - Deploy

// 14.4 Image Tagging Strategies
//     - Git commit SHA
//     - Git tags
//     - Branch names
//     - Semantic versioning

// 14.5 Registry Options
//     - Docker Hub
//     - GitHub Container Registry (ghcr.io)
//     - AWS ECR
//     - Google GCR
//     - Azure ACR
//     - Self-hosted (Harbor)


/* ═══════════════════════════════════════════════════════════════════════════
   🏭 MODULE 15: PRIVATE REGISTRIES
   ═══════════════════════════════════════════════════════════════════════════ */

// 15.1 Why Private Registries?
//     - Security
//     - Internal images
//     - Access control
//     - Compliance

// 15.2 Docker Registry
//     - docker run registry:2
//     - Configuration
//     - Storage backends
//     - TLS setup

// 15.3 Harbor
//     - Enterprise registry
//     - Vulnerability scanning
//     - Access control
//     - Replication

// 15.4 Cloud Registries
//     - AWS ECR
//     - Google Container Registry
//     - Azure Container Registry
//     - Authentication

// 15.5 Registry Authentication
//     - docker login
//     - ~/.docker/config.json
//     - Credential helpers


/* ═══════════════════════════════════════════════════════════════════════════
   ⚡ MODULE 16: PERFORMANCE OPTIMIZATION
   ═══════════════════════════════════════════════════════════════════════════ */

// 16.1 Image Optimization
//     - Smaller base images (alpine, distroless)
//     - Remove unnecessary files
//     - Multi-stage builds
//     - .dockerignore

// 16.2 Build Optimization
//     - Layer caching
//     - BuildKit
//     - Cache mounts
//     - Parallel builds

// 16.3 Runtime Optimization
//     - Resource limits (--memory, --cpus)
//     - Container sizing
//     - Health checks
//     - Proper base images

// 16.4 BuildKit Features
//     - DOCKER_BUILDKIT=1
//     - Build secrets
//     - SSH forwarding
//     - Cache exports
//     - Parallel stages


/* ═══════════════════════════════════════════════════════════════════════════
   🛠️ MODULE 17: DEVELOPMENT WORKFLOWS
   ═══════════════════════════════════════════════════════════════════════════ */

// 17.1 Development Containers
//     - Hot reloading
//     - Volume mounts for code
//     - Dev dependencies
//     - Debug ports

// 17.2 Dev vs Production
//     - Separate Dockerfiles
//     - Dockerfile.dev
//     - Compose overrides
//     - docker-compose.override.yml

// 17.3 Dev Containers (VS Code)
//     - devcontainer.json
//     - Consistent dev environments
//     - Extensions
//     - Remote development

// 17.4 Debugging
//     - Debugging in containers
//     - Port mapping for debuggers
//     - docker exec for inspection
//     - Log analysis


/* ═══════════════════════════════════════════════════════════════════════════
   📁 MODULE 18: COMMON USE CASES
   ═══════════════════════════════════════════════════════════════════════════ */

// 18.1 Web Applications
//     - Node.js + Express
//     - Python + Flask/Django
//     - Ruby on Rails
//     - PHP + Apache/Nginx

// 18.2 Databases
//     - PostgreSQL
//     - MySQL/MariaDB
//     - MongoDB
//     - Redis
//     - Data persistence

// 18.3 Full Stack Applications
//     - Frontend + Backend + DB
//     - Compose orchestration
//     - Internal networking
//     - Environment configuration

// 18.4 Microservices
//     - Service per container
//     - API gateway
//     - Service discovery
//     - Inter-service communication


/* ═══════════════════════════════════════════════════════════════════════════
   🔧 MODULE 19: TROUBLESHOOTING
   ═══════════════════════════════════════════════════════════════════════════ */

// 19.1 Common Issues
//     - Container won't start
//     - Port conflicts
//     - Permission denied
//     - Out of memory
//     - Network issues

// 19.2 Debugging Commands
//     - docker logs container
//     - docker exec -it container sh
//     - docker inspect
//     - docker events
//     - docker system df

// 19.3 Image Issues
//     - Build failures
//     - Layer caching problems
//     - Missing dependencies
//     - Wrong base image

// 19.4 Network Debugging
//     - docker network inspect
//     - Container DNS
//     - Port mapping verification
//     - Firewall issues


/* ═══════════════════════════════════════════════════════════════════════════
   🏢 MODULE 20: PRODUCTION DEPLOYMENT
   ═══════════════════════════════════════════════════════════════════════════ */

// 20.1 Production Considerations
//     - No development dependencies
//     - Production base images
//     - Security hardening
//     - Resource limits

// 20.2 Deployment Strategies
//     - Blue-green deployment
//     - Rolling updates
//     - Canary releases
//     - Feature flags

// 20.3 Cloud Deployment
//     - AWS ECS / Fargate
//     - Google Cloud Run
//     - Azure Container Apps
//     - DigitalOcean App Platform

// 20.4 VPS Deployment
//     - Docker on VPS
//     - Reverse proxy (Traefik, Nginx)
//     - SSL/TLS (Let's Encrypt)
//     - Watchtower (auto-update)


/* ═══════════════════════════════════════════════════════════════════════════
   🎓 MODULE 21: BEST PRACTICES
   ═══════════════════════════════════════════════════════════════════════════ */

// 21.1 Dockerfile Best Practices
//     - One process per container
//     - Use official base images
//     - Specific image tags
//     - Multi-stage builds
//     - Minimize layers
//     - Don't run as root

// 21.2 Image Best Practices
//     - Keep images small
//     - Scan for vulnerabilities
//     - Tag properly
//     - Clean up unused images

// 21.3 Container Best Practices
//     - Ephemeral containers
//     - Externalize data (volumes)
//     - Externalize config (env vars)
//     - Health checks
//     - Resource limits

// 21.4 Compose Best Practices
//     - Use named volumes
//     - Define networks
//     - Use .env files
//     - Override files for environments

// 21.5 Security Best Practices
//     - Least privilege
//     - Scan images
//     - Sign images
//     - Update regularly
//     - Use secrets management


/* ═══════════════════════════════════════════════════════════════════════════
   📖 QUICK REFERENCE CHEAT SHEET
   ═══════════════════════════════════════════════════════════════════════════ */

// IMAGES
// docker images                    - list images
// docker pull image:tag            - download image
// docker build -t name:tag .       - build image
// docker push image:tag            - push to registry
// docker rmi image                 - remove image

// CONTAINERS
// docker run -d -p 8080:80 image   - run detached with port
// docker run -it image bash        - run interactive
// docker ps                        - list running containers
// docker ps -a                     - list all containers
// docker stop container            - stop container
// docker rm container              - remove container
// docker logs -f container         - follow logs
// docker exec -it container bash   - execute command

// VOLUMES
// docker volume create name        - create volume
// docker volume ls                 - list volumes
// -v volume:/path                  - mount volume
// -v /host:/container              - bind mount

// NETWORKS
// docker network create name       - create network
// docker network ls                - list networks
// --network name                   - connect to network

// COMPOSE
// docker compose up -d             - start services
// docker compose down              - stop & remove
// docker compose logs              - view logs
// docker compose ps                - list services
// docker compose build             - build images

// CLEANUP
// docker system prune              - remove unused data
// docker image prune               - remove unused images
// docker container prune           - remove stopped containers
// docker volume prune              - remove unused volumes

// DOCKERFILE EXAMPLE
// FROM node:18-alpine
// WORKDIR /app
// COPY package*.json ./
// RUN npm ci --only=production
// COPY . .
// EXPOSE 3000
// USER node
// CMD ["node", "server.js"]


/* ═══════════════════════════════════════════════════════════════════════════
   END OF COMPLETE DOCKER SYLLABUS
   Total Modules: 21
   Comprehensive coverage from Basics to Production Deployment
   ═══════════════════════════════════════════════════════════════════════════ */
