# Build images for both frontend and backend
docker_build('backend', './backend', dockerfile='Dockerfile.prod')
docker_build('frontend', './frontend', dockerfile='Dockerfile.dev')

# Use Kustomize overlays based on the active profile.
if tilt.IsProfile("prod"):
  # For production troubleshooting, use the prod overlay (without live updates)
  k8s_yaml('manifests/overlays/prod')
else:
  # Default to dev overlay for live coding
  k8s_yaml('manifests/overlays/dev')

# Configure live updates only for the dev profile.
# This enables hot reloads when code changes occur.
tilt.withProfile("dev", lambda: live_update(
    'backend',
    [
      # Sync changes from the local backend directory to the container
      sync('./backend', '/app'),
      # Rebuild the backenjd binary when any Go file changes
      run('go build -o /app/main', trigger=['backend/**/*.go']),
    ]
))

tilt.withProfile("dev", lambda: live_update(
    'frontend',
    [
      # Sync the frontend source files
      sync('./frontend/src', '/app/src'),
      # Run a build command when source files change
      run('npm run build', trigger=['frontend/src/**/*']),
    ]
))
