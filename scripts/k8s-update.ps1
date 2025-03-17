

$env = "dev" # dev, prod

# Builds and pushes the images
docker-compose -f .\docker-compose.base.yml -f .\docker-compose.$env.yml build

# Pushes the images to the registry
if($env -eq "prod") {
   docker-compose -f .\docker-compose.base.yml -f .\docker-compose.$env.yml push
}


# Updates the k8s deployment
kubectl delete -k .\manifests\overlays\$env # Deletes the current deployment
kubectl apply -k .\manifests\overlays\$env # Updates the deployment
kubectl apply -f .\maniefests\common # Updates common resources

# For minikube
minikube tunnel # Exposes the service to the host machine